# NODINA — dossier de clôture du lancement

**Révision en prévisualisation — 9 octobre 2026 :** après le retour de JD sur la densité des pages, une home courte et deux pages d’offre dédiées sont préparées en FR/EN. Priorité proposée et retenue pour cette préparation : solutions IA sur mesure intégrées aux opérations, puis AI-native Teams. Les textes restent à relire ; aucun nouveau déploiement public. Le site public ci-dessous décrit la version conservée. [Révision, vérifications et suite](reports/offers-restructure-20261009.md). Le plan source comporte maintenant vingt routes, dont quatre brouillons, et bloque la compilation publique pendant cette relecture.

État au **9 octobre 2026**, sous la responsabilité de Jean-David Collard (JD, `jd@nodina.com`). **Le lancement public est réalisé. La procédure Prometheus complète reste partiellement ouverte**, principalement pour la recherche éditoriale et les outils de maintenance. Le présent dossier clôture la mise en production et organise la reprise ; il ne certifie pas l’achèvement de toutes les phases de la fondation.

Contrôle final : **102 PASS, 0 FAIL, 33 OPEN**. Les seize HTML publics et les sept fichiers de découverte relus sont identiques au paquet conservé ; redirections HTTPS/www, réponse 404 et accès avec les user agents déclarés contrôlés. Cela ne prouve pas l’exploration depuis les IP des moteurs. Les NS Cloudflare, MX Google et la présence SPF/DKIM/DMARC sont relus via DNS public ; aucun envoi mail n’a été testé.

## Ce qui est en place

- [nodina.com/fr/](https://nodina.com/fr/) et [nodina.com/en/](https://nodina.com/en/) : seize pages publiées, textes et structure approuvés le 9 octobre. Hébergement Cloudflare Worker `nodina-production`, route apex, HTTPS et redirection www ; GitHub Pages dépublié par JD.
- Contact Production version 2 : accès public Google, stockage privé par demande, conservation et lecteur Reporting documentés. Aucun nouvel essai effectué pour cette clôture.
- GA4 actif après consentement, propriété `557424928`, flux `16047238617`, balise `G-J8NV7Z1HMX`. Première vue de page confirmée. `generate_lead` est une demande enregistrée, sans qualification commerciale.
- Search Console `sc-domain:nodina.com` reliée au flux GA4 ; collection Search Console et quatre rapports **SITE: NODINA → Acquisition et contact** publiés. [Rapports et liens de lecture](reports/ga4-acquisition-20261009.md).
- Sitemap reçu et traité par Google, reçu par Bing avec statut Processing au dernier constat ; IndexNow reçu en HTTP 202. Cela ne prouve pas l’indexation.
- Reporting Apps Script installé, paramètres et déclencheur conservés : lundi vers 09:00 Paris, ±15 minutes, vers `Nodina-co/nodina-marketing-analytics` privé. Première exécution automatique attendue le **12 octobre 2026**, encore non observée.

## Dossier à utiliser

| Document | Usage |
|---|---|
| [Contrôle de conformité](reports/conformance-2026-10-09.md) | Résultats mécaniques et écarts explicites ; aucun état OPEN assimilé à un succès |
| [Transmission et réserves](reports/production-closure-20261009.md) | Comptes, accès, retour arrière, limites et trois risques principaux |
| [Guide de reprise](reports/prometheus-operating-guide-20261009.md) | Où intervenir, commandes réelles et calendrier des quatre semaines |
| [PLAN](content/PLAN.md) et [publication.json](content/publication.json) | Seize pages publiées et suite éditoriale distincte |
| [Règles éditoriales](content/editorial-rules.md) | Règles de preuve et ton validé |
| [Analytics](content/analytics.md) et [Terraform](terraform.md) | Sens des événements, lecture des données et rapport hebdomadaire |
| [Décisions](content/decisions.md), [vérité produit](content/product-truth.md), [claims](content/claims.csv) | Autorisations, assertions et sources |
| [Fondation active](prometheus_update_2026-10-01/PROMETHEUS.md) | Référence version 2026-09-29, consulter par section |

Les sources du site sont dans ce dépôt public sur `main`. Les données et rapports de performance sont dans le dépôt analytique privé, cloné à côté sous `../nodina-marketing-analytics`. Les métadonnées de déploiement sont ignorées dans `tools/forms/production/.local/`. Le paquet public exclut les dossiers internes. Les rapports de préparation datés décrivent leurs états historiques ; ce résumé indique l’état actuel.

## Ce qui reste à terminer

1. Observer la première collecte automatique du 12 octobre et les premières interactions réelles. La réception de `primary_cta_click`, `form_start` et `generate_lead` n’est pas revalidée après activation GA4 ; JD a clos les essais.
2. Vérifier l’indexation et le traitement Bing/IndexNow dans les consoles, sans soumettre à nouveau par principe. Les nouvelles pages restent trop récentes pour juger leurs performances avant le 6 novembre.
3. Compléter la recherche de mots-clés, clusters, intentions, briefs et revue de plan. Les échantillons SERP/IA existants sont partiels ; aucun article ou guide n’est publié, le RSS reste vide.
4. Compléter les outils spécialisés requis par la fondation, la couverture de conformité humaine, la surveillance production et les contrôles d’accessibilité/performance. Le contrôle livré couvre les artefacts présents et la disponibilité HTTP, pas toute la fondation.
5. Formaliser qualification et dédoublonnage commerciaux. GA4 ne remplace pas le registre Contact et couvre seulement les visiteurs consentants.

`AGENTS.md` et `CLAUDE.md` définitifs de Phase 8 restent différés : les requêtes, maquettes de blog, outils et preuves requis pour leur génération complète manquent. Le guide de reprise fournit les consignes opérationnelles disponibles sans inventer ces éléments.

## Prochaine session

Après le 12 octobre vers 09:15 Paris, vérifier l’arrivée d’un JSON programmé dans le dépôt privé, puis demander **« run terraform report »**. Le premier rapport existant est le test du 6 octobre, provisoire et antérieur au lancement public. Rien ne publie automatiquement ses propositions. Le plan de suivi sur quatre semaines figure dans le guide de reprise ; aucune nouvelle automation n’est installée par cette clôture.
