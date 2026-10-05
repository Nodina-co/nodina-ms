import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';

const source = readFileSync(new URL('../tools/forms/contact.gs', import.meta.url), 'utf8');
const context = vm.createContext({});
vm.runInContext(source, context);
const now = Date.now();
const valid = {
  name: 'TEST-Élodie', email: 'test@example.com', organization: 'Example',
  project: 'A test inquiry about a product.', timing: '', offer: 'teams', locale: 'fr',
  consent: 'yes', consent_version: 'contact-v1', started_at: String(now - 5000),
  request_id: '00000000-0000-4000-8000-000000000001', ref: '/fr/selection-des-talents/',
};
const validate = input => context.validateContact(input, now);

test('valid FR/EN inquiries and plain HTML submissions are accepted', () => {
  assert.equal(validate(valid).ok, true);
  assert.equal(validate({ ...valid, locale: 'en', started_at: '', request_id: '' }).ok, true);
});

test('invalid, oversized, spam, missing consent and header injection never reach storage', () => {
  for (const change of [
    { name: '' }, { email: 'invalid' }, { email: 'a@b.com\nBcc:x@y.com' },
    { name: 'Name\r\nBcc:other' }, { organization: '' }, { project: 'tiny' },
    { project: 'x'.repeat(5001) }, { name: 'x'.repeat(121) }, { website: 'spam' },
    { consent: '' }, { consent_version: 'unknown' }, { locale: 'de' },
    { offer: 'unexpected' }, { started_at: String(now + 1000) },
    { started_at: String(now - 1000) }, { started_at: String(now - 86400001) },
    { started_at: 'not-a-date' }, { request_id: 'invalid' },
  ]) assert.equal(validate({ ...valid, ...change }).ok, false, JSON.stringify(change));
});

test('untrusted attribution is bounded and formulas are stored as text', () => {
  const result = validate({ ...valid, ref: 'https://evil.example/?email=private', utm_campaign: 'x'.repeat(200) });
  assert.equal(result.data.ref, '/fr/contact/');
  assert.equal(result.data.utm_campaign.length, 100);
  for (const formula of ['=IMPORTXML("https://example.com")', '+1+1', '  @SUM(1)', '\t-1']) {
    assert.equal(context.sheetText(formula), "'" + formula);
  }
});

function fixture({ notificationFails = false, storageFails = false } = {}) {
  const rows = [], messages = [];
  const dependencies = {
    now: () => '2026-10-04T14:00:00.000Z', uuid: () => 'new-request-id',
    find: id => rows.find(row => row[1] === id),
    append: row => { if (storageFails) throw new Error('sheet unavailable'); rows.push(row); return rows.length; },
    notify: message => { if (notificationFails) throw new Error('quota'); messages.push(message); },
    mark: (row, status) => { rows[row - 1][16] = status; },
  };
  return { rows, messages, dependencies };
}

test('receipt stores consent and notifies once, including after an ambiguous retry', () => {
  const { rows, messages, dependencies } = fixture();
  const data = validate(valid).data;
  assert.equal(context.recordContact(data, dependencies).ok, true);
  assert.equal(context.recordContact(data, dependencies).ok, true);
  assert.equal(rows.length, 1);
  assert.equal(messages.length, 1);
  assert.equal(messages[0].replyTo, valid.email);
  assert.equal(rows[0][10], context.CONTACT_CONSENT.fr);
  assert.equal(rows[0][12], rows[0][0]);
  assert.equal(rows[0][16], 'sent');
});

test('mail failure retains the lead and exposes a failed notification for the operator', () => {
  const { rows, dependencies } = fixture({ notificationFails: true });
  assert.equal(context.recordContact(validate(valid).data, dependencies).ok, true);
  assert.equal(rows.length, 1);
  assert.equal(rows[0][16], 'failed');
});

test('storage failure cannot produce a successful receipt or send notification', () => {
  const { messages, dependencies } = fixture({ storageFails: true });
  assert.throws(() => context.recordContact(validate(valid).data, dependencies), /sheet unavailable/);
  assert.equal(messages.length, 0);
});

test('doPost rejects misconfiguration and oversize requests without leaking details', () => {
  const replies = [];
  const api = vm.createContext({
    ContentService: { MimeType: { JSON: 'json' }, createTextOutput: value => ({ setMimeType: () => { replies.push(JSON.parse(value)); return value; } }) },
    LockService: { getScriptLock: () => ({ tryLock: () => true, releaseLock() {} }) },
    PropertiesService: { getScriptProperties: () => ({ getProperty: () => '' }) },
  });
  vm.runInContext(source, api);
  api.doPost({ parameter: { ...valid, response_format: 'json' }, contentLength: 500 });
  assert.equal(replies.pop().code, 'unavailable');
  api.doPost({ parameter: { ...valid, response_format: 'json' }, contentLength: 40001 });
  assert.equal(replies.pop().code, 'invalid');
});

test('plain POST confirmation does not interpolate visitor-controlled markup', () => {
  const api = vm.createContext({ HtmlService: { createHtmlOutput: html => ({ setTitle: () => html }) } });
  vm.runInContext(source, api);
  const html = api.contactResponse({ ok: true }, { locale: '<script>evil()</script>', name: '<img src=x>' });
  assert.match(html, /noindex,nofollow/);
  assert.doesNotMatch(html, /evil|<img/);
});
