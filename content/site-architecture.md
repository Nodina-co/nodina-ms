# Architecture du futur site NODINA

2026-10-02. Proposition de structure pour préparer la fondation technique et le design. Le cadrage produit et le positionnement présentés à JD sont retenus pour poursuivre le travail. Les routes ci-dessous ne sont pas encore des URLs publiques approuvées. Les relevés de visibilité restent partiels.

Référence active : [PROMETHEUS](../prometheus_update_2026-10-01/PROMETHEUS.md), sections 7 et 9. Exigences acquises : deux offres, lancement FR-France et EN-US, domaine principal nodina.com, Cloudflare gratuit, CTA « Discuter de votre projet », tarifs sur devis.

## Parcours principal

Le visiteur identifie son besoin dès l’accueil : renforcer sa capacité de réalisation avec **AI-native Teams**, ou faire concevoir et intégrer un système avec **AI Systems & Transformation**. Chaque page d’offre explique le périmètre, les responsabilités et les éléments nécessaires au devis, puis mène au contact.

Le parcours de réassurance passe par l’approche de travail et les personnes. Les expériences acquises dans d’autres structures sont attribuées au rôle réel de JD ou des professionnels concernés. Le doctorat, les publications et l’expérience franco-américaine soutiennent cette présentation.

Navigation proposée : **Offres · Approche · À propos · Journal**, puis le CTA de contact et le sélecteur FR/EN. Les deux offres restent directement accessibles dans le menu. En mobile, préserver le CTA et l’accès aux langues sans surcharger l’en-tête.

## Inventaire proposé

| Page | Route FR | Route EN-US | Rôle et contenu attendu |
|---|---|---|---|
| Accueil | `/fr/` | `/en/` | Proposition de valeur, deux offres, preuves attribuées, méthode, qualification et contact |
| AI-native Teams | `/fr/equipes-engineering-ia/` | `/en/ai-engineering-teams/` | Renfort ou équipe autonome ; profils, intégration à l’équipe cliente, responsabilités, sélection et qualité sans statistiques non étayées |
| AI Systems & Transformation | `/fr/systemes-ia-sur-mesure/` | `/en/custom-ai-systems/` | Cadrage, architecture, construction, intégration, évaluation et exploitation dans le périmètre convenu ; exemples de workflows sans faux cas client |
| Approche | `/fr/notre-approche/` | `/en/our-approach/` | Façon de travailler, coordination humains/agents, responsabilités, tests, evals et exploitation ; méthodes déclarées et artefacts réels quand disponibles |
| À propos | `/fr/a-propos-de-nodina/` | `/en/about-nodina/` | Collectif, parcours de JD, doctorat et recherche, expérience FR/US ; CheckIA et Angels Bay Tech avec attribution exacte |
| Modalités de collaboration | `/fr/modalites-de-collaboration/` | `/en/working-with-nodina/` | Tarification sur devis, facteurs de coût, modalités à convenir, périmètre et critères de qualification ; aucun tarif minimum déduit des budgets passés |
| Contact | `/fr/discuter-de-votre-projet/` | `/en/discuss-your-project/` | Besoin, contexte, coordonnées professionnelles ; réservation si le service retenu est disponible ; aucun délai de réponse inventé |
| Journal | `/fr/journal/` | `/en/journal/` | Articles signés et datés sur la réalisation, l’architecture et l’IA ; hub et gabarit d’article à concevoir, premiers textes à préparer |
| Sécurité et données | `/fr/securite-et-donnees/` | `/en/security-and-data/` | Principes réels, responsabilités et limites, à partir des documents internes après revue ; aucune certification implicite |
| Mentions légales | `/fr/mentions-legales/` | `/en/legal-notice/` | Informations légales vérifiées et approuvées par JD avant publication |
| Confidentialité | `/fr/politique-de-confidentialite/` | `/en/privacy-policy/` | Traitements effectivement mis en œuvre : contact, analytics et éventuels outils tiers ; rédaction après choix techniques, approbation humaine |

