# Keyword clusters — NODINA, FR and EN

Built 2026-10-26 from [keywords.csv](keywords.csv) (991 curated queries) and [keywords-raw-20261026.csv](keywords-raw-20261026.csv) (9,619 topical autocomplete rows). Method, limits and reading in [research-report.md](research-report.md). SERP evidence per query in [serp/google-20261026.md](serp/google-20261026.md).

Rules applied (PROMETHEUS §8.4–8.5): one cluster = one answer = one target page; no two clusters share a primary query; the score is the **product** of four 1–5 marks (business value, evidence of demand, winnability, citation opportunity). Volumes are unknown everywhere: demand marks come from autocomplete presence, PAA, community threads and the number of competitors publishing on the topic, never from a figure.

Status column: *published* = page exists; *page* = existing offer or service page to strengthen; *new* = page or article to write. Target URLs for new articles are proposals; the slug is fixed when the brief is written.

---

## Scoreboard

| Rank | ID | Cluster | Lang | V | D | W | C | Score |
|---|---|---|---|---|---|---|---|---|
| 1 | E07 | From AI PoC to production; why AI projects fail | en | 5 | 5 | 4 | 5 | **500** |
| 2 | F01 | Choisir un prestataire IA (agence, cabinet, intégrateur) | fr | 5 | 5 | 3 | 4 | **300** |
| 2 | F07 | Du POC IA à la production | fr | 5 | 3 | 4 | 5 | **300** |
| 2 | E03 | AI business process automation for operations | en | 5 | 5 | 3 | 4 | **300** |
| 2 | E09 | AI project cost, scope and ROI | en | 5 | 5 | 3 | 4 | **300** |
| 2 | E10 | Hire vs outsource vs staff augmentation | en | 5 | 4 | 3 | 5 | **300** |
| 2 | E12 | AI-native engineers and AI coding tools in teams | en | 5 | 4 | 3 | 5 | **300** |
| 8 | F02 | Automatiser un processus métier avec l'IA | fr | 5 | 4 | 3 | 4 | **240** |
| 8 | F04 | Traitement de documents et extraction par IA | fr | 5 | 4 | 3 | 4 | **240** |
| 8 | F09 | Prix, budget et cadrage d'un projet IA | fr | 5 | 4 | 3 | 4 | **240** |
| 8 | F12 | Développeur AI-native et outils de code IA en équipe | fr | 4 | 4 | 3 | 5 | **240** |
| 8 | E05 | Enterprise RAG and internal assistants | en | 4 | 5 | 3 | 4 | **240** |
| 8 | E08 | Private LLMs, data privacy, EU AI Act, governance | en | 4 | 5 | 3 | 4 | **240** |
| 14 | E01 | Choosing an AI consulting firm | en | 5 | 5 | 2 | 4 | **200** |
| 14 | E04 | AI document processing and extraction | en | 5 | 5 | 2 | 4 | **200** |
| 14 | E11 | Hire AI engineers, nearshore and LATAM teams | en | 5 | 5 | 2 | 4 | **200** |
| 17 | F05 | RAG et assistant interne | fr | 4 | 4 | 3 | 4 | **192** |
| 17 | F08 | LLM, RGPD, souveraineté, AI Act | fr | 4 | 4 | 3 | 4 | **192** |
| 17 | F13 | Évaluer une IA avant production | fr | 4 | 3 | 4 | 4 | **192** |
| 17 | E14 | Evaluating senior engineers (NODINA Select) | en | 4 | 3 | 4 | 4 | **192** |
| 21 | F10 | Agence, freelance, ESN ou recrutement | fr | 4 | 3 | 3 | 5 | **180** |
| 21 | F11 | Renforcer une équipe tech (régie, nearshore, LATAM) | fr | 5 | 3 | 3 | 4 | **180** |
| 21 | F15 | IA sur mesure ou outil du marché | fr | 5 | 3 | 3 | 4 | **180** |
| 24 | F06 | Agent IA en entreprise | fr | 4 | 5 | 2 | 4 | **160** |
| 24 | E02 | Custom AI development, build vs buy | en | 5 | 4 | 2 | 4 | **160** |
| 24 | E06 | AI agents and agentic workflows | en | 4 | 5 | 2 | 4 | **160** |
| 24 | E13 | LLM evaluation and hallucination control | en | 4 | 5 | 2 | 4 | **160** |
| 28 | F03 | IA dans une PME ou une ETI | fr | 4 | 4 | 2 | 3 | **96** |
| 28 | F14 | Évaluer et recruter un développeur senior | fr | 4 | 2 | 4 | 3 | **96** |
| 30 | F16 | Marque NODINA | fr | 3 | 1 | 5 | 3 | **45** |
| 30 | E15 | Brand NODINA | en | 3 | 1 | 5 | 3 | **45** |

Why the marks land where they do:

- **Value 5** goes to clusters whose searcher is one proposal away from the contact form (choosing a provider, scoping/pricing, PoC rescue, team reinforcement). Value 4 is solution-aware research that NODINA's offer answers directly. Brand is 3 because the site already captures it.
- **Demand** is highest where autocomplete tails are deep in both engines and PAA is present (agents, automation, consulting, document processing, EU AI Act, LLM evals). French tails are shorter than English across the board; F07 and F13 are rated 3 because the phrasing is rarer, not because the need is.
- **Winnability** is 4 where every ranking page is a consultancy or an opinion piece with no primary data (PoC→production, evaluating engineers, testing an AI). It is 2 where the first page is platforms and big vendors (Salesforce, Gartner, Oracle, AWS), marketplaces (hire AI engineers) or a US local pack (AI consulting firm).
- **Citation** is 5 where assistants today build answers from vendor comparison pages and guides (hire vs outsource, agency vs freelance, AI-native engineering, PoC failure reasons) — a NODINA page of the same shape is directly citable.

