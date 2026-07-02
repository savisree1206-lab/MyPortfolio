/* ================================================================
   PROJECT DETAIL PAGE — SLIDESHOW ENGINE & DATA
   Savitha Sree S Portfolio
   ================================================================ */

'use strict';

/* ================================================================
   PROJECT DATA
   Add slides here for each project.
   image: path relative to portfolio folder (e.g. 'venturevibe_hero.png')
   image: null  → shows the "Screenshot Coming Soon" placeholder
   features: optional tags shown on the slide (max 4)
   ================================================================ */
const PROJECTS = {

  dbms: {
    id: 'dbms',
    title: 'ClubHub — Club Event Management',
    type: 'Full Stack Web Application · KEC',
    liveUrl: 'https://dbms-lemon.vercel.app',
    githubUrl: 'https://github.com/savisree1206-lab/dbms',
    description:
      'A full-stack club and event management platform built for Kongu Engineering College (KEC). ClubHub connects students and club admins on a single live platform — students discover and register for campus events, join clubs like CSI, IEEE, and SDC; while club admins manage memberships, approve requests, and create new events, all in real time. Deployed on Vercel.',
    tech: ['JavaScript', 'HTML / CSS', 'DBMS', 'Full Stack', 'Vercel'],
    highlights: [
      'Dual-portal system — separate Student & Club Admin access',
      'Students can browse events (IEEE, SDC, Hackathons) and register',
      'Club admins create events, approve join requests, manage clubs',
      'Live deployed on Vercel — accessible from any device',
    ],
    slides: [
      {
        image: 'screenshots/dbms_1_landing.png',
        title: 'Authentication Portal',
        caption:
          'ClubHub greets users with a sleek dark-themed authentication portal that cleanly separates two roles — Student Portal and Club Admin Portal. Each has its own Login and Sign Up flow, ensuring a tailored experience from the very first click. The deep navy gradient background and purple-accented typography set a professional campus tech tone.',
        features: ['Dual Role Access', 'Student Portal', 'Club Admin Portal', 'Secure Auth'],
      },
      {
        image: 'screenshots/dbms_2_student_home.png',
        title: 'Student Dashboard — Explore Events',
        caption:
          'After signing in, students land on the KEC Club Management homepage — a bold, full-width hero declaring "Kongu Engineering Club Management" with the tagline "Empowering innovation and leadership through student-led organizations." The navigation bar provides instant access to Events and Clubs, making discovery seamless. A "Signup successful!" toast confirms the smooth onboarding experience.',
        features: ['Hero Landing', 'Event Discovery', 'Club Navigation', 'Live Toast Alerts'],
      },
      {
        image: 'screenshots/dbms_3_events.png',
        title: 'Campus Events — Explore & Register',
        caption:
          'The Explore Events section presents upcoming campus activities as elegant card-based listings. Each card shows the organizing club (IEEE Student Branch, Self Development Cell), event title (Hackathon, Vision), description, venue (KEC), capacity, max team size, and date — giving students everything they need to decide and register instantly. The deep card shadows and subtle accent borders create a premium feel.',
        features: ['Event Cards', 'Club Tags', 'Capacity & Team Info', 'Date Display'],
      },
      {
        image: 'screenshots/dbms_4_admin.png',
        title: 'Club Admin Panel — Manage & Approve',
        caption:
          'Club administrators get a dedicated management panel showing their club profile (Computer Society of India — Club ID #7), faculty in-charge (Dr. R. Thangarajan), and a rich "About the Club" description. A prominent "+ Create Event" button lets admins add new events instantly. The "Pending Join Requests" section shows incoming member applications (like "Shahul 2 — Old Member") with a one-click Approve button, streamlining club membership management.',
        features: ['Club Profile View', 'Faculty In-Charge', 'Create Event CTA', 'Approve Members'],
      },
      {
        image: 'screenshots/dbms_5_create_event.png',
        title: 'Create New Event — Admin Form',
        caption:
          'A clean modal form allows club admins to create new campus events in seconds. Fields include Event Title, Description, Date/Time picker, Location, Total Capacity, and Max Team Size — covering every logistical detail. The full-width purple gradient "Create Event" button ties the form together with a premium call-to-action, perfectly matching the ClubHub brand identity.',
        features: ['Event Title & Description', 'Date & Location Picker', 'Capacity Settings', 'One-click Submit'],
      },
    ],
  },

  resqnet: {
    id: 'resqnet',
    title: 'ResQNet',
    type: 'Real-Time Disaster Response Platform',
    liveUrl: 'https://res-q-net-sigma.vercel.app',
    githubUrl: 'https://github.com/savisree1206-lab/resqnet',
    description:
      'A real-time disaster information aggregation software developed for NDRF. Rapidly aggregates, visualizes, and coordinates disaster response data for enhanced situational awareness during crises. Features interactive spatial mapping and multilingual support.',
    tech: ['React', 'Leaflet', 'Vite', 'Emergency Response', 'Vercel'],
    highlights: [
      'Interactive mapping with Leaflet for real-time disaster tracking',
      'Multilingual interface with built-in translation controls',
      'Efficient resource allocation & volunteer coordination dashboard',
      'Optimized Vite build with high responsiveness and low latency',
    ],
    slides: [
      {
        image: 'resqnet_hero.png',
        title: 'Operations Dashboard Overview',
        caption:
          'ResQNet provides NDRF command centers with a premium operations dashboard — featuring live crisis maps, real-time alert logs, resource telemetry, and localization options for crisis volunteers.',
        features: ['Operations Map', 'Live Alert Logs', 'NDRF Coordination', 'Secure Portal'],
      },
    ],
  },

  travel: {
    id: 'travel',
    title: 'VentureVibe — Travel Booking',
    type: 'Full Stack Travel Web Application',
    liveUrl: 'https://fsdmini-frontend.onrender.com',
    githubUrl: 'https://github.com/savisree1206-lab/fsdmini',
    description:
      'A full-stack travel booking portal featuring curated destinations — Bali, Santorini, Swiss Alps, Kyoto — with rich detail pages, star ratings, transparent pricing, and seamless booking flows. Built with a modern frontend and deployed live on Render.',
    tech: ['HTML / CSS / JS', 'React', 'Node.js', 'Render'],
    highlights: [
      'Live deployed at fsdmini-frontend.onrender.com',
      'Curated destination cards with ratings and pricing',
      'End-to-end booking flow (search · select · confirm)',
      'Responsive design with mobile-first approach',
    ],
    slides: [
      {
        image: 'venturevibe_hero.png',
        title: 'Hero — Explore The Unexplored',
        caption:
          'The landing page opens with a cinematic full-screen hero — sweeping landscape photography, the brand tagline "Explore The Unexplored", and bold gradient CTAs that immediately captivate and invite the user to begin their journey. Animated scroll cues draw attention to the destinations below.',
        features: ['Full-screen Hero', 'Brand Identity', 'Animated CTA', 'Immersive Design'],
      },
      {
        image: 'venturevibe_spots.png',
        title: 'Curated Destination Grid',
        caption:
          'A rich, interactive destination grid showcases handpicked global travel hotspots — Bali, Santorini, Swiss Alps, and Kyoto. Each card renders a stunning destination photo alongside star ratings, price-per-night, and a one-click "Quick Book" entry point that launches the full booking flow without friction.',
        features: ['Destination Cards', 'Star Ratings', 'Live Pricing', 'One-click Booking'],
      },
      {
        image: 'venturevibe_search.png',
        title: 'Smart Search & Filter',
        caption:
          'The intelligent search engine lets travelers define their dream trip with precision — destination, travel dates, group size — and instantly surfaces ranked results. A dynamic left-panel filter system narrows choices by budget range, star rating, and amenities in real time without a page reload, powered by client-side reactive state.',
        features: ['Live Search', 'Dynamic Filters', 'Budget Slider', 'Trend Badges'],
      },
      {
        image: 'venturevibe_santorini.png',
        title: 'Destination Detail Page',
        caption:
          'Each destination unfolds into a rich, magazine-style detail page — a full-width panoramic hero image of Santorini\'s iconic blue-domed cliffs at golden hour, layered with transparent booking controls. Travelers choose their duration (3, 5, or 7 nights), view live pricing, read curated trip highlights, and check amenities — all in a single fluid scroll.',
        features: ['Panoramic Hero', 'Live Pricing', 'Duration Picker', 'Amenity Showcase'],
      },
      {
        image: 'venturevibe_booking.png',
        title: 'Secure Booking & Checkout',
        caption:
          'A streamlined multi-step checkout flow guides the traveler from selection to confirmation with zero confusion. A persistent booking summary card keeps trip details visible throughout — check-in/out dates, guest count, and total cost. The secure payment section with trust badges (SSL, Instant Confirmation, Free Cancellation) builds user confidence and drives conversions.',
        features: ['Multi-step Checkout', 'Booking Summary', 'Secure Payment', 'Trust Signals'],
      },
      {
        image: 'venturevibe_dashboard.png',
        title: 'My Trips — User Dashboard',
        caption:
          'A personalized travel dashboard transforms VentureVibe from a booking tool into a full-featured travel companion. Users track upcoming trips with real-time confirmation status, relive past adventures through a photo timeline, accumulate loyalty reward points, and plan new journeys — all from a single, beautifully organized command center.',
        features: ['Trip Management', 'Loyalty Rewards', 'Travel Stats', 'Booking History'],
      },
    ],
  },

};

