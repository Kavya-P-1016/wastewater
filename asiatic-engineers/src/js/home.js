const counters = document.querySelectorAll('.stats-bar__count');
if (counters.length) {
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.count || el.textContent.replace(/[^0-9]/g, ''), 10);
      if (Number.isNaN(target)) return;
      const duration = 1800;
      const start = performance.now();
      const tick = (now) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 4);
        el.textContent = Math.round(target * ease).toLocaleString();
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      counterObserver.unobserve(el);
    });
  }, { threshold: 0.5 });
  counters.forEach((c) => counterObserver.observe(c));
}