---

## French clusters

### F01 — Choisir un prestataire IA (agence, cabinet, intégrateur) · 300
- **Intent** commercial · solution-aware · **Status** page + new article
- **Target** `/fr/solutions-ia-sur-mesure/` (offer page carries the commercial terms) and new article `/fr/blog/choisir-agence-ia/`
- **Primary** agence IA
- **Secondary** cabinet conseil IA · cabinet de conseil en intelligence artificielle · société de conseil IA · consultant IA entreprise · prestataire IA entreprise · agence IA PME · agence IA prix · agence IA automatisation · meilleure agence IA · ESN IA · intégrateur IA · intégration IA entreprise · partenaire transformation IA · comment choisir une agence IA · agence IA vs cabinet de conseil IA
- **Question forms (H2 / FAQ)** Quelle est la différence entre une agence IA et un cabinet de conseil en IA ? · Comment choisir une agence IA ? · Combien coûte une agence IA ? · Qu'est-ce qu'un intégrateur IA ? · Une agence IA ou un développeur freelance ? · Quelles questions poser avant de signer ?
- **Must contain** a plain definition of each provider type (agence, cabinet, ESN, intégrateur, freelance) in one sentence each; the seven questions a buyer should ask (ownership of code, who does the work, how success is measured, what happens after handover, data access terms, who is accountable, what they refuse); what a serious proposal contains; a dated note that the "classements" ranking today are self-published lists. No pricing figures. Link to the offer page and the contact page.
- **Who ranks today** stackeasy, agencellm, cartelis, juwa (classement), palmer-consulting (agence vs cabinet), koino (top 10), galadrim, just-use-ai (7 critères). France Num's directory is what Perplexity cites for "quels prestataires".

### F02 — Automatiser un processus métier avec l'IA · 240
- **Intent** informational · problem-aware · **Status** published + page
- **Target** `/fr/blog/premier-processus-a-automatiser/` (published 2026-10-26) and `/fr/solutions-ia-sur-mesure/`
- **Primary** automatiser processus métier avec IA
- **Secondary** automatisation IA entreprise · automatisation des processus IA · automatisation intelligente · automatisation des tâches répétitives IA · automatisation des tâches administratives · comment automatiser un processus manuel avec IA · quel processus automatiser · automatisation IA vs RPA · IA opérations entreprise
- **Question forms** Qu'est-ce que l'automatisation des processus métiers ? · Quel processus automatiser en premier ? · IA, RPA ou no-code : quelle différence ? · Comment savoir si un processus est prêt pour l'IA ?
- **Must contain** the three readiness questions already in the published post; a short comparison IA / RPA / no-code (n8n, Make) with when each is enough; the "contrôle humain" principle; an example labelled as hypothetical. A follow-up article on "automatisation IA vs RPA vs no-code" completes the cluster.
- **Who ranks today** bizyness, agence-coherence, francenum, akerwise, epsight, IBM, agencellm. Ads: UiPath, Genee, Bleu122.

### F03 — IA dans une PME ou une ETI : par où commencer · 96
- **Intent** informational · problem-aware · **Status** new
- **Target** `/fr/blog/integrer-ia-eti/`
- **Primary** IA PME (observed) → the page is written for **ETI** ("IA ETI", "intégrer l'IA dans une ETI"), which is where NODINA's qualification criteria sit; PME phrasings are secondary.
- **Secondary** IA pour PME · intelligence artificielle PME · automatisation IA PME · conseil IA PME · audit IA PME · solution IA PME · investissement IA PME France · IA TPE PME
- **Question forms** Par où commencer l'IA dans une ETI ? · Faut-il un audit IA avant de démarrer ? · Quel budget et quel sponsor ? · Quelles aides existent (France Num, Bpifrance) ?
- **Must contain** the sponsor / data / measurability test (site FAQ "the right fit in three questions"); the difference between a PME tool rollout and an ETI integration project; link to public programmes with their dates (francenum.gouv.fr, Bpifrance) instead of restating them.
- **Who ranks today** grandest.cci, skillco, scpf, eedn, master-ia, ia-pme-conseil, atelia. Dozens of "PME" slugs at juwa (77) and lyv-ia (102): do not compete on "PME" head terms.

### F04 — Traitement de documents et extraction de données par IA · 240
- **Intent** informational · solution-aware · **Status** new
- **Target** `/fr/blog/automatiser-traitement-factures-llm/`
- **Primary** traitement de documents IA
- **Secondary** traitement intelligent des documents (IDP) · extraction de données factures IA · IA traitement factures · traitement des factures fournisseurs · automatiser saisie de données IA · analyse de contrats IA · OCR IA · OCR et IA · IA analyse de document · dématérialisation des factures PME · obligation facture électronique PME
- **Question forms** Quelle IA peut analyser un document PDF ? (PAA) · OCR ou LLM : quelle différence pour extraire une facture ? · Comment vérifier les données extraites ? · Combien coûte le traitement d'une facture ? · Comment intégrer l'extraction dans l'ERP ?
- **Must contain** a one-sentence definition of IDP; OCR vs LLM extraction compared on structure, variability, cost of errors; the human checkpoint pattern (validation rules, sampling, exceptions queue); a note on the French e-invoicing obligation with the official calendar linked (impots.gouv.fr) rather than restated; what "done" looks like (pushed into the ERP, audit trail).
- **Who ranks today** alithya, foxit, archimag, bgbformation, parseur, Microsoft Learn, deltic, francenum. Head SERP is pulled toward consumer "IA analyse PDF gratuit": do not chase it.

