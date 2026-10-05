const menu = document.querySelector('.mobile-menu');
if (menu) {
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { menu.open = false; }));
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && menu.open) { menu.open = false; menu.querySelector('summary').focus(); } });
}
const demo = document.querySelector('.contact-form');
if (demo) {
  const offer = demo.querySelector('#offer');
  const page = document.querySelector('.contact-page');
  const badge = document.querySelector('#contact-offer');
  const allowed = ['unknown', 'teams', 'systems', 'combined'];
  const choice = new URLSearchParams(location.search).get('offer');
  if (allowed.includes(choice)) offer.value = choice;
  function showOfferContext() {
    const selected = allowed.includes(offer.value) ? offer.value : 'unknown';
    page.dataset.offer = selected;
    badge.dataset.service = selected;
    badge.querySelector('[data-contact-label]').textContent = badge.getAttribute('data-label-' + selected);
    document.querySelectorAll('.languages a').forEach(link => {
      const target = new URL(link.href);
      if (selected === 'unknown') target.searchParams.delete('offer');
      else target.searchParams.set('offer', selected);
      link.setAttribute('href', target.pathname + target.search);
    });
  }
  offer.addEventListener('change', showOfferContext);
  showOfferContext();
}

// Editorial prototype: show criteria without creating or storing candidate records.
document.querySelectorAll('.criterion-explorer').forEach(explorer => {
  explorer.querySelector('.criterion-buttons').hidden = false;
  explorer.querySelectorAll('.criterion-panel').forEach((panel, index) => { panel.hidden = index !== 0; });
});
document.querySelectorAll('.criterion-button').forEach(button => {
  button.addEventListener('click', () => {
    const explorer = button.closest('.criterion-explorer');
    explorer.querySelectorAll('.criterion-button').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    explorer.querySelectorAll('.criterion-panel').forEach(panel => { panel.hidden = panel.id !== button.getAttribute('aria-controls'); });
  });
});

// Filter only the explicitly fictional demonstration catalog. No candidate data is stored.
document.querySelectorAll('.profile-catalog').forEach(catalog => {
  const toolbar = catalog.querySelector('.profile-toolbar');
  if (!toolbar) return;
  toolbar.hidden = false;
  const cards = [...catalog.querySelectorAll('[data-profile-status]')];
  const buttons = [...toolbar.querySelectorAll('[data-profile-filter]')];
  buttons.forEach(button => button.addEventListener('click', () => {
    const selected = button.dataset.profileFilter;
    buttons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    cards.forEach(card => { card.hidden = selected !== 'all' && card.dataset.profileStatus !== selected; });
    toolbar.querySelector('[data-profile-count]').textContent = String(cards.filter(card => !card.hidden).length);
  }));
});
