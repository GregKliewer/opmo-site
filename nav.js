document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (!toggle || !nav) return;

  // The toggle's only content is three unlabelled bars, so it has no
  // accessible name of its own. Set the ARIA contract here rather than
  // relying on the markup alone, and keep the label describing the action
  // the button will perform next.
  function setExpanded(open) {
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
  }

  toggle.setAttribute('aria-controls', 'site-nav');
  setExpanded(nav.classList.contains('open'));

  toggle.addEventListener('click', function () {
    setExpanded(nav.classList.toggle('open'));
  });

  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('open');
      setExpanded(false);
    });
  });
});

function openBattleCards() {
  var section = document.getElementById('track-record');
  if (!section) return;
  section.querySelectorAll('.battle-card').forEach(function (card) {
    card.open = true;
  });
  section.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function checkBattleCardHash() {
  if (window.location.hash === '#battle-card') {
    openBattleCards();
  }
}

document.addEventListener('DOMContentLoaded', checkBattleCardHash);
window.addEventListener('hashchange', checkBattleCardHash);
