/* ========================================
   MAIN JS
   ======================================== */

// Product Data
const productsData = {
  industrial: [
    {
      model: 'HD162 / HD162A',
      name: 'Industrial Burner',
      badge: '🔥',
      dimension: '570×130×175 mm',
      heatOutput: '6.3 KW / 5400 Kcal/hr',
      ngConsumption: '0.49 m³/h',
      lpgConsumption: '0.45 kg/h'
    },
    {
      model: 'HD242 / HD242A',
      name: 'Industrial Burner',
      badge: '🔥',
      dimension: '840×130×175 mm',
      heatOutput: '9.4 KW / 8120 Kcal/hr',
      ngConsumption: '0.75 m³/h',
      lpgConsumption: '0.68 kg/h'
    },
    {
      model: 'HD262 / HD262A',
      name: 'Industrial Burner',
      badge: '🔥',
      dimension: '930×130×175 mm',
      heatOutput: '10.9 KW / 9360 Kcal/hr',
      ngConsumption: '0.8 m³/h',
      lpgConsumption: '0.74 kg/h'
    },
    {
      model: 'HD61',
      name: 'Industrial Burner',
      badge: '🔥',
      dimension: '423×80×94 mm',
      heatOutput: '2.4 KW / 2030 Kcal/hr',
      ngConsumption: '0.18 m³/h',
      lpgConsumption: '0.17 kg/h'
    },
    {
      model: 'HD81',
      name: 'Industrial Burner',
      badge: '🔥',
      dimension: '555×80×115 mm',
      heatOutput: '3.1 KW / 2700 Kcal/hr',
      ngConsumption: '0.24 m³/h',
      lpgConsumption: '0.22 kg/h'
    }
  ],
  bbq: [
    {
      model: 'HD220',
      name: 'BBQ Burner',
      badge: '🍖',
      dimension: '220×170×60 mm',
      heatOutput: '10,000 BTU/h / 2520 Kcal/hr',
      ngConsumption: '0.31 m³/h',
      lpgConsumption: '0.22 kg/h'
    },
    {
      model: 'HD538',
      name: 'BBQ Burner',
      badge: '🍖',
      dimension: '538×85×65 mm',
      heatOutput: '13,500 BTU/h / 3400 Kcal/hr',
      ngConsumption: '0.42 m³/h',
      lpgConsumption: '0.30 kg/h'
    },
    {
      model: 'THD235',
      name: 'BBQ Burner',
      badge: '🍖',
      dimension: '235×235×65 mm',
      heatOutput: '11,542 BTU/h / 2898 Kcal/hr',
      ngConsumption: '0.36 m³/h',
      lpgConsumption: '0.25 kg/h'
    }
  ],
  brooder: [
    {
      model: 'THD2606 (Manual)',
      name: 'Gas Brooder',
      badge: '🐣',
      dimension: '320×270×130 mm',
      heatOutput: '2.46 KW / 2116 Kcal/hr',
      ngConsumption: '0.26 m³/h',
      lpgConsumption: '0.18 kg/h'
    },
    {
      model: 'THD2608 (Auto)',
      name: 'Gas Brooder',
      badge: '🐣',
      dimension: '320×270×130 mm',
      heatOutput: '2.46 KW / 2116 Kcal/hr',
      ngConsumption: '0.26 m³/h',
      lpgConsumption: '0.18 kg/h'
    },
    {
      model: 'THD6806 (Manual)',
      name: 'Gas Brooder',
      badge: '🐣',
      dimension: '675×235×95 mm',
      heatOutput: '3.9 KW / 3400 Kcal/hr',
      ngConsumption: '0.39 m³/h',
      lpgConsumption: '0.27 kg/h'
    }
  ],
  portable: [
    {
      model: 'THD166',
      name: 'Portable Heater',
      badge: '🏕️',
      dimension: '260×240×280 mm',
      heatOutput: '1960 Kcal/hr',
      ngConsumption: '0.24 m³/h',
      lpgConsumption: '0.18 kg/h'
    },
    {
      model: 'THD210',
      name: 'Portable Heater',
      badge: '🏕️',
      dimension: '210×130×330 mm',
      heatOutput: '1960 Kcal/hr',
      ngConsumption: '0.24 m³/h',
      lpgConsumption: '0.18 kg/h'
    }
  ]
};

// Render Products
function renderProducts(category) {
  const grid = document.getElementById('products-grid');
  if (!grid) return;
  
  const products = productsData[category] || productsData.industrial;
  
  grid.innerHTML = products.map(product => `
    <div class="product-card">
      <div class="product-badge">${product.badge}</div>
      <div class="product-model">${product.model}</div>
      <div class="product-name">${product.name}</div>
      <div class="product-specs">
        <div class="spec-row">
          <span class="spec-key">Dimension</span>
          <span class="spec-val">${product.dimension}</span>
        </div>
        <div class="spec-row">
          <span class="spec-key">Heat Output</span>
          <span class="spec-val">${product.heatOutput}</span>
        </div>
        <div class="spec-row">
          <span class="spec-key">NG Consumption</span>
          <span class="spec-val">${product.ngConsumption}</span>
        </div>
        <div class="spec-row">
          <span class="spec-key">LPG Consumption</span>
          <span class="spec-val">${product.lpgConsumption}</span>
        </div>
      </div>
      <button class="product-quote-btn" onclick="selectProduct('${product.model} ${product.name}')">
        ⚡ Get Quote
      </button>
    </div>
  `).join('');
}

// Category Tabs
function initCategoryTabs() {
  const tabs = document.querySelectorAll('.cat-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', function() {
      // Remove active class from all tabs
      tabs.forEach(t => t.classList.remove('active'));
      // Add active class to clicked tab
      this.classList.add('active');
      // Render products for selected category
      const category = this.getAttribute('data-category');
      renderProducts(category);
    });
  });
}

// Select Product in Contact Form
function selectProduct(productName) {
  const select = document.getElementById('product');
  if (select) {
    for (let i = 0; i < select.options.length; i++) {
      if (select.options[i].text.includes(productName)) {
        select.selectedIndex = i;
        break;
      }
    }
    // Scroll to contact form
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    // Focus on name field
    setTimeout(() => {
      document.getElementById('from_name').focus();
    }, 500);
  }
}

// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Initialize on DOM Load
document.addEventListener('DOMContentLoaded', function() {
  // Render initial products
  renderProducts('industrial');
  
  // Initialize category tabs
  initCategoryTabs();
});

// FAQ Toggle Function
function toggleFaq(el) {
  const item = el.parentElement;
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
}