/* ================================================================
   SLIDESHOW ENGINE
   ================================================================ */
class Slideshow {
  constructor(project) {
    this.project    = project;
    this.slides     = project.slides;
    this.total      = project.slides.length;
    this.current    = 0;
    this.activeLayer = 'a'; // 'a' | 'b'
    this.kbVariant  = 0;    // cycles through kb1, kb2, kb3
    this.paused     = false;
    this.autoTimer  = null;
    this.AUTO_DELAY = 5500; // ms per slide
    this.touchStartX = 0;

    // ── DOM refs ──────────────────────────────────────────────
    this.layerA  = document.getElementById('layer-a');
    this.layerB  = document.getElementById('layer-b');
    this.bgA     = document.getElementById('bg-a');
    this.bgB     = document.getElementById('bg-b');
    this.phA     = document.getElementById('ph-a');
    this.phB     = document.getElementById('ph-b');

    this.watermark   = document.getElementById('slide-watermark');
    this.descPanel   = document.getElementById('desc-panel');
    this.counter     = document.getElementById('desc-counter');
    this.descTitle   = document.getElementById('desc-title');
    this.descCaption = document.getElementById('desc-caption');
    this.descFeatures= document.getElementById('desc-features');

    this.ctrlDots    = document.getElementById('ctrl-dots');
    this.progFill    = document.getElementById('ctrl-progress-fill');
    this.progTimer   = document.getElementById('ctrl-progress-timer');
    this.prevBtn     = document.getElementById('ctrl-prev');
    this.nextBtn     = document.getElementById('ctrl-next');
    this.stage       = document.getElementById('stage');

    this._init();
  }

