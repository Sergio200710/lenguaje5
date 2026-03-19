// Menú hamburguesa
document.addEventListener("DOMContentLoaded", () => {
    console.log("Landing inicializada");
    
    const burger = document.querySelector(".burger");
    const navLinks = document.querySelector(".nav-links");
    
    if (burger && navLinks) {
        burger.addEventListener("click", () => {
            navLinks.classList.toggle("active");
            burger.classList.toggle("toggle");
        });
    }
    
    // Smooth scroll para los enlaces
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
    // Botón CTA
    const ctaBtn = document.querySelector(".cta-btn");
    if (ctaBtn) {
        ctaBtn.addEventListener("click", () => {
            alert("¡Bienvenido a la automatización con Gulp!");
        });
    }
});
