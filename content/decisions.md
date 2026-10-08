## État courant — clôture des essais du 7 octobre 2026

Le 7 octobre, JD clôture les essais et demande commit/push ainsi que le retrait des captures. La recette C/D est terminée : transport JSON anonyme depuis le loopback et refus de C retiré avec jeton encore valide confirmés ; accès candidat restauré à Only myself et durée à 300 secondes. Le parcours HTML anonyme sans JavaScript complet reste non vérifié. Aucune bascule du site ni collecte GA4. Le raccordement Reporting est ensuite enregistré ; voir la décision ci-dessous. La suppression de C et D est différée, sans nouvel essai ni notification. Les captures du dépôt et des archives locales de maquettes sont retirées ; les résultats textuels sont conservés. [Résultats](../reports/contact-anonymous-recipe-20261007.md).

# Décisions NODINA

## 2026-10-08 : références légales Reporting sauvegardées dans Google après Go

JD répond « Go » à l’étape annoncée de sauvegarde du bundle Reporting. Le code distant correspond d’abord exactement au bundle du 7 octobre (26 852 caractères) ; copie de retour arrière conservée uniquement dans `.local/`. Nouveau bundle sauvegardé puis relu exactement après rechargement (26 898 caractères). Manifeste identique au fichier local ; un seul déclencheur Head / Time-based / uploadWeeklyReport vérifié. Propriétés non ouvertes et non modifiées ; aucune exécution, notification, capture, activation GA4 ou bascule du site. À la question de JD sur la production, consultation de nodina.com : page publique de conseil existante, distincte de la nouvelle version FR/EN privée. [État et suite](../reports/contact-cutover-prepared-20261008.md). Commit/push sur main selon la demande permanente.

## 2026-10-08 : raccordement local Contact Production préparé

Après « étape suivante », corriger la validation des URL `/exec` Workspace `nodina.com` dans le build et le client signé, sans normaliser la cible ni déduire un accès anonyme. Ajouter les deux pages légales aux références du lecteur Reporting. Configuration privée et build per-request séparé préparés à partir du déploiement version 2 enregistré ; noindex et GA4 désactivé. `.env`, `dist/`, service actif et Google inchangés. Syntaxe et compilation vérifiées sans appel au service ni nouvel essai. Bundle Reporting local encore à sauvegarder dans Google ; validation globale des pages et accord de lancement toujours distincts. [Préparation et suite](../reports/contact-cutover-prepared-20261008.md). Commit/push sur main selon la demande permanente.

## 2026-10-08 : bloc d’outils aligné sur la référence avec exclusions de JD