  _init() {
    this._buildDots();
    this._renderSlide(0, false); // no crossfade on first load
    this._bindEvents();
    if (this.total > 1) this._startAuto();
  }

  /* ── Build dot indicators ────────────────────────────────── */
  _buildDots() {
    this.ctrlDots.innerHTML = '';
    for (let i = 0; i < this.total; i++) {
      const btn = document.createElement('button');
      btn.className = 'ctrl-dot' + (i === 0 ? ' is-active' : '');
      btn.setAttribute('role', 'tab');
      btn.setAttribute('aria-label', `Slide ${i + 1} of ${this.total}`);
      btn.addEventListener('click', () => this.goTo(i));
      this.ctrlDots.appendChild(btn);
    }
  }

  /* ── Set content on a layer ──────────────────────────────── */
  _setLayer(bgEl, phEl, slide) {
    if (slide.image) {
      bgEl.style.backgroundImage = `url('${slide.image}')`;
      phEl.classList.remove('visible');
    } else {
      bgEl.style.backgroundImage = 'none';
      phEl.classList.add('visible');
    }
  }

  /* ── Crossfade to a new layer ────────────────────────────── */
  _crossfade(slide) {
    const nextLayerEl = this.activeLayer === 'a' ? this.layerB : this.layerA;
    const nextBgEl    = this.activeLayer === 'a' ? this.bgB    : this.bgA;
    const nextPhEl    = this.activeLayer === 'a' ? this.phB    : this.phA;
    const prevLayerEl = this.activeLayer === 'a' ? this.layerA : this.layerB;

    // Cycle Ken Burns variant
    this.kbVariant = (this.kbVariant + 1) % 3;
    nextLayerEl.classList.remove('kb-v2', 'kb-v3');
    if (this.kbVariant === 1) nextLayerEl.classList.add('kb-v2');
    if (this.kbVariant === 2) nextLayerEl.classList.add('kb-v3');

    // Load content into the hidden layer first
    this._setLayer(nextBgEl, nextPhEl, slide);

    // Crossfade
    nextLayerEl.classList.add('is-active');
    nextLayerEl.setAttribute('aria-hidden', 'false');
    prevLayerEl.classList.remove('is-active');
    prevLayerEl.setAttribute('aria-hidden', 'true');

    this.activeLayer = this.activeLayer === 'a' ? 'b' : 'a';
  }

