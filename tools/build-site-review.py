"""Create a read-only editorial review from the existing local build."""
from html import escape
from html.parser import HTMLParser
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PREVIEW = 'http://127.0.0.1:4184'
PAGES = [
    ('Accueil', 'home', '/fr/', '/en/'),
    ('Sélection', 'selection', '/fr/selection-des-talents/', '/en/vetting/'),
    ('Profils', 'profiles', '/fr/profils/', '/en/engineers/'),
    ('Manifeste', 'manifesto', '/fr/manifeste/', '/en/manifesto/'),
    ('Contact', 'contact', '/fr/contact/', '/en/contact/'),
    ('Mentions légales', 'legal', '/fr/mentions-legales/', '/en/legal-notice/'),
    ('Confidentialité — déjà validée', 'privacy', '/fr/confidentialite/', '/en/privacy/'),
    ('Cookies — déjà validés', 'cookies', '/fr/cookies/', '/en/cookies/'),
]
VOID = {'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr'}
ALLOWED = {'p', 'ul', 'ol', 'li', 'dl', 'dt', 'dd', 'strong', 'em', 'small', 's', 'table', 'thead', 'tbody', 'tr', 'th', 'td', 'caption', 'a', 'br'}
HEADINGS = {f'h{i}': f'h{i+1}' for i in range(1, 6)}


class Copy(HTMLParser):
    def __init__(self, key):
        super().__init__(convert_charrefs=True)
        self.key, self.stack, self.parts = key, [], []
        self.in_main = False

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == 'main':
            self.in_main = True
            self.stack.append((tag, '', False))
            return
        if not self.in_main:
            return
        parent_skip = self.stack[-1][2] if self.stack else False
        skip = parent_skip or tag in {'script', 'style', 'svg'} or 'hidden' in attrs or attrs.get('aria-hidden') == 'true'
        mapped = HEADINGS.get(tag, tag if tag in ALLOWED else 'div' if tag in {'section', 'article', 'div', 'form'} else 'span' if tag in {'span', 'label', 'button', 'summary'} else '')
        if tag in {'input', 'textarea', 'img'}:
            mapped = ''
        elif tag == 'select':
            mapped = 'ul'
        elif tag == 'option':
            mapped = 'li'
        elif tag == 'label':
            mapped = 'p'
        if tag == 'img' and not skip and attrs.get('alt'):
            self.parts.append('<p class="image-label">' + escape(attrs['alt']) + '</p>')
        if not skip and mapped:
            kept = []
            if attrs.get('id'):
                kept.append(('id', self.key + '-' + attrs['id']))
            if tag == 'a':
                href = attrs.get('href', '')
                if href.startswith('#'):
                    href = '#' + self.key + '-' + href[1:]
                elif href.startswith('/'):
                    href = PREVIEW + href
                if href:
                    kept.append(('href', href))
                    if not href.startswith('#'):
                        kept.extend([('target', '_blank'), ('rel', 'noopener')])
            if tag == 'th' and attrs.get('scope'):
                kept.append(('scope', attrs['scope']))
            self.parts.append('<' + mapped + ''.join(' ' + k + '="' + escape(v, quote=True) + '"' for k, v in kept) + '>')
        if tag not in VOID:
            self.stack.append((tag, mapped, skip))

    def handle_endtag(self, tag):
        if not self.in_main:
            return
        if tag == 'main':
            self.in_main = False
            self.stack = []
            return
        if self.stack and self.stack[-1][0] == tag:
            _, mapped, skip = self.stack.pop()
            if mapped and not skip:
                self.parts.append('</' + mapped + '>')

    def handle_data(self, text):
        if self.in_main and not (self.stack[-1][2] if self.stack else False):
            self.parts.append(escape(text))


def build():
    cards, links = [], []
    for title, key, fr, en in PAGES:
        links.append('<li><a href="#review-' + key + '">' + escape(title) + '</a></li>')
        views = []
        for locale, route in [('fr', fr), ('en', en)]:
            parser = Copy(key + '-' + locale)
            parser.feed((ROOT / 'dist' / route.lstrip('/') / 'index.html').read_text())
            views.append('<details class="language"><summary>' + locale.upper() + ' — ' + escape(route) + '</summary><p><a href="' + PREVIEW + route + '" target="_blank" rel="noopener">Ouvrir la page dans l’aperçu local</a></p><article lang="' + locale + '" class="copy">' + ''.join(parser.parts) + '</article></details>')
        cards.append('<section class="review-page" id="review-' + key + '"><h2>' + escape(title) + '</h2>' + ''.join(views) + '</section>')
    css = 'body{font-family:system-ui,sans-serif;line-height:1.65;color:#20252c;background:#f7f8fb;margin:0}main{max-width:1100px;margin:auto;padding:32px 24px 80px}h1{font-size:clamp(28px,4vw,42px);line-height:1.2}h2,h3,h4,h5,h6{line-height:1.3}a{color:#173c9c;text-underline-offset:3px}nav ul{display:flex;flex-wrap:wrap;gap:8px 24px;padding-left:20px}.notice{padding:20px;background:#eef1f8;border-left:3px solid #2448b7}.review-page{background:white;border:1px solid #dce0e9;border-radius:12px;padding:24px;margin:24px 0;scroll-margin-top:16px}.language{border-top:1px solid #ddd;padding:12px 0}.language summary{cursor:pointer;font-weight:600;min-height:44px;display:list-item;align-content:center}.copy{max-width:900px}.copy p{margin:12px 0}.copy h2{margin-top:28px}.copy h3{margin-top:32px}.copy dl{margin:18px 0}.copy dt{font-weight:600}.copy dd{margin:4px 0 12px 20px}.copy table{border-collapse:collapse;display:block;overflow-x:auto}.copy th,.copy td{border:1px solid #ddd;padding:10px;text-align:left;min-width:150px}.copy small,.image-label{color:#545e6c}.copy span+span:before{content:" "}'
    html = '<!doctype html><html lang="fr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow,noarchive"><title>NODINA — revue finale FR/EN — 8 octobre 2026</title><style>' + css + '</style></head><body><main><h1>NODINA — revue finale FR/EN</h1><p>Préparée le 8 octobre 2026 · 8 pages en deux langues.</p><div class="notice"><p>Ce dossier regroupe les textes des pages du build actuel. Dépliez FR ou EN pour les lire. Les liens vers l’aperçu local permettent de voir la mise en page réelle. Les images et interactions ne sont pas reproduites ici ; aucun formulaire de ce dossier ne transmet de demande.</p><p>Textes et structure des seize pages FR/EN validés par JD le 9 octobre 2026. Confidentialité et cookies avaient déjà été validés le 7 octobre. Le téléphone professionnel de NODINA est différé hors de cette version. Le formulaire du site utilise encore le service actuel ; le nouveau service privé est préparé séparément.</p><p>La validation porte sur les textes et la structure. Elle permet de préparer la bascule ; le lancement public et l’activation Analytics feront l’objet d’un accord distinct.</p></div><nav aria-label="Pages à relire"><ul>' + ''.join(links) + '</ul></nav>' + ''.join(cards) + '</main></body></html>'
    output = ROOT / 'reports/site-final-review-20261008.html'
    output.write_text(html)
    print('Review generated: 16 localized pages, no scripts, forms or embedded images.')


if __name__ == '__main__':
    build()
