const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.textContent = isOpen ? '✕' : '☰';
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.textContent = '☰';
      navLinks.querySelectorAll('a').forEach((item) => item.classList.remove('active'));
      link.classList.add('active');
    });
  });
}

document.getElementById('year').textContent = new Date().getFullYear();


// Contact form opens the visitor's email application with the message filled in.
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('fullName').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();
    const recipient = 'tyzenemiles15@gmail.com';
    const body = `Name: ${name}\nEmail: ${email}\nMobile Phone: ${phone || 'Not provided'}\n\nMessage:\n${message}`;
    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  });
}
