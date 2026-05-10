/* ========================================
   SCROLL ANIMATIONS & INTERACTIONS
   ======================================== */

// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // Optional: unobserve after animation
      // observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Initialize scroll animations on DOM load
document.addEventListener('DOMContentLoaded', function() {
  // Animate section headers
  const sectionHeaders = document.querySelectorAll('.section-header');
  sectionHeaders.forEach((el, index) => {
    el.style.animationDelay = `${index * 0.1}s`;
    observer.observe(el);
  });

  // Animate feature cards
  const featureCards = document.querySelectorAll('.feature-card');
  featureCards.forEach((el, index) => {
    el.classList.add('fade-in-on-scroll');
    el.style.animationDelay = `${index * 0.1}s`;
    observer.observe(el);
  });

  // Animate app cards
  const appCards = document.querySelectorAll('.app-card');
  appCards.forEach((el, index) => {
    el.classList.add('slide-in-right-on-scroll');
    el.style.animationDelay = `${index * 0.1}s`;
    observer.observe(el);
  });

  // Animate contact items
  const contactItems = document.querySelectorAll('.contact-item');
  contactItems.forEach((el, index) => {
    el.classList.add('slide-in-left-on-scroll');
    el.style.animationDelay = `${index * 0.15}s`;
    observer.observe(el);
  });

  // Animate FAQ items
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach((el, index) => {
    el.classList.add('fade-in-on-scroll');
    el.style.animationDelay = `${index * 0.1}s`;
    observer.observe(el);
  });

  // Animate product cards when they're rendered
  setTimeout(() => {
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach((el, index) => {
      el.classList.add('scale-in-on-scroll');
      el.style.animationDelay = `${index * 0.08}s`;
      observer.observe(el);
    });
  }, 100);

  // Add parallax effect to hero section
  const hero = document.getElementById('hero');
  if (hero) {
    window.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY;
      hero.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
    });
  }
});

// Smooth scroll behavior for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href !== '#' && document.querySelector(href)) {
      e.preventDefault();
      const target = document.querySelector(href);
      const offsetTop = target.offsetTop - 80;
      
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// Add scroll reveal for statistics
function revealStats() {
  const stats = document.querySelectorAll('.stat-item');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.5 });

  stats.forEach(stat => observer.observe(stat));
}

// Counter animation for statistics
function animateCounter(element, target, duration = 2000) {
  let current = 0;
  const increment = target / (duration / 16);
  
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    element.textContent = Math.floor(current) + '%';
  }, 16);
}

// Initialize counter animations when section is visible
document.addEventListener('DOMContentLoaded', function() {
  const statsSection = document.querySelector('.hero-stats');
  if (statsSection) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
          entry.target.classList.add('animated');
          const statNums = entry.target.querySelectorAll('.stat-num');
          statNums.forEach((stat, index) => {
            const value = parseInt(stat.textContent);
            if (value) {
              animateCounter(stat, value);
            }
          });
        }
      });
    }, { threshold: 0.5 });

    observer.observe(statsSection);
  }
});

// Hover effects for interactive elements
document.addEventListener('DOMContentLoaded', function() {
  // Add hover lift effect to cards
  const cards = document.querySelectorAll('.feature-card, .app-card, .product-card, .faq-item');
  
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-8px)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });

  // Add glow effect to buttons on hover
  const buttons = document.querySelectorAll('.btn-primary, .product-quote-btn');
  
  buttons.forEach(btn => {
    btn.addEventListener('mouseenter', function() {
      this.style.boxShadow = '0 12px 50px rgba(255, 69, 0, 0.6), 0 0 30px rgba(255, 69, 0, 0.4)';
    });
    
    btn.addEventListener('mouseleave', function() {
      this.style.boxShadow = '0 8px 30px rgba(255, 69, 0, 0.4)';
    });
  });
});

// Dynamic background animations
document.addEventListener('DOMContentLoaded', function() {
  // Add animated gradient background to hero
  const hero = document.getElementById('hero');
  if (hero) {
    hero.style.backgroundAttachment = 'fixed';
  }

  // Animate section backgrounds on scroll
  const sections = document.querySelectorAll('.section');
  window.addEventListener('scroll', () => {
    sections.forEach(section => {
      const scrollPosition = window.scrollY;
      const elementOffset = section.offsetTop;
      const windowHeight = window.innerHeight;

      if (scrollPosition + windowHeight > elementOffset) {
        const relativeScroll = (scrollPosition + windowHeight - elementOffset) / windowHeight;
        section.style.opacity = Math.min(relativeScroll, 1);
      }
    });
  });
});

// Add page load animation
window.addEventListener('load', function() {
  document.body.style.opacity = '1';
  
  // Trigger entrance animations
  const hero = document.getElementById('hero');
  if (hero) {
    hero.classList.add('loaded');
  }
});

// Prevent Flash of Unstyled Content
document.body.style.opacity = '0';

// Smooth fade in on page load
window.addEventListener('DOMContentLoaded', function() {
  document.body.style.transition = 'opacity 0.6s ease-in-out';
  document.body.style.opacity = '1';
});

// Mobile-specific optimizations
function isMobile() {
  return window.innerWidth <= 768;
}

// Reduce animation complexity on mobile
if (isMobile()) {
  const style = document.createElement('style');
  style.textContent = `
    @media (max-width: 768px) {
      .feature-card:hover {
        transform: translateY(-4px) !important;
      }
      
      .app-card:hover {
        transform: translateY(-4px) !important;
      }
      
      .product-card:hover {
        transform: translateY(-4px) !important;
      }
      
      * {
        transition-duration: 0.2s !important;
      }
    }
  `;
  document.head.appendChild(style);
}

// Request animation frame for smooth scrolling effects
let lastScrollY = 0;
let ticking = false;

function updateScroll() {
  lastScrollY = window.scrollY;
  ticking = false;

  // Update navbar styling based on scroll
  const navbar = document.querySelector('nav');
  if (navbar) {
    if (lastScrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
}

window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(updateScroll);
    ticking = true;
  }
}, { passive: true });

// Initialize on load
document.addEventListener('DOMContentLoaded', function() {
  revealStats();
});

// Add subtle pulse animations to interactive elements
document.addEventListener('DOMContentLoaded', function() {
  const interactiveElements = document.querySelectorAll('.btn, .cat-tab, .contact-item, .faq-q');
  
  interactiveElements.forEach(el => {
    el.addEventListener('focusin', function() {
      this.style.boxShadow = '0 0 20px rgba(255, 69, 0, 0.3)';
    });
    
    el.addEventListener('focusout', function() {
      this.style.boxShadow = '';
    });
  });
});

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
  // ESC key to close mobile menu
  if (e.key === 'Escape') {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (hamburger && mobileMenu && hamburger.classList.contains('open')) {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    }
  }
});

// Performance optimization - lazy load images
if ('IntersectionObserver' in window) {
  const lazyImages = document.querySelectorAll('img[data-src]');
  
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        imageObserver.unobserve(img);
      }
    });
  });
  
  lazyImages.forEach(img => imageObserver.observe(img));
}
