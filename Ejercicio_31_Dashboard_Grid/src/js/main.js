document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');
    const dashboard = document.querySelector('.dashboard');
    
    if (menuToggle && sidebar) {
        menuToggle.addEventListener('click', function() {
            dashboard.classList.toggle('sidebar--oculto');
            
            // Para móvil
            if (window.innerWidth <= 768) {
                sidebar.classList.toggle('active');
            }
        });
    }
    
    // Ajustar para móvil
    window.addEventListener('resize', function() {
        if (window.innerWidth <= 768) {
            dashboard.classList.remove('sidebar--oculto');
        }
    });
});