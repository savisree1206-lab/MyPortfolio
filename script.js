/* ============================================
   SAVITHA SREE S - PORTFOLIO JAVASCRIPT
   ============================================ */

"use strict";

// ==========================================
// NAVBAR SCROLL BEHAVIOR
// ==========================================
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');

function handleNavbarScroll() {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  updateActiveNavLink();
}

function updateActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  let currentSection = '';
  const scrollPos = window.scrollY + 120;

  sections.forEach(section => {
    if (section.offsetTop <= scrollPos) {
      currentSection = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', handleNavbarScroll, { passive: true });
handleNavbarScroll();

// ==========================================
// HAMBURGER MENU
// ==========================================
const hamburger = document.getElementById('hamburger');
const navLinksContainer = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinksContainer.classList.toggle('open');
  hamburger.classList.toggle('open');
});

navLinksContainer.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navLinksContainer.classList.remove('open');
    hamburger.classList.remove('open');
  });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (!navbar.contains(e.target)) {
    navLinksContainer.classList.remove('open');
    hamburger.classList.remove('open');
  }
});

// ==========================================
// THEME TOGGLE
// ==========================================
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Load saved theme
if (localStorage.getItem('theme') === 'light') {
  body.classList.add('light-theme');
}

themeToggle && themeToggle.addEventListener('click', () => {
  body.classList.toggle('light-theme');
  const isLight = body.classList.contains('light-theme');
  localStorage.setItem('theme', isLight ? 'light' : 'dark');

  // Rotate animation
  themeToggle.style.transform = 'rotate(360deg)';
  setTimeout(() => { themeToggle.style.transform = ''; }, 400);
});

