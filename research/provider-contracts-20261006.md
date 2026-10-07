# Fournisseurs — preuves contractuelles du 6 octobre 2026

Revue interne pour le site vitrine NODINA. Après la préparation, JD confirme « accepté » : le CDPA Workspace et les conditions Analytics sont enregistrés et vérifiés le 6 octobre 2026. Le contact principal est enregistré. Aucune déclaration DPO, publication publique ou activation de GA4 réalisée. Une connexion authentifiée ne constitue pas une acceptation d’avenant. Les entités contractantes propres au compte et les durées techniques doivent être établies avec les accords et paramètres effectifs ; aucun traitement exclusivement européen affirmé.

| Service / usage | Source et constat | Suite concrète |
|---|---|---|
| Workspace : réception Apps Script, stockage Sheets, notifications Gmail | Compte Nodina, administrateur jd@nodina.com. Account settings → Legal & Compliance affiche **Accepted by jd@nodina.com on Oct 06, 2026** pour le Cloud Data Processing Addendum. | Acceptation et date vérifiées ; étape close. Relier le contrat principal à l’entité contractante effective et terminer la revue des transferts et durées. HIPAA et la certification conditionnelle hors EMEA ne sont pas acceptés. |
| Analytics : future mesure optionnelle du site et rapports statistiques | Compte NODINA 410716626, pays France. Account details affiche **The Data Processing Terms for this account were accepted on October 6, 2026** ; les quatre partages facultatifs restent décochés. | JD a coché l’accord puis confirmé « accepté ». La console signalait alors un changement non sauvegardé ; l’agent clique Save dans le périmètre exact de cette confirmation. Statut daté enregistré. Le tag du site reste désactivé. |
| Analytics : DPA administration | Contact enregistré et relu : Jean-David Collard, jd@nodina.com, adresse NODINA SAS confirmée, rôle **Primary contact** seulement. Aucun rôle DPO ou EEA representative affiché. | Ajout effectué par JD et vérifié après sa confirmation. La page précise qu’elle ne couvre pas l’acceptation des conditions. La section Legal entities n’affiche pas d’entité ; ne pas confondre le nom du compte avec la preuve de l’entité contractante. |
| Cloudflare : hébergement statique et Access de la revue privée | Compte Jd@nodina.com : **Workers Free** et **Zero Trust Free** vérifiés ; Worker statique nodina-preproduction, Workers Logs et Workers Traces **Disabled**. | Le contrat Self-Serve incorpore le DPA (§6.1). Applicabilité déduite de l’offre gratuite et de son utilisation ; aucune date d’acceptation individuelle affichée ni nouvel accord accepté. Durées documentées ci-dessous. |

## Documents de référence et portée

