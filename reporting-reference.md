# Reporting reference: the setup that works

**This is a reference for the next version of `PROMETHEUS.md`.** It records
the reporting setup built and verified on CheckIA (checkia.fr) on
2026-09-28, which the user is very happy with. It is the model for how
Prometheus should set up reporting on every site. Site-specific IDs and
keys are left out on purpose; each site has its own.

Like `prometheus-notes.md`, this file stays in this repo and is not copied
into site repos.

**Rule for any agent:** preserve this architecture. Before proposing a change
to authentication, the scheduler, the APIs or the folders, name the specific
failure the change solves. Don't replace working parts because an older note
or an older section of the spec describes a different setup.

## The pipeline

```
Google Analytics 4 ──────┐
Google Search Console ───┼─→ Google Apps Script
Bing Webmaster Tools ────┘          │
                                    │ Monday ~09:00, user's time zone
                                    ▼
                  <brand>-marketing-analytics/data/*.json
                                    │
                                    │ AI analysis on request
                                    ▼
                  <main repo>/terraform.md (the instructions)
                                    │
                                    ▼
                  <brand>-marketing-analytics/reports/*.md
```

Scope: marketing analytics and the marketing website only. No changes to the
product or application.

## What runs automatically and what runs on request

| Part | How it runs |
|---|---|
| Collecting data and uploading the JSON | Automatic, every Monday around 09:00 in the user's time zone (Apps Script triggers fire within about 15 minutes of the set time) |
| The Terraform analysis | On request: the user opens a harness connected to the analytics repo and says "run terraform report" |

No Claude API key and no scheduled AI-writing service are needed. The weekly
run uses no model, so it costs no tokens.

## Setup steps, in order

### 1. Google Cloud project

- Create one project for reporting (for example "<Brand> Reporting").
- Enable two APIs: Google Analytics Data API and Google Search Console API.
- Record the GA4 **property ID** and the Search Console property (for example
  `sc-domain:example.com`).
- The GA4 property ID and the website's measurement ID (`G-…`) are different
  things. The reporting API needs the property ID. Never swap one for the
  other.
- If a project, property or tracking tag already exists and works, reuse it.

### 2. Google authentication: Apps Script OAuth

- Configure the OAuth consent screen for the project. For a Google Workspace
  organization, use the internal audience.
- Connect the Apps Script project to the Google Cloud project.
- The user runs the script once and authorizes it with their Google account.
- The code authenticates with `ScriptApp.getOAuthToken()`, sent as a Bearer
  token. Google manages the authorization. No refresh token and no
  service-account file are stored anywhere.
- The account that authorizes the script and installs the trigger has to keep
  its access to GA4 and Search Console.

**Skip the service account.** The first attempt used a local Python collector
with a service account and a downloaded key. Key creation was blocked by an
organization policy (`iam.managed.disableServiceAccountKeyCreation`) and
needed Organization Policy Administrator access to override. Apps Script
OAuth avoids all of that. Prometheus should go straight to Apps Script and
not lead the user down the service-account path.

### 3. Apps Script project

Two files, kept in the main repo under `tools/github-report/`: `Code.gs` and
`appsscript.json`.

The manifest sets the user's time zone, the V8 runtime, and four scopes:

- `analytics.readonly`
- `webmasters.readonly`
- `script.external_request`
- `script.scriptapp`

This is not a public web app. It needs no "Anyone has access" setting, no
public endpoint and no deployment. The user edits, saves, authorizes when
asked, and runs functions in the Apps Script editor.

### 4. Bing Webmaster Tools

- The user generates a Bing Webmaster Tools API key and saves it in Apps
  Script under Project Settings → Script Properties as `BING_API_KEY`.
- This key is separate from the site's IndexNow key. Say so, because they are
  easy to confuse.
- The script finds the verified property with `GetUserSites`, then calls
  `GetRankAndTrafficStats`, `GetQueryStats` and `GetPageStats`.
- If Bing has more than one variant of the site (www and apex, for example),
  an optional `BING_SITE_URL` property picks the exact one. Find out which
  property holds the data before changing it; a redirect on the website
  doesn't settle it.
- Bing's raw dates are kept. Its data is not assumed to cover the same
  windows as Google's.

### 5. GitHub destination

- The user creates the analytics repo, **private**, named
  `<brand>-marketing-analytics`.
- The user creates a fine-grained personal access token restricted to that
  one repo, with Contents: Read and write, and Metadata: Read-only.
- The token is saved in Script Properties as `GITHUB_TOKEN`.
- No token or key ever goes in source code or in the JSON reports.
- The script checks that the destination repo is private before it writes,
  then writes through GitHub's Contents API to the default branch.

### 6. Folder layout in the analytics repo

