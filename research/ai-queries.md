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

## Relevés du 26 octobre 2026 (exploratoires, hors protocole)

Deux réponses Perplexity lues dans le navigateur intégré, sans compte, une seule fois chacune. Elles ne remplacent pas les répétitions du protocole ; elles montrent d'où viennent les citations aujourd'hui.

| Question | Sources citées | Lecture |
|---|---|---|
| « Quels prestataires en France peuvent automatiser un processus métier avec l'IA et le mettre en production ? Cite tes sources. » | francenum.gouv.fr (annuaire « Trouvez une solution IA », cité pour Hél'IA, Automatisable, SYNIA, Hyperstack, comete.ai, Captivea, BICOME, OLING, Reflekt Lab), deloitte.com, soprasteria.com, waimia, castelis.com (article citant Flowt et Lonestone) | NODINA absent. L'annuaire France Num est la source dominante ; un article d'agence listant ses pairs est repris tel quel. |
| « Which firms provide senior AI-native software engineers embedded in a product team for US or European companies? Cite sources. » | x-team.com, uvik.net (×2), fwddeployment.com (×3, pour Tribe AI, Distyl, Dplyz), ryzlabs.com ; BairesDev, Andela, EPAM, Thoughtworks, ELEKS, STX Next, Netguru, Azumo cités via ces pages | NODINA absent. Les pages comparatives publiées par les prestataires eux-mêmes servent de source ; la réponse se termine par une « due-diligence checklist » demandant des preuves de séniorité et d'usage des outils IA. |

Conséquences pour le plan : inscription à l'annuaire France Num (Activateur / solutions IA) ; une page comparative NODINA de même forme en anglais (modèles d'équipe, critères, preuves) ; des faits vérifiables sur la méthode de sélection, puisque c'est ce que l'assistant demande.

## Prompts acheteurs par cluster prioritaire (§8.6)

À poser aux six moteurs selon le protocole ci-dessus, deux fois chacun, après publication de la page cible ; relever qui est cité et quels faits les pages citées contiennent que la nôtre n'a pas. Clusters dans [clusters.md](clusters.md).

| Cluster | Prompts (FR) | Prompts (EN) |
|---|---|---|
| E07 / F07 POC → production | « Notre POC IA de traitement de courriers fonctionne en démo mais personne ne veut le passer en production. Qu'est-ce qui bloque en général et que faut-il vérifier avant de continuer ? » · « Quel pourcentage des projets IA échouent réellement et d'où viennent ces chiffres ? » | "Our GenAI pilot works in demos but has stalled for six months. What usually blocks the move to production and who can help?" · "Is the 95 % AI project failure figure real? Where does it come from?" · "What should a PoC-to-production checklist contain for an LLM system?" |
| F01 / E01 choisir un prestataire | « Je dirige une ETI de 400 personnes ; agence IA, cabinet de conseil ou intégrateur : quelle différence et comment les évaluer ? Cite tes sources. » · « Quelles questions poser à une agence IA avant de signer ? » | "We are a 300-person company in the US looking for a boutique AI consulting firm rather than a Big Four. How do we evaluate one? Sources." · "What should an AI consulting proposal contain?" |
| E09 / F09 coût et cadrage | « Combien coûte un projet IA d'automatisation documentaire pour une ETI, et qu'est-ce qui fait varier le prix ? » · « Que doit contenir un cahier des charges pour un projet IA ? » | "What drives the cost of a custom AI project, and how do I scope one before asking for quotes?" · "How do I estimate the ROI of automating invoice processing with AI before starting?" |
| E10 / F10 recruter ou externaliser | « Pour renforcer une équipe produit de 8 développeurs avec des compétences IA, vaut-il mieux recruter, prendre des freelances, une ESN ou une équipe intégrée ? » | "Compare hiring, outsourcing, staff augmentation and an embedded senior team for a Series B product team that needs AI engineering capacity. Sources." |
| E12 / F12 AI-native | « Qu'est-ce qu'un développeur AI-native et comment l'évaluer en entretien ? » · « Les outils de code IA rendent-ils une équipe plus productive ? Que disent les études ? » | "What is an AI-native engineer and how is that different from an AI engineer?" · "Which AI coding tools actually work for a team of 20, not solo developers, and how should a CTO roll them out?" · "Do AI coding tools make experienced developers faster? Cite the studies." |
| E03 / F02 automatisation | « Quel processus automatiser en premier dans une PME industrielle, et comment savoir s'il est prêt ? » · « IA, RPA ou n8n : lequel pour automatiser la saisie de commandes ? » | "How does a mid-sized company pick the first process to automate with AI?" · "AI vs RPA vs no-code for back-office automation: when is each the right choice?" |
| E04 / F04 documents | « Pour extraire les données de factures fournisseurs variées, OCR classique ou LLM ? Comment contrôler les erreurs ? » | "LLM or OCR for extracting data from invoices and contracts? How do you keep a human check without losing the time saved?" |
| E05 / F05 RAG | « Nous voulons un assistant interne qui répond à partir de nos documents en respectant les droits d'accès. Que faut-il prévoir et combien ça coûte ? » | "Enterprise RAG vs enterprise search vs fine-tuning for an internal knowledge assistant with access rights: what does it actually take?" |
| E06 / F06 agents | « Quand un agent IA est-il la bonne réponse plutôt qu'une automatisation classique, et où placer le contrôle humain ? » | "When is an AI agent the wrong answer compared with a deterministic workflow? Where do human checkpoints go?" |
| E08 / F08 LLM, données, AI Act | « Comment intégrer un LLM dans une entreprise française sans exposer de données personnelles : API, cloud privé ou on-premise ? » · « Que change l'AI Act pour un projet IA interne et à partir de quand ? » | "Private LLM options compared for a European company: API with DPA, VPC, on-prem." · "What does the EU AI Act require from an internal document-processing AI, and from which date?" |
| E11 / F11 équipe | « Quels prestataires fournissent des ingénieurs senior formés aux outils IA, intégrés dans l'équipe, pour une entreprise française ? Cite tes sources. » | "Which firms provide senior AI-native engineers embedded in a product team for US or European companies? Cite sources." (baseline above) |
| E13 / F13 évaluer | « Comment tester une IA avant de la mettre en production et quels indicateurs suivre ensuite ? » | "How do you evaluate an LLM-based business system before launch and reduce hallucinations in production?" |
| E14 / F14 sélection | « Comment évaluer un développeur senior quand l'IA écrit une partie du code ? » | "How should a company evaluate senior engineers now that AI writes much of the code? What are the new signals?" |

Question de sources à poser à chaque moteur (§8.6) : « Quelles sont les meilleures agences IA pour une ETI en France, et sur quelles sources t'appuies-tu ? » / "What are the best firms for embedded AI-native engineering teams, and which sources do you rely on?" Les sources nommées deviennent les cibles hors site de [../content/editorial-plan.md](../content/editorial-plan.md) §6.
