import fr from '../../content/site/fr.json';
import en from '../../content/site/en.json';
import { offers } from './offers';

export const locales = ['fr', 'en'] as const;
export type Locale = typeof locales[number];
export const pageIds = ['home', 'vetting', 'profiles', 'manifesto', 'contact', 'privacy', 'cookies', 'legal', 'systems', 'teams'] as const;
export type PageId = typeof pageIds[number];
export const content = { fr, en };
export type Copy = typeof fr | typeof en;
export const origin = 'https://nodina.com';
export const paths: Record<Locale, Record<PageId, string>> = {
  fr: { home: '/fr/', vetting: '/fr/selection-des-talents/', profiles: '/fr/profils/', manifesto: '/fr/manifeste/', contact: '/fr/contact/', privacy: '/fr/confidentialite/', cookies: '/fr/cookies/', legal: '/fr/mentions-legales/', systems: '/fr/solutions-ia-sur-mesure/', teams: '/fr/equipes-ai-native/' },
  en: { home: '/en/', vetting: '/en/vetting/', profiles: '/en/engineers/', manifesto: '/en/manifesto/', contact: '/en/contact/', privacy: '/en/privacy/', cookies: '/en/cookies/', legal: '/en/legal-notice/', systems: '/en/custom-ai-solutions/', teams: '/en/ai-native-teams/' },
};
export const route = (locale: Locale, page: PageId = 'home') => paths[locale][page];
export const contactPath = (locale: Locale, offer = 'teams') => `${route(locale, 'contact')}?offer=${offer}`;
export function metadata(locale: Locale, page: PageId) {
  const c = content[locale];
  const s = c.select;
  const offer = offers(locale);
  const metas = {
    home: [offer.home.title, offer.home.description],
    systems: [offer.systems.title, offer.systems.description],
    teams: [offer.teams.title, offer.teams.description],
    vetting: [c.vetting.title, s.hero_lead],
    profiles: [s.profiles_page_title, s.profiles_page_lead],
    manifesto: [s.manifesto_page_title, s.manifesto_lead],
    contact: [locale === 'fr' ? 'Parlons de votre projet | NODINA' : 'Tell us about your project | NODINA', c.contact_lead],
    privacy: [locale === 'fr' ? 'Confidentialité | NODINA' : 'Privacy | NODINA', locale === 'fr' ? 'Politique de confidentialité du site NODINA : demandes de contact, destinataires, durées et droits.' : 'NODINA website privacy policy: contact inquiries, recipients, retention and your rights.'],
    cookies: [locale === 'fr' ? 'Cookies et choix de mesure | NODINA' : 'Cookies and measurement choices | NODINA', locale === 'fr' ? 'Politique cookies NODINA : stockage du choix, mesure facultative et retrait du consentement.' : 'NODINA cookie policy: choice storage, optional measurement and withdrawing consent.'],
    legal: [locale === 'fr' ? 'Mentions légales | NODINA' : 'Legal notice | NODINA', locale === 'fr' ? 'Identité de NODINA, coordonnées, direction de la publication et hébergement de nodina.com.' : 'NODINA company details, contact information, publication director and hosting of nodina.com.'],
  };
  const [title, description] = metas[page];
  if (!title || !description || !route(locale, page)) throw new Error(`Missing metadata: ${locale}/${page}`);
  return { title, description, canonical: origin + route(locale, page) };
}
