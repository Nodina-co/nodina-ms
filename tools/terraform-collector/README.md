# Reporting NODINA — installation en cours

État au 5 octobre 2026 : fichiers préparés localement depuis PROMETHEUS Appendix G ; six tests simulés réussis. Projet Apps Script Reporting créé par JD et associé au projet Cloud ; sources collées et enregistrées par JD, puis comparées aux fichiers locaux par l'agent. Aucun collecteur exécuté, aucun token obtenu, aucun transfert GitHub ni déclencheur installé. Google Cloud confirme `jd@nodina.com` et l'organisation `nodina.com` (`679600609001`).

## Étape active

JD confirme la création. Le tableau de bord confirme **NODINA Reporting**, ID **nodina-reporting**, numéro **931529905894**, dans l'organisation `nodina.com`. Google Sheets API figure dans Enabled APIs & Services. JD confirme « fait » après activation Analytics et création OAuth : Google Analytics Data API affiche **Status: Enabled**. L'agent active ensuite Google Search Console API, dont la fiche présente les mêmes Google APIs Terms of Service déjà acceptées par JD ; son statut **Enabled** est relu. [Preuve Search Console API](../../reports/screenshots/nodina-reporting-search-api-enabled-20261005.jpg).

JD termine la création Google Auth Platform ; la console affiche **OAuth configuration created!** et Audience confirme **Internal**. Nom préparé **NODINA Reporting**, support et contact `jd@nodina.com`. [Audience relue](../../reports/screenshots/nodina-reporting-oauth-internal-20261005.jpg). Aucun client OAuth supplémentaire, client secret, compte de service ni droit utilisateur accordé au collecteur. Aucun compte de facturation ni essai gratuit activé.

Étape active : JD confirme « créé ». Apps Script affiche **NODINA - Reporting** sous `jd@nodina.com`, distinct du formulaire Contact. Script ID : `1a1dGQd864bogaKQIe5aDc1vqHPz0BNZmUDKDoFaJxewIH4vQk8-TPqHg`. L'agent rend le manifeste visible dans l'éditeur et associe le projet Cloud ; Project Settings confirme **GCP Standard**, numéro **931529905894**. Fuseau Paris et V8 cochés. [Association confirmée](../../reports/screenshots/nodina-reporting-cloud-linked-20261005.jpg).

JD confirme « fait ». Les deux fichiers distants sont lus via les actions Copier de l'éditeur : `Code.gs` correspond exactement à la source locale (hors fins de ligne et espaces de bord), et le manifeste est identique après parsing JSON. Le bouton Save project to Drive est désactivé et l'éditeur présente cloud_done. [Installation vérifiée](../../reports/screenshots/nodina-reporting-sources-installed-20261005.jpg). Aucun collecteur exécuté ni autorisation de lecture des sources accordée.

JD confirme « créé ». GitHub affiche **Nodina-co/nodina-marketing-analytics**, badge **Private**, branche **main**, README et commit initial `f0197fce0229e04130059be0a411cca4661d83fe`. [Dépôt privé confirmé](../../reports/screenshots/nodina-reporting-repo-private-20261005.jpg).

JD confirme « connecté » après Confirm access. Le formulaire fine-grained affiche NODINA Reporting, propriétaire Nodina-co, expiration **2027-01-03**. L'agent remplace All repositories par **Only select repositories** et sélectionne exclusivement **Nodina-co/nodina-marketing-analytics** : Selected 1 repository est relu. Permissions : **Contents Read and write**, **Metadata Read-only**, **Organizations (0)**. [Formulaire prêt](../../reports/screenshots/nodina-reporting-token-ready-20261005.jpg). Aucun token généré ni accès accordé par l'agent.

Étape active : JD doit cliquer Generate token, puis copier directement la valeur dans Apps Script Reporting → Project Settings → Script Properties. Une ligne non enregistrée **GITHUB_TOKEN** est préparée, valeur vide ; le bouton Save script properties reste à JD. [Destination prête](../../reports/screenshots/nodina-reporting-github-property-ready-20261005.jpg). La création et les secrets restent à l'opérateur selon PROMETHEUS 15.2b. Le token donne accès en lecture/écriture au seul dépôt privé de rapports jusqu'à son expiration ; prévoir son remplacement avant le 3 janvier 2027.

Après collage/enregistrement, JD doit revenir sur Editor et quitter la page GitHub qui affiche la valeur du token avant de répondre « fait ». Lors de la reprise, ne pas demander de snapshot complet des Script Properties ou de la page du token ; ne pas lire le presse-papiers. Vérifier uniquement le nom de la propriété et si une valeur existe, sans la lire ou la journaliser, puis confirmer le fonctionnement lors du test réel. Aucun secret ne va dans le chat, le code ou un fichier local.

Le formulaire Contact n'est pas modifié. Ce collecteur n'est pas une Web app : ne pas le déployer ni créer d'URL publique.

## Configuration préparée

