/* =========================================================================
   SEMENOV — portfolio (macOS-desktop metaphor)
   All content lives in the two arrays below. Edit these to make it yours:
   swap assets/bg.jpg, the assets/icons/* thumbnails, the labels, and the
   dock links (Instagram / e-mail). Positions are authored on two stages:
     · desktop stage = 1440 x 900   (dcx = horizontal CENTER, dy = top)
     · mobile  stage =  390 x 844   (mcx = horizontal CENTER, my = top)
   Icon width/height (w,h) are shared by both stages.
   ========================================================================= */

const PROJECTS = [
  { slug:'organical-hemp', ext:'webp', label:'Organical<br>Hemp', w:58, h:58, mw:40, mh:40, rot:3.3, dcx:1259.6, dy:398.3, mcx:46, my:38.0 },
  { slug:'loops', ext:'jpg', label:'://LOOPS', w:58, h:58, mw:40, mh:40, rot:-3.2, dcx:318.9, dy:428.9, mcx:118, my:38.0 },
  { slug:'bondar-kst', ext:'jpg', label:'Bondar KST', w:58, h:58, mw:40, mh:40, rot:1.3, dcx:203.7, dy:291.2, mcx:190, my:38.0 },
  { slug:'snacksy', ext:'jpg', label:'SNACKSY', w:58, h:58, mw:40, mh:40, rot:-2.3, dcx:199.3, dy:625.4, mcx:262, my:38.0 },
  { slug:'strelka-vpn', ext:'jpg', label:'Strelka VPN', w:58, h:58, mw:40, mh:40, rot:-1.4, dcx:966.1, dy:118.6, mcx:344, my:38.0 },
  { slug:'milred', ext:'jpg', label:'MILRED', w:58, h:58, mw:40, mh:40, rot:0.4, dcx:1333.4, dy:727.7, mcx:46, my:79.0 },
  { slug:'alfabank', ext:'webp', label:'Альфабанк', w:58, h:58, mw:40, mh:40, rot:-2.2, dcx:284.3, dy:100.9, mcx:118, my:79.0 },
  { slug:'nesquik', ext:'webp', label:'Nesquik', w:58, h:58, mw:40, mh:40, rot:-1.8, dcx:756.1, dy:130.3, mcx:190, my:79.0 },
  { slug:'omich', ext:'webp', label:'omich', w:58, h:58, mw:40, mh:40, rot:-1.2, dcx:325.9, dy:250.7, mcx:262, my:79.0 },
  { slug:'crmnl', ext:'jpg', label:'CRMNL', w:58, h:58, mw:40, mh:40, rot:1.8, dcx:122.3, dy:397.2, mcx:344, my:79.0 },
  { slug:'dropsavage', ext:'webp', label:'Drop Savage', w:58, h:58, mw:40, mh:40, rot:-2.7, dcx:1152.8, dy:558.2, mcx:46, my:120.0 },
  { slug:'rocketlab', ext:'webp', label:'RocketLab', w:58, h:58, mw:40, mh:40, rot:-3.3, dcx:485.0, dy:242.6, mcx:118, my:120.0 },
  { slug:'50gym', ext:'webp', label:'50 GYM', w:58, h:58, mw:40, mh:40, rot:2.5, dcx:1058.7, dy:355.3, mcx:190, my:120.0 },
  { slug:'lanafit', ext:'jpg', label:'LANAFIT', w:58, h:58, mw:40, mh:40, rot:-1.9, dcx:84.7, dy:229.4, mcx:262, my:120.0 },
  { slug:'stesa', ext:'jpg', label:'СТЕСА ПРОМ', w:58, h:58, mw:40, mh:40, rot:4.9, dcx:1310.3, dy:591.3, mcx:344, my:120.0 },
  { slug:'skrsrk', ext:'jpg', label:'SKRSRK', w:58, h:58, mw:40, mh:40, rot:0.7, dcx:1097.8, dy:208.3, mcx:46, my:161.0 },
  { slug:'slotvisa', ext:'jpg', label:'SLOTVISA', w:58, h:58, mw:40, mh:40, rot:2.5, dcx:326.6, dy:574.1, mcx:118, my:161.0 },
  { slug:'caligas', ext:'jpg', label:'CALIGAS', w:58, h:58, mw:40, mh:40, rot:-1.9, dcx:1024.5, dy:711.7, mcx:190, my:161.0 },
  { slug:'urbanboxing', ext:'jpg', label:'Urban Boxing', w:58, h:58, mw:40, mh:40, rot:3.6, dcx:334.1, dy:718.1, mcx:262, my:161.0 },
  { slug:'milka', ext:'webp', label:'Милка', w:58, h:58, mw:40, mh:40, rot:-4.5, dcx:620.1, dy:159.5, mcx:344, my:161.0 },
  { slug:'tapiochi', ext:'jpg', label:'тапиоЧи', w:58, h:58, mw:40, mh:40, rot:-4.0, dcx:1250.9, dy:225.6, mcx:46, my:202.0 },
  { slug:'repit', ext:'jpg', label:'REP.IT', w:58, h:58, mw:40, mh:40, rot:-4.5, dcx:1021.6, dy:555.4, mcx:118, my:202.0 },
  { slug:'paf', ext:'jpg', label:'PAF', w:58, h:58, mw:40, mh:40, rot:2.0, dcx:409.4, dy:98.5, mcx:190, my:202.0 },
  { slug:'shnurok', ext:'jpg', label:'shnurok', w:58, h:58, mw:40, mh:40, rot:2.3, dcx:1159.2, dy:685.3, mcx:262, my:202.0 },
  { slug:'tuning-imperia', ext:'jpg', label:'Tuning<br>Imperia', w:58, h:58, mw:40, mh:40, rot:-3.5, dcx:1330.7, dy:106.1, mcx:344, my:202.0 },
  { slug:'tagbar', ext:'webp', label:'Tagbar', w:58, h:58, mw:40, mh:40, rot:-1.1, dcx:909.5, dy:253.0, mcx:46, my:243.0 },
  { slug:'praktik', ext:'webp', label:'Практик Гарден', w:58, h:58, mw:40, mh:40, rot:3.7, dcx:97.3, dy:745.5, mcx:118, my:243.0 },
  { slug:'blatosphera', ext:'webp', label:'BLATOSPHERA', w:58, h:58, mw:40, mh:40, rot:1.5, dcx:466.0, dy:410.0, mcx:262, my:284.0 },
  { slug:'folders', ext:'webp', label:'FOLDERS', w:58, h:58, mw:40, mh:40, rot:-1.2, dcx:596.0, dy:460.0, mcx:188, my:300.0 },
  { slug:'stiraliti', ext:'webp', label:'STIRALITI', w:58, h:58, mw:40, mh:40, rot:1.8, dcx:486.0, dy:580.0, mcx:300, my:300.0 },
  { slug:'finelix', ext:'webp', label:'Finelix', w:58, h:58, mw:40, mh:40, rot:2.0, dcx:816.0, dy:540.0, mcx:118, my:340.0 },
  { slug:'haru', ext:'webp', label:'HARU', w:58, h:58, mw:40, mh:40, rot:-2.5, dcx:936.0, dy:440.0, mcx:270, my:340.0 },
  { slug:'furfe', ext:'webp', label:'FURFE', w:58, h:58, mw:40, mh:40, rot:-2.6, dcx:706.0, dy:672.0, mcx:190, my:243.0 },
  { slug:'katza', ext:'jpg', label:'KATZA', w:58, h:58, mw:40, mh:40, rot:-2.0, dcx:536.0, dy:749.0, mcx:262, my:243.0 },
  { slug:'coffee-want', ext:'jpg', label:'Coffee Want?!', w:58, h:58, mw:40, mh:40, rot:2.6, dcx:96.0, dy:543.0, mcx:344, my:243.0 },
];

