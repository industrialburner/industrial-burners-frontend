/* ========================================
   EMAILJS CONFIGURATION
   ======================================== */

// EmailJS Configuration
const EMAILJS_CONFIG = {
  publicKey: 'qHmslZ2G9Q0wjeBXB',
  serviceId: 'service_i0olvlq',
  templateId: 'template_czhmwhq'
};

// Initialize EmailJS
document.addEventListener('DOMContentLoaded', function() {
  if (typeof emailjs !== 'undefined') {
    emailjs.init({ publicKey: EMAILJS_CONFIG.publicKey });
  }
});

// Contact Form Submission
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    sendInquiry();
  });
}

// Send Inquiry Function
function sendInquiry() {
  const btn = document.getElementById('submitBtn') || contactForm.querySelector('button[type="submit"]');
  const status = document.getElementById('form-status');
  
  // Get form values
  const name = document.getElementById('from_name').value.trim();
  const email = document.getElementById('from_email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const company = document.getElementById('company').value.trim();
  const product = document.getElementById('product').value;
  const message = document.getElementById('message').value.trim();
  
  // Validation
  if (!name || !email || !phone) {
    showStatus('⚠ Please fill in Name, Email and Phone.', 'warning');
    return;
  }
  
  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    showStatus('⚠ Please enter a valid email address.', 'warning');
    return;
  }
  
  // Phone validation
  const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
  if (!phoneRegex.test(phone)) {
    showStatus('⚠ Please enter a valid phone number.', 'warning');
    return;
  }
  
  // Loading state
  if (btn) {
    btn.disabled = true;
    btn.innerHTML = '⏳ Sending…';
  }
  
  // Send via EmailJS
  emailjs.send(EMAILJS_CONFIG.serviceId, EMAILJS_CONFIG.templateId, {
    from_name: name,
    company: company || '—',
    phone: phone,
    from_email: email,
    product: product || 'Not specified',
    message: message || '—'
  })
  .then(function() {
    showStatus('✅ Inquiry sent! We will contact you shortly.', 'success');
    if (btn) {
      btn.innerHTML = '✓ Sent!';
    }
    
    // Clear form
    document.getElementById('from_name').value = '';
    document.getElementById('company').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('from_email').value = '';
    document.getElementById('message').value = '';
    document.getElementById('product').selectedIndex = 0;
    
    // Reset button after 4 seconds
    setTimeout(function() {
      if (btn) {
        btn.disabled = false;
        btn.innerHTML = '⚡ Send Inquiry';
      }
    }, 4000);
  })
  .catch(function(error) {
    console.error('EmailJS error:', error);
    const errMsg = error?.text || error?.message || 'Failed to send inquiry. Please try again.';
    showStatus('❌ Error: ' + errMsg, 'error');
    
    if (btn) {
      btn.disabled = false;
      btn.innerHTML = '⚡ Send Inquiry';
    }
  });
}

// Show Status Message
function showStatus(message, type) {
  const status = document.getElementById('form-status');
  if (!status) return;
  
  status.textContent = message;
  status.className = 'form-status show ' + type;
  
  // Auto-hide after 5 seconds for success messages
  if (type === 'success') {
    setTimeout(function() {
      status.classList.remove('show');
    }, 5000);
  }
}