Chaque route conserve la même intention dans les deux langues. Les noms des offres restent identiques. Les slugs sont proposés à partir du vocabulaire métier et du contenu attendu ; ils ne reposent pas sur des volumes de recherche mesurés. La liste sera affinée avec les clusters avant de figer les URLs.

Le journal fait partie du plan dès maintenant. Son lancement exige du contenu utile relu dans les deux langues ; ne pas publier un hub vide ou des catégories de remplissage. Prévoir un article avec URL stable par langue, une signature autorisée, des sources et des liens vers l’offre pertinente. Les sujets sont à briefer après la recherche de requêtes.

Gabarits transversaux : accueil, offre, page éditoriale, contact, hub du journal, article, page légale et 404. Une 404 utile doit répondre avec le statut HTTP 404. Une recherche interne sera envisagée quand le corpus le justifiera. Aucun annuaire d’auteurs ou de tags vide.

## Accueil du domaine et migration

**Choix de JD du 2026-10-02 :** ouvrir directement la version française. Préparer une redirection 301 de `https://nodina.com/` vers `/fr/`, avec l’anglais accessible par un sélecteur explicite. Pas de redirection automatique selon l’adresse IP ou la langue du navigateur. Ce choix est enregistré ; aucune redirection n’est encore appliquée. Les autres slugs restent proposés et la carte de migration sera vérifiée avant mise en ligne.

Préserver nodina.com comme domaine principal et les redirections HTTP/www déjà observées. Préparer les variantes nodina.ai et nodina.fr seulement après vérification de leur configuration et validation du routage. Les anciennes ancres de la page provisoire sont des fragments de la racine, pas des pages distinctes à compter dans le sitemap. Prévoir une correspondance des points d’entrée utiles et vérifier le comportement de ces liens lors de la migration.

Le relevé actuel ne remplace pas l’inventaire Search Console et des backlinks. Aucun chemin découvert ultérieurement ne sera redirigé automatiquement vers l’accueil sans examiner son intention. Carte de migration et tests avant mise en ligne.

## Règles pour les preuves

- **CheckIA :** contribution personnelle de Jean-David Collard, du produit à l’exploitation ; usage en production par des cabinets depuis Q2 2026 déclaré par JD. Ne pas présenter le produit comme une mission NODINA et ne pas annoncer ou suggérer la participation de l’équipe CheckIA à NODINA.
- **Angels Bay Tech :** expérience acquise par une partie des professionnels mobilisables. Développement, architecture, IA, produit et design couvrent l’expérience collective déclarée ; ce n’est pas une composition garantie pour chaque mission.
- **Recherche :** doctorat et publications annuelles attribués à JD. Titres, biographies et références publiques ne doivent pas dévoiler les noms de projets que JD souhaite garder privés.
- **FR/US :** collaborations et clients attribués au parcours de JD. Les budgets à six chiffres restent dans le dossier interne tant que devises et structures porteuses ne sont pas précisées pour la formulation publique.

Les noms CheckIA et Angels Bay Tech sont autorisés pour la préparation. Aucun bandeau « clients NODINA », logo, capture, témoignage ou photographie d’équipe n’est ajouté sans les permissions correspondantes.

## Ordre de réalisation

1. Préparer les gabarits et la structure FR/EN ; conserver les brouillons hors publication.
2. Comparer trois directions visuelles sur le même contenu réel d’accueil, en desktop et mobile.
3. Affiner la direction choisie, puis présenter la homepage complète ; formaliser le design system après sa validation.
4. Décliner les deux offres et les pages de réassurance, rédiger les premiers articles et traiter les informations légales.
5. Effectuer les vérifications éditoriales, techniques, de contact, de migration et de découverte avant la demande de mise en ligne.

Le [brief d’accueil](briefs/homepage.md) détaille la hiérarchie proposée. La [fondation technique](../research/technical-foundation.md) traduit cette architecture en exigences de construction.