/* Dock — order matters. `sep:true` inserts a divider. `href` makes it a link. */
const DOCK = [
  { slug:'instagram', label:'Instagram', href:'https://www.instagram.com/semenov.folders/' },
  { slug:'telegram',  label:'Telegram',  href:'https://t.me/Semenovfolders' },
  { slug:'mail',      label:'Mail',      href:'mailto:Small_pimp@mail.ru' },
  { sep:true },
  { slug:'trash',     label:'Trash' },
];

/* ---------- render scattered project icons ---------- */
const iconsRoot = document.getElementById('icons');
const iconFrag = document.createDocumentFragment();
const iconEls = [];

for (const p of PROJECTS) {
  const el = document.createElement('div');
  el.className = 'icon';
  el.dataset.slug = p.slug;
  el.setAttribute('role', 'button');
  el.setAttribute('aria-label', p.label.replace(/<br>/g, ' '));
  el.tabIndex = 0;
  el.style.setProperty('--rot', (p.rot || 0) + 'deg');   // slight tilt; position/size set by layout()

  const thumb = document.createElement('span');
  thumb.className = 'icon__thumb';
  let media;
  if (p.ext === 'mp4' || p.ext === 'webm') {
    media = document.createElement('video');
    media.src = `assets/icons/${p.slug}.${p.ext}`;
    media.autoplay = true;
    media.loop = true;
    media.muted = true;
    media.defaultMuted = true;
    media.playsInline = true;
    media.setAttribute('muted', '');
    media.setAttribute('playsinline', '');
    media.setAttribute('aria-label', p.label.replace(/<br>/g, ' '));
    media.play && media.play().catch(() => {});
  } else {
    media = document.createElement('img');
    media.src = `assets/icons/${p.slug}.${p.ext}`;
    media.alt = p.label.replace(/<br>/g, ' ');
    media.loading = 'lazy';
  }
  media.draggable = false;
  thumb.appendChild(media);

  const label = document.createElement('span');
  label.className = 'icon__label';
  label.innerHTML = p.label;

  el.append(thumb, label);
  iconEls.push(el);
  iconFrag.appendChild(el);
}
iconsRoot.appendChild(iconFrag);

