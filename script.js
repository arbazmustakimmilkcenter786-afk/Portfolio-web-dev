const CONTACT_EMAIL = ''; // [ADD YOUR EMAIL] to enable the mailto contact fallback.

const projects = [
  {
    title: 'MatchPoint — Resume & JD Matcher', category: 'Web Development', featured: true,
    description: 'A resume-to-job-description analysis product that turns matching, keyword gaps, skill coverage, and ATS checks into a clear interface.',
    problem: 'Make a multi-step resume analysis workflow easier to understand and act on.',
    role: 'Project development and interface implementation.',
    solution: 'A focused Streamlit product combining document extraction, embeddings, similarity scoring, keyword analysis, skill coverage, ATS checks, and report generation.',
    learning: 'Designing useful product flows around technical analysis and making complex output easier to scan.',
    tech: ['Python', 'Streamlit', 'NLP', 'Embeddings', 'Cosine Similarity', 'ATS'],
    link: 'https://github.com/arbazmustakimmilkcenter786-afk/MATCHPOINT1', live: 'https://matchpoint1-01.streamlit.app/'
  },
  {
    title: 'Mustakim Fast Food Services', category: 'Web Development',
    description: 'A localized business web presence focused on clear information, practical website development, and a useful digital experience.',
    problem: 'Create a straightforward digital presence for a local business without unnecessary complexity.',
    role: 'Web development and implementation.',
    solution: 'A practical business-facing website direction using web development, WordPress customization, and database setup.',
    learning: 'Balancing business information, usability, and a maintainable implementation.',
    tech: ['HTML', 'CSS', 'WordPress', 'MySQL'], link: null, live: null
  },
  {
    title: 'Interactive Business Performance Dashboard', category: 'Data / Analytics',
    description: 'An interactive business intelligence dashboard for exploring commercial performance, KPIs, revenue trends, and operational bottlenecks.',
    problem: 'Turn business information into views that are easier to explore and interpret.',
    role: 'Dashboard analysis and implementation.',
    solution: 'A structured reporting experience using business intelligence and data preparation tools.',
    learning: 'Presenting analytical information with clearer hierarchy and decision-oriented views.',
    tech: ['Power BI', 'SQL', 'Power Query', 'Excel'], link: null, live: null
  }
];

const experiences = [
  { date: '2026 — Present', title: 'IBM SkillsBuild Virtual Internship', subtitle: 'Data Analytics with Generative AI · Remote', points: ['Learning data analytics workflows enhanced by generative AI tools.', 'Applying GenAI techniques to cleaning, analysis, and reporting tasks.', 'Building practical experience with Power BI, SQL, and AI-assisted analytics.'] },
  { date: 'Oct 2025 — Present', title: 'Freelance Data & Technical Specialist', subtitle: 'Self-employed · Navi Mumbai, India', points: ['Cleaning and transforming operational datasets using Advanced Excel.', 'Creating formula automations with XLOOKUP, INDEX MATCH, and validation workflows.', 'Designing reporting templates and dashboard support systems for clients.'] }
];

const skillData = {
  Frontend: { description: 'Core tools for building responsive, accessible, structured interfaces.', items: [['HTML', 'Semantic page structure, forms, content hierarchy'], ['CSS', 'Responsive layouts, visual systems, transitions, glass effects'], ['JavaScript', 'DOM interaction, state changes, validation, animation logic'], ['Responsive UI', 'Mobile-first layouts, breakpoints, touch-friendly controls'], ['Accessibility', 'Keyboard flows, focus states, semantic controls, reduced motion']] },
  'UI & Interaction': { description: 'The layer that makes interfaces feel deliberate rather than merely functional.', items: [['Animations', 'Scroll reveals, hover states, transitions, purposeful motion'], ['Micro-interactions', 'Feedback through buttons, cards, navigation and form states'], ['UX thinking', 'Clear hierarchy, scanning patterns, content-first decisions'], ['Design systems', 'Reusable spacing, typography, surfaces, borders and accents']] },
  'Tools & Workflow': { description: 'Tools that support a practical frontend development workflow.', items: [['Git / GitHub', 'Version control, repositories and deployment workflows'], ['VS Code', 'Everyday development and project organization'], ['Browser DevTools', 'Responsive testing, debugging and performance inspection'], ['Deployment', 'Practical hosting and production-ready static web workflows']] },
  'Data & AI': { description: 'Supporting skills that strengthen my ability to build practical technology products.', items: [['SQL', 'Querying and working with structured data'], ['Power BI', 'Interactive reporting and business intelligence'], ['Excel', 'Advanced formulas, cleaning and reporting workflows'], ['AI-assisted workflows', 'Using AI tools to accelerate exploration, analysis and development']] }
};

