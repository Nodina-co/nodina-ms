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

La page Triggers passe de zéro à **un** déclencheur : Head, Time-based, ndRunProductionSummary_. La boîte Edit Trigger confirme **Hour timer / Every hour** ; elle est fermée par Cancel, sans modification. La première exécution automatique n'est pas encore observée ; le budget et la fraîcheur dans la durée restent non mesurés.

Le fichier temporaire Bootstrap.gs est retiré du projet après installation. L'éditeur sauvegardé présente uniquement appsscript.json, Code.gs et Operations.gs ; le modèle local Bootstrap.gs.txt demeure dans Git pour une maintenance future. Aucun endpoint de maintenance public ajouté.

## Déploiement privé prêt, suite

New deployment est préparé : Web app, description « NODINA Contact Production — privé — 2026-10-07 », Execute as Me, Who has access **Only myself**. Le bouton Deploy reste à l'opérateur conformément à PROMETHEUS 13.5, gate Accounts. Aucun /exec de production créé à cette étape.

Après déploiement privé : relever l'URL et la version, préparer le raccordement Reporting à cette synthèse avec CONTACT_SUMMARY_MAX_AGE_SECONDS=7200. Le fichier privé `.local/reporting-properties.json` contient le raccordement préparé ; le modèle public conserve un ID vide. Le Reporting Google courant et son planning hebdomadaire restent inchangés. Aucun nouveau test upload demandé. Les notices, les pages finales et l'accord de publication restent des étapes distinctes ; .env, le site et GA4 demeurent inchangés.
