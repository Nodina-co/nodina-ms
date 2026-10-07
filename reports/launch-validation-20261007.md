# NODINA — validation des notices et pages de lancement

Préparé le 7 octobre 2026 après « Go ». Aucun lancement, déploiement, nouvel essai, envoi, suppression ou activation Analytics. JD répond ensuite « validé » à la question ciblée sur les notices FR/EN et la procédure de conservation avec revue au moins mensuelle. Cette validation est enregistrée ; les pages marketing et le lancement public restent distincts.

## Notices et procédure validées par JD

Ouvrir [la revue HTML autonome](legal-review-20261007.html) : Confidentialité production FR, Privacy production EN, Cookies FR/EN, puis les versions du formulaire actuel pour comparaison. Les textes sont issus des rendus du build ; aucun script ou dépendance externe dans la revue. Les liens de navigation du site sont remplacés par du texte pour éviter de quitter ce dossier local.

Changements concrets :

- Informations alignées sur PUBLIC_CONTACT_STORAGE : classeur actuel ou fichier privé individuel. La future notification de production ne contient que la référence et le lien, sans recopier les coordonnées ni le message.
- Nom, e-mail, organisation et contexte obligatoires ; choix d'offre et calendrier facultatifs, conformément au formulaire. Contact alternatif par e-mail.
- Douze mois après le dernier échange pour Sans suite et e-mails associés ; suivi et suppression manuels, copie par copie. Pas de promesse de purge instantanée des sauvegardes du fournisseur.
- Synthèse de production : comptes de dossiers encore conservés, reconstruction horaire ; les comptes diminuent après effacement. Aucun nom, e-mail ou texte dans l'export de reporting.
- Journaux Cloudflare de revue distingués : Access Free 24 heures, administration 18 mois, logs/traces Workers désactivés lors du contrôle du 6 octobre. Les durées des cookies sont distinctes.
- Garanties de transfert reliées aux accords Google Workspace et Cloudflare ; aucun traitement exclusivement européen affirmé. Contact pour obtenir les informations sur les garanties. Mesure Google Analytics toujours optionnelle et désactivée ici.
- Modalités de réception des droits et délai d'un mois indiqués. La [procédure interne validée](../content/security/site-data-operations.md#procédure-validée-pour-la-production--7-octobre-2026) détaille suivi, retrait, effacement ciblé et copies ; revue au moins mensuelle adoptée par JD.

La validation demandée porte sur ces notices et cette procédure de conservation. L'activation Analytics et ses durées de mesure, la publication du site et l'élargissement d'accès au formulaire restent des décisions distinctes. Les contrats principaux, entités facturantes, suivi des demandes de droits et exceptions de conservation restent à documenter selon leur usage ; ne pas interpréter les notices comme un certificat de conformité globale.

## Pages existantes : inventaire pour la revue finale

Aucune URL ci-dessous n'est considérée comme approuvée pour indexation par cette liste. content/PLAN.md, les briefs et le manifeste de soumission seront établis dans les phases correspondantes de PROMETHEUS.

| Page | Route FR | Route EN | État de validation |
|---|---|---|---|
| Accueil | /fr/ | /en/ | Maquette A conservée ; comporte des aperçus de profils et NODINA Select. Profils confirmés réels et méthode Select confirmée utilisable ; validation finale des pages à effectuer. |
| Sélection | /fr/selection-des-talents/ | /en/vetting/ | Méthode Select utilisable confirmée par JD le 8 octobre ; exemple d’évaluation illustratif sans candidat réel. Disponibilité du logiciel non confirmée. |
| Profils | /fr/profils/ | /en/engineers/ | Neuf profils réels anonymisés, confirmés par JD le 7 octobre ; sept En mission et deux Disponible affichés. Disponibilité pour la mission à confirmer. |
| Manifeste | /fr/manifeste/ | /en/manifesto/ | Rédaction à valider, avec renvoi vers la sélection. |
| Contact | /fr/contact/ | /en/contact/ | Formulaire actuel legacy ; nouveau service privé prêt. URL de build et accès public à arrêter lors de la bascule. |
| Confidentialité | /fr/confidentialite/ | /en/privacy/ | Versions FR/EN actualisées et validées par JD le 7 octobre. |
| Cookies | /fr/cookies/ | /en/cookies/ | Versions FR/EN validées ; GA4 désactivé, activation séparée. |
| Mentions légales | /fr/mentions-legales/ | /en/legal-notice/ | Préparées le 8 octobre ; capital et forme documentés INPI, RCS/TVA relevés Pappers. Téléphone et validation du texte encore attendus. [Revue FR/EN](legal-notice-review-20261008.html). |

