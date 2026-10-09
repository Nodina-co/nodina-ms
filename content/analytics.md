**État actuel, 9 octobre :** GA4 public actif après consentement. Les paragraphes datés du 6 et du 7 octobre conservent la préparation et ses limites historiques ; la rétention existante est conservée et les notices publiques sont actualisées. Aucune réception de formulaire simulée.

**Validation du 7 octobre :** JD valide les notices FR/EN et la procédure de conservation manuelle avec revue au moins mensuelle. Les textes ne sont plus en attente de cette validation. L'activation Analytics, ses durées de mesure, les vérifications réelles après activation et le lancement public restent distincts. [Décision et choix suivants](../reports/launch-validation-20261007.md).

# Mesure NODINA — préparation du 6 octobre 2026

Le module GA4 est activé sur les seize pages publiques depuis le 9 octobre, après accord de JD et consentement du visiteur. Une vue de page est confirmée dans GA4 Realtime. [Activation et limites](../reports/ga4-activation-20261009.md). La préproduction privée reste exclue même si le drapeau d'activation est défini. Les significations suivent [goals.md](goals.md).

| Événement implémenté | Déclenchement | Signification |
|---|---|---|
| `page_view` | Une fois par page connue après acceptation | Page consultée avec consentement ; visiteurs qui refusent non mesurés |
| `primary_cta_click` | Bouton principal `Action` vers le contact ; navigation et liens texte exclus | Intérêt exprimé ; aucune demande reçue |
| `form_start` | Première interaction avec le formulaire, une fois par formulaire affiché | Début du formulaire ; aucun envoi confirmé |
| `generate_lead` | `nodina:contact-recorded` après réponse `ok: true` du service et `data-sent=true`, une fois par formulaire | Demande enregistrée ; aucune qualification commerciale présumée |

La demande enregistrée est définie comme événement clé GA4 ; clics et débuts restent intermédiaires. Aucun événement de réservation ni paiement en ligne prévu. Chaque événement porte `page_location` (URL canonique), `page_path`, `page_title` (titre du build) et `send_to`. Les trois interactions portent `ref` et `page_ref` : page du clic pour le CTA ; page NODINA précédente connue pour le formulaire, sinon page de contact. Sans referrer même domaine connu, l'origine du parcours reste indisponible. La dimension personnalisée `page_ref` est enregistrée avec une portée événement ; le collecteur existant regroupe par `pagePath`.

Le module ne lit aucun champ du formulaire. Ni nom, e-mail, organisation, message ou identifiant de demande envoyé à GA4. URL courante sans query ni fragment ; referrer externe réduit à son origine ; chemins internes limités aux seize routes connues, dont confidentialité et cookies FR/EN. Les UTM libres sont exclus de GA4 : l'attribution de campagne attend une convention et une liste de campagnes autorisées. Contact garde séparément son attribution existante.

## Consentement et activation

- Aucun chargement de Google avant acceptation, aucun ping après refus : mode basique. Interactions antérieures au consentement non rejouées.
- Refuser et Accepter de même présentation ; choix modifiable au pied de page ; formulaire disponible après refus.
- Choix dans `localStorage` (`nodina.analytics-choice.v1`) valable six mois, sans prolongation à chaque visite. Une ancienne acceptation dans un stockage non modifiable est rejetée.
- Retrait : événements explicites bloqués, émissions du SDK désactivées par `ga-disable-G-J8NV7Z1HMX`, cookies `_ga` supprimés sans rechargement ni perte du brouillon de formulaire. Retrait synchronisé entre onglets. Expiration surveillée par timer et lors des changements de visibilité.
- Google Signals et personnalisation publicitaire désactivés ; consentements publicitaires refusés. Cookies Google limités à 180 jours sans renouvellement automatique.
- `PUBLIC_ANALYTICS_ENABLED=true` exige HTTPS, hôte exact `nodina.com`, route connue et consentement. Drapeau absent par défaut ; `www` exclu.
- `PUBLIC_ANALYTICS_PREVIEW=true` affiche seulement l'interface sur localhost/127.0.0.1, sans SDK Google même après acceptation. Ne pas définir ce drapeau pour le build livré.

La balise est ajoutée une seule fois à `<head>` après accord. Une confirmation POST native sans JavaScript reste enregistrée dans Contact sans événement GA4.

## Console et vérification — 2026-10-06

Propriété `557424928`, flux `16047238617`, ID `G-J8NV7Z1HMX`. Mesures améliorées désormais **désactivées**, switch relu `false`, pour éviter les interactions automatiques et doublons de formulaire ; aucun tag connecté supplémentaire affiché. Preuve (capture retirée le 7 octobre 2026).