const $ = (s, root = document) => root.querySelector(s);
const $$ = (s, root = document) => [...root.querySelectorAll(s)];
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');

function renderExperience() {
  $('#timeline').innerHTML = experiences.map((e, i) => `<article class="timeline-item reveal" style="--reveal-delay:${i * 90}ms"><div class="timeline-date">${e.date}</div><h3>${e.title}</h3><h4>${e.subtitle}</h4><ul>${e.points.map(p => `<li>${p}</li>`).join('')}</ul></article>`).join('');
}

function previewMarkup(category) {
  const label = category === 'Web Development' ? 'WEB UI' : category === 'Data / Analytics' ? 'DATA VIEW' : 'AI / NLP';
  return `<div class="browser-preview" aria-hidden="true"><div class="browser-top"><i></i><i></i><i></i><span>${label}</span></div><div class="browser-body"><div class="preview-lines"><b></b><b></b><b></b><b></b></div><div class="preview-bars"><i></i><i></i><i></i><i></i></div></div></div>`;
}

function renderProjects(filter = 'All') {
  const list = filter === 'All' ? projects : projects.filter(p => p.category === filter);
  $('#projectCount').textContent = `${list.length} project${list.length === 1 ? '' : 's'}`;
  $('#projectsGrid').innerHTML = list.map((p, i) => `<article class="project-card reveal ${p.featured ? 'is-featured' : ''}" data-category="${p.category}" style="--reveal-delay:${i * 70}ms">
    ${p.featured ? '<span class="featured-badge">FEATURED</span>' : ''}
    ${previewMarkup(p.category)}
    <div class="project-top"><span class="project-index">0${i + 1}</span><span class="project-category">${p.category}</span></div>
    <h3>${p.title}</h3><p>${p.description}</p><div class="tag-list">${p.tech.map(t => `<span class="tag">${t}</span>`).join('')}</div>
    <div class="project-actions"><button class="project-open" type="button" data-index="${projects.indexOf(p)}" data-cursor="OPEN">View case study <span>↗</span></button>${p.live ? `<a class="project-live" href="${p.live}" target="_blank" rel="noopener noreferrer" data-cursor="LIVE">Live demo ↗</a>` : ''}</div>
  </article>`).join('');
  observeReveals(); bindProjectInteractions();
}

function renderFilters() {
  const cats = ['All', ...new Set(projects.map(p => p.category))];
  $('#filters').innerHTML = cats.map((c, i) => `<button class="filter-btn ${i === 0 ? 'active' : ''}" type="button" aria-pressed="${i === 0}">${c}</button>`).join('');
  $$('.filter-btn').forEach(button => button.addEventListener('click', () => {
    $$('.filter-btn').forEach(b => { b.classList.remove('active'); b.setAttribute('aria-pressed', 'false'); });
    button.classList.add('active'); button.setAttribute('aria-pressed', 'true'); renderProjects(button.textContent);
  }));
}