Pendant la revue finale, JD fournit la référence FutureProofing et demande uniquement la mise à jour des outils, en retirant Python, TypeScript, PostgreSQL, Pinecone, Perplexity, Antigravity et v0. Bloc commun FR/EN mis à jour à dix-sept outils, avec maintien de Claude Code et Codex, treize SVG ajoutés avec sources/licences et trois assets inutilisés retirés. Grille adaptée à cinq colonnes desktop, quatre tablette, deux mobile. Les promesses commerciales et les profils ne sont pas modifiés. [Liste et preuves](briefs/talent-selection.md#outils-actualisés--8-octobre-2026). Compilation statique et inspection des labels/SVG, revue finale actualisée ; aucun nouvel essai, capture, envoi ou déploiement. Commit/push sur main selon la demande permanente. Validation globale des pages toujours ouverte.

## 2026-10-08 : revue finale des pages FR/EN préparée

JD demande « étape suivante » après avoir différé son téléphone hors de cette version. Préparer le [dossier unique de revue](../reports/site-final-review-20261008.html), reprenant les textes des seize pages du build actuel et les liens vers l’aperçu local sur 127.0.0.1:4184. Le générateur n’embarque aucun script, formulaire actif ou nouvelle image ; les copies restent fidèles au rendu, les images et interactions se consultent dans l’aperçu. Regrouper la validation restante de l’accueil, sélection, profils, manifeste, contact et mentions FR/EN ; notices Confidentialité/Cookies déjà acquises. Aucun nouveau test, capture, envoi ou déploiement. La demande de poursuite n’est pas enregistrée comme une validation explicite des mentions ou un accord de lancement. Commit/push sur main selon la demande permanente.

## 2026-10-08 : téléphone professionnel différé hors de cette version

JD précise « j’ajouterais mon tel pro plus tard mais pas dans cette version ». Retirer la ligne et le placeholder de téléphone NODINA dans les mentions FR/EN, leur notice et la revue autonome. Conserver l’e-mail de NODINA et les coordonnées de l’hébergeur. Le téléphone reste un ajout futur décidé par JD, sans nouvelle demande ni rappel automatique pour cette version. Cette décision ne vaut pas approbation de l’ensemble des mentions ni accord de lancement. Suivi actif actualisé ; compilation statique uniquement, commit/push sur main selon la demande permanente.

## 2026-10-08 : mentions légales FR/EN préparées après Go

JD demande « Go » pour l’étape suivante, annoncée comme mentions légales puis validation des pages. Sources INPI, Pappers, Service Public, Légifrance et Cloudflare consultées ; deux pages ajoutées aux routes de revue privée et au pied de page. Capital de 1 000 € et forme SASU documentés dans l’attestation INPI datée du 26 août ; RCS Grasse et TVA relevés dans Pappers, sans contrôle VIES. Téléphone professionnel demandé à JD. [Texte concret à valider](../reports/legal-notice-review-20261008.html), [sources et points ouverts](../research/legal-notice-20261008.md). Notices Confidentialité/Cookies approuvées inchangées. Compilation et inspection statiques seulement ; aucun nouvel essai, capture, envoi, déploiement ou activation GA4. Commit/push sur main selon la demande permanente.

## 2026-10-08 : méthode NODINA Select confirmée utilisable

JD répond « oui la méthode Nodina Select est utilisable ». Confirmation enregistrée comme operator-stated (C245), remplaçant le volet méthode à concevoir de C235. Le référentiel et le brief sont actualisés ; la FAQ FR/EN décrit la méthode et les évaluateurs au présent. La disponibilité du logiciel n'est pas confirmée, l'exemple d'évaluation reste illustratif. Aucun résultat mesuré, validation scientifique ou lancement public inféré. Prochaine étape : mentions légales complètes et validation globale des pages. Aucun nouvel essai ou déploiement. [État de lancement](../reports/launch-validation-20261007.md).

## 2026-10-07 : profils actuels confirmés réels par JD

JD précise « les profils actuels sont réels ». Cette déclaration remplace leur classement fictif antérieur dans le référentiel. Les neuf fiches anonymisées et leurs données sont conservées, sans ajout ni modification des statuts ; les mentions démonstration/exemples du catalogue FR/EN et les libellés accessibles sont corrigés. Aucun badge ni paragraphe commun réintroduit. Les portraits générés restent des illustrations, la disponibilité pour la mission à confirmer. La proposition de qualifier ces profils de fictifs est abandonnée. Aucun lancement public déduit. Statut réel de NODINA Select demandé séparément. [État et décision suivante](../reports/launch-validation-20261007.md).

## 2026-10-07 : notices FR/EN et procédure de conservation validées

JD répond « validé » après la question ciblée sur les notices FR/EN et la procédure manuelle, avec revue des échéances au moins mensuelle. Validation enregistrée ; les mentions Document en cours de validation des notices et Brouillon des métadonnées sont remplacées par des libellés à jour. Le contenu des notices accepté reste identique. Aucun lancement public, activation GA4, accès élargi, rappel IA, envoi ou suppression autorisé par cette réponse. Les choix sur les profils et le statut réel de NODINA Select sont préparés pour l'étape suivante, sans modification des pages marketing. [Propositions concrètes](../reports/launch-validation-20261007.md#choix-suivants--propositions-concrètes-non-appliquées).

## 2026-10-07 : notices et dossier de validation finale préparés

Après « Go », les notices FR/EN suivent la configuration du formulaire : classeur legacy ou dossier individuel de production. Notifications minimales, suppression manuelle, durées Cloudflare qualifiées, garanties de transfert et modalités des droits actualisées. Deux builds statiques réussissent ; aucun nouvel essai, envoi, suppression, screenshot, déploiement ou activation Analytics. Revue locale autonome et inventaire des quatorze routes préparés. Textes et procédure de conservation proposés pour validation, aucune approbation déduite. Profils fictifs et présentation cible de NODINA Select restent les deux choix éditoriaux suivants. [Dossier de revue](../reports/launch-validation-20261007.md).

## 2026-10-07 : déploiements privés et migration Reporting enregistrés

Après « fait », les déploiements Contact versions 1 et 2 sont vérifiés Execute as Me / Only myself. Cinq exécutions automatiques horaires sont Completed, synthèse complete récente. Reporting reçoit le bundle préparé et les trois propriétés approuvées, fraîcheur 7200 ; code relu exactement après sauvegarde, planning hebdomadaire conservé. Aucun nouvel essai, upload, notification, capture ou accès public. Les identifiants privés restent hors Git. Le site utilise encore legacy, dont les éventuelles réceptions ne sont pas additionnées aux comptes de production. Premier rapport après migration attendu le 12 octobre, non encore vérifié. [Preuves et limites](../reports/contact-production-setup-20261007.md).

## 2026-10-07 : Contact Production initialisé, reconstruction horaire installée

JD confirme « initialisé ». Journal initializeProduction Completed à 14 h 33 Paris ; dossier vide et synthèse distincts de la recette, accès privés vérifiés sans lire la clé. L'agent installe la cadence horaire explicitement validée : Completed à 14 h 36, Snapshot complete et Counts sans demande ; un déclencheur ndRunProductionSummary_, Head, Hour timer / Every hour vérifié. Première exécution automatique non observée. Bootstrap retiré ; aucun nouvel essai, envoi ou effacement de dossier. Identifiants de stockage et détails d'accès conservés localement hors Git.

Déploiement Web app privé préparé, Only myself, bouton Deploy laissé à l'opérateur selon PROMETHEUS 13.5. Reporting, endpoint du site, .env et GA4 restent inchangés. [Résultat et limites](../reports/contact-production-setup-20261007.md).

## 2026-10-07 : paramètres Contact de production validés et enregistrés

JD répond explicitement « oui, valide les paramètres » : mode production, validité du jeton 3 600 secondes, reconstruction toutes les heures et fraîcheur maximale Reporting 7 200 secondes. Les quatre propriétés ND_MODE, ND_OWNER_EMAIL, ND_TOKEN_TTL_SECONDS et ND_SUMMARY_EVERY_HOURS sont enregistrées dans le projet séparé « NODINA — Contact Production », puis leur état enregistré et leurs valeurs non secrètes sont vérifiés. Le raccordement Reporting et sa limite de fraîcheur restent à installer après création de la synthèse de production.

Le consentement Google et initializeProduction restent à JD. Aucun stockage initialisé, clé lue, déclencheur créé, envoi, effacement, déploiement ou changement du site actif à cette étape. Le sélecteur de l'éditeur est prêt sur initializeProduction. Les droits proposés sont drive.file, script.send_mail et script.scriptapp ; le lanceur Bootstrap doit être retiré avant tout déploiement. [Suivi de production](../reports/production-handoff-20261007.md).

## 2026-10-07 : lecteur réel vérifié et bascule Contact préparée

Après « ok Go efficacement étape par étape », lecture de la synthèse de recette depuis le projet Reporting avec ses droits Sheets readonly existants : Completed à 12 h 33 Paris, zéro compte commercial TEST exclus, qualification null. Lanceur temporaire retiré et code Google original restauré exactement. Production préparée séparément avec schéma de stockage distinct ; raccordement per-request local et migration Reporting explicite testés, aucun repli vers l'ancien stockage. 58 tests réussis et deux builds contrôlés ; aucun .env, nouvel envoi, effacement, scope, planning ou service actif modifié. La recette anonyme TEST-only exige un accord distinct pour ouvrir temporairement l'endpoint à Anyone et envoyer trois POST au maximum. [État, proposition et preuves](../reports/contact-production-preparation-20261007.md).

## 2026-10-07 : effacement ciblé de A terminé

JD répond « oui, supprime A et sa notification ». Fichier fictif A supprimé définitivement par connecteur ; métadonnées et anciennes révisions inaccessibles, Google confirme le fichier supprimé. Unique notification A supprimée avec Delete forever ; recherche Gmail des deux UUID ne retourne que B. Fichier B, cellules, validations et révisions inchangés. Paramètres ND_REVIEW retirés, aucun état A restant, jeton expiré refusé par appel interne après effacement ; synthèse isolée reconstruite complete à 11 h 11 Paris, zéro compte commercial pour TEST. Lanceur temporaire retiré, code restauré exactement ; aucun quatrième POST HTTP, déploiement ou changement du service actif. Preuves locales conservées ; blocage avant expiration et lecteur/CORS restent distincts. [Résultats vérifiés](../reports/contact-retirement-candidate-20261007.md#résultat-après-laccord-ciblé).

## 2026-10-07 : préparation du retrait du dossier fictif A

Après « go », deux versions de A avec données fictives vérifiées ; préparation sous verrou exécutée à 09 h 46 Paris dans le projet isolé, synthèse invalidée. Jeton A expiré depuis 01 h 11 min 21 s : refus interne confirmé, aucun marqueur retired conservé. B, ses cellules/validations et ses révisions inchangés. Lanceur temporaire retiré et source restaurée exactement ; version 3 privée active. Aucun effacement ni quatrième POST HTTP. Accord ciblé demandé pour la suppression définitive du seul fichier A, de ses versions et de son unique notification Gmail ; B et sa notification sont à conserver. [Cibles, preuves et limites](../reports/contact-retirement-candidate-20261007.md).

## 2026-10-07 : correctif Conservation déployé en version candidate 3

JD confirme « deployé ». Version 3 du 7 octobre à 01 h 19 Paris relue dans Google, même déploiement, Me jd@nodina.com, Only myself. Code immuable de la version 3 exactement identique au correctif validé, formule fr_FR à points-virgules incluse et aucun lanceur temporaire. GET FR affiche le formulaire privé. Aucun POST ajouté aux trois essais autorisés, aucune suppression ou modification du service actif. Ce message confirme le déploiement préparé et ne délègue pas un effacement. [Vérification et limites](../reports/contact-storage-candidate-20261006.md#version-3-déployée-et-vérifiée-le-7-octobre).

## 2026-10-07 : délégation ciblée des essais privés

JD répond exactement **« oui, envoie les essais »** : accord explicite pour que l'agent soumette A FR, B EN et réessaie A à l'identique avec sa même référence, trois POST au maximum au candidat privé, notifications uniquement à jd@nodina.com. Trois exécutions Completed, deux fichiers propriétaires JD seul et deux courriels Inbox, aucun doublon. Champs RAW et preuve contact-v1 vérifiés. Erreur Conservation!D2 fr_FR corrigée dans les deux fichiers et dans le candidat ; 54 tests réussis. Code Google enregistré et relu, prochaine version Only myself prête, clic Deploy laissé à JD selon la procédure. Cet accord ne couvre aucun effacement, élargissement d'accès ou changement du service actif. [Résultats et limites](../reports/contact-storage-candidate-20261006.md#essais-envoyés-après-accord-explicite-le-7-octobre).

## 2026-10-07 : version candidate 2 déployée par JD et vérifiée

JD confirme « déployé » pour la mise à jour. Google affiche version 2 du 7 octobre à 00 h 52 Paris sur le même déploiement, Me (jd@nodina.com) et Only myself relus. Formulaires FR/EN et action POST vérifiés sur /exec : le correctif des chemins Workspace résout le rendu initial. Deux essais fictifs A et B préparés pour revue, consentement décoché ; dossier encore vide. Accord explicite demandé pour que l'agent soumette A/B et tente un réessai identique de A, notifications uniquement à JD. Aucun accord de soumission ou d'effacement déduit de « déployé » ; aucun nouveau code, envoi ou changement du service actif dans cette étape. [Résultat, données exactes et périmètre proposé](../reports/contact-storage-candidate-20261006.md#version-2-vérifiée-et-essais-fictifs-proposés).

## 2026-10-07 : autorisation confirmée et initialisation candidate vérifiée

JD répond « autorisé ». Journal Google Execution completed pour l'initialisation du 6 octobre à 23 h 52 Paris ; dossier et synthèse retrouvés, privés avec une seule permission user/owner jd@nodina.com. Dossier vide, Snapshot unavailable, Counts sans données. La clé interne n'est pas lue. Lanceur temporaire retiré et code enregistré/relu exactement. Déploiement Web app préparé sous JD, accès Only myself, clic final laissé à JD selon la procédure de recette. Aucun envoi, suppression, migration ou modification du service actif. Le transport anonyme JavaScript reste à éprouver dans un périmètre distinct ; aucune ouverture publique autorisée. [Résultat et paramètres préparés](../reports/contact-storage-candidate-20261006.md#vérification-du-7-octobre-après-autorisé).

## 2026-10-06 : projet de recette Google préparé après « Go »

JD autorise la préparation de la recette privée. Nouveau projet NODINA — RECETTE — Contact par dossier — 20261006 sous jd@nodina.com, code et manifeste enregistrés et relus exactement, Drive v3 / Sheets v4 et deux scopes minimaux prévus. Mode rehearsal, propriétaire JD et validité de cinq minutes pour le seul essai d'expiration enregistrés. Lanceur temporaire initializeRehearsal sélectionné car Google masque les helpers privés ; retrait obligatoire avant tout déploiement web. Aucune exécution, clé, dossier, synthèse, autorisation OAuth, soumission, notification ou suppression effectué. JD consent lui-même les droits puis initialise ; Contact actif, Reporting et site restent inchangés. [Préparation et preuves](../reports/contact-storage-candidate-20261006.md#préparation-google-après-le-go-suivant).

## 2026-10-06 : collecteur candidat construit et testé après le nouveau « go »

JD autorise la construction locale du candidat. Fichiers séparés pour noyau, adaptateurs Google, handlers FR/EN, client JavaScript et lecteur de synthèse ; mode rehearsal et noms TEST- uniquement. Jetons serveur signés, reprises après panne, marqueur temporaire de retrait, notifications minimales et synthèse sans référence individuelle éprouvés sur services simulés : vingt cas du candidat, trente-sept tests avec Contact et reporting existants, zéro échec. Aucun droit consenti ni code actif, cloud, déclencheur ou déploiement modifié. La durée technique reste explicitement configurable et non adoptée ; les scopes effectifs, les formules et le transport Google restent à éprouver en recette privée. [Candidat et procédure](../tools/forms/candidate/README.md), [résultat](../reports/contact-storage-candidate-20261006.md).

## 2026-10-06 : cible de stockage par dossier préparée après « go »

Le « go » suivant autorise la définition de la solution d’effacement par dossier. Proposition préparée : fichier privé Workspace individuel avec Contact et Conservation, notification limitée au lien, synthèse de comptes sans références individuelles pour le reporting. Scopes minimaux proposés, gestion des créations incertaines et prévention du renvoi après effacement définies comme conditions de bascule ; fenêtre technique proposée de 24 heures non adoptée. Aucun changement du code actif, droit OAuth, migration ou suppression de l’ancien Contact. La cible est recommandée, pas déployée ni présentée comme déjà approuvée par JD. [Spécification](security/contact-storage-design.md) et [rapport](../reports/contact-storage-design-20261006.md).

## 2026-10-06 : suppression du fichier isolé autorisée et vérifiée

JD répond « oui » à la suppression définitive du seul fichier NODINA — TEST isolé de purge — 20261006-B et de ses versions. Titre, identifiant Drive et référence B7 relus avant action ; le connecteur confirme la suppression à 22 h 13 Europe/Paris. Métadonnées devenues introuvables (404), recherche par nom exact vide sans exclusion de la corbeille, Google Sheets affiche que le fichier a été supprimé. Contact, Conservation, leurs historiques et les preuves locales sont exclus. La purge complète du dossier fictif dans Contact reste non certifiée ; l’étape suivante consiste à définir un stockage permettant l’effacement par dossier. [Résultat et preuves](../reports/retention-isolated-20261006.md).

## 2026-10-06 : historique Contact vérifié et recette isolée préparée après « Go »

La version Contact de 18 h 55 reste lisible après l’effacement actif. Son menu propose Restaurer, Nommer et Copier, sans suppression visible ; aucune version modifiée. Création d’un fichier privé séparé, NODINA — TEST isolé de purge — 20261006-B, contenant uniquement un identifiant et du texte fictifs. Deux versions vérifiées ; aucun raccordement au formulaire. La suppression définitive de ce nouveau fichier est préparée pour un accord explicite sur son identité. Aucun accord de purge de Contact déduit du « Go ». [Périmètre, preuves et limites](../reports/retention-isolated-20261006.md).

## 2026-10-06 : suppression ciblée du dossier fictif autorisée et vérifiée

JD répond « oui » au périmètre présenté : valeurs Contact A5:Q5 et notification Gmail exacte du dossier 1d5a5c1e-4d8f-4663-a67c-a010bb6da6e0. L’agent relit la référence et le marqueur, efface seulement les valeurs, puis vérifie A5:Q5 vide, A1:Q4 identique et formats préservés. Les trois anciens TEST restent intacts. Gmail confirme « Conversation deleted forever » après sélection d’une seule conversation ; la recherche in:anywhere par référence ne retrouve plus aucun message. Aucun vidage global de Trash.

L’historique Sheets et les preuves locales sont exclus de cet accord et conservés. Aucun statut global Effacé ni purge complète certifiée ; ce point reste ouvert. [Résultat et preuves](../reports/retention-rehearsal-20261006.md). Aucun nouveau code, envoi, partage, automatisation, déploiement ou activation GA4.

## 2026-10-06 : envoi fictif confirmé, copies retrouvées, suppression ciblée à valider

JD répond « envoyé » après avoir soumis le formulaire TEST — Conservation. Référence technique 1d5a5c1e-4d8f-4663-a67c-a010bb6da6e0, réception à 18 h 55 Europe/Paris. Confirmation du formulaire, ligne A5:Q5 et notification Gmail concordent. Les trois anciens essais restent intacts ; aucune suppression effectuée.

L’historique Sheets affiche aussi ce test ; aucun effacement complet certifié. Le périmètre préparé couvre seulement les valeurs de cette ligne et la notification exacte, y compris sa suppression définitive Gmail, après autorisation explicite. Aucun effacement global d’historique, de corbeille ou de compte demandé. [Recette, preuves et limites](../reports/retention-rehearsal-20261006.md). Aucun nouveau code, déploiement ou GA4 activé.

## 2026-10-06 : Cloudflare vérifié et recette fictive préparée

À la demande « étape suivante », lecture des offres Cloudflare et de la configuration : Workers Free et Zero Trust Free, Worker statique, journaux et traces Workers désactivés ; Logpush propose un abonnement, sans jobs affichés. Le contrat Self-Serve incorpore le DPA, sans preuve individuelle datée ajoutée. [Dossier fournisseur](../research/provider-contracts-20261006.md).

Le formulaire local est rempli avec le marqueur RECETTE-CONSERVATION-20261006-A, sans consentement coché ni envoi. Un envoi par JD produira une ligne Contact et une notification dans sa propre boîte pour identifier les copies. [Protocole de recette](../reports/retention-rehearsal-20261006.md). Aucun nouvel envoi, effacement, export, réglage, changement de code, déploiement ou activation GA4. Les trois anciens TEST restent préservés. Aucune purge globale d’historique ou de messagerie autorisée par cette préparation.

## 2026-10-06 : acceptation contractuelle Google confirmée et enregistrée

JD répond « accepté » à la demande ciblée de validation des deux accords et du contact principal préparé. Google Admin confirme le CDPA accepté par jd@nodina.com le 6 octobre. DPA administration confirme le contact Jean-David Collard, jd@nodina.com, adresse NODINA SAS validée et Primary contact seulement.

Analytics affiche une acceptation cochée mais non sauvegardée. L’agent complète Save dans le périmètre exact de l’accord reçu, puis constate les Data Processing Terms acceptées le 6 octobre 2026. Aucun partage facultatif, rôle DPO, représentation EEE, tag, collecte ou publication modifié. [État actuel et preuves](../research/provider-contracts-20261006.md). Les autres points fournisseurs, durées et suppression restent distincts ; ne pas rouvrir l’acceptation Google déjà vérifiée.

## 2026-10-06 : consentement du formulaire, conservation manuelle et revue fournisseurs

Après « ok Go » sur l’identité, le contact des droits et les douze mois, JD donne « Go » pour poursuivre. L’agent retient le consentement pour les demandes volontaires du formulaire existant, documente le retrait FR/EN et ajoute le lien build@nodina.com au premier niveau. Libellé de la case et contact-v1 restent identiques ; cette base n’est pas étendue à d’autres traitements.

Un onglet Conservation privé est créé dans le classeur Contact, sans changer ses dix-sept colonnes, ses trois TEST, ses accès ou le service Apps Script. Le tableau natif prépare une revue manuelle après douze mois calendaires du dernier échange renseigné. Six cas calculés passent ; aucune donnée réelle supprimée ou nouvelle demande envoyée.

JD confirme « connecté » après la vérification d’identité Google Admin. Le compte NODINA indique CDPA non accepté ; Analytics indique Data Processing Terms non acceptées et aucun contact DPA. Les étapes sont laissées ouvertes pour une validation contractuelle explicite. Documents publics Cloudflare identifiés sans preuve d’acceptation propre au compte. [Dossier](../research/provider-contracts-20261006.md). Le build et les 27 tests passent. Aucun accord de publication publique ou d’activation GA4 n’est déduit.

## 2026-10-06 : identité, contact des droits et douze mois confirmés par « ok Go »

JD répond « ok Go » à la demande regroupée portant sur les trois informations présentées : NODINA SAS, SIREN 103 513 834, siège au 54 chemin du Château, 06640 Saint-Jeannet ; usage de cette adresse dans les mentions ; build@nodina.com pour les demandes relatives aux données personnelles ; douze mois après le dernier échange pour les demandes sans suite. Ces décisions sont enregistrées dans le référentiel produit, la preuve officielle, la procédure et les pages de confidentialité FR/EN. Ne pas demander une nouvelle confirmation des mêmes points.

La notice des quatre pages juridiques est ajustée aux points restants : base juridique du contact, application de la conservation, durées techniques et garanties de transfert. Aucun changement des rétentions GA4, aucune suppression automatique ou réelle, aucune adoption présumée de l’ensemble de la procédure. Le service Contact et son contrat contact-v1 sont inchangés. Préparation locale uniquement ; la validation des trois informations ne vaut pas autorisation de publication publique ou d’activation de GA4. [État courant et recette](../reports/legal-drafts-20261006.md).

Vérification après intégration : build et 27 tests réussis, audit des 14 pages localisées et paquet scellé de 53 fichiers ; textes confirmés relus dans le build FR/EN et Chrome. Quatre pages à 320 pixels sans débordement, liens réciproques fonctionnels, aucune erreur console ou collecte Google observée. Capture actualisée (capture retirée le 7 octobre 2026). Aucun envoi Contact, commit ou déploiement.

## 2026-10-06 : poursuite de la préparation juridique après le second « go »

Lecture de l’API officielle Recherche d’entreprises : NODINA, SIREN 103 513 834, président Jean-David Collard et création en 2026 correspondent aux déclarations disponibles. Les données restent dans une [preuve interne](../research/legal-identity-20261006.md), sans intégration publique tant que JD ne confirme pas l’entité exploitante et l’adresse. Une demande regroupée présente ces faits, le rôle de build@nodina.com pour les droits et les douze mois proposés pour le contact sans suite.

[Procédure opérationnelle](security/site-data-operations.md) préparée : suivi privé des droits, recherche limitée dans les copies du contact, examen avant réponse ou suppression, conservation distincte des dossiers contractuels. La date de réception ne remplace pas celle du dernier échange. Aucun message envoyé, suppression, automatisation, modification du formulaire, activation GA4 ou publication. Les décisions de conservation et l’adoption de la procédure restent ouvertes.

## 2026-10-06 : quatre brouillons de confidentialité et cookies après « Go »

JD autorise la préparation de ces pages. Textes FR/EN intégrés à la maquette, sommaire et liens de langue correspondants ; accès depuis le formulaire, le pied de page et le panneau de choix. Les pages décrivent le service Contact existant, ses copies Workspace, l’hébergement Cloudflare, le reporting agrégé et la mesure facultative prévue. Elles signalent explicitement les informations encore ouvertes ; aucun DPA, hébergement exclusivement européen ou anonymat présumé.

Identité complète de l’entité, adresse, rôle de build@nodina.com et durée de contact demandés à JD ; aucune réponse enregistrée. Douze mois après le dernier échange reste une proposition pour les demandes sans suite, sans suppression automatique appliquée. Base juridique du contact, procédure des droits, durées techniques et garanties de transfert restent à documenter. Le libellé de case et la version contact-v1 du service existant sont inchangés.

Build et préproduction : 27 tests, dont quinze de mesure ; quatorze pages localisées contrôlées. Recette Chrome FR/EN, liens et sommaire, quatre pages à 320 pixels, retrait depuis la page cookies ; aucun script Google en aperçu ni envoi de formulaire réel. [Preuves et travail de validation restant](../reports/legal-drafts-20261006.md). Modifications locales, aucun déploiement, activation GA4, commit ou publication publique. « Go » ne valide pas les textes juridiques ni les durées proposées.

## 2026-10-06 : préparation locale de la mesure après « étape suivante »

Module commun GA4 et panneau de choix FR/EN implémentés. Refus et acceptation de même présentation, aucun chargement Google avant accord, retrait au pied de page, expiration de six mois sans renouvellement du choix. La collecte est désactivée par défaut et exclut la préproduction privée ; aperçu local réservé à l'interface. Les interactions avant accord ne sont pas rejouées. URL/referrer bornés et aucune donnée saisie du formulaire envoyée à GA4. Les CTA principaux, début du formulaire et réception confirmée sont distingués ; réception ne signifie pas qualification.

Mesures améliorées du flux NODINA désactivées et relues dans la console pour éviter les doublons. Rétention existante seulement lue, pas modifiée : événements deux mois, utilisateurs quatorze mois, reset d'activité activé. Aucun événement clé, dimension ou canal créé à cette étape. Quatorze tests du module et recette FR/EN à 320 pixels ; [preuve](../reports/analytics-preparation-20261006.md), [contrat et limites](analytics.md). La demande de poursuite n'est pas une approbation des textes juridiques, des durées de conservation ou de publication publique. Aucune collecte réelle déclarée ni nouveau test Contact envoyé.

**Règle éditoriale en vigueur — 2026-10-02 :** JD ne veut plus faire référence à Angels Bay Tech / AngelsBayTech ni à CheckIA sur le site NODINA. Retirer ces références des maquettes et futurs contenus FR/EN : noms, cas, liens, logos et allusions identifiantes. Ne pas simplement anonymiser leurs exemples. Les sources et déclarations historiques restent internes pour la traçabilité. Cette décision remplace l’autorisation de citation du 2026-10-01 ; les exclusions antérieures de TitanOne et ReadyPark restent applicables.

## 2026-09-27 : décisions acquises, confirmées par l’opérateur

Source intégrale : [document de la question 28](../research/sources/2026-09-27-decisions-acquises.txt). L’opérateur s’est identifié comme JD à la question 30.

## 2026-09-27 : autorité de validation, confirmée par JD

JD seul valide les décisions du projet et la publication des contenus. Enregistrer chaque accord sous ce nom, avec sa date et son périmètre. Cette désignation interne n’autorise pas à publier son identité ou à lui attribuer une signature publique.

Ne pas rouvrir ces décisions, sauf contrainte technique, juridique ou commerciale majeure nouvellement identifiée. Dans ce cas, exposer la contrainte et faire décider l’opérateur.

### Positionnement, offres et modèle commercial

- AI-native technology / execution partner premium, avec deux offres : **AI-native Teams** et **AI Systems & Transformation**.
- Capacité d’exécution collective, équipe et partenariat de long terme ; ne pas positionner NODINA comme une ESN généraliste, marketplace, cabinet de recrutement, agence de freelances ou cabinet de conseil pur.
- Limiter au maximum la vente directe du temps du fondateur ; concevoir des offres délivrables par l’équipe sans dépendance systématique à sa présence opérationnelle.
- Mettre en avant le noyau historique de l’équipe, complété par des profils senior sélectionnés. Le chiffre « près de 15 ans » reste soumis à documentation avant publication, conformément à la question 25.
- Modèle premium et sélectif confirmé : « Invitation-only · We partner with a limited number of ambitious companies each quarter. » Le processus concret de sélection des demandes et d’invitation reste à définir ; ne pas inventer de quota, de places restantes ou d’urgence.
- Prix sur devis, sans grille tarifaire publique au lancement.
- Vocabulaire : équipe, capacité d’exécution, ownership, delivery, partenariat. Délais courts annoncés seulement avec conditions et preuves ; les objectifs restent identifiés comme objectifs, les garanties dépendent des engagements contractuels.

### AI-native, talent et qualité

- Définition de référence : « AI-native signifie concevoir les logiciels, les workflows et les équipes autour de l’IA comme une couche d’exécution fondamentale, en pensant humains, agents, modèles, mémoire, outils, evals et observabilité comme les composants d’un même système. »
- Vision : AI-native Engineer → AI-native Team → AI-native System → AI-native Organization.
- Conserver les distinctions de [voice.md](voice.md), notamment AI-assisted/AI-native, fonctionnalité IA/produit AI-native, intégration LLM/système IA, agent/appel LLM, prototype/production, AI coding/AI-native engineering.
- **NODINA AI Talent System** : méthodes actuelles disponibles selon la question 11 ; formalisation progressive et version finale encore ouverte selon la question 28. Ne pas présenter la version finale comme achevée.
- Sélection fondée sur software engineering, AI fluency, context engineering, architecture, product thinking, quality engineering, ownership, communication et team intelligence. Collaboration, maîtrise de l’ego et travail humains + agents sont centraux.
- Un éventuel taux inférieur à 1 % serait une conséquence des exigences, pas un quota. Aucune donnée exploitable disponible selon la question 25 : ne pas publier ce chiffre avant documentation.
- Relier vitesse et qualité aux tests, E2E, evals, observabilité, tracing, monitoring, guardrails et validation humaine adaptée au risque.
- Principe : **AI-native speed. Software craftsmanship quality.**

### Marchés, langues et domaines

- France, Europe et États-Unis, avec interventions internationales pertinentes sous les conditions déjà indiquées à la question 27.
- Bilingue fr-FR / en-US au lancement, localisation éditoriale naturelle ; noms d’offres et termes techniques pertinents en anglais.
- Domaine canonique : `nodina.com`, chemins `/fr/` et `/en/` ; `nodina.ai` et `nodina.fr` redirigés vers le domaine principal. Les trois domaines sont déclarés détenus par l’opérateur.
- Racine `/`, langue de navigation par défaut, fournisseurs DNS et détails de redirection encore à préciser.

### Communication, preuves et signatures

- Voix précise, assurée, exigeante ; sobre, directe, premium, techniquement crédible, sans arrogance ni emphase.
- Principe : **Calm confidence. High standards. Technical substance.**
- Relier les affirmations fortes à des processus, métriques, pratiques ou preuves vérifiables. Aucune sécurité absolue, certification non détenue ou délai garanti hors contrat ; aucune référence, logo, citation ou métrique client sans autorisation.
- Ne pas transformer une méthodologie d’estimation en garantie de résultat économique. Les éventuelles clauses contractuelles doivent être décrites avec leur périmètre exact ; les interdictions et exigences de preuve de la question 12 restent applicables.
- Historique de l’équipe, notamment projets réalisés au sein d’**AngelsBayTech**, exploitable avec attribution distincte des réalisations propres à NODINA, documentation et autorisations. Aucun projet précis ni droit de publication confirmé par cette seule mention.
- Relecture humaine de toute page publique, y compris rédaction et localisation assistées par IA.
- Signature NODINA pour méthodes, standards, doctrine et institutionnel ; auteur nommé pour expertise personnelle déterminante ; « Auteur, pour NODINA » lorsque pertinent.

### Données et sécurité

- Privacy by design et minimisation des données ; architectures adaptées aux contraintes, pouvant utiliser hébergement européen, cloud dédié, infrastructure client ou modèles privés/open source.
- Évaluer la conformité projet par projet ; aucune conformité sectorielle ou réglementaire présumée.

### Choix antérieurs maintenus et points ouverts

Le document ne laisse ouverts l’hébergement et le budget que s’ils n’ont pas déjà été explicitement validés. Les réponses précédentes les ont fixés :

- **Cloudflare sur une offre gratuite**, confirmé à la correction de la question 19. Le service exact et ses limites restent à vérifier en phase technique.
- **0 € de dépenses supplémentaires au lancement**, confirmé à la question 22. Toute dépense nécessite une proposition chiffrée et l’accord préalable de l’opérateur. La production d’articles par IA est incluse dans le travail prévu.

Restent ouverts : fournisseurs DNS, stack, CMS/framework, outils analytics/CRM/formulaires, engagements contractuels de staffing et remplacement, version finale du NODINA AI Talent System. Les budgets futurs ne sont pas autorisés implicitement.

Le parcours de contact et l’option de réservation confirmés à la question 4 restent acquis. JD actualise le libellé du bouton en « Discuter de votre projet » à la question 47. Articuler ce parcours ouvert de prise de contact avec le modèle sélectif sur invitation, sans promettre l’acceptation d’une mission.

## 2026-09-27 : suivi hebdomadaire, confirmé par l’opérateur

Bilan chaque lundi dans cette conversation, avec enregistrement dans `reports/weekly/YYYY-MM-DD.md`. Court, opérationnel et orienté décision, avec ces sections :

- Avancées de la semaine passée
- Blocages ou risques
- Décisions prises
- Décisions à prendre
- Prochaines actions prioritaires
- Éléments nécessitant validation
- Écarts éventuels par rapport aux décisions déjà figées

Contrôler le positionnement, les contenus FR / EN-US, les preuves, le ton et le vocabulaire, les pages et composants et les blocages techniques ou éditoriaux. Enregistrer chaque décision structurante immédiatement dans la source de vérité correspondante, sans attendre le bilan.

Automatisation `bilan-hebdomadaire-nodina` créée et active dans cette conversation. Hypothèse réversible de l’agent : 9 h le lundi, heure Europe/Paris, pour concrétiser la cadence demandée en l’absence d’heure précisée.

## 2026-09-27 : mode B, approuvé par JD

Concevoir le site à partir de zéro avec JD. Prendre les logos actuels comme référence et comparer d’éventuelles alternatives. Montrer les directions visuelles, puis la maquette de la page d’accueil, puis le système graphique, avec validation de JD à chaque étape. L’accord sur le mode ne vaut pas approbation d’une direction ni autorisation de remplacer le logo.

## 2026-09-28 : parcours de revue du design, approuvé par JD

Comparer trois systèmes visuels complets et réellement distincts, avec du contenu réel NODINA en desktop et mobile. Après choix et affinage, présenter une homepage complète sur ces deux formats. Valider cette page avant de formaliser et généraliser le design system. Les composants à comparer et les critères de validation sont détaillés dans [design.md](design.md). Aucun rendu encore approuvé.

## 2026-09-28 : newsletter éditoriale, définie par JD

Inscription facultative, faible fréquence et contenu substantiel pour les décideurs et équipes techniques. Articles standards libres d’accès ; sélection éditoriale, éventuelles notes réservées et accès anticipé comme bénéfices. Pas de séquence commerciale agressive, d’envoi sans substance ou de lead magnet générique. Cette préférence prime sur toute cadence ou séquence de bienvenue générique suggérée dans PROMETHEUS.md.

CTA : « Recevoir les analyses NODINA » / « Get NODINA insights », boutons « S’inscrire » / « Subscribe » ; sous-textes exacts conservés à la question 43 de [discovery.md](../research/discovery.md). Ressources structurées envisageables ultérieurement, uniquement une fois produites et documentées. Aucun envoi ni abonnement payant autorisé par cette décision.

## 2026-09-28 : expéditeur et validation des envois, définis par JD

JD assure la responsabilité éditoriale et la validation finale. Expéditeur : **NODINA**, adresse **insights@nodina.com**. Adresse Reply-To réellement surveillée à choisir lors de la configuration ; `contact@nodina.com` ou une adresse de JD ne sont que des options à ce stade.

Aucun envoi automatisé ni publication d’un envoi sans validation explicite de JD. Une éventuelle délégation future nécessite une décision explicite ; la maturité du processus ne peut pas être présumée par l’agent. Le choix de l’adresse sur `nodina.com` prime sur le sous-domaine proposé par défaut dans PROMETHEUS.md. Aucune boîte, authentification email ou redirection configurée à ce stade.

## 2026-09-28 : autonomie de marque, confirmée par JD

**NODINA first, connexions contextuelles uniquement lorsqu’elles renforcent la preuve ou la compréhension.** Aucun rapprochement automatique, cross-promotion systématique, navigation partagée ou confusion de marques. NODINA conserve ses propres positionnement, offres, identité et contenus.

AngelsBayTech est une source possible de réalisations historiques, pas une marque liée à mettre en avant ni une offre parallèle. Les liens vers d’autres projets doivent servir une étude de cas, une expertise, une contribution d’auteur ou une démonstration concrète, avec attribution et preuves appropriées. Aucun programme de portfolio connecté autorisé.

## 2026-09-28 : sécurité selon le mode d’engagement, définie par JD

La future page Security & Trust distingue Teams (compétences intégrées au cadre client, conseil et signalement des risques) de Systems & Transformation (sécurité conçue et mise en œuvre dans le périmètre livré, choix avec le client). Ne pas confondre expertise, responsabilité opérationnelle et responsabilité juridique ; adapter cette dernière à chaque mission.

JD demande un Minimum Viable Trust Package : quatre brouillons internes préparés dans `content/security/`, à valider et compléter avant publication ou usage contractuel. Le document source et les priorités suivantes figurent à la question 46 de [discovery.md](../research/discovery.md). Aucun contrôle, certification, SLA ou fournisseur n’est présumé validé par la seule rédaction de ces documents.

## 2026-09-28 : démonstrations, cadrées par JD

« Show working systems, not AI theatre. » Au lancement, contact principal « Discuter de votre projet », puis démonstration privée adaptée après qualification uniquement si un exemple pertinent et autorisé existe. Pas de démo générique ni disponibilité systématique promise.

Constituer progressivement une bibliothèque de démonstrations techniques réutilisables, indépendante des données clients. Distinguer les preuves de pratiques et d’équipes pour Teams des workflows fonctionnels de bout en bout pour Systems & Transformation. Vidéos, environnements interactifs, profils et études de cas restent conditionnés à leur disponibilité réelle, leurs preuves et leurs droits de publication. Détail à la question 47 de discovery.md.

## 2026-09-28 : évaluation de la valeur, définie par JD

Pas de calculateur de ROI public à ce stade. Utiliser le [ROI Decision Framework fourni](../research/sources/2026-09-28-roi-decision-framework.txt) pour évaluer les opportunités significatives : coût actuel, valeur adressable, coût complet, bénéfices non financiers séparés, confiance dans les hypothèses et risque d’exécution. Classer Go, Pilot first, Reframe ou No-go sans seuil automatique inventé.

« Measure the problem. Model the opportunity. Validate the assumptions. Then build. » Aucune garantie de ROI, aucun pourcentage illustratif réutilisé comme benchmark. Mesurer avant/après lorsque possible pour constituer progressivement des preuves propriétaires.

## 2026-09-28 : page presse reportée, décidé par JD

Pas de page presse dédiée au lancement. Contact média prévu via `contact@nodina.com`, à vérifier opérationnel avant publication. Constituer les ressources médias progressivement pour une opportunité réelle : présentation, boilerplate de 50 à 100 mots, bios, photos/logos/visuels autorisés, preuves, PDF et contact dédié. `press@nodina.com` ne sera envisagé que lorsque nécessaire. Inventaire à la question 49 de discovery.md ; aucune page presse vide ni preuve artificielle.

## 2026-09-28 : acquisition organique d’abord, décidé par JD

Aucune publicité payante au lancement. Priorités : organique, réseau, recommandations, contenu expert, SEO, partenariats et outbound ciblé. Préserver la possibilité de pages `/lp/` pour de futures campagnes, avec audience, indexation et mesure adaptées. Aucun outil, canal, budget média, pixel publicitaire ou campagne activé par cette décision. Évaluer les tests éventuels sur coût par lead qualifié, conversion et pipeline. Dépense soumise à proposition chiffrée et accord préalable de JD.

## 2026-09-28 : consolidation de Phase 0, proposition de l’agent

Entretien de 50 questions terminé. Référentiel produit provisoire créé depuis les déclarations et documents de JD ; aucune validation indépendante des preuves présumée. Compléments de mesure et jalons dans goals.md proposés à JD, sans cible de leads inventée. Phase 0 reste en attente de confirmation des objectifs. Synthèse et estimation d’effort dans reports/phase-0-review.md ; aucun calendrier ferme ni autorisation de publication.

## 2026-09-28 : objectifs confirmés et Phase 0 clôturée par JD

Réponse explicite : « oui je confirme ». Confirmation du document goals.md consolidé, de la baseline avant cible chiffrée et du suivi commercial. Phase 1 engagée : audit, preuves et positionnement. Cette confirmation ne valide pas encore la description canonique, le design ou une publication. Les choix techniques laissés ouverts restent à traiter.

## 2026-10-01 : nouvelle référence PROMETHEUS et reprise de Phase 1, décidées par JD

JD désigne le dossier `prometheus_update_2026-10-01` comme contenant la version de PROMETHEUS à utiliser pour la suite du projet. Référence active : [PROMETHEUS.md dans ce dossier](../prometheus_update_2026-10-01/PROMETHEUS.md), version de fondation 2026-09-29. Cette instruction remplace la note de sauvegarde qui demandait d’attendre un mandat distinct pour utiliser la mise à jour. Les décisions propres à NODINA restent prioritaires ; tout conflit doit être exposé à JD.

Après restauration du contexte, JD choisit « A — Reprendre le travail ». Reprendre la Phase 1 par le premier dossier de preuve. Le système OCR/RAG pour audit-comptabilité reste une proposition de priorité, sans sélection ni autorisation de publication présumées. Le fichier PROMETHEUS racine n’est pas remplacé dans cette reprise.

## 2026-10-01 : parcours et expériences antérieures comme point de départ, précisés par JD

JD indique ne pas avoir de véritable dossier de preuve NODINA à ce jour et propose son parcours, ses compétences et ses expériences dans d’autres structures ayant porté leurs propres projets clients. Partir de ces expériences réelles, avec attribution de la structure porteuse et du rôle exact de JD, sans les présenter comme des missions NODINA ni étendre son parcours à toute l’équipe.

L’agent propose un [dossier d’expérience](../research/experience-evidence.md) et, comme possibilité distincte, un démonstrateur explicitement identifié. La suggestion d’inventer un dossier n’est pas retenue comme preuve réelle : aucun client, projet livré, témoignage ou résultat ne sera fabriqué. Aucune expérience précise ni construction de démonstrateur n’est encore sélectionnée ; droits et formulations publiques restent à valider.

## 2026-10-01 : sites publics fournis par JD pour documenter le parcours

JD demande d’examiner son site jdcollard.com et ceux de ses autres entreprises, angelsbaytech.com et checkia.fr. Revue et sources consultées consignées dans [public-experience-review-2026-10-01.md](../research/public-experience-review-2026-10-01.md). Cette demande autorise la recherche, pas la publication de profils, logos ou éléments de projets sur NODINA.

Recommandation de l’agent : commencer par CheckIA pour illustrer un produit IA métier, puis documenter le travail collectif historique chez Angels Bay Tech. La contribution précise de JD reste à recueillir. Les chiffres de gain de temps et distinctions affichés restent soumis à leur propre vérification ; aucune revendication NODINA n’en découle automatiquement.

## 2026-10-01 : contribution personnelle à CheckIA, confirmée par JD

À la question sur ses responsabilités personnelles dans CheckIA, JD répond : « conception produit, architecture/IA, développement, pilotage de l’équipe et exploitation ». Consigner ces cinq domaines comme déclaration de l’opérateur dans le [dossier CheckIA](../research/cases/checkia.md), registre C208. Cette réponse ne précise pas les dates, la répartition détaillée de l’équipe, le stade du déploiement ou les résultats mesurés. L’expérience est attribuée à CheckIA ; aucune mission NODINA ni autorisation de publication n’est présumée.

## 2026-10-01 : CheckIA en production et utilisé par des cabinets, confirmé par JD

À la question sur le stade du produit, JD répond : « en production et utilisé par des cabinets ». Déclaration consignée dans le [dossier CheckIA](../research/cases/checkia.md), registre C209. Le stade de production et l’existence d’usages dans des cabinets sont déclarés par l’opérateur ; date de mise en production, nombre de cabinets, revenus, volumes et résultats mesurés restent non renseignés. Cette confirmation ne désigne aucun cabinet et ne constitue pas une autorisation de publication sur NODINA.

## 2026-10-01 : début d’utilisation en production de CheckIA, précisé par JD

À la question « Depuis quand CheckIA est-il utilisé en production ? », JD répond : « Q2 2026 ». Consigner le deuxième trimestre 2026 dans le [dossier CheckIA](../research/cases/checkia.md), registre C210, sans convertir le trimestre en date précise. Cette période concerne l’utilisation en production, pas la date de création de CheckIA, le début du travail de JD ou une ancienneté NODINA. Les chiffres et droits de publication restent distincts.

## 2026-10-01 : continuité partielle des équipes, confirmée par JD

À la question sur la mobilisation par NODINA de personnes ayant travaillé avec lui sur CheckIA, JD répond : « oui certains membre de l’équipe en partie », puis « idem pour angelsbaytech ». Consigner séparément le recouvrement partiel avec CheckIA (C211) et Angels Bay Tech (C212). Les personnes peuvent être les mêmes ou différentes ; aucun effectif, rôle individuel, disponibilité immédiate ou appartenance de toute une équipe n’est présumé.

La continuité de certaines compétences peut étayer le positionnement collectif, sans transférer les projets et clients des structures porteuses à NODINA. Dossiers [CheckIA](../research/cases/checkia.md) et [Angels Bay Tech](../research/cases/angelsbaytech.md). Noms, visuels et formulations publiques restent à valider avant publication.

## 2026-10-01 : domaines collectifs et ajout de TitanOne et ReadyPark, précisés par JD

JD confirme les domaines « développement, architecture, IA, produit, design » pour les membres concernés par le recouvrement partiel des équipes, C213. Ne pas attribuer automatiquement ces cinq domaines à chaque membre ou à chaque structure.

JD ajoute Titanone.ai et readypark.fr aux expériences à documenter. Les sites publics sont consultés et les dossiers [TitanOne](../research/cases/titanone.md) et [ReadyPark](../research/cases/readypark.md) ouverts. Cet ajout autorise la recherche et la préparation interne, sans confirmer le stade de chaque produit, les responsabilités détaillées, un nouveau recouvrement d’équipe ni une publication. ReadyPark reste un produit attribué à Angels Bay Tech, pas une référence cliente indépendante à compter en plus.

## 2026-10-01 : statut de TitanOne précisé par JD

À la question sur le stade actuel, JD répond : « projet publique arrêté mais utilisé en interne/privée par les équipes ». Consigner le projet public arrêté et la poursuite d’usages internes/privés dans le [dossier TitanOne](../research/cases/titanone.md), C216. Ne pas transformer cette réponse en offre publique active ou usage client externe, ni attribuer les équipes utilisatrices à NODINA sans précision. Fonctions utilisées, périodes, contribution de JD et éléments publiables restent à documenter.

## 2026-10-01 : usage privé et recherche autour de ReadyPark, précisés par JD

À la question sur le stade actuel de ReadyPark, JD répond : « utilisé dans un cadre privé et inspiration/base d'un projet de recherche (publications scientifiques annuelle) ». Consigner l’usage privé (C217) et le rôle de base/inspiration d’un projet de recherche avec cadence annuelle déclarée (C218) dans le [dossier ReadyPark](../research/cases/readypark.md). L’état du service public, les utilisateurs et les fonctions utilisées ne sont pas précisés.

La recherche documentaire retrouve deux traces éditeurs de publications cosignées par JD (C219, C220). L’article LOD 2025 est désormais paru chez Springer en 2026, contrairement au statut historique « to appear » du site personnel. La sélection ne vérifie pas une publication pour chaque année ni des résultats opérationnels du produit. Attributions et formulations publiques restent à valider.

## 2026-10-01 : rôle personnel sur ReadyPark confirmé par JD

À la question « Pour ReadyPark, ton rôle était-il bien cocréateur, responsable produit et recherche, comme indiqué sur ton site ? », JD répond « oui ». Consigner ces trois responsabilités dans le [dossier ReadyPark](../research/cases/readypark.md), C221. Cette confirmation porte sur le rôle, sans ajouter de responsabilités de développement, d’architecture ou d’exploitation ni autoriser une publication. Période et exemples de contributions restent à documenter si utiles.

## 2026-10-01 : rôle personnel sur TitanOne confirmé par JD

À la question « Pour TitanOne, ton site indique cofondateur, responsable produit et recherche. Tu confirmes également ce périmètre ? », JD répond « oui ». Consigner ces trois responsabilités dans le [dossier TitanOne](../research/cases/titanone.md), C222. Cette confirmation porte sur le rôle, sans ajouter de responsabilités de développement, d’architecture ou d’exploitation ni autoriser une publication. Une synthèse des trois projets et de la continuité collective avec Angels Bay Tech est préparée dans [experience-evidence.md](../research/experience-evidence.md) pour validation éditoriale.

## 2026-10-01 : citation des quatre marques remise en question par JD

JD indique ne pas être certain de vouloir citer CheckIA, TitanOne, ReadyPark et Angels Bay Tech sur le futur site et demande l’avis de l’agent. Aucune validation de la proposition nominative précédente n’est acquise. Les dossiers internes et leurs attributions sont conservés.

Recommandation de l’agent, en attente de décision : présenter les expériences par problèmes, contributions et stade sur la homepage, avec attribution générique explicite à d’autres structures ; ne pas afficher les quatre marques ou un bandeau de logos. CheckIA peut devenir un cas nommé sur une page détaillée si JD le souhaite. TitanOne peut étayer un exemple technique sans nom public ; ReadyPark peut étayer une bio ou un contenu de recherche avec références exactes ; Angels Bay Tech reste une source interne de l’historique collectif. Une référence scientifique peut révéler le nom ReadyPark : présentation sans nom dans le texte n’équivaut pas à anonymat garanti.

Cette recommandation ne constitue ni un choix arrêté par JD ni une autorisation de publication. Proposition révisée dans [experience-evidence.md](../research/experience-evidence.md).

## 2026-10-01 : aucune citation publique des projets ou structures pour l’instant, décidé par JD

JD précise : « je préfère ne rien nommé pour l'instant ». Pour les expériences documentées, ne citer actuellement aucun des quatre noms CheckIA, TitanOne, ReadyPark et Angels Bay Tech sur le futur site NODINA, y compris dans les pages détaillées et les contenus de recherche. Cette décision remplace les propositions de citation sélective précédentes ; aucune nouvelle confirmation des noms n’est nécessaire.

Préparer des présentations sans noms de projets ou de structures, centrées sur le problème, les contributions et le stade. Conserver une attribution explicite aux expériences acquises dans d’autres structures, ainsi que les noms et sources exacts dans les dossiers internes. Les logos, liens vers les produits et références scientifiques révélant ces noms ne sont pas intégrés à la version publique actuelle. Il s’agit d’un choix éditorial révisable par JD, pas d’une garantie que les projets ne puissent être reconnus à partir de leur description.

Les formulations finales et la publication du site restent à valider dans les étapes prévues. La décision porte sur les projets et structures évoqués ; elle ne tranche pas la publication des noms des personnes de l’équipe.

## 2026-10-01 : citation sélective de CheckIA et Angels Bay Tech, décidée par JD

JD précise : « sinon on peut citer CheckIA et Angels Bay Tech mais sans dire que l'équipe CheckIA participe à Nodina ». Cette instruction remplace l’exclusion générale précédente : les noms CheckIA et Angels Bay Tech peuvent être cités dans le futur site, avec attribution exacte des expériences à leurs structures porteuses. TitanOne et ReadyPark restent sans nom public pour l’instant.

Présenter CheckIA à travers la contribution personnelle de JD et le produit en production. Ne pas dire ni laisser entendre que l’équipe CheckIA participe à NODINA, que des membres CheckIA sont mobilisables par NODINA ou que le produit constitue une mission NODINA. La déclaration historique C211 reste consignée en interne et n’est pas utilisable comme message public. Le recouvrement partiel déclaré avec Angels Bay Tech reste documenté en C212 et peut soutenir une présentation collective attribuée, sans supposer une équipe entièrement commune.

Cette autorisation porte sur les noms et le cadrage éditorial ; elle ne valide pas les textes finaux, les logos, les captures ni la publication du site. Aucun nouveau mandat concernant les deux noms autorisés n’est nécessaire.

## 2026-10-02 : poursuite de la Phase 1 autorisée par JD

JD indique « Go étape suivante ». Poursuivre la cartographie des alternatives, les relevés de visibilité et la consolidation du positionnement. Cette instruction ne valide pas automatiquement le référentiel produit ou le passage à la Phase 2 ; la revue du jalon reste à préparer.

## 2026-10-02 : doctorat en IA et publications annuelles comme preuves du parcours, précisés par JD

JD précise : « Pour les preuves il faut aussi s'appuyer sur le fait que je suis docteur en IA (phd AI) avec des plublications scientifiques annuelles ». Consigner son doctorat en IA en C223 et la cadence annuelle de ses publications en C224, classe `operator-stated`. Les publications documentées apportent une preuve de travaux scientifiques ; elles ne certifient pas à elles seules le diplôme ou une parution chaque année. [Dossier académique](../research/academic-evidence.md).

Intégrer ce parcours comme appui d’expertise personnelle dans le positionnement et la future biographie, en conservant le positionnement collectif. Les noms de projets encore exclus ne sont pas réintroduits par les titres ou liens des publications. L’intitulé officiel, l’établissement et la date du doctorat restent à documenter avant la biographie finale ; aucune qualification supplémentaire, résultat client ou performance garantie n’est déduit du diplôme.

## 2026-10-02 : observations de Phase 1 et dossier préparatoire, sans clôture

Carte des alternatives et positionnement enrichis ; doctorat et publications annuelles intégrés à la proposition de biographie. [Revue préparatoire](../reports/phase-1-review.md). Google marque seule relevé en navigation privée ; 18 réponses d’assistants effectivement observées, dont 12 Perplexity couvrant les six questions deux fois, deux ChatGPT, deux Gemini et deux explorations Google hors répétitions standard. Les séries non testées restent indiquées comme telles.

Une page publique nodina.com présente déjà une offre de conseil IA pour dirigeants. Son statut a été demandé à JD et reste à confirmer avant traitement des URLs ou contenus existants ; pas de modification de site ni de décision de migration. La session Chrome privée est interrompue par le verrouillage du Mac, déverrouillage demandé. Phase 1 reste ouverte ; aucun passage à la Phase 2 déclaré.

## 2026-10-02 : expérience franco-américaine et projets à six chiffres, précisés par JD

JD propose comme distinction son expérience passée et actuelle avec des équipes FR/US (franco-américaines), ses clients en France et aux États-Unis et des budgets de projet à six chiffres. Consigner ces trois déclarations personnelles en C225–C227. Intégrer cet angle au positionnement et au dossier préparatoire de revue, en lien avec son doctorat, ses publications et l’expérience produit/production.

Préparer des formulations attribuées à son parcours ; ne pas déduire que tous les clients ou projets sont portés par NODINA, qu’une structure particulière a réalisé ces missions ou que ce budget constitue un tarif minimum. Devises et structures porteuses demandées à JD ; réponse en attente. [Dossier](../research/fr-us-experience.md). Les autorisations de noms et la restriction concernant l’équipe CheckIA restent acquises.

## 2026-10-02 : page publique provisoire à remplacer intégralement, confirmé par JD

À la question « la page actuelle de nodina.com est-elle une page provisoire destinée à être remplacée entièrement ? », JD répond « oui ». Son statut est désormais acquis : concevoir le futur site en Mode B, sans conserver par obligation le contenu ou le design de cette page et sans importer de corpus éditorial.

Préparer le remplacement sur nodina.com après relevé des URLs et signaux techniques existants. La racine publique reste un point d’entrée à traiter dans le futur routage FR/EN. Cette réponse confirme le périmètre du remplacement ; elle ne valide pas automatiquement les brouillons de référentiel produit/positionnement, les futures modifications d’URL ou une publication immédiate. Ne pas redemander le statut de cette page.

## 2026-10-02 : cadrage retenu et préparation de l’étape suivante

Après présentation du référentiel produit et du positionnement avec demande d’accord avant la suite, JD répond « étape suivante ». L’agent explicite qu’il prend cette réponse comme accord sur le cadrage présenté et prépare l’arborescence FR/EN, la structure d’accueil et les choix techniques. Le référentiel et le positionnement sont retenus comme base de travail ; les précisions de preuves ouvertes et les relevés de visibilité partiels restent ouverts. Aucune approbation de contenu non présenté, de design ou de publication n’est déduite.

Livrables préparés : [architecture](site-architecture.md), [brief d’accueil](briefs/homepage.md), [fondation technique](../research/technical-foundation.md). Les slugs, la requête cible d’accueil et l’anatomie sont proposés ; à fixer avant les textes finaux et URLs publiques.

Astro statique retenu par l’agent conformément au défaut de PROMETHEUS 7.2 : HTML complet, gabarits et contenu séparés, validation à la construction. Cloudflare Workers Static Assets Free proposé comme service précis pour le nouveau site, sur documentation officielle consultée le 2026-10-02. Le choix Cloudflare gratuit et le budget supplémentaire de 0 € restent acquis. Aucune dépendance installée, code déployé, dépense ou création de compte.

## 2026-10-02 : entrée française du domaine, choisie par JD

Question : ouvrir directement la version française `/fr/`, avec sélecteur `/en/`, ou afficher une page de choix FR/EN. JD choisit **« Ouvrir directement la version française »**. Préparer `https://nodina.com/` en 301 vers `/fr/`, le sélecteur vers la page EN équivalente et le x-default vers `/fr/`. Pas de détection géographique automatique. Le traitement de la racine est choisi ; carte des autres routes, vérification des liens existants et mise en ligne restent à effectuer. Aucune redirection appliquée dans cette session.

## 2026-10-02 : robots de recherche et d’IA autorisés, choisi par JD

PROMETHEUS 3 et 7.7 : choix présenté une fois pendant la préparation technique, avec l’implication explicite que les contenus publics pourront aussi servir à l’entraînement des modèles. JD choisit **« Autoriser les robots de recherche et d’IA »**, pour favoriser la découverte et les citations. Préparer robots.txt et les paramètres Cloudflare sans blocage de ces robots sur les contenus publics approuvés. Les previews protégées et documents internes ne deviennent pas publics. Vérifier les paramètres effectifs de l’hébergement avant lancement ; aucune configuration du site actuel modifiée.

## 2026-10-02 : exploration des trois directions autorisée

JD demande « passe à l’étape suivante » après la restauration proposant la comparaison de trois directions. L’agent réalise A Précision, B Atelier et C Systèmes, avec le même contenu de travail en français et le logo existant. Les compositions HTML/CSS sont des propositions réversibles ; les textes, couleurs, familles et anatomies ne deviennent pas approuvés par leur rendu.

Choix de réalisation par l’agent : comparaison locale sur 127.0.0.1, polices libres auto-hébergées, aucun appel de génération payant et aucun formulaire commercial actif. Le budget supplémentaire nul est conservé. Les retours sont stockés localement après une action de JD, sans approbation automatique. L’archive et les contrôles sont référencés dans [design.md](design.md). L’accueil complet, sa version anglaise et le système final suivent le choix de direction. Aucun changement Git distant, de routage, d’hébergement ou de publication.

## 2026-10-02 : direction A choisie par JD

Après présentation du comparatif A Précision, B Atelier et C Systèmes, JD répond **« A »**. Enregistrer A comme direction retenue, sans demander à nouveau ce choix clair. Inter Tight, fond off-white, anthracite, accent cobalt et composition structurée servent de base à l’affinage. Aucun commentaire supplémentaire, mélange ou rejet des autres variantes n’est déduit.

Conformément au parcours déjà choisi (question 37), l’agent prépare ensuite la homepage complète desktop/mobile en FR et EN-US, avec une page de revue et un aperçu du contact. L’accord porte sur la direction présentée au premier tour ; la homepage complète attend son propre retour. Design system, pages détaillées, journal/article et publication restent les étapes suivantes selon le parcours validé. Liens, archive et vérifications dans [design.md](design.md). Aucune dépense, déploiement ou mutation Git distante.

## 2026-10-02 : retrait des références à Angels Bay Tech et CheckIA

En réaction à la homepage A et à la capture de ses trois encarts, JD demande : « je ne veux plus faire référence à AngelsBayTech et CheckIA ». L’autorisation de citation sélective du 2026-10-01 est révoquée. Supprimer leurs mentions et les blocs de cas des maquettes FR/EN, ainsi que les liens ou allusions qui les réintroduiraient. Ne pas contourner la décision en anonymisant les mêmes exemples.

Les encarts sont recentrés sur les capacités d’ingénierie et le périmètre des missions de NODINA ; le parcours scientifique et franco-américain de JD demeure. Les faits historiques, leurs sources et anciennes décisions sont conservés en interne, explicitement hors usage public. La direction A reste retenue ; cette correction n’approuve pas l’ensemble de la homepage ni sa publication.

## 2026-10-03 : fondateur, talents Europe/LATAM et AITalentEval

JD demande une présentation explicite et développée de son rôle de fondateur : doctorat en informatique, recherche en modélisation à base d’agents et apprentissage par renforcement, formation en énergie nucléaire aux Arts et Métiers ParisTech et au CEA, expérience de produits IA dans l’impact environnemental, la mobilité, la confidentialité et les opérations à fortes contraintes de conformité. Cette expérience est personnelle et ne devient pas une liste de références clients NODINA.

La demande reprend, avec une rédaction originale, les thèmes de FutureProofing : sélection senior Europe/Amérique latine, partenariats sur invitation en nombre limité par trimestre, sans prise de participation ni frais de recrutement, comparaison avec le recrutement interne, intégration et continuité, horaires, outils, démarrage et FAQ. JD confirme explicitement **« Démarrage possible selon disponibilité »** pour les trois semaines. Ne pas convertir ce délai en engagement garanti.

**Correction de F006 :** JD précise que la méthode et l’outil AITalentEval sont à concevoir, tout en demandant une présentation comme s’ils existaient déjà. Le prototype expose donc le cadre envisagé et une maquette interactive clairement identifiés comme en conception. Ne pas affirmer qu’un outil opérationnel, des évaluations, des scores ou des candidats réels existent. La déclaration actuelle remplace la disponibilité antérieurement supposée du système formalisé.

La distinction demandée est formulée **MyGalileoApp 2019 — Agence du GNSS européen (GSA)**. Les sources consultées distinguent ce concours du parcours ESA BIC de 2020 ; il ne s’agit pas d’un prix scientifique personnel de l’ESA. Sources et attribution dans `research/academic-evidence.md`. Aucun nom de projet exclu ni lien révélant ce nom n’est ajouté aux pages.

Accueil FR/EN et nouvelle page de sélection préparés dans la maquette A existante, avec contact de démonstration. La page dédiée est explicitement demandée et peut donc être préparée dès cette itération. Le choix A reste acquis ; aucun accord global sur les pages ni autorisation de publication n’est déduit. Voir `content/briefs/talent-selection.md`.

### Précision éditoriale ultérieure du 2026-10-03 — AITalentEval au présent

JD réitère : « Présenté AITalentEval method and tool comme déjà développé ». La maquette est donc reformulée au présent comme **présentation cible** de la méthode et de l’outil. Retrait du libellé « en conception » dans les sections marketing, bandeau général « Maquette · Présentation cible » et démonstration explicitement illustrative. Le statut réel C235/F006 reste « méthode et outil à concevoir » dans les documents internes et la page de revue. Aucun score, candidat réel, performance ou disponibilité observée n’est inventé. Cette précision éditoriale remplace la proposition précédente d’afficher « en conception » dans les blocs marketing ; elle ne constitue pas une autorisation de publication ni une preuve d’existence de l’outil.

## 2026-10-03 : deux offres orientées par le besoin, retours annotés

JD relève que l’accueil développe surtout AI-native Teams et demande d’aider les prospects à choisir, y compris sans connaître leur besoin exact, avec possibilité de combiner les deux offres. La révision part de deux situations : renforcer une équipe ou construire un système IA. Chacune dispose d’un développement distinct, complété par un bloc de combinaison et un contact « À définir ensemble ». Méthode, fondateur, secteurs, démarrage et FAQ servent aux deux offres.

Fond blanc demandé et appliqué. Comparatif réservé à AI-native Teams, titre « L’expertise senior. Une collaboration simplifiée. », six axes, colonne traditionnelle barrée et badge « Recommandé ». Les trois semaines restent une possibilité selon disponibilité. Aucun remplacement en quelques jours garanti, frais de prestation supprimés ou coût du recrutement systématique n’est déduit de l’exemple concurrent.

JD précise plus de quinze ans en ingénierie logicielle/IA, recherche, recrutement, management d’ingénieurs et entrepreneuriat ; il demande explicitement la mention des projets à six chiffres entre France et États-Unis. La maquette donne la priorité à ce parcours, avec recherche, formation nucléaire et distinction en second plan. Elle conserve l’attribution vérifiée MyGalileoApp/GSA ; ESA BIC correspond à un autre événement. Les évaluateurs sont présentés suivant sa déclaration : lead developers et CTO français/américains, dont des parcours dans de grandes entreprises de la Silicon Valley, collaborateurs de ses projets sur ces quinze années.

Les secteurs sont présentés comme contextes d’intervention, sans inventer de références : stratégie/conseil, santé, LegalTech, logistique/entrepôts, finance/conformité/audit. « AudiTech » est provisoirement interprété comme AuditTech, clarification demandée. Les déclarations sont consignées en C237–C239 et C227 est actualisé. Le statut réel d’AITalentEval ne change pas ; la présentation cible au présent reste signalée. Aucun taux de réussite ni « méthode éprouvée » non étayé n’est ajouté.

Accueil, sélection et contact FR/EN mis à jour dans la maquette locale. Cette révision remplace les choix d’anatomie antérieurs lorsqu’ils diffèrent ; aucune validation de l’ensemble ou publication n’est présumée.

## 2026-10-03 : seconde série d’annotations, accroche et précision des parcours

Cinq corrections demandées : supprimer le nom du concours et reprendre la formulation ESA de JD ; professionnaliser « Logistique & entrepôts » ; renforcer le H1 commun aux offres ; formuler positivement les horaires ; préciser les collaborations des évaluateurs.

La maquette FR/EN utilise désormais « Les talents pour construire. L’IA pour transformer. » / « The talent to build. The AI to transform. ». Le soutien décrit équipes senior pour le produit et systèmes IA pour les opérations. Le secteur devient « Supply chain & logistique ». Les horaires communs facilitent échanges, décisions et revues, avec un rythme de livraison fluide. Les collaborateurs sont reliés explicitement aux projets entrepreneuriaux de JD et aux startups, scale-ups et PME clientes en Europe/États-Unis, sur quinze ans (C238 actualisé).

JD réitère expressément la formulation « travaux entrepreneuriaux primés par l’Agence spatiale européenne ». Cette phrase est reprise comme déclaration opérateur dans la maquette de biographie, sans le nom du concours (C240). Cela remplace le choix éditorial précédent de conserver GSA dans la page. Les sources historiques C236 continuent de documenter MyGalileoApp/GSA et l’incubation ESA BIC séparément ; elles ne sont pas transformées en preuve du nouvel énoncé ESA. L’identité et la source d’une éventuelle autre distinction ESA ne sont pas précisées. Aucune validation indépendante ou autorisation de publication n’est déduite.

Version locale FR/EN corrigée. Dix rendus accueil (320/375/768/1024/1440) sans débordement horizontal ; espaces préservées quand les retours forcés du H1 disparaissent sur tablette. Les textes des évaluateurs sont synchronisés avec la page de sélection.

## 2026-10-03 : priorité d’acquisition AI-native Teams, confirmée par JD

JD juge que le hero commun « Les talents pour construire. L’IA pour transformer. » ne permet pas de comprendre assez vite ce qu’achète le prospect. Il refuse de privilégier la symétrie des offres au détriment de la clarté et de l’acquisition. À la question sur l’offre à vendre en priorité, il choisit explicitement **« AI-native Teams en priorité »**.

La maquette FR/EN est recentrée : hero « Votre équipe IA senior. Constituée sur mesure. » ; Europe/Amérique latine, ingénieurs sélectionnés, pratique des outils IA, intégration au code et aux outils du client. Conditions sans participation au capital ni frais de recrutement ; démarrage possible dès trois semaines, avec disponibilité/périmètre explicités à proximité. CTA principal « Constituer mon équipe » vers contact Teams ; secondaire vers la sélection. Suppression de l’index des deux offres au même niveau dans le hero et des trois arguments répétés sous ce dernier.

AI Systems & Transformation reste une offre complémentaire visible via un lien distinct sous le hero, son développement dans la page et la combinaison possible. Les visiteurs qui hésitent gardent l’entrée « À définir ensemble ». L’offre Systems n’est ni abandonnée ni présumée réservée aux clients Teams. Cette décision fixe la priorité d’acquisition, pas la validation de tous les textes ni une autorisation de déploiement. Le ciblage des prospects et les pages de destination spécifiques restent à décliner dans les étapes suivantes.

## 2026-10-03 : description alignée et propositions de distinction visuelle

JD demande d’aligner le paragraphe « NODINA en quelques mots » sur la priorité AI-native Teams et le rôle complémentaire de Systems. La description canonique FR/EN est réécrite : constitution de l’équipe, sélection Europe/LATAM et intégration aux projets d’abord ; réalisation d’un système du cadrage au déploiement en complément ; combinaison possible.

JD demande des propositions pour distinguer visuellement les offres dans le reste du site. Trois pistes sont présentées dans un comparatif séparé : A blanc/cobalt pour Teams et bleu très pâle pour Systems (recommandée) ; B fonds blancs, cobalt Teams et vert pétrole Systems ; C Teams clair et Systems anthracite. Noms d’offre et repères graphiques restent explicites dans les trois. Les contenus communs restent neutres. Ces lettres désignent des variations de distinction des offres au sein de la direction A déjà retenue, pas une nouvelle sélection de direction de marque.

Aucune piste visuelle n’est encore choisie ni appliquée à l’accueil. Le comparatif local se trouve à `/assets/offer-directions.html`. Sa consultation ou ses boutons de filtre ne constituent pas une décision. Aucun retour utilisateur existant n’est modifié. Détail dans `content/offer-visual-proposals.md`.

## 2026-10-03 : choix explicite de la piste A pour distinguer les offres

JD répond « A » au comparatif. Cette décision remplace le statut d’attente ci-dessus. Application aux six pages locales FR/EN : Teams blanc/cobalt/repère rond, Systems bleu très pâle/cobalt/repère carré, libellés explicites, contenus communs neutres. Teams reste l’offre d’acquisition prioritaire. Le contact reprend le code de l’offre sélectionnée, y compris après changement de langue. Le comparatif demeure accessible avec A marquée retenue.

Ce choix concerne les repères des offres au sein de la direction de marque acquise. Aucun déploiement, validation éditoriale globale ou changement du statut réel d’AITalentEval n’en découle. Captures et contrôle ciblé `qa-offer-a.json` conservés dans le dossier du prototype.

## 2026-10-03 : fondateur identifiable, recherche scientifique et enseignement

JD demande quatre corrections : nom complet et contexte dès la première mention dans les évaluateurs ; titre de biographie plus valorisant ; recherche explicitement scientifique ; ajout de son enseignement de l’ingénierie logicielle et de l’IA en master MIAGE à l’université, relié à la formation et à l’identification des futurs talents.

Application FR/EN : le bloc évaluateurs introduit Jean-David Collard, fondateur de NODINA et docteur en informatique, avant de présenter son réseau ; synchronisé avec la page de sélection. Titre de biographie « Plus de 15 ans à bâtir des produits et des équipes. ». Recherche scientifique précisée dans l’introduction et l’encart d’expérience. Nouveau paragraphe enseignement après la recherche, avant les éléments secondaires nucléaire/distinction. Enseignement consigné comme déclaration opérateur C241, sans inventer d’université, de statut, de durée ni de partenariat.

Seul le contenu change : code visuel A et priorité Teams conservés. Sauvegarde locale `history/20261003-before-founder-clarity/`. Vérification des quatre pages concernées sur 320, 375, 768 et 1440 pixels, sans débordement horizontal. Aucun déploiement effectué.


## 2026-10-03 : NODINA Select, profils et manifeste

JD autorise la mise en œuvre des recommandations de l’analyse comparative de FutureProofing : promesse client plus directe, renommage public AITalentEval en **NODINA Select**, évaluateurs présentés par leur rôle et leurs contributions, cinq étapes de sélection, exemple d’évaluation commenté et logos d’outils. La maquette conserve la priorité commerciale AI-native Teams et la direction visuelle A. Le tableau détaillé des six dimensions, qui répétait le parcours et la démonstration, est remplacé par une lecture plus concise. Aucun taux « 1 % », volume de candidatures, disponibilité ou résultat client non documenté n’est ajouté.

JD demande également des pages **Profils** et **Manifeste**, inspirées dans leur fonction commerciale par les pages FutureProofing, avec des textes originaux propres à NODINA. Création locale en FR/EN ; liens depuis la navigation, le pied de page, l’accueil et la sélection. Le manifeste développe l’expérience du fondateur, l’exigence technique, la responsabilité humaine dans l’usage de l’IA, le collectif, l’intégration chez le client et la transmission.

À la question sur la portée de « moins d’une semaine », JD choisit explicitement **Sélection et validation de l’équipe**. Cette étape est séparée du démarrage possible dès trois semaines. Le brief complet, la disponibilité des profils et les créneaux d’entretien convenus encadrent l’énoncé. Promesse commerciale opérateur (C243), sans preuve de délai historiquement mesuré. Le délai figure dans le hero, la FAQ et le parcours commun aux pages Teams.

JD choisit **Profils réels, détails à fournir**. Les premières fiches sont donc des gabarits de présentation clairement signalés, avec rôles et missions types ; elles ne représentent pas des personnes anonymisées existantes. Rôle, expérience, région, technologies, contribution et réalisation publiable ont été demandés. Aucune ancienne entreprise, durée, photo, résultat ni disponibilité individuelle n’est inventé. Les fiches réelles restent à compléter à réception des données.

Le statut réel de la méthode et de l’outil reste celui de C235 : à concevoir. La présentation cible au présent demeure explicitement une maquette. Aucun déploiement ni envoi de formulaire. Sauvegarde du prototype : `history/20261003-before-nodina-select/`.


## 2026-10-03 : citations signées NODINA team

JD souhaite des citations de marque utilisées avec parcimonie, signées « Nodina team ». Deux textes originaux sont ajoutés, chacun une fois par langue : sur la sélection, avant le parcours commercial, et sur le manifeste, après les convictions. Signature « NODINA team », grande typographie, quelques mots en italique cobalt, fond blanc et espace. Ce sont des prises de parole éditoriales de NODINA, sans présentation comme témoignage client ou citation historique. La signature collective clôt les convictions du manifeste ; Jean-David Collard reste identifié comme fondateur dans l’introduction. Aucun ajout sur l’accueil, les profils ou le contact.

FR sélection : « Votre énergie mérite d’aller à votre produit. Notre rôle : réunir l’équipe qui le fera avancer avec vous. »
FR manifeste : « L’IA change notre façon de développer. Notre responsabilité reste la même : livrer un travail utile, fiable et compréhensible. »

Versions anglaises synchronisées. Douze rendus contrôlés sur les quatre pages concernées (320, 375 et 1440 pixels), sans débordement. Sauvegarde locale `history/20261003-before-team-quotes/` ; captures et contrôle `qa-team-quotes.json`.
## 2026-10-04 : neuf profils de démonstration et nouvelle citation

JD fournit une capture de six profils FutureProofing et demande neuf fiches originales, sans anciens employeurs, avec d’autres noms et visuels, sept « placés » et deux disponibles. La maquette utilise **En mission / Disponible** (EN : On assignment / Available), neuf identités fictives et neuf portraits sketch originaux générés via imagegen. Les rôles, pays, anciennetés, réalisations et statuts sont des exemples inventés, explicitement signalés sur chaque fiche et au-dessus du catalogue. Ils ne constituent pas des profils NODINA réels anonymisés ni un stock d’ingénieurs disponible. Cette démonstration remplace les trois gabarits sans identité ; les données réelles restent à fournir et valider.

Catalogue de neuf fiches filtrable ; accueil et sélection limités à trois aperçus. Aucun employeur, visage, nom, client, chiffre de performance ou accomplissement individuel concurrent n’est transplanté. FR/EN synchronisés. Sources des portraits et prompts conservés dans `assets/profiles/generation.json` du prototype local ; originaux conservés dans le dossier imagegen.

La citation de sélection rejetée par JD est remplacée par : « Vous avez un produit à livrer. Nous sélectionnons des ingénieurs qui savent décider, exécuter et aller jusqu’à la production. » Signature NODINA team ; la citation du manifeste est inchangée. Aucun déploiement autorisé ou réalisé par cette révision.
## 2026-10-04 : profils sans noms ni pays, industries de l’accueil

JD demande de supprimer les noms et pays d’origine des profils et d’ajouter leur industrie parmi les secteurs de la homepage. Les neuf fiches de démonstration et leurs aperçus FR/EN affichent désormais le portrait, l’ancienneté, le rôle et une industrie : Stratégie & conseil, Healthcare, LegalTech, Supply chain & logistique, ou Finance/conformité/audit. Les champs nom/pays sont retirés du contenu généré ; les portraits utilisent des chemins neutres. Sept « En mission » et deux « Disponible » sont conservés. L’attribution des industries reste illustrative, comme les autres données des fiches, jusqu’à validation des profils réels.

## 2026-10-04 : ancienneté discrète et retrait des badges répétés

JD demande une ancienneté plus discrète, inspirée de la référence fournie, et le retrait de « Profil de démonstration » sur chaque carte. FR/EN : ancienneté courte, petite et grise à côté du portrait ; statut à droite dans la même rangée. La note commune au-dessus du catalogue et des aperçus conserve le caractère illustratif des profils. Les noms et pays restent absents, les industries et la répartition sept en mission / deux disponibles restent inchangées.

## 2026-10-04 : retrait de la note commune des profils

À la demande suivante de JD, le paragraphe « Profils de démonstration : portraits, parcours, industries et disponibilités fictifs… » est retiré du catalogue et des aperçus FR/EN. Les données restent des exemples ; les autres libellés existants ne sont pas modifiés.

## 2026-10-04 : délai de démarrage dans le titre et références confidentielles

JD souhaite faire apparaître les trois semaines dans le titre de l’accueil. La maquette FR/EN adopte « Votre équipe IA senior sur mesure. Prête à démarrer dès 3 semaines. » Le périmètre et les disponibilités restent précisés à proximité ; la sélection et la validation en moins d’une semaine restent une étape distincte. La section des secteurs ajoute « Votre contexte d’abord. Les références ensuite. » avec un partage des références pertinentes dès le premier échange sous accord de confidentialité, selon la demande éditoriale de JD. Aucun nom ni logo de partenaire n’est ajouté.

JD apprécie également le bandeau concurrent « 3 places / 48 h / 3 semaines ». Une question reste ouverte sur le nombre réel de places NODINA ce trimestre et la portée des 48 heures (cadrage, profils ou réponse). Ces deux valeurs ne sont pas reprises comme des faits NODINA en attendant la réponse. Contrôle FR/EN à 1440, 768 et 320 pixels, plus revue visuelle FR à 375 pixels : aucun débordement horizontal. Aucun déploiement.

## 2026-10-04 : une semaine + deux semaines = premières PR à trois semaines

JD remplace les 48 heures par **une semaine pour choisir et valider l’équipe**, puis précise **deux semaines supplémentaires** pour qu’elle soit prête à travailler et à produire des PR, soit **trois semaines au total** (C244). Le délai précédent « moins d’une semaine » est remplacé dans la maquette FR/EN. Le bandeau de l’accueil expose les trois repères : 1 semaine de choix et validation, +2 semaines de préparation et intégration, 3 semaines au total pour les premières PR. Le parcours commun aux pages accueil, sélection, profils et manifeste décrit les mêmes étapes ; la FAQ et le comparatif sont alignés. Le titre conserve le démarrage dès trois semaines et le calendrier reste confirmé selon disponibilité, brief et préparation des accès.

Les trois places trimestrielles n’ont pas été confirmées : aucun chiffre de places n’est ajouté. La mention existante de collaborations limitées par trimestre est conservée. Aucun déploiement.

## 2026-10-04 : reprise du lot d’intégration locale

Après restauration du contexte, JD choisit A, continuer sur les éléments restants. Le lot technique de la maquette stabilisée est repris dans le dépôt : Astro statique, dix routes FR/EN, composants communs et contenus localisés. Le commit de départ observé est `c528fde` et le dépôt est propre au début de cette intégration ; les cinq modifications du checkpoint ont donc déjà été enregistrées par ailleurs.

La source effective du prototype est importée sans exécuter les migrations anciennes. Les originaux externes restent intacts. `content/site/fr.json` et `content/site/en.json` deviennent les sources éditoriales du site Astro. Les contraintes antérieures sur les noms publics, les profils illustratifs, NODINA Select et le calendrier en trois semaines restent applicables. Les documents de cadrage sont alignés sur les corrections déjà demandées, sans nouvelle affirmation produit.

Pour le formulaire, le traitement préparé suit le défaut Google Apps Script / Google Sheet / notification de PROMETHEUS 13.5. Il est testé hors ligne ; l’adresse de réception a été demandée, mais aucun destinataire, compte, classeur ou déploiement n’est configuré à ce stade. La variable publique d’endpoint vide maintient l’envoi désactivé. Le mode sans JavaScript reçoit une confirmation HTML hébergée par Apps Script avec un lien fixe de retour ; aucune redirection HTTP que cette API ne fournit pas n’est revendiquée.

Le travail est local. Aucun push, déploiement, e-mail externe, création de compte, autorisation OAuth ou passage en index n’est effectué. La configuration Cloudflare, la réception réelle du formulaire et les éléments requis avant publication restent ouverts dans `research/prototype-integration.md`.

## 2026-10-04 : build@nodina.com pour les projets

Après rappel du choix de phase 1 (`insights@nodina.com` pour les publications), JD approuve la recommandation **`build@nodina.com` pour les demandes de projet et le contact commercial**, et **`insights@nodina.com` pour les publications et la newsletter**. `build@nodina.com` devient le destinataire prévu des notifications du formulaire ; la valeur est préparée dans `tools/forms/script-properties.example.json` et le guide de raccordement.

Cette décision choisit une adresse ; elle ne confirme pas l’existence d’une boîte ou d’un alias. La lecture publique du MX de `nodina.com` renvoie `1 smtp.google.com.` le même jour. La boîte ou l’alias, sa surveillance et sa réception effective restent à vérifier côté Google avant activation du formulaire. Aucun compte, alias, déploiement ni e-mail externe n’est créé ou envoyé lors de cette préparation. Le Reply-To de la newsletter reste à choisir lors de sa configuration. La décision historique distincte sur le contact média n’est pas modifiée par cette validation du contact projets.

## 2026-10-04 : création de l’alias build dans Google Workspace

JD fournit l’onglet Google Admin de Nodina, puis répond explicitement « oui » à la confirmation de création de **`build@nodina.com` rattaché à `jd@nodina.com`**. L’alias est enregistré sur le compte existant. Google confirme « Alternate email addresses updated » et affiche `build@nodina.com` dans la liste des adresses secondaires.

Aucun nouvel utilisateur ni achat de licence. Les futurs messages reçus par cet alias sont destinés à la boîte existante de JD. La réception effective n’a pas encore été testée ; aucun message externe envoyé, aucune autorisation OAuth accordée et aucun formulaire déployé. `insights@nodina.com` reste un choix éditorial dont la configuration n’a pas été effectuée dans cette étape.

## 2026-10-04 : raccordement du classeur de contact

JD demande de poursuivre, choisit l’installation du plugin Google Drive et confirme l’avoir terminée. Le profil connecté est `jd@nodina.com`. Le classeur natif privé **NODINA — Contact** est créé dans son dossier `ChatGPT`, avec l’onglet `Contact` et les 17 en-têtes du traitement préparé, sans demande fictive. Son identifiant et `build@nodina.com` sont enregistrés dans les propriétés du projet Apps Script existant. Structure, permissions et rendu vérifiés.

Le dialogue de déploiement du service est préparé sous le compte JD. Le contrôle automatique d’approbation refuse la sélection `Anyone`, faute d’accord explicite sur cette exposition publique ; l’accès reste `Only myself`. La validation du déploiement et des droits OAuth du script est laissée à JD. Aucun test externe, e-mail, déploiement du service ou du site ni passage en index. Détails et liens dans `tools/forms/README.md` et `research/discovery.md`.

## 2026-10-04 : déploiement du service Google par JD

JD poursuit lui-même le déploiement **Web app**, choisit l’accès public et accorde les droits OAuth Google Sheets et envoi d’e-mails sur `jd@nodina.com`. Ses captures montrent les étapes puis le succès **Version 1, 20:04**. Le service Google est raccordé au formulaire du build local via `.env` ignoré par Git. Réponse HTTP/JSON et lecture CORS vérifiées avec une requête invalide, sans créer de demande ni envoyer de notification. Aucun accord de publication du site n’est déduit. L’essai d’envoi réel, marqué TEST et destiné à `build@nodina.com`, fait l’objet d’une demande d’autorisation distincte.


## 2026-10-04 : recette autorisée du formulaire et notification dans Inbox

JD autorise explicitement « Oui, envoyer le test ». L’essai est enregistré et notifié, mais Gmail classe hors Inbox les messages envoyés par JD à son propre alias. L’alias `build@nodina.com` est ajouté aux adresses d’envoi Gmail ; le nouvel essai reste hors Inbox. L’acheminement technique des notifications est donc dirigé vers la boîte principale du même compte, `jd@nodina.com`, afin de garantir une alerte visible. Le contact public choisi reste `build@nodina.com` et l’adresse d’envoi Gmail par défaut reste JD.

L’essai final confirme la ligne Sheets, la réponse HTML sans JavaScript et la notification portant le libellé Inbox à 20:18. La confirmation JSON avait déjà été vérifiée dans Chrome. Trois lignes marquées TEST sont conservées comme preuves ; le dépôt documente leur exclusion du suivi commercial. Aucun autre destinataire, compte, droit OAuth ou coût ajouté, aucun déploiement du site ni passage en index.

## 2026-10-04 : préparation locale de préproduction Cloudflare

Après restauration du contexte, JD choisit A, poursuivre les éléments restants. Préparation locale d'un Worker statique séparé `nodina-preproduction`, avec URLs `workers.dev` et aperçus/version désactivées, aucune route ni domaine de production ; formulaire Google existant et noindex conservés. Wrangler 4.147.0 est ajouté pour la simulation. Proposition technique réversible de l'agent, documentée dans `tools/cloudflare/README.md` ; la politique Access proposée pour JD seul n'est pas enregistrée.

JD confirme ensuite sa connexion. Le compte `Jd@nodina.com's Account`, ID `fd3a2bc5aad5864906bab1ffbafc8007`, affiche **No projects found** dans Workers & Pages et **Set up Zero Trust** avant Access. La configuration locale cible ce compte. Cloudflare exige encore la vérification de l'e-mail `jd@nodina.com` ; cela bloque la lecture du forfait Workers exact. Build, 12 tests, audit des dix pages, contrôle du paquet et simulation Wrangler réussis. Aucun compte créé, droit accordé, push, commit, test de formulaire réel ou déploiement effectué par l'agent. La sélection A autorise la préparation et les inspections ; le premier déploiement fait toujours l'objet d'un accord distinct.

## 2026-10-04 : e-mail Cloudflare vérifié et choix de protection en attente

JD répond « vérifié ». Après actualisation, Cloudflare Workers plans confirme **Free**, **$0**, **Current plan**. Le choix Zero Trust Free à 0 $ ouvre une page d'activation demandant un moyen de paiement, l'acceptation des conditions et l'autorisation de facturer les dépassements. Aucun champ ni accord renseigné, aucune activation. Pour respecter le budget supplémentaire nul, l'agent propose la protection temporaire par mot de passe sur Workers Free ; JD peut aussi choisir Access en terminant lui-même l'activation Zero Trust. Ce choix est demandé, pas décidé. La configuration statique fermée reste en place, aucun déploiement.

## 2026-10-05 : reprise après activation et changement de session Cloudflare

JD répond « fait ». Cloudflare One devient accessible et les paramètres NODINA affichent `jd@nodina.com` et le domaine d'équipe `white-rain-6085.cloudflareaccess.com`. L'agent ne crée ni ne renomme cette équipe. La navigation suivante refuse l'accès au compte NODINA ; l'accueil révèle une session active `jd@checkia.fr`, avec les comptes Checkia seuls. La reconnexion au compte NODINA est demandée, sans modifier la cible locale ni utiliser un compte Checkia par défaut. Le forfait Zero Trust actif n'est pas encore confirmé.

La vérification réseau de Wrangler confirme une session expirée. Aucun nouveau droit OAuth accordé, aucune politique Access enregistrée, aucun déploiement ou envoi réel de formulaire. Le premier déploiement privé reste à présenter pour accord une fois les accès rétablis.

## 2026-10-05 : compte NODINA rétabli et forfaits gratuits confirmés

JD confirme sa reconnexion à `jd@nodina.com`. L'agent retrouve le compte NODINA `fd3a2bc5aad5864906bab1ffbafc8007`. La page des abonnements confirme **Workers Free — Active** et **Zero Trust Teams Free Base — Active**. Aucun changement de forfait ni paiement effectué par l'agent.

La connexion Wrangler officielle est préparée avec `user:read`, `account:read`, `workers:write` et `offline_access` ; le consentement affiche le bon compte et les quatre droits correspondants. JD est invité à cliquer lui-même sur Authorize. Aucun clic d'autorisation par l'agent, aucune politique Access enregistrée ni déploiement à cette étape.

## 2026-10-05 : autorisation Wrangler et politique Access préparée

JD répond « autorisé ». Le premier retour de connexion OAuth a expiré ; l'agent relance les mêmes quatre permissions approuvées et termine leur renouvellement. Wrangler confirme la connexion à `jd@nodina.com`, le compte NODINA exact et les quatre droits. Aucune permission supplémentaire accordée.

Le formulaire Access **NODINA préproduction — JD** est rempli sans sauvegarde : Allow pour l'adresse exacte `jd@nodina.com`, durée six heures. L'interface ne propose pas les huit heures initialement envisagées ; six heures est une proposition de l'agent à valider avec le premier déploiement privé. Aucun enregistrement de politique, application Access, déploiement du site, changement de domaine ou envoi de formulaire effectué.

La relecture Workers & Pages confirme **No projects found** et `jd-fd3.workers.dev`. L'intégration d'identité Cloudflare est déjà présente ; la proposition la réutilise. Le brouillon de politique a été capturé ; cette capture est retirée le 7 octobre 2026 à la demande de JD. Accord demandé pour le premier déploiement fermé, sa protection Access sur tout le trafic de ce Worker seul, puis l'ouverture de l'adresse protégée ; noindex conservé et aucun domaine de production.

## 2026-10-05 : premier déploiement privé autorisé

JD répond explicitement « oui, déployer en privé ». Cet accord couvre le Worker distinct `nodina-preproduction` sur son compte NODINA, l'envoi initial avec les URL fermées, la protection Access de tout son trafic pour `jd@nodina.com` seul avec une session de six heures, puis l'ouverture de sa seule adresse protégée. Noindex est conservé. Aucun domaine de production, publication publique, passage en index ou nouvel envoi réel de formulaire autorisé par cette réponse.

## 2026-10-05 : politique enregistrée et scope Wrangler à corriger

La politique réutilisable **NODINA préproduction — JD** est enregistrée sous l'ID `a7f3be67-47ca-41cf-80ea-34354fc39ddf` ; Cloudflare confirme Allow, une règle et zéro application utilisatrice. Elle ne protège encore aucune URL. Le build et les 12 tests, le contrôle des dix pages, le paquet de 48 fichiers et la simulation Wrangler réussissent.

La tentative de déploiement fermé échoue avant transfert sur l'API des déploiements : **No access to the specified resource**. Le scope `workers:write` choisi par l'agent ne suffit pas ; la documentation d'envoi impose **Workers Scripts Write**. Le parcours de consentement corrigé remplace ce scope par `workers_scripts:write`, en conservant la lecture du compte/utilisateur et le renouvellement. L'approbation de ce nouveau droit est demandée à JD. Aucun site déployé ni URL ouverte ; son accord de déploiement privé reste valable.

## 2026-10-05 : préproduction privée déployée et vérifiée

JD confirme « autorisé » pour le consentement corrigé. Wrangler confirme le bon compte et transfère le paquet statique sans URL exposée, version `926cc206-8a72-4879-a036-55402dd465d7`. L'application Access `699e8cce-da91-44bf-a7fd-873878c2c6bb` est associée au Worker `nodina-preproduction`, All traffic, et à la politique JD existante. Application et politique sont relues avec une session de six heures et la seule adresse exacte `jd@nodina.com`. L'adresse `workers.dev` est ensuite activée, les aperçus restent désactivés et aucun domaine personnalisé n'est ajouté.

[Préproduction privée](https://nodina-preproduction.jd-fd3.workers.dev/fr/) : 63/63 requêtes sans session passent par Access ; la connexion JD avec le fournisseur Cloudflare existant donne accès aux dix pages FR/EN. Desktop, mobile à 320 pixels, filtres de profils, conservation de l'offre au changement de langue et affichage 404 sont vérifiés. Meta noindex conservée. Aucun nouvel envoi réel de formulaire, push ou commit par l'agent. [Rapport et limites des vérifications](../reports/cloudflare-preproduction-20261005.md).

La configuration locale d'envoi reste fermée par choix de l'agent : un prochain envoi nécessite une relecture de la protection distante puis la réactivation manuelle de la seule adresse protégée. Ce fichier ne reflète pas à lui seul l'état live. La publication publique et la recette d'un nouvel envoi réel restent distinctes de l'accord privé acquis.

## 2026-10-05 : comptes de mesure absents et préparation GA4

À la question initiale de PROMETHEUS 0.3, JD confirme « aucun outil configuré pour Nodina ». Préparation engagée dans l'ordre GA4, Search Console puis Bing. Le compte Google existant `jd@nodina.com` est sélectionné. L'agent prépare le brouillon NODINA / NODINA — Site web, heure française et euros, catégorie Computers & Electronics adaptée à l'activité déclarée ; les quatre partages facultatifs sont désactivés pour limiter les usages supplémentaires. Ces choix préparatoires sont réversibles.

L'effectif n'est pas établi dans les sources du projet : confirmation de la tranche demandée à JD, sans assimiler les profils illustratifs ou le réseau de partenaires à des salariés. Aucun compte Analytics, propriété ou flux créé ; aucun consentement accepté ni balise installée. Les créations de comptes et consentements restent à JD conformément à la section 3. [Parcours préparé](../tools/analytics/README.md).

JD précise « j'ai répondu 1 à 10 ». Cette tranche est consignée comme déclaration de l'opérateur pour le formulaire GA4, sans chiffre plus précis. Le navigateur affiche désormais l'étape Business objectives. L'agent sélectionne Generate leads et Understand web and/or app traffic, conformément à l'objectif de contacts commerciaux et de suivi d'acquisition du site. La création finale est prête et laissée à JD ; aucun compte ni propriété créé par l'agent, aucun consentement accepté.

## 2026-10-05 : propriété GA4 créée par JD et flux Web raccordé

JD fournit une capture de Data collection où les étapes Account creation, Property creation, Business details et Business objectives sont terminées. La console confirme ensuite le succès du compte et de la propriété. L'agent crée le flux Web dans cette propriété existante : NODINA — Web, `https://nodina.com`, mesures améliorées activées, conformément au parcours déjà annoncé. Aucun nouveau compte créé ni consentement accepté par l'agent.

Identifiants relevés : compte `410716626` dans l'URL, propriété `557424928` relue dans Admin → Property details, flux `16047238617`, Measurement ID `G-J8NV7Z1HMX` dans les instructions de balise puis sur l'accueil. Nom, heure française, euros, catégorie informatique, effectif 1 à 10 et deux objectifs sont relus. Les e-mails facultatifs Google sont laissés décochés et enregistrés. Aucun code de suivi ajouté au site ; l'accueil affiche l'absence de données. [Référence des comptes](../tools/analytics/README.md).

Le formulaire Search Console est préparé sous `jd@nodina.com` pour la propriété de domaine `nodina.com`. Le bouton CONTINUE est laissé à JD selon PROMETHEUS 3 ; aucune propriété créée, valeur DNS inventée, modification DNS ou soumission de sitemap/indexation. La préproduction reste privée.

## 2026-10-05 : Search Console auto-validée et choix de connexion Bing

JD confirme « fait » après CONTINUE. Search Console affiche Ownership auto verified, méthode Domain name provider. Le domaine `sc-domain:nodina.com` est ajouté le 5 octobre 2026, sous `jd@nodina.com` ; les paramètres confirment You are a verified owner. Aucun DNS modifié par l'agent ni valeur de vérification inventée. Les rapports sont en traitement ; aucune soumission de sitemap ni demande d'indexation. Preuve (capture retirée le 7 octobre 2026).

Bing Webmaster Tools est ouvert sur le choix de connexion ; les cookies facultatifs sont refusés. Le contrôle automatique rejette le lancement de la méthode Google, car cette méthode et une éventuelle liaison de comptes ne sont pas explicitement choisies. L'action n'est pas répétée ni contournée. Le choix Google `jd@nodina.com`, Microsoft ou différer est demandé à JD. Aucun compte Bing créé, aucune connexion Google lancée ni consentement accepté. La préproduction reste privée.

## 2026-10-06 : collecte hebdomadaire installée et premier rapport enregistré

JD confirme « fait ». Le journal termine installWeeklySchedule et confirme lundi vers 09:00 Europe/Paris ±15 minutes, puis Triggers affiche un déclencheur Time-based / Head / uploadWeeklyReport appartenant à jd@nodina.com, sans premier lancement automatique encore observé. Preuve (capture retirée le 7 octobre 2026). Première échéance attendue le 12 octobre ; vérification prévue au début de la première session après cette date, sans automatisation de modèle ajoutée.

terraform.md est généré à la racine du site depuis Appendix D, avec règles de preuve et commandes réelles. Le digest déterministe est préparé et vérifié sur inconnu, comparaison mesurable, petit échantillon, chevauchement et préférence du fichier programmé sur le test. Build, 12 tests, dix pages et paquet privé passent, ainsi que les six tests simulés du collecteur. Le premier rapport est une baseline manuelle provisoire, pas une mesure de succès commercial : données statistiques encore vides et qualification indisponible.

AGENTS.md, CLAUDE.md et [reports/terraform-2026-10-06.md](https://github.com/Nodina-co/nodina-marketing-analytics/blob/main/reports/terraform-2026-10-06.md) sont enregistrés dans le dépôt privé Nodina-co/nodina-marketing-analytics via l’éditeur GitHub, après blocage de l’upload par les permissions de l’extension laissées intactes. Le texte du rapport correspond au fichier préparé ; actualisation du même jour après résolution du clone. Les accès gh et SSH initiaux échouent ; Git HTTPS existant réussit. Clone côte à côte présent et pointeurs relus, atteignant ../Nodina-ms/terraform.md ; digest identique sur le clone et la copie du JSON navigateur. Aucun nouveau secret demandé ou lu. Rapport enregistré (capture retirée le 7 octobre 2026).

Le rapport propose S1 vérification du premier lundi, S2 préparation de l’instrumentation avant publication et S3 consignation/dédoublonnage de la qualification commerciale ; aucune proposition n’est appliquée automatiquement. Aucun Terraform report dans le dépôt du site, aucune modification de page, demande d’indexation ou publication publique. Les limites des listes d’opportunités et outils encore absents sont explicites ; la balise et les événements GA4 restent à configurer.

## 2026-10-06 : premier test réel réussi, planification prête

JD confirme « fait ». Le journal Apps Script confirme Execution completed et l’envoi de data/2026-10-06-test.json à 00:33 heure de Paris dans Nodina-co/nodina-marketing-analytics. Le [JSON privé](https://github.com/Nodina-co/nodina-marketing-analytics/blob/main/data/2026-10-06-test.json), commit 1e3f9ec42cdb136f718b0d6d22ff397fe969a015, est lu : errors vide, 53 réponses GA4, Search Console sans données finalisées/sitemap, quatre listes Bing vides, Sheets disponible avec comptes Contact à zéro et qualification null sur les périodes arrêtées au 3 octobre. Les 58 notes ne sont pas des erreurs et les réponses statistiques vides ne prouvent pas un trafic nul. Aucun nom, email ou message exporté. Les essais Contact du 4 octobre sont hors période ; leur exclusion est couverte par les tests simulés, pas démontrée par ce seul essai réel.

L’agent sélectionne installWeeklySchedule sans l’exécuter, selon PROMETHEUS 15.2b étape 9. JD doit lancer Run pour installer la collecte lundi vers 09:00 Europe/Paris, ±15 minutes ; première échéance attendue le 12 octobre 2026. Écran prêt (capture retirée le 7 octobre 2026). Aucun déclencheur installé à cette étape ; journal/déclencheur puis terraform.md, pointeurs et premier rapport restent à vérifier/terminer.

## 2026-10-05 : identifiants remplacés, premier test prêt

JD confirme « remplacés » après la demande de remplacement/révocation du token GitHub et de la clé Bing. Cette confirmation vient de JD ; l’agent n’inspecte ni les nouvelles valeurs ni la révocation. Une lecture DOM limitée confirme les cinq propriétés présentes et enregistrées ; les valeurs secrètes ne sont pas retournées, les trois paramètres non secrets correspondent aux valeurs préparées.

Après attente explicite de l’en-tête Editor et contrôle de l’absence de champs propertyValue, l’éditeur affiche Code.gs et uploadTestReport sélectionné. Preuve du test prêt (capture retirée le 7 octobre 2026). Le premier lancement et l’autorisation Google restent à JD conformément à PROMETHEUS 15.2b étape 8 ; le test écrira un JSON dans data/ du dépôt analytique privé et vérifiera les sources. Aucun test réel exécuté ni déclencheur installé ; la validité des identifiants reste à confirmer.

## 2026-10-05 : propriétés enregistrées et incident de lecture UI

JD confirme la génération et le collage du token, puis « fait » après la clé Bing. Une lecture DOM limitée confirme cinq propriétés avec valeur et en mode enregistré ; les deux secrets ne sont pas retournés dans cette vérification. Les trois paramètres non secrets correspondent aux valeurs préparées. Aucun test exécuté.

L'agent clique Editor puis demande trop tôt un domSnapshot : l'ancien écran Settings est renvoyé pendant le chargement, avec les deux secrets en sortie de l'outil. JD est informé de l'erreur. Les valeurs ne sont pas recopiées, enregistrées dans un fichier local ou capturées en screenshot, ni utilisées par l'agent. Le remplacement est recommandé par précaution ; aucune publication externe ou compromission n'est établie.

Un formulaire de remplacement du token GitHub est préparé : NODINA Reporting - remplacement, Nodina-co, expiration 2027-01-03, seul dépôt nodina-marketing-analytics, Contents R/W, Metadata R, Organizations (0). Brouillon (capture retirée le 7 octobre 2026). JD doit générer le nouveau token, mettre à jour GITHUB_TOKEN, révoquer l'ancien et remplacer la clé Bing puis BING_API_KEY. Aucun identifiant supprimé ou créé par l'agent. Futur contrôle : attendre Editor visible et absence de champs propertyValue avant toute capture ; aucun snapshot des propriétés, aucun presse-papiers. Le premier test reste à réaliser après remplacement.

## 2026-10-05 : token GitHub limité au dépôt analytique, génération à JD

JD confirme « connecté ». Le formulaire fine-grained est visible : NODINA Reporting, owner Nodina-co, expiration 2027-01-03. L'agent sélectionne Only select repositories puis uniquement Nodina-co/nodina-marketing-analytics ; Selected 1 repository est relu. Contents Read and write, Metadata Read-only et Organizations (0) sont présents. Droits proposés (capture retirée le 7 octobre 2026). Aucun token généré ni grant effectué par l'agent.

Dans Apps Script Reporting, l'agent prépare une ligne Script Properties GITHUB_TOKEN, valeur vide et non enregistrée. JD doit générer le token, copier sa valeur directement dans cette ligne et enregistrer, puis revenir sur Editor et quitter l'affichage GitHub du secret avant de répondre. Champ prêt (capture retirée le 7 octobre 2026). À la reprise, pas de snapshot complet des propriétés ou de la page du token, pas de lecture du presse-papiers ; ne vérifier que nom/présence sans révéler la valeur. Aucun secret lu ou sauvegardé localement, aucun test réel ni planification.

## 2026-10-05 : dépôt analytique privé confirmé, authentification GitHub attendue

JD confirme « créé ». GitHub affiche Nodina-co/nodina-marketing-analytics avec badge Private, branche main, README et commit initial `f0197fce0229e04130059be0a411cca4661d83fe`. Preuve (capture retirée le 7 octobre 2026).

L'agent ouvre le formulaire officiel fine-grained avec un modèle non secret (NODINA Reporting, propriétaire Nodina-co, Contents write incluant read, durée proposée 90 jours). GitHub affiche Confirm access sous jdcollard-phd ; la vérification d'identité est laissée à JD. Écran prêt (capture retirée le 7 octobre 2026). Le formulaire reste derrière cette étape ; aucun token créé ni accès accordé, aucune valeur de secret lue. La sélection du seul dépôt analytique et les droits effectifs doivent encore être vérifiés avant génération par JD. Aucun test réel ou déclencheur Reporting installé.

## 2026-10-05 : sources Reporting installées et dépôt privé préparé

JD confirme « fait ». L'agent lit les deux fichiers par Copier dans l'éditeur Apps Script : Code.gs correspond intégralement à la source locale (301 lignes, comparaison après normalisation des fins de ligne/espaces de bord) ; appsscript.json est identique après parsing JSON. Save project to Drive est désactivé, cloud_done présent. Aucune exécution du collecteur ni grant OAuth demandé. Installation vérifiée (capture retirée le 7 octobre 2026).

GitHub est connecté sous `jdcollard-phd`. L'agent prépare New repository pour Nodina-co / nodina-marketing-analytics, visibilité Private et Add README On ; le nom est disponible. Le bouton Create repository reste à JD selon PROMETHEUS 15.2b ; aucun dépôt créé à cette étape. Brouillon prêt (capture retirée le 7 octobre 2026). Aucun token, clé Bing ou Script Property secret obtenu ou saisi. Le reporting reste sans test réel ni planification.

## 2026-10-05 : Apps Script Reporting créé et associé à Cloud

JD confirme « créé ». L'éditeur sous `jd@nodina.com` affiche **NODINA - Reporting**, Script ID `1a1dGQd864bogaKQIe5aDc1vqHPz0BNZmUDKDoFaJxewIH4vQk8-TPqHg`, avec le fichier initial Code.gs contenant seulement myFunction. L'agent active l'affichage du manifeste puis associe le projet Cloud : Project Settings confirme GCP Standard / `931529905894`. Fuseau Paris et V8 sont présents. Association confirmée (capture retirée le 7 octobre 2026).

Les fichiers locaux Code.gs et appsscript.json sont préparés et proposés à JD pour collage/enregistrement selon PROMETHEUS 15.2b étape 5. Aucun code collecteur installé ou exécuté à cette étape, aucun grant OAuth sur les sources, aucune Script Property saisie, aucun dépôt GitHub ou déclencheur créé. Le formulaire Contact reste intact. Ce projet Reporting n'est pas une Web app et n'a pas de déploiement public.

## 2026-10-05 : API et audience interne confirmées, Apps Script à créer

JD confirme « fait » après activation Analytics et création OAuth. La console confirme Google Analytics Data API Enabled et OAuth configuration created ; Audience est relue Internal. L'agent active Search Console API avec les mêmes Google APIs Terms of Service déjà acceptées par JD et confirme son statut Enabled. Sheets avait été relue dans les services activés. Les trois API requises sont prêtes ; aucun accès utilisateur aux données du collecteur n'est encore accordé.

Apps Script est ouvert sous `jd@nodina.com` ; seul NODINA — Contact est présent dans My Projects. JD est invité à créer NODINA — Reporting avec New project selon PROMETHEUS 15.2b, puis à associer le numéro Cloud `931529905894` lors de l'installation. Aucun projet de reporting Apps Script créé, aucun formulaire Contact modifié, aucune Web app déployée. Étape prête (capture retirée le 7 octobre 2026).

## 2026-10-05 : projet Cloud créé, API et OAuth en préparation

JD confirme « créé ». Le tableau de bord confirme NODINA Reporting / `nodina-reporting`, numéro `931529905894`, organisation nodina.com. Sheets API est activée par l'agent puis relue dans Enabled APIs & Services. L'activation Analytics Data API reste à JD car sa fiche présente l'acceptation des Google APIs Terms of Service par utilisation ; le bouton Enable n'est pas cliqué par l'agent. Search Console API reste à activer. Un second onglet contient le brouillon OAuth NODINA Reporting, support/contact `jd@nodina.com`, audience Internal ; la case d'accord User Data Policy et les étapes Continue/Create restent à JD. Aucune configuration OAuth créée ni droit utilisateur accordé. Brouillon OAuth (capture retirée le 7 octobre 2026). Aucun compte de facturation, essai gratuit ou compte de service créé.

## 2026-10-05 : brouillon du projet Cloud de reporting

JD confirme « connecté ». Google Cloud affiche `jd@nodina.com` et l'organisation `nodina.com`, ID `679600609001`. La liste Manage resources consultée montre cette organisation seule, sans projet réutilisable visible. L'agent prépare New Project avec nom NODINA Reporting, identifiant demandé `nodina-reporting`, organisation et parent nodina.com. Aucun projet créé, aucun essai gratuit activé ni facturation configurée. Le bouton Create reste à JD selon PROMETHEUS 15.2b. Brouillon prêt (capture retirée le 7 octobre 2026).

## 2026-10-05 : préparation du reporting après confirmation des comptes

JD demande l'étape suivante. PROMETHEUS 15.2b impose le reporting après les comptes, sans attendre les premières données. L'attente de fichiers initiaux vides ou partiels est expliquée. Google Cloud est ouvert sous `jd@nodina.com` mais demande une vérification d'identité, laissée à JD. Aucun projet Cloud créé ni consentement accordé.

Le collecteur Appendix G et son manifeste sont préparés pour NODINA, avec le dépôt privé proposé `Nodina-co/nodina-marketing-analytics`, non créé ni vérifié. Adaptations nécessaires : dates ISO du formulaire, essais TEST marqués dans name, références bornées, lecture Sheets REST compatible avec le scope readonly, erreurs neutralisées et gate de test invalidé après un nouveau test échoué. Six tests simulés passent ; ils ne prouvent pas les réponses réelles des plateformes. [Installation préparée](../tools/terraform-collector/README.md), [définitions de mesure prévues](analytics.md). Aucune balise installée, aucune écriture externe ni collecte planifiée.

## 2026-10-05 : import Bing confirmé et page blanche résolue

JD effectue lui-même l'import Search Console. Il signale d'abord un écran sans sites, puis confirme le succès avant de rencontrer une page blanche. L'agent constate cet affichage et rouvre le tableau de bord NODINA sans paramètres OAuth. La console se charge ; Verification Code confirme explicitement que `https://nodina.com/` a été importé depuis Search Console et ne nécessite aucun code Bing, car déjà validé chez Google. Preuve (capture retirée le 7 octobre 2026). La cause précise de la page blanche n'est pas établie. Aucun nouveau consentement, suppression de site, changement DNS ni soumission de sitemap effectué par l'agent.

## 2026-10-05 : site ajouté par JD à Bing et import Search Console retenu

JD fournit une capture de Bing avec `https://nodina.com/` ajouté manuellement, statut Not verified. Le profil Bing connecté est relu : `jd@nodina.com`. L'agent examine la validation CNAME sans modifier les DNS. Le relevé public NS indique les serveurs Namecheap ; ce constat ne confirme pas le registrar ni l'accès au compte DNS.

JD demande « Pourquoi ne pas utiliser la Google Search Console pour l'import ? ». La suite passe à l'import de la propriété NODINA déjà vérifiée dans Search Console. Le contrôle automatique refuse le lancement d'Import, car il peut ouvrir une autorisation OAuth d'accès à Search Console, non encore explicitement accordée. Aucune répétition ni tentative de contournement. Le bouton Import est laissé à JD pour qu'il ouvre le parcours et décide des permissions. Une fois autorisé, seule NODINA doit être sélectionnée et son statut relu. Aucun DNS modifié, compte créé par l'agent, entrée manuelle supprimée ou sitemap soumis. [Parcours et preuve](../tools/analytics/README.md).