### F05 — RAG et assistant interne sur les données de l'entreprise · 192
- **Intent** informational · solution-aware · **Status** new
- **Target** `/fr/blog/rag-entreprise-assistant-interne/`
- **Primary** RAG entreprise
- **Secondary** qu'est-ce qu'un RAG · comment fonctionne le RAG · exemple de RAG · architecture RAG · prix RAG · combien coûte un assistant IA · assistant IA interne entreprise · chatbot interne entreprise · base de connaissances IA · LLM sur données entreprise · recherche documentaire IA · IA et gestion documentaire
- **Question forms** Qu'est-ce qu'un RAG ? (PAA) · Le RAG peut-il automatiser des tâches ? (ranking title) · Combien coûte un assistant RAG ? · Comment respecter les droits d'accès ? · RAG ou recherche d'entreprise classique ? · Quand le RAG n'est pas la bonne réponse ?
- **Must contain** definition first sentence; the four things that decide success (sources, access rights, evaluation set, ownership); why a demo on ten PDFs is not a system; cost drivers without figures; a sourced-answer example labelled hypothetical. Link to the offer page's "Answers from your own knowledge" block.
- **Who ranks today** AWS, Databricks, leblogdudirigeant (prix), access-it, Intel, partenordigital, impulsa3.

### F06 — Agent IA en entreprise · 160
- **Intent** informational · solution-aware · **Status** new
- **Target** `/fr/blog/agent-ia-entreprise-quand/`
- **Primary** agent IA entreprise
- **Secondary** déployer un agent IA · créer un agent IA · développement agent IA · agent IA prix · agent IA vs assistant IA · agent IA vs automatisation · agent IA vs chatbot · IA agentique c'est quoi · IA agentique vs IA générative · workflow agentique · cas d'usage IA agentique · agents IA entreprise risques · sécurité de l'IA agentique
- **Question forms** Quelle est la différence entre un assistant IA et un agent IA ? (PAA) · Quel est le tarif d'un agent IA ? (PAA) · Quand un agent est-il la bonne réponse ? · Quand une automatisation déterministe suffit-elle ? · Où placer le contrôle humain ?
- **Must contain** definitions (assistant, agent, workflow agentique) in one sentence each; a decision rule: variability of inputs × cost of a wrong action; the human checkpoint pattern; the risks list with mitigations; no price, but what makes the price (tools connected, actions allowed, evaluation).
- **Who ranks today** synapse-developpement, dixmilleheures, creatio, oracle, jayd, sedestral, yvia; hyperstack and juwa publish 20+ agent articles each.

### F07 — Du POC IA à la production · 300
- **Intent** informational · problem-aware · **Status** new
- **Target** `/fr/blog/poc-ia-production/`
- **Primary** passer un POC IA en production
- **Secondary** industrialiser projet IA · mise en production IA · projet IA échec · pourquoi les projets IA échouent · réussir son POC IA · du POC à l'industrialisation · pourquoi 80 % des projets IA échouent · MLOps · LLMOps · LLMOps vs MLOps · qu'est-ce qu'un POC en informatique
- **Question forms** Pourquoi un POC IA ne passe-t-il pas en production ? · Que change la production par rapport au prototype ? · Qu'est-ce que le LLMOps ? · Quand abandonner un POC ? · Que vérifier avant de construire ?
- **Must contain** first-hand reasons (no owner, no evaluation set, data access not contractual, no operating budget, prototype built on the wrong integration); the "ce qu'on vérifie avant" checklist; a dated, linked source for any failure statistic (MIT NANDA 2025 report, Gartner, RAND) and a sentence saying these numbers are self-reported surveys; what handover includes.
- **Who ranks today** flowt, palmer, juwa, ekino, wenvision, data-bird, LinkedIn posts. No PAA: demand is narrower but entirely commercial.

### F08 — LLM, données sensibles, RGPD, souveraineté, AI Act · 192
- **Intent** informational · solution-aware · **Status** new (two articles)
- **Target** `/fr/blog/integrer-llm-entreprise-donnees/` then `/fr/blog/ai-act-projet-ia-interne/`
- **Primary** intégrer un LLM dans son entreprise
- **Secondary** IA et RGPD · IA et RGPD CNIL · IA générative et RGPD · quelle IA est RGPD · LLM données sensibles · IA sécurisée pour entreprise · sécuriser IA entreprise · IA souveraine entreprise · IA sur site on premise · installer un LLM en local · AI Act entreprise · AI Act date d'entrée en vigueur · AI Act et RGPD
- **Question forms** Comment intégrer un LLM sans exposer ses données ? · Quelle IA est compatible RGPD ? · API, cloud privé ou on-premise : que choisir ? · Qu'impose l'AI Act à un projet IA interne ? · Quand s'applique l'AI Act ? (dates)
- **Must contain** the three hosting options compared on data path, cost, capability; what a DPA and "no training on your data" clauses mean; CNIL guidance linked (cnil.fr "IA et RGPD" fiches); AI Act obligations by risk tier with the official calendar linked (eur-lex / digital-strategy.ec.europa.eu); a statement that NODINA is not a law firm.
- **Who ranks today** castelis, lucernys, mirax, inflexsys, datasunrise, quelllm, botpress.

