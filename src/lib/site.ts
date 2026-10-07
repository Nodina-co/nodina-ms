import fr from '../../content/site/fr.json';
import en from '../../content/site/en.json';

export const locales = ['fr', 'en'] as const;
export type Locale = typeof locales[number];
export const pageIds = ['home', 'vetting', 'profiles', 'manifesto', 'contact', 'privacy', 'cookies'] as const;
export type PageId = typeof pageIds[number];
export const content = { fr, en };
export type Copy = typeof fr | typeof en;
export const origin = 'https://nodina.com';
export const paths: Record<Locale, Record<PageId, string>> = {
  fr: { home: '/fr/', vetting: '/fr/selection-des-talents/', profiles: '/fr/profils/', manifesto: '/fr/manifeste/', contact: '/fr/contact/', privacy: '/fr/confidentialite/', cookies: '/fr/cookies/' },
  en: { home: '/en/', vetting: '/en/vetting/', profiles: '/en/engineers/', manifesto: '/en/manifesto/', contact: '/en/contact/', privacy: '/en/privacy/', cookies: '/en/cookies/' },
};
export const route = (locale: Locale, page: PageId = 'home') => paths[locale][page];
export const contactPath = (locale: Locale, offer = 'teams') => `${route(locale, 'contact')}?offer=${offer}`;
export function metadata(locale: Locale, page: PageId) {
  const c = content[locale];
  const s = c.select;
  const metas = {
    home: [c.title, c.description],
    vetting: [c.vetting.title, s.hero_lead],
    profiles: [s.profiles_page_title, s.profiles_page_lead],
    manifesto: [s.manifesto_page_title, s.manifesto_lead],
    contact: [locale === 'fr' ? 'Parlons de votre projet | NODINA' : 'Tell us about your project | NODINA', c.contact_lead],
    privacy: [locale === 'fr' ? 'Confidentialité | NODINA' : 'Privacy | NODINA', locale === 'fr' ? 'Politique de confidentialité du site NODINA : demandes de contact, destinataires, durées et droits.' : 'NODINA website privacy policy: contact inquiries, recipients, retention and your rights.'],
    cookies: [locale === 'fr' ? 'Cookies et choix de mesure | NODINA' : 'Cookies and measurement choices | NODINA', locale === 'fr' ? 'Politique cookies NODINA : stockage du choix, mesure facultative et retrait du consentement.' : 'NODINA cookie policy: choice storage, optional measurement and withdrawing consent.'],
  };
  const [title, description] = metas[page];
  if (!title || !description || !route(locale, page)) throw new Error(`Missing metadata: ${locale}/${page}`);
  return { title, description, canonical: origin + route(locale, page) };
}
