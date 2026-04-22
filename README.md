# Industrial Burner Solutions - Frontend

A professional, modular frontend website for Industrial Burner Solutions India (IBS). Built with HTML, CSS, and JavaScript with a clean, responsive design.

## 📁 Project Structure

```
industrial-burners-frontend/
├── index.html              # Main entry point
├── README.md               # This file
└── src/
    ├── assets/             # Static assets
    │   ├── images/         # Product images
    │   └── icons/          # Custom icons
    ├── components/         # HTML component templates (future)
    ├── scripts/            # JavaScript files
    │   ├── components.js   # Navbar, footer, mobile menu
    │   ├── main.js         # Product data, tabs, navigation
    │   └── emailjs.js      # Contact form with EmailJS
    └── styles/             # CSS files
        ├── main.css        # Base styles, variables, sections
        ├── components.css  # Component styles (navbar, cards, forms)
        └── responsive.css  # Mobile and tablet responsiveness
```

## 🚀 Getting Started

### Option 1: Open Directly in Browser

1. Navigate to the project folder:
   ```bash
   cd industrial-burners-frontend
   ```

2. Open `index.html` in your browser:
   - Double-click `index.html`, or
   - Right-click → Open with → Your browser

### Option 2: Use Live Server (VS Code)

1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"
4. The site will open at `http://127.0.0.1:5500`

### Option 3: Use Python HTTP Server

```bash
cd industrial-burners-frontend
python -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

### Option 4: Use Node.js HTTP Server

```bash
cd industrial-burners-frontend
npx http-server -p 8000
```

Then open `http://localhost:8000` in your browser.

## 📧 EmailJS Configuration

The contact form uses EmailJS for sending inquiries. To configure:

1. Sign up at [EmailJS](https://www.emailjs.com)
2. Create an Email Service (connect your Gmail)
3. Create an Email Template with these variables:
   - `{{from_name}}` - Sender's name
   - `{{company}}` - Company name
   - `{{phone}}` - Phone number
   - `{{from_email}}` - Email address
   - `{{product}}` - Selected product
   - `{{message}}` - Message content

4. Update the configuration in `src/scripts/emailjs.js`:
   ```javascript
   const EMAILJS_CONFIG = {
     publicKey: 'YOUR_PUBLIC_KEY',
     serviceId: 'YOUR_SERVICE_ID',
     templateId: 'YOUR_TEMPLATE_ID'
   };
   ```

## 🎨 Customization

### Colors

Edit CSS variables in `src/styles/main.css`:
```css
:root {
  --fire: #FF4500;        /* Primary accent color */
  --fire-glow: #FF6B00;   /* Hover accent color */
  --gold: #C8963E;        /* Secondary accent */
  --dark: #0A0A0A;        /* Background */
  --dark-2: #111214;      /* Alternate background */
  --white: #F0F2F5;       /* Text color */
}
```

### Products

Update product data in `src/scripts/main.js`:
```javascript
const productsData = {
  industrial: [
    {
      model: 'HD162',
      name: 'Industrial Burner',
      badge: '🔥',
      dimension: '570×130×175 mm',
      heatOutput: '6.3 KW / 5400 Kcal/hr',
      ngConsumption: '0.49 m³/h',
      lpgConsumption: '0.45 kg/h'
    },
    // Add more products...
  ]
};
```

### Navbar & Footer

Edit component HTML in `src/scripts/components.js`:
- Update navigation links in `navbarHTML`
- Update footer content in `footerHTML`

## 📱 Responsive Design

The site is fully responsive with breakpoints:
- **Desktop**: > 900px
- **Tablet**: 600px - 900px
- **Mobile**: < 600px
- **Small Mobile**: < 400px

Responsive styles are in `src/styles/responsive.css`.

## 🔧 Extending the Project

### Adding a New Section

1. Add HTML in `index.html`:
   ```html
   <section id="new-section" class="section">
     <div class="container">
       <!-- Your content -->
     </div>
   </section>
   ```

2. Add styles in `src/styles/main.css`:
   ```css
   #new-section {
     /* Your styles */
   }
   ```

3. Add navigation link in `src/scripts/components.js`:
   ```javascript
   <li><a href="#new-section">New Section</a></li>
   ```

### Adding a New Product Category

1. Add category button in `index.html`:
   ```html
   <button class="cat-tab" data-category="newcategory">🔧 New Category</button>
   ```

2. Add product data in `src/scripts/main.js`:
   ```javascript
   const productsData = {
     newcategory: [
       {
         model: 'MODEL123',
         name: 'Product Name',
         badge: '🔧',
         dimension: '100×100×100 mm',
         heatOutput: '5 KW',
         ngConsumption: '0.5 m³/h',
         lpgConsumption: '0.4 kg/h'
       }
     ]
   };
   ```

### Adding Images

1. Place images in `src/assets/images/`
2. Reference in HTML:
   ```html
   <img src="src/assets/images/product.jpg" alt="Product">
   ```

## 🌐 Deployment

### GitHub Pages

1. Push to GitHub repository
2. Go to repository Settings → Pages
3. Select source: `main` branch
4. Save - your site will be available at `https://username.github.io/repo-name`

### Netlify

1. Push to GitHub
2. Connect repository to Netlify
3. Deploy automatically on push

### Vercel

1. Push to GitHub
2. Import project in Vercel
3. Deploy automatically on push

## 📋 Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Modular architecture (separate HTML, CSS, JS)
- ✅ Product catalog with category tabs
- ✅ Contact form with EmailJS integration
- ✅ WhatsApp integration
- ✅ Smooth scrolling navigation
- ✅ Mobile hamburger menu
- ✅ Industrial business theme
- ✅ Cross-browser compatible

## 🛠️ Technologies

- HTML5
- CSS3 (CSS Variables, Flexbox, Grid)
- Vanilla JavaScript (ES6+)
- EmailJS (contact form)
- Google Fonts (Bebas Neue, Barlow, Barlow Condensed)

## 📞 Contact

- Email: industrialburner.sales@gmail.com
- Phone: +91-9961650020
- Location: Tamil Nadu, India

## 📄 License

© 2026 Industrial Burner Solutions. All Rights Reserved.