### F09 — Prix, budget et cadrage d'un projet IA · 240
- **Intent** commercial · solution-aware · **Status** new (two articles) + "how it is priced" section on the offer pages
- **Target** `/fr/blog/prix-projet-ia/` and `/fr/blog/cahier-des-charges-projet-ia/`
- **Primary** combien coûte un projet IA
- **Secondary** prix développement IA · combien coûte une IA · tarif consultant IA · prix d'une agence IA · prix d'un chatbot · ROI projet IA · cahier des charges projet IA · appel à projet IA · simulateur de coûts IA · les coûts cachés de l'IA générative
- **Question forms** Combien coûte un projet IA ? · Qu'est-ce qui fait le prix ? · Quel est le prix d'un chatbot ? (PAA) · Faut-il investir dans l'IA en 2026 ? (PAA) · Que doit contenir un cahier des charges IA ? · Comment mesurer le ROI ?
- **Must contain** (editorial rule: no invented prices) the cost drivers (scope, data readiness, integrations, evaluation, operations, change management); run costs vs build costs; how NODINA prices ("tailored proposal, no equity, no recruitment fees", already on site); a cahier des charges template as a usable checklist; how to compute the current cost of the problem. Link to Contact.
- **Who ranks today** economie.gouv (aides), truefoundry, lonestone (simulateur), aimakers, agence.media.

### F10 — Agence, freelance, ESN ou recrutement : arbitrage · 180
- **Intent** commercial · solution-aware · **Status** new
- **Target** `/fr/blog/agence-ia-freelance-interne/`
- **Primary** agence IA ou freelance
- **Secondary** internaliser ou externaliser IA · recruter ou externaliser développement · agence IA vs freelance vs interne · agence IA freelance ou recrutement · recruter un consultant IA freelance · développeur IA freelance · externalisation avantages et inconvénients
- **Question forms** Agence, freelance ou recrutement : comment choisir ? · Quand internaliser ? · Quels sont les risques de chaque option ? · Et une équipe intégrée ?
- **Must contain** a comparison table (durée du besoin, management disponible, continuité, propriété, coût total, délai de démarrage) with both sides' strengths; the fourth option (équipe senior intégrée dans votre codebase) described factually; no denigration (competitors.md rule).
- **Who ranks today** Google: co-cto, koino, loonagency, LinkedIn. Perplexity cites lyv-ia, hyperstack, just-use-ai, juwa, entreprisma, flowt, décisionia.

### F11 — Renforcer une équipe tech : régie, staff augmentation, nearshore, Amérique latine · 180
- **Intent** commercial · solution-aware · **Status** page + new article
- **Target** `/fr/equipes-ai-native/` and `/fr/blog/regie-esn-equipe-integree/`
- **Primary** renforcer équipe produit avec développeurs IA (seed; low observed demand) — page terms: régie informatique · staff augmentation · développeur nearshore · développeurs Amérique latine
- **Secondary** trouver ingénieurs IA senior · recruter développeurs IA · équipe externe développement IA · contrat régie informatique · staff augmentation vs outsourcing · qu'est-ce que le nearshore · externalisation développement logiciel · ingénieur IA vs data scientist
- **Question forms** Qu'est-ce que la régie informatique ? · Staff augmentation : définition ? · Pourquoi des ingénieurs en Europe et en Amérique latine ? (site FAQ) · Combien de temps pour démarrer ? · Qui garde la propriété du code ?
- **Must contain** definitions (régie, forfait, staff augmentation, nearshore) in one sentence each; the three-week timeline with its conditions (already on site); time-zone overlap facts; IP and access terms; what NODINA Select checks. Avoid "équipe de développement externalisée" (Google reads it as sales outsourcing).
- **Who ranks today** FR SERP for "recruter développeurs IA" is careers content (iquesta, licornesociety, deel, apec): commercial intent is weak on that phrasing.

### F12 — Développeur AI-native et outils de code IA en équipe · 240
- **Intent** informational · problem-aware · **Status** new (glossary + article)
- **Target** `/fr/blog/developpeur-ai-native/`
- **Primary** développeur AI-native
- **Secondary** outils de code IA · productivité développeurs IA · IA génération de code entreprise · Claude Code vs Cursor · Cursor vs Copilot · vibe coding vs software engineering · vibe coding vs agentic engineering · comment utiliser Claude Code
- **Question forms** Qu'est-ce qu'un développeur AI-native ? · Vibe coding ou ingénierie assistée par IA ? · Comment une équipe adopte-t-elle les outils de code IA ? · Que vérifie-t-on chez un développeur qui code avec l'IA ?
- **Must contain** definition first sentence; the six NODINA Select dimensions as the evaluation lens; context, verification, evaluation as the three practices; a sober note on productivity studies (cite METR 2025 RCT and the Jellyfish/DX reports with dates; say results diverge); tools named as examples, not endorsements.
- **Who ranks today** laconsole, impli, holberton, freelancerepublik; hyperstack covers Claude Code vs Cursor in French. Nobody owns "développeur AI-native".

