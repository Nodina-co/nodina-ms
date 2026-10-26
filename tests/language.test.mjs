import { test } from 'node:test';
import assert from 'node:assert/strict';
import { preferredLocale, rootRedirect } from '../src/worker/language.mjs';

test('French-preferring browsers get French, everyone else English', () => {
  assert.equal(preferredLocale('fr-FR,fr;q=0.9,en;q=0.8'), 'fr');
  assert.equal(preferredLocale('en-US,en;q=0.9,fr;q=0.8'), 'en');
  assert.equal(preferredLocale('de-DE,de;q=0.9'), 'en');
  assert.equal(preferredLocale(''), 'en');
  assert.equal(preferredLocale('en;q=0.5, fr;q=0.9'), 'fr');
  assert.equal(preferredLocale('fr;q=0'), 'en');
});

test('only the root URL is redirected, keeping the query string', () => {
  const fr = rootRedirect(new Request('https://nodina.com/?utm_source=x', { headers: { 'accept-language': 'fr' } }));
  assert.equal(fr.status, 302);
  assert.equal(fr.headers.get('location'), '/fr/?utm_source=x');
  assert.equal(fr.headers.get('vary'), 'Accept-Language');
  const en = rootRedirect(new Request('https://nodina.com/', { headers: {} }));
  assert.equal(en.headers.get('location'), '/en/');
  assert.equal(rootRedirect(new Request('https://nodina.com/fr/')), null);
});
