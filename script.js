const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  menuToggle.textContent = navLinks.classList.contains('open') ? '×' : '☰';
});
navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navLinks.classList.remove('open');
  menuToggle.textContent = '☰';
}));
// Subtle reveal on scroll — content remains visible if motion is reduced.
const revealItems = document.querySelectorAll('.product-card, .goodness-item, .intro-copy, .section-heading');
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  revealItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(18px)';
    item.style.transition = 'opacity .7s ease, transform .7s ease';
  });
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach(item => observer.observe(item));
}