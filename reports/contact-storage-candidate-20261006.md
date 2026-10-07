# Collecteur par dossier — construction locale du 6 octobre 2026

**Version candidate 3 privée vérifiée ; essais A/B et réessai de A terminés. Après accord ciblé, fichier A et notification supprimés définitivement ; B conservé et synthèse reconstruite le 7 octobre à 11 h 11 Paris.** [Recette du retrait et limites](contact-retirement-candidate-20261007.md#résultat-après-laccord-ciblé), [code et procédure](../tools/forms/candidate/README.md).

Le candidat écrit un fichier Sheets privé par demande, avec Contact et Conservation. Il contrôle le propriétaire et les permissions avant l’écriture, conserve le consentement contact-v1, écrit les valeurs visiteurs en texte brut et envoie seulement un lien privé dans la notification. La configuration exige le mode de recette et une durée explicite ; seules les demandes TEST- sont acceptées. Aucun mécanisme de suppression de fichier ou d’e-mail n’est inclus.

La référence est émise et signée par le serveur. Le client conserve le même jeton pour ses nouvelles tentatives ; le formulaire HTML rendu par le serveur fournit lui aussi un jeton, sans JavaScript. Une création à l’issue inconnue est réconciliée dans le même fichier, ou reste bloquée. Une référence retirée est refusée avant et après effacement, puis reste invalide après son expiration et le retrait du marqueur temporaire. Ce retrait du marqueur n’efface pas un fichier : il ne concerne que l’état technique expiré.

La synthèse calcule les demandes encore conservées, hors TEST, par jour et page. Elle est rendue indisponible avant modification et reconstruite manuellement ; un fichier illisible ou incomplet empêche la publication d’un compte partiel. Le lecteur de reporting proposé n’exige aucun droit Drive et rejette une synthèse périmée ou modifiée pendant la lecture. Aucun UUID, ID Drive ou champ de contact dans ses résultats.

## Validation

Commande : `node --test tests/contact*.test.mjs tools/terraform-collector/offline.test.mjs`, avec le runtime Node fourni par Codex. Tests Google et MailApp simulés, horloge contrôlée et panne injectée ; aucun service externe appelé.

**Résultat : 37 tests réussis, zéro échec**, dont vingt cas du candidat et dix-sept cas du formulaire version 1/client actuel et reporting existant. Les cas du candidat couvrent jeton falsifié/expiré, même référence avec contenu différent, réponse de création perdue, création non retrouvée, écriture interrompue, notification incertaine, partage inattendu, retrait et renvoi, pagination, texte ressemblant à une formule, POST sans JavaScript, TEST et jour Paris, synthèse invalide/périmée ou changée pendant la lecture, scopes et surface publique du manifeste.

Les fichiers actifs `tools/forms/contact.gs`, `src/scripts/contact.js`, le manifeste Contact actuel et `tools/terraform-collector/Code.gs` ont un diff vide. Les fichiers candidats ne sont pas importés dans le site. Lors de la construction locale, aucune opération cloud effectuée ; la préparation Google suivante est détaillée ci-dessous.

## Préparation Google après le « Go » suivant

Projet créé sous `jd@nodina.com`, nommé **NODINA — RECETTE — Contact par dossier — 20261006**, ID `1uhL__xY79TxrJ20hbxCHlAtVJwV8fLMeU3jx7FqcDO8wRQ60xT4sdi0t`, projet GCP par défaut. Aucun projet Contact ou Reporting existant modifié.

Code.gs reçoit la concaténation core + google + web, vérifiée par relecture intégrale de l'éditeur. Google masque les helpers privés dans son menu ; ajout d'un lanceur temporaire de deux lignes, appelant seulement `ndInitializeRehearsal_`, puis relecture exacte. **À retirer avant tout déploiement web.** `initializeRehearsal` est sélectionné, sans exécution. Manifeste enregistré et relu exactement ; Drive v3 et Sheets v4 visibles, scopes drive.file et script.send_mail uniquement, exceptionLogging NONE.

Trois propriétés enregistrées : ND_MODE=rehearsal, ND_OWNER_EMAIL=jd@nodina.com, ND_TOKEN_TTL_SECONDS=300. Cinq minutes choisies uniquement pour éprouver l'expiration fictive ; aucune durée de production adoptée. Pas de clé, dossier ou synthèse créé ; aucune soumission, notification, suppression, migration, autorisation ou déploiement réalisé. JD doit lancer l'initialisation et effectuer son consentement OAuth selon PROMETHEUS §3.

Preuves : manifeste enregistré (capture retirée le 7 octobre 2026), lanceur sélectionné (capture retirée le 7 octobre 2026). La recette réelle des permissions et API reste à effectuer après ce consentement.

## Limites et prochaine étape

### Version 3 déployée et vérifiée le 7 octobre

JD confirme **« deployé »** après son clic final. Manage deployments affiche **Version 3 on Oct 7, 2026, 1:19 AM**, description « Recette TEST privée — Conservation fr_FR — 2026-10-07 », sur le même ID et la même URL /exec. Execute as Me (jd@nodina.com) et Who has access Only myself relus ; aucun élargissement d'accès. Confirmation Google (capture retirée le 7 octobre 2026).

Dans Project History, la version immuable 3 est sélectionnée et Code.gs est copié seulement pour comparaison en mémoire : correspondance exacte avec les 29 774 caractères du code validé, SHA-256 `c9e277d3eb644ad6c1d5543dd405cdfd511ea1ca659b7f97b278f715115168ff`. La formule à points-virgules est présente ; aucun lanceur initializeRehearsal/diagnoseRehearsal. Le correctif est donc inclus dans la version active, pas seulement dans l'éditeur.

GET /exec?locale=fr affiche le formulaire privé attendu, champs vides et consentement décoché. Rendu de la version 3 (capture retirée le 7 octobre 2026). Aucun POST supplémentaire : les trois soumissions autorisées ont été exécutées sur la version 2, les deux D2 corrigées ensuite ont été vérifiées dans Google. La création d'un nouveau fichier directement par la version 3 n'est pas présentée comme retestée.

La mise à jour privée du correctif est close. Les étapes restantes de la recette restent l'effacement par dossier et ses versions, le retrait/expiration, la synthèse et son lecteur, puis le client JavaScript/CORS. A et B et leurs notifications sont conservés ; aucun effacement ou nouvel envoi déduit de ce « deployé ». Pas de changement du site, Contact version 1 ou Reporting actif. Vérification en lecture seule et suivi mis à jour, aucune source exécutable modifiée ; les 54 tests déjà réussis ne sont pas relancés sans changement.

### Essais envoyés après accord explicite le 7 octobre

JD autorise précisément l'agent : **« oui, envoie les essais »**. Cette délégation couvre A FR, B EN et un réessai identique de A, trois POST au maximum, dans le seul candidat privé ; notifications à jd@nodina.com. Les formulaires encore inutilisés ont été rechargés avant leur premier POST pour renouveler les preuves de cinq minutes, puis remplis avec les seules valeurs fictives déjà proposées. Aucun renouvellement après le POST de A.

**Trois doPost version 2 sont Completed** dans Google : 01 h 06 min 32 s (A, 8,384 s), 01 h 06 min 58 s (B, 12,705 s), 01 h 07 min 23 s (réessai de A, 3,81 s), heure Paris. A et B affichent leur confirmation dans leur langue. Rechargement de la confirmation POST de A : même confirmation ; journal Google confirme ce troisième POST. Trois exécutions (capture retirée le 7 octobre 2026), confirmation A (capture retirée le 7 octobre 2026), confirmation B (capture retirée le 7 octobre 2026).

Recherche du dossier isolé sans filtre de corbeille : exactement deux fichiers. Métadonnées de chacun : Sheets natif, parent unique dossier de recette, shared=false, une seule permission user/owner jd@nodina.com, locale fr_FR, fuseau Europe/Paris. Contact!A1:Q3 contient les en-têtes, une seule demande et aucune troisième ligne de données.

| Essai | Référence | Fichier privé | Notification |
|---|---|---|---|
| A FR | 933da572-65ae-49ce-bf93-6b27addea09a | [Dossier A](https://docs.google.com/spreadsheets/d/1we7AMCgzCgsqK6XslTkbwpbe76K0pO0nySsT5A8eLo4/edit) | sent ; un courriel reçu à 01 h 06 |
| B EN | 79128ce1-c6f3-4bce-83ca-86449550258e | [Dossier B](https://docs.google.com/spreadsheets/d/1YQcY2BYxGSbU7VS0cgdzWrRxgMr50JfzurFUXe0rdho/edit) | sent ; un courriel reçu à 01 h 07 |

Deux courriels réellement présents dans Inbox de jd@nodina.com, une notification par référence après le réessai. De/À relus pour chacun : jd@nodina.com. Sujet fixe « NODINA · Nouvelle demande » ; corps limité à la référence et au lien privé, sans nom, coordonnées du visiteur ou contexte. Preuve Gmail ciblée (capture retirée le 7 octobre 2026). Aucune notification aux adresses example.com.

Contact!I2 de A contient littéralement `=1+1 — TEST-RECETTE-20261007-A. Demande fictive de recette privée, sans donnée client.` : userEnteredValue.stringValue et effectiveValue.stringValue, aucune formulaValue. Les deux demandes conservent locale, attribution, consentement exact contact-v1 et timestamp de réception/consentement identiques ; champs UTM vides. Conservation contient la bonne référence, À examiner, dernier échange vide, responsable JD et trois copies À vérifier.

**Erreur de formule trouvée et corrigée.** Conservation!D2 affiche initialement #ERROR! / Formula parse error dans les deux fichiers. L'adaptateur configure fr_FR mais envoyait des séparateurs virgules avec USER_ENTERED. Le remplacement des seules virgules de la formule par des points-virgules dans A fait disparaître l'erreur, sans changer statut ni date : cause confirmée dans Google, puis même correction ciblée dans B. Les lectures des deux D2 montrent la formulaValue corrigée, aucune errorValue et échéance vide attendue. Vues Google à 100 % inspectées : A (capture retirée le 7 octobre 2026), B (capture retirée le 7 octobre 2026). La colonne Référence conserve la largeur initiale et tronque visuellement l'UUID ; sa valeur complète est vérifiée par connecteur. Aucune mise en page générale modifiée.

Formule corrigée : `=IF(AND(B2="Sans suite";ISNUMBER(C2);C2>0;C2<=TODAY());EDATE(C2;12);"")`. Modification locale limitée à google.gs et au test existant RAW/formule/locale : test ciblé échoue avant correction ; suite complète `node --test tests/*.test.mjs tools/terraform-collector/offline.test.mjs` avec Node embarqué : **54 réussis, zéro échec**, dont 21 cas candidats. Le simulateur ne parse pas Sheets : correction aussi confirmée dans les vrais fichiers fr_FR. Aucun quatrième POST envoyé.

Code.gs corrigé enregistré et relu exactement dans le seul projet candidat, sans lanceur temporaire ; SHA-256 `c9e277d3eb644ad6c1d5543dd405cdfd511ea1ca659b7f97b278f715115168ff`. Manifeste et propriétés inchangés. Même déploiement préparé sur New version, Me jd@nodina.com, Only myself. **Clic Deploy laissé à JD selon README, étape 4 ; version 2 encore active, correctif de création des futurs fichiers non déployé.** Nouvelle version prête (capture retirée le 7 octobre 2026), paramètres privés et clic final (capture retirée le 7 octobre 2026).

Envoi, stockage RAW et absence de doublon vérifiés en recette HTML authentifiée. Conservation réparée dans les deux fichiers ; mise à jour du déploiement encore attendue. Effacement par dossier, retrait/expiration, reconstruction et lecture de synthèse, client JavaScript/CORS restent ouverts. Aucune suppression, reconstruction de synthèse, migration, ouverture publique ni modification du service actif. Les deux fichiers TEST, leurs versions et notifications sont conservés.

### Version 2 vérifiée et essais fictifs proposés

JD répond une seconde fois « déployé ». Google confirme Version 2 on Oct 7, 2026, 12:52 AM sur le même déploiement. Manage deployments relu : version 2, Execute as Me (jd@nodina.com), Who has access Only myself. Confirmation Google (capture retirée le 7 octobre 2026). L'ancienne description apparaît aussi dans Archived ; aucune action d'archivage par l'agent.

GET /exec?locale=fr et /exec?locale=en affichent maintenant NODINA Contact avec les champs attendus, le bandeau de recette, le consentement obligatoire décoché et les liens de droits. Action du formulaire FR relue : https://script.google.com/a/nodina.com/macros/s/AKfycbxFrvO1t14-hTUqQKxcPGqAh3avNWdFm9tnA13fhDCf9ZLdr0FOKM12N6lPkIgZL_8G/exec. FR déployé (capture retirée le 7 octobre 2026), EN déployé (capture retirée le 7 octobre 2026). **Investigation du rendu : DONE**, correctif confirmé sur le scénario initial /exec. Stockage et notifications de demandes encore non éprouvés dans Google.

Les deux formulaires de revue sont remplis, sans consentement coché ni clic d'envoi :

| Champ | A — français | B — anglais |
|---|---|---|
| Nom | TEST-RECETTE-20261007-A | TEST-RECETTE-20261007-B |
| E-mail fictif | recette-a@example.com | recette-b@example.com |
| Organisation | Organisation fictive A | Fictional organization B |
| Besoin | teams | systems |
| Projet | =1+1 — TEST-RECETTE-20261007-A. Demande fictive de recette privée, sans donnée client. | TEST-RECETTE-20261007-B — Fictional private rehearsal inquiry. No customer information. |
| Calendrier | Recette privée — 7 octobre 2026 | Private rehearsal — 7 October 2026 |
| Référence de page | /fr/contact/ | /en/contact/ |
| Consentement proposé | contact-v1 français, à cocher seulement après accord | contact-v1 anglais, à cocher seulement après accord |

A préparé (capture retirée le 7 octobre 2026), B préparé (capture retirée le 7 octobre 2026). Le texte de A commençant par =1+1 permettra d'éprouver l'écriture RAW sans formule exécutée. Aucun nom ou e-mail réel de visiteur. Le dossier privé `17Gqbu2aT6HjUR0frb5SLC-fan3Czifvz` est encore vide, recherche des enfants sans filtre de corbeille.

**Périmètre soumis à JD :** autoriser explicitement l'agent à cocher les deux consentements fictifs et soumettre A et B au seul candidat privé, puis tenter un réessai identique de A avec sa même référence pour contrôler l'idempotence. Trois POST au maximum ; deux fichiers de demande et deux notifications minimales à jd@nodina.com attendus, aucune notification aux adresses example.com. Vérifier fichiers privés, champs RAW, consentement, Conservation et statuts ; réception réelle en boîte à vérifier séparément. Aucun effacement ni ouverture publique proposé. Selon PROMETHEUS §3, les envois restent à l'opérateur sans instruction explicite contraire de JD ; les « déployé » ne valent pas cet accord.

Les jetons sont valables cinq minutes. Si un formulaire préparé expire avant toute soumission, le recharger et remettre les mêmes seules données fictives avant le premier POST. Ne pas renouveler la référence après une soumission ou une réponse incertaine. Aucun jeton ni clé lu, copié ou consigné dans les preuves. Aucun nouveau code, droit ou changement du service actif pendant cette vérification.

### Déploiement confirmé, correctif Workspace préparé le 7 octobre

JD répond « déployé ». Google confirme Version 1 on Oct 7, 2026, 12:44 AM, ID `AKfycbxFrvO1t14-hTUqQKxcPGqAh3avNWdFm9tnA13fhDCf9ZLdr0FOKM12N6lPkIgZL_8G`. Manage deployments confirme Execute as Me (jd@nodina.com) et Only myself. [URL privée](https://script.google.com/a/macros/nodina.com/s/AKfycbxFrvO1t14-hTUqQKxcPGqAh3avNWdFm9tnA13fhDCf9ZLdr0FOKM12N6lPkIgZL_8G/exec).

**Investigation : DONE_WITH_CONCERNS**, correctif vérifié en aperçu réel et localement, relecture du /exec corrigé en attente du clic Deploy de JD.

- Symptôme : GET français affiche Envoi non confirmé avant tout POST.
- Cause : ndHostedForm_ n'acceptait que /macros/s/id/exec. Les chemins Workspace de NODINA et /dev étaient rejetés. Diagnostic éditeur sans secret : settings et receipt franchis, endpointRedacted=https://script.google.com/a/nodina.com/macros/s/[deployment]/dev, stage=form/result=endpoint-rejected. La forme affichée par le dialogue de déploiement est /a/macros/nodina.com/s/id/exec. Diagnostic sans jeton ni clé (capture retirée le 7 octobre 2026).
- Correction : seul le contrôle d'URL de tools/forms/candidate/web.gs modifié, avec un cas de régression dans tests/contact-candidate.test.mjs. Les deux chemins Workspace NODINA et le chemin standard sont admis, exec ou dev ; HTTPS, hôte exact, domaine NODINA, identifiant et fin de chemin restent contraints. Pas de changement du client JavaScript, du manifeste, des droits, du stockage ou des notifications.
- Test : nouveau cas échoue avant correctif, puis suite complète avec Node fourni : tests 54, pass 54, fail 0 ; check-site.py PASS pour 14 pages. Le premier essai de la suite avait échoué seulement sur le serveur local 127.0.0.1 interdit par le sandbox ; relance autorisée hors sandbox réussie. Les 21 cas candidats restent simulés côté stockage/envoi.
- Preuve réelle : aperçu Google /dev, FR et EN affichent le formulaire, champs vides, consentement décoché. Action FR relue : https://script.google.com/a/nodina.com/macros/s/AKfycbza9i5ARNDF5qpV9ZAJSxxUWtmsxzHK52J-d3xhXvw/dev. FR (capture retirée le 7 octobre 2026), EN (capture retirée le 7 octobre 2026). Aucun POST ou e-mail effectué.
- Code final enregistré et relu exactement, diagnostic retiré : concaténation core + google + web, SHA-256 `6264a3cce640aacb85378c0300de65fd9c831e740dc45b7f0649852fbf7a6542`. Aucun historique git ou TODO relatif trouvé ; aucun scope lock disponible, modifications exécutables limitées au candidat web et à son test.

Manage deployments prépare la mise à jour du même déploiement : New version, description Recette privée TEST — correction des URL Workspace — 2026-10-07, Me (jd@nodina.com), Only myself. Dialogue prêt (capture retirée le 7 octobre 2026), accès privés visibles (capture retirée le 7 octobre 2026). Le clic final reste à JD selon la procédure ; version 1 /exec conserve l'ancien contrôle jusque-là. Recette POST/notifications/conservation, synthèse après demandes et transport client/CORS toujours ouverts. Aucun essai réel envoyé, effacement ou changement du service Contact actif, du site ou du reporting.

Apprentissage durable conservé dans ce rapport : les deux formes d'URL Workspace et /dev doivent être éprouvées avant déploiement. L'écriture du même apprentissage dans le journal gstack extérieur au workspace a été refusée par le sandbox ; la trace locale ci-dessus est conservée. Aucun verrou acquis à libérer.

### Vérification du 7 octobre après « autorisé »

JD confirme son consentement. Le journal visible affiche Execution started à 23:52:25 et Execution completed à 23:52:33 le 6 octobre, Europe/Paris, cohérent avec les horodatages de création Drive (21:52 UTC). L'agent ne relance pas l'initialisation.

Relecture par connecteur des objets créés :

| Objet | Identifiant et état vérifié |
|---|---|
| Dossier de demandes | `17Gqbu2aT6HjUR0frb5SLC-fan3Czifvz`, titre NODINA — RECETTE — Dossiers individuels ; recherche des enfants vide |
| Synthèse | `13xMCEDT0VNJGh-bfEiRPEzz2WTSyuDRlIIE9n5Hr50Q`, titre NODINA — RECETTE — Synthèse des comptes ; Snapshot sheetId 0, Counts sheetId 20261006 |
| Permissions des deux objets | shared=false, pas de Shared drive, une seule permission user/owner jd@nodina.com |
| Snapshot A1:D3 | En-têtes schema/status/computed_at/generation, nodina-counts-v1/unavailable/2026-10-06T21:52:31.759Z/95ac97b1-257b-4b59-9fac-82d34e8b4efa |
| Counts A1:C3 | Seulement day/ref/leads ; aucune ligne de compte |

Advanced Drive/Sheets ont donc fonctionné pour l'initialisation avec le manifeste préparé. MailApp, les fichiers de demandes, les formules Conservation et le transport du formulaire ne sont pas encore éprouvés. La clé interne n'est ni lue ni copiée.

Lanceur temporaire retiré, Code.gs enregistré puis relu exactement : concaténation core + google + web, SHA-256 `5c5eae061fba715bf75840581d2e66e3290f56f6c5cb36877959c17bcc44eb72`. Aucun changement des sources locales exécutables ni nouvelle suite de tests nécessaire pour ce retrait prévu.

Dialogue New deployment préparé : description Recette privée TEST uniquement — fichiers individuels — 2026-10-07, Web app, Execute as Me (jd@nodina.com), accès Only myself. Preuve du dialogue prêt pour JD (capture retirée le 7 octobre 2026). Le clic Deploy revient à JD conformément à la procédure de recette ; aucune URL /exec candidate obtenue ni mise en ligne réalisée. Aucun envoi, notification, suppression ou modification du service actif.

Le déploiement Only myself sert à la recette HTML authentifiée. Le client JavaScript local utilise credentials omit : ses appels anonymes et le comportement CORS ne sont pas prouvés par cet accès privé. Aucun accord d'élargissement à Anyone ou de raccordement au site actif déduit du consentement OAuth.

La recette privée Google reste nécessaire pour les scopes drive.file effectifs, les appels Advanced Drive/Sheets, le partage hérité, les formats/formules, le comportement CORS/redirect et les deux modes de formulaire. Les échecs simulés ne reproduisent pas toutes les pannes du fournisseur. La synthèse n’a pas de cadence automatique dans ce candidat ; celle-ci doit être fixée et éprouvée avant production.

Les droits du manifeste, la création des objets de recette, les soumissions fictives et toute suppression irréversible doivent être approuvés sur leurs périmètres concrets, selon [PROMETHEUS §3](../prometheus_update_2026-10-01/PROMETHEUS.md#3-human-gates-the-agent-never-decides-these-alone). JD réalise les consentements et le déploiement Google. Aucune approbation de purge de l’ancien Contact ou de mise en ligne publique n’est déduite du « go » de construction.
