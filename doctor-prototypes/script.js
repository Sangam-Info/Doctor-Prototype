/* ============================================================
   Doctor Prototype — interactions
   Preserved: toast on prototype select, arrow select.
   Menu now toggles the mobile nav. Added: reveal, hero 3D
   parallax/tilt, card 3D tilt + glare. Reduced-motion aware.
   ============================================================ */

/* ---------- Toast (unchanged behaviour) ---------- */
const toast = document.querySelector('.toast');
const showToast = (name) => {
  toast.textContent = `${name} prototype selected`;
  toast.classList.add('show');
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove('show'), 2400);
};
document.querySelectorAll('[data-name]').forEach((b) =>
  b.addEventListener('click', () => showToast(b.dataset.name)));
document.querySelectorAll('.arrow').forEach((b) =>
  b.addEventListener('click', () => showToast(b.getAttribute('aria-label').replace('Open ', ''))));

/* ---------- Mobile nav toggle ---------- */
const menu = document.querySelector('.menu');
const nav = document.getElementById('nav');
menu.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') === 'true';
  menu.setAttribute('aria-expanded', String(!open));
  if (nav) nav.classList.toggle('open', !open);
});
if (nav) nav.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => {
  nav.classList.remove('open');
  menu.setAttribute('aria-expanded', 'false');
}));

/* ---------- Enhancements (respect reduced motion) ---------- */
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const revealEls = document.querySelectorAll('.reveal');
if (reduce || !('IntersectionObserver' in window)) {
  revealEls.forEach((el) => el.classList.add('in'));
} else {
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); } });
  }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
  revealEls.forEach((el) => io.observe(el));
}

if (!reduce) {
  /* ---- Hero 3D parallax + tilt ---- */
  const wrap = document.getElementById('heroStage');
  const stage = document.getElementById('stage3d');
  const layers = stage ? [...stage.querySelectorAll('.layer')] : [];
  let hx = 0, hy = 0, ht = false;
  const renderHero = () => {
    stage.style.setProperty('--ry', (hx * 7).toFixed(2) + 'deg');
    stage.style.setProperty('--rx', (-hy * 5).toFixed(2) + 'deg');
    layers.forEach((l) => {
      const d = parseFloat(l.dataset.depth) || 0;
      const base = l.classList.contains('doctor') ? 'translateZ(40px) ' : '';
      l.style.transform = `${base}translate3d(${(hx * d).toFixed(1)}px, ${(hy * d * 0.6).toFixed(1)}px, 0)`;
    });
    ht = false;
  };
  const queueHero = () => { if (!ht) { requestAnimationFrame(renderHero); ht = true; } };
  if (wrap && stage) {
    wrap.addEventListener('pointermove', (e) => {
      const r = wrap.getBoundingClientRect();
      hx = (e.clientX - r.left) / r.width - 0.5;
      hy = (e.clientY - r.top) / r.height - 0.5;
      queueHero();
    });
    wrap.addEventListener('pointerleave', () => { hx = 0; hy = 0; queueHero(); });
    if (window.DeviceOrientationEvent && 'ontouchstart' in window) {
      window.addEventListener('deviceorientation', (ev) => {
        if (ev.gamma == null) return;
        hx = Math.max(-0.5, Math.min(0.5, ev.gamma / 40));
        hy = Math.max(-0.5, Math.min(0.5, ((ev.beta || 40) - 40) / 60));
        queueHero();
      }, true);
    }
  }

  /* ---- Card depth: glare + building parallax (no card rotation, so
     buttons never shift and stay reliably clickable) ---- */
  document.querySelectorAll('.prototype .tilt').forEach((card) => {
    const bld = card.querySelector('.bld');
    let raf = false, mx = 0, my = 0;
    const render = () => {
      if (bld) bld.style.transform = `translateZ(46px) translate3d(${(mx * 14).toFixed(1)}px, ${(my * 8).toFixed(1)}px, 0)`;
      raf = false;
    };
    card.addEventListener('pointermove', (e) => {
      const r = card.getBoundingClientRect();
      mx = (e.clientX - r.left) / r.width - 0.5;
      my = (e.clientY - r.top) / r.height - 0.5;
      card.style.setProperty('--mx', ((mx + 0.5) * 100).toFixed(1) + '%');
      card.style.setProperty('--my', ((my + 0.5) * 100).toFixed(1) + '%');
      if (!raf) { requestAnimationFrame(render); raf = true; }
    });
    card.addEventListener('pointerleave', () => {
      if (bld) bld.style.transform = 'translateZ(46px)';
    });
  });
}
