
// Warte bis das DOM vollständig geladen ist
document.addEventListener('DOMContentLoaded', function() {
    // Kontakt-Buttons Funktionen
    const contactBtn = document.getElementById('contact-btn');
    const heroContactBtn = document.getElementById('hero-contact-btn');
    const contactSection = document.getElementById('contact');
    
    if (contactBtn && contactSection) {
        contactBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Bewerben Button geklickt');
            contactSection.style.display = 'block';
            contactSection.scrollIntoView({ behavior: 'smooth' });
        });
    }
    
    if (heroContactBtn && contactSection) {
        heroContactBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Hero Bewerben Button geklickt');
            contactSection.style.display = 'block';
            contactSection.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Email Popup Funktionen
    const toggleEmail = document.getElementById('toggle-email');
    const emailPopup = document.getElementById('email-popup');
    const closeBtn = document.querySelector('.close-btn');
    
    if (toggleEmail && emailPopup) {
        toggleEmail.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Kontakt Button geklickt');
            emailPopup.classList.add('visible');
        });
    }
    
    if (closeBtn && emailPopup) {
        closeBtn.addEventListener('click', function() {
            emailPopup.classList.remove('visible');
        });
    }

    // Klick außerhalb des Popups schließt es
    if (emailPopup) {
        emailPopup.addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.remove('visible');
            }
        });
    }

    // Navbar Link Smooth Scroll
    document.querySelectorAll('.nav-links a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    console.log('JavaScript geladen und initialisiert');
});
