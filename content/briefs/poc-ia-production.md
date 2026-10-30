# Brief FR #1 : passer un POC IA en production

Préparé le 27 octobre 2026. File F07, ordre approuvé inchangé. Texte et publication approuvés explicitement par JD le 28 octobre 2026 dans la conversation ; publication préparée à cette date.

- Requête principale : **passer un POC IA en production**.
- Secondaires : industrialiser projet IA, mise en production IA, pourquoi les projets IA échouent, LLMOps, LLMOps vs MLOps.
- Intention : un dirigeant ou responsable métier a une démonstration et veut décider s'il faut financer sa mise en service. Priorité à la responsabilité métier, aux accès convenus, à l'intégration et à la transmission.
- Justification : [keywords.csv](../../research/keywords.csv), F07 ; [cluster](../../research/clusters.md#f07--du-poc-ia-à-la-production--300). Observations SERP du 26 octobre, sans volume de recherche mesuré.
- Questions : Pourquoi le POC bloque-t-il ? Que vérifier avant de construire ? Que change la production ? Quand arrêter ? Qu'est-ce que le LLMOps ?
- Format : opinion et checklist, traité comme guide de décision (1 200 à 1 800 mots, FAQ comprise). Définition et réponse dans les 60 premiers mots.
- Slug : `poc-ia-production` ; clé commune EN : `poc-to-production`.

## Contenu et preuves

Traiter le responsable absent, l'évaluation sur des cas représentatifs, les accès autorisés dans la durée, le chemin d'intégration réel et le budget d'exploitation. Donner une checklist qui exige des preuves, un exemple de traitement de factures explicitement hypothétique et les conditions d'arrêt. Décrire la transmission de la solution sans inventer de contrat de maintenance.

Sources vérifiées le 27 octobre :

1. [NANDA, The GenAI Divide, juillet 2025, copie du rapport](https://cloudelligent.com/wp-content/uploads/2026/02/v0.1_State_of_AI_in_Business_2025_Report.pdf), p. 2, 3, 6 et 7. Une seule statistique retenue, le chiffre de 95 % présenté et limité comme affirmation préliminaire des auteurs, jamais comme taux général d'échec technique. Le lien MIT historique redirige désormais vers la page du groupe ; signaler que le PDF lié est une copie hébergée par un tiers.
2. [Gartner, communiqué du 29 juillet 2024](https://www.gartner.com/en/newsroom/press-releases/2024-07-29-gartner-predicts-30-percent-of-generative-ai-projects-will-be-abandoned-after-proof-of-concept-by-end-of-2025), une prévision, et [analyse du 26 janvier 2026](https://www.gartner.com/en/articles/genai-project-failure). Citer les obstacles qualitativement, sans ajouter de deuxième statistique.

Le plan demande des raisons de terrain, mais aucun récit publiable propre à ce sujet n'est documenté. Les vérifications sont proposées comme méthode ; aucune fréquence de panne ni anecdote client n'est attribuée à NODINA. Une expérience personnelle a été demandée à JD et pourra être intégrée s'il en fournit une.

## Assertions NODINA, signature et liens

Les engagements reprennent seulement `content/site/offers.fr.json`, sections `home.steps`, `systems.deliverables` et `systems.fitPoints`, déjà dans la révision approuvée du 26 octobre (publication.json). Ils sont tracés par C249. Le détail des contrôles est un conseil d'ingénierie, sans prétendre à un historique mesuré. Auteur : Jean-David Collard, fondateur (C228), lien vers `/fr/#experience` ; pas de qualification supplémentaire.

Les assertions issues de NANDA et Gartner sont reliées respectivement à C250 et C251 dans `content/claims.csv`.

Liens : [offre](/fr/solutions-ia-sur-mesure/), [premier processus](/fr/blog/premier-processus-a-automatiser/), [Contact](/fr/contact/?offer=systems). CTA : « Votre POC est-il prêt pour la production ? »

FAQ : différence POC/production ; faut-il tout reconstruire ; MLOps et LLMOps ; quand abandonner. Les réponses visibles alimentent aussi `FAQPage`. Auteur en `Person`, dates d'article et métadonnées synchronisées à la publication réelle. La date du front matter reste la date de rédaction tant que `draft: true`.

## Relecture avant publication

JD relit le texte et la signature. Vérifier à nouveau les sources, fixer la date réelle, ajouter les lignes de publication, puis appliquer §3b du plan. Aucun déploiement, IndexNow ou message LinkedIn à ce stade.

Publication verified 28 October 2026: Cloudflare version `cee38248-37d2-44d3-b067-d8e1cf9dac35`, HTTP 200, sitemap and RSS checked. JD’s review and publication approval are complete. No indexing or LinkedIn action performed in the production-only scope.