/* ---------- render dock ---------- */
const dockRoot = document.getElementById('dock');
const dockInner = document.createElement('div');
dockInner.className = 'dock__inner';

for (const d of DOCK) {
  if (d.sep) {
    const s = document.createElement('span');
    s.className = 'dock__sep';
    dockInner.appendChild(s);
    continue;
  }
  const tag = d.href ? 'a' : 'button';
  const item = document.createElement(tag);
  item.className = 'dock__item';
  if (d.href) {
    item.href = d.href;
    if (d.href.startsWith('http')) { item.target = '_blank'; item.rel = 'noopener'; }
  } else {
    item.type = 'button';
  }
  item.setAttribute('aria-label', d.label);

  const tip = document.createElement('span');
  tip.className = 'dock__tip';
  tip.textContent = d.label;

  const img = document.createElement('img');
  img.src = `assets/dock/${d.slug}.png`;
  img.alt = '';
  img.draggable = false;

  item.append(tip, img);
  dockInner.appendChild(item);
}
dockRoot.appendChild(dockInner);

/* ---------- layout: anchor every icon to the wallpaper photo ----------
   Icons are positioned in viewport pixels from an anchor ON the photo, using the
   exact same cover transform as the full-bleed wallpaper (object-fit:cover, centre).
   → the figure and the icons stay pixel-aligned at ANY viewport size. */
const viewport = document.getElementById('viewport');
const IMG = { w: 1595, h: 986 };                 // wallpaper natural size
const SD  = Math.max(1440 / IMG.w, 900 / IMG.h); // design(1440×900) was a cover of the photo
const OXD = (IMG.w * SD - 1440) / 2;
const OYD = (IMG.h * SD - 900) / 2;
PROJECTS.forEach((p) => {
  p.imgX = (p.dcx + OXD) / SD;                    // icon centre, on the photo
  p.imgY = (p.dy + p.h / 2 + OYD) / SD;
  p.imgSize = p.w / SD;                           // icon size in photo pixels
});

/* chaotic mobile scatter — precomputed once (seeded → stable across resizes),
   in 390×844 reference px, kept in the clear band ABOVE the figure */