  /* ── Re-trigger CSS animations on desc panel ─────────────── */
  _triggerTextAnim() {
    const panel = this.descPanel;
    panel.classList.remove('anim-play');
    void panel.offsetWidth; // force reflow — makes browser re-evaluate
    panel.classList.add('anim-play');
  }

  /* ── Update progress bar position ───────────────────────── */
  _updateProgress() {
    const pct = this.total === 1 ? 100
      : (this.current / (this.total - 1)) * 100;
    this.progFill.style.width = pct + '%';
  }

  /* ── Update timer bar (auto-advance indicator) ───────────── */
  _resetTimerBar(targetPct) {
    const timer = this.progTimer;
    timer.classList.remove('is-ticking');
    void timer.offsetWidth; // force reflow
    if (this.total > 1 && !this.paused) {
      // Calculate the width the timer needs to fill until next slide's fill position
      const nextPct = this.total === 1 ? 100
        : ((this.current + 1) / (this.total - 1)) * 100;
      const currentPct = targetPct;
      const fillDelta = nextPct - currentPct;
      timer.style.setProperty('--tick-dur', `${this.AUTO_DELAY}ms`);
      timer.style.setProperty('--tick-target', `${fillDelta}%`);
      timer.style.left = currentPct + '%';
      timer.classList.add('is-ticking');
    }
  }

