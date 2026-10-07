# Architecture du futur site NODINA

2026-10-02. Proposition de structure pour préparer la fondation technique et le design. Le cadrage produit et le positionnement présentés à JD sont retenus pour poursuivre le travail. Les routes ci-dessous ne sont pas encore des URLs publiques approuvées. Les relevés de visibilité restent partiels.

Référence active : [PROMETHEUS](../prometheus_update_2026-10-01/PROMETHEUS.md), sections 7 et 9. Exigences acquises : deux offres, lancement FR-France et EN-US, domaine principal nodina.com, Cloudflare gratuit, CTA « Discuter de votre projet », tarifs sur devis.

## Parcours principal

Le visiteur identifie son besoin dès l’accueil : renforcer sa capacité de réalisation avec **AI-native Teams**, ou faire concevoir et intégrer un système avec **AI Systems & Transformation**. Chaque page d’offre explique le périmètre, les responsabilités et les éléments nécessaires au devis, puis mène au contact.

Le parcours de réassurance passe par l’approche de travail et les personnes. Les expériences acquises dans d’autres structures sont attribuées au rôle réel de JD ou des professionnels concernés. Le doctorat, les publications et l’expérience franco-américaine soutiennent cette présentation.

Navigation proposée : **Offres · Approche · Le fondateur / À propos · Sélection des talents · Journal**, puis le CTA de contact et le sélecteur FR/EN. Les deux offres restent directement accessibles dans le menu. En mobile, préserver le CTA et l’accès aux langues sans surcharger l’en-tête.

## Inventaire proposé

| Page | Route FR | Route EN-US | Rôle et contenu attendu |
|---|---|---|---|
| Accueil | `/fr/` | `/en/` | Proposition de valeur, deux offres, preuves attribuées, méthode, qualification et contact |
| AI-native Teams | `/fr/equipes-engineering-ia/` | `/en/ai-engineering-teams/` | Renfort ou équipe autonome ; profils, intégration à l’équipe cliente, responsabilités, sélection et qualité sans statistiques non étayées |
| AI Systems & Transformation | `/fr/systemes-ia-sur-mesure/` | `/en/custom-ai-systems/` | Cadrage, architecture, construction, intégration, évaluation et exploitation dans le périmètre convenu ; exemples de workflows sans faux cas client |
| Approche | `/fr/notre-approche/` | `/en/our-approach/` | Façon de travailler, coordination humains/agents, responsabilités, tests, evals et exploitation ; méthodes déclarées et artefacts réels quand disponibles |
| À propos | `/fr/a-propos-de-nodina/` | `/en/about-nodina/` | Fondateur, doctorat en informatique, recherche, formation Arts et Métiers/CEA et expérience FR/US ; références exclues absentes |
| Sélection des talents | `/fr/selection-des-talents/` | `/en/vetting/` | AITalentEval : présentation cible au présent de la méthode et de l’outil, avec maquette illustrative ; statut réel à concevoir consigné en interne |
| Modalités de collaboration | `/fr/modalites-de-collaboration/` | `/en/working-with-nodina/` | Tarification sur devis, facteurs de coût, modalités à convenir, périmètre et critères de qualification ; aucun tarif minimum déduit des budgets passés |
| Contact | `/fr/discuter-de-votre-projet/` | `/en/discuss-your-project/` | Besoin, contexte, coordonnées professionnelles ; réservation si le service retenu est disponible ; aucun délai de réponse inventé |
| Journal | `/fr/journal/` | `/en/journal/` | Articles signés et datés sur la réalisation, l’architecture et l’IA ; hub et gabarit d’article à concevoir, premiers textes à préparer |
| Sécurité et données | `/fr/securite-et-donnees/` | `/en/security-and-data/` | Principes réels, responsabilités et limites, à partir des documents internes après revue ; aucune certification implicite |
| Mentions légales | `/fr/mentions-legales/` | `/en/legal-notice/` | Informations légales vérifiées et approuvées par JD avant publication |
| Confidentialité | `/fr/confidentialite/` | `/en/privacy/` | Brouillons locaux FR/EN préparés le 6 octobre 2026 à partir des traitements réels ; informations et approbation encore attendues |
| Cookies | `/fr/cookies/` | `/en/cookies/` | Brouillons locaux FR/EN : choix facultatif de mesure, stockage et retrait ; inventaire réel avant activation publique |

Chaque route conserve la même intention dans les deux langues. Les noms des offres restent identiques. Les slugs sont proposés à partir du vocabulaire métier et du contenu attendu ; ils ne reposent pas sur des volumes de recherche mesurés. La liste sera affinée avec les clusters avant de figer les URLs.

Le journal fait partie du plan dès maintenant. Son lancement exige du contenu utile relu dans les deux langues ; ne pas publier un hub vide ou des catégories de remplissage. Prévoir un article avec URL stable par langue, une signature autorisée, des sources et des liens vers l’offre pertinente. Les sujets sont à briefer après la recherche de requêtes.

Gabarits transversaux : accueil, offre, page éditoriale, contact, hub du journal, article, page légale et 404. Une 404 utile doit répondre avec le statut HTTP 404. Une recherche interne sera envisagée quand le corpus le justifiera. Aucun annuaire d’auteurs ou de tags vide.

## Accueil du domaine et migration

