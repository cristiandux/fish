// ==========================================================
// Peixateria Bastida — interactions
// ==========================================================

// ---------- PRODUCTES (peix del dia) ----------
const FISH = [
  {n:"Dorada Salvatge", it:"bream", l:"Sparus aurata", p:"28,00", u:"/kg", origin:"Mercat Central · Parada 12", meta:["Sencera","Escatada","Tallada al gust"], bg:"#d8272b", pattern:"scales"},
  {n:"Tonyina Vermella", it:"tuna", l:"Thunnus thynnus", p:"42,00", u:"/kg", origin:"Llotja L'Ametlla de Mar", meta:["Lloma","Per sashimi","Sense espines"], bg:"#1a1210", pattern:"scales"},
  {n:"Moll de Roca", it:"mullet", l:"Mullus surmuletus", p:"34,00", u:"/kg", origin:"Costa Brava · Llotja", meta:["Sencer","Per fregir","Apte BLW"], bg:"#d8272b", pattern:"dots"},
  {n:"Pop Roquer", it:"octopus", l:"Octopus vulgaris", p:"22,50", u:"/kg", origin:"Costa del Maresme", meta:["Fresc","Ja colpejat","A la brasa"], bg:"#e9b4a8", pattern:"tent"},
  {n:"Escamarlans Vius", it:"langoustine", l:"Nephrops norvegicus", p:"58,00", u:"/kg", origin:"Palam\u00f3s · Llotja", meta:["Vius","Sencers","Talla gran"], bg:"#f3d9d2", pattern:"dots"},
  {n:"Sardines Fresques", it:"sardine", l:"Sardina pilchardus", p:"8,50", u:"/kg", origin:"Mercat Central · Parada 08", meta:["Senceres","Netes","Per a brasa"], bg:"#d8272b", pattern:"waves"},
  {n:"Llen\u00e7a BLW", it:"turbot", l:"Phycis blennoides", p:"24,00", u:"/kg", origin:"Preparat casa Bastida", meta:["Sense espines","Sense pell","Bastonets nens 6m+"], bg:"#1a1210", pattern:"scales"},
  {n:"Ostres Gallegues", it:"oysters", l:"Ostrea edulis", p:"3,20", u:"/u.", origin:"Ria d'Arousa", meta:["N.3","A m\u00e0","Obertes al moment"], bg:"#e9b4a8", pattern:"waves"}
];

