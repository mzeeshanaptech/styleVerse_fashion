

// ===== DATA =====
const collections = {
  'kids-girl': [ 
    {name:'Floral Frock Delight',stylist:'Sara Noor',price:'Rs 2,499',oldPrice:'Rs 3,200',img:'Kid,s-colletion-girl/kids1.webp',badge:'New',sizes:['3-4Y','5-6Y','7-8Y','9-10Y'],fabric:'Cotton Lawn',desc:'Adorable floral frock perfect for summer days and family gatherings.'},
    {name:'Princess Dress Pink',stylist:'Sara Noor',price:'Rs 3,199',oldPrice:'Rs 4,000',img:'Kid,s-colletion-girl/kids2.webp',badge:'Sale',sizes:['2-3Y','4-5Y','6-7Y'],fabric:'Silk Blend',desc:'Every little girl deserves to feel like a princess in this gorgeous dress.'},
    {name:'Casual Playsuit',stylist:'Sara Noor',price:'Rs 1,899',img:'Kid,s-colletion-girl/kids3.webp',badge:'',sizes:['3-4Y','5-6Y','7-8Y'],fabric:'Jersey Cotton',desc:'Comfortable and cute for everyday playtime adventures.'},
    {name:'Eid Special Lehenga',stylist:'Ayesha Malik',price:'Rs 5,999',oldPrice:'Rs 7,500',img:'Kid,s-colletion-girl/kids4.webp',badge:'New',sizes:['4-5Y','6-7Y','8-9Y'],fabric:'Net & Silk',desc:'Gorgeous lehenga set for Eid and special occasions.'},
    {name:'Denim Dungaree Set',stylist:'Sara Noor',price:'Rs 2,299',img:'Kid,s-colletion-girl/kids5.webp',badge:'',sizes:['3-4Y','5-6Y','7-8Y','9-10Y'],fabric:'Denim',desc:'Trendy dungaree set for the modern little fashionista.'},
    {name:'Butterfly Kurta Set',stylist:'Zara Khan',price:'Rs 1,699',img:'Kid,s-colletion-girl/kids6.webp',badge:'New',sizes:['2-3Y','4-5Y','6-7Y','8-9Y'],fabric:'Cambric Cotton',desc:'Light and breezy kurta with butterfly prints for everyday wear.'}
  ],
  'kids-boy': [
    {name:'Smart Casual Shirt',stylist:'Omar Sheikh',price:'Rs 1,599',img:'Kid,s-boy-collection/kdis1.webp',badge:'New',sizes:['3-4Y','5-6Y','7-8Y','9-10Y'],fabric:'Cotton',desc:'Crisp and smart casual shirt for boys on the go.'},
    {name:'Kurta Shalwar Boys',stylist:'Omar Sheikh',price:'Rs 2,499',oldPrice:'Rs 3,000',img:'Kid,s-boy-collection/kids2.webp',badge:'Sale',sizes:['4-5Y','6-7Y','8-9Y'],fabric:'Khaddar',desc:'Traditional kurta shalwar, perfect for Eid and family events.'},
    {name:'Denim Jogger Set',stylist:'Omar Sheikh',price:'Rs 2,199',img:'Kid,s-boy-collection/kids3.webp',badge:'',sizes:['3-4Y','5-6Y','7-8Y','9-10Y'],fabric:'Stretch Denim',desc:'Stylish and comfortable denim jogger set for active boys.'},
    {name:'Sherwani Boys Eid',stylist:'Ayesha Malik',price:'Rs 4,999',oldPrice:'Rs 6,000',img:'Kid,s-boy-collection/kids4.webp',badge:'New',sizes:['5-6Y','7-8Y','9-10Y'],fabric:'Banarasi Silk',desc:'Mini sherwani for little grooms and Eid festivities.'},
    {name:'Polo T-Shirt Pack',stylist:'Omar Sheikh',price:'Rs 1,299',img:'Kid,s-boy-collection/kids5.webp',badge:'',sizes:['3-4Y','5-6Y','7-8Y','9-10Y'],fabric:'Pique Cotton',desc:'Pack of 3 polo shirts in vibrant colors for everyday wear.'},
    {name:'Cargo Shorts & Tee',stylist:'Omar Sheikh',price:'Rs 1,799',img:'Kid,s-boy-collection/kids6.webp',badge:'New',sizes:['4-5Y','6-7Y','8-9Y','10-11Y'],fabric:'Canvas & Cotton',desc:'Adventure-ready cargo shorts paired with a cool graphic tee.'}
  ],
  'summer-women': [ 
    {name:'Floral Frock Delight',stylist:'Sara Noor',price:'Rs 2,499',oldPrice:'Rs 3,200',img:'summer-collection-women/summer1.webp',badge:'New',sizes:['3-4Y','5-6Y','7-8Y','9-10Y'],fabric:'Cotton Lawn',desc:'Adorable floral frock perfect for summer days and family gatherings.'},
    {name:'Princess Dress Pink',stylist:'Sara Noor',price:'Rs 3,199',oldPrice:'Rs 4,000',img:'summer-collection-women/summer2.webp',badge:'Sale',sizes:['2-3Y','4-5Y','6-7Y'],fabric:'Silk Blend',desc:'Every little girl deserves to feel like a princess in this gorgeous dress.'},
    {name:'Casual Playsuit',stylist:'Sara Noor',price:'Rs 1,899',img:'summer-collection-women/summe3.webp',badge:'',sizes:['3-4Y','5-6Y','7-8Y'],fabric:'Jersey Cotton',desc:'Comfortable and cute for everyday playtime adventures.'},
    {name:'Eid Special Lehenga',stylist:'Ayesha Malik',price:'Rs 5,999',oldPrice:'Rs 7,500',img:'summer-collection-women/summer4.webp',badge:'New',sizes:['4-5Y','6-7Y','8-9Y'],fabric:'Net & Silk',desc:'Gorgeous lehenga set for Eid and special occasions.'},
    {name:'Denim Dungaree Set',stylist:'Sara Noor',price:'Rs 2,299',img:'summer-collection-women/summer5.webp',badge:'',sizes:['3-4Y','5-6Y','7-8Y','9-10Y'],fabric:'Denim',desc:'Trendy dungaree set for the modern little fashionista.'},
    {name:'Butterfly Kurta Set',stylist:'Zara Khan',price:'Rs 1,699',img:'summer-collection-women/summer6.webp',badge:'New',sizes:['2-3Y','4-5Y','6-7Y','8-9Y'],fabric:'Cambric Cotton',desc:'Light and breezy kurta with butterfly prints for everyday wear.'}
  ],'summer-men': [ 
    {name:'Floral Frock Delight',stylist:'Sara Noor',price:'Rs 2,499',oldPrice:'Rs 3,200',img:'summer-men-collection/summer1.webp',badge:'New',sizes:['3-4Y','5-6Y','7-8Y','9-10Y'],fabric:'Cotton Lawn',desc:'Adorable floral frock perfect for summer days and family gatherings.'},
    {name:'Princess Dress Pink',stylist:'Sara Noor',price:'Rs 3,199',oldPrice:'Rs 4,000',img:'summer-men-collection/summer2.webp',badge:'Sale',sizes:['2-3Y','4-5Y','6-7Y'],fabric:'Silk Blend',desc:'Every little girl deserves to feel like a princess in this gorgeous dress.'},
    {name:'Casual Playsuit',stylist:'Sara Noor',price:'Rs 1,899',img:'summer-men-collection/summer3.webp',badge:'',sizes:['3-4Y','5-6Y','7-8Y'],fabric:'Jersey Cotton',desc:'Comfortable and cute for everyday playtime adventures.'},
    {name:'Eid Special Lehenga',stylist:'Ayesha Malik',price:'Rs 5,999',oldPrice:'Rs 7,500',img:'summer-men-collection/summer4.webp',badge:'New',sizes:['4-5Y','6-7Y','8-9Y'],fabric:'Net & Silk',desc:'Gorgeous lehenga set for Eid and special occasions.'},
    {name:'Denim Dungaree Set',stylist:'Sara Noor',price:'Rs 2,299',img:'summer-men-collection/summer5.webp',badge:'',sizes:['3-4Y','5-6Y','7-8Y','9-10Y'],fabric:'Denim',desc:'Trendy dungaree set for the modern little fashionista.'},
    {name:'Butterfly Kurta Set',stylist:'Zara Khan',price:'Rs 1,699',img:'summer-men-collection/summer6.webp',badge:'New',sizes:['2-3Y','4-5Y','6-7Y','8-9Y'],fabric:'Cambric Cotton',desc:'Light and breezy kurta with butterfly prints for everyday wear.'}
  ],
 
  'wedding-bride': [
    {name:'Red Bridal Lehenga',stylist:'Ayesha Malik',price:'Rs 85,000',img:'wedding-bride-collection/wedding1.webp',badge:'New',sizes:['XS','S','M','L','XL'],fabric:'Banarasi Silk',desc:'Opulent red bridal lehenga adorned with intricate zari work.'},
    {name:'Pink Sharara Bridal',stylist:'Ayesha Malik',price:'Rs 65,000',oldPrice:'Rs 80,000',img:'wedding-bride-collection/wedding2.jpeg',badge:'Sale',sizes:['S','M','L','XL'],fabric:'Net & Silk',desc:'Dreamy pink sharara set with heavy embellishments.'},
    {name:'Ivory Anarkali Gown',stylist:'Ayesha Malik',price:'Rs 55,000',img:'wedding-bride-collection/wedding3.jpeg',badge:'New',sizes:['XS','S','M','L'],fabric:'Organza',desc:'Elegant ivory anarkali gown for the modern bride.'},
    {name:'Maroon Gharara Set',stylist:'Ayesha Malik',price:'Rs 72,000',img:'wedding-bride-collection/wedding4.jpeg',badge:'',sizes:['S','M','L','XL'],fabric:'Zari Silk',desc:'Rich maroon gharara set with traditional embroidery.'},
    {name:'Gold Mehndi Outfit',stylist:'Zara Khan',price:'Rs 28,000',img:'wedding-bride-collection/wedding5.webp',badge:'New',sizes:['XS','S','M','L','XL'],fabric:'Georgette',desc:'Vibrant mehndi outfit in yellow-gold tones.'},
    {name:'Pista Walima Dress',stylist:'Ayesha Malik',price:'Rs 45,000',img:'wedding-bride-collection/wedding6.jfif',badge:'',sizes:['S','M','L','XL','XXL'],fabric:'Chiffon Silk',desc:'Sophisticated pista green gown for the walima ceremony.'}
  ],
  'wedding-groom': [
    {name:'Classic Black Sherwani',stylist:'Omar Sheikh',price:'Rs 35,000',img:'wedding-groom-colection/wedding1.jpeg',badge:'New',sizes:['S','M','L','XL','XXL'],fabric:'Jamawar',desc:'Timeless black sherwani with gold tilla embroidery.'},
    {name:'Ivory Banarasi Sherwani',stylist:'Omar Sheikh',price:'Rs 42,000',img:'wedding-groom-colection/wedding2.jpeg',badge:'',sizes:['S','M','L','XL'],fabric:'Banarasi Silk',desc:'Royal ivory sherwani in fine Banarasi fabric.'},
    {name:'Navy Blue Achkan',stylist:'Omar Sheikh',price:'Rs 28,000',oldPrice:'Rs 36,000',img:'wedding-groom-colection/wedding3.jpeg',badge:'Sale',sizes:['S','M','L','XL','XXL'],fabric:'Brocade',desc:'Elegant navy achkan for a sophisticated groom look.'},
    {name:'Maroon Embroidered Suit',stylist:'Omar Sheikh',price:'Rs 22,000',img:'wedding-groom-colection/wedding4.webp',badge:'New',sizes:['S','M','L','XL'],fabric:'Velvet Blend',desc:'Rich maroon suit with intricate embroidery detail.'},
    {name:'Mehndi Yellow Kurta',stylist:'Omar Sheikh',price:'Rs 8,500',img:'wedding-groom-colection/wedding5.webp',badge:'',sizes:['S','M','L','XL','XXL'],fabric:'Cambric',desc:'Vibrant yellow kurta shalwar for the mehndi night.'},
    {name:'Charcoal Suit & Turban',stylist:'Omar Sheikh',price:'Rs 32,000',img:'wedding-groom-colection/wedding6.webp',badge:'New',sizes:['S','M','L','XL'],fabric:'Fine Wool',desc:'Complete charcoal suit with matching pagri set.'}
  ],
  'winter-men': [
    {name:'Wool Overcoat',stylist:'Omar Sheikh',price:'Rs 14,999',img:'winter-Men-collection/winter1.webp',badge:'New',sizes:['S','M','L','XL','XXL'],fabric:'Pure Wool',desc:'Premium wool overcoat for the coldest winter days.'},
    {name:'Shawl Waistcoat Set',stylist:'Omar Sheikh',price:'Rs 8,499',img:'winter-Men-collection/winter2.webp',badge:'',sizes:['S','M','L','XL'],fabric:'Pashmina Blend',desc:'Traditional waistcoat with a fine shawl for winter formals.'},
    {name:'Leather Jacket Classic',stylist:'Omar Sheikh',price:'Rs 18,999',oldPrice:'Rs 24,000',img:'winter-Men-collection/winter3.webp',badge:'Sale',sizes:['S','M','L','XL','XXL'],fabric:'Genuine Leather',desc:'Timeless leather jacket that never goes out of style.'},
    {name:'Khaddar Shalwar Suit',stylist:'Omar Sheikh',price:'Rs 5,499',img:'winter-Men-collection/winter4.webp',badge:'New',sizes:['S','M','L','XL','XXL'],fabric:'Khaddar',desc:'Warm khaddar shalwar suit for winter comfort.'},
    {name:'Turtle Neck Sweater',stylist:'Omar Sheikh',price:'Rs 4,999',img:'winter-Men-collection/winter5.webp',badge:'',sizes:['S','M','L','XL','XXL'],fabric:'Merino Wool',desc:'Cozy merino turtle neck for layering in winter.'},
    {name:'Tweed Blazer Set',stylist:'Omar Sheikh',price:'Rs 11,999',img:'winter-Men-collection/winter6.webp',badge:'New',sizes:['S','M','L','XL'],fabric:'Tweed Wool',desc:'Smart tweed blazer set for winter business casual.'}
  ],
  'winter-women': [
    {name:'Velvet Shawl Kurti',stylist:'Ayesha Malik',price:'Rs 6,999',img:'winter women collection/winter 1.webp',badge:'New',sizes:['XS','S','M','L','XL'],fabric:'Velvet',desc:'Luxurious velvet kurti with shawl for winter elegance.'},
    {name:'Wool Wrap Coat',stylist:'Zara Khan',price:'Rs 16,500',img:'winter women collection/winter 2.webp',badge:'',sizes:['S','M','L','XL'],fabric:'Cashmere Blend',desc:'Chic wrap coat in neutral tones for the modern woman.'},
    {name:'Pashm Shawl Suit',stylist:'Ayesha Malik',price:'Rs 9,499',oldPrice:'Rs 12,000',img:'winter women collection/winter 3.webp',badge:'Sale',sizes:['XS','S','M','L','XL','XXL'],fabric:'Pashmina',desc:'Warm and graceful pashmina suit for winter gatherings.'},
    {name:'Khaddar Printed Suit',stylist:'Zara Khan',price:'Rs 3,999',img:'winter women collection/winterv4.webp',badge:'New',sizes:['XS','S','M','L','XL','XXL'],fabric:'Khaddar',desc:'Vibrant printed khaddar suit for everyday winter wear.'},
    {name:'Wool Cardigan Long',stylist:'Sara Noor',price:'Rs 5,299',img:'winter women collection/winter 6.webp',badge:'',sizes:['S','M','L','XL','XXL'],fabric:'Acrylic Wool',desc:'Cozy long cardigan for layering on chilly evenings.'},
    {name:'Embroidered Winter Kurti',stylist:'Ayesha Malik',price:'Rs 4,799',img:'winter women collection/winter 5.webp',badge:'New',sizes:['XS','S','M','L','XL'],fabric:'Karandi',desc:'Karandi kurti with beautiful winter embroidery.'}
  ]
};

