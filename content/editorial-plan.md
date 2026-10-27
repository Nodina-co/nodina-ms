# Editorial plan — NODINA journal, FR and EN

Status: **approved 2026-10-26** (proposed the same day from [research/research-report.md](../research/research-report.md) and [research/clusters.md](../research/clusters.md); accepted by Chloe Alpert as operator, cluster order and queues unchanged). This is the active publishing plan. Rules in [editorial-rules.md](editorial-rules.md) apply to every item below. Each post still goes through a brief and JD's review before it is published; the plan fixes topics and order, not publication dates.

Objective (from [goals.md](goals.md)): qualified project requests. The journal serves that by earning visits from buyers who are deciding something, and by being the page an assistant cites when a buyer asks it. Traffic is a means; the measure is contact requests that pass qualification.

## 1. How the queues work

Two independent queues, one per language. They are **not** translations of each other. "Write the next post" means: take the next unwritten item in the FR queue and the next unwritten item in the EN queue. An item can be skipped or reordered by JD; the change is logged in [decisions.md](decisions.md). A topic may appear in both queues (PoC → production does); the two posts are written separately for their own market and SERP, and share only the `key` in front matter so the language switch links them.

Cadence: one post per language per week for the first eight weeks, then every two weeks, with the gained time going to the page work in §4. A week without a post that meets §2 is a week without a post; the cadence never overrides the rules.

Order within each queue follows the cluster score, then adjusted for: what the site can already prove (facts in [product-truth.md](product-truth.md) and [claims.csv](claims.csv)), seasonal relevance (AI Act dates, e-invoicing calendar), and alternation between the two offers so neither waits more than two posts.

## 2. Rules for a post (what makes it rankable and citable)

Everything in [editorial-rules.md](editorial-rules.md), plus:

1. **One query, one answer.** Each post has a primary query from [research/keywords.csv](../research/keywords.csv) and answers it in the first 60 words, in a sentence that stands alone when quoted. Secondary queries become H2s or FAQ entries, worded as the searcher words them.
2. **Definition first.** Any term in the title gets a one-sentence definition in the opening (assistants quote definitions more than anything else). Glossary-type posts carry `DefinedTerm` schema.
3. **One dated statistic with a primary source, or none.** Never a recycled "80 %". Link the report, name the year, say what was measured.
4. **A comparison table or a checklist** where the question is a decision. Both sides' strengths stated; no competitor named negatively.
5. **A hypothetical example, labelled as such**, until a client case is approved. No invented metrics, clients or results (editorial rule 4).
6. **Author and date.** Jean-David Collard as author with `Person` schema linked to the about block; `datePublished` and `dateModified` equal the `article:` meta dates.
7. **FAQ block** of three to six questions in the searcher's words, marked up `FAQPage`.
8. **Internal links**: to the offer page the post serves, to one other post, and to Contact with the page's natural CTA ("Which process should go first?", "How many engineers do you need?").
9. **Length by intent**: decision and guide posts 1,200–1,800 words; definitions 600–900; opinion pieces 800–1,200. No padding.
10. **What we do not write**: tool listicles, "top 10 agences", city pages, anything that needs a price or a client number we do not have.
11. **Human voice, no machine fingerprint** (added 2026-10-27). No em dashes anywhere in a post, title, description or social text; use a comma, a full stop or parentheses. Vary sentence length on purpose and let a few sentences run long, the way someone explains a thing they know well in one breath, instead of cutting everything to the same clipped rhythm. Nothing that reads as generated: no "In today's fast-paced world", no "it's important to note", no "delve", no "landscape", no triads of adjectives, no bullet lists where a paragraph would do, no closing summary that restates the post, no "In conclusion". No disclosure, badge, metadata, hidden text, or boilerplate that marks the text as AI-assisted; the author on the page is Jean-David Collard and the text is his to sign. The pre-publish check greps the post for `—` and for the phrases above and fails on any hit.

Before writing, a brief in `content/briefs/<slug>.md` states: primary and secondary queries, the question forms, the must-contain facts from the cluster, the sources to cite, the CTA, and the internal links. The brief is reviewed by JD when it contains any claim about NODINA that is not already in [claims.csv](claims.csv).

## 3. The queues

Formats: **guide** (how-to with checklist), **decision** (comparison table), **definition** (glossary-style), **opinion** (first-hand reasons, sourced). Target slugs are proposals; the brief fixes them. Cluster IDs refer to [research/clusters.md](../research/clusters.md).

### 3.1 French queue

