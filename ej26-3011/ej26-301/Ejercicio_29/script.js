document.addEventListener("DOMContentLoaded", () => {
    console.log("Tabs inicializado");
    
    const tabs = document.querySelectorAll(".tab-btn");
    const paneles = document.querySelectorAll(".tab-pane");
    
    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            // Quitar active de todos
            tabs.forEach(t => t.classList.remove("active"));
            paneles.forEach(p => p.classList.remove("active"));
            
            // Activar el clickeado
            tab.classList.add("active");
            const target = document.getElementById(tab.dataset.target);
            if (target) target.classList.add("active");
            
            console.log("Pestaña activada:", tab.textContent);
        });
    });
});
