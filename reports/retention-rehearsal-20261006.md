# Recette de conservation — dossier fictif du 6 octobre 2026

**État : suppression ciblée autorisée par « oui », effectuée et vérifiée le 6 octobre 2026.** Les seules valeurs Contact A5:Q5 sont effacées ; la notification exacte est supprimée définitivement dans Gmail jd@nodina.com. Les trois anciens TEST, les en-têtes et les formats sont préservés. L’historique Sheets et les preuves locales restent conservés : l’effacement complet du dossier n’est pas certifié.

## Résultat après l’autorisation « oui » — 19 h 17 Europe/Paris

L’accord de JD couvre uniquement les valeurs Contact A5:Q5 et la suppression définitive de la notification du dossier `1d5a5c1e-4d8f-4663-a67c-a010bb6da6e0`, marqueur `RECETTE-CONSERVATION-20261006-A`. Les trois précédents tests, l’historique et les preuves locales sont explicitement exclus.

- Relecture immédiate de Contact A1:Q5 : référence et marqueur exacts en ligne 5, dix-sept colonnes identifiées. Une seule mutation `updateCells`, masque `userEnteredValue`, retire uniquement les valeurs A5:Q5, sans supprimer la ligne.
- Relecture après mutation : A5:Q5 vide ; A1:Q4 identique à la lecture précédente ; formats de A5:Q5 inchangés. Vue native à 100 % : trois anciennes lignes visibles et ligne 5 vide. Preuve après effacement (capture retirée le 7 octobre 2026).
- Gmail : compte jd@nodina.com, sujet, heure et référence relus dans le message exact. Mise à la corbeille ; sélection de cette seule conversation, puis « Delete forever ». Confirmation affichée : « Conversation deleted forever ». Les quatre autres conversations déjà dans Trash restent présentes ; corbeille entière non vidée.
- Recherche Gmail après suppression `in:anywhere "1d5a5c1e-4d8f-4663-a67c-a010bb6da6e0"` : « No messages matched your search ». Preuve Gmail (capture retirée le 7 octobre 2026).
- L’historique Sheets observé avant l’action contient le dossier ; aucune action sur les versions n’est autorisée ou réalisée. Les preuves locales sont aussi conservées. Aucun statut global « Effacé » inscrit dans Conservation ; aucune purge fournisseur ou sauvegarde certifiée.

Ces résultats clôturent les deux actions approuvées. La recette de purge complète reste ouverte sur l’historique et les autres copies conservées. Aucun nouvel envoi, export de données, changement de partage, automatisation, déploiement ou activation GA4.

## Préparation avant envoi — historique

Suite après « Go », puis l’accord ciblé « oui » : historique Contact encore lisible dans la version de 18 h 55, menu sans suppression visible. Le fichier de test distinct, sans données personnelles, créé avec deux versions est supprimé définitivement à 22 h 13 Europe/Paris. Le connecteur confirme l’action ; métadonnées 404, recherche par nom exact vide et message de suppression dans Sheets vérifient le retrait de ce fichier. Aucune purge historique Contact réalisée ; les preuves locales restent conservées. [Recette isolée, résultat et limites](retention-isolated-20261006.md).