Rétention existante lue sans modification : événements deux mois ; utilisateurs quatorze mois ; réinitialisation à chaque nouvelle activité activée. Durées de console distinctes de celles du choix et des cookies ; choix final à confirmer pour la politique de confidentialité. Événements clés, dimensions, canaux IA et explorations restent à configurer sur les pages publiques approuvées.

Quinze tests du module vérifient les barrières d'activation/hôte/HTTPS, choix invalide/expiré, absence de collecte sans accord, initialisation unique, paramètres bornés, attribution, confirmation et retrait, y compris depuis les quatre pages juridiques. Recette Chrome FR/EN : refus, acceptation locale, choix entre pages, réouverture, clavier, focus rendu aux préférences, largeur 320 pixels sans débordement. Aucun script Google présent en aperçu local, aucun avertissement/erreur console observé, aucun formulaire réellement envoyé. Panneau français (capture retirée le 7 octobre 2026).

Les quatre brouillons de confidentialité/cookies sont intégrés localement, avec les liens du formulaire et du panneau. JD a confirmé l’identité juridique, build@nodina.com pour les droits et douze mois après le dernier échange pour le contact sans suite. Avant activation : arrêter la base du contact, mettre en œuvre la conservation, compléter les durées techniques et garanties de transfert, faire approuver les textes, la publication et le routage canonique, puis vérifier les requêtes réelles et chaque page/événement dans Realtime. Cette préparation ne certifie pas une conformité juridique ni une collecte réelle. [Brouillons et points ouverts](../reports/legal-drafts-20261006.md).

## Reporting

Le 9 octobre, l’exploration **SITE: Parcours de contact** et deux rapports sont enregistrés dans la bibliothèque GA4 : entonnoir ouvert `page_view` → `primary_cta_click` → `form_start` → `generate_lead`, ventilé par page d’arrivée et par canal de session. Le canal natif **AI Assistant** est conservé, distinct de Direct ; aucun groupe en doublon créé. Aucun nouveau formulaire de test envoyé. La période initiale précède l’activation et ne contient pas encore de données traitées ; aucune conversion commerciale déduite. [Configuration, accès et limites](../reports/ga4-reporting-20261009.md).

Le reporting lira la propriété GA4 `557424928`, Search Console `sc-domain:nodina.com` et Bing `https://nodina.com/`. Les rapports GA4 seront préparés avec trois jours de délai, sans garantie de finalité ; Search Console utilise ses dates finalisées et Bing conserve ses dates brutes.

La source de vérité des demandes reçues est le classeur Contact existant. Le collecteur n'exporte que des comptes par fenêtre et page `ref`, exclut les lignes marquées `TEST-`, accepte les dates ISO du service existant et refuse les dates illisibles. Les références exportées doivent être des chemins FR/EN connus ; tout autre format est regroupé comme inconnu. Si la colonne `qualified` n'existe pas, les demandes qualifiées restent indisponibles. Une qualification consignée par JD reste distincte d'une réception de formulaire et nécessite le dédoublonnage par opportunité décrit dans les objectifs.

Les événements GA4 absents ne prouvent ni zéro demande ni zéro conversion. GA4 représente seulement les visiteurs ayant consenti. Le premier test réel du reporting répond sans erreur ; collecte hebdomadaire installée, première exécution automatique attendue le 12 octobre vers 09:00 Paris. Fichiers et chiffres restent dans le dépôt analytique privé. [Installation](../tools/analytics/README.md), [vérification technique](../reports/analytics-preparation-20261006.md).

Sources : [Google — mode basique](https://developers.google.com/tag-platform/security/concepts/consent-mode), [ordre des commandes](https://developers.google.com/tag-platform/security/guides/consent), [paramètres GA4](https://developers.google.com/analytics/devguides/collection/ga4/reference/config), [CNIL — choix et retrait](https://www.cnil.fr/fr/cookies-et-autres-traceurs/que-dit-la-loi), [CNIL — durée du choix](https://www.cnil.fr/fr/questions-reponses-lignes-directrices-modificatives-et-recommandation-cookies-traceurs).

Arrêt du SDK sans rechargement : [mécanisme officiel Google](https://developers.google.com/tag-platform/security/guides/privacy). Une nouvelle acceptation réactive le SDK existant sans doubler la balise ou la vue de page ; à vérifier aussi sur les requêtes réelles lors de la recette de production.
