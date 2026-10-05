# Fondation technique du futur site NODINA

2026-10-02. Choix de construction et tâches à réaliser. Aucun site construit ou déployé par ce document. Référence : PROMETHEUS actif, section 7. Cloudflare gratuit et budget supplémentaire nul sont déjà décidés par JD.

## Stack retenue pour la préparation

**Astro avec génération statique**, contenus Markdown/données séparés des gabarits. C’est le défaut prévu par PROMETHEUS en l’absence de préférence contraire. Motif : produire le contenu complet en HTML, mutualiser les gabarits et métadonnées, valider les contenus à la construction et conserver une charge JavaScript limitée aux interactions utiles.

**Cloudflare Workers Static Assets sur le plan Free**, proposé comme service précis pour ce nouveau projet. La documentation Astro consultée le 2026-10-02 rapporte la recommandation Cloudflare de privilégier Workers pour les nouveaux projets et documente un déploiement purement statique sans adaptateur serveur. Les requêtes vers les assets statiques sont gratuites et illimitées selon la grille Cloudflare consultée le même jour. Les fonctions dynamiques, le stockage et autres services ont leurs propres limites ; ils ne sont pas nécessaires au service des pages statiques. Ne pas ajouter de Worker dynamique ou activer Workers Caching sans réexaminer les conséquences et le budget.

Sources primaires consultées : [déploiement Astro sur Cloudflare](https://docs.astro.build/en/guides/deploy/cloudflare/), [tarification Cloudflare Workers](https://developers.cloudflare.com/workers/platform/pricing/). Ces constats concernent les pages statiques ; ils ne garantissent pas la gratuité de tous les futurs outils de contact, de réservation ou d’analytics.

La version exacte d’Astro et les dépendances seront choisies et verrouillées au démarrage du code, avec une version Node supportée. Node 25.6.1 et npm 11.9.0 sont disponibles localement ; aucune installation ni compatibilité de build validée à ce stade.

## Organisation du code à préparer

```text
src/
  layouts/          gabarits et head communs
  components/       navigation, offres, preuves, FAQ, CTA
  pages/fr/         entrées de routes françaises
  pages/en/         entrées de routes EN-US
  content.config.*  schémas et validation des contenus
content/
  pages/            contenus localisés à créer
  journal/          articles localisés à créer
  briefs/           brief d’accueil existant et futurs briefs
  claims.csv        registre existant
public/             logo, fonts, fichiers de découverte générés
tools/              contrôles éditoriaux et techniques à construire
dist/               HTML et assets générés, hors édition manuelle
```

Les dossiers techniques ci-dessus ne sont pas encore créés. Les documents internes, registres, recherches et permissions ne sont jamais copiés automatiquement dans les assets publics. Une liste explicite de contenus publiables alimente la construction.

## FR/EN et routes

Chaque contenu a un identifiant stable, sa langue, son slug et son équivalent localisé. Les liens de navigation et le sélecteur de langue utilisent cette correspondance, pas un remplacement arbitraire de `/fr/` par `/en/`.

Préparer `/fr/` et `/en/`, `html lang="fr-FR"` et `"en-US"`, canonicals sur nodina.com et hreflang réciproques. Les métadonnées, textes alternatifs et chaînes de données structurées sont localisés. JD choisit le 2026-10-02 l’entrée directe en français : préparer la racine en 301 vers `/fr/` et le x-default vers `/fr/`. Astro documente les préfixes de langue et le comportement particulier de la racine ; l’implémentation doit rester cohérente avec les redirections HTTP de l’hébergement. [Documentation i18n Astro](https://docs.astro.build/en/guides/internationalization/), consultée le 2026-10-02.

La structure des pages et les slugs restent proposés dans [site-architecture.md](../content/site-architecture.md). Les redirections de migration sont réalisées au niveau de l’hébergement et testées en HTTP, pas seulement simulées dans le navigateur.

## Garde-fous des gabarits et du build

- Métadonnées obligatoires : titre, description, URL canonique, langue, correspondance localisée et statut éditorial ; auteur et dates pour les contenus qui les nécessitent.
- Brouillons en noindex par défaut. Un statut de publication ne découle pas d’un simple build réussi.
- Head mutualisé : canonical, hreflang, Open Graph, données structurées adaptées au type de page ; Organization/WebSite pour l’accueil, personnes réellement autorisées et informations vérifiées. Aucun avis ou résultat inventé dans le schema.
- Contrôles des liens internes, unicité des routes, statut 404, références de claims et exclusion des brouillons du sitemap, des feeds et des fichiers llms.
- Fichiers de découverte générés uniquement à partir du contenu public approuvé : robots.txt selon le choix de JD, sitemap.xml, llms.txt localisé et feeds du journal. Aucun bénéfice de classement ou citation garanti.
- Polices libres et auto-hébergées après vérification des licences ; deux familles et quatre graisses au maximum par direction. Images dimensionnées et optimisées ; lecture possible sans JavaScript, clavier et focus visibles, réduction des animations respectée.

Les contrôles et outils PROMETHEUS ne sont pas encore implémentés ; aucun résultat « SEO-ready » ou test de build réussi n’est revendiqué.

## Prévisualisation et publication

Travailler d’abord sur une prévisualisation locale. Avant toute preview hébergée : contrôle d’accès effectif, en-tête `X-Robots-Tag: noindex, nofollow` et canonicals de production, conformément à PROMETHEUS 7.3. Ne pas créer un lien public de preview sans ces protections. Aucun déploiement ni nouveau compte requis pour les premières explorations locales.

JD choisit le 2026-10-02 **d’autoriser les robots de recherche et d’IA**, après présentation de l’implication concernant l’entraînement des modèles. Préparer robots.txt et les paramètres d’hébergement en conséquence. Avant production : confirmer les paramètres de robots de Cloudflare et tester les chemins réellement publics avec les User-Agents prévus. Ces tests ne reproduisent pas à eux seuls les règles appliquées aux adresses IP réelles des crawlers. L’autorisation concerne les contenus publics approuvés ; les previews et documents internes gardent leurs protections.

Les choix de racine et de robots sont enregistrés. Le routage des domaines alternatifs reste à préparer et à valider. Le premier déploiement et le passage en index nécessitent l’accord de mise en ligne prévu dans PROMETHEUS. Ni le positionnement retenu ni l’instruction de poursuivre ne valent accord sur ces actions.

## Contact, analytics et données

Le contact exige un choix de traitement et un destinataire vérifié. Ne pas utiliser le chemin de protection d’email actuellement en 404 comme mécanisme du nouveau site. Préparer la page et ses états ; valider l’acheminement, les erreurs et la confidentialité avant de l’exposer comme un formulaire fonctionnel. Aucun message de test externe envoyé sans autorisation.

Préparer les points de mesure : consultation des offres, clic sur le CTA, clic de contact/réservation et réussite d’envoi réellement confirmée. Outil analytics et politique de consentement restent à déterminer selon les traitements effectifs. Aucun compte analytics, OAuth, CRM, service de réservation ou newsletter créé dans cette étape.

Les documents de sécurité déjà présents sont des sources internes ; les textes de confiance et de confidentialité doivent correspondre à l’architecture effectivement retenue et être approuvés avant publication.

## Vérification prévue à l’implémentation

Construction statique reproductible ; HTML lisible sans scripts ; métadonnées/localisations cohérentes ; aucune fuite de documents internes ; contact réellement acheminé ; liens et redirections testés ; 404 réelle ; performance et accessibilité vérifiées sur desktop/mobile ; sources et permissions revues. Compléter les observations SERP/IA restant ouvertes sans les présenter comme achevées.