### F13 — Évaluer une IA avant production (tests, evals, hallucinations) · 192
- **Intent** informational · solution-aware · **Status** new
- **Target** `/fr/blog/evaluer-ia-avant-production/`
- **Primary** évaluer une IA
- **Secondary** tester une IA · comment tester une IA générative · évaluation LLM · hallucinations IA entreprise · qu'est-ce qu'une hallucination IA · pourquoi tester une IA avec plusieurs formulations · LLM as a judge · LLM evaluation vs RAG evaluation
- **Question forms** Comment tester une IA avant la mise en production ? · Qu'est-ce qu'une hallucination ? · Comment construire un jeu d'évaluation ? · Qui valide les résultats ? · Quels indicateurs suivre après le lancement ?
- **Must contain** what an evaluation set is and who builds it (the business owner); offline vs online evaluation; human review sampling; acceptance thresholds agreed in the proposal (site: "evaluation criteria agreed upfront"); a hypothetical example.
- **Who ranks today** thin French coverage; English frameworks dominate.

### F14 — Évaluer et recruter un développeur senior (NODINA Select) · 96
- **Intent** informational · solution-aware · **Status** page + new article
- **Target** `/fr/selection-des-talents/` and `/fr/blog/evaluer-developpeur-senior-ia/`
- **Primary** évaluer un développeur
- **Secondary** test technique développeur · test technique développeur senior · recruter développeur senior · quand devient-on senior · comment recruter des talents en IA · NODINA Select
- **Question forms** Comment évaluer un développeur senior ? · Quel test technique en 2026, avec l'IA ? · Comment vérifier l'usage des outils IA en entretien ? · Qu'est-ce que NODINA Select ?
- **Must contain** the six criteria groups and what the reviewers look at (already validated on the vetting page); why résumé-based screening fails; how AI-assisted work is reviewed (process, not output). No acceptance rates or candidate numbers (editorial rule).

### F15 — IA sur mesure ou outil du marché · 180
- **Intent** commercial · solution-aware · **Status** page + new article
- **Target** `/fr/solutions-ia-sur-mesure/` and `/fr/blog/ia-sur-mesure-ou-outil-du-marche/`
- **Primary** développement IA sur mesure
- **Secondary** solution IA sur mesure · logiciel IA sur mesure · solutions d'IA personnalisées · créer une IA pour son entreprise · développement application IA · solution IA en local · meilleure IA pour entreprise
- **Question forms** IA sur mesure ou outil du marché : comment trancher ? · Quand un outil standard suffit-il ? · Que signifie "sur mesure" pour un système IA ? · Qui possède le code ?
- **Must contain** the site's own rule ("if an off-the-shelf tool already does the job, we tell you"); the decision criteria (workflow fit, integrations, data control, total cost, lock-in); examples labelled hypothetical; no claim of general superiority (editorial rule).
- **Who ranks today** edreamsfactory, openmydiv, diamontis, openstudio, ecole.cube, eulidia, IBM.

### F16 — Marque NODINA · 45
- **Target** `/fr/` · **Primary** NODINA · **Secondary** nodina.com · nodina avis · nodina IA · Jean-David Collard
- Keep the Organization/Person schema and the canonical description identical across pages; watch homonyms (insect genus, authors) in the monthly brand check; add "nodina avis" to the brand query list in `serp-baseline.md`.

---

## English clusters

### E01 — Choosing an AI consulting firm · 200
- **Intent** commercial · solution-aware · **Status** page + new article
- **Target** `/en/custom-ai-solutions/` and `/en/blog/how-to-evaluate-ai-consulting-firm/`
- **Primary** ai consulting (head; page) — article primary: how to choose an ai consulting company
- **Secondary** ai consulting firm · ai consulting services · ai consulting company · ai consulting for small business · ai consulting for startups · boutique ai consulting · ai consultant vs ai agency · ai implementation partner · ai integration services · ai consulting and implementation · ai consulting proposal · ai consulting rfp · ai consulting what to expect · best ai consulting firms
- **Question forms** Is there such a thing as an AI consultant? (PAA) · How do I choose an AI consulting company? · What should an AI consulting proposal contain? · Boutique or Big Four? · What does an engagement look like week by week?
- **Must contain** definitions (consultant, agency, boutique firm, integrator, implementation partner); the questions to ask; red flags; what the first call covers (site); why "no equity, no recruitment fees" matters; where NODINA is not the right fit (site: "The right fit in three questions").
- **Who ranks today** masterofcode, HBR, alphaapex (top 10), wsiworld, sketchdev (how to evaluate), sphereinc (what to expect), tredence, telusdigital (how to choose). Local pack of US consultants: the head term is local-intent from the US.

### E02 — Custom AI development, build vs buy · 160
- **Intent** commercial · solution-aware · **Status** page + new article
- **Target** `/en/custom-ai-solutions/` and `/en/blog/build-vs-buy-ai/`
- **Primary** custom ai solutions
- **Secondary** custom ai development · custom ai development company · custom ai software development cost · custom llm development · ai development company · build vs buy ai · build or buy ai agents · build vs buy ai framework · the ai tooling stack: what to build and what to buy · fine tune llm on company data
- **Question forms** What is custom AI development? · When should we build instead of buy? · How much does custom AI development cost? · Do we need a custom LLM? (almost never: say so)
- **Must contain** a build/buy/assemble decision framework with the five criteria; the difference between custom LLM (training) and custom system (integration), with the plain statement that most companies need the latter; what you own at the end; examples hypothetical.
- **Who ranks today** theprovatogroup, fullstack.com (build vs buy), scand, sparkouttech, devcom, xenondev, anglara.