```
<brand>-marketing-analytics/
├── CLAUDE.md
├── AGENTS.md
├── data/
│   ├── YYYY-MM-DD.json
│   └── YYYY-MM-DD-test.json
└── reports/
    └── terraform-YYYY-MM-DD.md
```

Raw JSON goes in `data/`. AI-written analysis goes in `reports/`.

### 7. Functions and schedule

| Function | Purpose |
|---|---|
| `uploadTestReport` | Collects real data and uploads a dated test JSON |
| `uploadWeeklyReport` | Collects and uploads the scheduled JSON |
| `installWeeklySchedule` | Installs the weekly trigger, replacing any old one |

The script:

- uses a lock so two runs can't overlap
- skips a second successful scheduled upload on the same date
- updates an existing dated file using its GitHub SHA
- records collection errors inside the JSON
- uploads partial data when it can, then fails visibly, so a partial run is
  never reported as a complete success

Saving an updated script doesn't require reinstalling the trigger as long as
the handler name stays the same.

### 8. Verify before moving on

1. Run `uploadTestReport` and open the JSON. Confirm all three sources are
   present and there are no collection errors.
2. Confirm the file landed in `data/`.
3. Run `installWeeklySchedule` and check the execution log.
4. Run the first Terraform analysis and confirm it saved to `reports/`.
5. After the first Monday, confirm the unattended run happened.

## New sites have no data yet

Found on a brand-new site on 2026-09-28. The CheckIA collector still has the
original behaviour and needs the same fix; it worked there only because the
site already had search data.

**What to expect.** For the first days or weeks after launch:

- Search Console has no finalized data.
- Bing is empty.
- GA4's previous week and month are empty or partial.

Tell the user this before the first test run, so it doesn't look like a
fault.

**Rules for the collector**

- "No data yet" is not an error. If a source answers with HTTP 200 and zero
  rows, record it under `notes`.
- Record under `errors` only when the request really fails: 403, 400, 5xx or
  a missing key.
- The test gate blocks only on real failures. `uploadTestReport` has to
  succeed when all that's missing is data the site is too new to have, so
  the weekly schedule can be installed on launch day.
- Check `GA4_PROPERTY_ID` before calling the API. If it starts with `G-`, it
  is the measurement ID, and the collector should say so plainly. The right
  value is the number from Admin → Property details.
- Make error messages specific. A 400 means a bad property ID. A 403 means no
  access or a disabled API.
- Check that the Bing site URL matches the exact URL the site uses. Bing may
  have the `www` version verified when the site lives without `www`.

**Rule for the Terraform skill**

- Empty means unknown, never zero. "No Search Console data yet" does not mean
  zero impressions. The same goes for Bing returning empty lists.

## What the script collects

**GA4**

- total sessions
- counts of the conversion event (on CheckIA, `book_call`)
- landing pages
- default traffic channels
- pages where the conversion click happened
- sessions and conversion clicks grouped by source/medium and campaign
  (`sessionSourceMedium`, `sessionCampaignName`), for the latest and the
  previous week

Be exact about what the conversion event means. On CheckIA, `book_call` is a
click on the booking link. It is not a completed appointment or a qualified
lead.

**Search Console**

- clicks, impressions, CTR and average position
- breakdowns by page and by query
- finalized web-search data only, with the latest reporting date taken from
  the rows returned
- no URL Inspection and no index-coverage audit

**Comparison windows**

- latest 7 days against the 7 days before
- latest 28 days against the 28 days before
- GA4 windows end three days before collection to allow for processing. That
  buffer doesn't guarantee the numbers are final.

## The Terraform skill

`terraform.md` lives in the main repo. It is an AI instruction file. It is
not HashiCorp Terraform, not infrastructure configuration, and not the report
itself. Prometheus should say this once to the user, since the name invites
the mix-up.

The analytics repo points to it through this chain, which relies on both
repos being cloned side by side:

```
CLAUDE.md
    → AGENTS.md
        → ../<main repo>/terraform.md
```

The skill tells the agent to:

- read every JSON file in the analytics repo's `data/` folder
- use product and editorial context from the main repo
- avoid double-counting snapshots whose windows overlap
- label test baselines and small samples
- tell unavailable data apart from zero
- put sessions and conversion clicks first
- save the analysis to `reports/terraform-YYYY-MM-DD.md`
- recommend marketing changes without editing or publishing the website

## What this replaces

- The local Python collector as the scheduled workflow.
- Email delivery from Apps Script. The old function names `sendWeeklyReport`
  and `sendTestReport` remain in the code for compatibility, but they now
  call the upload functions and send no email.
- Any layout that put JSON under `reports/`.
- In `PROMETHEUS.md` section 15.2: the GitHub Actions workflow, the single
  scheduled model call, the GitHub issue delivery, and reports saved in the
  main repo.
