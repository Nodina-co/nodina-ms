# PLAN — pages de lancement NODINA

Les textes et la structure FR/EN, puis le lancement public, sont approuvés par JD le 9 octobre 2026. Les seize pages sont **published**, sur nodina.com, avec leur date réelle de publication. Contact Production version 2 est public ; GA4 est actif après consentement, avec une première vue confirmée dans Realtime. [Activation](../reports/ga4-activation-20261009.md). [Bascule et vérifications](../reports/public-launch-20261009.md).

**Révision du 9 octobre, non publiée :** la home FR/EN est en relecture (`reviewPending`), avec quatre pages d’offre en brouillon. Les dates d’accord des homes ci-dessous concernent la version publique précédente. La compilation du candidat public est bloquée tant que la révision n’est pas validée. [Dossier de préparation](../reports/offers-restructure-20261009.md).

**Images Open Graph (26 octobre 2026) :** chaque page et chaque article reçoit une image 1200 × 630 générée par `tools/og/build-og.mjs` (gabarit « Statement » sur fond anthracite : logo, libellé bleu ciel, titre de la page, sous-titre et pied réglé). Le script s’exécute au début de `npm run build` et de `build-release.py` ; les fichiers sont dans `public/assets/og/` et `check-site.py` refuse une page sans image. Un nouvel article n’a rien à faire de plus : son titre, sa description et son thème (front matter) alimentent l’image. Ne pas créer d’image à la main.

**Référence active au 26 octobre 2026 :** le code et le plan machine comprennent le Journal FR/EN et son premier article traduit. Après retrait des deux catalogues, le build de cette révision compte vingt-deux pages localisées. Les paragraphes et le tableau du lancement ci-dessous conservent leur historique ; la révision des profils reste préparée localement, non déployée.

Source machine : [publication.json](publication.json). `preview` conserve les bandeaux et noindex ; `release-candidate` reste noindex. `production` exige l’accord de lancement, des pages published datées et l’accès public Contact enregistré.

| Page | Langue | Chemin canonique | État | Texte/structure validés | Modifiée | Publiée |
|---|---|---|---|---|---|---|
| home | fr | /fr/ | published | 2026-10-09 | 2026-10-09 | 2026-10-09 |
| vetting | fr | /fr/selection-des-talents/ | published | 2026-10-26 | 2026-10-26 | 2026-10-09 |
| profiles | fr | /fr/profils/ | hidden (version locale) | 2026-10-09 | 2026-10-26 | 2026-10-09 |
| manifesto | fr | /fr/manifeste/ | published | 2026-10-09 | 2026-10-09 | 2026-10-09 |
| contact | fr | /fr/contact/ | published | 2026-10-09 | 2026-10-09 | 2026-10-09 |
| privacy | fr | /fr/confidentialite/ | published | 2026-10-09 | 2026-10-09 | 2026-10-09 |
| cookies | fr | /fr/cookies/ | published | 2026-10-09 | 2026-10-09 | 2026-10-09 |
| legal | fr | /fr/mentions-legales/ | published | 2026-10-09 | 2026-10-09 | 2026-10-09 |
| home | en | /en/ | published | 2026-10-09 | 2026-10-09 | 2026-10-09 |
| vetting | en | /en/vetting/ | published | 2026-10-26 | 2026-10-26 | 2026-10-09 |
| profiles | en | /en/engineers/ | hidden (local version) | 2026-10-09 | 2026-10-26 | 2026-10-09 |
| manifesto | en | /en/manifesto/ | published | 2026-10-09 | 2026-10-09 | 2026-10-09 |
| contact | en | /en/contact/ | published | 2026-10-09 | 2026-10-09 | 2026-10-09 |
| privacy | en | /en/privacy/ | published | 2026-10-09 | 2026-10-09 | 2026-10-09 |
| cookies | en | /en/cookies/ | published | 2026-10-09 | 2026-10-09 | 2026-10-09 |
| legal | en | /en/legal-notice/ | published | 2026-10-09 | 2026-10-09 | 2026-10-09 |
| systems | fr | /fr/solutions-ia-sur-mesure/ | draft | À valider | 2026-10-09 | — |
| teams | fr | /fr/equipes-ai-native/ | draft | À valider | 2026-10-09 | — |
| systems | en | /en/custom-ai-solutions/ | draft | À valider | 2026-10-09 | — |
| teams | en | /en/ai-native-teams/ | draft | À valider | 2026-10-09 | — |

## Révision des profils — 26 octobre 2026

Quatre profils réels anonymisés validés par JD sont intégrés à la sélection FR/EN, sans portraits ni statuts de disponibilité. Les deux routes du catalogue sont exclues du build et de la liste active de publication, avec leur historique dans `hiddenPages`. Leurs liens sont retirés. Changements locaux, non déployés, repris sur `origin/main` (`4b7e524`, blog inclus) ; les textes, couleurs, logos et redirections de langue de cette base sont conservés.

## Plan éditorial restant

Ce lancement ne termine pas les phases de recherche, clusters, requêtes et briefs PROMETHEUS. Le code repris de `main` comprend désormais le Journal et un premier article en français et en anglais ; le build de publication les inclut dans le flux RSS. Aucun guide supplémentaire n’est ajouté par cette révision. Les documents internes ne sont pas publiés.

Le [guide de reprise](../reports/prometheus-operating-guide-20261009.md) propose le suivi des semaines du 12 octobre au 8 novembre : première collecte, recherche/revue de plan, briefs et maquettes, puis lecture à 28 jours. Ce suivi n’est pas un calendrier éditorial approuvé : aucune requête stratégique, aucun titre d’article ni date de publication supplémentaire n’est inventé. [Clôture du lancement et réserves](../SUMMARY.md).

**Recherche Phase 3 (26 octobre 2026) :** la recherche mots-clés et requêtes IA, FR et EN, est faite ([rapport](../research/research-report.md), [clusters](../research/clusters.md), [keywords.csv](../research/keywords.csv)). Un [plan éditorial](editorial-plan.md) avec deux files indépendantes (FR, EN) en découle ; il est **proposé, non approuvé**. Les volumes de recherche restent inconnus (aucune donnée Search Console encore, aucun outil payant) ; les priorités reposent sur la présence en autocomplétion, les SERP observées et les citations des assistants.

## Retour arrière

GitHub Pages a été dépublié par JD. L’archive ancienne ne suffit pas à restaurer cet hébergement ; voir le [rapport de lancement](../reports/public-launch-20261009.md).
