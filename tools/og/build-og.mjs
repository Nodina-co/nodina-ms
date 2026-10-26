// Generates one 1200x630 Open Graph image per page and blog post, in both languages,
// from the site's own copy: the "Statement" layout on the dark palette (ink ground, blue label).
// Runs before every build. Output: public/assets/og/<locale>[-<path>].png
// Needs a Chrome/Chromium binary: set OG_CHROME to override the default macOS path.
import { readFileSync, readdirSync, mkdirSync, existsSync, rmSync, writeFileSync, copyFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { resolve, join } from 'node:path';
import { tmpdir } from 'node:os';

const ROOT = resolve(new URL('../..', import.meta.url).pathname);
const OUT = join(ROOT, 'public/assets/og');
const CHROME = process.env.OG_CHROME || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const read = p => JSON.parse(readFileSync(join(ROOT, p), 'utf8'));
const strip = s => String(s).replace(/<br\s*\/?>/g, ' ').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
const short = (s, max = 150) => { s = strip(s); if (s.length <= max) return s; const cut = s.slice(0, max); const end = Math.max(cut.lastIndexOf('. '), cut.lastIndexOf(', ')); return (end > 40 ? cut.slice(0, end) : cut.slice(0, cut.lastIndexOf(' '))).replace(/[,.]$/, '') + (end > 40 && cut[end] === '.' ? '.' : '…'); };
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export const slugFor = path => path.replace(/^\/|\/$/g, '').replace(/\//g, '-');

export function pages() {
  const list = [];
  for (const l of ['fr', 'en']) {
    const o = read(`content/site/offers.${l}.json`);
    const c = read(`content/site/${l}.json`);
    const s = c.select;
    const paths = l === 'fr'
      ? { home: '/fr/', vetting: '/fr/selection-des-talents/', profiles: '/fr/profils/', manifesto: '/fr/manifeste/', contact: '/fr/contact/', privacy: '/fr/confidentialite/', cookies: '/fr/cookies/', legal: '/fr/mentions-legales/', systems: '/fr/solutions-ia-sur-mesure/', teams: '/fr/equipes-ai-native/', blog: '/fr/blog/' }
      : { home: '/en/', vetting: '/en/vetting/', profiles: '/en/engineers/', manifesto: '/en/manifesto/', contact: '/en/contact/', privacy: '/en/privacy/', cookies: '/en/cookies/', legal: '/en/legal-notice/', systems: '/en/custom-ai-solutions/', teams: '/en/ai-native-teams/', blog: '/en/blog/' };
    const legalLabel = l === 'fr' ? 'Informations légales' : 'Legal';
    const add = (id, label, title, subtitle) => list.push({ locale: l, path: paths[id], label: strip(label), title: strip(title), subtitle: short(subtitle) });
    add('home', o.home.label, o.home.heading, o.home.description);
    add('systems', o.systems.label, o.systems.heading, o.systems.description);
    add('teams', o.teams.label, o.teams.heading, o.teams.description);
    add('blog', o.blog.label, o.blog.heading, o.blog.description);
    add('vetting', s.eyebrow, s.hero_title, s.hero_lead);
    add('profiles', 'AI-native Teams · ' + s.profiles_nav, s.profiles_h1, s.profiles_page_lead);
    add('manifesto', s.manifesto_eyebrow, s.manifesto_h1, s.manifesto_lead);
    add('contact', 'Contact', c.contact_h1, c.contact_lead);
    add('privacy', legalLabel, l === 'fr' ? 'Confidentialité' : 'Privacy', l === 'fr' ? 'Demandes de contact, destinataires, durées et vos droits.' : 'Contact inquiries, recipients, retention and your rights.');
    add('cookies', legalLabel, l === 'fr' ? 'Cookies et choix de mesure' : 'Cookies and measurement choices', l === 'fr' ? 'Stockage du choix, mesure facultative et retrait du consentement.' : 'Choice storage, optional measurement and withdrawing consent.');
    add('legal', legalLabel, l === 'fr' ? 'Mentions légales' : 'Legal notice', l === 'fr' ? 'Identité de NODINA, coordonnées et hébergement de nodina.com.' : 'NODINA company details, contact information and hosting of nodina.com.');
    const dir = join(ROOT, 'content/blog', l);
    if (existsSync(dir)) for (const file of readdirSync(dir).filter(f => f.endsWith('.md'))) {
      const fm = readFileSync(join(dir, file), 'utf8').match(/^---\n([\s\S]*?)\n---/)?.[1] || '';
      const field = k => (fm.match(new RegExp(`^${k}:\\s*"?(.*?)"?\\s*$`, 'm')) || [])[1] || '';
      if (field('draft') === 'true') continue;
      list.push({ locale: l, path: paths.blog + field('slug') + '/', label: o.blog.label + ' · ' + field('topic'), title: field('title'), subtitle: short(field('description')) });
    }
  }
  return list;
}

const MARK = '<svg width="44" height="44" viewBox="0 0 52 52" aria-hidden="true"><path d="M32.164 7.30575C33.0624 4.05968 38.2871 -4.09837 47.6133 2.5128C56.4616 10.6553 48.7853 18.0265 45.5704 19.0941C42.3557 20.1617 38.8864 19.658 36.3248 20.8276C33.7631 21.9972 33.8421 22.1173 32.8072 22.8157C28.8659 25.4753 27.4816 28.8052 26.5086 32.3147C25.3676 36.43 26.193 38.1578 25.0324 42.3515C23.8719 46.5452 17.2128 56.9156 5.30223 48.4724C-5.99814 38.0735 3.62821 28.8696 7.91117 27.2964C12.1941 25.7233 15.3852 26.8797 19.7189 25.0825C23.185 23.645 28.0332 19.8773 29.1113 18.696C30.1895 17.5147 30.567 16.1603 31.0083 15.1646C31.4497 14.169 31.2657 10.5518 32.164 7.30575Z" fill="#ffffff"/><circle cx="42.1" cy="36" r="8.25" fill="#1e8fdb"/><circle cx="14.77" cy="10.77" r="8.25" fill="#ffffff"/></svg>';

export function html(p, fontUrl) {
  // Layout "Statement" (wordmark top-left, label top-right, headline, subtitle, ruled footer) on the dark palette.
  const size = p.title.length > 70 ? 64 : p.title.length > 44 ? 76 : 88;
  const region = p.locale === 'fr' ? 'France · États-Unis' : 'France · United States';
  return `<!doctype html><html lang="${p.locale}"><head><meta charset="utf-8"><style>
@font-face{font-family:'Inter Tight';src:url('${fontUrl}') format('truetype');font-weight:100 900}
html,body{margin:0;width:1200px;height:630px;overflow:hidden}
body{font-family:'Inter Tight',Arial,sans-serif;background:#202425;color:#f3f4f1;-webkit-font-smoothing:antialiased}
.og{width:1200px;height:630px;box-sizing:border-box;padding:64px 72px;display:flex;flex-direction:column;justify-content:space-between}
.row{display:flex;justify-content:space-between;align-items:center}
.brand{display:flex;align-items:center;gap:10px}.brand span{font-size:36px;font-weight:560;letter-spacing:-.015em;line-height:1}
.label{font-size:18px;font-weight:500;letter-spacing:.025em;color:#1e8fdb}
.main{display:flex;flex-direction:column;gap:28px;max-width:980px}
h1{margin:0;font-size:${size}px;line-height:1.02;letter-spacing:-.055em;font-weight:500;text-wrap:balance}
.sub{margin:0;font-size:26px;line-height:1.4;color:#c8d0cc;max-width:860px}
.foot{border-top:1px solid #575e5d;padding-top:20px;font-size:18px;color:#c8d0cc}
</style></head><body><div class="og">
<div class="row"><div class="brand">${MARK}<span>Nodina</span></div><span class="label">${esc(p.label)}</span></div>
<div class="main"><h1>${esc(p.title)}</h1><p class="sub">${esc(p.subtitle)}</p></div>
<div class="row foot"><span>nodina.com</span><span>${esc(region)}</span></div>
</div></body></html>`;
}

if (process.argv[1] === new URL(import.meta.url).pathname) {
  const list = pages();
  const wanted = new Set(list.map(p => slugFor(p.path) + '.png'));
  if (!existsSync(CHROME)) {
    const missing = [...wanted].filter(f => !existsSync(join(OUT, f)));
    console.warn(`OG images: Chrome not found at ${CHROME}; keeping the ${wanted.size - missing.length} committed images.` + (missing.length ? ` MISSING: ${missing.join(', ')}` : ''));
    process.exit(missing.length ? 1 : 0);
  }
  mkdirSync(OUT, { recursive: true });
  const work = join(tmpdir(), 'nodina-og-' + process.pid); mkdirSync(work, { recursive: true });
  copyFileSync(join(ROOT, 'public/assets/intertight.ttf'), join(work, 'intertight.ttf'));
  for (const p of list) {
    const name = slugFor(p.path) + '.png';
    const page = join(work, name.replace('.png', '.html'));
    writeFileSync(page, html(p, 'intertight.ttf'));
    execFileSync(CHROME, ['--headless=new', '--disable-gpu', '--hide-scrollbars', '--force-device-scale-factor=1', '--window-size=1200,630', `--screenshot=${join(OUT, name)}`, `--user-data-dir=${join(work, 'profile')}`, 'file://' + page], { stdio: 'ignore' });
  }
  for (const f of readdirSync(OUT)) if (f.endsWith('.png') && !wanted.has(f)) rmSync(join(OUT, f));
  rmSync(work, { recursive: true, force: true });
  console.log(`OG images: ${list.length} written to public/assets/og/`);
}