let cartItems = [];
let currentProduct = null;

// ===== LOADER =====
window.addEventListener('load', function(){
  setTimeout(() => { document.getElementById('loader').classList.add('hide'); }, 2200);
});

// ===== PARTICLES =====
(function createParticles(){
  const c = document.getElementById('particles');
  for(let i=0;i<25;i++){
    const p = document.createElement('div');
    p.className = 'particle';
    const s = Math.random()*6+2;
    p.style.cssText = `width:${s}px;height:${s}px;left:${Math.random()*100}%;
      animation-duration:${Math.random()*15+10}s;
      animation-delay:-${Math.random()*15}s;opacity:${Math.random()*.4+.1}`;
    c.appendChild(p);
  }
})();

// ===== SLIDER =====
let currentSlide = 0;
const totalSlides = 4;
let sliderTimer;

function buildDots(){
  const d = document.getElementById('sliderDots');
  for(let i=0;i<totalSlides;i++){
    const dot = document.createElement('div');
    dot.className = 's-dot' + (i===0?' active':'');
    dot.onclick = ()=>goSlide(i);
    d.appendChild(dot);
  }
}

function goSlide(n){
  document.getElementById('slide'+currentSlide).classList.remove('active');
  document.querySelectorAll('.s-dot')[currentSlide].classList.remove('active');
  currentSlide = (n+totalSlides)%totalSlides;
  document.getElementById('slide'+currentSlide).classList.add('active');
  document.querySelectorAll('.s-dot')[currentSlide].classList.add('active');
}

