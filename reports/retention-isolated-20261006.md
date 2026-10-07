# Recette isolée de purge — 6 octobre 2026

**État : suppression définitive du seul fichier isolé autorisée par « oui », effectuée et vérifiée le 6 octobre 2026 à 22 h 13 Europe/Paris.** Le fichier et ses versions ne sont plus accessibles dans les interfaces vérifiées. L’historique Contact et les copies locales restent conservés.

## Résultat après l’accord ciblé

JD répond « oui » à la suppression définitive du seul classeur « TEST isolé de purge — 20261006-B » et de ses versions, avec Contact, Conservation et les preuves locales explicitement exclus. Avant l’action, relecture du titre, de l’identifiant Drive et de Recette!A7:B10 : référence B7 exacte, contenu fictif attendu. Suppression via le connecteur Google Drive sur l’URL exacte du fichier ci-dessous ; retour `success: true`. Horodatage après l’action : `2026-10-06T20:13:02Z`, soit 22 h 13 min 02 s Europe/Paris.

Contrôles après suppression : lecture des métadonnées de cet identifiant renvoie `404 NOT_FOUND` ; recherche Drive sur le nom exact, sans exclusion de la corbeille, renvoie zéro résultat. Après rechargement de l’URL du fichier, Google Sheets affiche « Sorry, the file you have requested has been deleted. ». Preuve visuelle de suppression (capture retirée le 7 octobre 2026).

Ces signaux concordants vérifient la suppression du fichier isolé et l’indisponibilité de ses versions côté client. Ils ne prouvent pas une purge instantanée des sauvegardes internes du fournisseur. Aucun changement du classeur Contact, de Conservation, des anciens tests ou des copies locales pendant cette action ; la purge complète de l’ancien dossier Contact reste non certifiée.

## Constat sur Contact après l’effacement actif

Lecture de l’historique dans le compte jd@nodina.com : version courante du 6 octobre à 19 h 14, ligne 5 vide et trois anciennes lignes non modifiées. Après développement des versions détaillées, la version de 18 h 55 contient toujours le dossier 1d5a5c1e-4d8f-4663-a67c-a010bb6da6e0 et son marqueur RECETTE-CONSERVATION-20261006-A. Le menu de cette version affiche Restore this version, Name this version et Make a copy ; aucune commande de suppression affichée. Preuve après l’effacement actif (capture retirée le 7 octobre 2026).

La [documentation Google Sheets](https://support.google.com/docs/answer/190843?hl=en), relue le 6 octobre, décrit des suppressions d’historique par le propriétaire. Elles visent des versions du fichier, pas un dossier dans une ligne. Leur disponibilité n’est pas établie dans l’interface de ce compte. Aucune restauration, copie, renommage ou purge d’une version de Contact réalisée. Cette recette isolée ne supprime pas le contenu historique du classeur Contact.

## Fichier isolé avant suppression

- [NODINA — TEST isolé de purge — 20261006-B](https://docs.google.com/spreadsheets/d/1v0HqPlizmCCk31cEyADEuMWQxZcPQvph7p27TJa2SMI/edit).
- Identifiant Drive : `1v0HqPlizmCCk31cEyADEuMWQxZcPQvph7p27TJa2SMI`, distinct de Contact.
- Dossier ChatGPT privé du compte NODINA. Vue native : jd@nodina.com, Share « Private to only me », zoom 100 %.
- Un seul onglet Recette, aucune formule, validation, script ou connexion au formulaire. Référence B7 : `RECETTE-PURGE-ISOLEE-20261006-B` ; B8 : un texte explicitement fictif. Aucune adresse e-mail ou donnée de contact copiée dans ce fichier.
- Import natif Google Sheets confirmé. Lecture A2:B10 concordante avec les valeurs préparées. Modification de la seule cellule B9 pour créer une deuxième version ; relecture : valeur attendue, autres cellules et formats identiques.
- Deux versions observées, 19 h 22 et 19 h 23 dans la vue native. Fichier prêt (capture retirée le 7 octobre 2026) et deux versions (capture retirée le 7 octobre 2026). Mise en page lisible à 100 %, valeurs non tronquées.
- Le fichier intermédiaire de construction dans le répertoire temporaire et les captures sont des copies fictives conservées. Aucun export de Contact ou de Gmail.

## Périmètre de l’action autorisée

L’action autorisée et réalisée supprime définitivement **ce seul fichier Drive** via le connecteur Google Drive, URL exacte ci-dessus, afin de vérifier le retrait du fichier et de ses versions accessibles. La méthode [Drive files.delete](https://developers.google.com/workspace/drive/api/reference/rest/v3/files/delete), relue le 6 octobre, supprime directement le fichier sans passage en corbeille.

Périmètre exclu : Contact, Conservation, leurs versions, les anciens tests, tous les autres fichiers Drive, Gmail et ses autres messages, preuves et fichiers locaux. Aucun vidage global de corbeille. Aucun changement de partage ou du stockage du formulaire.

[PROMETHEUS §3](../prometheus_update_2026-10-01/PROMETHEUS.md#3-human-gates-the-agent-never-decides-these-alone) exige un oui explicite pour « Deleting any content, data, or account ». La question nomme ce fichier et le caractère irréversible ; JD donne l’accord « oui ». La relecture avant action et les trois contrôles après suppression sont réalisés. Aucun accord de purge du classeur Contact n’est déduit de cette réponse.

Le résultat attendu concerne les interfaces du client. Il ne prouve pas une purge instantanée des sauvegardes internes du fournisseur, ni l’effacement de l’ancien dossier dans l’historique Contact. L’architecture de conservation du formulaire devra traiter ce point séparément avant de revendiquer une purge complète par dossier.
