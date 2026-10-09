# GA4 — parcours de contact enregistré le 9 octobre 2026

Après « étape suivante » de JD, configuration dans la propriété NODINA `557424928`, après l’[activation publique](ga4-activation-20261009.md).

## Résultat vérifié dans la console

L’exploration [SITE: Parcours de contact](https://analytics.google.com/analytics/web/?authuser=4#/analysis/a410716626p557424928/edit/vr2HyQvVTWyHea_E37U7fQ) contient deux vues : **Par page d’arrivée** et **Par canal**. Entonnoir ouvert, étapes indirectement successives, sans filtre ni comparaison de segments appliqués :

| Étape | Condition événement |
|---|---|
| Page consultée | `page_view` |
| Clic vers le contact | `primary_cta_click` |
| Formulaire commencé | `form_start` |
| Demande enregistrée | `generate_lead` |

La dernière étape signifie une réception par le service Contact, pas une qualification commerciale. Un visiteur peut entrer à une étape intermédiaire. Les segments proposés par le modèle restent disponibles mais ne filtrent pas ces vues.

Deux rapports sont enregistrés et leurs lignes relues dans la [bibliothèque GA4](https://analytics.google.com/analytics/web/?authuser=4#/a410716626p557424928/assetlibrary/hub?params=_u..nav%3Dmaui), datées du 9 octobre :

- **SITE: Parcours de contact - Par page d’arrivée**, ventilation `Landing page + query string`. GA4 désactive `Landing page` dans cet entonnoir ; la variante compatible est utilisée. Le module NODINA transmet déjà les URL sans query ni fragment.
- **SITE: Parcours de contact - Par canal**, ventilation `Session default channel group`.

Ils sont disponibles dans la bibliothèque. À cette première étape, ils ne sont pas encore ajoutés à une collection publiée dans le menu latéral. L’exploration conserve les deux onglets. **Suite du 9 octobre :** la collection **SITE: NODINA** est ensuite publiée avec ces deux rapports, les rapports d’acquisition et le lien Search Console sont enregistrés. [Résultat de l’étape suivante](ga4-acquisition-20261009.md).

## Canal IA

La console propose déjà **AI Assistant** dans le groupe de canaux par défaut, distinct de **Direct**, **Referral** et **Organic Search**. Le groupe principal reste **Default Channel Group**. Aucun groupe personnalisé en doublon enregistré.

Google classe notamment les sources d’assistants dans ce canal ; les AI Overviews et AI Mode de Google restent dans Organic Search. Un accès sans référent ne permet pas d’identifier l’assistant. [Définition officielle des canaux](https://support.google.com/analytics/answer/9756891?hl=en).

Le collecteur hebdomadaire garde sa liste explicite de dix domaines pour `ai_referral_sessions` ; ce périmètre peut différer du canal natif Google. Son tableau `channels` utilise déjà `sessionDefaultChannelGroup`. Les deux mesures ne doivent pas être présentées comme identiques. Aucun changement du bundle Apps Script, de ses propriétés ou de son déclencheur.

## Limites et suite

La période initiale de l’exploration est **Last 28 days, 11 septembre–8 octobre**, antérieure à l’activation publique du 9 octobre. Les deux vues affichent **No data available** au moment de la configuration. Aucun taux ni volume de demandes n’en est déduit ; GA4 mesure seulement les visiteurs ayant consenti.

Aucun formulaire envoyé, événement de demande simulé, notification, capture ou nouveau déploiement. L’enregistrement ne démontre pas la réception réelle des trois événements d’interaction ; seule la vue de page avait été confirmée lors de l’activation. Les durées de conservation et les choix publicitaires restent ceux déjà approuvés.

Cette première étape couvre l’entonnoir de la phase 7b, pas toute sa clôture. Le rapport de conversion par page, la vue source/medium et le lien Search Console sont terminés à l’[étape suivante](ga4-acquisition-20261009.md). Restent les parcours depuis les pages d’arrivée les plus fréquentées lorsque des données existent. La vérification des interactions réelles reste ouverte sans reprendre les essais clôturés par JD. Première collecte automatique attendue le 12 octobre vers 09:00 Paris ; contrôles de conformité et dossier final Prometheus à terminer.