function changeSlide(dir){ clearTimeout(sliderTimer); goSlide(currentSlide+dir); startAuto(); }

function startAuto(){
  sliderTimer = setInterval(()=>{ goSlide(currentSlide+1); }, 5000);
}

buildDots();
startAuto();

// ===== NAVBAR SCROLL =====
$(window).scroll(function(){
  if($(this).scrollTop()>80) $('#mainNav').addClass('scrolled');
  else $('#mainNav').removeClass('scrolled');
  if($(this).scrollTop()>300) $('#btt').css('display','flex');
  else $('#btt').hide();
});

// ===== RENDER PRODUCTS =====
function buildCard(p, idx, col){
  const uid = col+'__'+idx;
  return `
  <div class="col-6 col-lg-4 reveal">
    <div class="product-card" onclick="openProduct(${JSON.stringify(col).replace(/"/g,"'")},${idx})">
      <div class="product-img-wrap" style="position:relative;">
        <img class="product-img" src="${p.img}" alt="${p.name}" loading="lazy">
        ${p.badge?`<div class="product-badge ${p.badge.toLowerCase()==='new'?'new':p.badge.toLowerCase()==='sale'?'sale':''}">${p.badge}</div>`:''}
        <div class="product-actions">
          <div class="pact-btn" onclick="event.stopPropagation();wishlist('${p.name}')"><i class="fas fa-heart"></i></div>
          <div class="pact-btn" onclick="event.stopPropagation();openProduct('${col}',${idx})"><i class="fas fa-eye"></i></div>
          <div class="pact-btn compare-btn" id="cbtn-${uid}" onclick="event.stopPropagation();toggleCompare('${col}',${idx},this)" title="Compare"><i class="fas fa-code-compare"></i></div>
        </div>
        <button class="btn-download-card" onclick="event.stopPropagation();downloadProduct('${p.img}','${p.name.replace(/'/g,"\\'")}')" title="Download Image"><i class="fas fa-download"></i></button>
      </div>
      <div class="product-body">
        <div class="product-stylist">${p.stylist}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-footer">
          <div class="product-price">
            ${p.oldPrice?`<s>${p.oldPrice}</s> `:''}${p.price}
          </div>
          <button class="btn-cart" onclick="event.stopPropagation();quickCart('${col}',${idx})">
            <i class="fas fa-bag-shopping"></i>
          </button>
        </div>
        <div class="size-pills mt-2">
          ${p.sizes.slice(0,4).map(s=>`<div class="spill">${s}</div>`).join('')}
        </div>
      </div>
    </div>
  </div>`;
}

