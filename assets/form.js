const contactForm = document.querySelector('#contactForm');
const emailInput = document.querySelector('#email');
const sendEmail = document.querySelector('.sendEmail');
const errorEmail = document.querySelector('.errorEmail');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Empêche le rechargement de la page

    sendEmail.style.display = 'block';

    /*// Vérifier l'adresse email
    if (!(emailInput)) {
        errorEmail.style.display = 'block';
        sendEmail.style.display = 'none';
        return; // Empêche l'envoi du formulaire
    } else {
        errorEmail.style.display = 'none';
        sendEmail.style.display = 'block';
    }*/

    // Reset du formulaire à l'envoi
    contactForm.reset();
});