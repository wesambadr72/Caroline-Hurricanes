function revealSections() {
  document.querySelectorAll('.about, .trophies').forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.7 && rect.bottom > 0) {
      section.classList.add('section-visible');
      section.classList.remove('section-hidden');
    } else {
      section.classList.remove('section-visible');
      section.classList.add('section-hidden');
    }
  });
}
window.addEventListener('scroll', revealSections);
window.addEventListener('load', revealSections);