| # | Working title | Primary query | Cluster | Format | Serves | Must-have facts and sources |
|---|---|---|---|---|---|---|
| 0 | Comment choisir le premier processus à automatiser *(published 2026-10-26)* | quel processus automatiser | F02 | guide | Conseil IA | — |
| 1 | Passer un POC IA en production : pourquoi ça bloque, et ce que nous vérifions avant de construire | passer un POC IA en production | F07 | opinion + checklist | Conseil IA | First-hand blocking reasons; pre-build checklist; MIT NANDA 2025 / Gartner figures linked and qualified; what handover includes |
| 2 | Agence IA, cabinet de conseil, intégrateur : comment choisir, et sept questions à poser | comment choisir une agence IA | F01 | decision | Conseil IA | One-sentence definitions; the seven questions; what a proposal contains; "classements" are self-published |
| 3 | Ce qui fait le prix d'un projet IA (sans grille tarifaire) | combien coûte un projet IA | F09 | guide | Conseil IA | Cost drivers; build vs run; how NODINA prices (proposal, no equity, no fees); compute the cost of the problem today |
| 4 | Factures et documents : OCR ou LLM, et où mettre le contrôle humain | traitement de documents IA | F04 | guide | Conseil IA | IDP definition; OCR vs LLM table; checkpoint pattern; e-invoicing calendar linked (impots.gouv.fr) |
| 5 | Intégrer un LLM sans exposer vos données : API, cloud privé ou on-premise | intégrer un LLM dans son entreprise | F08 | decision | Conseil IA | Three hosting options compared; DPA and training-exclusion clauses; CNIL fiches linked; "pas un cabinet d'avocats" |
| 6 | Régie, ESN, freelance ou équipe intégrée : renforcer une équipe produit en 2026 | agence IA ou freelance | F10 + F11 | decision | AI-native Teams | Six-criteria table; embedded team described factually; three-week timeline with conditions; IP and access terms |
| 7 | Agent IA en entreprise : quand c'est la bonne réponse, quand une automatisation suffit | agent IA entreprise | F06 | decision | Conseil IA | Definitions (assistant, agent, workflow agentique); variability × cost-of-error rule; checkpoint; risks with mitigations |
| 8 | Développeur AI-native : définition, et ce que nous examinons | développeur AI-native | F12 | definition | AI-native Teams | Definition sentence; context / verification / evaluation; NODINA Select six dimensions; METR 2025 and DX/Jellyfish studies dated |
| 9 | RAG en entreprise : un assistant interne sur vos documents, ce que ça demande vraiment | RAG entreprise | F05 | guide | Conseil IA | Definition; sources, droits d'accès, jeu d'évaluation, propriété; why ten PDFs is not a system; cost drivers |
| 10 | Cahier des charges d'un projet IA : ce qu'il doit contenir (modèle) | cahier des charges projet IA | F09 | guide + template | Conseil IA | Usable checklist; success criteria; data and access section; links to post 3 |
| 11 | Évaluer une IA avant la mise en production : tests, jeu d'évaluation, hallucinations | évaluer une IA | F13 | guide | Conseil IA | Evaluation set owned by the business; offline/online; human sampling; thresholds in the proposal |
| 12 | Intégrer l'IA dans une ETI : par où commencer | intégrer l'IA dans une ETI | F03 | guide | Conseil IA | Sponsor / data / measurability test; ETI vs PME difference; France Num and Bpifrance linked, dated |
| 13 | IA sur mesure ou outil du marché : comment trancher | développement IA sur mesure | F15 | decision | Conseil IA | Five criteria; "if a tool does the job we say so"; ownership; no superiority claim |
| 14 | Automatisation IA, RPA ou no-code (n8n, Make) : quand faut-il coder | automatisation IA vs RPA | F02 | decision | Conseil IA | Three approaches compared; when no-code is enough; when it breaks |
| 15 | Évaluer un développeur senior quand l'IA écrit une partie du code | évaluer un développeur | F14 | guide | AI-native Teams | Six criteria groups; work samples over puzzles; how AI use is observed; no acceptance rates |
| 16 | AI Act : ce qui change pour un projet IA interne, et à partir de quand | AI Act entreprise | F08 | guide | Conseil IA | Risk tiers; official application dates linked (eur-lex); obligations for deployers; "pas un avis juridique" |
| 17 | Pourquoi des ingénieurs en Europe et en Amérique latine | développeurs Amérique latine | F11 | definition | AI-native Teams | Time-zone overlap facts; selection across regions (site FAQ); no availability promises |

### 3.2 English queue

