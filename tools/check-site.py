"""Audit the local, unpublished build. Does not certify production SEO or legal copy."""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit, unquote
import json
import sys

ROOT = Path(__file__).resolve().parents[1] / "dist"
ROUTES = {
    "fr": ["/fr/", "/fr/selection-des-talents/", "/fr/profils/", "/fr/manifeste/", "/fr/contact/", "/fr/confidentialite/", "/fr/cookies/"],
    "en": ["/en/", "/en/vetting/", "/en/engineers/", "/en/manifesto/", "/en/contact/", "/en/privacy/", "/en/cookies/"],
}


class Page(HTMLParser):
    def __init__(self, text):
        super().__init__()
        self.elements, self.ids, self.duplicates, self.texts = [], set(), [], []
        self.in_title, self.title = False, ""
        self.in_json, self.json = False, ""
        self.feed(text)

    def handle_starttag(self, tag, attrs):
        attr = dict(attrs)
        self.elements.append((tag, attr))
        if "id" in attr:
            if attr["id"] in self.ids:
                self.duplicates.append(attr["id"])
            self.ids.add(attr["id"])
        self.in_title = self.in_title or tag == "title"
        if tag == "script" and attr.get("type") == "application/ld+json":
            self.in_json = True

    def handle_endtag(self, tag):
        if tag == "title": self.in_title = False
        if tag == "script": self.in_json = False

    def handle_data(self, data):
        if self.in_title: self.title += data
        if self.in_json: self.json += data
        self.texts.append(data)

    def attrs(self, tag):
        return [attrs for name, attrs in self.elements if name == tag]


def check():
    errors = []
    pages = {route: Page((ROOT / route.lstrip('/') / 'index.html').read_text()) for routes in ROUTES.values() for route in routes}
    titles, descriptions = set(), set()
    for locale, routes in ROUTES.items():
        for index, route in enumerate(routes):
            page = pages[route]
            def require(condition, message):
                if not condition: errors.append(f"{route}: {message}")
            require(len(page.attrs('h1')) == 1, 'expected exactly one H1')
            require(len(page.attrs('main')) == 1, 'expected exactly one main')
            require(not page.duplicates, f'duplicate IDs: {page.duplicates}')
            require(page.attrs('html')[0].get('lang') == ('fr-FR' if locale == 'fr' else 'en-US'), 'wrong language')
            require(page.title and page.title not in titles, 'missing or duplicate title')
            titles.add(page.title)
            meta = {x.get('name', x.get('property')): x.get('content') for x in page.attrs('meta')}
            require('noindex' in meta.get('robots', ''), 'draft must remain noindex')
            require(meta.get('description') and meta['description'] not in descriptions, 'missing or duplicate description')
            descriptions.add(meta.get('description'))
            canonical = [a.get('href') for a in page.attrs('link') if a.get('rel') == 'canonical']
            require(canonical == ['https://nodina.com' + route], 'wrong canonical')
            require(meta.get('og:url') == canonical[0], 'OG URL differs from canonical')
            alternates = {a.get('hreflang'): a.get('href') for a in page.attrs('link') if a.get('hreflang')}
            expected = {'fr-FR': 'https://nodina.com' + ROUTES['fr'][index], 'en-US': 'https://nodina.com' + ROUTES['en'][index], 'x-default': 'https://nodina.com' + ROUTES['fr'][index]}
            require(alternates == expected, 'language alternates do not match route map')
            require(bool(json.loads(page.json)['@graph']), 'missing structured data')
            scripts = page.attrs('script')
            require(sum(a.get('id') == 'analytics-config' and a.get('type') == 'application/json' for a in scripts) == 1, 'expected one analytics configuration')
            require('analytics-consent' in page.ids, 'missing consent panel')
            require(any('data-analytics-preferences' in a and 'hidden' in a for a in page.attrs('button')), 'measurement preferences must start hidden')
            require({a.get('data-analytics-choice') for a in page.attrs('button') if 'data-analytics-choice' in a} == {'denied','granted'}, 'missing accept or decline choice')
            require(not any(urlsplit(a.get('src','')).hostname in ['www.googletagmanager.com','www.google-analytics.com'] for a in scripts), 'Google tag must not be preloaded before consent')
            for policy in ROUTES[locale][5:]:
                require(any(a.get('href') == policy for a in page.attrs('a')), f'missing policy link: {policy}')
            if index >= 5:
                require(any('data-legal-draft' in a for a in page.attrs('aside')), 'unapproved policy must retain its draft notice')
            for tag, attr in page.elements:
                if tag == 'img':
                    require(all(key in attr for key in ['alt', 'width', 'height']), 'image lacks dimensions or alt')
                for key in ['href', 'src']:
                    href = attr.get(key, '')
                    if not href or not href.startswith(('/', '#')): continue
                    url = urlsplit(href)
                    target = url.path or route
                    if target in pages:
                        if url.fragment:
                            require(unquote(url.fragment) in pages[target].ids, f'broken anchor: {href}')
                    else:
                        require((ROOT / target.lstrip('/')).is_file(), f'missing local resource: {href}')
                for key in ['aria-controls', 'aria-labelledby', 'aria-describedby']:
                    for ident in attr.get(key, '').split():
                        require(ident in page.ids, f'{key} references missing {ident}')
            text = ' '.join(page.texts)
            require(not any(term.casefold() in text.casefold() for term in ['CheckIA', 'Angels Bay Tech', 'TitanOne', 'ReadyPark', 'moins d’une semaine', 'less than a week']), 'withdrawn claim or excluded name')
            if index == 2:
                statuses = [a['data-profile-status'] for _, a in page.elements if 'data-profile-status' in a]
                require(statuses.count('assigned') == 7 and statuses.count('available') == 2, 'illustrative profile catalog differs from approved 7/2')
            if index == 4:
                form = page.attrs('form')[0]
                require(form.get('method') == 'post', 'form must use POST')
                mode = form.get('data-storage')
                require(mode in ['legacy', 'per-request'], 'unknown contact storage profile')
                receipt = [a for a in page.attrs('input') if a.get('name') == 'receipt_token']
                if mode == 'per-request':
                    require('hidden' in form, 'signed form must start hidden without JavaScript')
                    require(len(receipt) == 1 and receipt[0].get('value') == '', 'signed receipt must be issued by the server, never the static build')
                    if form.get('data-ready') == 'true':
                        require(any(a.get('href') == form.get('action', '') + '?locale=' + locale for a in page.attrs('a')), 'missing localized server form for visitors without JavaScript')
                else:
                    require('hidden' not in form and not receipt, 'legacy form must retain its direct POST fallback')
                require(any(a.get('name') == 'consent' and 'required' in a and 'checked' not in a for a in page.attrs('input')), 'consent must be explicit')
                if form.get('data-ready') == 'false':
                    require(any(a.get('type') == 'submit' and 'disabled' in a for a in page.attrs('button')), 'unconfigured form must remain disabled')
    for private in ['content', 'research', 'reports', 'history', 'tools', 'editorial.json', 'copy.json', 'feedback.json', 'review.html']:
        if (ROOT / private).exists(): errors.append(f'Internal material leaked into build: {private}')
    if errors:
        print('\n'.join(errors))
        return 1
    print(f'PASS: {len(pages)} localized draft pages, metadata, links, anchors, assets, consent and internal-file exclusion.')
    return 0


if __name__ == '__main__':
    sys.exit(check())
