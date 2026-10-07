const ID = 'G-J8NV7Z1HMX';
const KEY = 'nodina.analytics-choice.v1';
const PATHS = new Set(['/fr/', '/fr/selection-des-talents/', '/fr/profils/', '/fr/manifeste/', '/fr/contact/', '/fr/confidentialite/', '/fr/cookies/', '/fr/mentions-legales/', '/en/', '/en/vetting/', '/en/engineers/', '/en/manifesto/', '/en/contact/', '/en/privacy/', '/en/cookies/', '/en/legal-notice/']);

export function readChoice(value, now) {
  try {
    const choice = JSON.parse(value);
    return choice?.version === 1 && ['granted', 'denied'].includes(choice.value)
      && Number.isFinite(choice.expires) && choice.expires > now ? choice : null;
  } catch { return null; }
}

export function initAnalytics(win = window, doc = document) {
  const config = doc.querySelector('#analytics-config');
  if (!config) return;
  let settings;
  try { settings = JSON.parse(config.textContent); } catch { return; }
  const production = settings.enabled === true && win.location.hostname === 'nodina.com' && win.location.protocol === 'https:';
  const preview = settings.preview === true && ['127.0.0.1', 'localhost'].includes(win.location.hostname);
  if ((!production && !preview) || !PATHS.has(win.location.pathname)) return;
  const banner = doc.querySelector('#analytics-consent');
  const preferences = doc.querySelector('[data-analytics-preferences]');
  if (!banner || !preferences) return;
  let choice = null, loaded = false, started = false, recorded = false, expiryTimer;
  try {
    choice = readChoice(win.localStorage.getItem(KEY), Date.now());
    // A saved acceptance is usable only while the same store can save a withdrawal.
    if (choice) win.localStorage.setItem(KEY, JSON.stringify(choice));
  } catch { choice = null; }
  const approved = () => choice?.value === 'granted' && choice.expires > Date.now();
  const page = win.location.pathname;
  const params = { page_location: 'https://nodina.com' + page, page_path: page, page_title: settings.title };
  let referrer = '';
  try {
    const ref = new URL(doc.referrer);
    if (['http:', 'https:'].includes(ref.protocol)) {
      referrer = ref.hostname === 'nodina.com' ? (PATHS.has(ref.pathname) ? 'https://nodina.com' + ref.pathname : '') : ref.origin + '/';
    }
  } catch { /* Missing referrer stays unknown. */ }
  const entryPage = referrer.startsWith('https://nodina.com/') ? new URL(referrer).pathname : page;
  function load() {
    if (!production || !approved()) return;
    if (loaded) {
      win['ga-disable-' + ID] = false;
      win.clearTimeout(expiryTimer);
      watchExpiry();
      return;
    }
    loaded = true;
    win['ga-disable-' + ID] = false;
    win.dataLayer = [];
    win.gtag = function () { win.dataLayer.push(arguments); };
    win.gtag('consent', 'default', { analytics_storage: 'denied', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' });
    win.gtag('consent', 'update', { analytics_storage: 'granted', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' });
    win.gtag('js', new Date());
    win.gtag('config', ID, { ...params, page_referrer: referrer, send_page_view: false,
      allow_google_signals: false, allow_ad_personalization_signals: false,
      cookie_domain: 'nodina.com', cookie_expires: 180 * 24 * 60 * 60, cookie_update: false,
      cookie_flags: 'SameSite=Lax;Secure' });
    win.gtag('event', 'page_view', { ...params, page_referrer: referrer, send_to: ID });
    const script = doc.createElement('script');
    script.id = 'nodina-google-tag'; script.async = true; script.referrerPolicy = 'no-referrer';
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + ID;
    doc.head.appendChild(script);
    watchExpiry();
  }
  function watchExpiry() {
    expiryTimer = win.setTimeout(() => {
      if (approved()) watchExpiry();
      else { choice = null; stop(); display(); }
    }, Math.min(choice.expires - Date.now(), 2147483647));
  }
  function clearCookies() {
    doc.cookie.split(';').forEach(cookie => {
      const name = cookie.split('=')[0].trim();
      if (!/^_ga(?:_[A-Za-z0-9]+)?$/.test(name)) return;
      doc.cookie = name + '=;Max-Age=0;Path=/;SameSite=Lax';
      doc.cookie = name + '=;Max-Age=0;Path=/;Domain=nodina.com;SameSite=Lax';
    });
  }
  function stop() {
    win.clearTimeout(expiryTimer);
    win['ga-disable-' + ID] = true;
    clearCookies();
    // Google's documented opt-out stops SDK emissions without losing a form draft.
  }
  function display() { banner.hidden = !!choice; preferences.hidden = false; }
  function decide(value) {
    const expires = new Date(); expires.setMonth(expires.getMonth() + 6);
    choice = { version: 1, value, expires: expires.getTime() };
    try { win.localStorage.setItem(KEY, JSON.stringify(choice)); } catch {
      // Remove an older acceptance when a full store cannot save the refusal.
      try { win.localStorage.removeItem(KEY); } catch { /* Blocked storage is not permission. */ }
    }
    banner.hidden = true;
    preferences.focus({ preventScroll: true });
    if (value === 'granted') load(); else stop();
  }
  function measure(name, extra = {}) {
    if (!production || !approved() || !loaded) return;
    win.gtag('event', name, { ...params, ...extra, send_to: ID });
  }
  banner.querySelectorAll('[data-analytics-choice]').forEach(button => button.addEventListener('click', () => decide(button.dataset.analyticsChoice)));
  preferences.addEventListener('click', () => {
    banner.hidden = false;
    banner.querySelector('[data-analytics-choice="denied"]').focus();
  });
  win.addEventListener('storage', event => {
    if (event.key !== KEY && event.key !== null) return;
    choice = readChoice(event.newValue, Date.now());
    if (!approved()) stop(); else load();
    display();
  });
  doc.addEventListener('visibilitychange', () => {
    if (loaded && !approved()) { choice = null; stop(); display(); }
  });
  doc.addEventListener('click', event => {
    const link = event.target.closest?.('a[data-primary-cta]');
    if (link) measure('primary_cta_click', { ref: page, page_ref: page });
  });
  const form = doc.querySelector('.contact-form');
  if (form) {
    const first = event => {
      if (started || !event.target.matches?.('input:not([type="hidden"]):not([type="submit"]), select, textarea')) return;
      started = true; measure('form_start', { ref: entryPage, page_ref: entryPage });
    };
    form.addEventListener('input', first); form.addEventListener('change', first);
    form.addEventListener('nodina:contact-recorded', () => {
      if (recorded || form.dataset.sent !== 'true') return;
      recorded = true; measure('generate_lead', { ref: entryPage, page_ref: entryPage });
    });
  }
  display();
  if (approved()) load(); else clearCookies();
}