function mulberry32(a){return function(){a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296;};}
const M_REF_W = 390, M_REF_H = 844;
const mobilePts = (() => {
  const rng = mulberry32(424242), pts = [];
  const X0 = 26, X1 = 364, Y0 = 46, Y1 = 772;       // scatter across the WHOLE desktop
  const FACE = { x: 196, y: 338, r: 76 };           // keep the face clear
  const DOCKY = 774;                                // leave room for the bottom dock
  const free = (x, y) => (x - FACE.x) ** 2 + (y - FACE.y) ** 2 >= FACE.r * FACE.r
                         && !(x > 70 && x < 320 && y > DOCKY);
  const tryFill = (MIN, budget) => {
    let t = 0;
    while (pts.length < PROJECTS.length && t < budget) {
      t++;
      const x = X0 + rng() * (X1 - X0), y = Y0 + rng() * (Y1 - Y0);
      if (free(x, y) && pts.every((p) => (p.x - x) ** 2 + (p.y - y) ** 2 >= MIN * MIN)) pts.push({ x, y });
    }
  };
  for (let MIN = 82; MIN >= 34 && pts.length < PROJECTS.length; MIN -= 6) tryFill(MIN, 50000);
  return pts;
})();

function layout() {
  const vw = window.innerWidth, vh = window.innerHeight;
  const mobile = vw < 820 || vw / vh < 0.92;
  document.body.classList.toggle('is-mobile', mobile);

  if (!mobile) {
    const s = Math.max(vw / IMG.w, vh / IMG.h);   // == wallpaper cover scale
    const ox = (vw - IMG.w * s) / 2, oy = (vh - IMG.h * s) / 2;
    iconEls.forEach((el, i) => {
      const p = PROJECTS[i], sz = p.imgSize * s;
      el.style.left = (ox + p.imgX * s) + 'px';
      el.style.top  = (oy + p.imgY * s) + 'px';
      el.style.width = sz + 'px';
      el.style.height = sz + 'px';
      el.style.setProperty('--lbl', Math.max(10.5, 12.5 * s) + 'px');
    });
  } else {
    // mobile: CHAOTIC scatter across the whole desktop, with labels
    const kx = vw / M_REF_W, ky = vh / M_REF_H, sz = Math.min(46, 42 * kx);
    iconEls.forEach((el, i) => {
      const p = mobilePts[i];
      el.style.left = (p.x * kx) + 'px';
      el.style.top  = (p.y * ky) + 'px';
      el.style.width = sz + 'px';
      el.style.height = sz + 'px';
      el.style.setProperty('--lbl', '10px');
    });
  }
}
layout();
window.addEventListener('resize', layout, { passive: true });
window.addEventListener('orientationchange', layout);

/* The original dock is static (no macOS magnification); hover feedback is
   handled in CSS to keep the at-rest look one-to-one. */

/* ---------- "Get Info" window: open on icon click ---------- */
const WIN = window.WINDOWS || {};          // content, generated in windows-data.js
const infowin   = document.getElementById('infowin');
const iwBar     = document.getElementById('infowinBar');
const iwBody    = document.getElementById('infowinBody');
const iwWinTitle= document.getElementById('iwWinTitle');
const iwIcon    = document.getElementById('iwIcon');
const iwBig     = document.getElementById('iwBig');
const iwSub     = document.getElementById('iwSub');
const iwDesc    = document.getElementById('iwDesc');
const iwType    = document.getElementById('iwType');
const iwTypeSec = document.getElementById('iwDetails');
const iwPrevSec = document.getElementById('iwPreviewSec');
const iwPreview = document.getElementById('iwPreview');

const PROJ_BY_SLUG = Object.fromEntries(PROJECTS.map((p) => [p.slug, p]));