// ===== DOWNLOAD PRODUCT IMAGE =====
function downloadProduct(imgSrc, name){
  fetch(imgSrc)
    .then(r => r.blob())
    .then(blob => {
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      const ext = imgSrc.split('.').pop().split('?')[0] || 'jpg';
      a.download = name.replace(/[^a-z0-9]/gi,'_') + '.' + ext;
      a.click();
      URL.revokeObjectURL(url);
      showToast('Downloading: ' + name, 'fa-download');
    })
    .catch(()=>{ showToast('Download failed. Try right-click → Save Image.', 'fa-exclamation-circle'); });
}

// ===== COMPARE =====
let compareList = []; // max 2 items

function toggleCompare(col, idx, btnEl){
  const uid = col+'__'+idx;
  const existing = compareList.findIndex(c => c.uid === uid);
  if(existing !== -1){
    compareList.splice(existing, 1);
    btnEl.classList.remove('compare-active');
    showToast('Removed from compare', 'fa-code-compare');
  } else {
    if(compareList.length >= 2){ showToast('Sirf 2 products compare ho sakte hain. Pehle ek hatayein.', 'fa-exclamation-circle'); return; }
    const p = collections[col][idx];
    compareList.push({ uid, col, idx, p });
    btnEl.classList.add('compare-active');
    showToast(p.name + ' compare mein add hua', 'fa-code-compare');
  }
  renderCompareBar();
}

