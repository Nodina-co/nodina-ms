# GA4 — Search Console et acquisition, 9 octobre 2026

JD autorise explicitement de relier Search Console à GA4 et de compléter les rapports d’acquisition.

## Association vérifiée

GA4 confirme **LINK CREATED**, puis la table des associations affiche : **nodina.com**, type **Domain**, flux **NODINA — Web**, ID `16047238617`, associé par `jd@nodina.com` le **9 octobre 2026**. Propriété GA4 `557424928`, compte `410716626`.

La collection **Search Console** est visible dans le menu GA4 et la bibliothèque indique **Published to all** : rapports **Queries** et **Google organic search traffic**. Aucune propriété ou permission utilisateur supplémentaire créée. Les données Search Console arrivent habituellement avec 48 heures de délai ; cette association ne prouve pas l’indexation des pages. [Documentation Google](https://support.google.com/analytics/answer/10737381?hl=en).

## Rapports NODINA enregistrés et publiés

Collection **SITE: NODINA**, ID `16095284853`, rubrique **Acquisition et contact**. Sa publication est vérifiée par l’apparition des quatre raccourcis dans le menu GA4 :

| Rapport | Configuration enregistrée |
|---|---|
| SITE: Acquisition - Sources et canaux | Copie personnalisée de Traffic acquisition, ID `16095232968`. Dimension par défaut **Session source / medium** ; **Session default channel group** disponible, dont AI Assistant. Sessions, sessions engagées, taux d’engagement, durée moyenne par session, événements par session, nombre d’événements, événements clés et taux d’événement clé par session. Chiffre d’affaires retiré. |
| SITE: Acquisition - Pages d’arrivée et conversion | Copie personnalisée de Landing page, ID `16095245343`. **Landing page**, sessions, utilisateurs actifs/nouveaux, durée moyenne par session, événements clés et taux d’événement clé par session. Chiffre d’affaires retiré. |
| SITE: Parcours de contact - Par canal | Entonnoir ouvert enregistré à l’étape précédente, désormais accessible dans cette collection. |
| SITE: Parcours de contact - Par page d’arrivée | Même entonnoir, ventilation par page d’arrivée, désormais accessible dans cette collection. |

Les deux rapports d’acquisition sont ouverts et leurs colonnes relues. **generate_lead** est sélectionné séparément pour **Key events** et **Session key event rate** ; les sessions restent toutes incluses, sans filtre global sur l’événement qui fausserait le dénominateur. Cette sélection de lecture figure dans les liens ci-dessous ; le modèle du rapport comporte des sélecteurs d’événements, et un lecteur peut revenir à All events.

- [Sources et canaux — demandes enregistrées](https://analytics.google.com/analytics/web/?authuser=4#/a410716626p557424928/reports/explorer?params=_u..nav%3Dmaui%26_r.explorerCard..columnFilters%3D%7B%22conversionEvent%22:%22generate_lead%22,%22sessionConversionRate%22:%22generate_lead%22%7D&collectionId=16095284853&r=16095232968)
- [Pages d’arrivée — demandes enregistrées](https://analytics.google.com/analytics/web/?authuser=4#/a410716626p557424928/reports/explorer?params=_u..nav%3Dmaui%26_r.explorerCard..columnFilters%3D%7B%22conversionEvent%22:%22generate_lead%22,%22sessionConversionRate%22:%22generate_lead%22%7D&collectionId=16095284853&r=16095245343)

## Sens des chiffres et suite

**generate_lead** reste une demande enregistrée, sans qualification commerciale. **page_ref**, dimension personnalisée d’événement déjà enregistrée, décrit la référence du clic/formulaire ; elle ne remplace pas **Landing page**, dimension de session utilisée pour les taux. GA4 couvre les visiteurs ayant consenti. Contact reste la source de vérité des demandes reçues.

La période initiale est **11 septembre–8 octobre**, avant l’activation publique du 9 octobre, et les rapports affichent **No data available**. Les totaux affichés à zéro ne sont pas interprétés comme une absence réelle de visites/demandes. Les parcours depuis les trois pages d’arrivée les plus fréquentées attendent des données réelles. Les événements d’interaction n’ont pas fait l’objet d’un nouvel essai.

Aucun nouveau formulaire envoyé, notification, capture, modification du site ou déploiement. Le collecteur Apps Script, ses paramètres et son déclencheur hebdomadaire sont conservés. Première collecte automatique attendue le 12 octobre vers 09:00 Paris. Reste la clôture documentaire et le contrôle de conformité Prometheus, ainsi que les vérifications qui dépendent de données réelles.
