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
| Profils | /fr/profils/ | /en/engineers/ | Neuf exemples fictifs, dont sept En mission et deux Disponible ; aucun statut commercial réel démontré. |
| Manifeste | /fr/manifeste/ | /en/manifesto/ | Rédaction à valider, avec renvoi vers la sélection. |
| Contact | /fr/contact/ | /en/contact/ | Formulaire actuel legacy ; nouveau service privé prêt. URL de build et accès public à arrêter lors de la bascule. |
| Confidentialité | /fr/confidentialite/ | /en/privacy/ | Versions FR/EN actualisées et validées par JD le 7 octobre. |
| Cookies | /fr/cookies/ | /en/cookies/ | Versions FR/EN validées ; GA4 désactivé, activation séparée. |

## Deux choix éditoriaux à traiter après les notices

**Profils.** Le hero parle de neuf exemples et le compteur de démonstration reste visible. JD a retiré les badges par fiche le 4 octobre : ils ne sont pas réintroduits. Pour le lancement, choisir soit des profils réels anonymisés avec réalisations et droits validés, soit le maintien explicite d'exemples fictifs à tous leurs points d'entrée, soit leur retrait provisoire du catalogue et des aperçus. Aucun passage silencieux de Disponible fictif à disponibilité réelle.

**NODINA Select.** Le référentiel réel indique une méthode et un outil à concevoir ; JD a choisi une présentation cible au présent dans la maquette. Pour le lancement, valider un cadrage public illustratif ou fournir les éléments établissant sa disponibilité réelle. Proposition de formulation à examiner, sans application aux pages actuelles : « NODINA Select — présentation de notre méthode de sélection en préparation. L'évaluation ci-dessous est illustrative ; elle ne représente aucun candidat réel. » / « NODINA Select — a preview of our selection method in preparation. The assessment below is illustrative and does not represent a real candidate. »

Le go-live global ne doit pas être déduit de l'approbation de ces formulations. Mentions légales complètes (capital, immatriculation et informations d'éditeur/hébergeur), pages finales, routage et indexation restent à établir avant publication.

## Vérification de cette étape

Deux compilations statiques Node 24 réussissent : per-request puis configuration locale actuelle restaurée dans dist. Les notices affichent la bonne branche dans chaque rendu. Aucun appel aux endpoints Google, suite de tests, recette, capture ou collecte lancé. Les sources officielles sont relues dans le [dossier fournisseurs](../research/provider-contracts-20261006.md#actualisation-des-références--7-octobre-2026). Le nouveau code Google et les données ne sont pas modifiés ici.

## Choix suivants — propositions concrètes, non appliquées

### Profils

Option proposée : conserver les exemples, préciser leur nature dans les introductions existantes, sans réintroduire les badges par fiche ni le paragraphe commun supprimés par JD.

- Introduction des aperçus accueil/sélection FR : « Découvrez des exemples de compétences et de réalisations pour composer votre équipe. Les profils et leurs statuts sont fictifs. »
- EN : « Explore examples of skills and work your team could bring together. The profiles and their statuses are fictional. »
- Compteur FR : « 9 profils fictifs · 7 “En mission” et 2 “Disponible” à titre d’exemple ».
- EN : « 9 fictional profiles · 7 “On assignment” and 2 “Available” as examples ».

Alternative : retirer provisoirement le catalogue et les aperçus du lancement, ou remplacer par des profils réels dont les parcours et droits de publication sont fournis et validés. Aucune de ces options n'est appliquée à ce stade.

### NODINA Select

Le dernier statut réel fourni le 3 octobre est « méthode et outil à concevoir ». La demande de présentation cible au présent est conservée dans la maquette privée ; elle n'établit pas l'état réel aujourd'hui. Préciser cet état avant de préparer la rédaction publique :

- **En préparation** : aperçu de la méthode, avec évaluation illustrative. Formulation FR : « NODINA Select — notre méthode et notre outil d'évaluation en préparation. Cet aperçu est illustratif ; il ne représente aucun candidat réel. » EN : « NODINA Select — our selection method and assessment tool in preparation. This preview is illustrative and does not represent a real candidate. »
- **Déjà utilisable** : JD précise ce qui existe et est utilisé aujourd'hui ; le référentiel et les affirmations sont ajustés à ce périmètre, sans score, évaluation ou disponibilité de profil inventés.
- **Hors lancement** : retirer provisoirement la présentation de l'outil, tout en conservant les offres Teams et Systems et la sélection humaine réellement proposée.

La réponse de JD doit précéder les modifications des pages marketing. Elle ne modifie pas les accords de publication ou d'accès au formulaire.