function renderCompareBar(){
  const bar = document.getElementById('compareBar');
  if(!compareList.length){ bar.style.display = 'none'; return; }
  bar.style.display = 'flex';
  const slots = [0,1].map(i => {
    if(compareList[i]){
      const {p, uid} = compareList[i];
      return `<div class="compare-slot">
        <img src="${p.img}" alt="${p.name}">
        <div class="compare-slot-name">${p.name}<br><small style="color:var(--gold)">${p.price}</small></div>
        <button class="compare-slot-rm" onclick="removeCompare('${uid}')"><i class="fas fa-times"></i></button>
      </div>`;
    }
    return `<div class="compare-slot compare-slot-empty"><i class="fas fa-plus me-1"></i> Product add karein</div>`;
  }).join('');
  const compareBtn = compareList.length === 2
    ? `<button class="btn-gold" style="border-radius:8px;padding:9px 22px;font-size:.8rem;" onclick="showCompareModal()"><i class="fas fa-code-compare me-2"></i>Compare Karein <span class="compare-count-badge">2</span></button>`
    : `<button class="btn-gold" style="border-radius:8px;padding:9px 22px;font-size:.8rem;opacity:.5;cursor:not-allowed;"><i class="fas fa-code-compare me-2"></i>2 products chunein</button>`;
  document.getElementById('compareSlots').innerHTML = slots;
  document.getElementById('compareActions').innerHTML = compareBtn +
    `<button class="compare-clear-btn" onclick="clearCompare()"><i class="fas fa-trash me-1"></i>Clear</button>`;
}

