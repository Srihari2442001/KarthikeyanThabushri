/* ============================================================
   TRADITIONAL TAMIL WEDDING INVITATION — SCRIPT
   ============================================================
   Everything you need to customize lives in the two config
   objects below: `weddingDetails` and `weddingImages`.
   See the "HOW TO CUSTOMIZE" section at the bottom of the
   README that was shared alongside these files.
   ============================================================ */

/* -------------------- 1. MAIN CONFIGURATION -------------------- */
const weddingDetails = {
  // Names
  groomName: "S.கார்த்திகேயன்",
  brideName: "S.தபுஸ்ரீ",

  // Dates — weddingDate drives the countdown timer (ISO format)
  weddingDate: "2026-11-11T10:30:00",
  weddingDateDisplay: "11 நவம்பர் 2026 - புதன்கிழமை",
  firstEventDate: "11 நவம்பர் 2026",

  // Times
  weddingTime: "அதிகாலை 04:30",
  receptionTime: "மாலை 06:00",

  // Venue
  venueName: "ஸ்ரீ சௌடேஸ்வரி திருமண மண்டபம்",
  address: "அம்மாப்பேட்டை, சேலம் - 636 003",

  // Google Maps — paste your own links here
  mapsUrl: "https://maps.app.goo.gl/mP9Q1FbdJNLetGVHA",
mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d803.9774693139276!2d78.11671918535204!3d11.62754637891432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x3ba9597f7213686d%3A0xdd2172f68ae50f45!2sEdappadi%2C%20Tamil%20Nadu!3m2!1d11.5848807!2d77.8381526!4m5!1s0x3babeff0dc6f0d51%3A0x5db46fbd7ce9d081!2sSri%20Sowdeswari%20Kalyana%20Mahal%2C%20J4G8%2BXW3%2C%20Raju%20Conductor%20St%2C%20Sandaipet%2C%20Kondalampatti%2C%20Salem%2C%20Tamil%20Nadu%20636010!3m2!1d11.6273901!2d78.1172863!5e1!3m2!1sen!2sin!4v1789585337771!5m2!1sen!2sin",
  // Two-day events
  events: [
    {
      title: "வரவேற்பு",
      date: "11 நவம்பர் 2026",
      venue: "ஸ்ரீ சௌடேஸ்வரி திருமண மண்டபம், அம்மாப்பேட்டை, சேலம் - 636 003"
    },
    {
      title: "திருமணம்",
      date: "11 நவம்பர் 2026",
      venue: "செங்குந்தர் அருள்மிகு குமரகுரு சுப்பிரமணிய சுவாமி திருக்கோயில் அம்மாப்பேட்டை. சேலம் - 636 003"
    }
  ],

  // RSVP
  whatsappNumber: "919578904020",   // country code + number, no + or spaces
  phoneNumber: "+919578904020",
  rsvpMessage: "வணக்கம், திருமண அழைப்பிதழைப் பெற்றேன். திருமண விழாவில் கலந்து கொள்கிறேன். நன்றி.",

  // Blessings text block
  blessingsText: "\u201cஎங்கள் இல்லத் திருமண விழாவில் தாங்களும் தங்கள் குடும்பத்தாரும் கலந்து கொண்டு மணமக்களை வாழ்த்தி அருளுமாறு அன்புடன் அழைக்கின்றோம்.\u201d",
  blessingsSignature: "அன்புடன்,<br>பெற்றோர் மற்றும் உறவினர்",

  // Footer
  footerLine1: "உங்கள் வருகையே எங்கள் திருமண விழாவின் சிறப்பு",
  footerLine2: "அன்புடன்,<br>குடும்பத்தினர்",

  // Page title
  pageTitle: "திருமண அழைப்பிதழ் | KARTIKEYAN & THABUSHRI",

  // Audio
  backgroundMusic: "audio/wedding-music.mp3",
  enableMusic: true,

  // Feature toggles
  enablePetals: true,
  enableAnimations: true
};

/* -------------------- 2. IMAGE CONFIGURATION -------------------- */
const weddingImages = {
  groom: "images/groom.jpg",
  bride: "images/bride.jpg",
  couple: "images/couple.jpg",
  gallery: [
    "images/photo1.jpg",
    "images/photo2.jpg",
    "images/photo3.jpg",
    "images/photo4.jpg",
    "images/photo5.jpg",
    "images/photo6.jpg"
  ]
};

