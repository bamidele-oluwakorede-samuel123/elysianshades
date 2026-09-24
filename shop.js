// =====================================================================
// ELYSIAN SHADES — shop page (product data + booking)
// =====================================================================

/* CONFIG — replace with your real details */
const WHATSAPP_NUMBER = "2349069149444"; // country code first, no + or leading 0
const CURRENCY = "₦";

/* =====================================================================
   PRODUCT DATA
   Add as many entries as you like — the grid and filters build
   themselves from this list. Add "img: 'images/filename.jpg'" to show
   a real photo instead of the line-art sketch (img always wins over
   svg when both are present). Photos can be ANY ratio — portrait,
   square, landscape, whatever came off your phone — the grid is a
   masonry layout that sizes each card to its own photo, no cropping.
   Keep photo files in an /images folder next to this file, matching
   the names used below.
   ===================================================================== */
const PRODUCTS = [
  {
    name: "Retro square sunglasses", cat: "Chunky-square", price: 3000, tag: "Classic",
    desc: "Characteristic of 90s vintage fashion, offering a bold, blocky, rectangular silhouette with rounded corners.",
    tint: "linear-gradient(135deg, rgba(227,154,69,0.9), rgba(185,144,90,0.2))",
    img: "images/img1.jpg",
    svg: `<circle cx="60" cy="55" r="30"/><circle cx="140" cy="55" r="30"/><path d="M90 52 Q100 42 110 52"/><path d="M30 45 L8 32"/><path d="M170 45 L192 32"/>`
  },
  {
    name: "Oversized plastic aviator frames", cat: "Aviator", price: 3000, tag: "New",
    desc: "A thick, bubblegum pink acetate , thick double brow bridge design with a prominent continuous upper bar that wraps across the top of the lenses.",
    tint: "linear-gradient(135deg, rgba(160,90,90,0.85), rgba(80,40,40,0.15))",
    img: "images/img2.jpg",
    svg: `<path d="M28 60 Q26 34 62 36 Q92 38 90 60 Q88 74 60 74 Q30 74 28 60Z"/><path d="M110 60 Q108 34 144 36 Q174 38 172 60 Q170 74 142 74 Q112 74 110 60Z"/><path d="M90 46 Q100 38 110 46"/><path d="M28 45 L6 30"/><path d="M172 45 L194 30"/>`
  },
  {
    name: "Retro Rectangle Fashion Sunglasses", cat: "Chunky Square/ Rectangular Frame featuring Sunset Orange Tinted Lenses", price: 3000, tag: "Classic",
    desc: "A bold 90s-inspired vintage aesthetic, utilizing a durable, thick black high-quality plastic frame.",
    tint: "linear-gradient(135deg, rgba(120,150,140,0.8), rgba(60,90,80,0.15))",
    img: "images/img3.jpg",
    svg: `<circle cx="58" cy="52" r="32"/><circle cx="142" cy="52" r="32"/><path d="M90 50 Q100 42 110 50"/><path d="M26 42 L4 30"/><path d="M174 42 L196 30"/>`
  },
  {
    name: "Oversized Chunky Square ", cat: "Square shape, Full Rim", price: 3000, tag: "Statement",
    desc: "A bold, ultra-thick acetate frame with deep square lenses.",
    tint: "linear-gradient(135deg, rgba(185,144,90,0.85), rgba(100,70,30,0.2))",
    img: "images/img4.jpg",
    svg: `<rect x="24" y="30" width="72" height="52" rx="18"/><rect x="104" y="30" width="72" height="52" rx="18"/><path d="M96 52 Q100 46 104 52"/><path d="M24 40 L4 26"/><path d="M176 40 L196 26"/>`
  },
  {
    name: "The Classic Ray", cat: "Wayfarer", price: 3000, tag: "Everyday",
    desc: "The trapezoid silhouette that never dates. Matte black, gold rivets.",
    tint: "linear-gradient(135deg, rgba(90,90,95,0.85), rgba(30,30,35,0.2))",
    img: "images/img5.jpg",
    svg: `<path d="M22 42 L34 68 L88 68 L96 44 Z"/><path d="M104 44 L112 68 L166 68 L178 42 Z"/><path d="M96 46 Q100 40 104 46"/><path d="M22 42 L4 30"/><path d="M178 42 L196 30"/>`
  },
  {
    name: "Two-Tone-Transparent Cat-Eye", cat: "Upswept Square Cat-Eye", price: 3000, tag: "Refined",
    desc: "A thin, vibrant, painted enamel strip in contrasting colors that spans strictly across the top crest of the browline.",
    tint: "linear-gradient(135deg, rgba(120,110,90,0.85), rgba(60,50,40,0.2))",
    img: "images/img6.jpg",
    svg: `<path d="M26 40 L94 40 L94 66 Q94 78 76 78 L44 78 Q26 78 26 66 Z"/><path d="M106 40 L174 40 L174 66 Q174 78 156 78 L124 78 Q106 78 106 66 Z"/><path d="M94 44 Q100 38 106 44"/><path d="M26 40 L6 30"/><path d="M174 40 L194 30"/>`
  },
  {
    name: "Two-Tone-Transparent Cat-Eye", cat: "Upswept Square Cat-Eye", price: 3000, tag: "Refined",
    desc: "A thin, vibrant, painted enamel strip in contrasting colors that spans strictly across the top crest of the browlinw",
    tint: "linear-gradient(135deg, rgba(120,110,90,0.85), rgba(60,50,40,0.2))",
    img: "images/img7.jpg",
    svg: `<path d="M26 40 L94 40 L94 66 Q94 78 76 78 L44 78 Q26 78 26 66 Z"/><path d="M106 40 L174 40 L174 66 Q174 78 156 78 L124 78 Q106 78 106 66 Z"/><path d="M94 44 Q100 38 106 44"/><path d="M26 40 L6 30"/><path d="M174 40 L194 30"/>`
  },
  {
    name: "Oversized Chunky Square Blue-Light Glasses", cat: "Unisex Computer Eyewear", price: 3000, tag: "Refined",
    desc: "A geometric, thick-rimmed acetate frames featuring a distinct wide-leg design and clear lenses embedded with a blue-light filter coating.",
    tint: "linear-gradient(135deg, rgba(120,110,90,0.85), rgba(60,50,40,0.2))",
    img: "images/img8.jpg",
    svg: `<path d="M26 40 L94 40 L94 66 Q94 78 76 78 L44 78 Q26 78 26 66 Z"/><path d="M106 40 L174 40 L174 66 Q174 78 156 78 L124 78 Q106 78 106 66 Z"/><path d="M94 44 Q100 38 106 44"/><path d="M26 40 L6 30"/><path d="M174 40 L194 30"/>`
  },
  {
    name: "Tom ford Bronson (Model TF1044 / FT1044)", cat: "Aviator / Pilot Mask Silhouette", price: 3500, tag: "Refined",
    desc: "A high-quality glossy black acetate, featuring a thick statement-making frame and dramatic, vibrant red-tinted shield lenses that offer complete UV protection.",
    tint: "linear-gradient(135deg, rgba(120,110,90,0.85), rgba(60,50,40,0.2))",
    img: "images/img9.jpg",
    svg: `<path d="M26 40 L94 40 L94 66 Q94 78 76 78 L44 78 Q26 78 26 66 Z"/><path d="M106 40 L174 40 L174 66 Q174 78 156 78 L124 78 Q106 78 106 66 Z"/><path d="M94 44 Q100 38 106 44"/><path d="M26 40 L6 30"/><path d="M174 40 L194 30"/>`
  },
  {
    name: "Thick Frame Rectangle Sunglasses", cat: "Flat-Top Rectangle", price: 5000, tag: "Refined",
    desc: "A distinctive geometric rectangular silhouette with a flat-top brow line and a thick, glossy, black acetate or plastic frame.",
    tint: "linear-gradient(135deg, rgba(120,110,90,0.85), rgba(60,50,40,0.2))",
    img: "images/img10.jpg",
    svg: `<path d="M26 40 L94 40 L94 66 Q94 78 76 78 L44 78 Q26 78 26 66 Z"/><path d="M106 40 L174 40 L174 66 Q174 78 156 78 L124 78 Q106 78 106 66 Z"/><path d="M94 44 Q100 38 106 44"/><path d="M26 40 L6 30"/><path d="M174 40 L194 30"/>`
  },
  {
    name: "White Rectangular Sunglasses", cat: "Flat-Top Rectangle", price: 5000, tag: "Futuristic",
    desc: "Bold, thick-rimmed white polymer frame in an angular, low-profile rectangular shape.",
    tint: "linear-gradient(135deg, rgba(120,110,90,0.85), rgba(60,50,40,0.2))",
    img: "images/img11.jpg",
    svg: `<path d="M26 40 L94 40 L94 66 Q94 78 76 78 L44 78 Q26 78 26 66 Z"/><path d="M106 40 L174 40 L174 66 Q174 78 156 78 L124 78 Q106 78 106 66 Z"/><path d="M94 44 Q100 38 106 44"/><path d="M26 40 L6 30"/><path d="M174 40 L194 30"/>`
  },
  {
    name: "One-piece Y2K Star Sunglasses", cat: "Cyclops", price: 5000, tag: "Futuristic",
    desc: "A single, continuous rectangular monolens configured into a streamlined, form-fitting wrap design.",
    tint: "linear-gradient(135deg, rgba(120,110,90,0.85), rgba(60,50,40,0.2))",
    img: "images/img12.jpg",
    svg: `<path d="M26 40 L94 40 L94 66 Q94 78 76 78 L44 78 Q26 78 26 66 Z"/><path d="M106 40 L174 40 L174 66 Q174 78 156 78 L124 78 Q106 78 106 66 Z"/><path d="M94 44 Q100 38 106 44"/><path d="M26 40 L6 30"/><path d="M174 40 L194 30"/>`
  },
  {
    name: "Cyclops Visor Sunglasses", cat: "Cyclops", price: 5000, tag: "Futuristic",
    desc: "A flat-top, sharp rectangular silhouette fitted witha a single, dark grey integrated shield lens.",
    tint: "linear-gradient(135deg, rgba(120,110,90,0.85), rgba(60,50,40,0.2))",
    img: "images/img13.jpg",
    svg: `<path d="M26 40 L94 40 L94 66 Q94 78 76 78 L44 78 Q26 78 26 66 Z"/><path d="M106 40 L174 40 L174 66 Q174 78 156 78 L124 78 Q106 78 106 66 Z"/><path d="M94 44 Q100 38 106 44"/><path d="M26 40 L6 30"/><path d="M174 40 L194 30"/>`
  },
  {
    name: "Tom Ford 'Troy' shield Aviator SUnglasses (Model: FT0836)", cat: "Flat-Top Aviator", price: 3000, tag: "Classic",
    desc: "A bold, glossy black acetate full-rim frame with a distinctive teardrop profile.",
    tint: "linear-gradient(135deg, rgba(120,110,90,0.85), rgba(60,50,40,0.2))",
    img: "images/img14.jpg",
    svg: `<path d="M26 40 L94 40 L94 66 Q94 78 76 78 L44 78 Q26 78 26 66 Z"/><path d="M106 40 L174 40 L174 66 Q174 78 156 78 L124 78 Q106 78 106 66 Z"/><path d="M94 44 Q100 38 106 44"/><path d="M26 40 L6 30"/><path d="M174 40 L194 30"/>`
  },
  {
    name: "Oversized Flat-Top Aviator Sunglasses", cat: "Flat-Top Shield Aviator", price: 3500, tag: "Refined",
    desc: "A distinctive monolithic translucent brown frame.",
    tint: "linear-gradient(135deg, rgba(120,110,90,0.85), rgba(60,50,40,0.2))",
    img: "images/img15.jpg",
    svg: `<path d="M26 40 L94 40 L94 66 Q94 78 76 78 L44 78 Q26 78 26 66 Z"/><path d="M106 40 L174 40 L174 66 Q174 78 156 78 L124 78 Q106 78 106 66 Z"/><path d="M94 44 Q100 38 106 44"/><path d="M26 40 L6 30"/><path d="M174 40 L194 30"/>`
  },
  {
    name: "Oversized Yellow Tinted Aviator Sunglasses", cat: "Aviator/ Pilot", price: 3500, tag: "Refined",
    desc: "A unisex, 70s retro-inspired lifestyle  sunglasses featuring a bold, oversized black full-rim frame, accented by vibrant sunset yellow-tinted lenses and sleek metallic temples.",
    tint: "linear-gradient(135deg, rgba(120,110,90,0.85), rgba(60,50,40,0.2))",
    img: "images/img16.jpg",
    svg: `<path d="M26 40 L94 40 L94 66 Q94 78 76 78 L44 78 Q26 78 26 66 Z"/><path d="M106 40 L174 40 L174 66 Q174 78 156 78 L124 78 Q106 78 106 66 Z"/><path d="M94 44 Q100 38 106 44"/><path d="M26 40 L6 30"/><path d="M174 40 L194 30"/>`
  },
  {
    name: "Vintage Retro Oversized Aviator Sunglasses or Drop Aviator Sunglasses", cat: "Aviator / Pilot", price: 3500, tag: "Refined",
    desc: "A bold, thick, tortoiseshell acetate frame molded into a prominent, teardrop-shaped aviator silhouette.",
    tint: "linear-gradient(135deg, rgba(120,110,90,0.85), rgba(60,50,40,0.2))",
    img: "images/img17.jpg",
    svg: `<path d="M26 40 L94 40 L94 66 Q94 78 76 78 L44 78 Q26 78 26 66 Z"/><path d="M106 40 L174 40 L174 66 Q174 78 156 78 L124 78 Q106 78 106 66 Z"/><path d="M94 44 Q100 38 106 44"/><path d="M26 40 L6 30"/><path d="M174 40 L194 30"/>`
  },
  {
    name: "Luxury Oversized Square Cat-Eye Eyewear", cat: "Square Cat-Eye", price: 3000, tag: "Refined",
    desc: "A thick, transparent beige frame equipped with blue-light blocking lenses.",
    tint: "linear-gradient(135deg, rgba(120,110,90,0.85), rgba(60,50,40,0.2))",
    img: "images/img18.jpg",
    svg: `<path d="M26 40 L94 40 L94 66 Q94 78 76 78 L44 78 Q26 78 26 66 Z"/><path d="M106 40 L174 40 L174 66 Q174 78 156 78 L124 78 Q106 78 106 66 Z"/><path d="M94 44 Q100 38 106 44"/><path d="M26 40 L6 30"/><path d="M174 40 L194 30"/>`
  },
  {
    name: "Virgil-style Square Frames", cat: "Retro Square", price: 3000, tag: "Classic",
    desc: "A robust, full-rim acetate or high-grade polycarbonate build.",
    tint: "linear-gradient(135deg, rgba(120,110,90,0.85), rgba(60,50,40,0.2))",
    img: "images/img19.jpg",
    svg: `<path d="M26 40 L94 40 L94 66 Q94 78 76 78 L44 78 Q26 78 26 66 Z"/><path d="M106 40 L174 40 L174 66 Q174 78 156 78 L124 78 Q106 78 106 66 Z"/><path d="M94 44 Q100 38 106 44"/><path d="M26 40 L6 30"/><path d="M174 40 L194 30"/>`
  },
  {
    name: "Zoe Cherry / Calida TR90 series", cat: "Cat-Eye", price: 3000, tag: "Refined",
    desc: "A clear, non-prescription anti-blue-ray lenses.",
    tint: "linear-gradient(135deg, rgba(120,110,90,0.85), rgba(60,50,40,0.2))",
    img: "images/img20.jpg",
    svg: `<path d="M26 40 L94 40 L94 66 Q94 78 76 78 L44 78 Q26 78 26 66 Z"/><path d="M106 40 L174 40 L174 66 Q174 78 156 78 L124 78 Q106 78 106 66 Z"/><path d="M94 44 Q100 38 106 44"/><path d="M26 40 L6 30"/><path d="M174 40 L194 30"/>`
  },
  {
    name: "Prada PR 14ZS", cat: "Oversized Square", price: 3000, tag: "Refined",
    desc: "A bold, chunky acetate construction featuring an angular, faceted frame front.",
    tint: "linear-gradient(135deg, rgba(120,110,90,0.85), rgba(60,50,40,0.2))",
    img: "images/img21.jpg",
    svg: `<path d="M26 40 L94 40 L94 66 Q94 78 76 78 L44 78 Q26 78 26 66 Z"/><path d="M106 40 L174 40 L174 66 Q174 78 156 78 L124 78 Q106 78 106 66 Z"/><path d="M94 44 Q100 38 106 44"/><path d="M26 40 L6 30"/><path d="M174 40 L194 30"/>`
  },
  {
    name: "Chunky Oversized Square / Rectangle Frame Glasses", cat: "Unisex Fashion Eyewear", price: 3000, tag: "Futuristic",
    desc: "A thick, glossy black composite frame  with a distinct geometric structure.",
    tint: "linear-gradient(135deg, rgba(120,110,90,0.85), rgba(60,50,40,0.2))",
    img: "images/img22.jpg",
    svg: `<path d="M26 40 L94 40 L94 66 Q94 78 76 78 L44 78 Q26 78 26 66 Z"/><path d="M106 40 L174 40 L174 66 Q174 78 156 78 L124 78 Q106 78 106 66 Z"/><path d="M94 44 Q100 38 106 44"/><path d="M26 40 L6 30"/><path d="M174 40 L194 30"/>`
  },
  {
    name: "Oversized Shield Sports Sunglasses", cat: "Visor", price: 5000, tag: "Refined",
    desc: "A bold, futuristic wrap-around frame paired with a large, single-piece blue mirrored shield lens.",
    tint: "linear-gradient(135deg, rgba(120,110,90,0.85), rgba(60,50,40,0.2))",
    img: "images/img23.jpg",
    svg: `<path d="M26 40 L94 40 L94 66 Q94 78 76 78 L44 78 Q26 78 26 66 Z"/><path d="M106 40 L174 40 L174 66 Q174 78 156 78 L124 78 Q106 78 106 66 Z"/><path d="M94 44 Q100 38 106 44"/><path d="M26 40 L6 30"/><path d="M174 40 L194 30"/>`
  },
  {
    name: "Unisex Fashion Oversized Thick Frame Retro Glasses", cat: "Square shape, Full Rim", price: 3000, tag: "Refined",
    desc: "A bold, oversized black polycarbonate silhouette with heavily pronounced, thick statement borders and wide matching temples.",
    tint: "linear-gradient(135deg, rgba(120,110,90,0.85), rgba(60,50,40,0.2))",
    img: "images/img24.jpg",
    svg: `<path d="M26 40 L94 40 L94 66 Q94 78 76 78 L44 78 Q26 78 26 66 Z"/><path d="M106 40 L174 40 L174 66 Q174 78 156 78 L124 78 Q106 78 106 66 Z"/><path d="M94 44 Q100 38 106 44"/><path d="M26 40 L6 30"/><path d="M174 40 L194 30"/>`
  },
  {
    name: "Retro Double-Bridge Square Aviator Sunglasses or Oversized Flat Top Navigator Sunglasses", cat: "Square Aviator / Navigator", price: 3000, tag: "Refined",
    desc: "An oversized, geometric square silhouette constructed from a durable black composite frame.",
    tint: "linear-gradient(135deg, rgba(120,110,90,0.85), rgba(60,50,40,0.2))",
    img: "images/img25.jpg",
    svg: `<path d="M26 40 L94 40 L94 66 Q94 78 76 78 L44 78 Q26 78 26 66 Z"/><path d="M106 40 L174 40 L174 66 Q174 78 156 78 L124 78 Q106 78 106 66 Z"/><path d="M94 44 Q100 38 106 44"/><path d="M26 40 L6 30"/><path d="M174 40 L194 30"/>`
  },
  {
    name: "Retro Double-Beam Square Sunglasses", cat: "Oversized Flat-Top", price: 3000, tag: "Refined",
    desc: "A bold, flat-top double bridge design along the upper brow bar.",
    tint: "linear-gradient(135deg, rgba(120,110,90,0.85), rgba(60,50,40,0.2))",
    img: "images/img26.jpg",
    svg: `<path d="M26 40 L94 40 L94 66 Q94 78 76 78 L44 78 Q26 78 26 66 Z"/><path d="M106 40 L174 40 L174 66 Q174 78 156 78 L124 78 Q106 78 106 66 Z"/><path d="M94 44 Q100 38 106 44"/><path d="M26 40 L6 30"/><path d="M174 40 L194 30"/>`
  },
  {
    name: "Futuristic Cyberpunk Shield Visor Sunglasses", cat: "Rimless Shield", price: 5000, tag: "Futuristic",
    desc: "A solid, continuous dark-tinted polycarbonate lens with a clean flat top and geometric sharp angles.",
    tint: "linear-gradient(135deg, rgba(120,110,90,0.85), rgba(60,50,40,0.2))",
    img: "images/img28.jpg",
    svg: `<path d="M26 40 L94 40 L94 66 Q94 78 76 78 L44 78 Q26 78 26 66 Z"/><path d="M106 40 L174 40 L174 66 Q174 78 156 78 L124 78 Q106 78 106 66 Z"/><path d="M94 44 Q100 38 106 44"/><path d="M26 40 L6 30"/><path d="M174 40 L194 30"/>`
  },
  {
    name: "Cyberpunk Wraparound Sunglasses", cat: "Cyclops Visor", price: 5000, tag: "Refined",
    desc: "A distinctive space-age, robotic, or rave aesthetic.",
    tint: "linear-gradient(135deg, rgba(120,110,90,0.85), rgba(60,50,40,0.2))",
    img: "images/img29.jpg",
    svg: `<path d="M26 40 L94 40 L94 66 Q94 78 76 78 L44 78 Q26 78 26 66 Z"/><path d="M106 40 L174 40 L174 66 Q174 78 156 78 L124 78 Q106 78 106 66 Z"/><path d="M94 44 Q100 38 106 44"/><path d="M26 40 L6 30"/><path d="M174 40 L194 30"/>`
  }
  
];

