/* =====================================================================
   MULAGADA NARASIMHA CHOWDARY — portfolio script
   ─────────────────────────────────────────────────────────────────────
   CONFIG: everything you will ever want to edit lives in this block.
   Links, stats, skills, projects, journey, form endpoint, resume.
   ===================================================================== */
const CONFIG = {
  email: 'mulagadanarasimha77@gmail.com',
  location: 'Bangalore, India',
  resumePath: 'assets/resume.pdf',
  formEndpoint: 'https://formspree.io/f/moevyjor',
  socials: {
    github:   'https://github.com/narasimha77-jpg',
    linkedin: '',                             // TODO: add LinkedIn URL
    x:        '',                             // TODO: add X (Twitter) URL
    youtube:  ''                              // TODO: add YouTube channel URL
  },
  roles: ['Software Developer Intern', 'Full Stack Developer', 'AI & RAG Solutions', 'WebXR & 3D Specialist'],
  stats: [
    { num: 7, suffix: '+', label: 'Public Repos' },
    { text: '8.50', label: 'GPA • BMSIT' }
  ],
  skills: [
    { group: 'Frontend', items: [
      ['TypeScript','typescript','#3178C6','https://www.typescriptlang.org/'],
      ['React','react','#61DAFB','https://react.dev/'],
      ['Next.js','nextdotjs','#FFFFFF','https://nextjs.org/'],
      ['Tailwind CSS','tailwindcss','#06B6D4','https://tailwindcss.com/'],
      ['JavaScript','javascript','#F7DF1E','https://developer.mozilla.org/en-US/docs/Web/JavaScript'],
      ['HTML5','html5','#E34F26','https://html.spec.whatwg.org/'] ] },
    { group: '3D & AI Solutions', items: [
      ['Three.js','threedotjs','#FFFFFF','https://threejs.org/'],
      ['WebXR','webxr','#5555FF','https://immersiveweb.dev/'],
      ['React Three Fiber','react','#61DAFB','https://r3f.docs.pmnd.rs/'],
      ['OpenAI API','openai','#412991','https://openai.com/'],
      ['Multi-Agent RAG','api','#A78BFA','https://en.wikipedia.org/wiki/Retrieval-augmented_generation'] ] },
    { group: 'Backend & Data', items: [
      ['Node.js','nodedotjs','#5FA04E','https://nodejs.org/'],
      ['Express.js','express','#FFFFFF','https://expressjs.com/'],
      ['PostgreSQL','postgresql','#4169E1','https://www.postgresql.org/'],
      ['MongoDB','mongodb','#47A248','https://www.mongodb.com/'],
      ['Prisma ORM','prisma','#2D3748','https://www.prisma.io/'],
      ['WebSockets','stream','#22D3EE','https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API'] ] },
    { group: 'DevOps & Tools', items: [
      ['Docker','docker','#2496ED','https://www.docker.com'],
      ['Git','git','#F05032','https://git-scm.com'],
      ['GitHub','github','#FFFFFF','https://github.com'],
      ['Postman','postman','#FF6C37','https://www.postman.com'],
      ['VS Code','vscode','#007ACC','https://code.visualstudio.com'] ] }
  ],
  projects: [
    { id:'3ddesign', cat:'creative', img:'assets/proj-3ddesign', alt:'3D Design Hub WebXR visualization platform',
      title:'3D Design Hub — WebXR 3D Visualization',
      desc:'A web-based 3D visualization platform with immersive WebXR support, real-time model rendering, and scene navigation.',
      problem:'Viewing and interacting with complex 3D assets traditionally required high-friction desktop installations.',
      role:'Engineered the WebXR interactive scene: model loaders, lighting configurations, orbit controls, and real-time browser rendering.',
      result:'High-performance browser-based 3D environment allowing interactive inspection and navigation in VR and desktop.',
      tags:['React','Three.js','React Three Fiber','WebXR','TypeScript'],
      link:'https://github.com/narasimha77-jpg/3d-design-hub', linkLabel:'View on GitHub',
      icon:'github', iconLink:'https://github.com/narasimha77-jpg/3d-design-hub' },
    { id:'coordiguard', cat:'web', img:'assets/proj-coordiguard', alt:'CoordFeed real-time GPS coordinate beacon interface',
      title:'CoordFeed — Real-Time GPS Coordinate Beacon',
      desc:'Real-time GPS tracking application featuring REST APIs, live coordinate streams, route history, and backend monitoring.',
      problem:'Tracking rapid location updates with low latency while managing efficient backend state updates.',
      role:'Implemented the real-time GPS tracking pipeline, REST APIs, route history logging, and telemetry status monitoring.',
      result:'Reliable real-time geospatial tracking feed with live location synchronization and monitoring tools.',
      tags:['Node.js','Express.js','REST APIs','Real-time Streams'],
      link:'https://github.com/narasimha77-jpg/coordi-guard-feed', linkLabel:'View on GitHub',
      icon:'github', iconLink:'https://github.com/narasimha77-jpg/coordi-guard-feed' },
    { id:'vrsketch', cat:'creative', img:'assets/proj-vrsketch', alt:'SketchPad real-time drawing and interaction canvas',
      title:'SketchPad — Real-Time Drawing & Interaction Canvas', badge:'WebXR & WebSockets',
      desc:'Collaborative drawing application featuring real-time synchronization using WebSockets and multi-user interaction tools.',
      problem:'Standard web drawing boards lack low-latency multi-user collaboration and 3D spatial input flexibility.',
      role:'Built collaborative drawing tools, WebSockets synchronization pipeline, and multi-user canvas interaction handlers.',
      result:'Smooth real-time collaborative sketching experience with instant stroke synchronization across active clients.',
      tags:['HTML5 Canvas','JavaScript','Node.js','Express.js','WebSockets'],
      link:'https://github.com/narasimha77-jpg/vr-sketchpad', linkLabel:'View on GitHub',
      icon:'github', iconLink:'https://github.com/narasimha77-jpg/vr-sketchpad' },
    { id:'civicissueresolve', cat:'web', img:'assets/proj-civicissueresolve', alt:'CivicIssueResolve municipal grievance tracking platform',
      title:'CivicIssueResolve — Citizen Grievance & Resolution Platform', badge:'Full Stack',
      desc:'A full-stack application for reporting, tracking, and resolving municipal civic issues with real-time updates and public dashboards.',
      problem:'Civic complaints submitted through traditional channels are hard to trace, slow to resolve, and lack departmental accountability.',
      role:'Designed the end-to-end architecture: issue reporting forms, automated department routing, real-time ticket statuses, and admin dashboards.',
      result:'A transparent, responsive civic tracking portal enabling citizens to log grievances and monitor municipal resolution workflows in real time.',
      tags:['TypeScript','React','Node.js','PostgreSQL','REST APIs'],
      link:'https://github.com/narasimha77-jpg/civicissueresolve', linkLabel:'View on GitHub',
      icon:'github', iconLink:'https://github.com/narasimha77-jpg/civicissueresolve' },
    { id:'smartdiet', cat:'web', img:'assets/proj-smartdiet', alt:'Smart Diet Planner health interface',
      title:'Smart Diet Planner — Nutrition Dashboard',
      desc:'Intelligent nutrition and personalized meal planning application tailored to health metrics and dietary goals.',
      problem:'Managing daily caloric targets and balanced macronutrient ratios manually is tedious and prone to drop-off.',
      role:'Constructed nutritional calculation models, daily schedule cards, macronutrient breakdown charts, and meal trackers.',
      result:'An intuitive daily meal planning web app that simplifies balanced nutrition and macro tracking.',
      tags:['TypeScript','React','Tailwind CSS'],
      link:'https://github.com/narasimha77-jpg/smart-diet-planner', linkLabel:'View on GitHub',
      icon:'github', iconLink:'https://github.com/narasimha77-jpg/smart-diet-planner' },
    { id:'buildintel', cat:'web', img:'assets/proj-buildintel', alt:'BUILDINTEL responsive metrics dashboard',
      title:'BUILDINTEL — Architecture & Metrics',
      desc:'Modern responsive web interface and analytics dashboard built for high-performance frontend workflows.',
      problem:'Complex metric dashboards often suffer from bloated styling and poor responsiveness across device viewports.',
      role:'Crafted pixel-perfect components, responsive grid layouts, and clean telemetry data visualization widgets.',
      result:'A sleek, highly responsive analytics dashboard built to exacting standards with modern TypeScript.',
      tags:['TypeScript','React','Tailwind CSS'],
      link:'https://github.com/narasimha77-jpg/BUILDINTEL', linkLabel:'View on GitHub',
      icon:'github', iconLink:'https://github.com/narasimha77-jpg/BUILDINTEL' }
  ],
  journey: [
    { title:'B.E. Computer Science — BMSIT (GPA: 8.50)', sub:'Academic Foundation', text:'Focused on software engineering, distributed systems, full-stack architectures, and AI foundations.' },
    { title:'Full-Stack Web & TypeScript Mastery', sub:'Modern Engineering', text:'Built robust, type-safe full-stack platforms using React, Next.js, Node.js, and PostgreSQL.' },
    { title:'3D Visualization & WebXR Immersive Web', sub:'Spatial Computing', text:'Created 3D Design Hub and SketchPad exploring Three.js, React Three Fiber, and real-time WebXR.' },
    { title:'Real-Time Geospatial Systems', sub:'CoordFeed Beacon', text:'Engineered real-time GPS coordinate streaming pipelines and backend monitoring features.' },
    { title:'Civic Technology & Problem Solving', sub:'CivicIssueResolve', text:'Built an end-to-end municipal grievance reporting and resolution platform for community transparency.' }
  ],
  marquee: ['TypeScript','React','Next.js','Node.js','PostgreSQL','Three.js','WebXR','Tailwind CSS','Docker','OpenAI']
};
/* ================== end of CONFIG — code below ================== */

const prefersReduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const isTouch = matchMedia('(hover:none)').matches;
const EASE = 'cubic-bezier(.22,1,.36,1)';
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];

/* ---------- SVG icon library ---------- */
const ICONS = {
  github: '<svg viewBox="0 0 24 24"><path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.9 10.9c.6.1.8-.2.8-.5v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0C17.2 4.9 18.2 5.2 18.2 5.2c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.2c0 .3.2.6.8.5A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5z"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6V21h-4v-5.5c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9V21H9z"/></svg>',
  x: '<svg viewBox="0 0 24 24"><path d="M18.9 2H22l-6.8 7.8L23.3 22h-6.3l-4.9-6.4L6.5 22H3.4l7.3-8.3L2.7 2h6.4l4.4 5.9L18.9 2zm-1.1 18h1.7L7.1 3.8H5.3L17.8 20z"/></svg>',
  youtube: '<svg viewBox="0 0 24 24"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.6V8.4L15.8 12l-6.2 3.6z"/></svg>',
  gmail: '<svg viewBox="0 0 24 24" class="gm"><path fill="#EA4335" d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  award: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="9" r="6"/><path d="m8.5 14-2 8 5.5-3 5.5 3-2-8"/></svg>',
  vscode: '<svg viewBox="0 0 24 24"><path fill="#007ACC" d="M17.6 2.3 9.4 10.6 4.7 6.9 2.3 8.1v7.8l2.4 1.2 4.7-3.7 8.2 8.3 4.1-2V4.3l-4.1-2zM4.7 14.5v-5l2.5 2.5-2.5 2.5zM17.6 15.7 13 12l4.6-3.7v7.4z"/></svg>',
  typescript: '<svg viewBox="0 0 24 24"><rect width="24" height="24" rx="4.5" fill="#3178C6"/><path fill="#FFFFFF" d="M12.5 13.5h2.5v7h2.2v-7H20v-2h-7.5v2zm-2.8 4.2c-.4.5-1.1.9-1.9.9-1.3 0-2.2-.8-2.2-2.3 0-1.7 1.2-2.3 2.3-2.7l.6-.2c.5-.2.8-.4.8-.8 0-.5-.4-.8-1-.8-.7 0-1.2.3-1.6.8l-1.2-1.2c.7-.9 1.7-1.4 2.8-1.4 1.7 0 2.8.9 2.8 2.4v.3c0 1.5-.9 2.1-2.1 2.5l-.6.2c-.6.2-.9.4-.9.9 0 .6.5.9 1.1.9.6 0 1.1-.3 1.5-.7l1.4 1z"/></svg>',
  react: '<svg viewBox="0 0 24 24" fill="none"><ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" stroke-width="1.2" transform="rotate(30 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" stroke-width="1.2" transform="rotate(90 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" stroke-width="1.2" transform="rotate(150 12 12)"/><circle cx="12" cy="12" r="1.8" fill="#61DAFB"/></svg>',
  threedotjs: '<svg viewBox="0 0 24 24"><path fill="#FFFFFF" d="M21.75 6.75 12 1.125 2.25 6.75v10.5L12 22.875l9.75-5.625V6.75zm-9.75 13.9-7.5-4.33V8.83l7.5 4.33v7.49zm1.5 0v-7.49l7.5-4.33v7.49l-7.5 4.33zM12 11.5 4.5 7.17 12 2.84l7.5 4.33L12 11.5z"/></svg>',
  webxr: '<svg viewBox="0 0 24 24" fill="none" stroke="#A78BFA" stroke-width="1.8"><rect x="2" y="6" width="20" height="12" rx="4"/><circle cx="8" cy="12" r="2.5"/><circle cx="16" cy="12" r="2.5"/><path d="M10.5 12h3"/></svg>',
  stream: '<svg viewBox="0 0 24 24" fill="none" stroke="#22D3EE" stroke-width="1.8"><path d="M4 12h4l3-6 4 12 3-6h4"/></svg>',
  api: '<svg viewBox="0 0 24 24" fill="none" stroke="#A78BFA" stroke-width="1.8"><rect x="3" y="4" width="18" height="16" rx="3"/><path d="M8 9l3 3-3 3M13 15h4"/></svg>',
  ps: '<svg viewBox="0 0 24 24"><rect width="24" height="24" rx="4.5" fill="#001E36"/><text x="12" y="16.3" text-anchor="middle" font-family="Arial,Helvetica,sans-serif" font-weight="700" font-size="10" fill="#31A8FF">Ps</text></svg>',
  ae: '<svg viewBox="0 0 24 24"><rect width="24" height="24" rx="4.5" fill="#00005B"/><text x="12" y="16.3" text-anchor="middle" font-family="Arial,Helvetica,sans-serif" font-weight="700" font-size="10" fill="#9999FF">Ae</text></svg>',
  pr: '<svg viewBox="0 0 24 24"><rect width="24" height="24" rx="4.5" fill="#00005B"/><text x="12" y="16.3" text-anchor="middle" font-family="Arial,Helvetica,sans-serif" font-weight="700" font-size="10" fill="#EA77FF">Pr</text></svg>'
};
const gmailHref = `https://mail.google.com/mail/u/0/?fs=1&to=${CONFIG.email}&su=Portfolio+Contact&tf=cm`;
const gmailLink = (cls) => `<a class="${cls}" href="${gmailHref}" target="_blank" rel="noopener" aria-label="Gmail">${ICONS.gmail}</a>`;
const socialLinks = (cls) => ['github','linkedin','x','youtube']
  .filter(k => CONFIG.socials[k])
  .map(k => `<a class="${cls}" href="${CONFIG.socials[k]}" target="_blank" rel="noopener" aria-label="${k==='x'?'X (Twitter)':k[0].toUpperCase()+k.slice(1)}">${ICONS[k]}</a>`).join('');

