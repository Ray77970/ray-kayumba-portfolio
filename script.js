const cursor = document.getElementById('cursor'), ring = document.getElementById('ring');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cursor.style.left = mx + 'px'; cursor.style.top = my + 'px';
});

(function tick() {
  rx += (mx - rx) * .1; ry += (my - ry) * .1;
  ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
  requestAnimationFrame(tick);
})();

document.querySelectorAll('a,button,.proj-row,.svc-item,.hero-stat,.stag').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.transform = 'translate(-50%,-50%) scale(3)';
    cursor.style.background = 'rgba(255,255,255,.35)';
    ring.style.width = '44px'; ring.style.height = '44px';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.transform = 'translate(-50%,-50%) scale(1)';
    cursor.style.background = '#fff';
    ring.style.width = '28px'; ring.style.height = '28px';
  });
});

const obs = new IntersectionObserver(entries => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) setTimeout(() => e.target.classList.add('visible'), i * 90);
  });
}, { threshold: .08 });
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

// ── Mobile menu ──
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const menuOverlay = document.getElementById('menuOverlay');

if (menuBtn && mobileMenu) {
  const open = () => {
    mobileMenu.classList.add('open');
    menuOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    menuBtn.setAttribute('aria-expanded', 'true');
    menuBtn.innerHTML = `<span></span><span></span>`;
    menuBtn.classList.add('is-open');
  };
  const close = () => {
    mobileMenu.classList.remove('open');
    menuOverlay.classList.remove('open');
    document.body.style.overflow = '';
    menuBtn.setAttribute('aria-expanded', 'false');
    menuBtn.innerHTML = `<span></span><span></span><span></span>`;
    menuBtn.classList.remove('is-open');
  };
  menuBtn.addEventListener('click', () => menuBtn.classList.contains('is-open') ? close() : open());
  menuOverlay.addEventListener('click', close);
  mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
}

function handleSubmit(e) {
  e.preventDefault();
  const btn = document.getElementById('submitBtn');
  const form = e.target;
  btn.textContent = 'Senden…';
  btn.disabled = true;

  fetch('https://formspree.io/f/mjgpaepp', {
    method: 'POST',
    headers: { 'Accept': 'application/json' },
    body: new FormData(form)
  })
  .then(res => {
    if (res.ok) {
      btn.textContent = 'Gesendet ✓';
      btn.style.background = '#4ade80';
      btn.style.color = '#052e16';
      form.reset();
      setTimeout(() => {
        btn.textContent = 'Absenden';
        btn.style.background = '';
        btn.style.color = '';
        btn.disabled = false;
      }, 4000);
    } else {
      btn.textContent = 'Fehler – nochmal versuchen';
      btn.style.background = '';
      btn.style.color = '';
      btn.disabled = false;
    }
  })
  .catch(() => {
    btn.textContent = 'Fehler – nochmal versuchen';
    btn.style.background = '';
    btn.style.color = '';
    btn.disabled = false;
  });
}
