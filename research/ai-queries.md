# Protocole des relevés IA

2026-10-02. Sélection de cinq questions à partir des besoins et expressions de JD dans l’intake B8, plus la marque. Ce sont des hypothèses de questions clients ; aucun volume ni entretien client supplémentaire n’est allégué.

| ID | Question exacte | Offre |
|---|---|---|
| Q00 | Que fait NODINA (nodina.com) et à qui s’adressent ses services ? Cite tes sources. | Marque |
| Q01 | Quels prestataires peuvent renforcer une équipe produit avec des ingénieurs IA senior en France ou en Europe ? Cite tes sources. | Teams |
| Q02 | Pour un projet IA, comment choisir entre recrutement interne, freelances et équipe externe ? Cite tes sources. | Teams |
| Q03 | Quels partenaires peuvent concevoir et déployer une solution IA sur mesure pour automatiser un processus métier en entreprise ? Cite tes sources. | Systems |
| Q04 | Comment passer un prototype ou POC IA en production dans une entreprise, et quels prestataires peuvent accompagner ce passage ? Cite tes sources. | Systems |
| Q05 | Comment automatiser le traitement de documents avec l’IA tout en maîtrisant les données et la validation humaine ? Cite tes sources. | Systems |

## Méthode

Six moteurs : ChatGPT, Claude, Perplexity, Google AI Mode ou AI Overviews, Microsoft Copilot, Gemini. Chaque question deux fois dans une conversation neuve, texte identique, sans correction ni réponse de suivi influençant le résultat. Relever la réponse terminée, le modèle lorsqu’il est affiché, la recherche web, le contexte de connexion, les citations et les erreurs d’identité. Les tests du 2026-10-02 sont effectués dans le navigateur intégré, sans connexion de compte. Ce navigateur n’est pas déclaré incognito ; sessions de conversation neuves ne signifie pas profils de navigateur isolés.

ChatGPT : option Recherche web activée. Perplexity : mode Recherche activé. Gemini : Flash-Lite affiché, sources visibles quand présentes ; aucun sélecteur de recherche web proposé aux visiteurs non connectés dans le menu consulté. Google : Mode IA sélectionné depuis la page de résultats. Modèles ChatGPT, Perplexity et Google non identifiés. Aucun compte créé, achat ou inscription effectué.

Une ligne dans `ai-citations.csv` correspond uniquement à une réponse effectivement lue. `n` signifie absence de citation du domaine NODINA dans la réponse observée ; une mention de son nom dans le prompt ou une erreur d’homonyme n’est pas une citation. Les sources citées peuvent être fausses ou mal attribuées : elles sont relevées, puis vérifiées séparément. Le champ notes précise répétition, URL de session si disponible et limites de la liste de sources. Ne pas remplir une ligne `n` pour un moteur inaccessible ou une question non testée.

Claude redirige vers une page de connexion ; Copilot finit sur une page de connexion sans formulaire de conversation accessible dans cette session. Les tests correspondants ne sont pas effectués. Les autres séries non terminées restent à compléter, avec un nouveau relevé daté. Ne pas extrapoler les premiers résultats à un taux de visibilité global.

Une exploration Google Mode IA avec le mot seul `NODINA` est distinguée de Q00 : elle sert à repérer les homonymes et ne remplace aucune répétition du protocole.

L’exploration suivante Q00 dans Google affiche « 1 onglet » relatif à la page NODINA fourni avec le prompt et conserve un contrôle de la requête précédente dans le DOM malgré la sélection Nouveau fil. L’indépendance de session n’est pas établie : enregistrer cette réponse comme exploratoire, l’exclure des répétitions standard. Ne pas présenter une réponse obtenue avec contexte de page explicite comme une découverte spontanée de la marque.

## Couverture au 2026-10-02

| Moteur | Q00 | Q01–Q05 | Statut |
|---|---|---|---|
| Perplexity | 2 réponses | 2 réponses par question | Série complète, 12 conversations neuves ; sources partiellement dépliées |
| ChatGPT | 2 réponses | Non effectué | Recherche web activée sur les deux tests de marque |
| Gemini | 2 réponses | Non effectué | Flash-Lite ; deux erreurs d’identité documentées |
| Google AI Mode | Exploration seulement | Non effectué | Indépendance et contexte à contrôler pour une série standard |
| Claude | Non effectué | Non effectué | Connexion demandée dans le navigateur utilisé |
| Microsoft Copilot | Non effectué | Non effectué | Connexion demandée dans le navigateur utilisé |

18 réponses observées dans le CSV, dont 2 explorations Google hors répétitions standard. Aucune synthèse de taux global ni comparaison entre modèles sur cette couverture incomplète.
