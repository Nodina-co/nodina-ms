/* Candidate reader for the Reporting project. Uses only its existing Sheets
 * readonly scope through api_(). No Drive inventory or visitor data returned. */
function ndParseCounts_(before, rows, after, periods, now, maxAgeSeconds) {
  var header = ['schema', 'status', 'computed_at', 'generation'];
  if (JSON.stringify(before) !== JSON.stringify(after) || JSON.stringify(before[0]) !== JSON.stringify(header) || !before[1] || before[1].length !== 4 || before[1][0] !== 'nodina-counts-v1' || before[1][1] !== 'complete' || !before[1][3]) throw new Error('Contact summary unavailable');
  var at = Date.parse(before[1][2]);
  if (!Number.isFinite(at) || new Date(at).toISOString() !== before[1][2] || !Number.isInteger(maxAgeSeconds) || maxAgeSeconds < 60 || maxAgeSeconds > 86400 || now < at || now - at > maxAgeSeconds * 1000) throw new Error('Contact summary stale');
  if (!Array.isArray(rows) || JSON.stringify(rows[0]) !== JSON.stringify(['day', 'ref', 'leads']) || rows.length > 10001) throw new Error('Contact summary schema');
  function validDay(day) { return typeof day === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(day) && Number.isFinite(Date.parse(day + 'T00:00:00.000Z')) && new Date(day + 'T00:00:00.000Z').toISOString().slice(0, 10) === day; }
  var seen = {}, values = rows.slice(1);
  values.forEach(function (r) {
    if (r.length !== 3 || !validDay(r[0]) || !/^\/(fr|en)(\/[a-z0-9-]+)*\/$/.test(r[1]) || typeof r[2] !== 'number' || !Number.isSafeInteger(r[2]) || r[2] < 0 || seen[r[0] + '|' + r[1]]) throw new Error('Contact summary schema');
    seen[r[0] + '|' + r[1]] = true;
  });
  var out = {source: 'retained-contact-files-v1', hasRefColumn: true, hasQualifiedColumn: false, periods: {}};
  // Only authored page paths may cross into the statistical reporting repository.
  var publicRefs = ['/fr/', '/fr/selection-des-talents/', '/fr/profils/', '/fr/manifeste/', '/fr/contact/', '/fr/confidentialite/', '/fr/cookies/', '/fr/mentions-legales/', '/en/', '/en/vetting/', '/en/engineers/', '/en/manifesto/', '/en/contact/', '/en/privacy/', '/en/cookies/', '/en/legal-notice/'];
  Object.keys(periods).forEach(function (name) {
    var p = periods[name];
    if (!validDay(p.start) || !validDay(p.end) || p.start > p.end) throw new Error('Contact period');
    var total = 0, refs = {};
    values.forEach(function (r) { if (r[0] >= p.start && r[0] <= p.end) { total += r[2]; if (!Number.isSafeInteger(total)) throw new Error('Contact count'); var ref = publicRefs.indexOf(r[1]) >= 0 ? r[1] : '(unknown)'; refs[ref] = (refs[ref] || 0) + r[2]; } });
    out.periods[name] = {start: p.start, end: p.end, leads: total, qualified: null, byRef: refs};
  });
  return [out];
}

function ndReadCounts_(periods, id, maxAge) {
  if (!/^[A-Za-z0-9_-]+$/.test(id || '') || !Number.isInteger(maxAge) || maxAge < 60 || maxAge > 86400) throw new Error('Contact summary configuration');
  var base = 'https://sheets.googleapis.com/v4/spreadsheets/' + encodeURIComponent(id) + '/values/';
  function get(range) { return api_('Contact summary', base + encodeURIComponent(range) + '?valueRenderOption=UNFORMATTED_VALUE').values || []; }
  var before = get('Snapshot!A1:D2'), rows = get('Counts!A1:C10001'), after = get('Snapshot!A1:D2');
  return ndParseCounts_(before, rows, after, periods, Date.now(), maxAge);
}

function ndCandidateLeads_(periods) {
  return ndReadCounts_(periods, prop_('CONTACT_SUMMARY_ID'), Number(prop_('CONTACT_SUMMARY_MAX_AGE_SECONDS')));
}
