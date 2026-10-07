/** Terraform collector: private weekly JSON collection. No email, no AI calls, not a web app.
 * Standard collector from PROMETHEUS.md Appendix G. Site values are in CONFIG; secrets and IDs
 * are in Script Properties: GA4_PROPERTY_ID, BING_API_KEY, GITHUB_TOKEN, and optionally
 * BING_SITE_URL and LEAD_SHEET_IDS. Nothing secret is ever written in this file or in the JSON. */
const CONFIG = Object.freeze({
  zone: 'Europe/Paris',                      // for example 'Europe/Paris'
  searchConsole: 'sc-domain:nodina.com', // for example 'sc-domain:example.com'
  domain: 'nodina.com',                       // for example 'example.com', no scheme, no www
  liveUrl: 'https://nodina.com/',                    // the exact URL the site uses, for example 'https://example.com/'
  repo: 'Nodina-co/nodina-marketing-analytics',
  hour: 9,                                  // Monday, local hour of the weekly upload
  // key: GA4 event name. The meaning of each event is written in content/analytics.md.
  conversions: {cta: 'primary_cta_click', form_started: 'form_start', form_received: 'generate_lead'},             // for example {demo: 'book_call', lead: 'generate_lead'}
  conversionMeaning: {cta: 'Clic CTA principal, pas une demande reçue', form_started: 'Première interaction avec le formulaire, pas un envoi', form_received: 'Stockage du formulaire confirmé, pas un lead qualifié'}, // for example {demo: 'click on the booking link, not a booked call'}
  // Assistant referrers, from PROMETHEUS.md Appendix C. Verify quarterly.
  aiSources: 'chatgpt\\.com|chat\\.openai\\.com|perplexity\\.ai|copilot\\.microsoft\\.com|claude\\.ai|gemini\\.google\\.com|you\\.com|meta\\.ai|chat\\.mistral\\.ai|poe\\.com'
});
function prop_(name) { return PropertiesService.getScriptProperties().getProperty(name); }
function uploadTestReport() { uploadReport_(true); }
function uploadWeeklyReport() { uploadReport_(false); }
function installWeeklySchedule() {
  ScriptApp.requireAllScopes(ScriptApp.AuthMode.FULL);
  if (PropertiesService.getUserProperties().getProperty('successfulGithubTest') !== JSON.stringify(CONFIG)) throw new Error('Run uploadTestReport successfully first.');
  ScriptApp.getProjectTriggers().filter(t => t.getHandlerFunction() === 'uploadWeeklyReport').forEach(t => ScriptApp.deleteTrigger(t));
  ScriptApp.newTrigger('uploadWeeklyReport').timeBased().onWeekDay(ScriptApp.WeekDay.MONDAY)
    .atHour(CONFIG.hour).nearMinute(0).everyWeeks(1).inTimezone(CONFIG.zone).create();
  console.log('Upload scheduled: Monday around ' + CONFIG.hour + ':00 ' + CONFIG.zone + ' (+/- 15 minutes). No email delivery.');
}