/* ---------- render from CONFIG ---------- */
(() => {
  $('#heroSocial').innerHTML = socialLinks() + gmailLink();
  $('#contactSocial').innerHTML = socialLinks() + gmailLink();
  $('#footSocial').innerHTML = socialLinks() + gmailLink();
  $('#contactLines').innerHTML =
    `<span class="c-line">${ICONS.gmail}${CONFIG.email}</span>
     <span class="c-line">${ICONS.pin}${CONFIG.location}</span>`;
  $('#heroStats').innerHTML = CONFIG.stats.map(s => s.num !== undefined
    ? `<div class="stat"><b><span class="count" data-to="${s.num}">0</span>${s.suffix}</b><span>${s.label}</span></div>`
    : `<div class="stat"><b>${s.text}</b><span>${s.label}</span></div>`).join('');
  $('#skillGroups').innerHTML = CONFIG.skills.map(g => `
    <p class="skill-group-label reveal">${g.group.toUpperCase()}</p>
    <div class="skill-grid reveal">${g.items.map(([name,icon,color,url]) => `
      <a class="skill" href="${url}" target="_blank" rel="noopener" aria-label="${name} - official site">
        ${ICONS[icon]
          || `<img src="https://cdn.simpleicons.org/${icon}/${color.slice(1)}" alt="${name} logo" width="38" height="38" loading="lazy"
               onerror="this.outerHTML='<span class=&quot;letter&quot; style=&quot;background:${color}&quot;>${name.split(' ').map(w=>w[0]).join('')}</span>'">`}
        <b>${name}</b>
      </a>`).join('')}</div>`).join('');
  $('#timeline').innerHTML = CONFIG.journey.map(j => `
    <div class="tl-item reveal"><b>${j.title}</b><span>${j.sub}</span><p>${j.text}</p></div>`).join('');
  $('#projTrack').innerHTML = CONFIG.projects.map(p => `
    <article class="proj-card reveal" data-proj="${p.id}" data-cat="${p.cat}">
      <div class="proj-media">${p.badge ? `<span class="proj-badge">${p.badge}</span>` : ''}<picture><source srcset="${p.img}.webp" type="image/webp"><img src="${p.img}.jpg" alt="${p.alt}" width="1100" height="619" loading="lazy"></picture></div>
      <div class="proj-body">
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <div class="tags">${p.tags.map(t => `<span>${t}</span>`).join('')}</div>
        <div class="proj-foot"><button type="button" class="view" aria-label="View details: ${p.title}">View Project <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14m-6-6 6 6-6 6"/></svg></button>
        ${p.iconLink ? `<a class="proj-gh" href="${p.iconLink}" target="_blank" rel="noopener" aria-label="${p.icon==='youtube'?'YouTube':'GitHub'} link" onclick="event.stopPropagation()">${ICONS[p.icon]||ICONS.github}</a>` : ''}</div>
      </div>
    </article>`).join('');
  const items = CONFIG.marquee.map(m => {
    const icon = (CONFIG.skills.flatMap(g=>g.items).find(i => i[0]===m)||[])[1];
    return `<span>${icon ? (ICONS[icon] || `<img src="https://cdn.simpleicons.org/${icon}/A78BFA" alt="" loading="lazy" onerror="this.remove()">`) : ''}${m}</span>`;
  }).join('');
  $('#marqueeTrack').innerHTML = items + items;
  $('#year').textContent = new Date().getFullYear();
})();

