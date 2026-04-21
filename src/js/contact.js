const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('[type="submit"]');
    const honeypot = form.querySelector('[name="_honey"]');
    if (honeypot && honeypot.value) return;

    btn.textContent = 'Sending...';
    btn.disabled = true;

    try {
      const res = await fetch('https://formspree.io/f/REPLACE_WITH_YOUR_CODE', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(Object.fromEntries(new FormData(form)))
      });
      if (res.ok) {
        form.innerHTML = `<div class="form-success"><h3>Message Sent</h3><p>Thank you. We'll get back to you within 24 hours.</p></div>`;
      } else {
        throw new Error('failed');
      }
    } catch (_err) {
      btn.textContent = 'Send Message';
      btn.disabled = false;
      alert('Something went wrong. Please email us at water@wastewaterevaporation.com');
    }
  });
}