function removeCompare(uid){
  const item = compareList.find(c => c.uid === uid);
  if(item){
    compareList = compareList.filter(c => c.uid !== uid);
    const btn = document.getElementById('cbtn-'+uid);
    if(btn) btn.classList.remove('compare-active');
  }
  renderCompareBar();
}

function clearCompare(){
  compareList.forEach(c => {
    const btn = document.getElementById('cbtn-'+c.uid);
    if(btn) btn.classList.remove('compare-active');
  });
  compareList = [];
  renderCompareBar();
}

function showCompareModal(){
  if(compareList.length < 2){ showToast('2 products select karein compare ke liye', 'fa-exclamation-circle'); return; }
  const [a, b] = compareList.map(c => c.p);
  const rows = [
    ['Stylist', a.stylist, b.stylist],
    ['Price', a.price, b.price],
    ['Old Price', a.oldPrice||'—', b.oldPrice||'—'],
    ['Fabric', a.fabric, b.fabric],
    ['Sizes', a.sizes.map(s=>`<span class="compare-size-pill">${s}</span>`).join(''), b.sizes.map(s=>`<span class="compare-size-pill">${s}</span>`).join('')],
    ['Description', `<span style="font-size:.8rem;color:var(--muted)">${a.desc}</span>`, `<span style="font-size:.8rem;color:var(--muted)">${b.desc}</span>`],
    ['Badge', a.badge||'—', b.badge||'—'],
  ];
  const thead = `<tr><th style="width:22%">Feature</th><th style="width:39%">${a.name}</th><th style="width:39%">${b.name}</th></tr>`;
  const imgRow = `<tr>
    <td></td>
    <td class="compare-prod-header">
      <img src="${a.img}" class="compare-prod-img">
      <div class="compare-prod-name">${a.name}</div>
      <div class="compare-prod-price">${a.price}</div>
    </td>
    <td class="compare-prod-header">
      <img src="${b.img}" class="compare-prod-img">
      <div class="compare-prod-name">${b.name}</div>
      <div class="compare-prod-price">${b.price}</div>
    </td>
  </tr>`;
  const bodyRows = rows.map(([label,va,vb])=>`<tr><td>${label}</td><td>${va}</td><td>${vb}</td></tr>`).join('');
  document.getElementById('compareTableHead').innerHTML = thead;
  document.getElementById('compareTableBody').innerHTML = imgRow + bodyRows;
  bootstrap.Modal.getOrCreateInstance(document.getElementById('compareModal')).show();
}

