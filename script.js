// =====================================================================
// ELYSIAN SHADES — shared site behavior (runs on every page)
// =====================================================================

document.getElementById('year') && (document.getElementById('year').textContent = new Date().getFullYear());

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------------- PRELOADER ----------------
   Plays once per browser session (sessionStorage), an iris that
   opens to reveal the page — the site's recurring "aperture" motif. */
(function preloader(){
  const pre = document.getElementById('preloader');
  if(!pre || pre.classList.contains('done')) return;

  const alreadySeen = sessionStorage.getItem('elysian_intro_seen');
  if(alreadySeen || reduceMotion){
    pre.classList.add('done');
    return;
  }
  document.body.style.overflow = 'hidden';
  window.addEventListener('load', ()=>{
    setTimeout(()=>{
      pre.classList.add('closing');
      document.body.style.overflow = '';
      sessionStorage.setItem('elysian_intro_seen', '1');
      setTimeout(()=> pre.classList.add('done'), 1200);
    }, 1500);
  });
})();

/* ---------------- NAV: scroll state + mobile toggle ---------------- */
const navEl = document.getElementById('siteNav');
if(navEl){
  window.addEventListener('scroll', ()=>{
    navEl.classList.toggle('scrolled', window.scrollY > 40);
  }, {passive:true});
}
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
if(menuBtn && navLinks){
  menuBtn.addEventListener('click', ()=>{
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(a=>{
    a.addEventListener('click', ()=> navLinks.classList.remove('open'));
  });
}

/* ---------------- PAGE WIPE TRANSITION ----------------
   Internal links marked data-transition trigger a brief gold wipe
   before navigating, so moving between Home and Shop feels like one
   considered experience rather than a hard page reload. */
const wipe = document.getElementById('pageWipe');
if(wipe){
  document.querySelectorAll('a[data-transition]').forEach(link=>{
    link.addEventListener('click', function(e){
      const href = this.getAttribute('href');
      if(!href || href.startsWith('#')) return;
      e.preventDefault();
      wipe.classList.add('active');
      setTimeout(()=>{ window.location.href = href; }, 480);
    });
  });
}

/* ---------------- SCROLL REVEAL ---------------- */
const revealEls = document.querySelectorAll('.reveal');
if(revealEls.length){
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(en=>{
      if(en.isIntersecting){ en.target.classList.add('in-view'); io.unobserve(en.target); }
    });
  }, {threshold:0.15});
  revealEls.forEach(el=> io.observe(el));
}

/* ---------------- HEADLINE SPLIT-TEXT ----------------
   Wraps each character of elements marked data-split in a span so
   the CSS stagger animation can run letter by letter. */
document.querySelectorAll('[data-split]').forEach(el=>{
  const text = el.textContent;
  el.textContent = '';
  [...text].forEach((ch, i)=>{
    const span = document.createElement('span');
    span.className = 'char';
    span.style.animationDelay = (0.35 + i * 0.028) + 's';
    span.textContent = ch === ' ' ? '\u00A0' : ch;
    el.appendChild(span);
  });
});

/* ---------------- HERO APERTURE — scroll-linked close ----------------
   The giant iris in the hero slowly rotates and closes down as the
   visitor scrolls past it — light narrowing, exactly like a lens. */
const aperture = document.getElementById('heroAperture');
if(aperture && !reduceMotion){
  let ticking = false;
  function updateAperture(){
    const vh = window.innerHeight;
    const progress = Math.min(Math.max(window.scrollY / vh, 0), 1);
    const scale = 1 - progress * 0.35;
    const rotate = progress * 70;
    const opacity = 1 - progress * 0.75;
    aperture.style.transform = `translate(-50%,-50%) rotate(${rotate}deg) scale(${scale})`;
    aperture.style.opacity = opacity;
    ticking = false;
  }
  window.addEventListener('scroll', ()=>{
    if(!ticking){ requestAnimationFrame(updateAperture); ticking = true; }
  }, {passive:true});
  updateAperture();
}

/* ---------------- MAGNETIC BUTTONS ----------------
   A restrained pull-toward-cursor effect on primary CTAs only —
   disabled on touch devices and reduced-motion. */
if(!reduceMotion && window.matchMedia('(pointer:fine)').matches){
  document.querySelectorAll('.magnetic').forEach(btn=>{
    btn.addEventListener('mousemove', (e)=>{
      const r = btn.getBoundingClientRect();
      const x = e.clientX - r.left - r.width/2;
      const y = e.clientY - r.top - r.height/2;
      btn.style.transform = `translate(${x*0.18}px, ${y*0.35}px)`;
    });
    btn.addEventListener('mouseleave', ()=>{ btn.style.transform = 'translate(0,0)'; });
  });
}