// generate an SVG illustration for each fish
function fishSVG(f){
  const p = {
    scales: `<pattern id="p-${f.it}" x="0" y="0" width="22" height="22" patternUnits="userSpaceOnUse"><path d="M0 12 Q6 0 12 12 T24 12" stroke="#f4ece2" fill="none" stroke-width="0.6" opacity="0.55"/></pattern>`,
    dots: `<pattern id="p-${f.it}" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="1.2" fill="#f4ece2" opacity="0.45"/></pattern>`,
    tent: `<pattern id="p-${f.it}" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="4" stroke="#f4ece2" fill="none" stroke-width="0.5" opacity="0.45"/><circle cx="10" cy="10" r="1.5" fill="#f4ece2" opacity="0.45"/></pattern>`,
    waves: `<pattern id="p-${f.it}" x="0" y="0" width="30" height="14" patternUnits="userSpaceOnUse"><path d="M0 7 Q7.5 0 15 7 T30 7" stroke="#f4ece2" fill="none" stroke-width="0.6" opacity="0.5"/></pattern>`
  };
  // different silhouettes per species
  const shapes = {
    bream: `<path d="M70 200 Q150 70 330 100 Q470 130 520 195 Q470 260 330 290 Q150 320 70 200 Z" fill="url(#p-${f.it})"/><path d="M520 195 L580 130 L560 195 L580 260 L520 195 Z" fill="#f4ece2"/><circle cx="150" cy="185" r="9" fill="#f4ece2"/><circle cx="152" cy="186" r="4" fill="#1a1210"/>`,
    tuna: `<path d="M50 200 Q150 90 360 110 Q500 130 540 200 Q500 270 360 290 Q150 310 50 200 Z" fill="url(#p-${f.it})"/><path d="M540 200 L600 140 L585 200 L600 260 L540 200 Z" fill="#f4ece2"/><path d="M300 120 L320 90 L350 115 Z" fill="#f4ece2" opacity="0.7"/><path d="M300 280 L320 310 L350 285 Z" fill="#f4ece2" opacity="0.7"/><circle cx="130" cy="195" r="9" fill="#f4ece2"/><circle cx="132" cy="196" r="4" fill="#1a1210"/>`,
    mullet: `<path d="M80 200 Q160 110 320 120 Q460 140 510 195 Q460 255 320 275 Q160 285 80 200 Z" fill="url(#p-${f.it})"/><path d="M510 195 L570 150 L560 195 L570 245 L510 195 Z" fill="#f4ece2"/><circle cx="155" cy="190" r="8" fill="#f4ece2"/><circle cx="157" cy="191" r="3.5" fill="#1a1210"/><path d="M95 180 L110 170 M95 210 L110 220" stroke="#f4ece2" stroke-width="2"/>`,
    octopus: `<circle cx="300" cy="150" r="90" fill="url(#p-${f.it})"/><g fill="url(#p-${f.it})"><path d="M230 200 Q200 280 240 340 Q260 280 260 220 Z"/><path d="M280 210 Q260 290 290 360 Q310 290 300 225 Z"/><path d="M320 210 Q340 290 310 360 Q290 290 300 225 Z"/><path d="M370 200 Q400 280 360 340 Q340 280 340 220 Z"/></g><circle cx="280" cy="140" r="8" fill="#f4ece2"/><circle cx="320" cy="140" r="8" fill="#f4ece2"/><circle cx="281" cy="141" r="3" fill="#1a1210"/><circle cx="321" cy="141" r="3" fill="#1a1210"/>`,
    langoustine: `<path d="M120 200 Q200 170 320 180 Q400 190 440 200 Q400 210 320 220 Q200 230 120 200 Z" fill="url(#p-${f.it})"/><path d="M440 200 Q470 190 490 200 Q470 210 440 200 Z" fill="url(#p-${f.it})"/><g stroke="#f4ece2" stroke-width="2" fill="none" opacity="0.6"><path d="M130 200 Q100 170 90 150"/><path d="M140 205 Q110 230 100 260"/><path d="M480 200 Q520 170 540 140 M540 140 L520 130 M540 140 L550 120"/><path d="M480 200 Q520 230 540 260 M540 260 L520 270 M540 260 L550 280"/></g><path d="M440 195 L470 180 L465 195 Z" fill="#f4ece2"/>`,
    sardine: `<g fill="url(#p-${f.it})"><path d="M60 170 Q140 140 260 150 Q340 160 370 175 Q340 190 260 200 Q140 210 60 170 Z"/><path d="M370 175 L410 155 L405 175 L410 195 L370 175 Z"/></g><g fill="url(#p-${f.it})"><path d="M120 240 Q200 210 320 220 Q400 230 430 245 Q400 260 320 270 Q200 280 120 240 Z"/><path d="M430 245 L470 225 L465 245 L470 265 L430 245 Z"/></g><circle cx="100" cy="168" r="6" fill="#f4ece2"/><circle cx="160" cy="238" r="6" fill="#f4ece2"/>`,
    turbot: `<ellipse cx="300" cy="200" rx="200" ry="140" fill="url(#p-${f.it})"/><circle cx="250" cy="160" r="8" fill="#f4ece2"/><circle cx="290" cy="155" r="8" fill="#f4ece2"/><circle cx="251" cy="161" r="3" fill="#1a1210"/><circle cx="291" cy="156" r="3" fill="#1a1210"/><path d="M240 230 Q280 250 320 230" stroke="#f4ece2" stroke-width="2" fill="none"/>`,
    oysters: `<g><ellipse cx="200" cy="220" rx="120" ry="70" fill="url(#p-${f.it})"/><ellipse cx="200" cy="210" rx="100" ry="50" fill="#f4ece2" opacity="0.3"/><ellipse cx="400" cy="180" rx="110" ry="65" fill="url(#p-${f.it})"/><ellipse cx="400" cy="170" rx="90" ry="45" fill="#f4ece2" opacity="0.3"/></g>`
  };
  const shape = shapes[f.it] || shapes.bream;
  return `<svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg"><defs>${p[f.pattern]}</defs><rect width="600" height="400" fill="${f.bg}"/>${shape}</svg>`;
}