  /* ── Core render ─────────────────────────────────────────── */
  _renderSlide(index, animate = true) {
    const slide = this.slides[index];
    this.current = index;

    // Update slide layers
    if (animate) {
      this._crossfade(slide);
    } else {
      this._setLayer(this.bgA, this.phA, slide);
      this.layerA.classList.add('is-active');
      this.layerB.classList.remove('is-active');
      this.activeLayer = 'a';
    }

    // Update watermark number
    if (this.watermark) {
      this.watermark.textContent = String(index + 1).padStart(2, '0');
    }

    // Update counter
    const cur = String(index + 1).padStart(2, '0');
    const tot = String(this.total).padStart(2, '0');
    this.counter.textContent = `${cur} / ${tot}`;

    // Update description text
    this.descTitle.textContent   = slide.title   || '';
    this.descCaption.textContent = slide.caption || '';

    // Feature tags
    const feats = slide.features || [];
    this.descFeatures.innerHTML = feats
      .map(f => `<span class="desc-feat-tag">${f}</span>`)
      .join('');

    // Re-trigger panel animations
    this._triggerTextAnim();

    // Update dot indicators
    this.ctrlDots.querySelectorAll('.ctrl-dot').forEach((dot, i) => {
      dot.classList.toggle('is-active', i === index);
      dot.setAttribute('aria-selected', i === index ? 'true' : 'false');
    });

    // Update progress fill
    this._updateProgress();

    // Update timer bar (auto-advance indicator)
    const fillPct = this.total === 1 ? 100
      : (index / (this.total - 1)) * 100;
    if (animate) this._resetTimerBar(fillPct);

    // Disable prev/next when at bounds
    this.prevBtn.disabled = index === 0;
    this.nextBtn.disabled = index === this.total - 1;

    // Hide prev/next entirely if only 1 slide
    const hideNav = this.total <= 1;
    this.prevBtn.style.visibility = hideNav ? 'hidden' : '';
    this.nextBtn.style.visibility = hideNav ? 'hidden' : '';
  }

  /* ── Navigation methods ──────────────────────────────────── */
  goTo(index) {
    if (index === this.current || index < 0 || index >= this.total) return;
    this._renderSlide(index, true);
    this._resetAuto();
  }

  prev() { if (this.current > 0) this.goTo(this.current - 1); }

  next() {
    if (this.current < this.total - 1) {
      this.goTo(this.current + 1);
    } else {
      // Loop back to start for auto-play
      this.goTo(0);
    }
  }

  /* ── Auto-advance ────────────────────────────────────────── */
  _startAuto() {
    this.autoTimer = setInterval(() => {
      if (!this.paused) this.next();
    }, this.AUTO_DELAY);
  }

  _resetAuto() {
    if (this.autoTimer) {
      clearInterval(this.autoTimer);
      this.autoTimer = null;
    }
    if (this.total > 1) this._startAuto();
  }

  /* ── Event bindings ──────────────────────────────────────── */
  _bindEvents() {
    // Arrow buttons
    this.prevBtn.addEventListener('click', () => this.prev());
    this.nextBtn.addEventListener('click', () => this.next());

    // Pause on hover
    this.stage.addEventListener('mouseenter', () => {
      this.paused = true;
      this.progTimer.classList.remove('is-ticking');
      this.descPanel.classList.add('is-hovered');
    });
    this.stage.addEventListener('mouseleave', () => {
      this.paused = false;
      this.descPanel.classList.remove('is-hovered');
      // Restart timer bar from current position
      const fillPct = this.total === 1 ? 100
        : (this.current / (this.total - 1)) * 100;
      this._resetTimerBar(fillPct);
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          this.prev();
          break;
        case 'ArrowRight':
          e.preventDefault();
          this.next();
          break;
        case 'Escape':
          window.location.href = 'index.html#projects';
          break;
        case ' ':
          e.preventDefault();
          this.paused = !this.paused;
          break;
      }
    });

    // Touch / Swipe support
    this.stage.addEventListener('touchstart', (e) => {
      this.touchStartX = e.touches[0].clientX;
    }, { passive: true });

    this.stage.addEventListener('touchend', (e) => {
      const delta = this.touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(delta) > 48) {
        if (delta > 0) this.next();
        else           this.prev();
      }
    }, { passive: true });
  }
}

/* ================================================================
   PAGE POPULATION HELPERS
   ================================================================ */
