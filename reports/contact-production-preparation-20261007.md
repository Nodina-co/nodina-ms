**État courant : recette C/D clôturée après les trois POST autorisés ; candidat remis en privé et TTL restauré.** La [recette du 7 octobre](contact-anonymous-recipe-20261007.md) remplace les attentes de transport/retrait ci-dessous. JD demande commit/push et aucune nouvelle recette. Cette préparation ne constitue pas un déploiement de production.

# Contact — préparation de bascule — 7 octobre 2026

Après « ok Go efficacement étape par étape » : lecture Google de la synthèse vérifiée depuis Reporting, version Contact de production préparée séparément, raccordement local des deux modes et migration Reporting explicite construits. Aucun déploiement, nouvelle soumission, courriel ou effacement. Le projet de recette reste Only myself, version 3 ; le service Contact v1 et le planning Reporting existants sont conservés.

## Lecture réelle de la synthèse

Projet Reporting existant sous jd@nodina.com : source Code.gs copiée depuis l'éditeur et comparée exactement au fichier local avant modification, 22 454 caractères. Ajout temporaire du lecteur avec un lanceur borné à la synthèse de recette, période du 1er au 7 octobre, fraîcheur maximale de 86400 secondes pour ce seul contrôle. Aucune propriété modifiée, aucun token lu, aucun nouveau scope, upload, envoi ou déclencheur.

Exécution Google **12 h 32 min 59 s → 12 h 33 min 00 s Paris**, Completed :

```json
{"recipe":"Contact summary read by Reporting","source":"retained-contact-files-v1","retainedCommercialLeads":0,"qualified":null,"privateReadOnly":true}
```

Lecture effective via l'API Sheets REST et le helper api_ du Reporting, avec son autorisation Sheets readonly existante : Snapshot avant, Counts!A1:C10001, Snapshot après. La synthèse calculée à 11 h 11 Paris ne contient que les en-têtes Counts. Le seul dossier B est TEST ; cela explique zéro demande commerciale. Ce n'est pas une mesure de trafic ni une preuve réelle du passage de deux à un compte commercial.



Lecteur et lanceur temporaires retirés après contrôle. Code original enregistré et recopié depuis l'éditeur : égalité exacte, même longueur, fonction temporaire absente. Aucun raccordement permanent du Reporting Google. Sa nouvelle source **locale** est ensuite préparée pour la migration, donc elle diffère désormais du code Google courant.

## Préparation locale vérifiée

- [Version de production distincte](../tools/forms/production/README.md) : mode production, schéma distinct refusant le stockage de recette, init privée séparée, mêmes droits restreints. Hash du bundle généré : d344f3c2fdb09712efd7d9fb6e7fa5d72b2fd6c3510b6002e33721c1a82fecd1.
- Raccordement opt-in PUBLIC_CONTACT_STORAGE=per-request. Par défaut legacy : aucune modification de .env. Mode signé : un jeton serveur réutilisé ; sans JavaScript, lien localisé vers le formulaire Google signé au lieu d'un POST statique sans preuve, et contact par courriel disponible. L'absence de script applicatif n'établit pas le fonctionnement de l'enveloppe Google avec JavaScript entièrement désactivé : ce parcours complet reste à éprouver et peut nécessiter un autre rendu serveur avant bascule.
- Migration Reporting locale : source explicite, aucune addition des deux stockages et aucun repli vers l'ancien Contact après échec. JSON futur v5, définition des dossiers conservés et qualification null annoncées.
- Builds per-request avec endpoint fictif puis legacy avec configuration locale actuelle réussis ; audit des quatorze pages réussi dans les deux modes. Aucun appel du navigateur à l'endpoint fictif.
- 50 tests du site/formulaires et 8 tests du collecteur réussis. Le test HTTP local a d'abord rencontré EPERM du sandbox ; relancé avec l'autorisation d'écoute loopback, il passe. Les autres tests ne nécessitent pas de réseau. git diff --check passé.

La documentation Google précise les [redirections Content Service](https://developers.google.com/apps-script/guides/content#redirects) et le [sandbox HTML](https://developers.google.com/apps-script/guides/html/restrictions). Les deux parcours réels anonymes du candidat ne sont pas déduits des simulations ou du service v1 déjà testé.

## Prochaine recette préparée, accord d'accès requis

Manage deployments est ouvert sur la version 3 actuelle : Execute as Me jd@nodina.com, Who has access **Only myself**. Menu des options affiché ; Anyone non sélectionné, aucun Deploy exécuté. Vue préparée (capture retirée le 7 octobre 2026).

Périmètre proposé : ouvrir temporairement ce seul endpoint de recette à Anyone, conserver le code TEST-only v3 et les stockages privés, puis rétablir Only myself à la fin des essais. Aucune URL de recette raccordée au site public, aucun partage de fichier, nouvel OAuth ou remplacement de Contact v1.

Pendant l'ouverture, une personne connaissant l'URL peut obtenir un jeton et soumettre un nom TEST-, ce qui consomme les quotas Google et peut notifier JD. Les réponses ne donnent accès à aucun dossier ni champ enregistré. L'accord sur le déploiement privé antérieur ne couvre pas cet élargissement d'accès.

Recette limitée à **trois POST HTTP au maximum**, notifications uniquement à jd@nodina.com :

| Champ | C — JavaScript FR | D — formulaire serveur EN |
|---|---|---|
| name | TEST-RECETTE-20261007-C | TEST-RECETTE-20261007-D |
| email | recette-c@example.com | recette-d@example.com |
| organization | Organisation fictive C | Fictional organization D |
| offer | teams | systems |
| project | TEST-RECETTE-C — Demande entièrement fictive pour vérifier le transport anonyme et le retrait du jeton. Aucune donnée client. | TEST-RECETTE-D — Fictional inquiry to verify the server form without JavaScript. No customer information. |
| timing | Recette technique uniquement | Technical rehearsal only |
| consent | yes, contact-v1 FR | yes, contact-v1 EN |

Premier POST : C par client signé. Deuxième : D par formulaire HTML serveur sans script applicatif. Préparer le marqueur de retrait de C sous verrou après vérification du seul fichier exact. Troisième POST : réessai identique de C avec sa preuve toujours valide, attendu invalid, aucun nouveau fichier ni courriel. Revenir à Only myself après ce contrôle, même en cas d'échec.

Pour permettre la revue du retrait, durée proposée des **nouveaux jetons de recette : une heure**, puis restauration du réglage d'émission à 300 secondes à la fin. Les jetons déjà émis conservent leur expiration signée. Cela ne choisit pas la durée de production. Aucun jeton, clé ou propriété changé à ce stade.

Le retrait invalide la synthèse isolée tant que C reste présent : comportement attendu. La suppression définitive de C, de son historique et de sa notification sera présentée séparément sur les identifiants exacts après création, avec confirmation au moment de l'action. Le contrôle interne Google après cet effacement doit garder la même preuve encore valide ; distinguer ce contrôle du POST HTTP réalisé avant effacement. B et D sont à conserver. Aucun droit de suppression repris de l'accord portant sur A.

## Suite de la bascule

Durées techniques, cadence de reconstruction et recette de charge restent ouvertes. La synthèse manuelle du candidat ne suffit pas au reporting automatique de production. Après ces choix et la recette : stockage de production propre, notices finales FR/EN, raccordement approuvé, test de réception puis publication du site. Premier rapport hebdomadaire existant attendu le 12 octobre vers 09 h Paris ; aucun nouveau monitor créé.