const rail = document.getElementById('catchRail');
FISH.forEach((f, i) => {
  const card = document.createElement('article');
  card.className = 'fish-card';
  card.innerHTML = `
    <div class="img">
      <span class="tag"><span class="pulse"></span>Triat avui · 05:${(12+i*3).toString().padStart(2,'0')}</span>
      <span class="price-badge">€${f.p} ${f.u}</span>
      ${fishSVG(f)}
    </div>
    <div class="body">
      <div class="latin">${f.l}</div>
      <h3 class="name">${f.n.split(' ').map((w,idx)=>idx===1?`<span class="it">${w}</span>`:w).join(' ')}</h3>
      <div class="origin">${f.origin}</div>
      <div class="meta">${f.meta.map(m=>`<span>${m}</span>`).join('')}</div>
      <div class="add">
        <div class="mono" style="font-size:11px;opacity:0.6">~ ${Math.floor(Math.random()*8)+2} disponibles</div>
        <button class="add-btn" onclick='addToCart(${JSON.stringify({n:f.n,p:f.p,u:f.u}).replace(/"/g,"&quot;")})'>Afegir <span class="plus">+</span></button>
      </div>
    </div>`;
  rail.appendChild(card);
});

function scrollRail(dir){
  const w = rail.querySelector('.fish-card').offsetWidth + 24;
  rail.scrollBy({left: dir * w, behavior:'smooth'});
}
rail.addEventListener('scroll', () => {
  const max = rail.scrollWidth - rail.clientWidth;
  const pct = (rail.scrollLeft / max) * 100;
  document.getElementById('railBar').style.width = pct + '%';
  const idx = Math.round(rail.scrollLeft / (rail.querySelector('.fish-card').offsetWidth + 24)) + 1;
  document.getElementById('railCount').textContent = String(idx).padStart(2,'0') + ' / ' + String(FISH.length).padStart(2,'0');
});