Object.keys(collections).forEach(col => {
  const grid = document.getElementById('grid-'+col);
  if(grid) grid.innerHTML = collections[col].map((p,i)=>buildCard(p,i,col)).join('');
});

// ===== QUICK NAV SMOOTH SCROLL (offset for navbar) =====
$('.coll-quicknav').on('click','.coll-pill',function(e){
  e.preventDefault();
  const t = $(this).attr('href');
  if($(t).length) $('html,body').animate({scrollTop:$(t).offset().top-90},600);
});

// ===== OPEN PRODUCT =====
function openProduct(col, idx){
  const p = collections[col][idx];
  currentProduct = {p, col, idx};
  $('#pmTitle').text(p.name);
  $('#pmImg').attr('src', p.img).attr('alt', p.name);
  $('#pmStylist').text(p.stylist);
  $('#pmName').text(p.name);
  $('#pmPrice').html(`${p.oldPrice?`<s style="color:var(--muted);font-size:1.1rem">${p.oldPrice}</s> `:''}${p.price}`);
  $('#pmDesc').text(p.desc);
  $('#pmFabric').text(p.fabric);
  $('#pmSizes').html(p.sizes.map((s,i)=>`<div class="ss${i===0?' active':''}" onclick="selectSize(this)">${s}</div>`).join(''));
  bootstrap.Modal.getOrCreateInstance(document.getElementById('productModal')).show();
}

function selectSize(el){ $('.ss').removeClass('active'); $(el).addClass('active'); }

function addToCart(){
  if(!currentProduct) return;
  const size = $('.ss.active').text()||currentProduct.p.sizes[0];
  cartItems.push({...currentProduct.p, size, col:currentProduct.col});
  $('#cartCount').text(cartItems.length);
  bootstrap.Modal.getInstance(document.getElementById('productModal')).hide();
  showToast('Added to cart: '+currentProduct.p.name, 'fa-shopping-bag');
}

function quickCart(col, idx){
  const p = collections[col][idx];
  cartItems.push({...p, size:p.sizes[0], col});
  $('#cartCount').text(cartItems.length);
  showToast('Added to cart: '+p.name, 'fa-shopping-bag');
}

function buyNow(){
  addToCart();
  checkoutSingle();
}

function checkoutSingle(){
  if(!currentProduct) return;
  const p = currentProduct.p;
  const size = $('.ss.active').text()||p.sizes[0];
  bootstrap.Modal.getInstance(document.getElementById('productModal'))?.hide();
  setTimeout(()=>showOrderModal(p.name, size, p.price), 400);
}

function checkoutAll(){
  if(!cartItems.length) return;
  const p = cartItems[cartItems.length-1];
  bootstrap.Modal.getInstance(document.getElementById('cartModal')).hide();
  setTimeout(()=>showOrderModal(p.name, p.size, p.price), 400);
}

function showOrderModal(name, size, price){
  $('#oId').text('SV-'+Date.now().toString().slice(-6));
  $('#oProduct').text(name);
  $('#oSize').text(size);
  $('#oAmount').text(price);
  bootstrap.Modal.getOrCreateInstance(document.getElementById('orderModal')).show();
  cartItems = [];
  $('#cartCount').text(0);
}

