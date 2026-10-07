# Contact Production — stockage et planning privés

État vérifié le 7 octobre 2026. L'opérateur confirme « initialisé » après le lancement et le consentement Google. Aucun nouvel essai de formulaire, message, suppression de dossier, capture, raccordement du site ou publication publique. Les identifiants privés et détails d'accès sont conservés dans `tools/forms/production/.local/`, exclu de Git ; ce rapport public ne les expose pas.

## Initialisation et permissions

Le journal Google indique initializeProduction commencé à **14:33:08**, terminé à **14:33:13 Europe/Paris**, sans erreur. Les propriétés sont enregistrées : mode production, TTL 3600, cadence 1 heure, stockage distinct du candidat et présence de ND_SIGNING_KEY. La valeur de cette clé n'est ni lue ni copiée. ND_SETUP_PENDING est absent.

| Ressource | Vérification |
|---|---|
| Projet Contact Production | Séparé de la recette |
| Dossier des demandes | Vide, accès privé vérifié |
| Synthèse des comptes | Accès privé vérifié |

Les propriétés de stockage correspondent aux ressources créées. À l'initialisation, Snapshot indique unavailable et Counts contient uniquement day/ref/leads, état attendu avant reconstruction.

## Reconstruction et déclencheur

L'agent exécute installProductionSchedule dans le périmètre de la cadence explicitement validée. Le journal indique **14:36:37 → 14:36:41 Europe/Paris, Execution completed**. Snapshot lu ensuite : schéma nodina-counts-v1, complete, calculé le 7 octobre à **12:36:39.895Z**. Counts contient seulement ses en-têtes ; aucun dossier commercial n'existe.

La page Triggers passe de zéro à **un** déclencheur : Head, Time-based, ndRunProductionSummary_. La boîte Edit Trigger confirme **Hour timer / Every hour** ; elle est fermée par Cancel, sans modification. Cinq exécutions automatiques Time-Driven de ndRunProductionSummary_ sont ensuite relues, toutes Completed, de 15:27:56 à 19:27:56 Paris. Snapshot indique complete, calculé à 17:28:02.781Z (19:28 Paris), donc dans la limite de deux heures lors du contrôle. Le budget sous charge reste non mesuré.

Le fichier temporaire Bootstrap.gs est retiré du projet après installation. L'éditeur sauvegardé présente uniquement appsscript.json, Code.gs et Operations.gs ; le modèle local Bootstrap.gs.txt demeure dans Git pour une maintenance future. Aucun endpoint de maintenance public ajouté.

## Déploiements privés enregistrés

JD confirme « fait ». Google confirme un déploiement version 2 le 7 octobre à 20:19 Paris, sans description (Untitled). Manage deployments présente aussi la version 1, nommée « NODINA Contact Production — privé — 2026-10-07 », créée à 15:03. Les deux sont Execute as Me / Who has access **Only myself**. Aucun archivage ni élargissement d'accès. Les URL et identifiants restent dans `.local/deployments.json`, exclu de Git.

## Reporting raccordé

Code.gs courant est sauvegardé localement pour retour arrière, 22 454 caractères. Le nouveau Code.gs local et le lecteur reporting-reader.gs sont concaténés dans le projet Reporting existant. Après sauvegarde et rechargement, la source recopiée depuis l'éditeur correspond exactement au bundle local, 26 852 caractères (hors fins de ligne et espaces de bord). Syntaxe du bundle vérifiée sans exécution.

Les trois propriétés approuvées sont enregistrées et comparées sans afficher les secrets : CONTACT_LEADS_SOURCE=retained-contact-files-v1, CONTACT_SUMMARY_ID correspondant à la synthèse privée de production, CONTACT_SUMMARY_MAX_AGE_SECONDS=7200. Les cinq propriétés antérieures restent présentes ; aucune valeur secrète lue. Manifeste non modifié, aucun nouveau consentement ni scope. Triggers confirme un seul uploadWeeklyReport, Head, Time-based ; le planning existant n'est pas réinstallé.

Aucun test ou upload supplémentaire, conformément à la demande de JD : la lecture de cette nouvelle synthèse depuis le code Reporting installé n'est donc pas vérifiée par une nouvelle exécution. Le contrôle du 12 h 33 concernait la synthèse de recette ; le contrôle présent de Snapshot utilise le connecteur Sheets et ne remplace pas cette vérification. Le premier upload hebdomadaire demeure attendu le 12 octobre. PROMETHEUS 15.2c prévoit normalement un test après modification ; JD a explicitement demandé la clôture des essais.

Reporting compte désormais uniquement les dossiers de production conservés, sans addition ni repli vers l'ancien classeur. Le site reste raccordé au formulaire legacy en préproduction ; ses éventuelles réceptions legacy ne figurent pas dans cette nouvelle source. L'ancien code et les propriétés de source sont conservés pour retour arrière. .env et GA4 restent inchangés. Les notices et pages finales doivent être validées avant une bascule publique distincte.
