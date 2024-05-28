let contactForm = document.querySelector('#contactForm');
let emailInput = document.querySelector('#email');
const emailError = document.querySelector('.emailError .error');
const sendEmail = document.querySelector('.sendEmail');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Empêche le rechargement de la page

    const email = emailInput.value;

    // Vérifier l'adresse email
    if (!validateEmail(email)) {
        emailInput.classList.add('errorEmail');
        sendEmail.style.display = 'none';
        return; // Empêche l'envoi du formulaire
    } else {
        emailInput.classList.remove('errorEmail');
        sendEmail.style.display = 'block';
    } 
    console.log(emailInput)

    // Reset du formulaire à l'envoi
    contactForm.reset();
});


function validateEmail(email) {
    const verification = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return verification.test(String(email).toLowerCase());
}