// ==========================================
// HERO PARTICLES
// ==========================================
function createParticles() {
  const container = document.getElementById('hero-particles');
  if (!container) return;

  const colors = [
    'rgba(124, 111, 247, 0.7)',
    'rgba(244, 114, 182, 0.7)',
    'rgba(56, 189, 248, 0.7)',
    'rgba(167, 139, 250, 0.5)',
  ];

  for (let i = 0; i < 30; i++) {
    const p = document.createElement('div');
    p.classList.add('particle');
    const size = Math.random() * 5 + 2;
    p.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${Math.random() * 100}%;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      --dur: ${Math.random() * 10 + 8}s;
      --delay: ${Math.random() * 8}s;
      --op: ${Math.random() * 0.5 + 0.2};
    `;
    container.appendChild(p);
  }
}

createParticles();

// ==========================================
// TYPEWRITER EFFECT
// ==========================================
const typewriterTexts = [
  'Computer Science Engineer',
  'Java Developer',
  'Web Developer',
  'UI/UX Designer',
  'Problem Solver',
  'Open Source Enthusiast',
];

let typeIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typewriterPaused = false;

const typewriterEl = document.getElementById('typewriter-text');

function runTypewriter() {
  if (!typewriterEl || typewriterPaused) return;

  const currentText = typewriterTexts[typeIndex];

  if (isDeleting) {
    typewriterEl.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typewriterEl.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;
  }

  if (!isDeleting && charIndex === currentText.length) {
    setTimeout(() => { isDeleting = true; }, 1800);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    typeIndex = (typeIndex + 1) % typewriterTexts.length;
  }

  const speed = isDeleting ? 60 : 100;
  setTimeout(runTypewriter, speed);
}

setTimeout(runTypewriter, 800);

// ==========================================
// SCROLL ANIMATIONS
// ==========================================
const observerOptions = {
  threshold: 0.12,
  rootMargin: '0px 0px -40px 0px'
};

const animObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('animated');
      }, 60 * (entry.target.dataset.delay || 0));
      animObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

function setupAnimations() {
  // Section headers
  document.querySelectorAll('.section-header').forEach((el, i) => {
    el.setAttribute('data-animate', '');
    animObserver.observe(el);
  });

  // About grid
  const aboutVisual = document.querySelector('.about-visual');
  const aboutContent = document.querySelector('.about-content');
  if (aboutVisual) {
    aboutVisual.setAttribute('data-animate-left', '');
    animObserver.observe(aboutVisual);
  }
  if (aboutContent) {
    aboutContent.setAttribute('data-animate-right', '');
    animObserver.observe(aboutContent);
  }

  // Skill categories
  document.querySelectorAll('.skill-category').forEach((el, i) => {
    el.setAttribute('data-animate', '');
    el.dataset.delay = i;
    animObserver.observe(el);
  });

  // Project cards
  document.querySelectorAll('.project-card').forEach((el, i) => {
    el.setAttribute('data-animate', '');
    el.dataset.delay = i;
    animObserver.observe(el);
  });

  // Timeline items
  document.querySelectorAll('.timeline-item').forEach((el, i) => {
    el.setAttribute('data-animate', '');
    el.dataset.delay = i;
    animObserver.observe(el);
  });

  // Cert cards
  document.querySelectorAll('.cert-card').forEach((el, i) => {
    el.setAttribute('data-animate', '');
    el.dataset.delay = i;
    animObserver.observe(el);
  });

  // Contact cards
  document.querySelectorAll('.contact-card').forEach((el, i) => {
    el.setAttribute('data-animate', '');
    el.dataset.delay = i;
    animObserver.observe(el);
  });

  // Contact form
  const contactForm = document.querySelector('.contact-form-wrapper');
  if (contactForm) {
    contactForm.setAttribute('data-animate', '');
    animObserver.observe(contactForm);
  }

  // Stat cards
  document.querySelectorAll('.stat-card').forEach((el, i) => {
    el.setAttribute('data-animate', '');
    el.dataset.delay = i;
    animObserver.observe(el);
  });
}

setupAnimations();

// ==========================================
// SCROLL TO TOP BUTTON
// ==========================================
const scrollTopBtn = document.getElementById('scroll-top-btn');

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    scrollTopBtn.classList.add('visible');
  } else {
    scrollTopBtn.classList.remove('visible');
  }
}, { passive: true });

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ==========================================
// CONTACT FORM HANDLER
// ==========================================
const contactForm = document.getElementById('contact-form');
const formSuccess = document.getElementById('form-success');
const formError = document.getElementById('form-error');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email-input').value.trim();
    const subject = document.getElementById('contact-subject').value.trim();
    const message = document.getElementById('contact-message').value.trim();

    const submitBtn = document.getElementById('contact-submit-btn');
    const btnSpan = submitBtn.querySelector('span');

    // Clear previous feedback
    if (formSuccess) formSuccess.style.display = 'none';
    if (formError) formError.style.display = 'none';

    // Simple validation
    if (!name || !email || !message) {
      if (formError) {
        formError.textContent = '❌ Please fill out all required fields.';
        formError.style.display = 'block';
      }
      return;
    }

    submitBtn.disabled = true;
    btnSpan.textContent = 'Sending...';

    fetch("https://formsubmit.co/ajax/savisree1206@gmail.com", {
      method: "POST",
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        email: email,
        subject: subject || 'Contact Form Submission',
        message: message
      })
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Form submission failed');
      }
    })
    .then(data => {
      contactForm.reset();
      if (formSuccess) {
        formSuccess.style.display = 'block';
        setTimeout(() => {
          formSuccess.style.display = 'none';
        }, 6000);
      }
      submitBtn.disabled = false;
      btnSpan.textContent = 'Send Message';
    })
    .catch(error => {
      console.error('Error sending message:', error);
      if (formError) {
        formError.textContent = '❌ Failed to send message. Please check your connection and try again.';
        formError.style.display = 'block';
      }
      submitBtn.disabled = false;
      btnSpan.textContent = 'Send Message';
    });
  });
}

// ==========================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  });
});

// ==========================================
// SKILL TAG HOVER EFFECT
// ==========================================
document.querySelectorAll('.skill-tag').forEach(tag => {
  tag.addEventListener('mouseenter', () => {
    tag.style.transform = 'scale(1.08) rotate(-1deg)';
  });
  tag.addEventListener('mouseleave', () => {
    tag.style.transform = '';
  });
});

// ==========================================
// PARALLAX ON HERO SECTION
// ==========================================
const heroBg = document.querySelector('.hero-bg');
window.addEventListener('scroll', () => {
  if (heroBg && window.scrollY < window.innerHeight) {
    heroBg.style.transform = `translateY(${window.scrollY * 0.3}px)`;
  }
}, { passive: true });

// ==========================================
// COUNTER ANIMATION FOR STAT CARDS
// ==========================================
function animateCounter(el, target, duration, isFloat) {
  const start = performance.now();
  const startVal = 0;

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease out cubic
    const current = startVal + (target - startVal) * eased;

    if (isFloat) {
      el.textContent = current.toFixed(2);
    } else {
      el.textContent = Math.round(current) + (el.dataset.suffix || '');
    }

    if (progress < 1) requestAnimationFrame(update);
  }

  requestAnimationFrame(update);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const statNumbers = entry.target.querySelectorAll('.stat-number');
      statNumbers.forEach(numEl => {
        const text = numEl.textContent.trim();
        if (text.includes('8.17') || text === '8.17') {
          animateCounter(numEl, 8.17, 1500, true);
        } else if (text.includes('8+')) {
          numEl.textContent = '0+';
          let cur = 0;
          const int = setInterval(() => {
            cur++;
            numEl.textContent = cur + '+';
            if (cur >= 8) { numEl.textContent = '8+'; clearInterval(int); }
          }, 160);
        } else if (text === '3') {
          animateCounter(numEl, 3, 1000, false);
        }
      });
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.6 });

const aboutStats = document.querySelector('.about-stats');
if (aboutStats) counterObserver.observe(aboutStats);

console.log(`%c
  ╔══════════════════════════════════════╗
  ║   Savitha Sree S — CS Engineer      ║
  ║   savisree1206@gmail.com            ║
  ║   Portfolio crafted with ❤️          ║
  ╚══════════════════════════════════════╝
`, 'color: #7c6ff7; font-family: monospace; font-size: 12px;');

// ==========================================
// PROJECT SCREENSHOT CAROUSEL
// ==========================================
const carouselState = {};

function initCarousel(id) {
  carouselState[id] = { current: 0, total: document.querySelectorAll(`#carousel-track-${id} .carousel-slide`).length };
  updateCarousel(id);

  // Touch/drag support
  const carousel = document.getElementById(`carousel-${id}`);
  if (!carousel) return;
  let startX = 0;
  carousel.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
  carousel.addEventListener('touchend', e => {
    const diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) moveCarousel(id, diff > 0 ? 1 : -1);
  });

  // Auto-advance
  carouselState[id].timer = setInterval(() => moveCarousel(id, 1), 4000);
  carousel.addEventListener('mouseenter', () => clearInterval(carouselState[id].timer));
  carousel.addEventListener('mouseleave', () => {
    carouselState[id].timer = setInterval(() => moveCarousel(id, 1), 4000);
  });
}

function moveCarousel(id, dir) {
  const state = carouselState[id];
  if (!state) return;
  state.current = (state.current + dir + state.total) % state.total;
  updateCarousel(id);
}

function goToSlide(id, index) {
  if (!carouselState[id]) return;
  carouselState[id].current = index;
  updateCarousel(id);
}

function updateCarousel(id) {
  const state = carouselState[id];
  const track = document.getElementById(`carousel-track-${id}`);
  const dots = document.querySelectorAll(`#carousel-dots-${id} .carousel-dot`);
  if (track) track.style.transform = `translateX(-${state.current * 100}%)`;
  dots.forEach((dot, i) => dot.classList.toggle('active', i === state.current));
}

// Init all carousels on page
document.querySelectorAll('.project-carousel').forEach(el => {
  const id = el.id.replace('carousel-', '');
  initCarousel(id);
});
