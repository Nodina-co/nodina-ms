import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../dist/', import.meta.url));
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.png': 'image/png', '.ttf': 'font/ttf', '.txt': 'text/plain; charset=utf-8', '.json': 'application/json' };

export function createPreviewServer() {
  return createServer(async (request, response) => {
    response.setHeader('X-Robots-Tag', 'noindex, nofollow, noarchive');
    response.setHeader('X-Content-Type-Options', 'nosniff');
    response.setHeader('Cache-Control', 'no-store');
    try {
      if (!['GET', 'HEAD'].includes(request.method)) {
        response.writeHead(405, { Allow: 'GET, HEAD' }); response.end(); return;
      }
      const url = new URL(request.url, 'http://127.0.0.1');
      if (url.pathname === '/') {
        response.writeHead(301, { Location: '/fr/' + url.search }); response.end(); return;
      }
      const pathname = decodeURIComponent(url.pathname);
      const file = resolve(root, '.' + pathname);
      if (!file.startsWith(root.endsWith(sep) ? root : root + sep) || pathname.split('/').some(part => part.startsWith('.')) || ['/_headers', '/_redirects'].includes(pathname)) {
        response.writeHead(404); response.end(); return;
      }
      let selected = file;
      let code = 200;
      try {
        if ((await stat(file)).isDirectory()) {
          if (!pathname.endsWith('/')) { response.writeHead(301, { Location: pathname + '/' + url.search }); response.end(); return; }
          selected = resolve(file, 'index.html');
        }
        await stat(selected);
      } catch {
        selected = resolve(root, '404.html'); code = 404;
      }
      const body = await readFile(selected);
      response.writeHead(code, { 'Content-Type': types[extname(selected)] || 'application/octet-stream', 'Content-Length': body.length });
      response.end(request.method === 'HEAD' ? undefined : body);
    } catch {
      response.writeHead(400); response.end('Bad request');
    }
  });
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const port = Number(process.env.PORT || 4179);
  createPreviewServer().listen(port, '127.0.0.1', () => console.log(`NODINA local preview: http://127.0.0.1:${port}/fr/`));
}