/* ============================================================
   3. APPLY CONFIGURATION TO THE PAGE
   ============================================================ */
function applyConfig(){
  const d = weddingDetails;

  document.title = d.pageTitle;
  const titleTag = document.getElementById('pageTitle');
  if (titleTag) titleTag.textContent = d.pageTitle;

  setText('groomNameHero', d.groomName);
  setText('brideNameHero', d.brideName);
  setText('heroDate', d.weddingDateDisplay);

  setText('detailDate', d.weddingDateDisplay);
  setText('detailTime', d.weddingTime);
  setText('detailVenue', d.venueName);
  setText('detailAddress', d.address);

  // Events timeline
  if (d.events && d.events.length >= 2){
    setText('event1Title', d.events[0].title);
    setText('event1Date', d.events[0].date);
    setText('event1Time', d.events[0].time);
    setText('event1Venue', d.events[0].venue);

    setText('event2Title', d.events[1].title);
    setText('event2Date', d.events[1].date);
    setText('event2Time', d.events[1].time);
    setText('event2Venue', d.events[1].venue);
  }

  // Venue card
  setText('venueName', d.venueName);
  setText('venueAddress', d.address);

  const mapsLink = document.getElementById('mapsLink');
  if (mapsLink){
    if (d.mapsUrl){
      mapsLink.href = d.mapsUrl;
    } else {
      mapsLink.style.opacity = '.5';
      mapsLink.style.pointerEvents = 'none';
      mapsLink.textContent = 'Google Maps இணைப்பு சேர்க்கப்படவில்லை';
    }
  }

  const mapWrap = document.getElementById('mapEmbedWrap');
  const mapPlaceholder = document.getElementById('mapPlaceholder');
  if (mapWrap && d.mapEmbedUrl){
    mapWrap.innerHTML = `<iframe src="${d.mapEmbedUrl}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen title="Venue map"></iframe>`;
  } else if (mapPlaceholder){
    // keep placeholder as-is
  }

  // RSVP
  const whatsappBtn = document.getElementById('whatsappBtn');
  if (whatsappBtn){
    const msg = encodeURIComponent(d.rsvpMessage);
    whatsappBtn.href = `https://wa.me/${d.whatsappNumber}?text=${msg}`;
  }
  const callBtn = document.getElementById('callBtn');
  if (callBtn){ callBtn.href = `tel:${d.phoneNumber}`; }

  // Blessings
  const blessingsText = document.getElementById('blessingsText');
  if (blessingsText) blessingsText.innerHTML = d.blessingsText;
  const blessingsSig = document.getElementById('blessingsSignature');
  if (blessingsSig) blessingsSig.innerHTML = d.blessingsSignature;
  const coupleMessage = document.getElementById('coupleMessage');
  if (coupleMessage) coupleMessage.innerHTML = d.blessingsText;

  // Footer
  const footerLine1 = document.getElementById('footerLine1');
  if (footerLine1) footerLine1.textContent = d.footerLine1;
  const footerLine2 = document.getElementById('footerLine2');
  if (footerLine2) footerLine2.innerHTML = d.footerLine2;

  // Images
  const couplePhoto = document.getElementById('couplePhoto');
  if (couplePhoto) couplePhoto.src = weddingImages.couple;

  const bgMusic = document.getElementById('bgMusic');
  if (bgMusic) bgMusic.src = d.backgroundMusic;

  if (!d.enableMusic){
    const musicToggle = document.getElementById('musicToggle');
    if (musicToggle) musicToggle.style.display = 'none';
  }
}

function setText(id, value){
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

/* ============================================================
   4. OPENING DOOR ANIMATION
   ============================================================ */
function initOpening(){
  const overlay = document.getElementById('openingOverlay');
  const skipBtn = document.getElementById('skipOpening');
  if (!overlay) return;

  let finished = false;
  const finish = () => {
    if (finished) return;
    finished = true;
    overlay.classList.add('opening-hide');
    document.body.style.overflow = '';
    setTimeout(() => overlay.remove(), 900);
  };

  document.body.style.overflow = 'hidden';

  // start the door-opening sequence shortly after load
  setTimeout(() => {
    overlay.classList.add('opening-run');
    setTimeout(finish, 1500);
  }, 1300);

  skipBtn?.addEventListener('click', finish);
}

/* ============================================================
   5. SCROLL REVEAL (Intersection Observer)
   ============================================================ */
function initScrollReveal(){
  const items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window) || !weddingDetails.enableAnimations){
    items.forEach(el => el.classList.add('in-view'));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  items.forEach(el => observer.observe(el));
}

