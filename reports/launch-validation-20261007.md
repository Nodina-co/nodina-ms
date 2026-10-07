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
| Accueil | /fr/ | /en/ | Maquette A conservée ; comporte des aperçus de profils et NODINA Select. Validation finale dépend des deux choix ci-dessous. |
| Sélection | /fr/selection-des-talents/ | /en/vetting/ | Présentation cible de NODINA Select, démonstration illustrative sans candidat réel. Statut public à décider. |
| Profils | /fr/profils/ | /en/engineers/ | Neuf profils réels anonymisés, confirmés par JD le 7 octobre ; sept En mission et deux Disponible affichés. Disponibilité pour la mission à confirmer. |
| Manifeste | /fr/manifeste/ | /en/manifesto/ | Rédaction à valider, avec renvoi vers la sélection. |
| Contact | /fr/contact/ | /en/contact/ | Formulaire actuel legacy ; nouveau service privé prêt. URL de build et accès public à arrêter lors de la bascule. |
| Confidentialité | /fr/confidentialite/ | /en/privacy/ | Versions FR/EN actualisées et validées par JD le 7 octobre. |
| Cookies | /fr/cookies/ | /en/cookies/ | Versions FR/EN validées ; GA4 désactivé, activation séparée. |

## Profils confirmés et choix restant pour NODINA Select

**Profils — point clos.** JD confirme « les profils actuels sont réels ». Le classement antérieur fictif est corrigé. Les neuf fiches anonymisées sont conservées ; les mentions démonstration et exemples sont retirées du catalogue et des aperçus FR/EN. Aucun badge ni paragraphe commun réintroduit. Les données et statuts sont inchangés, la disponibilité pour une mission restant à confirmer. Portraits conservés comme illustrations. La proposition de retrait/remplacement et d'ajout d'une mention fictifs est abandonnée.

**NODINA Select.** Le référentiel réel indique une méthode et un outil à concevoir ; JD a choisi une présentation cible au présent dans la maquette. Pour le lancement, valider un cadrage public illustratif ou fournir les éléments établissant sa disponibilité réelle. Proposition de formulation à examiner, sans application aux pages actuelles : « NODINA Select — présentation de notre méthode de sélection en préparation. L'évaluation ci-dessous est illustrative ; elle ne représente aucun candidat réel. » / « NODINA Select — a preview of our selection method in preparation. The assessment below is illustrative and does not represent a real candidate. »

Le go-live global ne doit pas être déduit de l'approbation de ces formulations. Mentions légales complètes (capital, immatriculation et informations d'éditeur/hébergeur), pages finales, routage et indexation restent à établir avant publication.

## Vérification de cette étape

Deux compilations statiques Node 24 réussissent : per-request puis configuration locale actuelle restaurée dans dist. Les notices affichent la bonne branche dans chaque rendu. Aucun appel aux endpoints Google, suite de tests, recette, capture ou collecte lancé. Les sources officielles sont relues dans le [dossier fournisseurs](../research/provider-contracts-20261006.md#actualisation-des-références--7-octobre-2026). Le nouveau code Google et les données ne sont pas modifiés ici.

## Choix suivants — propositions concrètes, non appliquées

### Profils — confirmation reçue

JD confirme « les profils actuels sont réels ». La proposition de les qualifier de fictifs n'est pas appliquée. Le catalogue FR/EN parle désormais de profils et de parcours, avec un compteur neutre. Les neuf fiches ne sont pas réécrites et les statuts ne sont pas transformés. Référentiel corrigé à partir de la déclaration de JD, sans présenter cette déclaration comme une vérification indépendante.

### NODINA Select

Le dernier statut réel fourni le 3 octobre est « méthode et outil à concevoir ». La demande de présentation cible au présent est conservée dans la maquette privée ; elle n'établit pas l'état réel aujourd'hui. Préciser cet état avant de préparer la rédaction publique :

- **En préparation** : aperçu de la méthode, avec évaluation illustrative. Formulation FR : « NODINA Select — notre méthode et notre outil d'évaluation en préparation. Cet aperçu est illustratif ; il ne représente aucun candidat réel. » EN : « NODINA Select — our selection method and assessment tool in preparation. This preview is illustrative and does not represent a real candidate. »
- **Déjà utilisable** : JD précise ce qui existe et est utilisé aujourd'hui ; le référentiel et les affirmations sont ajustés à ce périmètre, sans score, évaluation ou disponibilité de profil inventés.
- **Hors lancement** : retirer provisoirement la présentation de l'outil, tout en conservant les offres Teams et Systems et la sélection humaine réellement proposée.

La réponse de JD doit précéder les modifications des pages marketing. Elle ne modifie pas les accords de publication ou d'accès au formulaire.
