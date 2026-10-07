import type { Locale } from './site';
import type { Policy } from './legal';

// Sources and outstanding confirmations: research/legal-notice-20261008.md.
// JD deferred the business telephone number beyond this version on 8 October 2026.

type LegalNoticeCopy = { date: string; draftTitle: string; draftBody: string; policy: Policy };

export const legalNoticeCopy: Record<Locale, LegalNoticeCopy> = {
  fr: {
    date: 'Préparé le 8 octobre 2026',
    draftTitle: 'Mentions légales en cours de validation',
    draftBody: 'Cette version est préparée pour la revue privée. Les informations légales sont soumises à validation.',
    policy: {
      title: 'Mentions légales',
      lead: 'L’identité de l’éditeur de nodina.com, la direction de la publication et l’hébergement du site.',
      sections: [
        { id: 'editeur', title: 'Éditeur du site', paragraphs: [
          'Le site nodina.com est édité par NODINA, société par actions simplifiée unipersonnelle (SASU), au capital social de 1 000 €.',
          'Siège social : 54 chemin du Château, 06640 Saint-Jeannet, France.',
          'SIREN : 103 513 834. SIRET du siège : 103 513 834 00012.',
          'Immatriculation : 103 513 834 RCS Grasse.',
          'Numéro de TVA intracommunautaire : FR88103513834.',
        ] },
        { id: 'coordonnees', title: 'Contacter NODINA', paragraphs: [
          'E-mail : build@nodina.com.',
        ], links: [{ label: 'Écrire à build@nodina.com', href: 'mailto:build@nodina.com' }] },
        { id: 'publication', title: 'Direction de la publication', paragraphs: [
          'Le directeur de la publication est Jean-David Collard, président de NODINA.',
        ] },
        { id: 'hebergement', title: 'Hébergement', paragraphs: [
          'Le site est hébergé par Cloudflare, Inc., 101 Townsend Street, San Francisco, CA 94107, États-Unis.',
          'Téléphone : +1 888 993 5273.',
        ], links: [{ label: 'Site de Cloudflare', href: 'https://www.cloudflare.com/' }] },
        { id: 'services', title: 'Les services présentés', paragraphs: [
          'Le site présente les services d’ingénierie logicielle et d’intelligence artificielle de NODINA. Les prestations sont définies sur devis, selon le périmètre convenu.',
          'Le formulaire permet de demander un échange sur votre projet ; son envoi ne constitue pas une commande ni la conclusion d’un contrat.',
        ] },
      ],
    },
  },
  en: {
    date: 'Prepared on 8 October 2026',
    draftTitle: 'Legal notice awaiting approval',
    draftBody: 'This version is prepared for private review. The legal details are submitted for approval.',
    policy: {
      title: 'Legal notice',
      lead: 'The publisher of nodina.com, the publication director and the website hosting provider.',
      sections: [
        { id: 'publisher', title: 'Website publisher', paragraphs: [
          'The nodina.com website is published by NODINA, a French single-shareholder simplified joint-stock company (SASU), with share capital of €1,000.',
          'Registered office: 54 chemin du Château, 06640 Saint-Jeannet, France.',
          'SIREN: 103 513 834. Registered-office SIRET: 103 513 834 00012.',
          'Registration: 103 513 834 RCS Grasse, France.',
          'EU VAT identification number: FR88103513834.',
        ] },
        { id: 'contact', title: 'Contact NODINA', paragraphs: [
          'Email: build@nodina.com.',
        ], links: [{ label: 'Email build@nodina.com', href: 'mailto:build@nodina.com' }] },
        { id: 'publication', title: 'Publication director', paragraphs: [
          'The publication director is Jean-David Collard, president of NODINA.',
        ] },
        { id: 'hosting', title: 'Hosting provider', paragraphs: [
          'The website is hosted by Cloudflare, Inc., 101 Townsend Street, San Francisco, CA 94107, United States.',
          'Telephone: +1 888 993 5273.',
        ], links: [{ label: 'Cloudflare website', href: 'https://www.cloudflare.com/' }] },
        { id: 'services', title: 'Services presented', paragraphs: [
          'The website presents NODINA’s software engineering and artificial intelligence services. Services are quoted according to the agreed scope.',
          'The form lets you request a discussion about your project; submitting it does not place an order or enter into a contract.',
        ] },
      ],
    },
  },
};
