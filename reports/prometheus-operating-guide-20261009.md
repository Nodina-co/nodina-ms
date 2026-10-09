# Guide de reprise NODINA — 9 octobre 2026

Guide opérationnel provisoire. La Phase 8 intégrale n’est pas achevée : voir [conformité](conformance-2026-10-09.md) et [SUMMARY](../SUMMARY.md). Fondation active : version 2026-09-29 dans `prometheus_update_2026-10-01/PROMETHEUS.md`. Ne pas charger les anciennes instructions en bloc ni déclarer des outils absents exécutés. Les instructions directes de JD priment ; les accords déjà donnés restent valables pour leur périmètre.

## Reprendre une session

Lire SUMMARY, PLAN, décisions, analytics et le dernier rapport Terraform privé. Vérifier le dépôt et les changements avant toute écriture. JD demande de travailler sur `main` et a autorisé commit/push ; ne pas créer une branche par défaut. Ne pas publier de statistique privée, de secret ou de donnée Contact dans ce dépôt public. Ne pas réintroduire de screenshots. Les essais et les notifications de formulaire sont clos ; cette clôture n’autorise aucun nouvel essai.

Le site présente l’offre et les équipes NODINA pour amener à une prise de contact. Il ne s’agit pas d’un travail sur un logiciel produit. Les objectifs sont ceux de [goals.md](../content/goals.md). Les textes, profils et méthode Select ont les validations enregistrées dans les décisions ; une disponibilité ou une promesse supplémentaire demande une preuve. Respecter les [règles éditoriales](../content/editorial-rules.md) et le [design](../content/design.md).

## Sources et points d’intervention

| Élément | Source / point d’intervention |
|---|---|
| Pages et navigation | `src/pages/`, `src/layouts/SiteLayout.astro`, `src/components/` ; routes FR/EN dans `content/publication.json` |
| Production | Cloudflare, Worker `nodina-production`, configuration `wrangler.production.json`, route `nodina.com/*` |
| Compilation publique | `tools/build-release.py`, paquet ignoré `tools/forms/production/.local/public-dist/` |
| Préproduction privée | `https://nodina-preproduction.jd-fd3.workers.dev/fr/`, Cloudflare Access JD, session 6 heures au dernier constat |
| Contact | `tools/forms/production/README.md`, `Code.gs`, `Operations.gs`, stockage Drive privé par demande ; métadonnées ignorées dans `.local/` |
| GA4 | Propriété `557424928`, flux `16047238617`, balise `G-J8NV7Z1HMX` ; collection SITE: NODINA publiée |
| Reporting | `tools/terraform-collector/`, lecteur Contact `tools/forms/candidate/reporting-reader.gs`, bundle Google conservé du 8 octobre |
| Données / rapports | Dépôt privé `Nodina-co/nodina-marketing-analytics`, `data/` et `reports/`, clone adjacent |
| Instructions Terraform | `terraform.md` dans le dépôt du site ; lancer à la demande « run terraform report » |

Ne pas exécuter un déploiement à partir d’une configuration historique `.proposed.json`. Un simple build de développement conserve les protections de maquette ; il n’est pas le paquet public. Le site n’est pas automatiquement déployé par un push. La CI actuelle contrôle le build local sur PR ou lancement manuel, pas la disponibilité production quotidienne.

## Commandes du contrôle de clôture

| Commande depuis le dépôt | Portée |
|---|---|
| `python3 tools/conformance.py --help` | Aide relue dans cette session |
| `python3 tools/conformance.py --report reports/conformance-2026-10-09.md` | Audit du paquet public conservé et des fichiers de gouvernance |
| `python3 tools/conformance.py --live --report reports/conformance-2026-10-09.md` | Même audit avec GET publics bornés, sans POST ni notification ; nécessite accès réseau |
| `python3 tools/build-release.py --help` | Aide relue ; aucun nouveau build public pour la clôture |
| `python3 tools/terraform-digest.py --help` | Aide relue ; aucune nouvelle extraction de métriques privées pour la clôture |

Le contrôle de conformité retourne 1 si un FAIL **ou un OPEN** subsiste. OPEN est une recherche, une preuve humaine ou une vérification différée ; il ne devient pas un échec HTTP. PASS porte seulement sur le point décrit. Le guide ne remplace pas les outils spécialisés absents listés dans le rapport.

