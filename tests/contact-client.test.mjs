import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { randomUUID } from 'node:crypto';
import vm from 'node:vm';

const source = readFileSync(new URL('../src/scripts/contact.js', import.meta.url), 'utf8');
function fixture(fetchResult, { ready = true, valid = true } = {}) {
  const fields = Object.fromEntries(['started_at', 'request_id', 'ref', 'utm_source', 'utm_medium', 'utm_campaign'].map(key => [key, { value: '' }]));
  const button = { disabled: !ready, innerHTML: 'Send inquiry', textContent: '' };
  const status = { dataset: {}, hidden: true, textContent: '', focus() {} };
  const calls = [], events = [];
  let submit;
  const form = {
    dataset: { ready: String(ready), locale: 'en' }, action: 'https://script.google.com/macros/s/example/exec',
    elements: { namedItem: key => fields[key] },
    addEventListener: (_name, handler) => { submit = handler; },
    reportValidity: () => valid,
    querySelector: selector => selector === '.form-status' ? status : button,
    setAttribute() {}, removeAttribute() {}, dispatchEvent: event => events.push(event.type),
  };
  const context = vm.createContext({
    document: { querySelector: () => form, referrer: 'http://127.0.0.1/fr/?private=not-forwarded' },
    location: { origin: 'http://127.0.0.1', search: '?utm_source=test' },
    crypto: { randomUUID }, URL, URLSearchParams, AbortSignal,
    FormData: class { *[Symbol.iterator]() { for (const [key, field] of Object.entries(fields)) yield [key, field.value]; } },
    CustomEvent: class { constructor(type) { this.type = type; } },
    fetch: async (_url, options) => { calls.push(options); return fetchResult(); },
  });
  vm.runInContext(source, context);
  return { form, fields, button, status, calls, events, submit: () => submit({ preventDefault() {} }) };
}

test('unconfigured or invalid forms never transmit anything', async () => {
  for (const options of [{ ready: false }, { valid: false }]) {
    const f = fixture(() => { throw new Error('must not send'); }, options);
    await f.submit(); assert.equal(f.calls.length, 0);
  }
});

test('only acknowledged receipt produces success and prevents duplicate submits', async () => {
  const f = fixture(() => ({ ok: true, json: async () => ({ ok: true }) }));
  await f.submit(); await f.submit();
  assert.equal(f.calls.length, 1);
  assert.equal(f.events.join(','), 'nodina:contact-recorded');
  assert.equal(f.form.dataset.sent, 'true');
  assert.equal(f.button.disabled, true);
  assert.equal(f.status.dataset.error, 'false');
  assert.equal(f.calls[0].body.get('ref'), '/fr/');
  assert.equal(f.calls[0].body.get('utm_source'), 'test');
});

test('network, malformed JSON, HTTP and server errors preserve a retry with the same request id', async () => {
  for (const response of [
    () => { throw new Error('network'); },
    () => ({ ok: true, json: async () => { throw new Error('invalid JSON'); } }),
    () => ({ ok: false }),
    () => ({ ok: true, json: async () => ({ ok: false, code: 'invalid' }) }),
    () => ({ ok: true, json: async () => ({}) }),
  ]) {
    const f = fixture(response);
    const id = f.fields.request_id.value;
    await f.submit(); await f.submit();
    assert.equal(f.calls.length, 2);
    assert.equal(f.status.dataset.error, 'true');
    assert.equal(f.button.disabled, false);
    assert.equal(f.form.dataset.sent, undefined);
    assert.equal(f.events.length, 0);
    assert.equal(f.fields.request_id.value, id);
    assert.equal(f.calls[0].body.get('request_id'), f.calls[1].body.get('request_id'));
  }
});