- [CDPA proposé dans Google Admin](https://admin.google.com/terms/apps/8/2/en/dpa_terms.html) : Google est sous-traitant des données personnelles client couvertes ; instructions, sécurité, sous-traitants, suppression et mécanismes de transferts sont encadrés. La prise d’effet dépend de l’accord. La suppression non récupérable par le client constitue une instruction ; le texte prévoit un délai fournisseur pouvant aller jusqu’à 180 jours, sous exceptions. Cela ne justifie pas une promesse de purge instantanée d’une ligne Sheets et de toutes ses copies. [Version publique Cloud](https://cloud.google.com/terms/data-processing-addendum/).
- [Services Workspace](https://workspace.google.com/terms/user_features/) : la liste mise à jour le 31 août 2026 inclut Apps Script, Gmail, Sheets et Drive parmi les Core Services. Leur inclusion au périmètre de l’offre effective NODINA doit être reliée au contrat du compte. Les Additional Products ont un régime distinct : ne pas y ranger Apps Script sur une ancienne supposition.
- [Conditions de traitement Analytics](https://business.safety.google/adsprocessorterms/) : données de mesure couvertes, responsabilités, sécurité, sous-traitants, suppression et transferts. [Guide Google d’acceptation](https://support.google.com/analytics/answer/3379636?hl=en) : le principe général d’incorporation aux accords EEE n’efface pas le constat « non accepté » de la console. La preuve datée propre au compte et le contact principal sont désormais enregistrés ; aucune nécessité de déclarer JD DPO n’en est déduite.
- [DPA Cloudflare](https://www.cloudflare.com/cloudflare-customer-dpa/) : intégré au contrat principal selon son champ ; prévoit des garanties de transfert et des sous-traitants. [Sous-traitants](https://www.cloudflare.com/gdpr/subprocessors/). Ce cadre ne démontre ni la résidence européenne de tous les traitements ni le contrat effectif NODINA.

## Preuves enregistrées et suite

- CDPA Workspace accepté (capture retirée le 7 octobre 2026).
- Conditions Analytics acceptées et sauvegardées (capture retirée le 7 octobre 2026).
- Contact principal enregistré (capture retirée le 7 octobre 2026).

Historique : les captures `pending` et `contact-draft` documentent la préparation précédente, avant la réponse de JD ; elles ne décrivent plus l’état courant. La validation contractuelle a été demandée à l’étape précise, puis JD a répondu « accepté ». L’enregistrement Analytics a été complété par l’agent sans autre changement. Aucune preuve d’acceptation Cloudflare propre au compte ajoutée.

Restent les contrats principaux et entités Google, la confirmation documentaire du rattachement Cloudflare si nécessaire, la qualification des transferts et les autres durées techniques effectives. L’acceptation des avenants ne certifie pas l’ensemble de ces points ni la conformité de NODINA. Ne lire ni mots de passe, propriétés de script ou tokens.

Le [suivi privé Conservation](https://docs.google.com/spreadsheets/d/1o3HpWGkOjSePSdr8kZJYXWsaS4XgYbgL9Y2rcQ3tgHw/edit?gid=20261006#gid=20261006) et la [procédure de traitement](../content/security/site-data-operations.md) sont préparés indépendamment. Le calcul est vérifié ; l’effacement de bout en bout des copies reste à éprouver. La politique FR/EN conserve sa notice de validation en cours.

## Cloudflare — vérification du compte le 6 octobre

Le [contrat Self-Serve](https://www.cloudflare.com/terms/), mis à jour le 12 septembre 2025, prévoit l’accord par usage et incorpore le DPA pour les traitements couverts (§6.1). Il désigne Cloudflare, Inc. (§20). L’offre gratuite active étaye ce rattachement ; elle ne fournit pas une signature ou une date propre à NODINA. Aucun bouton contractuel supplémentaire actionné.

| Périmètre | Preuve du compte et durée | Limite |
|---|---|---|
| Worker statique | Workers Free ; Workers Logs et Workers Traces désactivés. La console indique que les métriques ne sont pas disponibles pour un Worker servant seulement des assets. | Ne pas appliquer une durée de Workers Logs à une fonction désactivée, ni conclure que toute donnée technique Cloudflare est absente. |
| Authentifications Access | Zero Trust Free ; [documentation des journaux](https://developers.cloudflare.com/cloudflare-one/insights/logs/) : **24 heures**. | Durée fournisseur pour ce jeu de journaux ; distincte de la session d’accès de six heures. Aucun journal nominatif exporté. |
| Administration du compte | Même documentation : **18 mois** pour Admin logs. | Traces d’administration, distinctes des demandes Contact et des visites publiques. |
| Export Logpush | Console : bouton **Subscribe to Logpush**, aucune liste de jobs configurés affichée. | Aucun abonnement créé. Ce constat limité à cette console ne prouve pas l’absence de toute autre copie ou export manuel. |

Preuves : Worker, logs et traces désactivés (capture retirée le 7 octobre 2026) ; Logpush non souscrit dans la console (capture retirée le 7 octobre 2026). Offres et paramètres relevés en lecture seule ; aucun réglage modifié. Les autres catégories proposées dans Cloudflare One ne sont pas présumées actives.

Le DPA v6.4 du 3 avril 2026 ne transforme pas la durée interne de journaux d’accès à l’infrastructure en durée des journaux Access de NODINA. Ses garanties de transfert restent à qualifier par traitement ; aucune résidence exclusivement européenne ni purge instantanée affirmée. Ces constats internes restent à intégrer aux textes FR/EN lors de leur revue finale.