/* ---------- preloader ---------- */
(() => {
  const pre = $('#preloader');
  let seen = false;
  try { seen = sessionStorage.getItem('nc-seen'); } catch(e) {}
  if (seen || prefersReduced){ pre.remove(); return; }
  const bar = $('.pre-line i');
  let p = 0;
  const iv = setInterval(() => { p = Math.min(100, p + 18 + Math.random()*22); bar.style.width = p + '%'; }, 120);
  const done = () => {
    clearInterval(iv); bar.style.width = '100%';
    setTimeout(() => { pre.classList.add('done'); try { sessionStorage.setItem('nc-seen','1'); } catch(e) {} }, 200);
  };
  addEventListener('load', () => setTimeout(done, Math.max(0, 900 - performance.now())));
  setTimeout(done, 1200);
})();

/* ---------- starfield (theme-aware, mobile-light, pauses hidden) ---------- */
(() => {
  const c = $('#stars'), x = c.getContext('2d');
  let stars = [], W, H, running = true, raf, lastW = 0;
  const N = () => innerWidth < 760 ? 70 : Math.min(170, innerWidth/9);
  function size(){
    W = c.width = innerWidth; H = c.height = innerHeight;
    if (innerWidth === lastW && stars.length) return; // avoid reshuffling stars on mobile address-bar resize
    lastW = innerWidth;
    stars = Array.from({length: N()}, () => ({
      x: Math.random()*W, y: Math.random()*H, r: Math.random()*1.3+.3,
      s: Math.random()*.22+.04, o: Math.random()*.5+.25, tw: Math.random()*Math.PI*2 }));
  }
  function frame(t){
    x.clearRect(0,0,W,H);
    const col = getComputedStyle(document.documentElement).getPropertyValue('--stars').trim() || '#cdd3ff';
    for (const s of stars){
      s.y -= s.s; if (s.y < -4){ s.y = H+4; s.x = Math.random()*W; }
      x.globalAlpha = prefersReduced ? s.o : s.o*(.6+.4*Math.sin(t/900+s.tw));
      x.fillStyle = col; x.beginPath(); x.arc(s.x,s.y,s.r,0,7); x.fill();
    }
    x.globalAlpha = 1;
    if (!prefersReduced) raf = requestAnimationFrame(frame);
  }
  size(); addEventListener('resize', size);
  document.addEventListener('visibilitychange', () => {
    running = !document.hidden;
    if (running && !prefersReduced) raf = requestAnimationFrame(frame); else cancelAnimationFrame(raf);
  });
  frame(0);
})();

