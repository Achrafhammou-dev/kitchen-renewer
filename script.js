document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Lucide icons ---------- */
  if (window.lucide) lucide.createIcons();

  /* ---------- AOS ---------- */
  if (window.AOS) AOS.init({ once: true, duration: 800, offset: 60, easing: 'ease-out-cubic' });

  /* ---------- i18n (FR / EN / AR + RTL) ---------- */
  if (window.initI18n) window.initI18n();

  document.addEventListener('languagechanged', () => {
    if (window.lucide) lucide.createIcons();
    initModelsSwiper(document.documentElement.getAttribute('dir') === 'rtl');
  });

  /* ---------- Loader ---------- */
  const loader = document.getElementById('loader');
  window.addEventListener('load', () => {
    setTimeout(() => loader.classList.add('hide'), 500);
  });
  // fallback in case load event already fired / is slow
  setTimeout(() => loader.classList.add('hide'), 2200);

  /* ---------- Scroll progress + navbar state ---------- */
  const progress = document.getElementById('scrollProgress');
  const navbar = document.getElementById('navbar');

  function onScroll() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progress.style.width = pct + '%';

    if (scrollTop > 40) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  }
  document.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile menu ---------- */
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });
  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => mobileMenu.classList.remove('open'));
  });

  /* ---------- Hero parallax (mouse + scroll) ---------- */
  const heroImage = document.getElementById('heroImage');
  const heroSection = document.querySelector('.hero');

  if (heroSection && window.matchMedia('(pointer: fine)').matches) {
    heroSection.addEventListener('mousemove', (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 18;
      const y = (e.clientY / innerHeight - 0.5) * 18;
      heroImage.style.transform = `scale(1.08) translate(${x}px, ${y}px)`;
    });
    heroSection.addEventListener('mouseleave', () => {
      heroImage.style.transform = 'scale(1.08) translate(0,0)';
    });
  }

  if (window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(heroImage, {
      yPercent: 12,
      ease: 'none',
      scrollTrigger: {
        trigger: heroSection,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });
  }

  /* ---------- Animated counters ---------- */
  const counters = document.querySelectorAll('.hero-stat-num');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.count, 10);
        const suffix = el.dataset.suffix || '';
        const duration = 1600;
        const start = performance.now();
        function tick(now) {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.round(eased * target) + suffix;
          if (p < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
        counterObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => counterObserver.observe(c));

  /* ---------- Before / After slider ---------- */
  const baSlider = document.getElementById('baSlider');
  const baBefore = document.getElementById('baBefore');
  const baHandle = document.getElementById('baHandle');
  const baRange = document.getElementById('baRange');

  function setBaPosition(pct) {
    pct = Math.max(0, Math.min(100, pct));
    baBefore.style.clipPath = `inset(0 ${100 - pct}% 0 0)`;
    baHandle.style.left = pct + '%';
    baRange.value = pct;
  }
  setBaPosition(50);

  baRange.addEventListener('input', (e) => setBaPosition(parseFloat(e.target.value)));

  let dragging = false;
  function pctFromEvent(e) {
    const rect = baSlider.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    return ((clientX - rect.left) / rect.width) * 100;
  }
  baSlider.addEventListener('mousedown', (e) => { dragging = true; setBaPosition(pctFromEvent(e)); });
  window.addEventListener('mousemove', (e) => { if (dragging) setBaPosition(pctFromEvent(e)); });
  window.addEventListener('mouseup', () => dragging = false);
  baSlider.addEventListener('touchstart', (e) => { dragging = true; setBaPosition(pctFromEvent(e)); }, { passive: true });
  baSlider.addEventListener('touchmove', (e) => { if (dragging) setBaPosition(pctFromEvent(e)); }, { passive: true });
  baSlider.addEventListener('touchend', () => dragging = false);

  /* ---------- Models Swiper ---------- */
  let modelsSwiperInstance = null;
  function initModelsSwiper(isRtl) {
    if (!window.Swiper) return;
    if (modelsSwiperInstance) {
      modelsSwiperInstance.destroy(true, true);
      modelsSwiperInstance = null;
    }
    modelsSwiperInstance = new Swiper('.modelsSwiper', {
      slidesPerView: 1.15,
      spaceBetween: 20,
      centeredSlides: false,
      rtl: !!isRtl,
      pagination: { el: '.swiper-pagination', clickable: true },
      navigation: { nextEl: '.modelsNext', prevEl: '.modelsPrev' },
      breakpoints: {
        640: { slidesPerView: 2.2, spaceBetween: 24 },
        1024: { slidesPerView: 3.4, spaceBetween: 28 },
        1440: { slidesPerView: 4.2, spaceBetween: 30 },
      },
    });
  }
  initModelsSwiper(document.documentElement.getAttribute('dir') === 'rtl');

  /* ---------- FAQ accordion ---------- */
  document.querySelectorAll('.faq-item').forEach(item => {
    const q = item.querySelector('.faq-q');
    const a = item.querySelector('.faq-a');
    q.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(openItem => {
        if (openItem !== item) {
          openItem.classList.remove('open');
          openItem.querySelector('.faq-a').style.maxHeight = null;
        }
      });
      if (isOpen) {
        item.classList.remove('open');
        a.style.maxHeight = null;
      } else {
        item.classList.add('open');
        a.style.maxHeight = a.scrollHeight + 'px';
      }
    });
  });

  /* ---------- Consultation form ---------- */
  const form = document.getElementById('consultForm');
  const submitBtn = document.getElementById('submitBtn');
  const submitText = document.getElementById('submitText');
  const submitLoader = document.getElementById('submitLoader');
  const formFields = document.getElementById('formFields');
  const formSuccess = document.getElementById('formSuccess');

  function validateField(field) {
    const wrapper = field.closest('.field');
    if (field.hasAttribute('required') && !field.value.trim()) {
      wrapper.classList.add('invalid');
      return false;
    }
    if (field.id === 'telephone' && field.value.trim()) {
      const phoneOk = /^[0-9+\s.-]{8,}$/.test(field.value.trim());
      if (!phoneOk) { wrapper.classList.add('invalid'); return false; }
    }
    wrapper.classList.remove('invalid');
    return true;
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const requiredFields = form.querySelectorAll('[required]');
    let allValid = true;
    requiredFields.forEach(f => { if (!validateField(f)) allValid = false; });

    const phoneField = document.getElementById('telephone');
    if (phoneField.value.trim() && !validateField(phoneField)) allValid = false;

    if (!allValid) {
      const firstInvalid = form.querySelector('.field.invalid input, .field.invalid select');
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    // Loading state
    submitBtn.disabled = true;
    submitText.classList.add('hidden');
    submitLoader.classList.remove('hidden');

    setTimeout(() => {
      formFields.classList.add('hidden');
      formSuccess.classList.remove('hidden');
      if (window.lucide) lucide.createIcons();
      submitBtn.disabled = false;
      submitText.classList.remove('hidden');
      submitLoader.classList.add('hidden');
      form.reset();
    }, 1500);
  });

  // live-clear invalid state
  form.querySelectorAll('input, select').forEach(f => {
    f.addEventListener('input', () => f.closest('.field').classList.remove('invalid'));
  });

  /* ---------- Footer year ---------- */
  document.getElementById('year').textContent = new Date().getFullYear();

  /* ---------- Section reveal for feature cards / timeline (GSAP) ---------- */
  if (window.gsap && window.ScrollTrigger) {
    gsap.utils.toArray('.timeline-step').forEach((step, i) => {
      gsap.from(step, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: { trigger: step, start: 'top 85%' },
      });
    });
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const modelsSwiper = new Swiper(".modelsSwiper", {
    // Espacement et configuration de base
    spaceBetween: 24,
    grabCursor: true,
    loop: false,
    
    // Auto-hauteur désactivée pour que les cartes aient toute la même hauteur (via Tailwind !h-auto)
    autoHeight: false, 

    // Configuration Responsive
    breakpoints: {
      0: {
        slidesPerView: 1.1, // Laisse déborder légèrement la 2ème carte sur mobile pour indiquer le scroll
        spaceBetween: 16,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 28,
      },
    },

    // Navigation (Flèches)
    navigation: {
      nextEl: ".modelsNext",
      prevEl: ".modelsPrev",
    },

    // Pagination (Points en bas)
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
  });

  // Activation des icônes Lucide si vous utilisez la librairie
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }
});