function ndEscape_(value) {
  return String(value).replace(/[&<>"']/g, function (c) { return {'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'}[c]; });
}

function ndJson_(value) { return ContentService.createTextOutput(JSON.stringify(value)).setMimeType(ContentService.MimeType.JSON); }

function ndResult_(result, params) {
  // Whitelist the public response: never return an adapter error or file ID.
  var safe = result.ok === true ? {ok: true} : {ok: false, code: result.code === 'invalid' ? 'invalid' : 'unavailable'};
  if (params.response_format === 'json') return ndJson_(safe);
  var fr = params.locale !== 'en';
  var title = safe.ok ? (fr ? 'Demande enregistrée' : 'Inquiry recorded') : (fr ? 'Envoi non confirmé' : 'Submission not confirmed');
  var text = safe.ok ? (fr ? 'Nous reviendrons vers vous pour préciser la suite.' : 'We will get back to you to discuss next steps.') : (fr ? 'Revenez au formulaire, vérifiez les champs et réessayez.' : 'Return to the form, check the fields and try again.');
  return HtmlService.createHtmlOutput('<!doctype html><html lang="' + (fr ? 'fr' : 'en') + '"><head><meta name="robots" content="noindex,nofollow"><title>' + title + '</title></head><body><main><h1>' + title + '</h1><p>' + text + '</p><a target="_top" href="https://nodina.com/' + (fr ? 'fr' : 'en') + '/contact/">NODINA</a></main></body></html>').setTitle(title);
}

function ndHostedForm_(locale, receipt, endpoint) {
  // Workspace and standard service URLs differ; dev is the private editor preview.
  if (!/^https:\/\/script\.google\.com\/(?:macros\/s|a\/(?:macros\/nodina\.com\/s|nodina\.com\/macros\/s))\/[A-Za-z0-9_-]+\/(?:exec|dev)$/.test(endpoint || '')) throw new Error('endpoint');
  var fr = locale === 'fr', labels = fr ? ['Nom', 'E-mail professionnel', 'Organisation', 'Besoin', 'Contexte du projet', 'Calendrier envisagé', 'Envoyer'] : ['Name', 'Work email', 'Organization', 'Need', 'Project context', 'Expected timing', 'Send'];
  function field(name, label, extra) { return '<p><label>' + label + '<br><input name="' + name + '" ' + extra + '></label></p>'; }
  var html = '<!doctype html><html lang="' + locale + '"><head><meta name="robots" content="noindex,nofollow"><meta name="viewport" content="width=device-width"><title>NODINA Contact</title></head><body><main><h1>NODINA Contact</h1><form method="post" target="_top" action="' + ndEscape_(endpoint) + '">';
  // This isolated candidate accepts TEST- submissions only; never prefill PII.
  html += '<p>' + (fr ? 'Recette privée : utilisez uniquement des données fictives et un nom commençant par TEST-.' : 'Private rehearsal: use fictional data only and a name starting with TEST-.') + '</p>';
  html += field('name', labels[0], 'required maxlength="120" autocomplete="name"');
  html += field('email', labels[1], 'type="email" required maxlength="254" autocomplete="email"');
  html += field('organization', labels[2], 'required maxlength="160" autocomplete="organization"');
  html += '<p><label>' + labels[3] + '<br><select name="offer"><option value="unknown">—</option><option value="teams">Teams</option><option value="systems">Systems</option><option value="combined">Teams + Systems</option></select></label></p>';
  html += '<p><label>' + labels[4] + '<br><textarea name="project" required minlength="10" maxlength="5000" rows="5"></textarea></label></p>';
  html += field('timing', labels[5], 'maxlength="200" autocomplete="off"');
  [['locale', locale], ['request_id', receipt.request_id], ['receipt_token', receipt.token], ['consent_version', 'contact-v1'], ['ref', '/' + locale + '/contact/']].forEach(function (pair) { html += '<input type="hidden" name="' + pair[0] + '" value="' + ndEscape_(pair[1]) + '">'; });
  html += '<div hidden aria-hidden="true"><label>Website<input name="website" tabindex="-1" autocomplete="off"></label></div><p><label><input type="checkbox" name="consent" value="yes" required>' + ndEscape_(ND_CONSENT[locale]) + '</label></p>';
  html += '<p><a target="_top" href="https://nodina.com/' + locale + '/' + (fr ? 'confidentialite' : 'privacy') + '/">' + (fr ? 'Utilisation de vos données et vos droits' : 'How your information is used and your rights') + '</a></p><p>' + (fr ? 'Vous pouvez retirer votre accord à tout moment : ' : 'You can withdraw your consent at any time: ') + '<a href="mailto:build@nodina.com">build@nodina.com</a>.</p>';
  return html + '<button type="submit">' + labels[6] + '</button></form></main></body></html>';
}

function doGet(event) {
  var p = event && event.parameter || {}, locale = p.locale === 'en' ? 'en' : 'fr';
  try {
    if (p.mode && p.mode !== 'token') return ndResult_({ok: false, code: 'invalid'}, p);
    var cfg = ndSettings_(true), receipt = ndIssue_(locale, Date.now(), cfg.ttl, ndCrypto_(cfg));
    if (p.mode === 'token') return ndJson_(receipt);
    return HtmlService.createHtmlOutput(ndHostedForm_(locale, receipt, ScriptApp.getService().getUrl())).setTitle('NODINA Contact');
  } catch (error) { return ndResult_({ok: false, code: 'unavailable'}, p); }
}

function doPost(event) {
  var p = event && event.parameter || {}, lock, acquired = false;
  try {
    if (!event || !Number.isFinite(event.contentLength) || event.contentLength <= 0 || event.contentLength > 40000 || (event.postData && event.postData.type && event.postData.type.split(';')[0] !== 'application/x-www-form-urlencoded')) return ndResult_({ok: false, code: 'invalid'}, p);
    if (event.parameters && Object.keys(event.parameters).some(function (key) { return event.parameters[key].length !== 1; })) return ndResult_({ok: false, code: 'invalid'}, p);
    var cfg = ndSettings_(true), validation = ndValidate_(p, Date.now(), ndCrypto_(cfg));
    if (!validation.ok || !/^TEST-/i.test(validation.data.name)) return ndResult_({ok: false, code: 'invalid'}, p);
    // Only receipt is routed. No action, file ID, recipient or admin parameters.
    lock = LockService.getScriptLock(); acquired = lock.tryLock(10000);
    if (!acquired) throw new Error('busy');
    // Revalidate time after waiting for the lock; an expired token cannot slip in.
    validation = ndValidate_(p, Date.now(), ndCrypto_(cfg));
    return ndResult_(ndRecord_(validation, ndDependencies_(cfg)), p);
  } catch (error) { return ndResult_({ok: false, code: 'unavailable'}, p); }
  finally { if (acquired) lock.releaseLock(); }
}
