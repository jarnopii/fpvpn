// Simple interactions: mobile menu, smooth scroll, form handling, reveal
document.addEventListener('DOMContentLoaded', function () {
  // Populate year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile menu toggle
  const menuToggle = document.getElementById('menuToggle');
  const nav = document.getElementById('nav');
  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!expanded));
      if (!expanded) {
        nav.setAttribute('aria-hidden', 'false');
      } else {
        nav.setAttribute('aria-hidden', 'true');
      }
    });
  }

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // close mobile nav if open
        if (nav && menuToggle && menuToggle.getAttribute('aria-expanded') === 'true') {
          menuToggle.click();
        }
      }
    });
  });

  // Subscribe form handling (client-side only)
  const form = document.getElementById('subscribeForm');
  const email = document.getElementById('email');
  const msg = document.getElementById('formMessage');

  if (form && email && msg) {
    form.addEvent