function formatPrice(n){ return CURRENCY + n.toLocaleString('en-NG'); }

/* ---------------- FILTERS ---------------- */
const filtersEl = document.getElementById('filters');
const categories = ['All', ...new Set(PRODUCTS.map(p=>p.cat))];
filtersEl.innerHTML = categories.map((c,i)=>
  `<button class="filter-btn${i===0?' active':''}" data-filter="${c}">${c}</button>`
).join('');

let activeFilter = 'All';

/* ---------------- RENDER GRID ---------------- */
const grid = document.getElementById('shopGrid');
const revealIO = new IntersectionObserver((entries)=>{
  entries.forEach(en=>{ if(en.isIntersecting){ en.target.classList.add('in-view'); revealIO.unobserve(en.target); } });
}, {threshold:0.12});

function renderGrid(){
  const list = activeFilter === 'All' ? PRODUCTS : PRODUCTS.filter(p=>p.cat === activeFilter);

  if(!list.length){
    grid.innerHTML = `<div class="empty-note">No frames in this category right now — check back soon.</div>`;
    return;
  }

  grid.innerHTML = list.map(p=>{
    const originalIndex = PRODUCTS.indexOf(p);
    const hasPhoto = !!p.img;
    const media = hasPhoto
      ? `<img src="${p.img}" alt="${p.name} — ${p.cat} sunglasses" loading="lazy">`
      : `<svg viewBox="0 0 200 90" fill="none" xmlns="http://www.w3.org/2000/svg" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">${p.svg}</svg>`;
    return `
    <article class="card" data-index="${originalIndex}">
      <div class="card-media${hasPhoto ? '' : ' icon-fallback'}">
        <span class="card-tag">${p.tag}</span>
        <div class="lens-tint" style="background:${p.tint}"></div>
        ${media}
      </div>
      <div class="card-body">
        <div class="card-cat">${p.cat}</div>
        <h3 class="card-name">${p.name}</h3>
        <p class="card-desc">${p.desc}</p>
        <div class="card-footer">
          <span class="card-price">${formatPrice(p.price)}</span>
          <button class="reserve-btn" data-index="${originalIndex}">Reserve</button>
        </div>
      </div>
    </article>`;
  }).join('');

  grid.querySelectorAll('.card').forEach(c => revealIO.observe(c));
}
renderGrid();

