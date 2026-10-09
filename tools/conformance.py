#!/usr/bin/env python3
"""Audit NODINA's launch artifacts and remaining Prometheus work; never deploy or submit."""
import argparse
import csv
import json
import re
import subprocess
import tempfile
from concurrent.futures import ThreadPoolExecutor
from datetime import datetime, timezone
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit, unquote
from xml.etree import ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / 'tools/forms/production/.local/public-dist'
ORIGIN = 'https://nodina.com'


class Page(HTMLParser):
    def __init__(self, text):
        super().__init__()
        self.elements, self.parts, self.ids, self.duplicates = [], {}, set(), []
        self.capture = None
        self.feed(text)

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        self.elements.append((tag, attrs))
        if 'id' in attrs:
            if attrs['id'] in self.ids: self.duplicates.append(attrs['id'])
            self.ids.add(attrs['id'])
        if tag == 'title': self.capture = 'title'
        if tag == 'script':
            self.capture = attrs.get('id') if attrs.get('id') == 'analytics-config' else ('jsonld' if attrs.get('type') == 'application/ld+json' else None)

    def handle_data(self, text):
        if self.capture: self.parts[self.capture] = self.parts.get(self.capture, '') + text

    def handle_endtag(self, tag):
        if tag in {'title', 'script'}: self.capture = None

    def attrs(self, tag):
        return [a for t, a in self.elements if t == tag]


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--live', action='store_true', help='Bounded, read-only HTTPS GETs: pages, discovery, redirects and crawler user agents. No form submission.')
    parser.add_argument('--report', type=Path, help='Save a Markdown audit; no private analytics or request data included.')
    args = parser.parse_args()
    checks = []
    def result(ok, name, detail, pending=False):
        checks.append(('PASS' if ok else ('OPEN' if pending else 'FAIL'), name, detail))

    essential = ['content/goals.md', 'content/positioning.md', 'content/analytics.md', 'content/product-truth.md', 'content/claims.csv', 'content/voice.md', 'content/design.md', 'content/PLAN.md', 'content/decisions.md', 'research/discovery.md', 'terraform.md', 'reporting-reference.md', 'SUMMARY.md', 'AGENTS.md', 'CLAUDE.md', 'content/editorial-rules.md']
    for name in essential:
        p = ROOT / name
        result(p.is_file() and p.stat().st_size > 0, name, 'Présent et non vide.' if p.is_file() else 'Absent ; guide définitif différé avant conformité complète.', pending=name in {'AGENTS.md', 'CLAUDE.md'})
    for name in ['research/keywords.csv', 'research/clusters.md', 'research/research-report.md', 'content/rubric.md', 'research/import-inventory.md', 'research/plan-review.md']:
        p = ROOT / name
        result(p.is_file() and p.stat().st_size > 0, name, 'Présent ; contenu à examiner.' if p.is_file() else 'Absent ; recherche ou revue éditoriale non terminée.', pending=True)
    for name in ['check-seo.py', 'claims.py', 'plan.py', 'citations.py', 'competitor-watch.py', 'robots-check.py', 'linkcheck.py', 'indexing-pack.py', 'new-page.py', 'build-all.py', 'build-sitemap.py', 'build-feed.py', 'build-llms.py', 'social-images.py', 'crawl-audit.py', 'links-suggest.py', 'search-log.py', 'indexnow.sh']:
        result((ROOT / 'tools' / name).is_file(), 'tools/' + name, 'Présent ; portée à examiner.' if (ROOT / 'tools' / name).is_file() else 'Outil de la fondation absent ; ne pas le déclarer exécuté.', pending=True)
    plan = json.loads((ROOT / 'content/publication.json').read_text())
    rows = plan['pages']
    paths = {r['path'] for r in rows}
    result(len(paths) == len(rows) == 16 and all(r['status'] == 'published' and r.get('approvedOn') and r.get('publishedOn') for r in rows) and bool(plan.get('launchApprovedOn')), 'Plan de publication', 'Seize routes uniques, états et dates d’accord/publication enregistrés.')
    claims = list(csv.DictReader((ROOT / 'content/claims.csv').open(newline='')))
    invalid = [r.get('id', '?') for r in claims if not all(r.get(k) for k in ['id', 'claim', 'source_url', 'checked_on'])]
    result(not invalid and bool(claims), 'Registre de claims', 'Présence des identifiants, sources et dates ; ne prouve pas la validité de chaque assertion. ' + ', '.join(invalid))
    result(PUBLIC.is_dir(), 'Paquet public conservé', 'Audit du paquet public existant, sans reconstruction ni déploiement.')
    if PUBLIC.is_dir():
        pages, titles, descriptions = {}, set(), set()
        for row in rows:
            route = row['path']
            p = PUBLIC / route.strip('/') / 'index.html'
            errors = []
            if not p.is_file():
                result(False, route, 'HTML absent du paquet public.'); continue
            raw = p.read_text()
            page = Page(raw); pages[route] = page
            meta = {a.get('name', a.get('property')): a.get('content', '') for a in page.attrs('meta')}
            canonical = [a.get('href') for a in page.attrs('link') if a.get('rel') == 'canonical']
            def require(ok, why):
                if not ok: errors.append(why)
            require(len(page.attrs('h1')) == 1 and len(page.attrs('main')) == 1, 'H1/main')
            require(not page.duplicates, 'IDs dupliqués')
            require(canonical == [ORIGIN + route] and meta.get('og:url') == ORIGIN + route, 'canonical/OG URL')
            require('noindex' not in meta.get('robots', '').lower(), 'noindex public')
            require(page.parts.get('title') and page.parts['title'] not in titles, 'titre absent/dupliqué')
            require(meta.get('description') and meta['description'] not in descriptions, 'description absente/dupliquée')
            titles.add(page.parts.get('title')); descriptions.add(meta.get('description'))
            require(not re.search(r'TODO-FACT:|\[unverified\]', raw, re.I), 'marqueur de fait manquant')
            require(all({'alt', 'width', 'height'} <= set(a) for a in page.attrs('img')), 'image sans alt/dimensions')
            require(sum(a.get('id') == 'analytics-config' for a in page.attrs('script')) == 1, 'configuration Analytics multiple/absente')
            require(not any(urlsplit(a.get('src', '')).hostname in {'www.googletagmanager.com', 'www.google-analytics.com'} for a in page.attrs('script')), 'Google préchargé avant consentement')
            require('analytics-consent' in page.ids, 'panneau de consentement absent')
            try:
                config = json.loads(page.parts.get('analytics-config', '{}'))
                scripts = [PUBLIC / a['src'].lstrip('/') for a in page.attrs('script') if a.get('src', '').startswith('/_astro/')]
                require(config.get('enabled') is True and config.get('preview') is False and any(p.is_file() and 'G-J8NV7Z1HMX' in p.read_text() for p in scripts), 'configuration GA4 et identifiant dans le module référencé')
                require(bool(json.loads(page.parts.get('jsonld', '{}')).get('@graph')), 'JSON-LD absent')
            except (ValueError, TypeError): errors.append('JSON invalide')
            require((p.parent / 'index.md').is_file(), 'version Markdown absente')
            result(not errors, route, '; '.join(errors) if errors else 'Métadonnées, H1, JSON-LD, images, consentement et version Markdown contrôlés.')
        link_errors = []
        for route, page in pages.items():
            for tag, attr in page.elements:
                for key in ('href', 'src'):
                    href = attr.get(key, '')
                    if not href.startswith(('/', '#')) or href.startswith('//'): continue
                    url = urlsplit(href); target = unquote(url.path) or route
                    if target in pages:
                        if url.fragment and unquote(url.fragment) not in pages[target].ids: link_errors.append(route + ': ' + href)
                    elif target == '/':
                        if not (PUBLIC / 'index.html').is_file(): link_errors.append(route + ': /')
                    elif not (PUBLIC / target.lstrip('/')).is_file(): link_errors.append(route + ': ' + href)
        result(not link_errors, 'Liens et ressources internes', '; '.join(link_errors) or 'Cibles et ancres contrôlées dans le paquet public.')
        for name in ['sitemap.xml', 'feed.xml', 'llms.txt', 'llms-full.txt', 'robots.txt', 'security.txt', '.well-known/security.txt']:
            result((PUBLIC / name).is_file() and (PUBLIC / name).stat().st_size > 0, name, 'Fichier de découverte présent et non vide.')
        sitemap = ET.parse(PUBLIC / 'sitemap.xml')
        locs = {e.text for e in sitemap.findall('.//{http://www.sitemaps.org/schemas/sitemap/0.9}loc')}
        result(locs == {ORIGIN + p for p in paths}, 'Sitemap et plan', 'Ensemble exact des seize pages publiées.')
        feed = ET.parse(PUBLIC / 'feed.xml')
        result(feed.getroot().tag == 'rss', 'Flux RSS', f'XML valide, {len(feed.findall(".//item"))} article ; blog non lancé.')
        result(not any((PUBLIC / p).exists() for p in ['content', 'research', 'reports', 'tools', 'history', 'review.html', 'editorial.json']), 'Exclusion des fichiers internes', 'Documents et sources internes absents du paquet public.')

        if args.live:
            def fetch(task):
                url, agent, expected, local = task
                with tempfile.TemporaryDirectory(prefix='nodina-audit-') as folder:
                    body = Path(folder) / 'body'; headers = Path(folder) / 'headers'
                    proc = subprocess.run(['curl', '--max-time', '25', '--silent', '--show-error', '--user-agent', agent, '-D', str(headers), '-o', str(body), '-w', '%{http_code}', url], capture_output=True, text=True)
                    status = proc.stdout.strip()
                    ok = proc.returncode == 0 and status == str(expected)
                    detail = f'GET HTTP {status or "indisponible"}; attendu {expected}.'
                    if ok and local:
                        same = body.read_bytes() == local.read_bytes()
                        ok = same
                        detail += ' Contenu identique au paquet conservé.' if same else ' Contenu différent du paquet conservé.'
                    header_text = headers.read_text() if headers.is_file() else ''
                    if ok and expected == 200 and local and local.suffix == '.html' and re.search(r'^x-robots-tag:.*noindex', header_text, re.I | re.M): ok = False; detail += ' En-tête noindex.'
                    if expected == 301:
                        location = re.search(r'^location:\s*(.+)', header_text, re.I | re.M)
                        target = location.group(1).strip() if location else ''
                        expected_target = 'https://nodina.com' + urlsplit(url).path + ('?' + urlsplit(url).query if urlsplit(url).query else '')
                        ok = ok and target == expected_target
                        detail += ' Location: ' + (target or 'absent') + '; cible HTTPS, chemin et paramètres contrôlés.'
                    return ok, url + (f' [{agent}]' if agent != 'Mozilla/5.0' else ''), detail
            tasks = [(ORIGIN + p, 'Mozilla/5.0', 200, PUBLIC / p.strip('/') / 'index.html') for p in sorted(paths)]
            tasks += [(ORIGIN + '/' + p, 'Mozilla/5.0', 200, PUBLIC / p) for p in ['sitemap.xml', 'feed.xml', 'llms.txt', 'llms-full.txt', 'robots.txt', 'security.txt', '.well-known/security.txt']]
            tasks += [('http://nodina.com/fr/', 'Mozilla/5.0', 301, None), ('https://www.nodina.com/fr/?audit=conformance', 'Mozilla/5.0', 301, None), (ORIGIN + '/nodina-audit-missing-page/', 'Mozilla/5.0', 404, None)]
            bots = re.findall(r'^User-agent:\s*(.+)', (PUBLIC / 'robots.txt').read_text(), re.M)
            tasks += [(ORIGIN + '/fr/', b.strip(), 200, None) for b in bots if b.strip() != '*']
            with ThreadPoolExecutor(max_workers=4) as pool:
                for ok, name, detail in pool.map(fetch, tasks): result(ok, name, detail)
            result(False, 'Portée des lectures crawler', 'User agents déclarés testés ; ne prouve pas un accès depuis les IP des moteurs ni une indexation.', pending=True)
    for name, detail in [
        ('Mesure réelle', 'Vue de page GA4 confirmée ; trois interactions et entonnoir complet non revérifiés, essais clôturés par JD.'),
        ('Premier lundi Reporting', 'Collecteur installé ; première exécution automatique attendue le 12 octobre, pas encore observée.'),
        ('Recherche et contenus', 'Baselines SERP/IA partielles, mots-clés/clusters/briefs/articles/blog et distribution à poursuivre.'),
        ('CI et surveillance', 'Workflow de contrôle local sur PR et lancement manuel ; contrôle production quotidien et Lighthouse/axe non installés.'),
        ('Qualification', 'Demande reçue distincte de l’opportunité qualifiée ; registre commercial et dédoublonnage à finaliser.'),
        ('Approbations et preuves', 'Revue humaine requise : décisions datées, profils déclarés réels, Select méthode utilisable, notices approuvées ; aucune certification automatique de toutes les assertions.'),
    ]: result(False, name, detail, pending=True)
    failed = sum(s == 'FAIL' for s, _, _ in checks); opened = sum(s == 'OPEN' for s, _, _ in checks)
    report = ['# Contrôle final NODINA / conformité Prometheus', '', 'Lecture UTC : ' + datetime.now(timezone.utc).isoformat(), '', '**Statut : ' + ('écarts techniques détectés' if failed else 'contrôles mécaniques réussis') + ' ; conformité intégrale Prometheus non acquise.**', '', f'{sum(s == "PASS" for s, _, _ in checks)} PASS, {failed} FAIL, {opened} OPEN.', '', 'Paquet conservé, lecture seule ; aucune reconstruction, soumission, demande Contact ou recette navigateur. Aucun chiffre analytique privé exporté.', '', '| État | Point | Résultat / limite |', '|---|---|---|']
    report += [f'| {s} | {n.replace("|", "/")} | {d.replace("|", "/")} |' for s, n, d in checks]
    report += ['', 'Les PASS mécaniques ne certifient ni droit applicable, ni vérité commerciale, ni indexation, ni réception de formulaire. OPEN reste du travail ou une vérification différée, jamais un résultat acquis.', '']
    if args.report: args.report.write_text('\n'.join(report))
    print(f'{sum(s == "PASS" for s, _, _ in checks)} PASS, {failed} FAIL, {opened} OPEN; conformité intégrale non acquise.')
    for s, n, d in checks:
        if s == 'FAIL': print(f'FAIL {n}: {d}')
    return 1 if failed or opened else 0


if __name__ == '__main__':
    raise SystemExit(main())
