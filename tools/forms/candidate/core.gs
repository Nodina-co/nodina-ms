/* Offline-tested candidate. No Google calls here. All editor-only helpers end
 * in underscore so google.script.run cannot invoke them. Never load v1 with it. */
var ND_SCHEMA = 'nodina-contact-file-v1';
var ND_HEADERS = ['timestamp', 'request_id', 'ref', 'locale', 'name', 'email', 'organization', 'offer', 'project', 'timing', 'consent_text', 'consent_version', 'consent_timestamp', 'utm_source', 'utm_medium', 'utm_campaign', 'notification_status'];
var ND_CONSENT = {fr: 'J’accepte que NODINA utilise ces informations pour répondre à ma demande.', en: 'I agree that NODINA may use this information to respond to my inquiry.'};
var ND_UUID = /^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}$/;

function ndEqual_(a, b) {
  a = String(a); b = String(b);
  var difference = a.length ^ b.length;
  for (var i = 0; i < Math.max(a.length, b.length); i++) difference |= (a.charCodeAt(i) || 0) ^ (b.charCodeAt(i) || 0);
  return difference === 0;
}

function ndIssue_(locale, now, ttl, crypto) {
  if (['fr', 'en'].indexOf(locale) < 0 || !Number.isInteger(ttl) || ttl < 60 || ttl > 86400) throw new Error('configuration');
  var id = crypto.uuid().toLowerCase();
  if (!ND_UUID.test(id)) throw new Error('configuration');
  var issued = Math.floor(now / 1000), expires = issued + ttl;
  var body = ['v1', id, issued, expires, locale].join('.');
  return {token: body + '.' + crypto.sign(body), request_id: id, expires_at: new Date(expires * 1000).toISOString()};
}

function ndVerify_(token, locale, now, crypto) {
  var parts = typeof token === 'string' && token.length <= 220 ? token.split('.') : [];
  if (parts.length !== 6 || parts[0] !== 'v1' || !ND_UUID.test(parts[1]) || parts[4] !== locale || !/^[A-Za-z0-9_-]{43}$/.test(parts[5])) return null;
  if (!/^\d{10}$/.test(parts[2]) || !/^\d{10}$/.test(parts[3])) return null;
  var issued = Number(parts[2]), expires = Number(parts[3]), seconds = Math.floor(now / 1000);
  if (issued > seconds || expires <= seconds || expires - issued < 60 || expires - issued > 86400) return null;
  if (!ndEqual_(parts[5], crypto.sign(parts.slice(0, 5).join('.')))) return null;
  return {id: parts[1], issued: issued, expires: expires, locale: locale};
}

function ndValidate_(p, now, crypto) {
  p = p || {};
  var claim = ndVerify_(p.receipt_token, p.locale, now, crypto);
  if (!claim || p.request_id !== claim.id || String(p.website || '').trim()) return {ok: false, code: 'invalid'};
  var data = {}, limits = {name: 120, email: 254, organization: 160, project: 5000, timing: 200};
  for (var key in limits) {
    var value = String(p[key] || '').trim();
    if (value.length > limits[key] || /[\x00-\x08\x0b\x0c\x0e-\x1f\x7f]/.test(value)) return {ok: false, code: 'invalid'};
    data[key] = value;
  }
  if (!data.name || !data.organization || data.project.length < 10 || !/^[^\s@,;<>]+@[^\s@,;<>]+\.[^\s@,;<>]+$/.test(data.email) || /[\r\n]/.test(data.name + data.email + data.organization)) return {ok: false, code: 'invalid'};
  if (p.consent !== 'yes' || p.consent_version !== 'contact-v1' || ['unknown', 'teams', 'systems', 'combined'].indexOf(p.offer) < 0) return {ok: false, code: 'invalid'};
  if (p.started_at) {
    var elapsed = now - Number(p.started_at);
    if (!isFinite(elapsed) || elapsed < 1500 || elapsed > 86400000) return {ok: false, code: 'invalid'};
  }
  data.request_id = claim.id; data.locale = p.locale; data.offer = p.offer;
  data.ref = /^\/(fr|en)(\/[a-z0-9-]+)*\/$/.test(p.ref || '') ? p.ref : '/' + p.locale + '/contact/';
  ['utm_source', 'utm_medium', 'utm_campaign'].forEach(function (key) { data[key] = String(p[key] || '').replace(/[\x00-\x1f\x7f]/g, '').slice(0, 100); });
  return {ok: true, data: data, claim: claim};
}

function ndPayloadHash_(data, crypto) {
  return crypto.sign(JSON.stringify(['payload-v1', data.ref, data.locale, data.name, data.email, data.organization, data.offer, data.project, data.timing, 'contact-v1', data.utm_source, data.utm_medium, data.utm_campaign]));
}

