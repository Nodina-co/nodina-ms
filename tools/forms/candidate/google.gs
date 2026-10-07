/* Google adapter: Advanced Drive v3 and Sheets v4, drive.file only.
 * No DriveApp, SpreadsheetApp, Gmail read/write, or deletion endpoint. */
function ndSettings_(needsFiles) {
  var p = PropertiesService.getScriptProperties();
  var ttl = Number(p.getProperty('ND_TOKEN_TTL_SECONDS'));
  var owner = p.getProperty('ND_OWNER_EMAIL');
  if (p.getProperty('ND_MODE') !== 'rehearsal' || !Number.isInteger(ttl) || ttl < 60 || ttl > 86400 || !/^[^\s@,;<>]+@[^\s@,;<>]+\.[^\s@,;<>]+$/.test(owner || '')) throw new Error('configuration');
  var cfg = {properties: p, owner: owner, recipient: owner, ttl: ttl, folderId: p.getProperty('ND_FOLDER_ID'), summaryId: p.getProperty('ND_SUMMARY_ID'), key: p.getProperty('ND_SIGNING_KEY')};
  if (needsFiles && (!cfg.folderId || !cfg.summaryId || !cfg.key || cfg.key.length < 64)) throw new Error('configuration');
  return cfg;
}

function ndCrypto_(cfg) {
  return {uuid: function () { return Utilities.getUuid(); }, sign: function (text) {
    return Utilities.base64EncodeWebSafe(Utilities.computeHmacSha256Signature(text, cfg.key, Utilities.Charset.UTF_8)).replace(/=+$/, '');
  }};
}

function ndAllPages_(fetch) {
  var result = [], page, token, seen = {};
  do {
    page = fetch(token);
    if (!page || page.incompleteSearch) throw new Error('coverage');
    result = result.concat(page.items || []);
    if (result.length > 1000) throw new Error('limit');
    token = page.nextPageToken;
    if (token && seen[token]) throw new Error('pagination');
    if (token) seen[token] = true;
  } while (token);
  return result;
}

function ndFile_(id) {
  var f = Drive.Files.get(id, {fields: 'id,name,mimeType,parents,trashed,driveId,modifiedTime,owners(emailAddress),appProperties'});
  var a = f.appProperties || {};
  return {id: f.id, name: f.name, mimeType: f.mimeType, parents: f.parents || [], trashed: !!f.trashed, driveId: f.driveId, owners: f.owners || [], modifiedTime: f.modifiedTime, schema: a.nd_schema, kind: a.nd_kind, requestId: a.request_id, hash: a.payload_hash, state: a.receipt_state, timestamp: a.received_at, issued: Number(a.issued), expires: Number(a.expires)};
}

function ndPrivate_(file, cfg) {
  if (file.driveId || file.owners.length !== 1 || file.owners[0].emailAddress !== cfg.owner) throw new Error('owner');
  var permissions = ndAllPages_(function (token) {
    var options = {pageSize: 100, fields: 'nextPageToken,permissions(id,type,role,emailAddress)'};
    if (token) options.pageToken = token;
    var page = Drive.Permissions.list(file.id, options);
    return {items: page.permissions || [], nextPageToken: page.nextPageToken};
  });
  if (permissions.length !== 1 || permissions[0].type !== 'user' || permissions[0].role !== 'owner' || permissions[0].emailAddress !== cfg.owner) throw new Error('sharing');
}

function ndFolder_(cfg) {
  var folder = ndFile_(cfg.folderId);
  if (folder.schema !== ND_SCHEMA || folder.kind !== 'requests' || folder.mimeType !== 'application/vnd.google-apps.folder' || folder.trashed) throw new Error('folder');
  ndPrivate_(folder, cfg);
}

function ndAssertRequest_(file, cfg) {
  if (file.schema !== ND_SCHEMA || file.kind !== 'request' || file.mimeType !== 'application/vnd.google-apps.spreadsheet' || file.parents.length !== 1 || file.parents[0] !== cfg.folderId || !ND_UUID.test(file.requestId || '') || !['writing', 'complete'].includes(file.state) || !Number.isInteger(file.issued) || !Number.isInteger(file.expires) || file.expires - file.issued < 60 || file.expires - file.issued > 86400 || !/^\d{4}-\d{2}-\d{2}T/.test(file.timestamp || '') || !/^[A-Za-z0-9_-]{43}$/.test(file.hash || '')) throw new Error('scope');
  ndPrivate_(file, cfg);
}