function openWindow(slug, srcEl) {
  const p = PROJ_BY_SLUG[slug];
  const w = WIN[slug] || {};
  if (!p) return;

  iwWinTitle.textContent = w.title || p.label.replace(/<br>/g, ' ');
  iwIcon.src = `assets/icons/${p.slug}.${p.ext}`;
  iwBig.textContent = w.big || w.title || p.label.replace(/<br>/g, ' ');
  iwSub.textContent = w.subtitle || '';
  iwSub.style.display = w.subtitle ? '' : 'none';
  iwDesc.innerHTML = w.desc || '';
  iwDesc.style.display = w.desc ? '' : 'none';

  if (w.type) { iwType.textContent = w.type; iwTypeSec.style.display = ''; }
  else { iwTypeSec.style.display = 'none'; }

  iwPreview.replaceChildren();
  const previews = w.previews || [];
  if (previews.length) {
    iwPrevSec.style.display = '';
    const makePreviewEl = (pv) => {
      const isVideo = pv.type === 'video' || /\.(mp4|webm|mov)$/i.test(pv.src);
      const el = document.createElement(isVideo ? 'video' : 'img');
      if (isVideo) {
        el.src = pv.src;
        el.muted = true; el.defaultMuted = true;          // required for autoplay
        el.autoplay = true; el.loop = true;
        el.playsInline = true; el.setAttribute('playsinline', '');
        el.controls = false; el.preload = 'auto';          // no player UI — clean auto-loop
        if (pv.poster) el.poster = pv.poster;
        if (pv.rate) {                                     // play this clip faster (e.g. 2×)
          const setRate = () => { try { el.playbackRate = pv.rate; } catch (e) {} };
          setRate();
          el.addEventListener('loadedmetadata', setRate);  // Safari resets rate on load
          el.addEventListener('play', setRate);
        }
        el.play?.().catch(() => {});                       // nudge autoplay
      } else {
        el.src = pv.src;
        el.loading = 'lazy';
      }
      el.draggable = false;
      if (pv.w && pv.h) { el.width = pv.w; el.height = pv.h; }
      el.alt = '';
      return el;
    };
    const isSquare = (pv) => {
      const isVideo = pv.type === 'video' || /\.(mp4|webm|mov)$/i.test(pv.src);
      if (isVideo) return false;
      if (pv.pair) return true;                 // explicit 2-up flag for non-square cards
      return pv.w && pv.h && Math.abs(pv.w / pv.h - 1) <= 0.08;
    };
    // simple Behance-style layout: every clip is full-width, stacked one after another
    const canPair = () => false;
    for (let i = 0; i < previews.length; i++) {
      // two height-matched clips share one row — their native format is preserved
      if (i + 1 < previews.length && canPair(previews[i], previews[i + 1])) {
        const row = document.createElement('div');
        row.className = 'infowin__row';
        row.append(makePreviewEl(previews[i]), makePreviewEl(previews[i + 1]));
        iwPreview.appendChild(row);
        i++;
      } else {
        iwPreview.appendChild(makePreviewEl(previews[i]));
      }
    }
  } else {
    iwPrevSec.style.display = 'none';
  }

  infowin.hidden = false;
  iwBody.scrollTop = 0;
  positionWindow(srcEl);
  animateOpen();                       // macOS-style: the window zooms OUT of the icon
}
const REDUCE = window.matchMedia('(prefers-reduced-motion: reduce)');
function closeWindow() {
  if (infowin.hidden) return;
  iwPreview.querySelectorAll('video').forEach((v) => v.pause());   // stop hidden videos
  if (closeAnim) closeAnim.cancel();
  if (openAnim) { openAnim.cancel(); openAnim = null; }
  if (REDUCE.matches) { infowin.hidden = true; return; }
  closeAnim = infowin.animate(
    [{ transform: 'scale(1)', opacity: 1 }, { transform: 'scale(.46)', opacity: 0 }],
    { duration: 190, easing: 'cubic-bezier(.4,0,1,1)' }
  );
  closeAnim.onfinish = () => { infowin.hidden = true; closeAnim = null; };
}

/* place the window next to the clicked icon (clamped on-screen); centred on mobile.
   transform-origin is set ON the icon so the window appears to grow out of it. */
let openAnim = null, closeAnim = null;
function positionWindow(srcEl) {
  const w = infowin.offsetWidth, h = infowin.offsetHeight;
  const mobile = document.body.classList.contains('is-mobile');
  const m = 16, dockClear = mobile ? 70 : 96;   // keep the window above the bottom dock
  const maxTop = Math.max(m, window.innerHeight - h - dockClear);
  let left, top, ox, oy;
  if (mobile || !srcEl) {
    left = Math.max(8, (window.innerWidth - w) / 2);
    top  = Math.min(Math.max(8, (window.innerHeight - dockClear - h) / 2), maxTop);
    ox = w / 2; oy = h / 2;
  } else {
    const r = srcEl.getBoundingClientRect();
    left = r.right + 16;
    if (left + w > window.innerWidth - m) left = r.left - w - 16;   // flip to the icon's left
    left = Math.max(m, Math.min(left, window.innerWidth - w - m));
    top  = Math.max(m, Math.min(r.top - 14, maxTop));               // never overlap the dock
    ox = (r.left + r.width / 2) - left;     // icon centre, relative to the window box
    oy = (r.top + r.height / 2) - top;
  }
  infowin.style.transform = 'none';
  infowin.style.left = left + 'px';
  infowin.style.top  = top + 'px';
  infowin.style.transformOrigin = ox + 'px ' + oy + 'px';
}
function animateOpen() {
  if (closeAnim) { closeAnim.cancel(); closeAnim = null; }
  if (openAnim) openAnim.cancel();
  if (REDUCE.matches) return;          // respect reduced-motion
  openAnim = infowin.animate(
    [{ transform: 'scale(.46)', opacity: 0 },
     { transform: 'scale(1.006)', opacity: 1, offset: 0.72 },
     { transform: 'scale(1)', opacity: 1 }],
    { duration: 320, easing: 'cubic-bezier(.32,.72,0,1)' }   // Apple sheet easing
  );
}

