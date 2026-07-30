(function () {
  const carousel = document.querySelector('[data-tier-carousel]');
  if (!carousel) return;

  const slides = Array.from(document.querySelectorAll('[data-tier-slide]'));
  const dots = Array.from(document.querySelectorAll('[data-tier-dot]'));
  const prevBtn = document.querySelector('[data-tier-prev]');
  const nextBtn = document.querySelector('[data-tier-next]');

  let index = slides.findIndex((slide) => slide.classList.contains('is-active'));
  if (index === -1) index = 0;

  function show(newIndex, direction) {
    const wrapped = (newIndex + slides.length) % slides.length;
    if (wrapped === index) return;
    if (!direction) direction = wrapped > index ? 'next' : 'prev';
    index = wrapped;
    slides.forEach((slide, i) => {
      const active = i === index;
      slide.classList.toggle('is-active', active);
      if (active) slide.dataset.direction = direction;
    });
    dots.forEach((dot, i) => dot.classList.toggle('is-active', i === index));
  }

  prevBtn.addEventListener('click', () => show(index - 1, 'prev'));
  nextBtn.addEventListener('click', () => show(index + 1, 'next'));
  dots.forEach((dot, i) => dot.addEventListener('click', () => show(i)));
})();