function ndList_(cfg, requestId, activeOnly) {
  // Configured IDs and canonical UUIDs are validated before building a query.
  if (!/^[A-Za-z0-9_-]+$/.test(cfg.folderId) || (requestId && !ND_UUID.test(requestId))) throw new Error('scope');
  var q = "'" + cfg.folderId + "' in parents and appProperties has { key='nd_schema' and value='" + ND_SCHEMA + "' } and appProperties has { key='nd_kind' and value='request' }";
  if (requestId) q += " and appProperties has { key='request_id' and value='" + requestId + "' }";
  if (activeOnly) q += ' and trashed = false';
  return ndAllPages_(function (token) {
    var options = {q: q, spaces: 'drive', pageSize: 100, fields: 'nextPageToken,incompleteSearch,files(id)'};
    if (token) options.pageToken = token;
    var page = Drive.Files.list(options);
    return {items: page.files || [], nextPageToken: page.nextPageToken, incompleteSearch: page.incompleteSearch};
  }).map(function (f) { return ndFile_(f.id); });
}

function ndOpStore_(cfg) {
  return {
    get: function (id) { var raw = cfg.properties.getProperty('ND_OP_' + id); return raw ? JSON.parse(raw) : null; },
    put: function (id, op) {
      if (!ND_UUID.test(id)) throw new Error('scope');
      var key = 'ND_OP_' + id, all = cfg.properties.getProperties();
      if (!Object.prototype.hasOwnProperty.call(all, key) && Object.keys(all).filter(function (k) { return k.indexOf('ND_OP_') === 0; }).length >= 100) throw new Error('operations limit');
      cfg.properties.setProperty(key, JSON.stringify(op));
    },
    remove: function (id) { cfg.properties.deleteProperty('ND_OP_' + id); }
  };
}

function ndSummaryFile_(cfg) {
  var f = ndFile_(cfg.summaryId);
  if (f.schema !== ND_SCHEMA || f.kind !== 'summary' || f.mimeType !== 'application/vnd.google-apps.spreadsheet' || f.trashed) throw new Error('summary');
  ndPrivate_(f, cfg);
}

function ndInvalidateSummary_(cfg) {
  ndSummaryFile_(cfg);
  Sheets.Spreadsheets.Values.update({values: [['nodina-counts-v1', 'unavailable', new Date().toISOString(), Utilities.getUuid()]]}, cfg.summaryId, 'Snapshot!A2:D2', {valueInputOption: 'RAW'});
}

function ndCells_(values) {
  return values.map(function (row) { return {values: row.map(function (v) { return {userEnteredValue: typeof v === 'number' ? {numberValue: v} : {stringValue: String(v)}}; })}; });
}

function ndInitializeSheets_(id, secondTab) {
  var current = Sheets.Spreadsheets.get(id, {fields: 'sheets.properties'}).sheets || [];
  if (current.length !== 1) throw new Error('new spreadsheet');
  Sheets.Spreadsheets.batchUpdate({requests: [
    {updateSpreadsheetProperties: {properties: {locale: 'fr_FR', timeZone: 'Europe/Paris'}, fields: 'locale,timeZone'}},
    {updateSheetProperties: {properties: {sheetId: current[0].properties.sheetId, title: secondTab === 'Conservation' ? 'Contact' : 'Snapshot', gridProperties: {rowCount: secondTab === 'Conservation' ? 10 : 3, columnCount: secondTab === 'Conservation' ? 17 : 4, frozenRowCount: 1, hideGridlines: true}}, fields: 'title,gridProperties'}},
    {addSheet: {properties: {sheetId: 20261006, title: secondTab, gridProperties: {rowCount: secondTab === 'Conservation' ? 10 : 10001, columnCount: secondTab === 'Conservation' ? 9 : 3, frozenRowCount: 1, hideGridlines: true}}}}
  ]}, id);
}