function populateTopbar(project) {
  document.title = `${project.title} | Savitha Sree S`;

  const titleEl = document.getElementById('topbar-title');
  const typeEl  = document.getElementById('topbar-project-type');
  if (titleEl) titleEl.textContent = project.title;
  if (typeEl)  typeEl.textContent  = project.type;

  const actionsEl = document.getElementById('topbar-actions');
  if (!actionsEl) return;
  actionsEl.innerHTML = '';

  if (project.liveUrl) {
    const a = document.createElement('a');
    a.href = project.liveUrl;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.className = 'tb-btn tb-btn--live';
    a.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
        <polyline points="15 3 21 3 21 9"/>
        <line x1="10" y1="14" x2="21" y2="3"/>
      </svg>
      Live Site
    `;
    actionsEl.appendChild(a);
  }

  if (project.githubUrl) {
    const a = document.createElement('a');
    a.href = project.githubUrl;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.className = 'tb-btn tb-btn--github';
    a.innerHTML = `
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61
          c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1
          S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1
          A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78
          c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>
      </svg>
      GitHub
    `;
    actionsEl.appendChild(a);
  }
}

function populateInfoSection(project) {
  const setEl = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  };

  setEl('info-type',    project.type);
  setEl('info-heading', project.title);
  setEl('info-desc',    project.description);

  // Tech tags
  const techEl = document.getElementById('info-tech');
  if (techEl) {
    techEl.innerHTML = project.tech
      .map(t => `<span class="info-tech-tag">${t}</span>`)
      .join('');
  }

  // Highlights
  const hlEl = document.getElementById('info-highlights');
  if (hlEl) {
    hlEl.innerHTML = project.highlights
      .map(h => `<li>${h}</li>`)
      .join('');
  }

  // Action buttons
  const btnsEl = document.getElementById('info-btns');
  if (btnsEl) {
    btnsEl.innerHTML = '';

    if (project.liveUrl) {
      btnsEl.innerHTML += `
        <a href="${project.liveUrl}" target="_blank" rel="noopener" class="info-btn info-btn--live">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
            <polyline points="15 3 21 3 21 9"/>
            <line x1="10" y1="14" x2="21" y2="3"/>
          </svg>
          Visit Live Site
        </a>`;
    }

    if (project.githubUrl) {
      btnsEl.innerHTML += `
        <a href="${project.githubUrl}" target="_blank" rel="noopener" class="info-btn info-btn--github">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61
              c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1
              S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1
              A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78
              c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>
          </svg>
          View on GitHub
        </a>`;
    }
  }
}

/* ================================================================
   NOT FOUND / ERROR STATE
   ================================================================ */
function showErrorScreen(msg) {
  document.body.innerHTML = `
    <div class="error-screen">
      <svg viewBox="0 0 24 24" fill="none" stroke="rgba(201,170,113,0.6)" stroke-width="1.5"
           width="64" height="64" style="margin-bottom:8px">
        <circle cx="12" cy="12" r="10"/>
        <line x1="12" y1="8" x2="12" y2="12"/>
        <line x1="12" y1="16" x2="12.01" y2="16"/>
      </svg>
      <h2>Project Not Found</h2>
      <p>${msg}</p>
      <a href="index.html#projects">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
             width="15" height="15"><polyline points="15 18 9 12 15 6"/></svg>
        Back to Portfolio
      </a>
    </div>
  `;
}

/* ================================================================
   INIT
   ================================================================ */
function init() {
  const params = new URLSearchParams(window.location.search);
  const id     = params.get('id') || '';

  if (!id) {
    showErrorScreen('No project ID specified in the URL. Expected: <code>project.html?id=travel</code>');
    return;
  }

  const project = PROJECTS[id];
  if (!project) {
    showErrorScreen(`No project found with ID "<strong>${id}</strong>". Check the URL and try again.`);
    return;
  }

  // Populate page
  populateTopbar(project);
  populateInfoSection(project);

  // Boot the slideshow
  new Slideshow(project);
}

// Kick off on DOM ready
document.addEventListener('DOMContentLoaded', init);