/* ============================================================
   6. COUNTDOWN TIMER
   ============================================================ */
function initCountdown(){
  const target = new Date(weddingDetails.weddingDate).getTime();
  const box = document.getElementById('countdownBox');
  const done = document.getElementById('countdownDone');

  const els = {
    d: document.getElementById('cdDays'),
    h: document.getElementById('cdHours'),
    m: document.getElementById('cdMins'),
    s: document.getElementById('cdSecs')
  };

  function pad(n){ return String(n).padStart(2, '0'); }

  function tick(){
    const now = Date.now();
    const diff = target - now;

    if (diff <= 0){
      clearInterval(timer);
      if (box) box.hidden = true;
      if (done) done.hidden = false;
      return;
    }

    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    const mins = Math.floor((diff % 3600000) / 60000);
    const secs = Math.floor((diff % 60000) / 1000);

    if (els.d) els.d.textContent = pad(days);
    if (els.h) els.h.textContent = pad(hours);
    if (els.m) els.m.textContent = pad(mins);
    if (els.s) els.s.textContent = pad(secs);
  }

  tick();
  const timer = setInterval(tick, 1000);
}

/* ============================================================
   7. PHOTO GALLERY + LIGHTBOX
   ============================================================ */
let galleryPhotos = [];
let lightboxIndex = 0;

function initGallery(){
  const grid = document.getElementById('galleryGrid');
  if (!grid) return;

  galleryPhotos = weddingImages.gallery;

  grid.innerHTML = galleryPhotos.map((src, i) => `
    <figure class="gallery-item" data-index="${i}" tabindex="0" role="button" aria-label="புகைப்படம் ${i + 1}">
      <img src="${src}" alt="திருமண புகைப்படம் ${i + 1}" loading="lazy"
           onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
      <div class="img-fallback" style="display:none;">
        <span>❀</span>
        <p>photo${i + 1}.jpg</p>
      </div>
    </figure>
  `).join('');

  grid.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => openLightbox(Number(item.dataset.index)));
    item.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') openLightbox(Number(item.dataset.index));
    });
  });
}

function openLightbox(index){
  lightboxIndex = index;
  const lightbox = document.getElementById('lightbox');
  const img = document.getElementById('lightboxImg');
  img.src = galleryPhotos[lightboxIndex];
  img.alt = `திருமண புகைப்படம் ${lightboxIndex + 1}`;
  lightbox.hidden = false;
  document.body.style.overflow = 'hidden';
}

function closeLightbox(){
  document.getElementById('lightbox').hidden = true;
  document.body.style.overflow = '';
}

function navLightbox(dir){
  lightboxIndex = (lightboxIndex + dir + galleryPhotos.length) % galleryPhotos.length;
  document.getElementById('lightboxImg').src = galleryPhotos[lightboxIndex];
}

function initLightboxControls(){
  document.getElementById('lightboxClose')?.addEventListener('click', closeLightbox);
  document.getElementById('lightboxPrev')?.addEventListener('click', () => navLightbox(-1));
  document.getElementById('lightboxNext')?.addEventListener('click', () => navLightbox(1));

  const lightbox = document.getElementById('lightbox');
  lightbox?.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (lightbox && !lightbox.hidden){
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') navLightbox(-1);
      if (e.key === 'ArrowRight') navLightbox(1);
    }
  });

  // basic mobile swipe support
  let touchStartX = null;
  lightbox?.addEventListener('touchstart', (e) => { touchStartX = e.touches[0].clientX; }, { passive: true });
  lightbox?.addEventListener('touchend', (e) => {
    if (touchStartX === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 40){ navLightbox(dx > 0 ? -1 : 1); }
    touchStartX = null;
  }, { passive: true });
}

/* ============================================================
   8. BACKGROUND MUSIC
   ============================================================ */
function initMusic(){
  const btn = document.getElementById('musicToggle');
  const icon = btn?.querySelector('.music-icon');
  const audio = document.getElementById('bgMusic');
  if (!btn || !audio || !weddingDetails.enableMusic) return;

  let playing = false;

  btn.addEventListener('click', () => {
    if (!playing){
      audio.play().then(() => {
        playing = true;
        btn.setAttribute('aria-pressed', 'true');
        icon?.classList.add('playing');
      }).catch(() => {
        // Autoplay/permission issue — silently ignore, user can retry
      });
    } else {
      audio.pause();
      playing = false;
      btn.setAttribute('aria-pressed', 'false');
      icon?.classList.remove('playing');
    }
  });
}