function ndDependencies_(cfg) {
  ndFolder_(cfg);
  var ops = ndOpStore_(cfg);
  return {
    crypto: ndCrypto_(cfg), now: function () { return Date.now(); }, getOp: ops.get, putOp: ops.put, removeOp: ops.remove,
    invalidate: function () { ndInvalidateSummary_(cfg); },
    find: function (id) { return ndList_(cfg, id, false); }, getFile: ndFile_,
    assertFile: function (f, claim, hash) { ndAssertRequest_(f, cfg); if (f.requestId !== claim.id || f.hash !== hash || f.expires !== claim.expires || f.issued !== claim.issued) throw new Error('mismatch'); },
    assertRetirementFile: function (f) { ndAssertRequest_(f, cfg); },
    create: function (m) {
      var f = Drive.Files.create({name: 'NODINA — Demande — ' + m.id, mimeType: 'application/vnd.google-apps.spreadsheet', parents: [cfg.folderId], appProperties: {nd_schema: ND_SCHEMA, nd_kind: 'request', request_id: m.id, payload_hash: m.hash, receipt_state: 'writing', received_at: m.timestamp, issued: String(m.issued), expires: String(m.expires)}}, null, {ignoreDefaultVisibility: true, fields: 'id'});
      return ndFile_(f.id);
    },
    write: function (f, row) {
      var tabs = Sheets.Spreadsheets.get(f.id, {fields: 'sheets.properties'}).sheets || [];
      if (tabs.length === 1 && tabs[0].properties.title !== 'Contact') ndInitializeSheets_(f.id, 'Conservation');
      // Recheck access immediately before writing any visitor fields.
      ndFolder_(cfg); ndPrivate_(ndFile_(f.id), cfg);
      // Always resume to exactly the same strings; no USER_ENTERED parsing.
      Sheets.Spreadsheets.Values.batchUpdate({valueInputOption: 'RAW', data: [
        {range: 'Contact!A1:Q2', values: [ND_HEADERS, row]},
        {range: 'Conservation!A1:I2', values: [['reference', 'statut', 'dernier_echange', 'echeance', 'responsable', 'classeur', 'messagerie', 'autres_copies', 'exception'], [f.requestId, 'À examiner', '', '', cfg.owner, 'À vérifier', 'À vérifier', 'À vérifier', '']]}
      ]}, f.id);
      // Calendar-based due date; fr_FR USER_ENTERED formulas require semicolons.
      Sheets.Spreadsheets.Values.update({values: [['=IF(AND(B2="Sans suite";ISNUMBER(C2);C2>0;C2<=TODAY());EDATE(C2;12);"")']]}, f.id, 'Conservation!D2', {valueInputOption: 'USER_ENTERED'});
    },
    readRow: function (f) {
      var values = Sheets.Spreadsheets.Values.get(f.id, 'Contact!A1:Q2', {valueRenderOption: 'UNFORMATTED_VALUE'}).values || [];
      if (JSON.stringify(values[0]) !== JSON.stringify(ND_HEADERS)) throw new Error('headers');
      return (values[1] || []).map(String);
    },
    complete: function (f) { Drive.Files.update({appProperties: {receipt_state: 'complete'}}, f.id, null, {fields: 'id'}); },
    readStatus: function (f) { var v = Sheets.Spreadsheets.Values.get(f.id, 'Contact!Q2', {valueRenderOption: 'UNFORMATTED_VALUE'}).values || []; return v[0] && v[0][0]; },
    mark: function (f, status) { Sheets.Spreadsheets.Values.update({values: [[status]]}, f.id, 'Contact!Q2', {valueInputOption: 'RAW'}); },
    canNotify: function () { return MailApp.getRemainingDailyQuota() > 0; },
    notify: function (message) { MailApp.sendEmail({to: cfg.recipient, subject: message.subject, body: message.body}); },
    isRetired: function (id) { var op = ops.get(id); return !!op && op.kind === 'retired'; },
    readMetrics: function (f) { var v = Sheets.Spreadsheets.Values.get(f.id, 'Contact!A1:E2', {valueRenderOption: 'UNFORMATTED_VALUE'}).values || []; if (JSON.stringify(v[0]) !== JSON.stringify(ND_HEADERS.slice(0, 5)) || !v[1] || v[1][1] !== f.requestId) throw new Error('metrics'); return {timestamp: v[1][0], ref: v[1][2], name: v[1][4]}; },
    day: function (timestamp) { return Utilities.formatDate(new Date(timestamp), 'Europe/Paris', 'yyyy-MM-dd'); }
  };
}

