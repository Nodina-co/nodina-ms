# Recette privée — retrait de A vérifié — 7 octobre 2026

**Suppression du fichier A et de sa notification terminée après « oui, supprime A et sa notification ».** B et ses versions sont inchangés, sa notification est conservée. Finalisation et reconstruction de la synthèse Completed à 11 h 11 Paris. Les sections de préparation ci-dessous décrivent l’état avant l’accord ; les résultats finaux figurent à la fin du rapport.

## Cibles de revue

| Objet | Référence | État avant effacement |
|---|---|---|
| [A](https://docs.google.com/spreadsheets/d/1we7AMCgzCgsqK6XslTkbwpbe76K0pO0nySsT5A8eLo4/edit?usp=drivesdk) | `933da572-65ae-49ce-bf93-6b27addea09a` | Fichier fictif privé, JD seul propriétaire ; révisions 1, 8, 9 |
| [B à conserver](https://docs.google.com/spreadsheets/d/1YQcY2BYxGSbU7VS0cgdzWrRxgMr50JfzurFUXe0rdho/edit?usp=drivesdk) | `79128ce1-c6f3-4bce-83ca-86449550258e` | Fichier fictif privé, JD seul propriétaire ; révisions 1 et 8 |
| Notification A | Même UUID A, sujet « NODINA · Nouvelle demande », 7 octobre 01 h 06 Paris | Recherche Gmail `in:anywhere` par UUID : exactement une conversation, un message de JD à JD ; corps limité à la référence et au lien privé |

Le dossier isolé `17Gqbu2aT6HjUR0frb5SLC-fan3Czifvz` contient exactement A et B, sans doublon. A et B ne sont pas partagés et n’appartiennent pas à un Shared drive. L’ancien collecteur Contact et ses historiques restent hors périmètre.

## Versions de A

La révision 1 est le classeur initial vide. La révision 8 contient la demande fictive. Afin de tester un historique comportant deux versions avec données, seule `Contact!J2` de A a été modifiée en texte brut : « Recette privée — 7 octobre 2026 — VERSION 2 FICTIVE ». Aucun autre champ ni format modifié.

Deux versions nommées dans Google Sheets : « TEST-RECETTE-A — version 1 — avant effacement » (révision 8, 01 h 11) et « TEST-RECETTE-A — version 2 fictive — avant effacement » (révision 9, 09 h 37). Les CSV des révisions 8 et 9 ont été lus en mémoire par connecteur ; ils contiennent bien les données fictives et diffèrent sur le seul calendrier. Aucun export CSV sauvegardé.



## Préparation réelle dans le projet privé

Lanceur temporaire `prepareRehearsalA`, enregistré et relu exactement dans la seule tête de l’éditeur candidat. Il vérifie le propriétaire, le dossier isolé, les deux IDs/UUID, les permissions privées, le statut complete, le nom TEST de A, l’inventaire exact de deux fichiers et l’expiration acquise depuis plus d’une minute. Il définit les deux propriétés ND_REVIEW pour A puis appelle `ndPrepareRetirement_`. Il ne comporte aucun appel de suppression, nouvel envoi MailApp ou modification de B.

Exécution Google 09 h 46 min 50 s → 09 h 46 min 55 s, Completed. Résultat sûr journalisé :

```json
{"prepared":true,"issued":1791327981,"expires":1791328281,"temporary_until":"2026-10-06T23:11:21.000Z","expired":true,"retired_marker_present":false,"internal_expired_handler":"invalid","files":2,"b_private":true,"no_deletion":true}
```

Le jeton de A a expiré à **01 h 11 min 21 s Paris**. La préparation retire son éventuel état expiré, sans créer de marqueur retired. Contrôle interne `doPost` avec la preuve d’origine reconstituée uniquement côté serveur : refus invalid avant accès d’écriture. Aucun jeton ni clé affiché ; aucun quatrième POST HTTP et aucun nouveau courriel. Ce résultat confirme le refus après expiration dans l’environnement Google, **pas une reprise du navigateur ni le blocage d’un jeton encore valide par un marqueur**. Ce dernier scénario demeure simulé localement.

Snapshot!B2 est unavailable, génération renouvelée à `2026-10-07T07:46:53.231Z`, vérifiée par connecteur. Les deux ND_REVIEW ciblent A uniquement. Le lanceur a ensuite été retiré : Code.gs enregistré et relu exactement égal à la concaténation validée de 29 774 caractères ; aucune fonction temporaire restante. Aucun nouveau déploiement : version 3 privée reste active.

Journal de préparation (capture retirée le 7 octobre 2026), notification A ciblée (capture retirée le 7 octobre 2026).

## B inchangé et contrôle après accord

Comparaison avant/après intégrale des réponses bornées `Contact!A1:Q2` et `Conservation!A1:I2`, champs userEnteredValue/effectiveValue/dataValidation : égalité exacte. SHA-256 du JSON structuredContent : `05752e52c4155f9b35846d4fa0da8508896845773c4ae06a6392088765ce48fb`. Les propriétés et dimensions incluses sont également identiques. Historique B toujours 1 et 8 ; dernière modification révision 8 `2026-10-06T23:11:34.639Z`.

Après accord ciblé : supprimer définitivement le seul fichier A par son URL vérifiée ; contrôler l’échec des lectures A et de ses révisions 8/9, l’inventaire réduit à B et B toujours lisible/identique. Retirer uniquement la notification Gmail A après confirmation, rechercher son UUID dans toute la messagerie, conserver la notification B. Nettoyer les propriétés de revue devenues inutiles, vérifier l’absence d’état retiré expiré, reconstruire manuellement la synthèse isolée (zéro demande commerciale pour ces seuls TEST). Ne pas présenter l’inaccessibilité Google comme preuve d’effacement des sauvegardes internes du fournisseur ou des preuves locales conservées.

Les captures et rapports locaux de recette restent présents. L’effacement complet de toutes copies n’est donc pas certifié. Aucun scope supplémentaire, déclencheur, branchement Reporting ou changement du site actif demandé.

## Résultat après l’accord ciblé

JD répond exactement **« oui, supprime A et sa notification »**, après revue du fichier A, de ses versions et du seul message de 01 h 06. Le connecteur delete_file retourne success:true pour l’URL A. Les métadonnées renvoient ensuite NOT_FOUND/404 ; les demandes de lecture des révisions 8 et 9 échouent elles aussi sur le fichier absent (le connecteur vérifie d’abord le fichier). Google Sheets affiche « Sorry, the file you have requested has been deleted ». Ces contrôles établissent la suppression du fichier et l’indisponibilité de son historique par les interfaces testées ; ils ne décrivent pas les sauvegardes internes Google.

La recherche Drive sur le parent isolé, sans filtre excluant la corbeille, retourne **B seul**. Ses réponses complètes bornées Contact/Conservation sont identiques au relevé avant préparation, y compris valeurs, formules, validations et propriétés. Les révisions B restent 1 et 8 avec la même date de modification. Aucun champ de B modifié.

Dans Gmail, le seul message A est placé en corbeille. La lecture générale de la corbeille a été refusée par la revue automatique, car elle inclurait des messages privés hors périmètre ; retour immédiat à la recherche limitée à l’UUID A. Le menu contextuel de ce seul résultat expose Delete forever. Cette action autorisée par la confirmation ciblée est exécutée : toast **Conversation deleted forever**, recherche in:trash A vide. La recherche `in:anywhere {UUID_A UUID_B}` ne retourne ensuite que l’unique notification B de 01 h 07, toujours dans Inbox. Aucun autre message supprimé, aucune corbeille vidée.

Fichier A supprimé (capture retirée le 7 octobre 2026), suppression définitive Gmail (capture retirée le 7 octobre 2026), notification B conservée (capture retirée le 7 octobre 2026).

Lanceur temporaire de finalisation limité au propriétaire, au dossier, à la synthèse et aux IDs de recette exacts. Exécution Google 11 h 10 min 57 s → 11 h 11 min 02 s, Completed :

```json
{"a_op_present":false,"review_cleared":true,"internal_expired_handler":"invalid","expired_markers_removed":0,"files":1,"summary_complete":true,"buckets":0,"no_notification":true}
```

Le refus du jeton expiré est contrôlé de nouveau par appel interne du handler après effacement, sans POST HTTP ni envoi. Aucune opération A ni ND_REVIEW restante. Le helper de nettoyage ne trouve aucun marqueur retired expiré à retirer. Aucun contrôle réel d’un jeton encore valide n’est déduit de ce résultat.

Synthèse isolée relue par connecteur : Snapshot complete, `computed_at=2026-10-07T09:11:01.737Z`, Counts ne contient que day/ref/leads. **Un fichier TEST conservé, zéro compte commercial**, puisque les TEST sont exclus. Le lecteur Reporting et son raccordement restent à éprouver séparément.

Lanceur retiré après exécution, source enregistrée et relue exactement : 29 774 caractères, identique au bundle validé de version 3 ; aucun déploiement supplémentaire. Journal de finalisation (capture retirée le 7 octobre 2026). Les seules modifications locales sont le rapport, les suivis et les preuves ; aucun changement du code exécutable local. Vérification git diff --check passée.

La recette d’effacement Google de A et de sa notification est close. Les preuves locales fictives restent conservées ; aucune certification de purge complète de toutes copies. Le blocage par marqueur avant expiration, le lecteur de synthèse et le transport JavaScript/CORS demeurent des vérifications distinctes.