/* ============================================================
   9. SHARE PANEL
   ============================================================ */
function initShare(){
  const shareToggle = document.getElementById('shareToggle');
  const sharePanel = document.getElementById('sharePanel');
  const shareClose = document.getElementById('shareClose');
  const nativeBtn = document.getElementById('nativeShareBtn');

  if (!shareToggle || !sharePanel) return;

  const shareTextMsg = "இந்த திருமண அழைப்பிதழை உங்கள் நண்பர்கள் மற்றும் உறவினர்களுடன் பகிருங்கள் ❤️";
  const pageUrl = window.location.href;

  if (navigator.share && nativeBtn){
    nativeBtn.hidden = false;
  }

  shareToggle.addEventListener('click', () => { sharePanel.hidden = false; });
  shareClose?.addEventListener('click', () => { sharePanel.hidden = true; });
  sharePanel.addEventListener('click', (e) => { if (e.target === sharePanel) sharePanel.hidden = true; });

  sharePanel.querySelectorAll('.share-btn').forEach(btn => {
    btn.addEventListener('click', async () => {
      const type = btn.dataset.share;
      if (type === 'whatsapp'){
        window.open(`https://wa.me/?text=${encodeURIComponent(shareTextMsg + ' ' + pageUrl)}`, '_blank');
      } else if (type === 'facebook'){
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`, '_blank');
      } else if (type === 'copy'){
        try {
          await navigator.clipboard.writeText(pageUrl);
          btn.textContent = 'நகலெடுக்கப்பட்டது ✓';
          setTimeout(() => { btn.textContent = 'இணைப்பை நகலெடு'; }, 1800);
        } catch {
          /* clipboard unavailable */
        }
      } else if (type === 'native' && navigator.share){
        try {
          await navigator.share({ title: document.title, text: shareTextMsg, url: pageUrl });
        } catch {
          /* user cancelled */
        }
      }
    });
  });
}

/* ============================================================
   10. FALLING PETALS
   ============================================================ */
function initPetals(){
  if (!weddingDetails.enablePetals) return;
  const layer = document.getElementById('petalLayer');
  if (!layer) return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  const isMobile = window.innerWidth < 700;
  const maxPetals = isMobile ? 10 : 18;
  let activePetals = 0;

  const petalSVG = (color) => `
    <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 0C9 6 15 6 15 9C15 12 9 12 9 18C9 12 3 12 3 9C3 6 9 6 9 0Z" fill="${color}" opacity="0.85"/>
    </svg>`;

  const colors = ['#e9c76a', '#cf9d3e', '#f6ecd8', '#8c1f2c'];

  function spawnPetal(){
    if (activePetals >= maxPetals) return;
    activePetals++;

    const petal = document.createElement('div');
    petal.className = 'petal';
    petal.innerHTML = petalSVG(colors[Math.floor(Math.random() * colors.length)]);

    const startX = Math.random() * 100;
    const size = 0.6 + Math.random() * 0.9;
    const duration = 9 + Math.random() * 8;
    const rotateStart = Math.random() * 360;
    const drift = (Math.random() - 0.5) * 160;

    petal.style.left = `${startX}vw`;
    petal.style.transform = `scale(${size}) rotate(${rotateStart}deg)`;
    petal.style.transition = `transform ${duration}s linear, top ${duration}s linear, opacity ${duration}s ease-in`;
    petal.style.top = '-40px';
    petal.style.opacity = '0.9';

    layer.appendChild(petal);

    requestAnimationFrame(() => {
      petal.style.top = '110vh';
      petal.style.transform = `translateX(${drift}px) scale(${size}) rotate(${rotateStart + 220}deg)`;
      petal.style.opacity = '0';
    });

    setTimeout(() => {
      petal.remove();
      activePetals--;
    }, duration * 1000 + 200);
  }

  setInterval(spawnPetal, 1300);
  for (let i = 0; i < 4; i++) setTimeout(spawnPetal, i * 400);
}

/* ============================================================
   11. INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  applyConfig();
  initOpening();
  initScrollReveal();
  initCountdown();
  initGallery();
  initLightboxControls();
  initMusic();
  initShare();
  initPetals();
});