// ---------- PROCESS SLIDES ----------
const STEPS = [
  {n:"01", t:"Anem al <span class='it'>mercat</span> cada mat\u00ed", step:"Pas 01 · Mercat", d:"Som a la llotja a les 5h, abans que obri al p\u00fablic. Coneixem els majoristes de sempre i triem el peix pe\u00e7a a pe\u00e7a, mirant l'ull, les ganyes, la pell. Nom\u00e9s el millor entra a la botiga.", meta:[["Hora","05:00h"],["Criteri","Ull, ganya, pell"],["Ra\u00e7\u00f3","Peix de proximitat"]], col:"#d8272b"},
  {n:"02", t:"Tu <span class='it'>tries</span>, nosaltres preparem", step:"Pas 02 · La teva comanda", d:"Demanes pel web o per WhatsApp. Ens dius com ho vols: sencer, en roda, a filets, sense espines, sense pell, en bastonets BLW. Ho preparem al moment, com si et mir\u00e9ssim als ulls al mostrador.", meta:[["Com demanes","Web \u00b7 WhatsApp"],["Talls","Sencer \u00b7 filet \u00b7 roda"],["Nens","Opci\u00f3 BLW inclosa"]], col:"#1a1210"},
  {n:"03", t:"Et truquem i <span class='it'>confirmem</span>", step:"Pas 03 · Atenci\u00f3 personal", d:"Si hi ha algun dubte \u2014 un peix millor, una quantitat estranya, una al\u00b7l\u00e8rgia \u2014 t'escrivim. Res de robots. Parla amb la Marta, la Roseta o amb en Jordi. De tota la vida.", meta:[["Atenci\u00f3","Persona a persona"],["Canal","WhatsApp \u00b7 tel\u00e8fon"],["Ass. BLW","Guia per als nens"]], col:"#d8272b"},
  {n:"04", t:"Ho portem <span class='it'>a casa</span>, el mateix dia", step:"Pas 04 · A domicili", d:"Enviament en 2h per Barcelona ciutat. Sempre amb gel, sempre fred, sempre fresc. Franja horari que t\u00fa tries \u2014 mat\u00ed, migdia o tarda. Caixes retornables.", meta:[["Zona","Barcelona ciutat"],["Franges","10\u201313h \u00b7 13\u201316h \u00b7 17\u201320h"],["Enviament","Gratis a partir de 45\u20ac"]], col:"#e9b4a8"}
];
const procRail = document.getElementById('procRail');
const procDots = document.getElementById('procDots');
STEPS.forEach((s, i) => {
  const slide = document.createElement('div');
  slide.className = 'process-slide';
  slide.innerHTML = `
    <div class="visual" style="background:${s.col};color:${s.col==='#d8272b'?'#f4ece2':'#f4ece2'}">
      <div class="big-num" style="color:${s.col==='#d8272b'?'#f7cfc5':s.col==='#e9b4a8'?'#f0c7bd':'#3a0d0f'}">${s.n}</div>
      <svg viewBox="0 0 600 450" style="position:absolute;inset:0;width:100%;height:100%">
        <defs>
          <pattern id="pv${i}" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
            <path d="M0 15 Q7.5 0 15 15 T30 15" stroke="#f4ece2" fill="none" stroke-width="0.6" opacity="${s.col==='#f3d9d2'?0.6:0.35}"/>
          </pattern>
        </defs>
        <rect width="600" height="450" fill="url(#pv${i})"/>
        ${i===0?'<path d="M100 350 Q200 250 300 320 Q400 390 500 280" stroke="#f4ece2" stroke-width="3" fill="none" opacity="0.7"/><circle cx="500" cy="280" r="20" fill="#d8272b"/>':''}
        ${i===1?'<g fill="#f4ece2" opacity="0.9"><rect x="150" y="280" width="300" height="20"/><rect x="200" y="300" width="200" height="80"/><circle cx="300" cy="260" r="15"/><path d="M250 280 L350 280 L320 220 L280 220 Z"/></g>':''}
        ${i===2?'<g stroke="#f4ece2" stroke-width="2" fill="none" opacity="0.9"><circle cx="300" cy="225" r="100"/><line x1="200" y1="225" x2="400" y2="225"/><line x1="300" y1="125" x2="300" y2="325"/></g>':''}
        ${i===3?'<g fill="#f4ece2" opacity="0.85"><rect x="200" y="180" width="200" height="150" rx="8"/><rect x="220" y="200" width="160" height="4"/><rect x="220" y="215" width="100" height="4"/><circle cx="300" cy="260" r="25" fill="#d8272b"/></g>':''}
      </svg>
    </div>
    <div class="content">
      <div class="step"><span class="step-num">${s.n}</span> ${s.step}</div>
      <h3>${s.t}</h3>
      <p>${s.d}</p>
      <div class="meta-list">
        ${s.meta.map(m=>`<div><span>${m[0]}</span><span class="v">${m[1]}</span></div>`).join('')}
      </div>
    </div>`;
  procRail.appendChild(slide);
  const dot = document.createElement('button');
  dot.onclick = () => procRail.scrollTo({left: i * window.innerWidth, behavior:'smooth'});
  if(i===0) dot.classList.add('active');
  procDots.appendChild(dot);
});
function scrollProc(dir){ procRail.scrollBy({left: dir * window.innerWidth, behavior:'smooth'}); }
procRail.addEventListener('scroll', () => {
  const i = Math.round(procRail.scrollLeft / window.innerWidth);
  [...procDots.children].forEach((d,idx)=>d.classList.toggle('active', idx===i));
});

// ---------- SCROLL REVEAL LETTERS & COPY ----------
// hero: animate on load
window.addEventListener('load', () => {
  const t = document.getElementById('heroTitle');
  [...t.querySelectorAll('.char')].forEach((c,i)=>{ c.style.transitionDelay = (i*40)+'ms'; });
  requestAnimationFrame(()=>t.classList.add('in'));
});