/* ---------- custom cursor (dot + trailing ring, hidden until first move) ---------- */
(() => {
  if (prefersReduced || isTouch) return;
  const dot = $('#cursor'), ring = $('#cursorRing');
  let cx=0, cy=0, rx=0, ry=0, tx=0, ty=0, shown=false;
  addEventListener('mousemove', e => {
    tx=e.clientX; ty=e.clientY;
    if (!shown){ shown=true; dot.style.opacity=1; ring.style.opacity=.8; cx=tx; cy=ty; rx=tx; ry=ty; }
  });
  (function follow(){
    cx+=(tx-cx)*.35; cy+=(ty-cy)*.35; rx+=(tx-rx)*.14; ry+=(ty-ry)*.14;
    dot.style.left=cx+'px'; dot.style.top=cy+'px';
    ring.style.left=rx+'px'; ring.style.top=ry+'px';
    requestAnimationFrame(follow);
  })();
  document.addEventListener('mouseover', e => {
    const hit = e.target.closest('a,button,.proj-card,.skill,input,textarea');
    dot.classList.toggle('big', !!hit); ring.classList.toggle('big', !!hit);
  });
})();

/* ---------- magnetic buttons ---------- */
if (!prefersReduced) $$('.magnetic').forEach(el => {
  el.addEventListener('mousemove', e => {
    const r = el.getBoundingClientRect();
    el.style.transform = `translate(${(e.clientX-r.left-r.width/2)*.18}px,${(e.clientY-r.top-r.height/2)*.28}px)`;
  });
  el.addEventListener('mouseleave', () => el.style.transform = '');
});

/* ---------- hero name letter reveal ---------- */
(() => {
  const el = $('#heroName'), txt = el.textContent; el.textContent = '';
  [...txt].forEach((ch,i) => {
    const s = document.createElement('span');
    s.className = 'ltr'; s.textContent = ch === ' ' ? '\u00A0' : ch;
    s.style.animationDelay = (prefersReduced ? 0 : .25 + i*.055) + 's';
    el.appendChild(s);
  });
})();

/* ---------- typing role rotator ---------- */
(() => {
  const el = $('#typedRole');
  if (prefersReduced){ el.textContent = CONFIG.roles[0]; return; }
  let ri = 0, ci = 0, del = false;
  (function type(){
    const word = CONFIG.roles[ri];
    el.textContent = word.slice(0, ci);
    let wait = del ? 42 : 85;
    if (!del && ci === word.length){ del = true; wait = 1900; }
    else if (del && ci === 0){ del = false; ri = (ri+1) % CONFIG.roles.length; wait = 350; }
    else ci += del ? -1 : 1;
    setTimeout(type, wait);
  })();
})();

/* ---------- two-state navigation (top bar <-> right rail) ---------- */
(() => {
  const body = document.body;
  const hero = $('#home');
  let railOn = false;
  function check(){
    const h = hero.offsetHeight || innerHeight;
    const y = scrollY;
    if (!railOn && y > h * .6){ railOn = true; }
    else if (railOn && y < h * .4){ railOn = false; }
    body.classList.toggle('rail-on', railOn);
  }
  addEventListener('scroll', check, {passive:true});
  addEventListener('resize', check);
  check();
  /* active section -> both nav sets */
  const pairs = [['#home','#about','#projects','#skills','#contact']][0];
  const all = [...$$('#topLinks a'), ...$$('.rail a')];
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    const id = '#' + e.target.id;
    all.forEach(a => {
      const on = a.getAttribute('href') === id;
      a.classList.toggle('active', on);
      if (on) a.setAttribute('aria-current','page'); else a.removeAttribute('aria-current');
    });
  }), {rootMargin:'-42% 0px -52% 0px'});
  pairs.forEach(id => { const s = $(id); if (s) io.observe(s); });
})();