### E03 — AI business process automation for operations · 300
- **Intent** informational · problem-aware · **Status** published + new article
- **Target** `/en/blog/first-process-to-automate/` (published) and `/en/blog/ai-automation-mid-sized-company-roadmap/`
- **Primary** ai business process automation
- **Secondary** automate business processes with ai · ai automation for business · ai automation for mid-sized companies · ai in operations · ai workflow automation · intelligent automation · which processes to automate · how to automate manual processes · ai vs automation difference · is rpa replaced by ai · ai automation agency pricing · how to scale without adding headcount
- **Question forms** How to use AI to automate business operations? (PAA) · Is RPA replaced by AI? (PAA) · Which processes should be automated first? · AI, RPA or no-code: what is the difference? · What does a roadmap look like for a 200-person company?
- **Must contain** the three readiness questions (published); a 90-day roadmap shape with phases matching the site's process (scoping, build, deploy); RPA / no-code / AI compared; the human checkpoint; what to measure.
- **Who ranks today** Salesforce, moxo, moveworks, make.com, phaedra, katprotech (7-step roadmap), launchpadlab, reddit.

### E04 — AI document processing and extraction · 200
- **Intent** informational · solution-aware · **Status** new
- **Target** `/en/blog/llm-vs-ocr-document-extraction/`
- **Primary** ai document processing
- **Secondary** intelligent document processing (IDP) · llm document extraction · best llm for document extraction · invoice extraction ai · ai for invoice processing · ai data entry automation · contract analysis ai · ai contract review accuracy · intelligent document processing beyond ocr and rpa · automated invoice processing cost · document ai pricing
- **Question forms** What is intelligent document processing (IDP)? (PAA) · LLM or OCR for invoices? · How accurate is AI contract review? · How do you verify extracted data? · What does document processing cost per page?
- **Must contain** IDP definition; OCR / template IDP / LLM extraction compared on structured vs variable documents, error profile, cost; the human-in-the-loop design (confidence thresholds, exception queues, sampling audits); integration into the ERP/CRM; a worked hypothetical with numbers labelled as assumptions.
- **Who ranks today** Gartner Peer Insights, kognitos, parseur, flowwright, oracle, loome, reddit.

### E05 — Enterprise RAG and internal assistants · 240
- **Intent** informational · solution-aware · **Status** new
- **Target** `/en/blog/enterprise-rag-what-it-takes/`
- **Primary** enterprise rag
- **Secondary** enterprise rag architecture · how to build enterprise rag · rag vs enterprise search · enterprise search vs chatgpt · internal ai assistant · internal chatbot for employees · ai knowledge base vs rag · llm on company data · how to train llm on company data · rag does not work for enterprises · how much does an ai assistant cost
- **Question forms** What is enterprise RAG? · RAG, enterprise search or fine-tuning? · Why do RAG demos fail in production? · How are access rights enforced? · What does it cost to run?
- **Must contain** definition; the four decisive factors (sources, permissions, evaluation set, ownership); why "train the LLM on our data" is usually the wrong request; evaluation of answer quality; run-cost drivers; hypothetical example.
- **Who ranks today** reddit r/MachineLearning, elo.com (CIO guide), Google Cloud, aerospike, github, medium, agentx.

### E06 — AI agents and agentic workflows for business · 160
- **Intent** informational · solution-aware · **Status** new
- **Target** `/en/blog/when-ai-agent-is-wrong-answer/`
- **Primary** ai agents for business
- **Secondary** agentic workflows · agentic workflows examples · agentic workflows human in the loop · agentic workflow vs automation · agentic workflows vs rpa · ai agent vs chatbot · ai agents vs workflows · ai agent development cost · agentic ai enterprise adoption · deploy ai agents enterprise · why agentic ai projects fail · lessons from deploying ai agents in production
- **Question forms** What can AI agents be used for in business? (PAA) · Agentic workflow vs automation: what is the difference? · When is an agent the wrong answer? · Where does the human checkpoint go? · How do you test an agent?
- **Must contain** definitions; the decision rule (input variability × cost of a wrong action); checkpoint patterns; evaluation of agents; what makes the cost; the honest list of things agents are bad at today, dated.
- **Who ranks today** skowers, pixelflow, krowdbase, effy, webnexs (listicles) and YouTube. HN: "Lessons from interviews on deploying AI Agents in production" (107 points, 2025-11).

### E07 — From AI PoC to production; why AI projects fail · 500
- **Intent** informational · problem-aware · **Status** new (two articles)
- **Target** `/en/blog/why-ai-pilots-never-reach-production/` and `/en/blog/poc-to-production-checklist/`
- **Primary** ai poc to production
- **Secondary** ai pilot to production · ai pilot to production gap · why ai projects fail · why do most ai projects fail · 95% of ai projects fail · mit 95% of ai projects fail · what percentage of ai projects fail · ai project failure rate · reasons why ai projects fail · why most ai projects fail after the demo works · why agentic ai projects fail · productionizing llm · llmops · llmops vs mlops · ai proof of concept failure
- **Question forms** What is a POC in the context of AI? (PAA) · Do 87% of data science projects fail? (PAA) · Why do AI pilots stall after the demo works? · What changes between a prototype and production? · What is LLMOps? · What should be checked before building?
- **Must contain** first-hand failure reasons; the pre-build checklist (owner, evaluation set, data access terms, integration path, run budget, success criteria); a sourced and dated treatment of the 95 % / 87 % / 80 % figures (MIT NANDA "GenAI Divide" 2025, Gartner 2024/2025 press releases, RAND 2024) with the caveat that these are surveys with differing definitions; what handover includes.
- **Who ranks today** adasci, reddit, LinkedIn, medium, enterprise-knowledge, databricks, neoteric; Thoughtworks video. For "why ai projects fail": bacancy, griddynamics, ninetwothree, mediasupplychain, theajprojects, LinkedIn.