- Fuseau : `Europe/Paris` ; cible de collecte : lundi vers 09:00, à installer après le test réel réussi.
- GA4 : propriété `557424928` ; ne pas utiliser le Measurement ID `G-J8NV7Z1HMX` pour le reporting.
- Google Cloud : `nodina-reporting` ; numéro associé au projet Apps Script Reporting **931529905894**.
- Search Console : `sc-domain:nodina.com` ; Bing : `https://nodina.com/`.
- Destination configurée : `Nodina-co/nodina-marketing-analytics`, créée par JD et confirmée **Private**, branche `main`, README initial. Aucune collecte transférée ; aucune écriture vers le dépôt du site.
- Événements préparés : voir [content/analytics.md](../../content/analytics.md). Ils ne sont pas encore instrumentés.
- Classeur Contact existant à réutiliser via `LEAD_SHEET_IDS`, sans exporter les coordonnées ni les messages.

## Suite, une étape à la fois

1. Projet Cloud : réutiliser un projet adapté ou faire créer NODINA Reporting par JD, relever ID et numéro.
2. Activer Google Analytics Data API, Google Search Console API et Google Sheets API ; préparer le consentement OAuth interne à l'organisation Workspace, à confirmer dans la console.
3. JD crée le projet Apps Script **NODINA — Reporting**, distinct du formulaire Contact, copie `Code.gs` et `appsscript.json`, puis associe le numéro Cloud. Ce collecteur n'est pas une application web : aucune étape Deploy, aucun accès Anyone ni URL publique.
4. JD crée le dépôt analytique privé et un token GitHub limité à ce seul dépôt, Contents en lecture/écriture, Metadata en lecture seule. JD obtient la clé d'API Bing dans Settings → API access. Cette clé est différente d'IndexNow. Les valeurs restent dans Script Properties ; ne pas les communiquer dans le chat ni les placer dans Git.
5. Propriétés à renseigner par JD : `GA4_PROPERTY_ID`, `BING_API_KEY`, `GITHUB_TOKEN`, `BING_SITE_URL`, `LEAD_SHEET_IDS`. Aucun secret dans les fichiers locaux.
6. JD autorise et lance `uploadTestReport`. Lire ensemble `data/YYYY-MM-DD-test.json` : les trois sources doivent répondre sans erreurs réelles ; les notes de données vides sont acceptables. Ensuite seulement JD lance `installWeeklySchedule`.
7. Préparer `terraform.md` et les pointeurs dans le dépôt analytique une fois celui-ci disponible, produire le premier rapport, puis vérifier la première exécution automatique lors de la session suivante.

## Adaptations et validation

`node --test tools/terraform-collector/offline.test.mjs` teste : sources vides, refus de destination publique, mauvais ID GA4, invalidation du gate après un test échoué, comptage des dates ISO en heure de Paris sans essais ni données personnelles, et refus des dates illisibles. Ce sont des simulations ; aucun succès API réel n'est déclaré.

Le formulaire existant stocke les dates ISO en texte et marque ses essais dans `name`, alors que le modèle ne traite que des Date et des `ref` TEST : adaptation nécessaire pour éviter des comptes faux. L'onglet lu est explicitement Contact. La lecture utilise Sheets REST avec `spreadsheets.readonly` : `SpreadsheetApp.openById` exige le scope Sheets complet, incompatible avec le manifeste en lecture seule. L'architecture Apps Script → dépôt privé reste celle de PROMETHEUS. Les erreurs réseau/JSON Google sont neutralisées pour éviter la journalisation des URL ou réponses ; les redirections des requêtes authentifiées sont désactivées. La planification exige un test réussi de la configuration courante et un nouveau test échoué invalide l'accord précédent.

Documentation primaire vérifiée le 5 octobre : [projets Cloud](https://docs.cloud.google.com/resource-manager/docs/creating-managing-projects), [GA4 runReport](https://developers.google.com/analytics/devguides/reporting/data/v1/rest/v1beta/properties/runReport), [Search Analytics](https://developers.google.com/webmaster-tools/v1/searchanalytics/query), [sitemaps](https://developers.google.com/webmaster-tools/v1/sitemaps/list), [Sheets values.get et scopes](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets.values/get), [ScriptApp](https://developers.google.com/apps-script/reference/script/script-app), [SpreadsheetApp](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-app), [UrlFetchApp](https://developers.google.com/apps-script/reference/url-fetch/url-fetch-app), [Bing API access](https://learn.microsoft.com/en-us/bingwebmaster/getting-access), [méthodes Bing](https://learn.microsoft.com/en-us/dotnet/api/microsoft.bing.webmaster.api.interfaces.iwebmasterapi?view=bing-webmaster-dotnet), [GitHub Contents](https://docs.github.com/en/rest/repos/contents), [métadonnées du dépôt GitHub](https://docs.github.com/en/rest/repos/repos#get-a-repository). Le contrat JSON Bing et les autorisations effectives restent à confirmer lors du test réel.

Documentation GitHub vérifiée le 5 octobre pour le modèle de formulaire et les droits fine-grained : [gestion des personal access tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens). Le modèle ne génère pas de token ; la sélection de ce seul dépôt doit encore être vérifiée dans le formulaire après authentification.