/* ---------- mobile menu ---------- */
(() => {
  const b = $('#burger'), m = $('#mobileMenu'), f = $('#floatMenu');
  const set = open => {
    b.classList.toggle('open', open); m.classList.toggle('open', open);
    b.setAttribute('aria-expanded', open); b.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    if (f){ f.classList.toggle('open', open); f.setAttribute('aria-expanded', open); f.setAttribute('aria-label', open ? 'Close menu' : 'Open menu'); }
  };
  b.addEventListener('click', () => set(!m.classList.contains('open')));
  if (f) f.addEventListener('click', () => set(!m.classList.contains('open')));
  m.querySelectorAll('a').forEach(a => a.addEventListener('click', () => set(false)));
  addEventListener('keydown', e => { if (e.key === 'Escape' && m.classList.contains('open')) set(false); });
})();

/* ---------- scroll progress bar ---------- */
addEventListener('scroll', () => {
  const max = document.documentElement.scrollHeight - innerHeight;
  $('#scrollbarProgress').style.width = (max > 0 ? scrollY/max*100 : 0) + '%';
}, {passive:true});

/* ---------- reveals + stagger ---------- */
(() => {
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
  }), {threshold:.14});
  $$('.reveal').forEach(el => io.observe(el));
})();

/* ---------- count-up stats ---------- */
(() => {
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return; io.unobserve(e.target);
    const to = +e.target.dataset.to, t0 = performance.now(), dur = 1400;
    (function step(t){
      const p = Math.min(1,(t-t0)/dur), ease = 1-Math.pow(1-p,3);
      e.target.textContent = Math.round(to*ease);
      if (p < 1) requestAnimationFrame(step);
    })(t0);
  }), {threshold:.5});
  $$('.count').forEach(el => io.observe(el));
})();

/* ---------- text scramble (nav hover + headings on reveal) ---------- */
const scramble = (el) => {
  if (prefersReduced || el._scr) return;
  el._scr = true;
  const orig = el.dataset.orig || (el.dataset.orig = el.textContent);
  const chars = '!<>-_\\/[]{}=+*^?#';
  let f = 0;
  const total = orig.length * 2;
  (function tick(){
    el.textContent = [...orig].map((c,i) =>
      c === ' ' ? ' ' : (i < f/2 ? c : chars[Math.random()*chars.length|0])).join('');
    if (f++ < total) requestAnimationFrame(tick); else { el.textContent = orig; el._scr = false; }
  })();
};
$$('#topLinks a').forEach(a => a.addEventListener('mouseenter', () => scramble(a)));
(() => {
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting){ scramble(e.target); io.unobserve(e.target); }
  }), {threshold:.6});
  $$('[data-scramble-once]').forEach(h => io.observe(h));
})();

/* ---------- parallax (orb + about/contact images) ---------- */
if (!prefersReduced){
  const els = [$('.about-art img'), $('.contact-art img')].filter(Boolean);
  let ticking = false;
  addEventListener('scroll', () => {
    if (ticking) return; ticking = true;
    requestAnimationFrame(() => {
      els.forEach(el => {
        const r = el.getBoundingClientRect();
        const off = (r.top + r.height/2 - innerHeight/2) * -.05;
        el.style.translate = `0 ${off.toFixed(1)}px`;
      });
      ticking = false;
    });
  }, {passive:true});
}