function day_(value, offset) {
  const d = new Date(value + 'T12:00:00Z');
  d.setUTCDate(d.getUTCDate() + offset);
  return d.toISOString().slice(0, 10);
}
function periods_(end) {
  const out = [['week',7,0],['previous_week',7,7],['month',28,0],['previous_month',28,28]].reduce((o, x) => {
    o[x[0]] = {start: day_(end, -x[1]-x[2]+1), end: day_(end, -x[2])}; return o;
  }, {});
  out.month_last_year = {start: day_(out.month.start, -364), end: day_(out.month.end, -364)};
  return out;
}
// Specific messages: the status says what is wrong and where to fix it. Never log bodies or tokens.
function explain_(source, code) {
  if (source === 'GA4') {
    if (code === 400) return 'GA4 HTTP 400: the property ID is wrong. GA4_PROPERTY_ID must be the number from Admin > Property details.';
    if (code === 403) return 'GA4 HTTP 403: the authorizing account has no access to this property, or the Google Analytics Data API is not enabled in the Cloud project.';
  }
  if (source === 'Search Console') {
    if (code === 400) return 'Search Console HTTP 400: the property string is wrong. Use exactly what Search Console shows, for example sc-domain:example.com.';
    if (code === 403) return 'Search Console HTTP 403: the authorizing account has no access to this property, or the Search Console API is not enabled in the Cloud project.';
    if (code === 404) return 'Search Console HTTP 404: this property does not exist for the authorizing account.';
  }
  if (code === 401) return source + ' HTTP 401: the authorization has expired or was revoked. Run the script once in the editor and authorize again.';
  return source + ' HTTP ' + code + ': the request failed after retries. Try again later; if it repeats, check the service status.';
}
function api_(source, url, body) {
  for (let attempt = 0; attempt < 3; attempt++) {
    const options = {method: body ? 'post' : 'get', headers: {Authorization: 'Bearer ' + ScriptApp.getOAuthToken()}, muteHttpExceptions: true};
    options.followRedirects = false;
    if (body) { options.contentType = 'application/json'; options.payload = JSON.stringify(body); }
    let r;
    try { r = UrlFetchApp.fetch(url, options); }
    catch (_) { throw new Error(source + ': network request failed.'); }
    const code = r.getResponseCode();
    if (code === 200) {
      try { return JSON.parse(r.getContentText()); }
      catch (_) { throw new Error(source + ': unreadable JSON response.'); }
    }
    if ([429,500,502,503,504].includes(code) && attempt < 2) { Utilities.sleep(1000 * Math.pow(2, attempt)); continue; }
    throw new Error(explain_(source, code));
  }
}
function property_() {
  const id = prop_('GA4_PROPERTY_ID');
  if (!id) throw new Error('Missing GA4_PROPERTY_ID in Script Properties.');
  if (/^G-/i.test(id)) throw new Error('GA4_PROPERTY_ID holds a measurement ID (G-...). That is the wrong ID. Use the number from Admin > Property details.');
  if (!/^\d+$/.test(id)) throw new Error('GA4_PROPERTY_ID must contain digits only: the number from Admin > Property details.');
  return id;
}
// spec: {metric, event, dimension, limit, filter}. event: a GA4 event name, or nothing for the plain metric.
function ga_(period, spec) {
  spec = spec || {};
  const metric = spec.event ? 'eventCount' : (spec.metric || 'sessions');
  const body = {dateRanges:[{startDate:period.start,endDate:period.end}], metrics:[{name:metric}], limit:spec.limit || 10};
  const filters = [];
  if (spec.event) filters.push({filter:{fieldName:'eventName',stringFilter:{matchType:'EXACT',value:spec.event,caseSensitive:true}}});
  if (spec.filter) filters.push({filter:spec.filter});
  if (filters.length === 1) body.dimensionFilter = filters[0];
  if (filters.length > 1) body.dimensionFilter = {andGroup:{expressions:filters}};
  if (spec.dimension) {
    body.dimensions = (Array.isArray(spec.dimension) ? spec.dimension : [spec.dimension]).map(name => ({name:name}));
    body.orderBys = [{metric:{metricName:metric},desc:true}];
  }
  return api_('GA4', 'https://analyticsdata.googleapis.com/v1beta/properties/' + property_() + ':runReport', body);
}
function search_(period, dimensions, limit) {
  return api_('Search Console', 'https://www.googleapis.com/webmasters/v3/sites/' + encodeURIComponent(CONFIG.searchConsole) + '/searchAnalytics/query',
    {startDate:period.start,endDate:period.end,type:'web',dataState:'final',dimensions:dimensions || [],rowLimit:limit || 100});
}
function sitemaps_() {
  const r = api_('Search Console', 'https://www.googleapis.com/webmasters/v3/sites/' + encodeURIComponent(CONFIG.searchConsole) + '/sitemaps');
  return {sitemap: (r.sitemap || []).map(s => ({path:s.path,lastSubmitted:s.lastSubmitted,lastDownloaded:s.lastDownloaded,isPending:s.isPending,errors:s.errors,warnings:s.warnings}))};
}
// Preserve Bing's raw dates and reporting windows; never mix these with Search Console totals.
function bing_(method, site) {
  const key = prop_('BING_API_KEY');
  if (!key) throw new Error('Missing BING_API_KEY in Script Properties. This is the Bing Webmaster Tools API key, not the IndexNow key.');
  const url = 'https://ssl.bing.com/webmaster/api.svc/json/' + method + '?apikey=' + encodeURIComponent(key) + (site ? '&siteUrl=' + encodeURIComponent(site) : '');
  for (let attempt = 0; attempt < 3; attempt++) {
    let response;
    try { response = UrlFetchApp.fetch(url, {muteHttpExceptions:true,followRedirects:false}); }
    catch (_) { throw new Error('Bing: the network request failed. Try again later.'); }
    const status = response.getResponseCode();
    if ([429,500,502,503,504].includes(status) && attempt < 2) { Utilities.sleep(1000 * Math.pow(2, attempt)); continue; }
    if (status === 400 || status === 401 || status === 403) throw new Error('Bing HTTP ' + status + ': the API key is wrong or has no access to this site. BING_API_KEY must be the Bing Webmaster Tools API key (Settings > API access), not the IndexNow key.');
    if (status !== 200) throw new Error('Bing HTTP ' + status + ': the request failed after retries. Try again later.');
    let body;
    try { body = JSON.parse(response.getContentText()); }
    catch (_) { throw new Error('Bing returned an answer that is not JSON.'); }
    if (!body || !Array.isArray(body.d)) throw new Error('Bing returned an unexpected answer or an API error.');
    return body.d;
  }
}
function host_(url) { return String(url).replace(/^https?:\/\//i, '').replace(/\/.*$/, '').toLowerCase(); }
function bingSite_(notes) {
  const pattern = new RegExp('^https?://(www\\.)?' + CONFIG.domain.replace(/[.]/g, '\\.') + '/?$', 'i');
  const sites = bing_('GetUserSites').filter(s => s.IsVerified === true && pattern.test(s.Url));
  const configured = prop_('BING_SITE_URL');
  let chosen;
  if (configured) {
    if (!sites.some(s => s.Url === configured)) throw new Error('BING_SITE_URL must exactly match a verified ' + CONFIG.domain + ' site in Bing Webmaster Tools.');
    chosen = configured;
  } else {
    if (sites.length === 0) throw new Error('Bing: no verified site for ' + CONFIG.domain + ' under this API key. Verify the site in Bing Webmaster Tools first.');
    if (sites.length > 1) throw new Error('Bing: more than one verified variant of ' + CONFIG.domain + '. Set BING_SITE_URL to the exact URL of the one to read.');
    // Never persist the site-list response: it contains verification codes.
    chosen = sites[0].Url;
  }
  if (host_(chosen) !== host_(CONFIG.liveUrl)) notes.push('Bing: the property being read is ' + chosen + ' but the site lives at ' + CONFIG.liveUrl + '. Confirm this is the property that holds the data.');
  return chosen;
}
// Lead sheets (PROMETHEUS.md 13.5). Counts only: no name, email, message or any other field leaves the sheet.
function leads_(periods) {
  const ids = (prop_('LEAD_SHEET_IDS') || '').split(',').map(s => s.trim()).filter(String);
  return ids.map((id, index) => {
    // Sheets REST accepts spreadsheets.readonly; SpreadsheetApp.openById requires write scope.
    const response = api_('Lead sheets', 'https://sheets.googleapis.com/v4/spreadsheets/' + encodeURIComponent(id) + '/values/Contact?valueRenderOption=UNFORMATTED_VALUE&dateTimeRenderOption=FORMATTED_STRING');
    const values = response.values || [];
    const header = (values[0] || []).map(h => String(h).trim().toLowerCase());
    const col = {time: header.indexOf('timestamp'), ref: header.indexOf('ref'), qualified: header.indexOf('qualified'), name: header.indexOf('name')};
    if (col.time < 0) throw new Error('Lead sheet ' + (index + 1) + ': no "timestamp" column in row 1.');
    const out = {sheet: index + 1, hasRefColumn: col.ref >= 0, hasQualifiedColumn: col.qualified >= 0, periods: {}};
    Object.keys(periods).forEach(name => {
      const p = periods[name], byRef = {};
      let total = 0, qualified = 0;
      values.slice(1).forEach(row => {
        // The contact service stores ISO timestamps as text; Sheets may also return Date.
        const raw = row[col.time];
        const t = raw instanceof Date ? raw : (/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?Z$/.test(String(raw)) ? new Date(raw) : null);
        if (!t || !Number.isFinite(t.getTime())) throw new Error('Lead sheet ' + (index + 1) + ': invalid timestamp; counts unavailable.');
        const d = Utilities.formatDate(t, CONFIG.zone, 'yyyy-MM-dd');
        if (d < p.start || d > p.end) return;
        if (/^TEST-/i.test(String(col.ref >= 0 ? row[col.ref] : '')) || /^TEST-/i.test(String(col.name >= 0 ? row[col.name] : ''))) return;
        total++;
        if (col.qualified >= 0 && /^(y|yes|true|1)$/i.test(String(row[col.qualified]).trim())) qualified++;
        if (col.ref >= 0) { const rawRef = String(row[col.ref] || '');
          const ref = /^\/(fr|en)(\/[a-z0-9-]+)*\/$/.test(rawRef) ? rawRef : '(unknown)'; byRef[ref] = (byRef[ref] || 0) + 1; }
      });
      out.periods[name] = {start: p.start, end: p.end, leads: total, qualified: col.qualified >= 0 ? qualified : null, byRef: byRef};
    });
    return out;
  });
}
function empty_(value) {
  if (Array.isArray(value)) return value.length === 0;
  if (value && Array.isArray(value.sitemap)) return value.sitemap.length === 0;
  return !value || !Array.isArray(value.rows) || value.rows.length === 0;
}
// Migration is explicit. An unavailable summary never falls back to legacy rows.
function collectLeads_(periods, notes) {
  const source = prop_('CONTACT_LEADS_SOURCE') || 'legacy-contact-v1';
  if (source === 'retained-contact-files-v1') {
    const result = ndCandidateLeads_(periods);
    notes.push('Leads: retained contact dossiers, excluding TEST. Deletion reduces historical counts; these are not lifetime submissions. Qualification is unavailable.');
    return result;
  }
  if (source !== 'legacy-contact-v1') throw new Error('Unknown CONTACT_LEADS_SOURCE; no lead source read.');
  if (prop_('LEAD_SHEET_IDS')) return leads_(periods);
  notes.push('Leads: no lead sheet configured (LEAD_SHEET_IDS). Lead counts are unavailable, not zero.');
  return null;
}
function collect_(today) {
  const result = {generated: today, gaPeriods: periods_(day_(today, -3)), data: {}, errors: [], notes: []};
  // A request that really fails goes to errors. A request answered with no rows goes to notes:
  // it means "no data yet" or "nothing matched", never a measured zero.
  const job = (name, fn, source) => {
    try {
      result.data[name] = fn();
      if (source && empty_(result.data[name])) result.notes.push(source + ' ' + name + ': answered with no rows. Not evidence of zero.');
    } catch (e) { result.errors.push(name + ': ' + e.message); }
  };
  const ga = result.gaPeriods, events = CONFIG.conversions;
  const organic = {fieldName:'sessionDefaultChannelGroup',stringFilter:{matchType:'EXACT',value:'Organic Search'}};
  const assistants = {fieldName:'sessionSource',stringFilter:{matchType:'PARTIAL_REGEXP',value:CONFIG.aiSources,caseSensitive:false}};
  let gaReady = true;
  try { property_(); } catch (e) { gaReady = false; result.errors.push('ga4: ' + e.message); }
  if (gaReady) {
  Object.keys(ga).forEach(name => {
    job('sessions_' + name, () => ga_(ga[name]), 'GA4');
    job('engaged_sessions_' + name, () => ga_(ga[name], {metric:'engagedSessions'}), 'GA4');
    job('organic_sessions_' + name, () => ga_(ga[name], {filter:organic}), 'GA4');
    job('ai_referral_sessions_' + name, () => ga_(ga[name], {filter:assistants}), 'GA4');
    Object.keys(events).forEach(key => job(key + '_' + name, () => ga_(ga[name], {event:events[key]}), 'GA4'));
  });
  job('landing', () => ga_(ga.week, {dimension:'landingPage', limit:50}), 'GA4');
  job('organic_landing', () => ga_(ga.week, {dimension:'landingPage', filter:organic, limit:50}), 'GA4');
  job('channels', () => ga_(ga.week, {dimension:'sessionDefaultChannelGroup'}), 'GA4');
  job('ai_referral_sources', () => ga_(ga.week, {dimension:['sessionSource','landingPage'], filter:assistants, limit:50}), 'GA4');
  Object.keys(events).forEach(key => {
    job(key + '_pages', () => ga_(ga.week, {event:events[key], dimension:'pagePath', limit:50}), 'GA4');
    job(key + '_landing', () => ga_(ga.week, {event:events[key], dimension:'landingPage', limit:50}), 'GA4');
  });
  ['week','previous_week'].forEach(name => {
    job('campaign_sessions_' + name, () => ga_(ga[name], {dimension:['sessionSourceMedium','sessionCampaignName'], limit:100}), 'GA4');
    Object.keys(events).forEach(key => job('campaign_' + key + '_' + name, () => ga_(ga[name], {event:events[key], dimension:['sessionSourceMedium','sessionCampaignName'], limit:100}), 'GA4'));
  });
  }

  job('search_dates', () => search_({start:day_(today,-28), end:day_(today,-1)}, ['date']));
  const dates = ((result.data.search_dates || {}).rows || []).map(r => r.keys[0]).sort();
  if (dates.length) {
    const sp = result.searchPeriods = periods_(dates[dates.length - 1]);
    Object.keys(sp).forEach(name => job('search_' + name, () => search_(sp[name]), 'Search Console'));
    [['page',['page'],100],['query',['query'],250],['country',['country'],25],['device',['device'],5],
     ['appearance',['searchAppearance'],25],['page_query',['page','query'],500]]
      .forEach(x => job('search_' + x[0], () => search_(sp.week, x[1], x[2]), 'Search Console'));
    job('search_query_previous_week', () => search_(sp.previous_week, ['query'], 250), 'Search Console');
    job('search_page_month', () => search_(sp.month, ['page'], 250), 'Search Console');
    job('search_page_previous_month', () => search_(sp.previous_month, ['page'], 250), 'Search Console');
  } else if (result.data.search_dates) {
    result.notes.push('Search Console: no finalized data in the last 28 days; no search totals reported. Not evidence of zero impressions.');
  } else result.errors.push('Search Console: the latest finalized date could not be read; no search totals reported.');
  job('search_sitemaps', () => sitemaps_(), 'Search Console');

  let bingSite;
  try { bingSite = bingSite_(result.notes); result.bingSite = bingSite; }
  catch (e) { result.errors.push('bing_site: ' + e.message); }
  if (bingSite) {
    [['bing_traffic','GetRankAndTrafficStats'],['bing_queries','GetQueryStats'],['bing_pages','GetPageStats'],['bing_crawl_issues','GetCrawlIssues']]
      .forEach(pair => {
        try {
          result.data[pair[0]] = bing_(pair[1], bingSite);
          if (pair[0] !== 'bing_crawl_issues' && empty_(result.data[pair[0]])) result.notes.push('Bing ' + pair[0] + ': answered with an empty list. Not evidence of zero.');
        } catch (e) { result.errors.push(pair[0] + ': ' + e.message); }
      });
  }

  try {
    const leads = collectLeads_(ga, result.notes);
    if (leads !== null) result.data.leads = leads;
  } catch (e) { result.errors.push('leads: ' + e.message); }
  return result;
}
function github_(path, method, payload) {
  const token = prop_('GITHUB_TOKEN');
  if (!token) throw new Error('Missing GITHUB_TOKEN in Script Properties.');
  const options = {method: method || 'get', headers: {Authorization: 'Bearer ' + token, Accept: 'application/vnd.github+json', 'X-GitHub-Api-Version': '2022-11-28'}, muteHttpExceptions: true, followRedirects: false};
  if (payload) { options.contentType = 'application/json'; options.payload = JSON.stringify(payload); }
  let response;
  try { response = UrlFetchApp.fetch('https://api.github.com/repos/' + CONFIG.repo + path, options); }
  catch (_) { throw new Error('GitHub: network request failed.'); }
  const code = response.getResponseCode();
  if (code === 404 && method === 'get' && path.startsWith('/contents/')) return null;
  if (code === 401) throw new Error('GitHub HTTP 401: the token is wrong or has expired. Create a new fine-grained token and save it as GITHUB_TOKEN.');
  if (code === 403 || code === 404) throw new Error('GitHub HTTP ' + code + ': the token cannot reach ' + CONFIG.repo + '. The token must be limited to this repository with Contents: Read and write and Metadata: Read-only; in an organization it may need approval.');
  if (code < 200 || code >= 300) throw new Error('GitHub HTTP ' + code + ': the write was refused. Check branch rules on the default branch.');
  return JSON.parse(response.getContentText());
}
function uploadReport_(test) {
  const lock = LockService.getScriptLock(); lock.waitLock(10000);
  try {
    const repository = github_('', 'get');
    if (repository.private !== true || repository.full_name.toLowerCase() !== CONFIG.repo.toLowerCase()) throw new Error('Upload refused: ' + CONFIG.repo + ' must be the configured repository and must be private.');
    const now = new Date(), today = Utilities.formatDate(now, CONFIG.zone, 'yyyy-MM-dd');
    const props = PropertiesService.getUserProperties();
    if (!test && props.getProperty('lastGithubUploadDate') === today) { console.log('Already uploaded today.'); return; }
    if (test) props.deleteProperty('successfulGithubTest');
    const report = collect_(today);
    report.schemaVersion = 5;
    report.generatedAt = now.toISOString();
    report.runType = test ? 'test' : 'scheduled';
    report.sources = {ga4Property: prop_('GA4_PROPERTY_ID'), searchConsole: CONFIG.searchConsole, liveUrl: CONFIG.liveUrl, ga4TimeZone: CONFIG.zone, searchConsoleTimeZone: 'America/Los_Angeles', bingSite: report.bingSite || null};
    report.conversions = Object.keys(CONFIG.conversions).map(key => ({key: key, event: CONFIG.conversions[key], meaning: CONFIG.conversionMeaning[key] || 'meaning not recorded; see content/analytics.md'}));
    report.limits = {ga4ProcessingBufferDays: 3, ga4FinalityGuaranteed: false, gscDataState: 'final', rowLimits: 'Breakdowns are top rows only, never complete totals.',
      emptyRows: 'A request listed in notes answered with no rows. That is unknown or nothing matched, never a measured zero.',
      bing: {windows: 'As returned by Bing; raw dates retained. Not aligned to Google periods.', coverage: 'Traffic includes all Bing verticals; top queries and pages are not complete totals.'},
      aiReferrals: 'Sessions whose source matches the assistant list. Assistant traffic that arrives without a referrer is counted as Direct and is not included.',
      leads: prop_('CONTACT_LEADS_SOURCE') === 'retained-contact-files-v1'
        ? 'Counts of retained contact dossiers by Paris calendar day and page ref, excluding TEST. Deletion reduces historical counts. Not lifetime submissions. Qualification unavailable. No personal data exported.'
        : 'Counts of rows in the lead sheets by period and page ref. No personal data is collected.',
      unavailable: ['index status of single pages', 'AI citation sampling']};
    const path = 'data/' + today + (test ? '-test' : '') + '.json';
    const endpoint = '/contents/' + path;
    const previous = github_(endpoint + '?ref=' + encodeURIComponent(repository.default_branch), 'get');
    const body = {message: (test ? 'Test analytics collection for ' : 'Add analytics data for ') + today,
      content: Utilities.base64Encode(JSON.stringify(report, null, 2) + '\n', Utilities.Charset.UTF_8), branch: repository.default_branch};
    if (previous) body.sha = previous.sha;
    github_(endpoint, 'put', body);
    console.log('JSON uploaded: https://github.com/' + CONFIG.repo + '/blob/' + repository.default_branch + '/' + path);
    if (report.notes.length) console.log('Notes (not failures): ' + report.notes.length + '. A new site has no data yet; this is expected.');
    // The test gate blocks on real failures only. Notes never block.
    if (report.errors.length) throw new Error('Uploaded a partial file: ' + report.errors.length + ' real failures. Open the JSON and read the errors list.');
    props.setProperty(test ? 'successfulGithubTest' : 'lastGithubUploadDate', test ? JSON.stringify(CONFIG) : today);
  } finally { lock.releaseLock(); }
}
