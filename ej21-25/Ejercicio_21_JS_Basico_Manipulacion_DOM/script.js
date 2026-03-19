// Ejercicio 21: Manipulación del DOM

// 1. Selecciona la caja (id="miCaja")
const caja = document.getElementById('miCaja');

// 2. Selecciona los botones
const btnColor = document.getElementById('btnColor');
const btnTexto = document.getElementById('btnTexto');
const btnAgregar = document.getElementById('btnAgregar');

// 3. Agrega funcionalidad al botón de color (click)
//    - Cambia el color de fondo de la caja
btnColor.addEventListener('click', () => {
    caja.style.backgroundColor = 'purple';
});

// 4. Agrega funcionalidad al botón de texto (click)
//    - Cambia el texto interno de la caja
btnTexto.addEventListener('click', () => {
    caja.innerHTML = 'Hola JS';
    
});

// 5. Agrega funcionalidad al botón de agregar (click)
//    - Crea un nuevo elemento li
//    - Agrégalo a la lista ul
btnAgregar.addEventListener('click', () => {
   
    const lista = document.getElementById('lista');
    
    const nuevoElemento = document.createElement('li');
    
 
    nuevoElemento.innerHTML = `Elemento ${lista.children.length + 1}`;
   
    
   
    lista.appendChild(nuevoElemento);
});