# Brief EN #1: AI PoC to production

Prepared 27 October 2026. Queue E07, approved order unchanged. JD explicitly approved the text and requested publication on 28 October 2026 in the conversation; publication prepared for that date.

- Primary query: **ai poc to production**.
- Secondary queries: ai pilot to production gap, why ai projects fail, productionizing llm, llmops vs mlops, ai proof of concept failure.
- Intent: a CTO or product leader needs to decide whether a successful demo has enough evidence to become an operated service. Focus on release criteria, failure handling and the handover boundary.
- Basis: [keywords.csv](../../research/keywords.csv), E07, and [cluster](../../research/clusters.md#e07--from-ai-poc-to-production-why-ai-projects-fail--500). SERP observations dated 26 October; no measured search volume.
- Questions: What is an AI PoC? Why do pilots stall after the demo? What evidence permits a release? What is LLMOps? When should a pilot stop?
- Format: opinion plus checklist, developed as a decision guide (1,200 to 1,800 words including FAQ). Standalone answer and definition within the first 60 words.
- Slug: `why-ai-pilots-never-reach-production`; shared key with FR: `poc-to-production`. Independently written, not a translation. Revise the working headline's absolute “never” to “stall” to avoid implying every pilot fails.

## Required evidence and structure

Explain the missing owner, absent evaluation set, unapproved data access, prototype-only integration and unfunded operations. The central device is a release checklist with evidence for every decision, followed by a hypothetical support-workflow example. Explain staged rollout, duplicate actions, human escalation, rollback and a handover agreed in the proposal. Do not promise a default support contract or invent client outcomes.

Sources checked 27 October:

1. [NANDA, The GenAI Divide, July 2025, report copy](https://cloudelligent.com/wp-content/uploads/2026/02/v0.1_State_of_AI_in_Business_2025_Report.pdf), pp. 2, 3, 6 and 7. Retain only its headline 95% as a dated, attributed preliminary claim with limitations. The official historical MIT PDF URL redirects to the group's overview; label the linked PDF as a third-party-hosted copy of the report.
2. [Gartner, 29 July 2024 forecast](https://www.gartner.com/en/newsroom/press-releases/2024-07-29-gartner-predicts-30-percent-of-generative-ai-projects-will-be-abandoned-after-proof-of-concept-by-end-of-2025) and [26 January 2026 article](https://www.gartner.com/en/articles/genai-project-failure): qualitative distinction between abandonment and measured financial impact. Do not reproduce a second rate.
3. [RAND, The Root Causes of Failure for Artificial Intelligence Projects, 13 August 2024](https://www.rand.org/pubs/research_reports/RRA2680-1.html): interviews about trained ML systems; use of pretrained LLMs alone excluded. Its introductory failure estimate cites outside work, rather than measuring a universal failure rate in these interviews.

Editorial §2.3 takes precedence over listing every rate mentioned in the cluster. Omit the unsupported 87% claim and avoid presenting RAND's introductory 80% estimate as RAND's measured finding. These are different methods and definitions, not a combined benchmark. No claim that all three sources are self-reported surveys: Gartner's older release is explicitly a forecast.

No publishable first-hand incident is documented for this topic. JD has been asked for one. Until supplied, use engineering recommendations and NODINA's existing offer statements, without invented memories, customers or frequency claims.

## Claims, author and links

NODINA statements are limited to `content/site/offers.en.json`, `home.steps`, `systems.deliverables`, `systems.fitPoints`, in the revision approved on 26 October (publication.json), traced by C249. Jean-David Collard signs as founder (C228), linked to `/en/#experience`. Research claims: C250-C252.

Link to [the offer](/en/custom-ai-solutions/), [the first-process post](/en/blog/first-process-to-automate/) and [Contact](/en/contact/?offer=systems). CTA: “What is keeping your pilot out of production?”

FAQ: AI PoC definition; LLMOps versus MLOps; rebuilding a prototype; abandoning a pilot. Visible answers and `FAQPage` share the same source. Named `Person` author and matching article meta/schema dates required. Front-matter date is the drafting date while `draft: true`; replace with the actual date at publication.

## Publication gate

JD reviews the full draft and signature. Recheck sources, set actual dates and publication rows, then follow editorial-plan §3b. No deployment, indexing submission or LinkedIn action during drafting.

Publication verified 28 October 2026: Cloudflare version `cee38248-37d2-44d3-b067-d8e1cf9dac35`, HTTP 200, sitemap and RSS checked. JD’s review and publication approval are complete. No indexing or LinkedIn action performed in the production-only scope.
