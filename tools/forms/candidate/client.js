// Enabled only by the explicit per-request build profile. Retains one server token
// across retries, including failures; never renews an expired token silently.
const candidateForm = document.querySelector('.contact-form[data-storage="per-request"]');
if (candidateForm) {
  const form = candidateForm, fr = form.dataset.locale === 'fr';
  form.hidden = false;
  const started = form.elements.namedItem('started_at');
  started.value = String(Date.now());
  const attribution = new URLSearchParams(location.search);
  ['utm_source', 'utm_medium', 'utm_campaign'].forEach(key => {
    const field = form.elements.namedItem(key);
    if (field) field.value = (attribution.get(key) || '').slice(0, 100);
  });
  const ref = form.elements.namedItem('ref');
  if (ref && document.referrer) {
    const previous = new URL(document.referrer);
    if (previous.origin === location.origin) ref.value = previous.pathname;
  }
  let receipt = null;
  form.addEventListener('submit', async event => {
    event.preventDefault();
    if (form.dataset.ready !== 'true' || form.dataset.sending === 'true' || form.dataset.sent === 'true' || !form.reportValidity()) return;
    const button = form.querySelector('button[type="submit"]'), status = form.querySelector('.form-status');
    const label = button.textContent;
    form.dataset.sending = 'true'; button.disabled = true; form.setAttribute('aria-busy', 'true');
    try {
      const endpoint = new URL(form.action);
      if (endpoint.protocol !== 'https:' || endpoint.hostname !== 'script.google.com' || !/^\/macros\/s\/[A-Za-z0-9_-]+\/exec$/.test(endpoint.pathname) || endpoint.search || endpoint.hash) throw new Error('endpoint');
      if (!receipt) {
        const tokenUrl = new URL(endpoint);
        tokenUrl.searchParams.set('mode', 'token'); tokenUrl.searchParams.set('locale', form.dataset.locale);
        tokenUrl.searchParams.set('_nonce', crypto.randomUUID());
        const response = await fetch(tokenUrl, {credentials: 'omit', cache: 'no-store', redirect: 'follow', signal: AbortSignal.timeout(25000)});
        if (!response.ok) throw new Error('transport');
        const issued = await response.json();
        if (typeof issued.token !== 'string' || !/^v1\.[a-f0-9-]{36}\.\d{10}\.\d{10}\.(fr|en)\.[A-Za-z0-9_-]{43}$/.test(issued.token) || !/^[a-f0-9-]{36}$/.test(issued.request_id) || issued.token.split('.')[1] !== issued.request_id || issued.token.split('.')[4] !== form.dataset.locale) throw new Error('token');
        receipt = issued;
      }
      const body = new URLSearchParams(new FormData(form));
      body.set('receipt_token', receipt.token); body.set('request_id', receipt.request_id); body.set('response_format', 'json');
      const response = await fetch(endpoint, {method: 'POST', body, credentials: 'omit', redirect: 'follow', signal: AbortSignal.timeout(25000)});
      if (!response.ok || (await response.json()).ok !== true) throw new Error('receipt');
      form.dataset.sent = 'true'; status.dataset.error = 'false';
      status.textContent = fr ? 'Votre demande a bien été enregistrée.' : 'Your inquiry has been recorded.';
      form.dispatchEvent(new CustomEvent('nodina:contact-recorded', {bubbles: true}));
    } catch (error) {
      status.dataset.error = 'true'; button.disabled = false;
      status.textContent = fr ? 'La réception n’a pas pu être confirmée. Vos champs sont conservés. Si la session a expiré, ouvrez un nouveau formulaire.' : 'Receipt could not be confirmed. Your fields have been kept. If the session expired, open a new form.';
    } finally {
      button.textContent = label; form.dataset.sending = 'false'; form.removeAttribute('aria-busy'); status.hidden = false; status.focus();
    }
  });
}