function ndRow_(data, timestamp) {
  // Adapters write RAW strings, including formula-looking text. Never USER_ENTERED.
  return [timestamp, data.request_id, data.ref, data.locale, data.name, data.email, data.organization, data.offer, data.project, data.timing, ND_CONSENT[data.locale], 'contact-v1', timestamp, data.utm_source, data.utm_medium, data.utm_campaign, 'pending'];
}

function ndRecord_(validation, d) {
  if (!validation.ok) return validation;
  var data = validation.data, claim = validation.claim, hash = ndPayloadHash_(data, d.crypto);
  var op = d.getOp(claim.id);
  if (op && op.kind === 'retired') return {ok: false, code: 'invalid'};
  if (op && (op.hash !== hash || op.expires !== claim.expires)) return {ok: false, code: 'invalid'};
  var matches = d.find(claim.id);
  if (matches.length > 1) throw new Error('ambiguous');
  var file = matches[0];
  if (!file && op && op.fileId) file = d.getFile(op.fileId);
  if (!file && op) throw new Error('creation uncertain');
  if (!file) {
    d.invalidate();
    op = {kind: 'creating', hash: hash, expires: claim.expires, timestamp: new Date(d.now()).toISOString()};
    d.putOp(claim.id, op); // Durable before the non-idempotent Sheets creation.
    file = d.create({id: claim.id, hash: hash, issued: claim.issued, expires: claim.expires, timestamp: op.timestamp});
    op.fileId = file.id; d.putOp(claim.id, op);
  }
  d.assertFile(file, claim, file.hash);
  if (file.hash !== hash) return {ok: false, code: 'invalid'};
  if (file.trashed) return {ok: false, code: 'invalid'};
  if (file.state !== 'complete') {
    d.invalidate();
    var row = ndRow_(data, file.timestamp);
    d.write(file, row);
    if (JSON.stringify(d.readRow(file)) !== JSON.stringify(row)) throw new Error('readback');
    d.complete(file); file.state = 'complete';
  } else {
    // Verify the receipt still contains the acknowledged content, not a stale flag.
    var saved = d.readRow(file), expected = ndRow_(data, file.timestamp);
    if (!Array.isArray(saved) || saved.length !== ND_HEADERS.length || JSON.stringify(saved.slice(0, 16)) !== JSON.stringify(expected.slice(0, 16))) throw new Error('receipt changed');
  }
  var status = d.readStatus(file);
  if (['pending', 'sent', 'failed', 'unknown'].indexOf(status) < 0) throw new Error('notification state');
  if (status === 'pending') {
    // Persist unknown BEFORE MailApp. A timeout cannot cause a second send.
    d.mark(file, 'unknown');
    try {
      if (!d.canNotify()) d.mark(file, 'failed');
      else {
        d.notify({subject: 'NODINA · Nouvelle demande', body: 'Référence : ' + claim.id + '\n\nDossier privé : https://docs.google.com/spreadsheets/d/' + file.id + '/edit'});
        d.mark(file, 'sent');
      }
    } catch (error) { /* unknown is intentionally retained; no automatic resend */ }
  }
  d.removeOp(claim.id);
  return {ok: true};
}

function ndRetire_(file, expectedId, d) {
  // Preparation only: never deletes a file. Caller owns the lock and approval.
  if (!ND_UUID.test(expectedId) || file.requestId !== expectedId || file.state !== 'complete' || file.trashed) throw new Error('scope');
  d.assertRetirementFile(file);
  d.invalidate();
  if (file.expires * 1000 > d.now()) d.putOp(expectedId, {kind: 'retired', expires: file.expires});
  else d.removeOp(expectedId);
  return {prepared: true, temporary_until: new Date(file.expires * 1000).toISOString()};
}

function ndCounts_(files, d) {
  var seen = {}, buckets = {};
  files.forEach(function (file) {
    if (seen[file.requestId]) throw new Error('duplicate reference');
    seen[file.requestId] = true;
    if (file.state !== 'complete' || file.trashed || d.isRetired(file.requestId)) throw new Error('incomplete coverage');
    d.assertRetirementFile(file);
    var row = d.readMetrics(file);
    if (!row || !/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/.test(row.timestamp) || !Number.isFinite(Date.parse(row.timestamp)) || new Date(row.timestamp).toISOString() !== row.timestamp || !/^\/(fr|en)(\/[a-z0-9-]+)*\/$/.test(row.ref)) throw new Error('metrics schema');
    if (/^TEST-/i.test(row.name) || /^TEST-/i.test(row.ref)) return;
    var day = d.day(row.timestamp), key = day + '|' + row.ref;
    if (!buckets[key]) buckets[key] = [day, row.ref, 0];
    buckets[key][2]++;
  });
  return Object.keys(buckets).sort().map(function (key) { return buckets[key]; });
}
