// Ejercicio 22: Eventos y Clases

// 1. Selecciona el botón del menú, el botón de cerrar y el menú lateral
const toggleMenuBTn=document.getElementById('toggleMenu');
const closeMenuBtn=document.getElementById('closeMenu');
const menuLateral=document.getElementById('menuLateral');
// 2. Define una función 'toggleMenu' que:
//    - Use classList.toggle('hidden') en el menú
function toggleMenu(){
    menuLateral.classList.toggle('hidden');
    if(menuLateral.classList.contains('hidden')){
        toggleMenuBTn.textContent='Abrir Menu';
    }else{
        toggleMenuBTn.textContent='Cerrar Menu';
    }
}

// 3. Agrega los Event Listeners a los botones para llamar a esa función
toggleMenuBTn.addEventListener('click',toggleMenu);
closeMenuBtn.addEventListener('click',toggleMenu);