function renderSkills() {
  const names = Object.keys(skillData);
  $('#skillTabs').innerHTML = names.map((name, i) => `<button class="skill-tab ${i === 0 ? 'active' : ''}" type="button" role="tab" id="skill-tab-${i}" aria-controls="skill-panel" aria-selected="${i === 0}" tabindex="${i === 0 ? 0 : -1}">${name}</button>`).join('');
  const show = name => {
    const data = skillData[name];
    $('#skillPanel').classList.remove('skills-ready');
    $('#skillPanel').innerHTML = `<p class="skill-panel-label">WHAT I BUILD WITH IT</p><h3>${name}</h3><p>${data.description}</p><div class="skill-items">${data.items.map(item => `<div class="skill-item"><strong>${item[0]}</strong><span>${item[1]}</span></div>`).join('')}</div>`;
    requestAnimationFrame(() => $('#skillPanel').classList.add('skills-ready'));
  };
  show(names[0]);
  $$('.skill-tab').forEach((button, index) => button.addEventListener('click', () => {
    $$('.skill-tab').forEach(b => { b.classList.remove('active'); b.setAttribute('aria-selected', 'false'); b.tabIndex = -1; });
    button.classList.add('active'); button.setAttribute('aria-selected', 'true'); button.tabIndex = 0; show(names[index]);
  }));
  $('#skillTabs').addEventListener('keydown', e => {
    if (!['ArrowDown', 'ArrowRight', 'ArrowUp', 'ArrowLeft'].includes(e.key)) return;
    e.preventDefault(); const tabs = $$('.skill-tab'); const current = tabs.indexOf(document.activeElement); const next = (current + (e.key === 'ArrowDown' || e.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length; tabs[next].focus(); tabs[next].click();
  });
}

let lastFocusedElement = null;
function openModal(project) {
  $('#modalCategory').textContent = project.category;
  $('#modalTitle').textContent = project.title;
  $('#modalDescription').textContent = project.description;
  $('#modalDetails').innerHTML = [['Problem', project.problem], ['My role', project.role], ['Solution', project.solution], ['What I learned', project.learning]].map(([label, value]) => `<div><span>${label}</span><p>${value}</p></div>`).join('');
  $('#modalTags').innerHTML = project.tech.map(t => `<span class="tag">${t}</span>`).join('');
  const link = $('#modalLink'), live = $('#modalLiveLink');
  link.href = project.link || '#'; link.style.display = project.link ? 'inline-flex' : 'none';
  live.href = project.live || '#'; live.style.display = project.live ? 'inline-flex' : 'none';
  lastFocusedElement = document.activeElement;
  $('#projectModal').classList.add('open'); $('#projectModal').setAttribute('aria-hidden', 'false'); document.body.classList.add('modal-open'); $('#modalClose').focus();
}
function closeModal() { $('#projectModal').classList.remove('open'); $('#projectModal').setAttribute('aria-hidden', 'true'); document.body.classList.remove('modal-open'); if (lastFocusedElement) lastFocusedElement.focus(); }

let revealObserver;
function observeReveals() {
  if (!('IntersectionObserver' in window) || reduceMotion.matches) { $$('.reveal').forEach(el => el.classList.add('visible')); return; }
  if (!revealObserver) revealObserver = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); revealObserver.unobserve(entry.target); } }), { threshold: .12, rootMargin: '0px 0px -8% 0px' });
  $$('.reveal:not(.visible)').forEach((el, i) => { if (!el.style.getPropertyValue('--reveal-delay')) el.style.setProperty('--reveal-delay', `${(i % 5) * 60}ms`); revealObserver.observe(el); });
}

function bindProjectInteractions() {
  $$('.project-open').forEach(button => button.addEventListener('click', () => openModal(projects[Number(button.dataset.index)])));
  $$('.project-card').forEach(card => {
    card.addEventListener('pointermove', e => {
      if (!finePointer.matches || reduceMotion.matches) return;
      const r = card.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
      card.style.setProperty('--tilt-x', `${x * 3.2}deg`); card.style.setProperty('--tilt-y', `${y * -3.2}deg`); card.style.setProperty('--shine-x', `${(x + .5) * 100}%`); card.style.setProperty('--shine-y', `${(y + .5) * 100}%`);
    }, { passive: true });
    card.addEventListener('pointerleave', () => { card.style.setProperty('--tilt-x', '0deg'); card.style.setProperty('--tilt-y', '0deg'); });
  });
}

function smoothTo(selector) { const el = $(selector); if (!el) return; const top = el.getBoundingClientRect().top + window.scrollY - 82; window.scrollTo({ top, behavior: reduceMotion.matches ? 'auto' : 'smooth' }); }

const nav = $('#navbar'), progress = $('#scrollProgress'), back = $('#backTop');
function updateScrollUI() {
  const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight), pct = Math.min(1, Math.max(0, window.scrollY / max));
  progress.style.width = `${pct * 100}%`; progress.setAttribute('aria-valuenow', Math.round(pct * 100)); nav.classList.toggle('scrolled', window.scrollY > 20); back.classList.toggle('show', window.scrollY > 500);
  const timeline = $('.timeline'); if (timeline) { const r = timeline.getBoundingClientRect(); const p = Math.min(1, Math.max(0, (window.innerHeight * .72 - r.top) / (r.height + window.innerHeight * .28))); timeline.style.setProperty('--timeline-progress', p.toFixed(3)); }
}
let scrollRaf = 0;
window.addEventListener('scroll', () => { if (scrollRaf) return; scrollRaf = requestAnimationFrame(() => { scrollRaf = 0; updateScrollUI(); }); }, { passive: true });
window.addEventListener('resize', updateScrollUI, { passive: true });

