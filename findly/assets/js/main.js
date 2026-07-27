/* ============================================================
   Findly — main.js
   Card animations, stamp, drag-drop, validation, toasts, tabs
   ============================================================ */
'use strict';

/* ── Card entrance (IntersectionObserver, 40ms stagger) ──── */
function observeCards() {
  const cards = document.querySelectorAll('.ticket-card');
  if (!cards.length) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const idx = parseInt(entry.target.dataset.cardIdx || 0);
      entry.target.style.animationDelay = `${idx * 40}ms`;
      entry.target.classList.add('animate-in');
      io.unobserve(entry.target);
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  cards.forEach((card, i) => {
    card.dataset.cardIdx = i;
    io.observe(card);
  });
}

/* ── Stamp animation (item detail) ─────────────────────── */
function animateStamps() {
  // CSS handles the animation via .stamp-animate class + animation-delay
  // This just ensures the class is present after DOM is ready
  document.querySelectorAll('.stamp-animate').forEach(el => {
    // Force reflow to restart animation if navigated back
    el.style.animation = 'none';
    el.offsetHeight; // trigger reflow
    el.style.animation = '';
  });
}

/* ── Drag-drop file upload ──────────────────────────────── */
function initUpload() {
  const zone      = document.getElementById('uploadZone');
  const input     = document.getElementById('fileInput');
  const inner     = document.getElementById('uploadInner');
  const preview   = document.getElementById('uploadPreview');
  const previewImg = document.getElementById('previewImg');
  const removeBtn = document.getElementById('removeUpload');

  if (!zone || !input) return;

  function showPreview(file) {
    if (!file || !file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = e => {
      previewImg.src = e.target.result;
      inner.classList.add('d-none');
      preview.classList.remove('d-none');
    };
    reader.readAsDataURL(file);
  }

  ['dragenter', 'dragover'].forEach(ev =>
    zone.addEventListener(ev, e => { e.preventDefault(); zone.classList.add('dragover'); })
  );
  ['dragleave', 'drop'].forEach(ev =>
    zone.addEventListener(ev, () => zone.classList.remove('dragover'))
  );
  zone.addEventListener('drop', e => {
    e.preventDefault();
    if (e.dataTransfer.files[0]) { input.files = e.dataTransfer.files; showPreview(e.dataTransfer.files[0]); }
  });
  input.addEventListener('change', () => showPreview(input.files[0]));

  removeBtn?.addEventListener('click', () => {
    input.value = '';
    previewImg.src = '';
    preview.classList.add('d-none');
    inner.classList.remove('d-none');
  });
}

/* ── Report form Lost/Found toggle ─────────────────────── */
function initReportToggle() {
  const toggleLost  = document.getElementById('toggle-lost');
  const toggleFound = document.getElementById('toggle-found');
  const title       = document.getElementById('report-form-title');
  if (!toggleLost) return;

  function update() {
    if (title) title.textContent = toggleLost.checked ? 'Report a Lost Item' : 'Report a Found Item';
  }
  toggleLost.addEventListener('change', update);
  toggleFound.addEventListener('change', update);
}

/* ── Client-side form validation (Bootstrap pattern) ────── */
function initValidation() {
  document.querySelectorAll('.needs-validation').forEach(form => {
    form.addEventListener('submit', e => {
      if (!form.checkValidity()) { e.preventDefault(); e.stopPropagation(); }
      form.classList.add('was-validated');
    }, false);
  });
}

/* ── Toast ──────────────────────────────────────────────── */
function showToast(message, type = 'info') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `findly-toast toast-${type}`;
  toast.innerHTML = `
    <span class="toast-dot"></span>
    <span class="toast-msg">${message}</span>
    <button class="toast-close" aria-label="Dismiss">✕</button>
  `;
  container.appendChild(toast);
  toast.querySelector('.toast-close').addEventListener('click', () => toast.remove());
  setTimeout(() => toast?.remove(), 4500);
}
window.findlyToast = showToast; // expose globally for inline handlers

/* ── Admin panel JS tabs ────────────────────────────────── */
function initAdminTabs() {
  const links = document.querySelectorAll('.admin-nav-link[data-panel]');
  if (!links.length) return;

  function activate(link) {
    links.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
    const panelId = link.dataset.panel;
    document.querySelectorAll('.admin-panel').forEach(p => p.classList.remove('active'));
    document.getElementById(panelId)?.classList.add('active');
    // Update page title
    const titleEl = document.querySelector('.admin-page-title');
    if (titleEl) titleEl.textContent = link.querySelector('.panel-label')?.textContent || '';
  }

  links.forEach(link => link.addEventListener('click', e => { e.preventDefault(); activate(link); }));
  activate(links[0]); // default to first panel
}

/* ── Auth card tab switch ───────────────────────────────── */
function initAuthTabs() {
  const tabs = document.querySelectorAll('.auth-tab');
  if (!tabs.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      document.querySelectorAll('.auth-form').forEach(f => f.classList.add('d-none'));
      document.getElementById(tab.dataset.target)?.classList.remove('d-none');
    });
  });
}

/* ── Hero search form ───────────────────────────────────── */
function initHeroSearch() {
  const form = document.getElementById('heroSearchForm');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const q = form.querySelector('input[name="q"]').value.trim();
    window.location.href = q ? `browse.html?q=${encodeURIComponent(q)}` : 'browse.html';
  });
}

/* ── Filter pills — remove on click ────────────────────── */
function initFilterPills() {
  document.querySelectorAll('.pill-remove').forEach(btn => {
    btn.addEventListener('click', () => {
      const fieldId = btn.dataset.field;
      const field = fieldId && document.getElementById(fieldId);
      if (field) field.value = '';
      btn.closest('.filter-pill')?.remove();
    });
  });
}

/* ── Boot ───────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  observeCards();
  animateStamps();
  initUpload();
  initReportToggle();
  initValidation();
  initAdminTabs();
  initAuthTabs();
  initHeroSearch();
  initFilterPills();
});
