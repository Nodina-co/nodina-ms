# Prometheus File

One markdown file that turns a blank repository into a fully built,
search-optimized marketing site with a content machine behind it.

You drop `MARKETING_FOUNDATION.md` into a new repo, open Claude Code, and say
"begin Phase 0." The agent becomes your marketing team: it interviews you,
researches what people search for, designs the site with you, writes the
pages, wires up analytics and lead capture, launches, and then keeps
publishing every week. It never invents a fact and never publishes without
your yes.

## How to use it

1. Make a blank repo for the product's marketing site.
2. Copy `MARKETING_FOUNDATION.md` into it.
3. Add a `CLAUDE.md` with these lines:

   ```markdown
   @MARKETING_FOUNDATION.md

   Read MARKETING_FOUNDATION.md in full before doing anything. Until AGENTS.md
   exists in this repository, MARKETING_FOUNDATION.md is the only instruction
   file. Once AGENTS.md exists, read AGENTS.md first and treat
   MARKETING_FOUNDATION.md as the reference it was built from.
   ```

4. Open Claude Code in the repo and say: **"Read MARKETING_FOUNDATION.md and
   begin Phase 0."**
5. Answer questions, look at what it shows you, say yes or no.

## What happens, in order

**Setup check.** Before anything, it confirms Google Analytics, Google
Search Console, and Bing Webmaster Tools exist and work. If one is missing,
it walks you through creating it, step by step.

**Phase 0: it interviews you.** One long message, about fifty questions,
each with a sensible default. What the product is, who buys it, what the
site is for (signups, leads, or sales), what you may and may not claim,
how you want it to look, and what accounts you have. You answer what you
know. It writes down your goals and the facts about your product that the
site is allowed to state.

**Phase 1: it looks at what already exists.** Your app, your current site,
your docs, your competitors. It searches your brand name, asks ChatGPT,
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
articles to launch with and how many to publish per week. You approve
briefs; each brief has the short answer already written and lists the one
thing only you can supply.

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

You sit down on Monday and say **"what is planned this month?"** You get a
list with statuses. You say **"approve P021 to P025."** It writes them,
batched by topic, and returns each with a score and a preview link. You
say **"go live P021, P022, P023."** It publishes, pings the search engines,
logs it in the plan, and hands you the social copy. Next Monday the list
starts from where the file says, so nothing is ever done twice.

Behind that: a weekly brief with the numbers, a monthly check of which AI
assistants cite you, refreshes of aging pages, reviews at 30, 60, and 90
days, and a full audit every quarter.

## The rules it will not break

- It never invents facts, numbers, reviews, customers, quotes, awards, or
  search volumes. Every claim on the site traces to a source with a date.
- It never publishes, changes pricing, names a person, blocks a crawler, or
  deletes anything without your explicit yes.
- It never tells you an idea is good when it is not, never calls a page
  "optimized" without the checker passing, and never promises a ranking.
- It never buys links, stuffs keywords, fakes dates, or does anything else
  that gets a site removed from search.

## Files you will care about

| File | What it is |
|---|---|
| `MARKETING_FOUNDATION.md` | The whole method. Long. You do not need to read it. |
| `AGENTS.md` | Generated at the end. The repo's standing rules. |
| `content/PLAN.md` | The content plan. What is planned, in progress, published. Read this. |
| `content/product-truth.md` | Every fact the site may state about your product. |
| `content/positioning.md` | Who you are for and why you are different. |
| `content/decisions.md` | Every decision you made, dated. |
| `reports/weekly/` | The Monday brief and approvals. |