// open from icons (click + keyboard)
iconsRoot.addEventListener('click', (e) => {
  const el = e.target.closest('.icon');
  if (el && el.dataset.slug) openWindow(el.dataset.slug, el);
});
iconsRoot.addEventListener('keydown', (e) => {
  if (e.key !== 'Enter' && e.key !== ' ') return;
  const el = e.target.closest('.icon');
  if (el && el.dataset.slug) { e.preventDefault(); openWindow(el.dataset.slug, el); }
});

// close: red light, Escape, or a click on the empty desktop (not an icon/dock/window)
document.getElementById('iwClose').addEventListener('click', (e) => { e.stopPropagation(); closeWindow(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeWindow(); });
viewport.addEventListener('click', (e) => {
  if (infowin.hidden) return;
  if (!e.target.closest('.icon, .dock, .infowin')) closeWindow();
});

/* ---------- drag the window by its title bar ---------- */
let drag = null;
iwBar.addEventListener('pointerdown', (e) => {
  if (e.target.closest('.tl')) return;                 // not when grabbing a traffic light
  const scale = 1;                                     // window lives in unscaled viewport space
  drag = { sx: e.clientX, sy: e.clientY, left: infowin.offsetLeft, top: infowin.offsetTop, scale };
  infowin.classList.add('dragging');                   // subtle macOS lift
  iwBar.setPointerCapture(e.pointerId);
});
iwBar.addEventListener('pointermove', (e) => {
  if (!drag) return;
  infowin.style.left = drag.left + (e.clientX - drag.sx) / drag.scale + 'px';
  infowin.style.top  = drag.top  + (e.clientY - drag.sy) / drag.scale + 'px';
});
const endDrag = () => { drag = null; infowin.classList.remove('dragging'); };
iwBar.addEventListener('pointerup', endDrag);
iwBar.addEventListener('pointercancel', endDrag);

/* ---------- boot screen ----------
   Wait for the wallpaper, every desktop icon and the dock to finish loading,
   updating the progress bar, then fade the overlay out — the desktop is revealed
   fully painted with its icon animations already playing. */
(function boot() {
  const el = document.getElementById('boot');
  if (!el) return;
  const fill = document.getElementById('bootFill');
  const media = [
    document.querySelector('.wallpaper'),
    ...document.querySelectorAll('#icons .icon img, #icons .icon video, .dock__item img'),
  ].filter(Boolean);
  const total = media.length || 1;
  let done = 0, finished = false;
  const finish = () => {
    if (finished) return;
    finished = true;
    if (fill) fill.style.width = '100%';
    requestAnimationFrame(() => {
      el.classList.add('done');
      setTimeout(() => el.remove(), 650);
    });
  };
  const bump = () => {
    done++;
    if (fill) fill.style.width = Math.min(100, Math.round((done / total) * 100)) + '%';
    if (done >= total) finish();
  };
  media.forEach((m) => {
    const isVid = m.tagName === 'VIDEO';
    const ready = isVid ? m.readyState >= 2 : (m.complete && m.naturalWidth > 0);
    if (ready) { bump(); return; }
    if (isVid) m.preload = 'auto'; else m.loading = 'eager';
    m.addEventListener(isVid ? 'loadeddata' : 'load', bump, { once: true });
    m.addEventListener('error', bump, { once: true });
  });
  setTimeout(finish, 5000);   // safety net: never hold the desktop longer than 5s
})();