// reveal text: build words
const rt = document.getElementById('revealText');
const txt = rt.dataset.text;
rt.innerHTML = txt.split(' ').map((w,i) => {
  const cls = (w.includes('boats')||w.includes('shelf')) ? 'coral' : (w.includes('—')||w.includes('half')) ? 'it' : '';
  return `<span class="word ${cls}">${w}</span>`;
}).join(' ');

// IntersectionObservers
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if(e.isIntersecting) e.target.classList.add('in');
  });
}, {threshold:0.2});
document.querySelectorAll('.fade-up').forEach(el => io.observe(el));

// Scroll-driven word lighting
window.addEventListener('scroll', () => {
  const words = rt.querySelectorAll('.word');
  const rect = rt.getBoundingClientRect();
  const progress = 1 - Math.max(0, Math.min(1, (rect.top - 100) / (window.innerHeight * 0.5)));
  const lit = Math.floor(progress * words.length);
  words.forEach((w,i)=>w.classList.toggle('lit', i < lit));
});

// Letters section - reveal on scroll
const lettersIo = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if(e.isIntersecting){
      const chars = e.target.querySelectorAll('.char');
      chars.forEach((c,i)=>{
        c.style.transitionDelay = (i*80)+'ms';
      });
      e.target.classList.add('in');
    }
  });
}, {threshold:0.4});
document.querySelectorAll('.letters .line').forEach(l => lettersIo.observe(l));

// ---------- CISTELL ----------
const cart = [
  {n:"Dorada Salvatge", p:"28,00", u:"/kg", q:1.2},
  {n:"Moll de Roca", p:"34,00", u:"/kg", q:0.8},
  {n:"Ostres Gallegues", p:"3,20", u:"/u.", q:6}
];
function renderCart(){
  const body = document.getElementById('cartBody');
  if(cart.length === 0){
    body.innerHTML = '<div class="cart-empty">El teu cistell és buit — tria el peix del dia.</div>';
  } else {
    body.innerHTML = cart.map((c,i)=>`
      <div class="cart-item">
        <div class="thumb" style="background:${['#d8272b','#d8272b','#e9b4a8','#1a1210','#f3d9d2'][i%5]}"></div>
        <div class="info">
          <div class="n">${c.n}</div>
          <div class="p">€${c.p} ${c.u} · ${c.q}${c.u==='/kg'?'kg':' u.'}</div>
          <div class="qty">
            <button onclick="changeQty(${i},-1)">−</button>
            <span>${c.q}</span>
            <button onclick="changeQty(${i},1)">+</button>
          </div>
        </div>
        <button class="rm" onclick="removeItem(${i})">Treure</button>
      </div>
    `).join('');
  }
  const total = cart.reduce((s,c)=>s + parseFloat(c.p.replace(',','.'))*c.q, 0);
  document.getElementById('cartTotal').textContent = '€' + total.toFixed(2).replace('.',',');
  document.getElementById('cartCount').textContent = cart.reduce((s,c)=>s+c.q, 0).toFixed(0);
}
function changeQty(i, d){
  cart[i].q = Math.max(cart[i].u==='/kg' ? 0.2 : 1, cart[i].q + (cart[i].u==='/kg'?0.2:1)*d);
  cart[i].q = Math.round(cart[i].q * 10) / 10;
  renderCart();
}
function removeItem(i){ cart.splice(i,1); renderCart(); }
function addToCart(f){
  const existing = cart.find(c => c.n === f.n);
  if(existing) existing.q += f.u==='/kg' ? 0.2 : 1;
  else cart.push({...f, q: f.u==='/kg' ? 0.4 : 1});
  renderCart();
  openCart();
}
window.addToCart = addToCart;
function openCart(){
  document.getElementById('cartDrawer').classList.add('open');
  document.getElementById('cartOverlay').classList.add('open');
}
function closeCart(){
  document.getElementById('cartDrawer').classList.remove('open');
  document.getElementById('cartOverlay').classList.remove('open');
}
renderCart();