## Profils confirmés et choix restant pour NODINA Select

**Profils — point clos.** JD confirme « les profils actuels sont réels ». Le classement antérieur fictif est corrigé. Les neuf fiches anonymisées sont conservées ; les mentions démonstration et exemples sont retirées du catalogue et des aperçus FR/EN. Aucun badge ni paragraphe commun réintroduit. Les données et statuts sont inchangés, la disponibilité pour une mission restant à confirmer. Portraits conservés comme illustrations. La proposition de retrait/remplacement et d'ajout d'une mention fictifs est abandonnée.

**NODINA Select — méthode confirmée.** JD précise le 8 octobre : « oui la méthode Nodina Select est utilisable ». La méthode est présentée au présent, avec une FAQ FR/EN centrée sur les évaluateurs. La proposition de la qualifier d'en préparation est abandonnée. Le statut du logiciel n'est pas confirmé par cette réponse ; l'exercice d'évaluation reste illustratif et ne promet pas un outil disponible.

Le go-live global ne doit pas être déduit de l'approbation de ces formulations. Les mentions légales sont préparées le 8 octobre : [données et sources](../research/legal-notice-20261008.md), [texte concret FR/EN](legal-notice-review-20261008.html). Téléphone professionnel et validation de ces textes restent à obtenir ; pages finales, routage et indexation restent à établir avant publication.

## Vérification de cette étape

Deux compilations statiques Node 24 réussissent : per-request puis configuration locale actuelle restaurée dans dist. Les notices affichent la bonne branche dans chaque rendu. Aucun appel aux endpoints Google, suite de tests, recette, capture ou collecte lancé. Les sources officielles sont relues dans le [dossier fournisseurs](../research/provider-contracts-20261006.md#actualisation-des-références--7-octobre-2026). Le nouveau code Google et les données ne sont pas modifiés ici.

## Choix suivants — propositions concrètes, non appliquées

### Profils — confirmation reçue

JD confirme « les profils actuels sont réels ». La proposition de les qualifier de fictifs n'est pas appliquée. Le catalogue FR/EN parle désormais de profils et de parcours, avec un compteur neutre. Les neuf fiches ne sont pas réécrites et les statuts ne sont pas transformés. Référentiel corrigé à partir de la déclaration de JD, sans présenter cette déclaration comme une vérification indépendante.

### NODINA Select — confirmation reçue le 8 octobre

JD confirme la méthode utilisable. Référentiel, brief et registre des affirmations actualisés (C245, remplace le volet méthode de C235). FAQ FR/EN : « NODINA Select est notre méthode de sélection » / « NODINA Select is our selection method », suivie des six dimensions et de la revue humaine. Aucun logiciel opérationnel, résultat mesuré ou candidat réel dans l'exemple n'est affirmé. L'exemple commenté conserve sa mention illustrative. La disponibilité de l'outil pourra être documentée si une future rédaction doit en faire une promesse ; elle ne bloque pas la présentation de la méthode humaine actuelle.

Prochaine étape : compléter le téléphone professionnel, faire valider les mentions légales préparées, puis préparer la validation globale des pages. La validation de la méthode ne vaut pas accord de lancement public.