// ===== CART =====
function showCart(){
  if(!cartItems.length){
    $('#cartBody').html('<div class="text-center py-4" style="color:var(--muted)"><i class="fas fa-shopping-bag" style="font-size:3rem;opacity:.3;margin-bottom:16px;display:block"></i>Your cart is empty</div>');
    $('#cartFooter').css('display','none!important');
  } else {
    let total = 0;
    const html = cartItems.map((item,i)=>`
      <div class="d-flex gap-3 align-items-center mb-3 pb-3" style="border-bottom:1px solid rgba(201,168,76,.1)">
        <img src="${item.img}" style="width:70px;height:70px;object-fit:cover;border-radius:10px;">
        <div style="flex:1">
          <div style="font-family:'Playfair Display',serif;font-size:.95rem;">${item.name}</div>
          <div style="color:var(--muted);font-size:.75rem;">Size: ${item.size}</div>
          <div style="color:var(--gold);">${item.price}</div>
        </div>
        <button onclick="removeCart(${i})" style="background:none;border:none;color:var(--muted);cursor:pointer"><i class="fas fa-times"></i></button>
      </div>`).join('');
    $('#cartBody').html(html);
    $('#cartFooter').css('display','flex');
  }
  bootstrap.Modal.getOrCreateInstance(document.getElementById('cartModal')).show();
}

function removeCart(i){ cartItems.splice(i,1); $('#cartCount').text(cartItems.length); showCart(); }

// ===== STYLIST MODAL =====
function openStylistModal(name, spec, img){
  $('#smName').text(name);
  $('#smSpec').text(spec);
  $('#smImg').attr('src',img);
  bootstrap.Modal.getOrCreateInstance(document.getElementById('stylistModal')).show();
}

// ===== SIZE TABS =====
$('.size-tabs').on('click','.stab',function(){
  $('.stab').removeClass('active');
  $(this).addClass('active');
  const st = $(this).data('st');
  $('.st-pane').hide();
  $('#st-'+st).show();
});
// init
$('.st-pane').hide();
$('#st-women').show();

// ===== AUTH =====
function switchAuth(mode){
  if(mode==='reg'){ $('#regForm').show();$('#logForm').hide(); }
  else { $('#regForm').hide();$('#logForm').show(); }
}
function doRegister(){ bootstrap.Modal.getInstance(document.getElementById('registerModal')).hide(); showToast('Account created successfully!','fa-user-check'); }
function doLogin(){ bootstrap.Modal.getInstance(document.getElementById('registerModal')).hide(); showToast('Welcome back to StyleVerse!','fa-user'); }

// ===== CONTACT =====
function submitContact(e){
  e.preventDefault();
  showToast('Message sent! We\'ll reply within 24 hours.','fa-envelope');
  e.target.reset();
}

// ===== NEWSLETTER =====
function subscribeNewsletter(){
  const v = document.getElementById('nlEmail').value.trim();
  if(!v||!v.includes('@')){ showToast('Please enter a valid email','fa-exclamation-circle'); return; }
  document.getElementById('nlEmail').value='';
  showToast('Subscribed! Welcome to StyleVerse.','fa-star');
}

// ===== WISHLIST =====
function wishlist(name){ showToast(name+' added to wishlist!','fa-heart'); }

// ===== TOAST =====
function showToast(msg, icon='fa-info-circle'){
  const t = document.createElement('div');
  t.className = 'mytoast';
  t.innerHTML = `<i class="fas ${icon} t-icon"></i><span>${msg}</span>`;
  document.getElementById('toastWrap').appendChild(t);
  setTimeout(()=>{ t.style.opacity='0';t.style.transition='opacity .4s'; setTimeout(()=>t.remove(),400); }, 3000);
}

// ===== RUNNING COUNTER =====
function animateCounter(el){
  const target = parseInt(el.getAttribute('data-target'));
  const duration = 2000;
  const step = target / (duration / 16);
  let current = 0;
  const timer = setInterval(()=>{
    current += step;
    if(current >= target){
      current = target;
      clearInterval(timer);
    }
    el.textContent = Math.floor(current).toLocaleString();
  }, 16);
}

const counterObserver = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting && !e.target.classList.contains('counted')){
      e.target.classList.add('counted');
      animateCounter(e.target);
    }
  });
},{threshold:0.3});

document.querySelectorAll('.stat-number').forEach(el=>counterObserver.observe(el));

// ===== REVEAL ANIMATION =====
const ro = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('visible'); });
},{threshold:.08});
document.querySelectorAll('.reveal').forEach(el=>ro.observe(el));

// ===== SMOOTH LINKS =====
$('a[href^="#"]').on('click',function(e){
  e.preventDefault();
  const t = $(this).attr('href');
  if($(t).length) $('html,body').animate({scrollTop:$(t).offset().top-80},600);
});