/* ---------- project filters + carousel + modals ---------- */
(() => {
  const track = $('#projTrack');
  const cards = $$('.proj-card');
  const dotsBox = $('#projDots');

  /* filters */
  $('#filters').addEventListener('click', e => {
    const btn = e.target.closest('.filter'); if (!btn) return;
    $$('.filter').forEach(f => { f.classList.toggle('active', f===btn); f.setAttribute('aria-selected', f===btn); });
    const cat = btn.dataset.filter;
    cards.forEach(c => {
      const show = cat === 'all' || c.dataset.cat === cat;
      if (show){ c.style.display=''; requestAnimationFrame(()=>requestAnimationFrame(()=>c.classList.remove('filter-hide'))); }
      else { c.classList.add('filter-hide'); setTimeout(() => { if (c.classList.contains('filter-hide')) c.style.display='none'; }, 320); }
    });
    setTimeout(layoutCarousel, 380);
  });

  /* arrows + dots only when overflowing */
  const navs = $$('.proj-nav');
  function layoutCarousel(){
    const over = track.scrollWidth > track.clientWidth + 4;
    navs.forEach(b => b.style.display = over ? '' : 'none');
    dotsBox.innerHTML = over ? cards.filter(c=>c.style.display!=='none').map((_,i)=>`<i data-i="${i}"></i>`).join('') : '';
    dotsBox.querySelector('i')?.classList.add('on');
  }
  layoutCarousel(); addEventListener('resize', layoutCarousel);
  navs[0].addEventListener('click', () => track.scrollBy({left:-track.clientWidth*.7, behavior:'smooth'}));
  navs[1].addEventListener('click', () => track.scrollBy({left: track.clientWidth*.7, behavior:'smooth'}));
  track.addEventListener('scroll', () => {
    const ds = dotsBox.querySelectorAll('i'); if (!ds.length) return;
    const idx = Math.round(track.scrollLeft / (track.scrollWidth - track.clientWidth) * (ds.length-1));
    ds.forEach((d,i) => d.classList.toggle('on', i === Math.max(0, Math.min(ds.length-1, idx))));
  }, {passive:true});

  /* modal with focus trap + return focus */
  const modal = $('#projModal');
  let opener = null;
  const fill = p => {
    $('#mImg').src = p.img + '.jpg'; $('#mImg').alt = p.alt;
    $('#mTitle').textContent = p.title;
    $('#mDesc').textContent = p.desc;
    $('#mProblem').textContent = p.problem;
    $('#mRole').textContent = p.role;
    $('#mResult').textContent = p.result;
    $('#mTags').innerHTML = p.tags.map(t => `<span>${t}</span>`).join('');
    const link = $('#mLink');
    if (p.link){ link.href = p.link; link.style.display = 'inline-flex'; link.textContent = ''; link.innerHTML = p.linkLabel + ' <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><path d="M7 17L17 7M9 7h8v8"/></svg>'; }
    else link.style.display = 'none';
  };
  const open = (id, card) => {
    fill(CONFIG.projects.find(p => p.id === id));
    opener = card;
    modal.classList.add('open'); modal.setAttribute('aria-hidden','false');
    document.body.style.overflow = 'hidden';
    $('#modalX').focus();
  };
  const close = () => {
    if (!modal.classList.contains('open')) return;
    modal.classList.remove('open'); modal.setAttribute('aria-hidden','true');
    document.body.style.overflow = '';
    opener?.focus();
  };
  cards.forEach(c => {
    c.addEventListener('click', () => open(c.dataset.proj, c));
  });
  $('#modalX').addEventListener('click', close);
  modal.addEventListener('click', e => { if (e.target === modal) close(); });
  addEventListener('keydown', e => {
    if (!modal.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'Tab'){
      const f = [...modal.querySelectorAll('button,a[href]')].filter(el => el.offsetParent);
      if (!f.length) return;
      const first = f[0], last = f[f.length-1];
      if (e.shiftKey && document.activeElement === first){ e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last){ e.preventDefault(); first.focus(); }
    }
  });
})();

/* ---------- skills spotlight ---------- */
$$('.skill').forEach(s => s.addEventListener('mousemove', e => {
  const r = s.getBoundingClientRect();
  s.style.setProperty('--mx', (e.clientX-r.left)+'px');
  s.style.setProperty('--my', (e.clientY-r.top)+'px');
}));
$$('.skill').forEach(s => s.addEventListener('pointerdown', e => {
  if (prefersReduced) return;
  const r = s.getBoundingClientRect();
  const rip = document.createElement('span');
  rip.className = 'skill-ripple';
  rip.style.left = (e.clientX-r.left)+'px';
  rip.style.top = (e.clientY-r.top)+'px';
  s.appendChild(rip);
  rip.addEventListener('animationend', () => rip.remove());
}));

/* ---------- contact form (endpoint or mailto fallback) ---------- */
$('#cform').addEventListener('submit', async e => {
  e.preventDefault();
  const n = $('#fName').value.trim(), em = $('#fEmail').value.trim(), m = $('#fMsg').value.trim();
  const status = $('#formStatus'), btn = $('#sendBtn');
  status.className = 'form-status';
  if ($('#fCompany').value.trim()){ status.textContent = 'Message sent'; status.classList.add('ok'); e.target.reset(); return; } // honeypot: bots fill this, humans never see it
  if (!n || !em || !m){ status.textContent = 'Please fill in all three fields.'; status.classList.add('err'); return; }
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(em)){ status.textContent = 'That email address does not look right.'; status.classList.add('err'); return; }
  if (!CONFIG.formEndpoint){
    const body = encodeURIComponent(`Hi Narasimha,\n\n${m}\n\n- ${n} (${em})`);
    location.href = `mailto:${CONFIG.email}?subject=${encodeURIComponent('Portfolio Contact from '+n)}&body=${body}`;
    status.textContent = 'Opening your email app...'; status.classList.add('ok');
    return;
  }
  btn.classList.add('loading'); status.textContent = 'Sending...';
  try {
    const res = await fetch(CONFIG.formEndpoint, {
      method:'POST', headers:{'Content-Type':'application/json','Accept':'application/json'},
      body: JSON.stringify({ name:n, email:em, message:m })
    });
    if (!res.ok) throw 0;
    status.textContent = "Message sent - thanks! I'll get back to you soon.";
    status.classList.add('ok');
    if (!prefersReduced){ status.classList.remove('pop'); void status.offsetWidth; status.classList.add('pop'); }
    e.target.reset();
  } catch { status.textContent = 'Could not send right now. Please email me directly at ' + CONFIG.email; status.classList.add('err'); }
  btn.classList.remove('loading');
});

/* ---------- footer shooting star ---------- */
(() => {
  if (prefersReduced) return;
  const s = $('#shooting'), footer = $('footer');
  (function fire(){
    const fr = footer.getBoundingClientRect();
    if (fr.top < innerHeight && fr.bottom > 0){
      s.style.left = (30 + Math.random()*55) + '%';
      s.style.top = (8 + Math.random()*26) + '%';
      s.classList.remove('go'); void s.offsetWidth; s.classList.add('go');
    }
    setTimeout(fire, 14000 + Math.random()*14000);
  })();
})();