### E08 — Private LLMs, data privacy, EU AI Act, governance · 240
- **Intent** informational · solution-aware · **Status** new (two articles)
- **Target** `/en/blog/private-llm-options/` and `/en/blog/eu-ai-act-internal-ai-project/`
- **Primary** integrate llm into business
- **Secondary** private llm · private llm vs public llm · private llm cost · how to host private llm · secure llm enterprise · llm security best practices · owasp llm security · ai data privacy enterprise · why is data entered into an llm not private · eu ai act compliance · eu ai act compliance checklist · eu ai act compliance timeline · eu ai act compliance for high-risk ai systems · ai governance framework · ai governance for small business · bring your own llm
- **Question forms** How do we integrate an LLM without exposing data? · API with DPA, private cloud, or on-prem: how to choose? · What is a private LLM? · What does the EU AI Act require from an internal AI project, and when? · What is a minimal AI governance policy?
- **Must contain** hosting options compared (data path, capability, cost, operations); contractual terms that matter (DPA, retention, training exclusion); OWASP Top 10 for LLM applications linked; AI Act risk tiers and the official application dates linked to the regulation; a minimal governance checklist; "not legal advice".
- **Who ranks today** springsapps, gurusup, leanware, softweb, aqedigital, reddit, medium (thin). The AI Act tail is served by law firms and compliance vendors.

### E09 — AI project cost, scope and ROI · 300
- **Intent** commercial · solution-aware · **Status** new (two articles)
- **Target** `/en/blog/what-drives-ai-project-cost/` and `/en/blog/how-to-scope-ai-project/`
- **Primary** how much does an ai project cost
- **Secondary** cost of ai development · ai project cost estimation · cost of implementing ai in business · is ai worth the cost · ai consulting rates · ai consulting hourly rates · ai agency pricing guide · ai agent pricing model · ai project scope · how to scope an ai project · ai scope of work · ai project roi · how to measure ai roi · mit ai roi report · ai consulting proposal
- **Question forms** How much does an AI project cost? · How much does it cost to build an AI app? (PAA) · What drives the cost? · How do you scope an AI project? · What must a proposal contain? · How do you measure ROI before you start?
- **Must contain** (no prices) cost drivers; build vs run; pricing models explained (fixed scope, time and materials, retainer) with NODINA's stated model; the scoping document checklist; ROI computed from the current cost of the problem (site: "what the problem costs you today"); links to external benchmark reports with dates rather than restated ranges.
- **Who ranks today** reddit, sumatosoft, emerj, webfx, scnsoft, knack, sphereinc, zedrox (all publish ranges).

### E10 — Hire vs outsource vs staff augmentation · 300
- **Intent** commercial · solution-aware · **Status** new
- **Target** `/en/blog/staff-augmentation-vs-outsourcing-vs-embedded-team/`
- **Primary** hire vs outsource developers
- **Secondary** in-house vs outsourcing software development · in-house vs outsourced ai · ai agency vs freelancer · staff augmentation vs outsourcing · staff augmentation vs consulting · staff augmentation vs managed services · dedicated development team vs outsourcing · dedicated developer team model · why do companies outsource · software developer outsourcing pros and cons · embedded vs fte tco · forward deployed engineers
- **Question forms** What is staff augmentation outsourcing? (PAA) · Hire, outsource, or augment: how to decide? · What does an embedded senior team cost compared with a hire? · Who owns the code and the decisions? · What is a forward-deployed engineer?
- **Must contain** comparison table across six criteria; the embedded-team model described factually (site: "in your codebase from week three", "you keep control of priorities"); TCO logic without invented salary figures (link to public salary sources with dates); exit and continuity terms.
- **Who ranks today** atiba, softura, gdt, nervico, inapps, silverbell, tekton, holograph (all vendors). Perplexity cites x-team, uvik, ryzlabs, fwddeployment for the provider question.

### E11 — Hire AI engineers, nearshore and LATAM teams · 200
- **Intent** commercial · solution-aware · **Status** page + new article
- **Target** `/en/ai-native-teams/` and `/en/blog/how-to-hire-ai-engineers/`
- **Primary** hire ai engineers
- **Secondary** ai engineers for hire · hire senior ai engineer · hire ai native engineers · how to hire ai engineers · how to hire ai developers costs red flags · where do people hire ai automation experts · dedicated development team · extend engineering team · engineering staff augmentation · staff augmentation europe · nearshore software development · nearshore software development latam · nearshore vs offshore · is ai replacing offshoring · hire latam developers · senior engineers outsourcing · toptal vs turing vs andela · ai talent shortage
- **Question forms** How do you hire AI engineers in 2026? · What is the main work of an AI engineer? (PAA) · Nearshore or offshore? · Is AI replacing offshoring? (PAA) · How fast can a team start? · How are engineers evaluated?
- **Must contain** role definitions (AI engineer, ML engineer, AI-native software engineer); red flags; the evaluation method (NODINA Select, six dimensions); the one-week approval, three-week start timeline and its conditions; time-zone overlap for US and EU; "no equity, no recruitment fees".
- **Who ranks today** workgenius, xenoss, solulab, interexy (costs, red flags), uvik, bridgeview; reddit r/AI_Agents. FutureProofing publishes comparison pages (Toptal vs Turing vs Andela vs FutureProofing).

