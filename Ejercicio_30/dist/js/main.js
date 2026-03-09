// Menú hamburguesa
document.addEventListener("DOMContentLoaded", () => {
    console.log("🚀 Landing inicializada");
    
    const burger = document.querySelector(".burger");
    const navLinks = document.querySelector(".nav-links");
    const navItems = document.querySelectorAll(".nav-links a");
    const ctaBtn = document.querySelector(".cta-btn");
    
    // Toggle menú hamburguesa
    if (burger && navLinks) {
        burger.addEventListener("click", () => {
            navLinks.classList.toggle("active");
            burger.classList.toggle("active");
        });
    }
    
    // Cerrar menú al hacer click en un enlace
    navItems.forEach(item => {
        item.addEventListener("click", (e) => {
            e.preventDefault();
            
            // Cerrar menú
            if (navLinks) navLinks.classList.remove("active");
            if (burger) burger.classList.remove("active");
            
            // Scroll suave
            const targetId = item.getAttribute("href");
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 70,
                    behavior: "smooth"
                });
            }
        });
    });
    
    // Botón CTA
    if (ctaBtn) {
        ctaBtn.addEventListener("click", () => {
            alert("👋 ¡Ejercicio 30 completado correctamente!\n\nLa automatización con Gulp funciona.");
        });
    }
    
    // Detectar scroll para cambiar estilo del navbar
    window.addEventListener("scroll", () => {
        const navbar = document.querySelector(".navbar");
        if (window.scrollY > 100) {
            navbar.style.background = "#1a252f";
        } else {
            navbar.style.background = "#2c3e50";
        }
    });
    
    console.log("✅ Landing lista");
});
