// Hamburger menu toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Smooth scroll and close menu on link click
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
});

// Typewriter effect for intro text
const introText = "I build cool websites and solve problems with code!";
let i = 0;
function typeWriter() {
  if (i < introText.length) {
    document.getElementById('intro-text').textContent += introText.charAt(i);
    i++;
    setTimeout(typeWriter, 70);
  }
}
window.onload = typeWriter;

// --- SIDE DRAWER FOR PROJECTS ---
const drawer = document.getElementById('side-drawer');
const drawerTitle = document.getElementById('drawer-title');
const drawerDesc = document.getElementById('drawer-desc');
const drawerLink = document.getElementById('drawer-link');
const drawerImg = document.getElementById('drawer-img');
const drawerClose = document.getElementById('drawer-close');

document.querySelectorAll('.open-modal-btn').forEach(button => {
  button.addEventListener('click', (e) => {
    const card = e.target.closest('.project-card');
    drawerTitle.textContent = card.getAttribute('data-title');
    drawerDesc.textContent = card.getAttribute('data-desc');
    drawerLink.href = card.getAttribute('data-link');
    drawerImg.src = card.getAttribute('data-img');
    drawer.classList.add('active');
  });
});

drawerClose.addEventListener('click', () => {
  drawer.classList.remove('active');
});

// Close drawer when clicking outside
window.addEventListener('click', (e) => {
  if (e.target === drawer) {
    drawer.classList.remove('active');
  }
});

// --- BULLETPROOF MAILTO CONTACT FORM ---
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = contactForm.querySelector('input[name="name"]').value;
    const email = contactForm.querySelector('input[name="email"]').value;
    const message = contactForm.querySelector('textarea[name="message"]').value;
    
    const subject = encodeURIComponent("Portfolio Inquiry from " + name);
    const body = encodeURIComponent("Name: " + name + "\nEmail: " + email + "\n\nMessage:\n" + message);
    
    // This will force the email app to open with the details pre-filled
    window.location.href = "mailto:aggarwalananya602@gmail.com?subject=" + subject + "&body=" + body;
    
    // Optional: Clear form after a delay
    setTimeout(() => contactForm.reset(), 1000);
  });
}