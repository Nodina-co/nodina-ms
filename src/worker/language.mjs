// Pick the site language for the root URL from the browser's Accept-Language header.
// French-preferring browsers get /fr/; everyone else gets /en/.
export function preferredLocale(acceptLanguage = '') {
  const ranked = String(acceptLanguage).split(',').map((part, index) => {
    const [tag, ...params] = part.trim().toLowerCase().split(';');
    const q = params.map(p => p.trim()).find(p => p.startsWith('q='));
    const weight = q ? Number(q.slice(2)) : 1;
    return { tag, weight: Number.isFinite(weight) ? weight : 0, index };
  }).filter(({ tag, weight }) => tag && weight > 0)
    .sort((a, b) => b.weight - a.weight || a.index - b.index);
  for (const { tag } of ranked) {
    if (tag === 'fr' || tag.startsWith('fr-')) return 'fr';
    if (tag === 'en' || tag.startsWith('en-')) return 'en';
  }
  return 'en';
}

export function rootRedirect(request) {
  const url = new URL(request.url);
  if (url.pathname !== '/') return null;
  const locale = preferredLocale(request.headers.get('accept-language') || '');
  return new Response(null, {
    status: 302,
    headers: { Location: `/${locale}/${url.search}`, Vary: 'Accept-Language', 'Cache-Control': 'no-store' },
  });
}
