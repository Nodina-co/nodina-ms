import test from 'node:test';
import assert from 'node:assert/strict';
import { readdir } from 'node:fs/promises';
import { createPreviewServer } from '../tools/preview.mjs';

test('preview returns real redirects, real 404s and noindex headers for every resource', async () => {
  const server = createPreviewServer();
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const origin = `http://127.0.0.1:${server.address().port}`;
  try {
    for (const [path, code] of [['/', 301], ['/fr', 301], ['/fr/', 200], ['/en/contact/', 200], ['/fr/confidentialite/', 200], ['/fr/cookies/', 200], ['/en/privacy/', 200], ['/en/cookies/', 200], ['/missing/', 404], ['/content/product-truth.md', 404], ['/_headers', 404], ['/assets/intertight.ttf', 200]]) {
      const response = await fetch(origin + path, { redirect: 'manual' });
      assert.equal(response.status, code, path);
      assert.match(response.headers.get('x-robots-tag'), /noindex/);
      if (path === '/') assert.equal(response.headers.get('location'), '/fr/');
    }
    assert.equal((await fetch(origin + '/fr/', { method: 'POST' })).status, 405);
    // Astro may generate CSS basenames beginning with underscores.
    for (const asset of await readdir(new URL('../dist/_astro/', import.meta.url))) {
      if (!/\.(css|js|webp)$/.test(asset)) continue;
      assert.equal((await fetch(origin + '/_astro/' + asset)).status, 200, asset);
    }
  } finally {
    await new Promise(resolve => server.close(resolve));
  }
});
