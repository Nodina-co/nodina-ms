/* NODINA contact. Set CONTACT_SHEET_ID and CONTACT_NOTIFICATION_EMAIL in
 * Apps Script > Project settings > Script properties. No credentials in Git.
 * Every change needs a new deployment version; saving alone is not enough.
 */
var CONTACT_HEADERS = ['timestamp', 'request_id', 'ref', 'locale', 'name', 'email', 'organization', 'offer', 'project', 'timing', 'consent_text', 'consent_version', 'consent_timestamp', 'utm_source', 'utm_medium', 'utm_campaign', 'notification_status'];
var CONTACT_CONSENT = {
  fr: 'J’accepte que NODINA utilise ces informations pour répondre à ma demande.',
  en: 'I agree that NODINA may use this information to respond to my inquiry.'
};

function validateContact(params, now) {
  var p = params || {};
  if (String(p.website || '').trim()) return { ok: false, code: 'invalid' };
  var limits = { name: 120, email: 254, organization: 160, project: 5000, timing: 200 };
  var data = {};
  for (var key in limits) {
    var value = String(p[key] || '').trim();
    if (value.length > limits[key] || /[\x00-\x08\x0b\x0c\x0e-\x1f\x7f]/.test(value)) return { ok: false, code: 'invalid' };
    data[key] = value;
  }
  if (!data.name || !data.organization || data.project.length < 10 || !/^[^\s@,;<>]+@[^\s@,;<>]+\.[^\s@,;<>]+$/.test(data.email)) return { ok: false, code: 'invalid' };
  if (/[\r\n]/.test(data.name + data.email + data.organization)) return { ok: false, code: 'invalid' };
  if (p.consent !== 'yes' || p.consent_version !== 'contact-v1' || ['fr', 'en'].indexOf(p.locale) < 0 || ['unknown', 'teams', 'systems', 'combined'].indexOf(p.offer) < 0) return { ok: false, code: 'invalid' };
  // JS adds timing; plain HTML submissions deliberately work without it.
  if (p.started_at) {
    var elapsed = now - Number(p.started_at);
    if (!isFinite(elapsed) || elapsed < 1500 || elapsed > 86400000) return { ok: false, code: 'invalid' };
  }
  var requestId = String(p.request_id || '');
  if (requestId && !/^[a-f0-9-]{36}$/i.test(requestId)) return { ok: false, code: 'invalid' };
  data.request_id = requestId;
  data.locale = p.locale;
  data.offer = p.offer;
  data.ref = /^\/(fr|en)(\/[a-z0-9-]+)*\/$/.test(p.ref || '') ? p.ref : '/' + p.locale + '/contact/';
  ['utm_source', 'utm_medium', 'utm_campaign'].forEach(function (key) {
    data[key] = String(p[key] || '').replace(/[\x00-\x1f\x7f]/g, '').slice(0, 100);
  });
  return { ok: true, data: data };
}

function sheetText(value) {
  var text = String(value);
  return /^[\s]*[=+@-]/.test(text) ? "'" + text : text;
}

function recordContact(data, dependencies) {
  // Lock covers duplicate detection and append. An ambiguous network retry
  // with the same request_id never creates a second lead or notification.
  var existing = data.request_id && dependencies.find(data.request_id);
  if (existing) return { ok: true };
  var now = dependencies.now();
  var id = data.request_id || dependencies.uuid();
  var row = [now, id, data.ref, data.locale, data.name, data.email, data.organization, data.offer, data.project, data.timing,
    CONTACT_CONSENT[data.locale], 'contact-v1', now, data.utm_source, data.utm_medium, data.utm_campaign, 'pending'];
  var rowNumber = dependencies.append(row.map(sheetText));
  try {
    dependencies.notify({
      subject: 'NODINA · ' + data.name + ' · ' + data.offer,
      replyTo: data.email,
      body: ['Nouvelle demande NODINA', 'Référence : ' + id, 'Nom : ' + data.name, 'Email : ' + data.email,
        'Organisation : ' + data.organization, 'Offre : ' + data.offer, 'Contexte : ' + data.project,
        'Calendrier : ' + data.timing, 'Langue : ' + data.locale, 'Page : ' + data.ref].join('\n\n')
    });
    dependencies.mark(rowNumber, 'sent');
  } catch (error) {
    // The inquiry is safely recorded even when the owner's mail quota fails.
    dependencies.mark(rowNumber, 'failed');
  }
  return { ok: true };
}

function doPost(event) {
  var params = event && event.parameter || {};
  if (!event || event.contentLength > 40000) return contactResponse({ ok: false, code: 'invalid' }, params);
  var validation = validateContact(params, Date.now());
  if (!validation.ok) return contactResponse(validation, params);
  var lock = LockService.getScriptLock();
  var acquired = false;
  var result;
  try {
    var properties = PropertiesService.getScriptProperties();
    var sheetId = properties.getProperty('CONTACT_SHEET_ID');
    var recipient = properties.getProperty('CONTACT_NOTIFICATION_EMAIL');
    if (!sheetId || !/^[^\s@,;<>]+@[^\s@,;<>]+\.[^\s@,;<>]+$/.test(recipient || '')) throw new Error('configuration');
    acquired = lock.tryLock(10000);
    if (!acquired) throw new Error('busy');
    var sheet = SpreadsheetApp.openById(sheetId).getSheetByName('Contact');
    if (!sheet || JSON.stringify(sheet.getRange(1, 1, 1, CONTACT_HEADERS.length).getValues()[0]) !== JSON.stringify(CONTACT_HEADERS)) throw new Error('headers');
    result = recordContact(validation.data, {
      now: function () { return new Date().toISOString(); },
      uuid: function () { return Utilities.getUuid(); },
      find: function (id) {
        return sheet.getLastRow() > 1 && sheet.getRange(2, 2, sheet.getLastRow() - 1, 1).createTextFinder(id).matchEntireCell(true).findNext();
      },
      append: function (row) { sheet.appendRow(row); SpreadsheetApp.flush(); return sheet.getLastRow(); },
      notify: function (message) { message.to = recipient; MailApp.sendEmail(message); },
      mark: function (row, status) { sheet.getRange(row, CONTACT_HEADERS.length).setValue(status); }
    });
  } catch (error) {
    result = { ok: false, code: 'unavailable' };
  } finally {
    if (acquired) lock.releaseLock();
  }
  return contactResponse(result, params);
}

function contactResponse(result, params) {
  if (params.response_format === 'json') return ContentService.createTextOutput(JSON.stringify(result)).setMimeType(ContentService.MimeType.JSON);
  var fr = params.locale !== 'en';
  var title = result.ok ? (fr ? 'Demande enregistrée' : 'Inquiry recorded') : (fr ? 'Envoi non confirmé' : 'Submission not confirmed');
  var text = result.ok ? (fr ? 'Nous reviendrons vers vous pour préciser la suite.' : 'We will get back to you to discuss next steps.') : (fr ? 'Revenez au formulaire, vérifiez les champs et réessayez.' : 'Return to the form, check the fields and try again.');
  // Plain POST fallback contains no visitor data, no executable interpolation,
  // and no user-controlled redirect. Google hosts this confirmation page.
  return HtmlService.createHtmlOutput('<!doctype html><html lang="' + (fr ? 'fr' : 'en') + '"><head><meta name="robots" content="noindex,nofollow"><title>' + title + '</title></head><body><main><h1>' + title + '</h1><p>' + text + '</p><a target="_top" href="https://nodina.com/' + (fr ? 'fr' : 'en') + '/contact/">NODINA</a></main></body></html>').setTitle(title);
}
