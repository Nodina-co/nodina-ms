# Prometheus File

One markdown file that turns a repository into a search-optimized
marketing site with a content machine behind it, or adds the content
machine to a site you already love.

You drop `PROMETHEUS.md` into a repo, open Claude Code, and say "begin
Phase 0." The agent becomes your marketing team: it interviews you,
researches what people search for, builds or improves the site as far as
you want it to, writes the pages, wires up analytics and lead capture, and
keeps the content coming whenever you sit down. It never invents a fact
and never publishes without your yes.

## First, pick your starting point

| | You have | It does |
|---|---|---|
| **1. From scratch** | Maybe a product, no site, no content | Builds everything, designs it with you |
| **2. Rebuild** | A site you want replaced | Builds a new site in a new repo, carrying over your colors, logo, copy, and posts; redirects the old URLs |
| **3. Improve in place** | A site you want fixed and made better | Works in your existing repo: audits, refactors code and content page by page, keeps the look |
| **4. Content engine** | A well-optimized site you love, with analytics, posts, and maybe a content plan | Every output except a new site. Keeps your site, posts, and plan as they are; connects to your analytics, audits everything, finds the gaps, and suggests improvements you approve one by one; then runs a high-volume content machine with a weekly Terraform report. Rebuild is never the default |

Say it up front ("begin Phase 0, starting point 4, the site is
example.com") or answer when it asks. It skips whatever your starting
point makes unnecessary, and you can switch later.

## How to use it

1. Starting points 1 and 2: make a blank repo for the marketing site.
   Starting points 3 and 4: open the existing site's repo if it has one.
   If the site lives in a CMS or builder (WordPress, Webflow, Shopify, or
   a mix), make a small companion repo instead; the agent detects the
   platform, asks how much access you want to give it (edit the repo,
   use the CMS API, work in the CMS through your browser, or hand you
   paste-ready pages), and adapts.
2. Copy `PROMETHEUS.md` into it.
3. Add a `CLAUDE.md` with these lines:

   ```markdown
   # CLAUDE.md

   Until AGENTS.md exists, PROMETHEUS.md is the only instruction file.
   Do not load it whole. At the start of every session, read its
   section 0.4 (the reading map) and follow it: the core sections
   always, then only the sections listed for the current phase. Once
   AGENTS.md exists, read AGENTS.md first and consult PROMETHEUS.md
   by section, when AGENTS.md is silent.
   ```

4. Open Claude Code in the repo and say: **"Begin Phase 0."**
5. Answer questions, look at what it shows you, say yes or no.

## What happens, in order

**Phase 0: it interviews you.** The first question is always language:
what language you want to talk in, and what language the site itself
should be written in. They can differ — you can chat in French about a
site written in English — or be the same, and you can change either at
any time just by saying so. Then, one question at a time, about fifty in
total, each with a sensible default so you can just say "default" and
move on. What the product is, who buys it, what the site is for (signups,
leads, or sales), what you may and may not claim, how you want it to
look, and what accounts you have. You answer what you know, at your own
pace — say "ask me several at once" if you'd rather go faster. It writes
down your goals and the facts about your product that the site is
allowed to state.

**Phase 1: it looks at what already exists.** Your app, your current site,
your docs, your competitors. If you have blog posts or other content
already, it asks whether to import them as the starting point, shows you a
list with a keep, merge, refresh, or drop recommendation for each, and asks
how much it may change them: evolve freely, light touch, or frozen. Every
imported page is fact-checked before it goes live on the new site. It searches your brand name, asks ChatGPT,
Claude, Perplexity and the others your customers' questions, and records
who gets cited today. Then it drafts your positioning: what category you
are in, who you are for, and the two or three things that make you
different, each with proof.

**Phase 2: it builds the foundation and the design.** The site skeleton,
every technical thing search engines and AI crawlers need, the robots
rules that let every AI bot in, the analytics tag, the legal pages, the
forms (which post to a Google Sheet and email you), and the scripts that
check every page before it can go live.

For design there are two modes. If you already have a site you like, it
keeps the look exactly and asks page by page before touching any copy. If
you are starting fresh, it shows you three directions side by side, you
pick or mix, it shows a real homepage, you mark it up, and only then does
it build the system.

**Once the HTML site exists, a setup check.** It asks whether you already
have Google Analytics, Search Console, and Bing Webmaster Tools for this
site — it does not check or set these up on its own first. Say yes and it
verifies the details with you; say no and it offers to walk you through
creating each one, step by step; say you don't know and it checks for
you and reports back.

**Phase 3: keyword research.** It finds what people actually type into
Google and ask AI assistants, groups the queries into topics, scores them
by value and winnability, and shows you the top forty. It never makes up a
search volume; if it does not know, it says unknown.

**Phase 4: the site map.** Which pages exist, what each one is for, and
which query each one targets. Homepage, services or product pages,
pricing, about, blog, docs, comparisons, glossary, and so on, only the ones
the research justifies.

**Phase 5: the content plan.** A single file, `content/PLAN.md`, with
everything planned, in progress, and published. It proposes how many
articles to launch with and you decide: typically the core pages plus 8 to
12 articles for a new domain in a competitive category (a pillar page for
each of the top three topics, two or three supporting pieces per pillar, a
comparison, and a glossary batch), 4 to 6 for a narrow or local one, and a
refresh of the top ten existing pages first if you imported content. It
also proposes a weekly cadence, one new page and one refresh by default,
and you can raise it any Monday. You approve briefs; each brief has the
short answer already written and lists the one thing only you can supply.

**Phase 6: it writes.** Every page answers the question in the first three
sentences, uses question-shaped headings, cites real sources, states the
downsides, and includes something only your company knows. Every number is
traced to a source. Every page is scored on a rubric and checked by script
before you see it. Nothing goes live without your yes.

**Phase 7: launch.** It flips the pages live, tells Google and Bing, hands
you the social posts to publish, and updates every profile you own with
the same description.

**Phase 7b: analytics.** Now that real pages exist, it sets up conversions,
funnels, and reports in Google Analytics through your browser, and if you
sell online with Stripe, it wires purchase tracking from both the page and
the server so revenue is counted once.

**Phase 8: it writes its own rulebook.** It generates `AGENTS.md`, the
permanent operating guide for this repo: your rules, your queries, your
design tokens, your account IDs, the exact commands. From then on every
session reads that first, so analytics, tracking, and every SEO rule are on
every page, every time.

## Then, every week

**Every Monday morning, the Terraform report arrives on its own.** No session, no one
at the keyboard. Scripts pull Search Console, Bing, Google Analytics, and
your lead sheets, do all the arithmetic, and hand one compact summary to
the model, so it costs well under a dollar a week however big the site
gets. You get a GitHub notification. The first screen tells you, in plain
English, whether search visibility, AI citations, traffic, and leads went
up or down, and the three things worth doing this week. Underneath is the
detail: what improved, what declined, which pages are winning or need
attention, what competitors did, what to leave alone, and numbered
changes to your content plan. The report only reads and suggests. It
never touches the site or the plan.

**Content happens when you say so.** Sit down on Monday, Tuesday, or three
weeks later, and the session starts by catching you up on what fell due
while you were away. Say **"apply 1 and 3"** to take the report's plan
changes, **"approve P021 to P025"**, then **"go live P021, P022"**. Or say
**"let's do 30"**: it tells you how many distinct pages the plan really
supports, batches them, and works through them without lowering the bar.
Skip a week and nothing breaks. The plan waits exactly where you left it.

Behind that: a monthly check of which AI assistants cite you, refreshes of
aging pages, reviews at 30, 60, and 90 days, and a full audit every
quarter, each flagged by the report when due and done when you open a
session.

## The rules it will not break

- It never invents facts, numbers, reviews, customers, quotes, awards, or
  search volumes. Every claim on the site traces to a source with a date.
- It never publishes, changes pricing, names a person, blocks a crawler, or
  deletes anything without your explicit yes.
- It never tells you an idea is good when it is not, never calls a page
  "optimized" without the checker passing, and never promises a ranking.
- It never buys links, stuffs keywords, fakes dates, or does anything else
  that gets a site removed from search.

## When this file gets better

`PROMETHEUS.md` has a version date at the top, and each site's `AGENTS.md`
remembers which version it was built from. To bring a site up to date,
copy the new `PROMETHEUS.md` into that site's repo, commit it, and say
**"foundation updated"**. The agent reads what changed since that site's
version, works out what it means for that site, and gives you a numbered
list; you say "apply 1, 3". Your site's own decisions always win. The
repos never need to be connected, even across GitHub organizations. Every
quarter it also checks for a newer version on its own.

## Every file it creates, explained simply

**Start with these five:** `content/PLAN.md` (what is planned and
published), `reports/weekly/` (the Terraform report), `content/decisions.md`
(everything you decided), `content/product-truth.md` (what the site may say
about you), and `AGENTS.md` (the rules the repo runs on).

**Who does what:**
🤖 **automatic**: the agent writes and keeps it up to date, no yes needed.
✋ **you approve**: the agent drafts it, nothing counts until you say yes.
👤 **you do it**: the agent tells you exactly how, then you act.

"Automatic" still means "when a session is open", except the Terraform
report and the scheduled checks, which run with nobody there.

In starting points 3 and 4 these files are added next to your existing
site, in the folders it already uses, or in a small companion repo if the
site lives in a CMS or builder. Nothing of yours is replaced.

### The foundation: the facts everything else stands on

| File | In plain words | Who |
|---|---|---|
| `research/discovery.md` | Your interview answers, the audit of what exists, which accounts you have, and where your site lives (the platform profile) | 👤 you answer and create accounts; 🤖 agent writes it up |
| `content/goals.md` | What the site is for and the one number that says it is working | ✋ |
| `content/product-truth.md` | Every fact the site is allowed to say about you. If it is not here, the site cannot say it | ✋ every line and every change |
| `content/positioning.md` | Who you are for, who you are not for, and why you are different | ✋ |
| `content/voice.md` | How you sound, the words you use, the words you never use | ✋ |
| `content/design.md` | Your colors, fonts, and building blocks, so new pages look like yours | ✋ (in starting point 4 it just records what you have) |
| `content/decisions.md` | A dated diary of every decision: who said yes, and why | 🤖 writes it, but every entry is your decision |

### The research: why each page exists

| File | In plain words | Who |
|---|---|---|
| `research/keywords.csv` | Every search worth going after, with what the searcher wants and how much it matters | 🤖 you check the priority order |
| `research/clusters.md` | Searches grouped so each group gets exactly one page, and no two pages fight over one search | 🤖 |
| `research/ai-queries.md` | The questions people ask ChatGPT, Claude, Perplexity, and the rest | 🤖 |
| `research/competitors.md` | Who you compete with, and what they publish | 🤖 |
| `research/serp-baseline.md` | A snapshot of what Google showed before the agent started, to measure against | 🤖 |
| `research/ai-citations.csv` | Which sources each AI assistant cites for your key questions, and whether it cites you | 🤖 |
| `research/import-inventory.md` | Your existing posts, each marked keep, merge, refresh, or drop (rebuilds only) | ✋ you pick |
| `research/legacy/` | Your original content plan, kept exactly as you wrote it (starting point 4) | 🤖 copied, never edited |

### The plan and the writing: what gets built

| File | In plain words | Who |
|---|---|---|
| `content/PLAN.md` | **The content plan.** One row per page, forever: planned, writing, in review, published. Its "Now" box says where things stand | 🤖 moves rows along; ✋ only you can mark a page approved, ready to go live, or archived |
| `content/briefs/` | One recipe per page: the searches it targets, the questions it answers, the facts it must include | 🤖 writes; ✋ you approve |
| `content/claims.csv` | Every number, quote, and comparison on the site, with its source and an expiry date | 🤖 |
| `content/rubric.md` | The scorecard every draft must pass before you see it | 🤖 |
| `content/permissions/` | Written permission to name a person or customer, or use their quote or logo | 👤 you get the permission; 🤖 files it |

### Getting it seen

| File | In plain words | Who |
|---|---|---|
| `content/social/` | Ready-to-post social copy for each new page | 🤖 drafts; 👤 you post |
| `content/email/` | Welcome emails and newsletter drafts | 🤖 drafts; 👤 you send |
| `content/analytics.md` | What gets counted as a win (signup, lead, sale) and where it is tracked | ✋ you confirm (in starting point 4 it records what you already have) |
| `research/listings.md` | Directories and profiles, and who owns each login | 👤 you create accounts; 🤖 keeps the list |
| `reports/submit/` | What was sent to Google and Bing, and when | 🤖 |

### Reports: how it is going

| File | In plain words | Who |
|---|---|---|
| `reports/weekly/YYYY-MM-DD.md` | **The Terraform report.** Every Monday morning, on its own: what went up, what went down, the three things to do this week, suggested plan changes | 🤖 fully automatic, nobody needs to be there |
| `reports/weekly/…-approvals.md` | When you open a session: what fell due while you were away, what needs your yes, and the plan for the session | 🤖 writes; ✋ you answer in one reply |
| `reports/data/` | The raw numbers behind each report, and a running history so a blip is not mistaken for a trend | 🤖 fully automatic |
| `reports/monthly/` | The monthly look back, including which AI assistants cite you | 🤖 in the first session of the month |
| `reports/conformance-…md` | The agent's own check that it followed every rule | 🤖 |

### The rulebook

| File | In plain words | Who |
|---|---|---|
| `AGENTS.md` | The repo's own instruction manual, written for your site: your rules, your searches, your accounts, your platform, the exact commands | 🤖 |
| `CLAUDE.md` | A one-line pointer that makes Claude read `AGENTS.md` first | 👤 you create it at the start; 🤖 updates it at the end |
| `PROMETHEUS.md` | The whole method. Long. You do not need to read it | nobody edits it |

### Your to-do list, in short

1. Answer the interview, and create or connect the accounts.
2. Say yes or no to the foundation files.
3. For each page: approve the brief, then say "go live".
4. Read the Terraform report when it lands; open a session when you want
   content (any day, or not at all that week).
5. Post the social copy and send the emails; get permission before
   anyone is named.
6. Anything that costs money, deletes something, or changes a URL.

Everything else, the agent keeps up to date.
