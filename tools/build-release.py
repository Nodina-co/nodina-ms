"""Build an isolated launch candidate. Never deploy, change DNS or submit URLs."""
import argparse
import hashlib
import json
import os
from pathlib import Path
import re
import secrets
import shutil
import subprocess
from datetime import datetime, timezone
from email.utils import format_datetime
from html import unescape
from html.parser import HTMLParser
from xml.etree import ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
LOCAL = ROOT / 'tools/forms/production/.local'
ORIGIN = 'https://nodina.com'


def require(condition, message):
    if not condition:
        raise ValueError(message)


class Page(HTMLParser):
    def __init__(self, path):
        super().__init__()
        self.path = path
        self.title, self.in_title, self.meta, self.links = '', False, {}, []
        self.analytics, self.in_analytics = '', False
        self.main, self.skip, self.markdown = False, [], []

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == 'title': self.in_title = True
        if tag == 'meta' and attrs.get('name'): self.meta[attrs['name']] = attrs.get('content', '')
        if tag == 'link': self.links.append(attrs)
        if tag == 'script' and attrs.get('id') == 'analytics-config': self.in_analytics = True
        if tag == 'main': self.main = True
        if not self.main: return
        parent_skip = self.skip[-1][1] if self.skip else False
        # Include copy revealed by the page's UI, including the progressive form.
        # Exclude only executable code, decorative content and entered values.
        skip = parent_skip or tag in {'script', 'style', 'svg', 'input', 'textarea'} or attrs.get('aria-hidden') == 'true'
        if tag not in {'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr'}:
            self.skip.append((tag, skip))
        if skip: return
        if tag in {'h1', 'h2', 'h3', 'h4', 'h5', 'h6'}: self.markdown.append('\n\n' + '#' * int(tag[1]) + ' ')
        elif tag in {'p', 'blockquote', 'section', 'div', 'dl', 'table', 'tr'}: self.markdown.append('\n\n')
        elif tag in {'li', 'option'}: self.markdown.append('\n- ')
        elif tag == 'dt': self.markdown.append('\n**')
        elif tag == 'dd': self.markdown.append(': ')
        elif tag == 'br': self.markdown.append('\n')
        elif tag in {'label', 'strong'}: self.markdown.append(' ')
        elif tag == 'img' and attrs.get('alt'): self.markdown.append('\n' + attrs['alt'] + '\n')
        elif tag == 'a': self.markdown.append('[')
        if tag == 'a': self.skip[-1] = (tag, skip, attrs.get('href', ''))

    def handle_endtag(self, tag):
        if tag == 'title': self.in_title = False
        if tag == 'script': self.in_analytics = False
        if not self.main: return
        match = next((i for i in range(len(self.skip)-1, -1, -1) if self.skip[i][0] == tag), None)
        if match is not None:
            frame = self.skip[match]
            del self.skip[match:]
            if not frame[1]:
                if tag == 'a':
                    href = frame[2]
                    if href.startswith('/'): href = ORIGIN + href
                    elif href.startswith('#'): href = ORIGIN + self.path + href
                    self.markdown.append('](' + href + ') ')
                elif tag == 'dt': self.markdown.append('**')
                elif tag in {'label', 'strong', 'button', 'small'}: self.markdown.append(' ')
                elif tag in {'td', 'th'}: self.markdown.append(' | ')
                elif tag in {'p', 'section', 'blockquote', 'table', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'}: self.markdown.append('\n\n')
        if tag == 'main': self.main = False

    def handle_data(self, data):
        if self.in_title: self.title += data
        if self.in_analytics: self.analytics += data
        if self.main and not (self.skip and self.skip[-1][1]): self.markdown.append(data)

    def text(self):
        text = re.sub(r'[ \t]+', ' ', ''.join(self.markdown))
        text = re.sub(r'\n[ \t]+', '\n', text)
        return re.sub(r'\n{3,}', '\n\n', text).strip() + '\n'


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--node', default=os.environ.get('NODINA_NODE', 'node'))
    parser.add_argument('--production', action='store_true', help='Requires recorded launch approval, published rows and public Contact access.')
    args = parser.parse_args()
    plan = json.loads((ROOT / 'content/publication.json').read_text())
    require(plan['origin'] == ORIGIN, 'Unexpected production origin.')
    rows = plan['pages']
    require(len(rows) == 16 and len({r['path'] for r in rows}) == 16, 'Expected exactly sixteen approved localized pages.')
    require(all(r['approvedOn'] and r['status'] in {'ready', 'published'} and re.fullmatch(r'/((fr|en)/)([a-z-]+/)?', r['path']) for r in rows), 'Unapproved or invalid plan row.')
    if args.production:
        require(plan.get('launchApprovedOn') and all(r['status'] == 'published' and r.get('publishedOn') for r in rows), 'Launch approval and published plan rows are required. No build started.')
        deployment = json.loads((LOCAL / 'deployments.json').read_text())
        require(deployment.get('access') == 'Anyone', 'Public Contact access must be recorded after operator authorization.')
    LOCAL.mkdir(mode=0o700, parents=True, exist_ok=True)
    os.chmod(LOCAL, 0o700)
    env = dict(os.environ)
    config = LOCAL / 'site-contact-cutover.prepared.env'
    require(config.is_file(), 'Prepare the private Contact cutover environment first.')
    proposed = dict(line.split('=', 1) for line in config.read_text().splitlines() if line and not line.startswith('#'))
    endpoint = proposed.get('PUBLIC_CONTACT_ENDPOINT', '')
    require(re.fullmatch(r'https://script\.google\.com/(?:macros/s|a/(?:macros/nodina\.com/s|nodina\.com/macros/s))/[A-Za-z0-9_-]+/exec', endpoint), 'Expected the recorded production Contact /exec endpoint.')
    env.update({'PUBLIC_CONTACT_ENDPOINT': endpoint, 'PUBLIC_CONTACT_STORAGE': 'per-request', 'PUBLIC_ANALYTICS_ENABLED': 'false', 'PUBLIC_ANALYTICS_PREVIEW': 'false', 'PUBLIC_SITE_STAGE': 'production' if args.production else 'release-candidate'})
    out = LOCAL / ('public-dist' if args.production else 'release-candidate-dist')
    # Clean only the designated generated directory; never touch dist/ or a checkout.
    if out.exists():
        require(out.is_dir() and not out.is_symlink() and out.parent.resolve() == LOCAL.resolve(), 'Unsafe output directory.')
        shutil.rmtree(out)
    subprocess.run([args.node, str(ROOT / 'node_modules/astro/bin/astro.mjs'), 'build', '--outDir', str(out)], cwd=ROOT, env=env, check=True)
    proposed_dir = LOCAL / ('indexing-public' if args.production else 'indexing-proposed')
    proposed_dir.mkdir(mode=0o700, exist_ok=True)
    pages, hashes = {}, {}
    for row in rows:
        html = out / row['path'].lstrip('/') / 'index.html'
        source = html.read_text()
        page = Page(row['path']); page.feed(source)
        require([a.get('href') for a in page.links if a.get('rel') == 'canonical'] == [ORIGIN + row['path']], 'Wrong canonical: ' + row['path'])
        require('preview-strip' not in source and 'data-legal-draft' not in source, 'Review banner in launch candidate: ' + row['path'])
        require(json.loads(page.analytics).get('enabled') is False, 'Analytics must remain disabled.')
        require(('noindex' not in page.meta.get('robots', '')) if args.production else ('noindex' in page.meta.get('robots', '')), 'Wrong robots state: ' + row['path'])
        require('todo-fact' not in source.lower() and '[unverified]' not in source.lower(), 'Unresolved source marker: ' + row['path'])
        if row['id'] == 'contact': require('data-storage="per-request"' in source and 'receipt_token' in source and endpoint in source, 'Wrong Contact build.')
        pages[row['path']] = page
        markdown = page.text()
        (html.parent / 'index.md').write_text(markdown)
        hashes[row['path']] = hashlib.sha256(html.read_bytes()).hexdigest()
    # Only future canonical production URLs go into the proposal; no preview hosts.
    ns = 'http://www.sitemaps.org/schemas/sitemap/0.9'
    ET.register_namespace('', ns)
    def sitemap(selected):
        root = ET.Element('{' + ns + '}urlset')
        for row in selected:
            url = ET.SubElement(root, '{' + ns + '}url')
            ET.SubElement(url, '{' + ns + '}loc').text = ORIGIN + row['path']
            ET.SubElement(url, '{' + ns + '}lastmod').text = row['modifiedOn']
        return ET.tostring(root, encoding='unicode', xml_declaration=True) + '\n'
    (proposed_dir / 'sitemap.xml').write_text(sitemap(rows))
    (out / 'sitemap.xml').write_text(sitemap([r for r in rows if args.production and r['status'] == 'published']))
    full = '# NODINA\n\n' + '\n\n---\n\n'.join('Canonical: ' + ORIGIN + path + '\nLangue: ' + ('fr' if path.startswith('/fr/') else 'en') + '\n\n' + page.text() for path, page in pages.items())
    (out / 'llms-full.txt').write_text(full)
    lines = ['# NODINA', '']
    for locale in ['fr', 'en']:
        copy = json.loads((ROOT / 'content/site' / (locale + '.json')).read_text())
        lines += ['> ' + unescape(re.sub(r'<[^>]+>', '', copy['canonical'])), '']
    for locale in ['fr', 'en']:
        lines += ['## ' + ('Français' if locale == 'fr' else 'English'), '']
        for row in rows:
            if row['locale'] == locale:
                page = pages[row['path']]
                lines.append('- [' + page.title + '](' + ORIGIN + row['path'] + '): ' + page.meta['description'])
        lines.append('')
    lines += ['## Texte intégral', '', '- [llms-full.txt](' + ORIGIN + '/llms-full.txt): textes des pages FR/EN.', '']
    (out / 'llms.txt').write_text('\n'.join(lines))
    # No post or guide is published. Do not invent news entries for landing pages.
    rss = ET.Element('rss', {'version': '2.0'}); channel = ET.SubElement(rss, 'channel')
    for key, value in {'title':'NODINA', 'link':ORIGIN + '/fr/', 'description':'Articles et guides NODINA. Aucun article ou guide publié au lancement.', 'lastBuildDate':format_datetime(datetime.now(timezone.utc), usegmt=True)}.items(): ET.SubElement(channel, key).text = value
    (out / 'feed.xml').write_text(ET.tostring(rss, encoding='unicode', xml_declaration=True) + '\n')
    robots_public = (ROOT / 'tools/cloudflare/robots.production.proposed.txt').read_text()
    (proposed_dir / 'robots.txt').write_text(robots_public)
    headers = (ROOT / 'public/_headers').read_text()
    if args.production:
        headers = headers.replace('  X-Robots-Tag: noindex, nofollow, noarchive\n', '')
        headers += '\n/404.html\n  X-Robots-Tag: noindex, nofollow, noarchive\n/_astro/*\n  Cache-Control: public, max-age=31536000, immutable\n'
        (out / 'robots.txt').write_text(robots_public)
    headers += '\n/*/index.md\n  Content-Type: text/markdown; charset=utf-8\n/feed.xml\n  Content-Type: application/rss+xml; charset=utf-8\n'
    (out / '_headers').write_text(headers)
    redirects = (ROOT / 'public/_redirects').read_text()
    (out / '_redirects').write_text(redirects)
    # Existing public contact, no invented security mailbox or response promise.
    security = (ROOT / 'tools/cloudflare/security.production.proposed.txt').read_text()
    well_known = out / '.well-known'
    well_known.mkdir(exist_ok=True)
    (well_known / 'security.txt').write_text(security)
    (out / 'security.txt').write_text(security)
    key_file = LOCAL / 'indexnow-key.txt'
    if not key_file.exists(): key_file.write_text(secrets.token_hex(16) + '\n'); os.chmod(key_file, 0o600)
    key = key_file.read_text().strip(); require(re.fullmatch('[a-f0-9]{32}', key), 'Invalid IndexNow ownership key.')
    (out / (key + '.txt')).write_text(key)
    submitted_urls = [ORIGIN + r['path'] for r in rows] + [ORIGIN + '/sitemap.xml', ORIGIN + '/feed.xml', ORIGIN + '/llms.txt']
    payload = {'host':'nodina.com', 'key':key, 'keyLocation':ORIGIN + '/' + key + '.txt', 'urlList':submitted_urls}
    (proposed_dir / 'indexnow.json').write_text(json.dumps(payload, indent=2) + '\n')
    (proposed_dir / 'urls.txt').write_text('\n'.join(ORIGIN + r['path'] for r in rows) + '\n')
    metadata = {'preparedAtUtc':datetime.now(timezone.utc).isoformat(), 'textAndStructureApprovedOn':plan['textAndStructureApprovedOn'], 'stage':env['PUBLIC_SITE_STAGE'], 'pageCount':len(rows), 'launchApprovedOn':plan.get('launchApprovedOn'), 'analyticsEnabled':False, 'contactPublicAccessRecorded':bool(args.production), 'deployed':False, 'submitted':False, 'sitemapInCandidateContainsPublishedRowsOnly':True, 'readyPagesProposedForIndexing':len(rows), 'pageSha256':hashes}
    (LOCAL / 'release-preparation.json').write_text(json.dumps(metadata, indent=2) + '\n'); os.chmod(LOCAL / 'release-preparation.json', 0o600)
    require(not any(part.name.startswith('.') and part.relative_to(out) != Path('.well-known') for part in out.rglob('*')), 'Hidden file in deployable assets.')
    require(not any(p.is_symlink() or p.suffix in {'.map', '.gs', '.py', '.ts', '.astro'} or p.name in {'package.json', 'CNAME'} for p in out.rglob('*') if p.is_file()), 'Internal source in deployable assets.')
    print('Prepared isolated ' + env['PUBLIC_SITE_STAGE'] + ': 16 pages, Contact per-request, Analytics disabled. No deployment or submission. Active dist/ untouched.')
    print('Candidate sitemap includes published rows only; the ready-page sitemap and submission payload remain separate proposals.')


if __name__ == '__main__':
    main()
