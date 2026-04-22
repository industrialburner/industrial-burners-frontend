/* ========================================
   COMPONENTS JS
   ======================================== */

// Navbar Component
const navbarHTML = `
  <a href="#" class="nav-logo"><span>IBS</span> INDIA</a>
  <ul class="nav-links">
    <li><a href="#about">About</a></li>
    <li><a href="#products">Products</a></li>
    <li><a href="#applications">Applications</a></li>
    <li><a href="#faq">FAQ</a></li>
    <li><a href="#contact" class="nav-cta">Get Quote</a></li>
  </ul>
  <div class="hamburger" id="hamburger" onclick="toggleMenu()">
    <span></span>
    <span></span>
    <span></span>
  </div>
  <div class="mobile-menu" id="mobileMenu">
    <a href="#about" onclick="closeMenu()">About</a>
    <a href="#products" onclick="closeMenu()">Products</a>
    <a href="#applications" onclick="closeMenu()">Applications</a>
    <a href="#faq" onclick="closeMenu()">FAQ</a>
    <a href="#contact" class="mobile-cta" onclick="closeMenu()">Get Quote</a>
  </div>
`;

// Footer Component
const footerHTML = `
  <div class="footer-logo"><span>IBS</span> INDIA</div>
  <div class="footer-links">
    <a href="#about">About</a>
    <a href="#products">Products</a>
    <a href="#contact">Contact</a>
  </div>
  <div class="footer-text">© 2026 Industrial Burner Solutions. All Rights Reserved.</div>
`;

// Load Components
document.addEventListener('DOMContentLoaded', function() {
  // Load Navbar
  const navbar = document.getElementById('navbar');
  if (navbar) {
    navbar.innerHTML = navbarHTML;
  }
  
  // Load Footer
  const footer = document.getElementById('footer');
  if (footer) {
    footer.innerHTML = footerHTML;
  }
  
  // Navbar Scroll Effect
  const nav = document.querySelector('nav');
  if (nav) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    });
  }
});

// Mobile Menu Functions
function toggleMenu() {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  
  if (hamburger && mobileMenu) {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
    document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
  }
}

function closeMenu() {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  
  if (hamburger && mobileMenu) {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  }
}

// Close mobile menu on window resize
window.addEventListener('resize', function() {
  if (window.innerWidth > 900) {
    closeMenu();
  }
});