- Marqueur : `RECETTE-CONSERVATION-20261006-A`.
- Nom : TEST — Conservation ; e-mail : jd@nodina.com ; organisation : NODINA — TEST.
- Besoin : À définir ensemble ; calendrier : Recette interne du 6 octobre 2026.
- Contexte : TEST — DOSSIER FICTIF. Référence de recette : RECETTE-CONSERVATION-20261006-A. Vérification des copies dans le classeur et la messagerie. Aucune demande commerciale réelle.
- Case de consentement laissée décochée ; bouton d’envoi non actionné.
- [Formulaire local](http://127.0.0.1:4179/fr/contact/) et preuve avant envoi (capture retirée le 7 octobre 2026). Ne pas recharger le formulaire préparé ; ne pas le soumettre deux fois.

L’envoi était laissé à JD : cocher la case, cliquer « Envoyer ma demande », attendre la confirmation puis répondre « envoyé ». Il l’a effectué. [PROMETHEUS §3](../prometheus_update_2026-10-01/PROMETHEUS.md#3-human-gates-the-agent-never-decides-these-alone) impose « the agent drafts, the operator sends » pour les messages sortants. Aucun destinataire tiers ou réponse commerciale préparé.

## Réception et périmètre préparé après « envoyé » — historique avant autorisation

Référence technique : `1d5a5c1e-4d8f-4663-a67c-a010bb6da6e0`. Réception le 6 octobre 2026 à **18 h 55 min 18 s Europe/Paris** (`2026-10-06T16:55:18.133Z`).

| Système | Constat vérifié | Action préparée, non effectuée |
|---|---|---|
| Formulaire local | Accord coché, confirmation « Votre demande a bien été enregistrée », bouton désactivé. | Ne pas renvoyer. |
| Contact | Une nouvelle ligne en **A5:Q5**, référence et marqueur exacts ; consentement contact-v1, notification_status sent. Les trois TEST A2:Q4 sont intacts. | Après autorisation et relecture immédiate : effacer uniquement les valeurs du dossier, sans retirer de ligne structurelle ni modifier les en-têtes. |
| Gmail jd@nodina.com | Recherche globale par marqueur puis référence : **une conversation**. Message ouvert : même référence, sujet « NODINA · TEST — Conservation · unknown », 18 h 55, libellé Inbox. La recherche in:sent par référence retrouve aussi une conversation ; ne pas compter les libellés comme des copies indépendantes. | Après autorisation : supprimer la notification exacte, puis la supprimer définitivement depuis Trash. Ne pas vider la corbeille entière ni toucher aux anciens tests. |
| Historique Sheets | Version du 6 octobre à 18 h 55, ligne du test visible, trois lignes antérieures indiquées non modifiées. Le menu de la version courante propose Name this version et Make a copy ; aucune purge sélective du dossier établie dans cette vue. | Aucun effacement d’historique préparé sur Contact. Le retrait visible ne prouvera pas une purge complète ; ce point reste ouvert. |
| Conservation | A7:I7 relu : entrées vides, formules D/E préservées. | Aucun état Effacé renseigné. Mettre à jour après les vérifications réelles ; distinguer données actives et historique. |
| Preuves de recette | Documents locaux et captures contiennent le contenu fictif. | Les déclarer comme preuves de test conservées. Aucun export du classeur ou du message effectué. |

Preuves : confirmation d’envoi (capture retirée le 7 octobre 2026), ligne sélectionnée (capture retirée le 7 octobre 2026), notification exacte (capture retirée le 7 octobre 2026), historique conservé (capture retirée le 7 octobre 2026). Seules des lectures et préparations ont été réalisées après l’envoi de JD. Aucun réglage de collecte, partage ou conservation fournisseur modifié.

**Validation demandée :** effacement des seules valeurs du dossier TEST dans Contact et suppression définitive de sa notification Gmail. Cela ne couvre pas l’historique du classeur, les trois anciens essais ou les preuves locales. La suppression définitive Gmail sera irréversible dans l’interface ; l’agent devra relire la référence exacte avant l’action. [PROMETHEUS §3](../prometheus_update_2026-10-01/PROMETHEUS.md#3-human-gates-the-agent-never-decides-these-alone) exige un oui explicite pour « Deleting any content, data, or account » ; la règle de contrôle du navigateur exige aussi une confirmation au moment d’un effacement définitif.

## Vérification après réception — protocole initial

1. Rechercher uniquement le marqueur dans Contact. Relever l’identifiant réellement généré, la date, la preuve contact-v1 et notification_status. Relire la référence et le contenu exact juste avant toute mutation ; ne pas utiliser un numéro de ligne mémorisé.
2. Dans Gmail de jd@nodina.com, rechercher le marqueur puis l’identifiant technique. Inventorier uniquement cette notification : Inbox, Sent, autres libellés et Trash. Plusieurs libellés peuvent désigner le même message ; ne pas annoncer plusieurs copies sans preuve.
3. Dans Conservation, suivre la référence technique seulement, sans recopier le message ou les coordonnées. L’état de chaque copie reste « À vérifier » tant que sa suppression n’est pas prouvée. Exemple et test exclus du suivi commercial.
4. Inventorier les exports, téléchargements et sauvegardes effectivement produits. Ne pas exporter le classeur ou les messages pour fabriquer une preuve. La présente recette et sa capture constituent elles-mêmes des copies du contenu fictif, à déclarer dans le bilan.
5. Préparer un périmètre de suppression concret et le faire valider au moment de l’action. Aucune autorisation globale de vider Gmail, de supprimer le classeur ou de purger l’historique complet de Contact n’est demandée.

## Historiques, corbeilles et limites de la preuve

La [documentation Sheets](https://support.google.com/docs/answer/190843?hl=en) indique désormais des actions de suppression d’historique pour le propriétaire : toutes les versions non nommées, ou une version et les précédentes, hors versions explicitement nommées. Ces actions sont irréversibles ; leur disponibilité réelle dans ce compte reste à vérifier. Elles couvrent le **fichier entier**, pas uniquement les cellules du test. Ne pas les utiliser sur Contact pour cette seule recette : cela toucherait aussi les anciennes preuves et les autres dossiers. Préparer un classeur isolé contenant seulement des valeurs fictives si une démonstration de purge d’historique est nécessaire.

La [documentation Gmail](https://support.google.com/mail/answer/7401?hl=en) distingue la corbeille récupérable pendant 30 jours et « Delete forever ». Une mise à la corbeille n’est pas une purge immédiate. Toute suppression définitive du message exact nécessite une confirmation au moment de l’action ; ne jamais vider toute la corbeille pour ce test.

Retirer une ligne visible ou constater une recherche vide ne prouve pas l’effacement instantané des sauvegardes du fournisseur. Distinguer retrait d’usage actif, possibilités de restauration du client et délais contractuels du fournisseur. Un blocage sur l’historique doit être enregistré et résolu avant de présenter l’effacement complet comme opérationnel.

## Critères de clôture

Réception vérifiée ; référence exacte retrouvée ; copies et historiques qualifiés ; actions autorisées et vérifiées séparément ; exceptions et délais indiqués ; trace minimale de la recette. Aucun statut global « Effacé » tant que l’historique et les autres copies conservées ne sont pas traités. Aucun délai commercial appliqué automatiquement. Envoi fictif effectué par JD ; valeurs actives et notification supprimées après son « oui » ; aucun export du classeur ou du message.