filtersEl.addEventListener('click', (e)=>{
  const btn = e.target.closest('.filter-btn');
  if(!btn) return;
  filtersEl.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  activeFilter = btn.dataset.filter;
  renderGrid();
});

/* ---------------- MODAL ---------------- */
const overlay = document.getElementById('modalOverlay');
const modalName = document.getElementById('modalProductName');
const modalPrice = document.getElementById('modalProductPrice');
const waLink = document.getElementById('waLink');
const fMessage = document.getElementById('fMessage');
const fSubject = document.getElementById('fSubject');
const formStatus = document.getElementById('formStatus');

function openModal(index){
  const p = PRODUCTS[index];
  modalName.textContent = p.name;
  modalPrice.textContent = `${p.cat} · ${formatPrice(p.price)}`;

  const waText = encodeURIComponent(`Hi Elysian Shades! I'd like to reserve the ${p.name} (${p.cat}) listed at ${formatPrice(p.price)}.`);
  waLink.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${waText}`;

  fMessage.value = `I'd like to reserve the ${p.name} (${p.cat}) listed at ${formatPrice(p.price)}.`;
  fSubject.value = `Reservation request — ${p.name}`;
  formStatus.textContent = '';
  formStatus.className = 'form-status';

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal(){
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

grid.addEventListener('click', (e)=>{
  const btn = e.target.closest('.reserve-btn');
  if(btn) openModal(Number(btn.dataset.index));
});
document.getElementById('modalClose').addEventListener('click', closeModal);
overlay.addEventListener('click', (e)=>{ if(e.target === overlay) closeModal(); });
document.addEventListener('keydown', (e)=>{ if(e.key === 'Escape') closeModal(); });

document.querySelectorAll('.modal-tab').forEach(tab=>{
  tab.addEventListener('click', ()=>{
    document.querySelectorAll('.modal-tab').forEach(t=>t.classList.remove('active'));
    document.querySelectorAll('.tab-panel').forEach(p=>p.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById('tab-' + tab.dataset.tab).classList.add('active');
  });
});

/* ---------------- WEB3FORMS SUBMIT ---------------- */
const emailForm = document.getElementById('emailForm');
const submitBtn = document.getElementById('submitBtn');

emailForm.addEventListener('submit', async function(e){
  e.preventDefault();
  submitBtn.disabled = true;
  submitBtn.textContent = 'Sending...';
  formStatus.textContent = '';
  formStatus.className = 'form-status';

  const formData = new FormData(emailForm);
  const accessKey = formData.get('access_key');

  if(!accessKey || accessKey === 'YOUR_WEB3FORMS_ACCESS_KEY_HERE '){
    formStatus.textContent = "Email booking isn't set up yet — the site owner needs to add a Web3Forms access key.";
    formStatus.className = 'form-status err';
    submitBtn.disabled = false;
    submitBtn.textContent = 'Send Reservation';
    return;
  }

  try{
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: formData
    });
    const result = await res.json();
    if(result.success){
      formStatus.textContent = "Reservation sent — we'll confirm by phone or email shortly.";
      formStatus.className = 'form-status ok';
      emailForm.reset();
    } else {
      formStatus.textContent = 'Something went wrong. Please try WhatsApp instead.';
      formStatus.className = 'form-status err';
    }
  } catch(err){
    formStatus.textContent = 'Network error. Please try WhatsApp instead.';
    formStatus.className = 'form-status err';
  }
  submitBtn.disabled = false;
  submitBtn.textContent = 'Send Reservation';
});