### E12 — AI-native engineers and AI coding tools in teams · 300
- **Intent** informational · problem-aware · **Status** new (glossary + two articles)
- **Target** `/en/blog/what-is-an-ai-native-engineer/` then `/en/blog/ai-coding-tools-for-engineering-teams/`
- **Primary** ai native engineers
- **Secondary** what does ai-native engineer actually mean · ai native engineer vs ai engineer · becoming an ai-native engineer · ai native engineering team · building an ai native engineering team · ai native vs ai enabled · what is an ai native team · ai coding tools for engineering teams · what ai coding tools actually work for teams · ai coding tools productivity study · ai coding tools slow down developers · ai coding best practices · ai code review · ai developer productivity metrics · vibe coding vs software engineering · agentic coding workflows · claude code vs cursor · ai maturity levels for engineering teams
- **Question forms** What is an AI-native engineer? · AI-native vs AI-enabled: what is the difference? · Do AI coding tools make teams faster? · Which tools actually work for teams, not solo developers? · How do you review AI-assisted code? · What do AI-native companies look for in engineers?
- **Must contain** definition first sentence (`DefinedTerm`); the three practices (context, verification, evaluation); team adoption steps (policy, review, measurement); an honest reading of the productivity evidence with dates (METR 2025 RCT: experienced devs 19 % slower; DX/Jellyfish and Google reports pointing the other way); tools as examples with dates; the NODINA Select lens.
- **Who ranks today** news.ycombinator (rfitz), daily.dev, reddit, arxiv, getdx, opinov8, uplers (hiring guide), LinkedIn; FutureProofing's 100-post resources hub owns the long tail (Claude Code vs Cursor ×6, AI-native team ×5).

### E13 — LLM evaluation and hallucination control · 160
- **Intent** informational · solution-aware · **Status** new
- **Target** `/en/blog/llm-evals-for-business-systems/`
- **Primary** llm evaluation
- **Secondary** llm evals · what are llm evals · how to evaluate llm output quality · llm evaluation best practices · llm evaluation in production · llm as a judge evaluation · golden dataset for llm evaluation · llm evaluation without ground truth · how to test ai systems · how to test agentic ai systems · ai hallucinations business · what is the main risk of ai hallucinations in business decisions · how to reduce ai hallucinations · hallucination rates of ai models
- **Question forms** What are LLM evals? · How do you evaluate output quality without ground truth? · How often does AI hallucinate? · How do you reduce hallucinations in a business system? · What do you monitor after launch?
- **Must contain** evaluation set design owned by the business; offline vs online; LLM-as-judge with its limits; human sampling; acceptance thresholds in the proposal; grounding and retrieval as hallucination controls; a hypothetical rubric. Frameworks named as examples only.
- **Who ranks today** framework vendors and docs (deepeval, ragas, langsmith, datadog, databricks), Hugging Face guidebook, medium. Business-angle pages are rare.

### E14 — Evaluating senior engineers (vetting, NODINA Select) · 192
- **Intent** informational · solution-aware · **Status** page + new article
- **Target** `/en/vetting/` and `/en/blog/how-we-evaluate-senior-engineers-ai/`
- **Primary** how to evaluate software engineers
- **Secondary** how to measure software engineer performance · how to measure software developer productivity · vetted developers · hire pre vetted developers · senior software engineer interview · technical interview senior engineer · what makes a good software engineer · staff engineer vs senior engineer · senior ai engineer interview questions · interviewing ai-augmented engineers · with ai written resumes what are the new hiring signals
- **Question forms** How do you evaluate a senior engineer when AI writes the code? · What does "vetted" mean? · What makes a good senior engineer? · What are the new hiring signals?
- **Must contain** the six dimensions; work samples over puzzles; how AI tool use is observed; peer review by CTOs; what is not claimed (no acceptance rates). HN threads on AI cheating in interviews (2025) as context, linked.
- **Who ranks today** thin: FutureProofing (scorecard, interview questions), HN, generic career sites.

### E15 — Brand NODINA · 45
- **Target** `/en/` · **Primary** NODINA · **Secondary** nodina.com · nodina ai · nodina reviews · nodina ai-native teams · Jean-David Collard
- No English brand autocomplete exists yet. Entity work: consistent `Organization`/`Person` schema, author page, directory listings (Clutch, Crunchbase, LinkedIn company page) with the same canonical description.

---

## Cannibalization check

- F01 (choose a provider) vs F10 (agency vs freelance vs in-house): different answers. F01 is "which provider type and how to judge one"; F10 is "should we hire at all". Cross-link, do not merge.
- F02 (automate a process) vs F03 (ETI starting point): F02 is one process, F03 is a company programme. Keep.
- F06/E06 (agents) vs F02/E03 (automation): the agents page answers "when is an agent the right tool", the automation page answers "which process first". The RPA/no-code/AI comparison lives with automation.
- E10 (hire vs outsource) vs E11 (hire AI engineers): E10 is the decision, E11 is the how-to once the decision is "augment". Keep.
- E12 (AI-native) vs E14 (evaluating engineers): E12 defines the practice, E14 defines the assessment. The glossary entry lives in E12; the method article in E14.
- Offer pages carry the commercial heads (agence IA, ai consulting, custom ai solutions, hire ai engineers, staff augmentation); articles never target those heads as primary.
- One published post per language already covers F02/E03's "first process" question; the follow-up articles in those clusters take different primaries (RPA vs AI; roadmap).