Pour les compilations futures, respecter la version Node déclarée dans package.json. Ne pas utiliser `tools/check-site.py` comme preuve de production : il vérifie notamment les protections de maquette. Les suites existantes restent disponibles mais n’ont pas été relancées pour cette clôture conformément à la demande de JD.

## Lire les résultats

GA4 couvre les visiteurs consentants. `page_view` est une visite de page, `primary_cta_click` un clic, `form_start` une première interaction ; `generate_lead` signifie stockage confirmé. Aucun de ces événements ne prouve la qualification. Une demande réelle doit être rapprochée du stockage Contact, en privé. Les quatre étapes du funnel sont ouvertes, sans contrainte de délai ; elles ne prouvent pas à elles seules un même envoi commercial.

Les rapports d’acquisition comportent sessions, pages d’arrivée, canaux et demandes enregistrées. Garder toutes les sessions au dénominateur ; sélectionner generate_lead dans les colonnes d’événements plutôt qu’un filtre global. Les sources IA du collecteur et le canal natif AI Assistant ont des définitions différentes ; ne pas additionner ou confondre leurs comptes.

Le test du 6 octobre n’est pas une baseline post-lancement. Ne pas additionner les snapshots ni confondre données manquantes et zéro. Comparer des périodes complètes de longueur identique et respecter les seuils prudents de terraform.md. Ne pas attribuer une conversion à une requête Google individuelle. Les citations IA sont des échantillons datés, pas des classements. Les pages publiées le 9 octobre restent « too early to judge » pendant 28 jours.

## Suivi proposé pour les quatre prochaines semaines

Ce calendrier est une proposition de travail, sans nouveau déclencheur, publication automatique ou brief approuvé. JD fixe le rythme.

| Semaine | Travail et résultat attendu |
|---|---|
| 12–18 octobre | Confirmer le JSON programmé du lundi ; produire le premier rapport post-lancement avec ses limites. Lire Bing/Google/IndexNow. Refaire un échantillon IA daté autour du 16 octobre si JD poursuit la recherche. |
| 19–25 octobre | Terminer recherche, mots-clés, clusters et intention ; préparer la revue de plan. Définir la qualification et le dédoublonnage commerciaux. |
| 26 octobre–1 novembre | Après revue du plan, préparer les premiers briefs et les maquettes article/blog ; inventorier et prioriser les outils de maintenance manquants. Aucun titre ou volume de recherche inventé. |
| 2–8 novembre | Lire les quatre premières semaines, attendre le 6 novembre pour juger les pages ; actualiser l’échantillon IA et décider avec JD du premier contenu à publier. Réauditer les écarts de Phase 8. |

Chaque lundi : collecte existante vers 09:00 Paris, puis rapport à la demande et trois actions proposées. À chaque contenu public : vérifier les faits, consentement, liens, head/JSON-LD, versions FR/EN, découverte et accord applicable. Mensuellement : assertions, délais de conservation et échantillons de visibilité. Trimestriellement : audit Prometheus, règles crawler, contrats et maintenance. `security.txt` expire le 9 avril 2027 ; prévoir son actualisation avant cette date. La date effective d’expiration du token Reporting doit être relue dans GitHub par JD, sans exposer sa valeur ; la date du formulaire initial ne prouve pas celle du token remplacé.

## Incident et retour arrière

Conserver la version active avant un futur envoi. Version actuelle documentée : `8f0b65c7-ae6c-4d50-9264-6209c7fcaa66`. Version publique précédente avec GA4 désactivé : `cc253aca-e98a-4b49-abb7-4a31cff2e039`. Le retour arrière doit garder routes, variables et DNS mail. Ne pas retirer une route avant qu’une destination utilisable existe. GitHub Pages dépublié ne se restaure pas par un simple changement DNS. Un rollback n’a pas été exécuté pendant cette clôture.

Pour Contact, se référer au README production et aux versions Google ; le déploiement précédent privé ne remplace pas sans préparation l’accès public. Rétention manuelle après douze mois sans suite : contrôler en privé le contexte de la demande avant effacement. Les statistiques agrégées et les demandes nominatives restent séparées.
