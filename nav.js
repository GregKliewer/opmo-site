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

// The track record moved off the homepage onto why-opmo.html. These run on
// every page, so when the section isn't here, send the reader to the page
// that has it rather than silently doing nothing: #track-record was a nav
// anchor and #battle-card is a documented deep link, so published links to
// both predate the move. Root-absolute, since the repo root is the document
// root and articles sit one directory down.
var MOVED_HASHES = ['#track-record', '#battle-card'];

function openBattleCards() {
  var section = document.getElementById('track-record');
  if (!section) return;
  section.querySelectorAll('.battle-card').forEach(function (card) {
    card.open = true;
  });
  section.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function checkBattleCardHash() {
  var hash = window.location.hash;
  if (MOVED_HASHES.indexOf(hash) === -1) return;
  if (document.getElementById('track-record')) {
    if (hash === '#battle-card') openBattleCards();
    return;
  }
  window.location.replace('/why-opmo.html' + hash);
}

document.addEventListener('DOMContentLoaded', checkBattleCardHash);
window.addEventListener('hashchange', checkBattleCardHash);
