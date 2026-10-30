"""Audit the local, unpublished build. Does not certify production SEO or legal copy."""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit, unquote
import json
import sys

ROOT = Path(__file__).resolve().parents[1] / "dist"
ROUTES = {
    "fr": ["/fr/", "/fr/selection-des-talents/", "/fr/manifeste/", "/fr/contact/", "/fr/confidentialite/", "/fr/cookies/", "/fr/mentions-legales/", "/fr/solutions-ia-sur-mesure/", "/fr/equipes-ai-native/", "/fr/blog/"],
    "en": ["/en/", "/en/vetting/", "/en/manifesto/", "/en/contact/", "/en/privacy/", "/en/cookies/", "/en/legal-notice/", "/en/custom-ai-solutions/", "/en/ai-native-teams/", "/en/blog/"],
}
# Blog posts, paired FR/EN by translation; a post without a translation would list its own path twice.
POSTS = [
    ("/fr/blog/premier-processus-a-automatiser/", "/en/blog/first-process-to-automate/"),
    ("/fr/blog/poc-ia-production/", "/en/blog/why-ai-pilots-never-reach-production/"),
]
HIDDEN_ROUTES = {"/fr/profils/", "/en/engineers/"}


class Page(HTMLParser):
    def __init__(self, text):
        super().__init__()
        self.elements, self.ids, self.duplicates, self.texts = [], set(), [], []
        self.in_title, self.title = False, ""
        self.in_json, self.json = False, ""
        self.in_profile, self.profile_images = False, 0
        self.profile_links = []
        self.profile_texts = []
        self.feed(text)

    def handle_starttag(self, tag, attrs):
        attr = dict(attrs)
        self.elements.append((tag, attr))
        if tag == 'article' and 'profile-card' in attr.get('class', '').split():
            self.in_profile = True
        if tag == 'a' and self.in_profile:
            self.profile_links.append(attr.get('href', ''))
        if tag == 'img' and self.in_profile:
            self.profile_images += 1
        if "id" in attr:
            if attr["id"] in self.ids:
                self.duplicates.append(attr["id"])
            self.ids.add(attr["id"])
        self.in_title = self.in_title or tag == "title"
        if tag == "script" and attr.get("type") == "application/ld+json":
            self.in_json = True

    def handle_endtag(self, tag):
        if tag == 'article': self.in_profile = False
        if tag == "title": self.in_title = False
        if tag == "script": self.in_json = False

    def handle_data(self, data):
        if self.in_profile: self.profile_texts.append(data)
        if self.in_title: self.title += data
        if self.in_json: self.json += data
        self.texts.append(data)

    def attrs(self, tag):
        return [attrs for name, attrs in self.elements if name == tag]


def check():
    errors = []
    pairs = list(zip(ROUTES['fr'], ROUTES['en'])) + POSTS
    pages = {route: Page((ROOT / route.lstrip('/') / 'index.html').read_text()) for pair in pairs for route in pair}
    titles, descriptions = set(), set()
    for locale, column in [('fr', 0), ('en', 1)]:
        for index, pair in enumerate(pairs):
            route = pair[column]
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
            og = meta.get('og:image', '')
            require(og == 'https://nodina.com/assets/og/' + route.strip('/').replace('/', '-') + '.png' and (ROOT / og.replace('https://nodina.com/', '')).is_file(), 'missing or wrong OG image')
            require(meta.get('og:image:width') == '1200' and meta.get('og:image:height') == '630', 'OG image size must be declared 1200x630')
            alternates = {a.get('hreflang'): a.get('href') for a in page.attrs('link') if a.get('hreflang')}
            expected = {'fr-FR': 'https://nodina.com' + pair[0], 'en-US': 'https://nodina.com' + pair[1], 'x-default': 'https://nodina.com/'}
            require(alternates == expected, 'language alternates do not match route map')
            require(bool(json.loads(page.json)['@graph']), 'missing structured data')
            scripts = page.attrs('script')
            require(sum(a.get('id') == 'analytics-config' and a.get('type') == 'application/json' for a in scripts) == 1, 'expected one analytics configuration')
            require('analytics-consent' in page.ids, 'missing consent panel')
            require(any('data-analytics-preferences' in a and 'hidden' in a for a in page.attrs('button')), 'measurement preferences must start hidden')
            require({a.get('data-analytics-choice') for a in page.attrs('button') if 'data-analytics-choice' in a} == {'denied','granted'}, 'missing accept or decline choice')
            require(not any(urlsplit(a.get('src','')).hostname in ['www.googletagmanager.com','www.google-analytics.com'] for a in scripts), 'Google tag must not be preloaded before consent')
            for policy in ROUTES[locale][4:7]:
                require(any(a.get('href') == policy for a in page.attrs('a')), f'missing policy link: {policy}')
            if 4 <= index <= 6:
                require(any('data-legal-draft' in a for a in page.attrs('aside')), 'unapproved policy must retain its draft notice')
            for tag, attr in page.elements:
                if tag == 'img':
                    require(all(key in attr for key in ['alt', 'width', 'height']), 'image lacks dimensions or alt')
                for key in ['href', 'src']:
                    href = attr.get(key, '')
                    require(urlsplit(href).path.rstrip('/') + '/' not in HIDDEN_ROUTES, f'link to hidden profile catalog: {href}')
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
            if index == 1:
                # Value: protects=withdrawn evaluation stays absent; fails_when=sample is restored; why_new=profile checks do not cover the sample; seam=none
                require('evaluation-title' not in page.ids and not any('criterion-explorer' in a.get('class', '').split() for _, a in page.elements), 'withdrawn evaluation example must remain absent')
                cards = [a for a in page.attrs('article') if 'profile-card' in a.get('class', '').split()]
                require(len(cards) == 4, 'selection must show the four approved profiles')
                # Value: protects=profile CTAs open localized Teams contact; fails_when=CTA targets another valid page; why_new=generic links only prove existence; seam=none
                require(page.profile_links == [f'/{locale}/contact/?offer=teams'] * 4, 'profile CTAs must lead to localized Teams contact')
                require(page.profile_images == 0, 'anonymous profiles must not have photos')
                require(not any('data-profile-status' in a for a in cards), 'unconfirmed profile availability')
                profile_text = ' '.join(page.profile_texts).casefold()
                require(not any(name in profile_text for name in ['panos', 'gergos', 'tristan', 'ronan', 'beaufort', 'charalampos', 'kemalidis']), 'profile identity must remain anonymous')
            if route == f'/{locale}/contact/':
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
    for route in HIDDEN_ROUTES:
        if (ROOT / route.lstrip('/')).exists(): errors.append(f'Hidden profile catalog still generated: {route}')
    for private in ['content', 'research', 'reports', 'history', 'tools', 'editorial.json', 'copy.json', 'feedback.json', 'review.html']:
        if (ROOT / private).exists(): errors.append(f'Internal material leaked into build: {private}')
    if errors:
        print('\n'.join(errors))
        return 1
    print(f'PASS: {len(pages)} localized draft pages (blog included), metadata, links, anchors, assets, consent and internal-file exclusion.')
    return 0


if __name__ == '__main__':
    sys.exit(check())
