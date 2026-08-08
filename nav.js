document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
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
