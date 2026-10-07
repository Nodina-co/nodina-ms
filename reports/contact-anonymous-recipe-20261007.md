# Contact — recette C/D et retrait valide — 7 octobre 2026

Après « déployé, essais autorisés », trois POST au total ont été effectués sur le seul candidat TEST-only v3. C est reçu via le client JavaScript avec credentials omit ; D est reçu par POST HTML serveur EN dans la session Workspace JD. Le troisième POST est le réessai identique de C après marqueur de retrait : refus invalid pendant la validité du jeton. Aucun effacement définitif effectué à ce stade.

## Périmètre et configuration finale

L'éditeur affichait encore Only myself au début, contrairement à la confirmation de déploiement. L'agent a appliqué l'ouverture temporaire Anyone expressément autorisée sur le déploiement existant, version 3 du 7 octobre à 01 h 19 Paris, Me jd@nodina.com. Le déploiement public a retourné son URL standard script.google.com/macros/s/…/exec. Aucun nouveau code/version, scope, partage de fichier ou changement du service Contact v1.

Durée d'émission portée à 3600 secondes par un lanceur temporaire borné au propriétaire et aux IDs de recette ; exécution Completed à 12 h 55 min 58 s Paris. Remise à 300 secondes : Completed **13 h 08 min 30 s Paris**. Les preuves déjà émises gardent leur expiration signée.

Après les trois POST, accès **Only myself** rétabli et confirmé dans Manage deployments. Source Code.gs restaurée, enregistrée et recopiée exactement : 29 774 caractères, égale au bundle local immuable v3. Les deux lanceurs temporaires sont retirés ; aucune propriété de revue C ajoutée. La clé n'a jamais été lue ni imprimée.



Build local legacy reconstruit sans override à 13 h 11 Paris ; .env inchangé, fixture de recette retirée par reconstruction, audit des 14 pages PASS. Serveur local 4181 arrêté. git diff --check PASS. Les 58 tests et les deux profils de build étaient déjà vérifiés lors de la préparation ; aucune modification du code produit pendant cette recette.

## Résultats réels

| Essai | Résultat |
|---|---|
| C FR JavaScript | Jeton puis POST vers URL standard, credentials omit, redirections suivies. Réponse JSON {"ok":true}. Un seul fichier privé, valeurs RAW attendues, consentement contact-v1 FR, notification sent. |
| D EN formulaire serveur | Confirmation Inquiry recorded après POST HTML natif vers l'URL Workspace. Un seul fichier privé, valeurs RAW attendues, consentement contact-v1 EN, notification sent. |
| C après retrait | Même corps URLSearchParams et même preuve en mémoire. Réponse JSON {"ok":false,"code":"invalid"}, jeton encore valide. Aucun nouveau fichier ni notification C. |

La fixture C était une copie **locale et temporaire** de la page per-request réelle, exécutant son client compilé inchangé. Un wrapper fetch limité à deux POST et refusant tout corps différent a volontairement perdu le premier accusé après lecture de la réponse serveur. Cela laisse le vrai client dans son chemin de réessai avec les champs et le jeton conservés. Le refus du troisième POST n'est pas simulé : il vient du déploiement Google v3. Aucun jeton signé exporté dans le rapport ou une capture.



Limite D : l'URL standard ouverte dans Chrome a été redirigée vers /macros/u/4/s/… et affiché Page introuvable, dans le navigateur connecté à plusieurs comptes. L'URL Workspace déjà vérifiée a affiché le formulaire et accepté D. **D ne prouve donc pas un parcours HTML anonyme complet, ni le fonctionnement de l'enveloppe Google avec JavaScript globalement désactivé.** Ce critère reste ouvert avant la bascule de production. C démontre le transport anonyme JSON/CORS du client, depuis le loopback ; la future origine publique reste à vérifier après raccordement autorisé.

## Stockage et notifications

Chaque nouveau fichier n'a qu'une permission user/owner jd@nodina.com, parent 17Gqbu2aT6HjUR0frb5SLC-fan3Czifvz. Lectures bornées Contact!A1:Q2 et Conservation!A1:I2 : valeurs et formules attendues, dernier échange vide, statut À examiner. Conservation!D2 utilise les séparateurs fr_FR.

| Dossier | Référence | Fichier | Statut |
|---|---|---|---|
| B | 79128ce1-c6f3-4bce-83ca-86449550258e | 1YQcY2BYxGSbU7VS0cgdzWrRxgMr50JfzurFUXe0rdho | Conservé, cellules identiques avant/après recette |
| C | 79cf2aec-62a7-46e7-8e1b-21005c19ba8c | 159FBBO9TaLQ6vz2AJ9i_6Q1b_HYjpMzwdC2MVZpV_gQ | Retiré, fichier encore présent et cellules inchangées après réessai |
| D | df6fcad4-6ecf-49f4-bf99-3fcf55352f69 | 1OJfy6BA6epwPEf5t5curVlr13nSX3twB2omdJOahZ4o | Conservé |

Inventaire après réessai : exactement B, C, D. Gmail, recherches in:anywhere par références exactes : une notification C à 13 h 02 et une D à 13 h 04 Paris, sujet fixe NODINA · Nouvelle demande, uniquement référence et lien du dossier privé, reçues dans le compte JD. Aucune notification aux adresses fictives.

## Retrait de C et prochaine suppression ciblée

Lanceur borné au fichier/référence C, propriétaire, dossier, synthèse, nom TEST-RECETTE-20261007-C et adresse fictive exacte, statut complete/sent et durée signée d'une heure. ndRetire_ sous verrou : **Completed 13 h 05 min 35 s Paris**, prepared true, temporary_until 2026-10-07T12:02:49.000Z. Aucun fichier supprimé, aucune donnée B/D modifiée.

Preuve C : émission 2026-10-07T11:02:49.000Z (1791370969), expiration 2026-10-07T12:02:49.000Z (1791374569), soit **14 h 02 min 49 s Paris**. Seuls UUID et horodatages non secrets sont consignés ; signature/clés absentes.

Snapshot synthèse : unavailable, horodatage 2026-10-07T11:05:34.597Z, génération e10840d9-105e-4360-b507-7843ae1021f7. Tant que C retiré reste dans l'inventaire, une reconstruction complète doit refuser la couverture ; ne pas présenter un faux zéro. Reporting actif n'est pas raccordé à cette synthèse de recette.

JD clôture les essais et demande commit/push le 7 octobre. La suppression de C, de D et de leurs notifications est différée ; elle n'est pas incluse dans le retrait des captures locales. Aucun nouveau POST, courriel, lanceur de recette ou effacement Google n'est autorisé par cette clôture. C et D restent des dossiers fictifs dans le stockage isolé. Le marqueur de C était temporaire ; ne pas annoncer que la preuve encore valide ou cet état sont toujours actuels après leur expiration.

Les 116 captures présentes dans le dépôt et 103 captures des archives locales de maquettes sont supprimées à la demande de JD. Parmi elles, 36 étaient suivies par Git et publiées. Les anciens commits Git peuvent toujours contenir les images ; aucune réécriture d'historique n'est effectuée.

## Suite de production

Reste à fermer le parcours serveur anonyme/sans JavaScript complet, choisir les durées et la cadence de synthèse, initier le stockage de production séparé, finaliser les notices FR/EN et effectuer le raccordement après accords ciblés. La recette ne termine ni la mise en production publique ni toutes les phases PROMETHEUS. [Préparation locale et lecteur Reporting](contact-production-preparation-20261007.md).