**Choix de JD du 2026-10-02 :** ouvrir directement la version française. Préparer une redirection 301 de `https://nodina.com/` vers `/fr/`, avec l’anglais accessible par un sélecteur explicite. Pas de redirection automatique selon l’adresse IP ou la langue du navigateur. Ce choix est enregistré ; aucune redirection n’est encore appliquée. Les autres slugs restent proposés et la carte de migration sera vérifiée avant mise en ligne.

Préserver nodina.com comme domaine principal et les redirections HTTP/www déjà observées. Préparer les variantes nodina.ai et nodina.fr seulement après vérification de leur configuration et validation du routage. Les anciennes ancres de la page provisoire sont des fragments de la racine, pas des pages distinctes à compter dans le sitemap. Prévoir une correspondance des points d’entrée utiles et vérifier le comportement de ces liens lors de la migration.

Le relevé actuel ne remplace pas l’inventaire Search Console et des backlinks. Aucun chemin découvert ultérieurement ne sera redirigé automatiquement vers l’accueil sans examiner son intention. Carte de migration et tests avant mise en ligne.

## Règles pour les preuves

Depuis le 2026-10-02, CheckIA et Angels Bay Tech ne doivent plus être cités, liés ou repris comme cas anonymisés. Les autres exclusions de projets restent applicables. Les sources historiques demeurent internes.

Depuis le 2026-10-03, le parcours de fondateur de JD peut être développé avec sa formation et ses domaines d’expérience déclarés. Le prix MyGalileoApp 2019 est attribué à la GSA et aux travaux entrepreneuriaux concernés, sans devenir un prix scientifique de l’ESA ni une distinction NODINA. Les sources révélant des noms exclus restent internes.

Le réseau Europe/LATAM, les partenariats limités par trimestre et les modalités commerciales demandées sont déclarés par JD. Trois semaines désigne un démarrage possible selon disponibilité. AITalentEval est en conception. Aucun profil réel, taux d’acceptation, quota de places, résultat de sélection ou certification n’est inventé.

## Ordre de réalisation

1. Préparer les gabarits et la structure FR/EN ; conserver les brouillons hors publication.
2. Comparer trois directions visuelles sur le même contenu réel d’accueil, en desktop et mobile.
3. Affiner la direction choisie, puis présenter la homepage complète ; formaliser le design system après sa validation.
4. Décliner les deux offres et les pages de réassurance, rédiger les premiers articles et traiter les informations légales.
5. Effectuer les vérifications éditoriales, techniques, de contact, de migration et de découverte avant la demande de mise en ligne.

Le [brief d’accueil](briefs/homepage.md) détaille la hiérarchie proposée. La [fondation technique](../research/technical-foundation.md) traduit cette architecture en exigences de construction.

## Ajustement de parcours — 2026-10-03

La maquette d’accueil fournit deux entrées par besoin et deux sections détaillées (`#teams-detail`, `#systems-detail`), puis leur combinaison. Contact localisé : `?offer=teams`, `systems`, `combined` ou `unknown`. Le dernier choix signifie « À définir ensemble ». Le comparatif recrutement et AITalentEval appartiennent au parcours Teams ; méthode, expérience du fondateur et diagnostic restent communs. Aucun nouveau slug public fixé par cet ajustement.

## Hiérarchie d’entrée — décision du 2026-10-03

AI-native Teams devient l’entrée commerciale prioritaire de l’accueil. CTA hero vers `/fr/contact/?offer=teams` ou `/en/contact/?offer=teams`, second lien vers la page de sélection localisée. Une entrée complémentaire sous le hero rejoint `#systems-detail`. L’aide au choix et les deux développements demeurent dans l’accueil. Les futures pages d’offre peuvent servir d’entrées ciblées ; aucune nouvelle route, campagne ou publication créée à ce stade.

## Repères d’offre et contact — piste A choisie le 2026-10-03

L’identité visuelle accompagne chaque parcours existant : Teams blanc, Systems bleu pâle, cobalt commun et noms d’offre explicites. Le contact reprend l’offre reçue dans `?offer=` puis suit le choix manuel. Les liens de langue préservent teams, systems ou combined ; unknown ouvre un contact neutre. Les besoins combinés et à préciser restent neutres. Aucun nouveau slug ni transmission de formulaire n’est introduit.


## Extensions réalisées dans la maquette — 2026-10-03

| Page | FR local | EN local | Rôle |
|---|---|---|---|
| NODINA Select | `/fr/selection-des-talents/` | `/en/vetting/` | Preuves de compétences, évaluateurs, méthode, exemple commenté, outils |
| Profils | `/fr/profils/` | `/en/engineers/` | Fiches destinées à des profils réels anonymisés ; actuellement gabarits explicitement signalés, données attendues de JD |
| Manifeste | `/fr/manifeste/` | `/en/manifesto/` | Convictions d’ingénierie ; une semaine de sélection/validation, puis deux semaines de préparation, premières PR dès trois semaines au total selon les conditions convenues |

Navigation active du prototype : Offres, La sélection, Les profils, Manifeste, Contact et langues. L’approche, le fondateur et la FAQ restent accessibles dans le pied de page ; le fondateur est également lié depuis le manifeste, la sélection et le menu mobile. Liens de langue conservent la page équivalente. Tous les CTA des nouvelles pages rejoignent le contact Teams ; le manifeste conserve un lien explicite vers Systems.

La portée du délai est sélection et validation de l’équipe, confirmée par JD, avec brief complet, disponibilité et créneaux convenus. Démarrage possible dès trois semaines distinct. Aucune route publique déployée : dix pages locales servies par le prototype.
