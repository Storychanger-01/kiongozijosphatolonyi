document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu
  const toggle = document.getElementById('mobileToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  if (toggle && mobileMenu) {
    toggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
      toggle.textContent = mobileMenu.classList.contains('active') ? '✕' : '☰';
    });
  }

  // Tabs
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      const target = document.getElementById(btn.dataset.tab);
      if (target) target.classList.add('active');
    });
  });

  // Forms
  ['volunteerForm', 'contactForm', 'donateForm'].forEach(id => {
    const form = document.getElementById(id);
    if (form) {
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        const success = document.getElementById(id.replace('Form', 'Success'));
        if (success) {
          success.classList.add('show');
          form.reset();
          setTimeout(() => success.classList.remove('show'), 5000);
        }
      });
    }
  });
});