function ndInitializeRehearsal_() {
  // Editor only. Run only after JD approves creating the isolated test storage.
  var cfg = ndSettings_(false), p = cfg.properties;
  if (p.getProperty('ND_SETUP_PENDING')) throw new Error('setup uncertain: reconcile in Drive before retry');
  if (!cfg.key) p.setProperty('ND_SIGNING_KEY', [Utilities.getUuid(), Utilities.getUuid(), Utilities.getUuid(), Utilities.getUuid()].join(''));
  function create(kind, mimeType, title, property) {
    if (p.getProperty(property)) return;
    p.setProperty('ND_SETUP_PENDING', kind);
    var f = Drive.Files.create({name: title, mimeType: mimeType, appProperties: {nd_schema: ND_SCHEMA, nd_kind: kind}}, null, {ignoreDefaultVisibility: true, fields: 'id'});
    p.setProperty(property, f.id);
    ndPrivate_(ndFile_(f.id), cfg);
    if (kind === 'summary') {
      ndInitializeSheets_(f.id, 'Counts');
      Sheets.Spreadsheets.Values.update({values: [['schema', 'status', 'computed_at', 'generation'], ['nodina-counts-v1', 'unavailable', new Date().toISOString(), Utilities.getUuid()]]}, f.id, 'Snapshot!A1:D2', {valueInputOption: 'RAW'});
      Sheets.Spreadsheets.Values.update({values: [['day', 'ref', 'leads']]}, f.id, 'Counts!A1:C1', {valueInputOption: 'RAW'});
    }
    p.deleteProperty('ND_SETUP_PENDING');
  }
  create('requests', 'application/vnd.google-apps.folder', 'NODINA — RECETTE — Dossiers individuels', 'ND_FOLDER_ID');
  create('summary', 'application/vnd.google-apps.spreadsheet', 'NODINA — RECETTE — Synthèse des comptes', 'ND_SUMMARY_ID');
  ndFolder_(ndSettings_(true));
  return {ready: true}; // Do not print configuration, signing key or file inventory.
}

function ndPrepareRetirement_() {
  // Editor only; prepares a tombstone, NEVER deletes. IDs explicitly set by JD.
  var cfg = ndSettings_(true), id = cfg.properties.getProperty('ND_REVIEW_FILE_ID'), ref = cfg.properties.getProperty('ND_REVIEW_REQUEST_ID');
  var lock = LockService.getScriptLock(); if (!lock.tryLock(10000)) throw new Error('busy');
  try { return ndRetire_(ndFile_(id), ref, ndDependencies_(cfg)); } finally { lock.releaseLock(); }
}

function ndClearExpiredRetirements_() {
  var cfg = ndSettings_(true), lock = LockService.getScriptLock();
  if (!lock.tryLock(10000)) throw new Error('busy');
  try {
    var all = cfg.properties.getProperties(), removed = 0;
    Object.keys(all).filter(function (key) { return key.indexOf('ND_OP_') === 0; }).forEach(function (key) {
      var op = JSON.parse(all[key]);
      if (op.kind === 'retired' && Number.isInteger(op.expires) && op.expires * 1000 <= Date.now()) { cfg.properties.deleteProperty(key); removed++; }
    });
    return {removed: removed};
  } finally { lock.releaseLock(); }
}

function ndRebuildSummary_() {
  var cfg = ndSettings_(true), lock = LockService.getScriptLock();
  if (!lock.tryLock(10000)) throw new Error('busy');
  try {
    ndInvalidateSummary_(cfg);
    var d = ndDependencies_(cfg), files = ndList_(cfg, null, true);
    var signature = function (list) { return JSON.stringify(list.map(function (f) { return [f.id, f.modifiedTime]; }).sort()); };
    var before = signature(files), counts = ndCounts_(files, d);
    if (before !== signature(ndList_(cfg, null, true))) throw new Error('snapshot changed');
    if (counts.length > 10000) throw new Error('summary limit');
    var sheets = Sheets.Spreadsheets.get(cfg.summaryId, {fields: 'sheets.properties'}).sheets;
    var snapshot = sheets.find(function (s) { return s.properties.title === 'Snapshot'; }), table = sheets.find(function (s) { return s.properties.title === 'Counts'; });
    if (!snapshot || !table) throw new Error('summary schema');
    Sheets.Spreadsheets.batchUpdate({requests: [
      {repeatCell: {range: {sheetId: table.properties.sheetId}, cell: {}, fields: 'userEnteredValue'}},
      {updateCells: {start: {sheetId: table.properties.sheetId, rowIndex: 0, columnIndex: 0}, rows: ndCells_([['day', 'ref', 'leads']].concat(counts)), fields: 'userEnteredValue'}},
      {updateCells: {start: {sheetId: snapshot.properties.sheetId, rowIndex: 1, columnIndex: 0}, rows: ndCells_([['nodina-counts-v1', 'complete', new Date().toISOString(), Utilities.getUuid()]]), fields: 'userEnteredValue'}}
    ]}, cfg.summaryId);
    return {complete: true, buckets: counts.length};
  } finally { lock.releaseLock(); }
}
