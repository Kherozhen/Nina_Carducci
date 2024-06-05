const contactForm = document.querySelector('#contactForm');
const emailInput = document.querySelector('#email');
const sendEmail = document.querySelector('.sendEmail');
const errorEmail = document.querySelector('.errorEmail');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Empêche le rechargement de la page

    sendEmail.style.display = 'block';

    contactForm.reset();
});