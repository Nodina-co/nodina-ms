# Proposition d’effacement par dossier — 6 octobre 2026

**Résultat : cible et migration définies après « go ». Aucun changement du service déployé.** [Spécification technique](../content/security/contact-storage-design.md).

## Problème confirmé

Le code [contact.gs](../tools/forms/contact.gs) écrit une ligne dans le Sheet collectif Contact et reproduit nom, e-mail, organisation et message dans la notification, avec Reply-To vers le prospect. Le collecteur hebdomadaire [Code.gs](../tools/terraform-collector/Code.gs) lit ce classeur pour compter les demandes. La [recette](retention-rehearsal-20261006.md) confirme que vider la ligne active laisse ses données accessibles dans une version précédente.

La [recette isolée](retention-isolated-20261006.md) confirme qu’un fichier entier peut être supprimé, avec indisponibilité côté client, sans toucher au classeur Contact. Elle ne valide pas encore un collecteur créant un fichier par demande, les scopes proposés ou la purge des sauvegardes internes du fournisseur.

## Recommandation

Un fichier privé par demande dans Workspace, contenant Contact et Conservation ; une notification avec lien privé ; une synthèse de comptes sans identifiants individuels pour le reporting. Cela réduit les copies et permet de cibler le fichier d’un seul dossier. Le traitement des e-mails et exports reste une étape séparée. L’architecture, les champs, erreurs, permissions, critères de recette et migration sont décrits dans la spécification.

| Variante examinée | Conséquence | Choix proposé |
|---|---|---|
| Classeur collectif, effacement d’une ligne | Historique partagé entre dossiers ; recette insuffisante pour une purge ciblée | Ne pas conserver pour les nouvelles demandes après bascule |
| Un onglet par dossier dans le même fichier | L’historique reste celui du fichier entier | Écarté |
| Un fichier privé par dossier | Effacement ciblé du fichier et de ses versions accessibles ; gestion de fichiers et recettes de panne supplémentaires | Cible recommandée |
| Nouvelle base de données | Peut offrir une suppression de ligne, mais exige aussi une politique de sauvegardes, une migration et une revue du nouveau stockage | Non nécessaire pour définir la première cible Workspace |

## Impacts concrets

- Le code actuel et son déploiement Google version 1 restent inchangés. La prochaine étape de construction est un candidat séparé et testé localement.
- Viser `drive.file` pour les seuls objets de l’application ; ne pas donner au reporting un accès Drive sur les dossiers. Le droit est à consentir par JD et à éprouver, pas présenté comme déjà accordé.
- Le suivi de conservation se trouve dans chaque fichier individuel. L’ancien onglet Conservation n’est pas un index du nouveau flux.
- Le reporting lira une synthèse des demandes encore conservées ; une suppression peut réduire les comptes d’anciennes périodes. La date de bascule et la couverture doivent être indiquées.
- Le protocole doit empêcher un ancien renvoi de recréer un dossier supprimé. Jeton serveur signé et fenêtre technique de 24 heures proposés ; durée non adoptée, marqueur temporaire inclus dans le bilan d’effacement jusqu’à son retrait.
- La reprise après une création incertaine doit bloquer une seconde création aveugle. Une recette de suppression seule n’éprouve pas ce comportement.
- L’historique de l’ancien Contact reste un périmètre distinct. Aucune migration de ligne ou nouvelle architecture ne l’efface rétroactivement.

## Validation de cette préparation

Inspection des sources locales du formulaire, du client FR/EN, du manifeste Apps Script et du reporting ; comparaison avec les deux recettes de conservation. Documentation primaire Google relue le 6 octobre : [suppression d’un fichier](https://developers.google.com/workspace/drive/api/reference/rest/v3/files/delete), [recherche exacte et propriétés](https://developers.google.com/workspace/drive/api/guides/search-files), [scopes](https://developers.google.com/workspace/drive/api/guides/api-specific-auth), [API Sheets](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets.values/update), [restriction des ID pré-générés pour Sheets](https://developers.google.com/workspace/drive/api/guides/manage-uploads#use_a_pre-generated_id_to_upload_files), [quotas](https://developers.google.com/apps-script/guides/services/quotas).

Pas de test runtime : seule une spécification et les pointeurs de suivi sont ajoutés. L’implémentation, les droits réels et la recette en compte Google ne sont pas validés par ce document. Aucun envoi, création cloud, migration, suppression, réglage ou déploiement effectué.