function initNav() {
  $('#menuBtn').addEventListener('click', () => { const open = $('#navMenu').classList.toggle('open'); $('#menuBtn').setAttribute('aria-expanded', String(open)); $('#menuBtn').setAttribute('aria-label', open ? 'Close menu' : 'Open menu'); document.body.classList.toggle('menu-open', open); });
  $$('.nav-link').forEach(link => link.addEventListener('click', e => { e.preventDefault(); $('#navMenu').classList.remove('open'); $('#menuBtn').setAttribute('aria-expanded', 'false'); document.body.classList.remove('menu-open'); smoothTo(link.getAttribute('href')); }));
  $$('.static-talk,.hero-scroll-cue,.text-link[href^="#"] , .logo[href^="#"] , .static-cta[href^="#"]').forEach(link => link.addEventListener('click', e => { const href = link.getAttribute('href'); if (!href || href === '#') return; e.preventDefault(); smoothTo(href); }));
  $('#backTop').addEventListener('click', () => smoothTo('#home'));
}

function initActiveNav() {
  const sections = ['about', 'experience', 'projects', 'skills', 'contact'].map(id => document.getElementById(id));
  const links = $$('.nav-link');
  const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) links.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`)); }), { rootMargin: '-35% 0px -55% 0px', threshold: 0 });
  sections.forEach(section => observer.observe(section));
}

function initModal() {
  $('#modalClose').addEventListener('click', closeModal); $('#projectModal').addEventListener('click', e => { if (e.target.id === 'projectModal') closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && $('#projectModal').classList.contains('open')) closeModal(); if (e.key === 'Escape' && $('#navMenu').classList.contains('open')) { $('#navMenu').classList.remove('open'); $('#menuBtn').setAttribute('aria-expanded', 'false'); document.body.classList.remove('menu-open'); } });
  $('#projectModal').addEventListener('keydown', e => { if (e.key !== 'Tab') return; const focusable = $$('a[href],button:not([disabled]),input,textarea,select,[tabindex]:not([tabindex="-1"])', $('#projectModal')); if (!focusable.length) return; if (e.shiftKey && document.activeElement === focusable[0]) { e.preventDefault(); focusable.at(-1).focus(); } else if (!e.shiftKey && document.activeElement === focusable.at(-1)) { e.preventDefault(); focusable[0].focus(); } });
}

function initTheme() {
  const stored = localStorage.getItem('arbaz-theme'); const dark = stored ? stored === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  const apply = isDark => { document.body.classList.toggle('dark', isDark); $('#themeToggle').setAttribute('aria-pressed', String(isDark)); $('#themeToggle').setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme'); document.querySelector('meta[name="theme-color"]').setAttribute('content', isDark ? '#0b111b' : '#f5f8fc'); };
  apply(dark); $('#themeToggle').addEventListener('click', () => { const isDark = !document.body.classList.contains('dark'); apply(isDark); localStorage.setItem('arbaz-theme', isDark ? 'dark' : 'light'); });
}

function initContact() {
  const form = $('#contactForm'); const status = $('#formStatus');
  const fields = { name: $('#name'), email: $('#email'), message: $('#message') };
  const errors = { name: $('#nameError'), email: $('#emailError'), message: $('#messageError') };
  const validate = () => {
    let ok = true; Object.values(errors).forEach(e => e.textContent = ''); Object.values(fields).forEach(f => f.removeAttribute('aria-invalid'));
    if (fields.name.value.trim().length < 2) { errors.name.textContent = 'Please enter your name.'; fields.name.setAttribute('aria-invalid', 'true'); ok = false; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.value.trim())) { errors.email.textContent = 'Please enter a valid email address.'; fields.email.setAttribute('aria-invalid', 'true'); ok = false; }
    if (fields.message.value.trim().length < 10) { errors.message.textContent = 'Please add a little more detail.'; fields.message.setAttribute('aria-invalid', 'true'); ok = false; }
    return ok;
  };
  form.addEventListener('submit', e => { e.preventDefault(); status.classList.remove('show','error'); if (!validate()) { status.textContent = 'Please check the highlighted fields.'; status.classList.add('show','error'); return; } const subject = encodeURIComponent(`Portfolio enquiry from ${fields.name.value.trim()}`); const body = encodeURIComponent(`Name: ${fields.name.value.trim()}\nEmail: ${fields.email.value.trim()}\n\n${fields.message.value.trim()}`); if (!CONTACT_EMAIL) { status.textContent = 'Add your email address to CONTACT_EMAIL in script.js to enable the email fallback. LinkedIn is available above as an immediate contact option.'; status.classList.add('show','error'); return; } window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`; status.textContent = 'Opening your email client…'; status.classList.add('show'); });
}

