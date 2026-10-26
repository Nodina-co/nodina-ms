# Keyword and AI-search research report — NODINA

Date: 2026-10-26. Author: Claude Code session with Chloe Alpert (operator), on the approved site copy of 26 October. This is the plain-language report required by PROMETHEUS §8.7a. It is kept current when the research is refreshed.

## 1. What was done, in one paragraph

Starting from the 22 seed queries JD gave on 27 September and the vocabulary of the published FR/EN pages, 177 seed terms were expanded through Google and Bing autocomplete (question prefixes, "for PME / for small business", "prix / pricing", "vs", and a 26-letter alphabet expansion on 24 head seeds), in French (`fr-FR`) and in English (`en-US`). That produced 12,828 distinct suggestions, 9,619 of them on topic after removing careers, courses, consumer and geographic noise. Thirty head queries were then looked at on Google's first page (France for FR, US for EN) to record People Also Ask, related searches and who ranks. Sitemaps of 25 competitors and reference sites were fetched and their blog slugs counted. Hacker News titles were pulled for ten topics. Two live Perplexity answers were read to see which sources assistants cite today for provider questions. From all of that, 991 queries were curated into 31 clusters, each mapped to one target page and scored.

## 2. Where the files are

| File | What it is |
|---|---|
| [keywords.csv](keywords.csv) | 991 curated queries: intent, cluster, funnel stage, page type, target URL, SERP features and competitors where observed, priority score, source of the phrasing. Volumes are `unknown` on every row. |
| [keywords-raw-20261026.csv](keywords-raw-20261026.csv) | 9,619 autocomplete rows with engine, seed and date, for traceability and future re-mining. |
| [clusters.md](clusters.md) | The 31 clusters: primary and secondary queries, question forms for H2s and FAQs, what the page must contain to win, who ranks today, cannibalization check. |
| [serp/google-20261026.md](serp/google-20261026.md) | The 30 first-page observations. |
| [serp/competitor-sitemaps-20261026.md](serp/competitor-sitemaps-20261026.md) | URL counts and dominant blog topics per competitor. |
| [ai-queries.md](ai-queries.md) | Assistant protocol from 2 October, plus the buyer prompts per priority cluster and the two citation observations of 26 October. |
| [../content/editorial-plan.md](../content/editorial-plan.md) | The publishing plan built from this research: rules, cadence, two independent queues (FR, EN), page work, off-page targets. |

## 3. What is known and unknown about demand

**Known.** Which phrasings exist (autocomplete only suggests queries people type), which questions Google attaches to a query (PAA), which related searches it proposes, which competitors publish on which topics and how many pages they have on each, and which sources Perplexity cites for two provider questions. All dated 26 October 2026.

**Unknown.** Search volume, click-through, keyword difficulty, and whether an AI Overview appears for a given query. No Google Search Console query data exists yet for nodina.com (the property was verified on 9 October; no export has been made). Bing Webmaster Tools keyword research was not run. No paid tool (Ahrefs, Semrush) is connected. Google Trends was not used. Every "demand" mark in the scoring is therefore relative evidence, not a number. The first Search Console export, due once 28 days of data exist (around 6 November), replaces these marks for the pages that already exist.

**Caveats on the SERP observations.** One browser, one day, one location each; French results came through a French IP. Google's first page moves; the observations show who is in the game, not fixed positions. Two English queries ("ai consulting firm", "ai agents for business") show a US local pack or video block, which NODINA cannot enter from France.

## 4. What the research says

### 4.1 Two languages, two different markets

The French tail is short and mixed. Buyer phrasings exist ("agence IA", "cabinet conseil IA", "automatisation IA entreprise", "agent IA entreprise", "RAG entreprise", "IA et RGPD", "combien coûte un projet IA"), but every head term is surrounded by career, student and consumer queries, and the first pages are held by small consultancies that publish at volume: JUWA (308 blog URLs, 77 containing "pme"), LYV-IA (254, 102 with "pme"), Flowt (442), Just-Use-AI (287, built around n8n/Make and "agence automatisation <ville>"), Hyperstack (66, agents and Claude Code). Nobody owns "développeur AI-native", "IA ETI", "passer un POC IA en production" or "évaluer une IA avant production". French buyers also search "staff augmentation" in English.

The English tail is deep and vendor-saturated. "ai consulting", "custom ai development", "hire ai engineers", "staff augmentation", "intelligent document processing" are owned by offshore development shops, marketplaces and platforms; a French boutique will not take those heads. What is open: decision content ("hire vs outsource", "build vs buy", "agentic workflow vs automation", "agency vs freelancer"), the PoC-to-production problem (the MIT "95 % of pilots fail" figure drives a whole SERP of opinion pieces by consultancies), the emerging term "AI-native engineer" (Hacker News, OpenAI's guide, arXiv, and FutureProofing's resources hub, the one direct competitor already investing there), and business-angle evaluation content ("how to test AI systems", "AI hallucinations in business decisions").

