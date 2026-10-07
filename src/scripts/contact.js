const form = document.querySelector('.contact-form');
if (form && form.dataset.storage !== 'per-request') {
  const ready = form.dataset.ready === 'true';
  const fr = form.dataset.locale === 'fr';
  const started = form.elements.namedItem('started_at');
  const requestId = form.elements.namedItem('request_id');
  started.value = String(Date.now());
  requestId.value = crypto.randomUUID();
  const query = new URLSearchParams(location.search);
  ['utm_source', 'utm_medium', 'utm_campaign'].forEach(key => {
    form.elements.namedItem(key).value = (query.get(key) || '').slice(0, 100);
  });
  const ref = form.elements.namedItem('ref');
  // Keep only a same-site pathname, never a query string containing personal data.
  if (document.referrer) {
    const previous = new URL(document.referrer);
    if (previous.origin === location.origin) ref.value = previous.pathname;
  }
  const text = {
    busy: fr ? 'Envoi en cours…' : 'Sending…',
    success: fr ? 'Votre demande a bien été enregistrée. Nous reviendrons vers vous pour préciser la suite.' : 'Your inquiry has been recorded. We will get back to you to discuss next steps.',
    error: fr ? 'La réception n’a pas pu être confirmée. Vos champs sont conservés : vous pouvez réessayer.' : 'Receipt could not be confirmed. Your fields have been kept so you can try again.',
    invalid: fr ? 'Vérifiez vos informations et votre accord avant de réessayer.' : 'Check your information and consent before trying again.',
  };
  form.addEventListener('submit', async event => {
    event.preventDefault();
    if (!ready || form.dataset.sending === 'true' || form.dataset.sent === 'true') return;
    if (!form.reportValidity()) return;
    const button = form.querySelector('button[type="submit"]');
    const status = form.querySelector('.form-status');
    const original = button.innerHTML;
    form.dataset.sending = 'true';
    button.disabled = true;
    button.textContent = text.busy;
    form.setAttribute('aria-busy', 'true');
    status.hidden = true;
    const body = new URLSearchParams(new FormData(form));
    body.set('response_format', 'json');
    try {
      const response = await fetch(form.action, {
        method: 'POST', body, credentials: 'omit', redirect: 'follow',
        signal: AbortSignal.timeout(25000),
      });
      if (!response.ok) throw new Error('transport');
      const result = await response.json();
      if (result.ok !== true) throw new Error(result.code === 'invalid' ? 'invalid' : 'server');
      form.dataset.sent = 'true';
      status.textContent = text.success;
      status.dataset.error = 'false';
      // This event reports an acknowledged submission, never a button click.
      form.dispatchEvent(new CustomEvent('nodina:contact-recorded', { bubbles: true }));
    } catch (error) {
      status.textContent = error.message === 'invalid' ? text.invalid : text.error;
      status.dataset.error = 'true';
      button.disabled = false;
    } finally {
      button.innerHTML = original;
      form.dataset.sending = 'false';
      form.removeAttribute('aria-busy');
      status.hidden = false;
      status.focus();
    }
  });
}