/* ---------- Ctrl+K palette ---------- */
(() => {
  const pal = $('#palette'), input = $('#paletteInput'), list = $('#paletteList');
  const secs = [['Home','#home'],['About','#about'],['Projects','#projects'],['Skills','#skills'],['Contact','#contact']];
  let sel = 0;
  const render = q => {
    const items = secs.filter(([n]) => n.toLowerCase().includes(q.toLowerCase()));
    list.innerHTML = items.map(([n,h],i) => `<a href="${h}" class="${i===sel?'sel':''}">${n}</a>`).join('');
    return items;
  };
  let items = render('');
  const openPal = () => { pal.classList.add('open'); pal.setAttribute('aria-hidden','false'); input.value=''; sel=0; items=render(''); input.focus(); };
  const closePal = () => { pal.classList.remove('open'); pal.setAttribute('aria-hidden','true'); };
  addEventListener('keydown', e => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k'){ e.preventDefault(); pal.classList.contains('open') ? closePal() : openPal(); }
    if (e.key === 'Escape') closePal();
  });
  input.addEventListener('input', () => { sel = 0; items = render(input.value); });
  input.addEventListener('keydown', e => {
    if (e.key === 'ArrowDown'){ e.preventDefault(); sel = Math.min(items.length-1, sel+1); items = render(input.value); }
    if (e.key === 'ArrowUp'){ e.preventDefault(); sel = Math.max(0, sel-1); items = render(input.value); }
    if (e.key === 'Enter' && items[sel]){ location.hash = items[sel][1]; closePal(); }
  });
  list.addEventListener('click', closePal);
  pal.addEventListener('click', e => { if (e.target === pal) closePal(); });
})();

/* ---------- konami easter egg (fragger red) ---------- */
(() => {
  const seq = ['arrowup','arrowup','arrowdown','arrowdown','arrowleft','arrowright','arrowleft','arrowright','b','a'];
  let i = 0;
  addEventListener('keydown', e => {
    i = e.key.toLowerCase() === seq[i] ? i+1 : (e.key.toLowerCase() === seq[0] ? 1 : 0);
    if (i === seq.length){ document.documentElement.classList.toggle('fragger'); i = 0; }
  });
})();

/* ---------- globe stage (contact art) ---------- */
(() => {
  const cv = $('.globe-canvas'); if (!cv) return;
  const ctx = cv.getContext('2d');
  const N = 460, pts = [];
  for (let i = 0; i < N; i++){
    const t = Math.acos(1 - 2*(i+.5)/N), p = Math.PI*(1+Math.sqrt(5))*i;
    pts.push([Math.sin(t)*Math.cos(p), Math.sin(t)*Math.sin(p), Math.cos(t)]);
  }
  let Wc, Hc, R;
  function size(){ const r = cv.getBoundingClientRect(); if (!r.width) return;
    const d = Math.min(devicePixelRatio||1, 2);
    cv.width = r.width*d; cv.height = r.height*d; Wc = cv.width; Hc = cv.height; R = Math.min(Wc,Hc)*0.30; }
  size(); addEventListener('resize', size);
  let a = 0.6;
  function frame(){
    if (!Wc){ size(); if (!Wc) { if (!prefersReduced) requestAnimationFrame(frame); return; } }
    ctx.clearRect(0,0,Wc,Hc);
    const cx = Wc/2, cy = Hc*0.46;
    const g = ctx.createRadialGradient(cx,cy,R*.25,cx,cy,R*1.55);
    g.addColorStop(0,'rgba(139,92,246,.22)'); g.addColorStop(1,'rgba(139,92,246,0)');
    ctx.fillStyle = g; ctx.fillRect(0,0,Wc,Hc);
    const tilt = 0.32, ct = Math.cos(tilt), st = Math.sin(tilt), ca = Math.cos(a), sa = Math.sin(a);
    ctx.lineWidth = Math.max(1, Wc/900);
    for (const [rx, ry, rot, al] of [[R*1.34, R*.44, -.26, .34],[R*1.5, R*.52, .16, .2]]){
      ctx.save(); ctx.translate(cx,cy); ctx.rotate(rot);
      ctx.strokeStyle = `rgba(167,139,250,${al})`;
      ctx.beginPath(); ctx.ellipse(0,0,rx,ry,0,0,Math.PI*2); ctx.stroke(); ctx.restore();
    }
    const d = Math.min(devicePixelRatio||1, 2);
    for (const p of pts){
      const x = p[0]*ca + p[2]*sa, z1 = -p[0]*sa + p[2]*ca;
      const y = p[1]*ct - z1*st, z = p[1]*st + z1*ct;
      const s = (z+1.6)/2.6;
      ctx.fillStyle = `rgba(167,139,250,${(.1 + s*.8).toFixed(3)})`;
      ctx.beginPath(); ctx.arc(cx + x*R, cy + y*R, (0.7 + s*1.6)*d, 0, Math.PI*2); ctx.fill();
    }
    a += 0.0021;
    if (!prefersReduced) requestAnimationFrame(frame);
  }
  frame();
})();
