import test from 'node:test';
import assert from 'node:assert/strict';
import { initAnalytics, readChoice } from '../src/scripts/analytics.js';

const key = 'nodina.analytics-choice.v1';
const stored = value => JSON.stringify({ version: 1, value, expires: Date.now() + 60000 });
function node() {
  return { hidden: true, dataset: {}, listeners: {}, addEventListener(name, fn) { this.listeners[name] = fn; }, focus() { this.focused = true; } };
}
function fixture({ enabled = true, preview = false, host = 'nodina.com', protocol = 'https:', path = '/fr/contact/', choice = null, storageFails = false, removalFails = false, referrer = 'https://chatgpt.com/c/private-chat?email=private@example.com' } = {}) {
  const banner = node(), preferences = node(), grant = node(), deny = node(), form = node();
  grant.dataset.analyticsChoice = 'granted'; deny.dataset.analyticsChoice = 'denied';
  banner.querySelectorAll = () => [deny, grant]; banner.querySelector = () => deny;
  const appended = [], cookies = [], memory = new Map(choice ? [[key, choice]] : []);
  const config = { textContent: JSON.stringify({ enabled, preview, title: 'Contact | NODINA' }) };
  const doc = { listeners: {}, referrer,
    querySelector: selector => ({ '#analytics-config': config, '#analytics-consent': banner, '[data-analytics-preferences]': preferences, '.contact-form': form })[selector],
    createElement: () => ({}), head: { appendChild: tag => appended.push(tag) },
    addEventListener(name, fn) { this.listeners[name] = fn; },
    get cookie() { return '_ga=old; _ga_J8NV7Z1HMX=old; essential=session'; }, set cookie(value) { cookies.push(value); } };
  const win = { listeners: {}, location: { hostname: host, protocol, pathname: path, search: '?email=private@example.com', hash: '#secret', reload() { win.reloads++; } }, reloads: 0,
    localStorage: { getItem: name => memory.get(name) || null, setItem(name, value) { if (storageFails) throw Error('quota'); memory.set(name, value); }, removeItem(name) { if (removalFails) throw Error('blocked'); memory.delete(name); } },
    setTimeout(fn, delay) { this.expiry = { fn, delay }; return 1; }, clearTimeout() { this.expiry = null; },
    addEventListener(name, fn) { this.listeners[name] = fn; } };
  initAnalytics(win, doc);
  const choose = value => (value === 'granted' ? grant : deny).listeners.click();
  const interaction = () => form.listeners.input({ target: { matches: () => true, value: 'private@example.com' } });
  const recorded = () => { form.dataset.sent = 'true'; form.listeners['nodina:contact-recorded'](); };
  const events = () => (win.dataLayer || []).map(args => [...args]).filter(args => args[0] === 'event');
  return { win, doc, banner, preferences, appended, cookies, memory, choose, interaction, recorded, form, events };
}