### 4.2 Who ranks and who is cited

On Google, French pages are mostly agencies and a few institutions (francenum.gouv.fr, CCI, economie.gouv.fr); English pages are vendors, Reddit and LinkedIn. On Perplexity, the French "which providers" answer was built almost entirely from **France Num's public directory** and from one agency blog (Castelis) that lists its peers; the English "which firms embed senior AI-native engineers" answer was built from **vendors' own comparison pages** (Uvik, Ryz Labs, X-Team, a "forward deployment" directory). Two conclusions: a France Num listing is the single cheapest citation lever for the French market, and a NODINA comparison page of the same shape as those vendor pages is the citation lever in English.

### 4.3 What competitors publish

FutureProofing (the Teams reference JD chose) publishes talent-index data, TCO calculators, scorecards, "X vs Y vs Z" staffing comparisons and a dense Claude Code / Cursor tail. Lonestone publishes a cost simulator and buyer guides ("choisir agence IA", "cahier des charges"). Coderio writes "best software development company in <US city>" pages. The French PME agencies write one article per process per sector ("automatisation réconciliation bancaire IA PME"). Yield Studio and Galadrim write "combien coûte …" and "comment choisir une agence …" pieces. The pattern that wins citations is: a definition, a comparison table, a checklist, a dated statistic with a source.

### 4.4 Where the site stands

Twenty pages and two posts are published. The offer pages already carry the commercial vocabulary (consulting and integration, AI-native teams, no equity, no recruitment fees, week-three pull requests). The blog has one post per language, both on "which process to automate first", which is exactly cluster F02/E03's primary question. Nothing on the site yet targets PoC-to-production, AI-native engineering as a term, provider choice, cost drivers, document extraction, RAG, agents, private LLM/RGPD, or hiring decisions. No glossary, comparison or FAQ hub pages exist. No author page with `Person` schema exists for Jean-David Collard beyond the homepage block.

### 4.5 What changes the plan

1. Lead with PoC-to-production in both languages: highest score, direct fit, no primary-data competitor.
2. Treat "AI-native engineer" as a term to own in English now, before FutureProofing's tail compounds; define it in French too, where it is empty.
3. Do not chase "PME": write for ETI and mid-sized companies, which matches the qualification criteria in `content/goals.md`.
4. Build decision pages (provider type, hire vs outsource, build vs buy, agent vs automation) because that is what assistants cite.
5. Never publish prices; publish what drives price and what a proposal contains. Rankers do publish ranges, and NODINA's rule forbids it, so the angle must be the one competitors cannot copy: how NODINA actually scopes.
6. Get listed where assistants look: France Num, Clutch, and the roundups that cite peers.
7. Put one dated, sourced statistic and one definition sentence in every post; that is the unit assistants quote.

## 5. The top 20 clusters (operator review requested)

The full table with marks and reasons is in [clusters.md](clusters.md). In rank order: E07 PoC→production (500); F01 choosing a provider, F07 POC→production FR, E03 automation for operations, E09 cost and scope, E10 hire vs outsource, E12 AI-native engineers (300 each); F02 automate a process, F04 document extraction, F09 prix et cadrage, F12 développeur AI-native, E05 enterprise RAG, E08 private LLM and AI Act (240); E01 choosing a consulting firm, E04 document processing, E11 hire AI engineers (200); F05 RAG FR, F08 RGPD and AI Act, F13 évaluer une IA, E14 evaluating engineers (192).

The operator may reorder. Any reorder is logged in `content/decisions.md`.

## 6. Limits to state whenever this research is quoted

- Autocomplete presence is not volume. A phrase suggested by both engines in two languages indicates that people type it; it says nothing about how many.
- First-page observations are one-day snapshots from one location per language.
- Perplexity observations are two single answers, not the repeated protocol of `ai-queries.md`; the protocol run for the top 20 clusters is still to do.
- Competitor URL counts come from sitemaps that were retrievable; zero means not retrievable.
- No difficulty metric exists. "Winnability" is a judgement from who ranks and what format wins.

## 7. Refresh

Quarterly: rerun the expansion from the seed file, re-observe the 30 head SERPs, re-fetch competitor sitemaps, and replace the demand marks with Search Console impressions for every page that exists. Monthly from November: Search Console queries with impressions and no clicks become FAQ entries on the page that earns them (PROMETHEUS §8.7).