function initPremiumInteractions() {
  const loader = $('#pageLoader');
  const hideLoader = () => { if (loader) loader.classList.add('is-hidden'); document.body.classList.add('page-ready'); };
  window.addEventListener('load', () => setTimeout(hideLoader, 80), { once: true }); setTimeout(hideLoader, 700);
  const cursor = $('#customCursor');
  if (!finePointer.matches || reduceMotion.matches || !cursor) { if (cursor) cursor.style.display = 'none'; return; }
  let px = innerWidth / 2, py = innerHeight / 2, rx = px, ry = py, raf = 0;
  document.addEventListener('pointermove', e => { if (e.pointerType !== 'mouse') return; px = e.clientX; py = e.clientY; document.documentElement.style.setProperty('--cursor-x', `${px}px`); document.documentElement.style.setProperty('--cursor-y', `${py}px`); const target = e.target.closest?.('a,button,.project-card,input,textarea'); cursor.classList.toggle('cursor-hover', !!target); const label = target?.dataset?.cursor || (target?.matches('.project-card') ? 'EXPLORE' : ''); $('.cursor-label').textContent = label; cursor.classList.toggle('cursor-label-visible', !!label); }, { passive: true });
  const tick = () => { rx += (px - rx) * .28; ry += (py - ry) * .28; document.documentElement.style.setProperty('--cursor-ring-x', `${rx}px`); document.documentElement.style.setProperty('--cursor-ring-y', `${ry}px`); raf = requestAnimationFrame(tick); }; tick(); window.addEventListener('pagehide', () => cancelAnimationFrame(raf), { once: true });
  $$('.static-cta,.resume-link,.static-talk,.btn.primary,.back-top').forEach(el => { el.addEventListener('pointermove', e => { const r = el.getBoundingClientRect(); el.style.transform = `translate3d(${(e.clientX - (r.left + r.width / 2)) * .10}px,${(e.clientY - (r.top + r.height / 2)) * .10}px,0)`; }, { passive: true }); el.addEventListener('pointerleave', () => { el.style.transform = ''; }); });
}

function initHeroReveal() {
  const hero = $('.static-hero'), base = hero?.querySelector('.layer-base'), reveal = hero?.querySelector('.layer-reveal'), grid = hero?.querySelector('.static-grid-layer'), glow = hero?.querySelector('.static-cursor-glow');
  if (!hero || !base || !reveal || !finePointer.matches || reduceMotion.matches) return;
  let rawX = -999, rawY = -999, smoothX = -999, smoothY = -999, targetRadius = 0, currentRadius = 0, raf;
  const setPointer = e => { const r = hero.getBoundingClientRect(); rawX = e.clientX - r.left; rawY = e.clientY - r.top; targetRadius = 235; hero.style.setProperty('--static-mouse-x', `${rawX}px`); hero.style.setProperty('--static-mouse-y', `${rawY}px`); hero.style.setProperty('--static-glow-opacity', '1'); };
  hero.addEventListener('pointermove', e => { if (e.pointerType === 'mouse') setPointer(e); }, { passive: true }); hero.addEventListener('pointerleave', () => { targetRadius = 0; hero.style.setProperty('--static-glow-opacity', '0'); }, { passive: true });
  const tick = () => { smoothX += (rawX - smoothX) * .14; smoothY += (rawY - smoothY) * .14; currentRadius += (targetRadius - currentRadius) * .12; hero.style.setProperty('--reveal-x', `${smoothX}px`); hero.style.setProperty('--reveal-y', `${smoothY}px`); hero.style.setProperty('--reveal-radius', `${currentRadius}px`); if (grid) { grid.style.setProperty('--static-grid-x', `${(smoothX / hero.clientWidth - .5) * -18}px`); grid.style.setProperty('--static-grid-y', `${(smoothY / hero.clientHeight - .5) * -12}px`); } if (glow) { glow.style.left = `${smoothX}px`; glow.style.top = `${smoothY}px`; } raf = requestAnimationFrame(tick); }; tick(); window.addEventListener('pagehide', () => cancelAnimationFrame(raf), { once: true });
}

renderExperience(); renderFilters(); renderProjects(); renderSkills(); observeReveals(); initNav(); initActiveNav(); initModal(); initTheme(); initContact(); initPremiumInteractions(); initHeroReveal(); updateScrollUI();