test('disabled, preview hosts and non-HTTPS never initialize the Google tag', () => {
  for (const options of [{ enabled: false }, { host: 'nodina-preproduction.jd-fd3.workers.dev' }, { host: 'www.nodina.com' }, { host: 'nodina.com.evil.test' }, { protocol: 'http:' }]) {
    const f = fixture({ ...options, choice: stored('granted') });
    assert.equal(f.appended.length, 0); assert.equal(f.win.gtag, undefined); assert.equal(f.banner.hidden, true);
  }
});
test('local consent preview is UI-only, including acceptance', () => {
  const f = fixture({ enabled: false, preview: true, host: '127.0.0.1', protocol: 'http:' });
  assert.equal(f.banner.hidden, false); f.choose('granted'); f.interaction(); f.recorded();
  assert.equal(f.appended.length, 0); assert.equal(f.win.gtag, undefined);
});
test('privacy and cookie pages allow withdrawal in both languages', () => {
  for (const path of ['/fr/confidentialite/', '/fr/cookies/', '/en/privacy/', '/en/cookies/']) {
    const f = fixture({ path, choice: stored('granted') });
    assert.equal(f.preferences.hidden, false); assert.equal(f.appended.length, 1);
    f.preferences.listeners.click(); assert.equal(f.banner.hidden, false); f.choose('denied');
    assert.equal(f.win['ga-disable-G-J8NV7Z1HMX'], true);
    assert.equal(JSON.parse(f.memory.get(key)).value, 'denied');
  }
});
test('no choice or refusal sends nothing and does not block the form', () => {
  const f = fixture(); f.interaction(); f.recorded(); f.choose('denied');
  assert.equal(f.appended.length, 0); assert.deepEqual(f.events(), []);
  assert.equal(f.form.dataset.sent, 'true'); assert.equal(f.banner.hidden, true);
  assert.equal(JSON.parse(f.memory.get(key)).value, 'denied');
});
test('acceptance initializes once, keeps ads denied and sanitizes page/referrer metadata', () => {
  const f = fixture(); f.choose('granted'); f.choose('granted');
  assert.equal(f.appended.length, 1);
  const calls = f.win.dataLayer.map(args => [...args]);
  assert.equal(calls[0][1], 'default'); assert.equal(calls[0][2].analytics_storage, 'denied');
  assert.equal(calls[1][2].analytics_storage, 'granted'); assert.equal(calls[1][2].ad_storage, 'denied');
  const config = calls.find(args => args[0] === 'config')[2];
  assert.equal(config.allow_google_signals, false); assert.equal(config.send_page_view, false);
  assert.equal(config.page_location, 'https://nodina.com/fr/contact/');
  assert.equal(config.page_referrer, 'https://chatgpt.com/');
  assert.equal(f.events().filter(args => args[1] === 'page_view').length, 1);
  assert.equal(JSON.stringify(calls).includes('private@example.com'), false);
});
test('CTA, first form interaction and acknowledged receipt are distinct and bounded', () => {
  const f = fixture(); f.choose('granted');
  f.doc.listeners.click({ target: { closest: () => ({}) } });
  f.interaction(); f.interaction(); f.form.listeners.change({ target: { matches: () => true } });
  f.form.listeners['nodina:contact-recorded'](); // No acknowledged receipt yet.
  f.recorded(); f.recorded();
  assert.deepEqual(f.events().map(args => args[1]), ['page_view', 'primary_cta_click', 'form_start', 'generate_lead']);
  for (const event of f.events()) assert.equal(event[2].page_path, '/fr/contact/');
  assert.equal(JSON.stringify(f.events()).includes('private@example.com'), false);
});
test('interactions before acceptance are not replayed', () => {
  const f = fixture(); f.interaction(); f.recorded(); f.choose('granted'); f.interaction(); f.recorded();
  assert.deepEqual(f.events().map(args => args[1]), ['page_view']);
});
test('form attribution uses a known previous site page, with contact as a safe fallback', () => {
  for (const [referrer, expected] of [['https://nodina.com/fr/profils/?email=private@example.com', '/fr/profils/'], ['https://nodina.com/private/customer-name/', '/fr/contact/'], ['https://nodina.com.evil.test/fr/', '/fr/contact/']]) {
    const f = fixture({ referrer }); f.choose('granted'); f.interaction(); f.recorded();
    for (const event of f.events().filter(args => ['form_start','generate_lead'].includes(args[1]))) assert.equal(event[2].page_ref, expected);
    assert.equal(JSON.stringify(f.events()).includes('private@example.com'), false);
  }
});
test('withdrawal blocks future events and clears analytics cookies without reloading the form', () => {
  const f = fixture({ choice: stored('granted') });
  const count = f.events().length;
  f.preferences.listeners.click(); f.choose('denied'); f.interaction(); f.recorded();
  assert.equal(f.win['ga-disable-G-J8NV7Z1HMX'], true);
  assert.equal(f.win.reloads, 0); assert.equal(f.events().length, count);
  assert.equal(f.cookies.length, 4); assert.equal(f.cookies.some(value => value.startsWith('essential=')), false);
  assert.equal(f.preferences.focused, true);
});
test('another tab revoking consent stops this page', () => {
  const f = fixture({ choice: stored('granted') }); f.win.listeners.storage({ key, newValue: stored('denied') });
  const count = f.events().length;
  f.interaction(); assert.equal(f.win['ga-disable-G-J8NV7Z1HMX'], true); assert.equal(f.events().length, count);
});
test('reaccepting restores measurement without duplicating the tag or page view', () => {
  const f = fixture(); f.choose('granted'); f.choose('denied'); f.interaction(); f.choose('granted');
  f.doc.listeners.click({ target: { closest: () => ({}) } });
  assert.equal(f.appended.length, 1); assert.equal(f.win['ga-disable-G-J8NV7Z1HMX'], false);
  assert.deepEqual(f.events().map(args => args[1]), ['page_view','primary_cta_click']);
});
test('consent expiry stops a loaded SDK even on a page left open', () => {
  const f = fixture({ choice: stored('granted') });
  assert.ok(f.win.expiry.delay > 0 && f.win.expiry.delay <= 60000);
  const originalNow = Date.now;
  try {
    Date.now = () => originalNow() + 120000;
    f.win.expiry.fn(); f.interaction();
    assert.equal(f.win['ga-disable-G-J8NV7Z1HMX'], true); assert.equal(f.win.reloads, 0); assert.equal(f.banner.hidden, false);
    assert.deepEqual(f.events().map(args => args[1]), ['page_view']);
  } finally { Date.now = originalNow; }
});
test('an old acceptance is removed when saving refusal fails', () => {
  const f = fixture({ choice: stored('granted'), storageFails: true }); f.choose('denied');
  assert.equal(f.memory.has(key), false); assert.equal(f.win.reloads, 0);
});
test('a readable but unwritable old acceptance never loads the tag, even if removal fails', () => {
  const f = fixture({ choice: stored('granted'), storageFails: true, removalFails: true });
  assert.equal(f.appended.length, 0); assert.equal(f.banner.hidden, false);
  f.choose('denied'); assert.equal(f.appended.length, 0); assert.deepEqual(f.events(), []);
});
test('malformed or expired choices never count as permission', () => {
  for (const value of ['invalid', '{}', 'null', JSON.stringify({ version: 1, value: 'granted', expires: 10 })]) {
    assert.equal(readChoice(value, Date.now()), null);
    const f = fixture({ choice: value }); assert.equal(f.appended.length, 0); assert.equal(f.banner.hidden, false);
  }
});