| # | Working title | Primary query | Cluster | Format | Serves | Must-have facts and sources |
|---|---|---|---|---|---|---|
| 0 | How to pick the first process to automate *(published 2026-10-26)* | which processes to automate | E03 | guide | AI Consulting | — |
| 1 | Why AI pilots never reach production (and what we check before we build) | ai poc to production | E07 | opinion + checklist | AI Consulting | First-hand reasons; pre-build checklist; MIT NANDA 2025, Gartner, RAND figures linked with caveats; what handover includes |
| 2 | What is an AI-native engineer? | ai native engineers | E12 | definition | AI-native Teams | `DefinedTerm`; AI-native vs AI-enabled vs AI engineer; context / verification / evaluation; METR 2025 RCT and DX reports dated; NODINA Select lens |
| 3 | How to evaluate an AI consulting firm: the questions to ask before you sign | how to choose an ai consulting company | E01 | decision | AI Consulting | Provider-type definitions; questions; red flags; what a proposal contains; when NODINA is not the fit |
| 4 | What drives the cost of an AI project | how much does an ai project cost | E09 | guide | AI Consulting | Cost drivers; build vs run; pricing models explained; NODINA's model; ROI from the cost of the problem; external benchmarks linked, not restated |
| 5 | Staff augmentation vs outsourcing vs an embedded senior team | hire vs outsource developers | E10 | decision | AI-native Teams | Six-criteria table; embedded model facts (week three, your repos, no equity); TCO logic with public salary sources linked; exit terms |
| 6 | LLM or OCR for invoices and contracts: document extraction with a human checkpoint | ai document processing | E04 | guide | AI Consulting | IDP definition; OCR / template IDP / LLM table; thresholds, exception queue, sampling; ERP integration; hypothetical numbers labelled |
| 7 | Enterprise RAG: what it actually takes (a CTO's guide) | enterprise rag | E05 | guide | AI Consulting | Definition; four decisive factors; why "train on our data" is usually wrong; evaluation; run cost drivers |
| 8 | When an AI agent is the wrong answer | ai agents for business | E06 | decision | AI Consulting | Definitions; variability × cost-of-error rule; checkpoint patterns; what agents are bad at, dated; HN production lessons linked |
| 9 | Private LLM options compared: API with a DPA, private cloud, on-prem | integrate llm into business | E08 | decision | AI Consulting | Data path, capability, cost, operations per option; DPA / retention / training exclusion; OWASP LLM Top 10 linked |
| 10 | How to hire AI engineers in 2026: roles, red flags, evaluation | hire ai engineers | E11 | guide | AI-native Teams | Role definitions; red flags; NODINA Select; one-week approval, week-three start with conditions; time zones |
| 11 | AI coding tools for engineering teams: adoption that works beyond solo use | ai coding tools for engineering teams | E12 | guide | AI-native Teams | Policy, review, measurement steps; evidence read honestly (METR vs DX/Google); tools as dated examples |
| 12 | Build, buy, or assemble: a decision framework for AI | build vs buy ai | E02 | decision | AI Consulting | Five criteria; custom LLM vs custom system; ownership at the end |
| 13 | How to scope an AI project: what a proposal must contain | how to scope an ai project | E09 | guide + template | AI Consulting | Scoping checklist; success criteria; data and access; links to post 4 |
| 14 | LLM evals for a business system: what to measure before and after launch | llm evaluation | E13 | guide | AI Consulting | Evaluation set owned by the business; offline/online; LLM-as-judge limits; hallucination controls; hypothetical rubric |
| 15 | How we evaluate senior engineers when AI writes the code | how to evaluate software engineers | E14 | guide | AI-native Teams | Six dimensions; work samples; observing AI use; peer review by CTOs; HN hiring-signal threads linked |
| 16 | The EU AI Act for an internal AI project: what applies, from when | eu ai act compliance | E08 | guide | AI Consulting | Risk tiers; deployer obligations; official dates linked; minimal governance checklist; "not legal advice" |
| 17 | AI automation for a mid-sized company: a 90-day roadmap | ai automation for mid-sized companies | E03 | guide | AI Consulting | Phases matching the site's process; what to measure; RPA / no-code / AI compared |

## 3b. Publishing checklist (every post, every time)

Rule added 2026-10-26 by the operator. Applies to every post in either queue, in this order. The assistant runs the steps and writes the hand-offs to JD in the chat; nothing here is automatic.

1. **Build, review, deploy.** Brief approved, post written to the §2 rules, `npm run build` passes, JD has reviewed the draft, the release is deployed by the usual procedure. The post is live before any step below.

2. **Show JD the raw URL.** Print the full public URL on its own line, for example `https://nodina.com/fr/blog/<slug>/`, and say explicitly: *this is the URL to paste into Google Search Console → URL inspection → Request indexing* (one language version at a time; each locale has its own URL). Search Console has no API for this on a new property, so JD does it by hand.

3. **Submit to IndexNow.** IndexNow is installed: the ownership key is in `tools/forms/production/.local/indexnow-key.txt` (gitignored) and the key file is published at the site root by `build-release.py`. Give JD a ready-to-paste command, with the key read from the file so it is never typed into the chat:

   ```bash
   curl -s -o /dev/null -w "%{http_code}\n" "https://api.indexnow.org/indexnow?url=https://nodina.com/fr/blog/<slug>/&key=$(cat tools/forms/production/.local/indexnow-key.txt)"
   ```

   One command per URL (FR and EN are separate URLs). `200` or `202` means received; it does not prove indexation. Bing, Yandex, Seznam and Naver share the submission. Log the response code in §8 of this file.

4. **Ask about LinkedIn.** Ask JD, in one line: *"Add this post to the NODINA LinkedIn page queue?"* Do nothing on LinkedIn without a yes.

   On yes, a browser agent schedules the post on the NODINA company page, <https://www.linkedin.com/company/nodina> (not JD's personal profile), as the next free slot in the LinkedIn schedule:
   - **Slots:** Tuesdays and Thursdays, 08:00 Europe/Paris, for every post type. Never two items in one slot; never a third slot in a week. The next free slot is the first Tuesday or Thursday after the last scheduled item (or after today if the queue is empty).
   - **Content:** the post's language is the post's language. Text written from the post's first-60-word answer, two to four lines, no hashtags beyond two, link to the raw URL, no claim that is not in the post. The link preview uses the auto-generated Open Graph image; no separate image is made.
   - **Tool:** LinkedIn's native scheduler on the company page ("Schedule post"). The agent reports back the scheduled date and time it set and the queue position; JD can verify in the page's Scheduled posts view. The agent never publishes immediately and never edits or deletes an existing scheduled item.
   - **Log** the slot in §8 of this file with the post key and language.

5. **Record it.** `content/publication.json` row and PLAN.md table updated with the real date; §8 log line: date, key, language, URL, IndexNow code, LinkedIn slot or "declined".

What this checklist does not do: it never requests indexing of a page that is not deployed, never submits URLs in bulk "by principle" (see SUMMARY.md), and never posts to LinkedIn, Clutch or any directory without JD's explicit yes for that item.

## 4. Page work the research justifies (not posts)

| Work | Why | Cluster |
|---|---|---|
| Author page for Jean-David Collard with `Person` schema, `sameAs` (LinkedIn, personal site, Google Scholar if public), photo with permission | Every citation and every post points at one entity; assistants ask for proof of seniority | all |
| "How it is priced" section on both offer pages (model, what is included, what is not; no figures) | Pricing is the second most visited page type; rule forbids figures, not explanation | F09 / E09 |
| Glossary entries: AI-native engineer, agent vs workflow, RAG, IDP, staff augmentation, régie (FR), POC | Definitions are the most-quoted sentence type | E12, F12, F05/E05, F04/E04, F11/E11 |
| Comparison page (EN): embedded AI-native team vs staff augmentation vs outsourcing vs hiring, with a verified-facts table | Perplexity builds its answers from vendor comparison pages | E10 |
| FAQ hub per language collecting every FAQ entry from posts and pages, `FAQPage` schema | Question queries and assistant matching | all |
| Blog category pages with an intro and `ItemList` (Conseil IA / AI Consulting; AI-native Teams) | Hub structure already planned in site-architecture.md | — |
| OG images: nothing to do, generated at build | — | — |

## 5. What stays out until the facts exist

Case studies (need client permission and numbers with scope), pricing figures, acceptance rates or candidate counts for NODINA Select, "top agencies" rankings, city or country landing pages, anything presenting the follow-up schedule in the operating guide as approved dates.

## 6. Off-page targets (where assistants look)

From the 26 October observations in [research/ai-queries.md](../research/ai-queries.md): **France Num** directory listing (francenum.gouv.fr, "Trouvez une solution IA" / Activateur) is the dominant source for French provider questions; **Clutch** and **Crunchbase** profiles with the canonical description; a **LinkedIn company page** with the same description; the agency roundups that cite peers (Castelis, Digitiz, o137, La Fabrique du Net, Claude Partners) once NODINA has three published posts to point at. Each listing uses the canonical description from [product-truth.md](product-truth.md) word for word. Requests for inclusion are sent by JD, not by the site.

## 7. Measurement

From the first Search Console export (around 6 November): impressions and clicks per post, queries with impressions and no clicks (become FAQ entries), posts ranking 5–20 (strengthen first). From GA4: contact form views and `generate_lead` events with the journal page as the landing or prior page, read with the limits in [analytics.md](analytics.md). From the assistant protocol: citations of nodina.com per prompt, re-run quarterly. A post is reviewed after 28 days and again after 90; nothing is judged earlier.

## 8. Log

- 2026-10-26 — Plan proposed from Phase 3 research.
- 2026-10-27 — Rule 11 added (§2): no em dashes, deliberate run-on sentences, no AI watermark of any kind.
- 2026-10-26 — Publishing checklist (§3b) added: Search Console URL hand-off, IndexNow command, LinkedIn queue Tue/Thu 08:00 Paris on JD's yes.
- 2026-10-26 — Plan accepted by the operator without reordering. Next items: FR #1 (F07) and EN #1 (E07), briefs first in `content/briefs/`.
