// Ejercicio 28: ES6+

const container = document.getElementById("resultado");

// 1. Arrow Function
const saludar = (nombre) => `Hola ${nombre}`;
console.log(saludar("Mundo"));

// Array de usuarios
const usuarios = [
    { id: 1, nombre: "Ana", rol: "Admin" },
    { id: 2, nombre: "Carlos", rol: "User" },
    { id: 3, nombre: "Bea", rol: "Editor" },
    { id: 4, nombre: "David", rol: "Admin" }
];

// 2. Filter para encontrar admins
const admins = usuarios.filter(usuario => usuario.rol === "Admin");
console.log("Admins:", admins);

// 3. Renderizar con template literals y map
if (container) {
    container.innerHTML = `
        <h2>Lista de Usuarios</h2>
        <ul>
            ${usuarios.map(u => `
                <li class="${u.rol === "Admin" ? "admin" : ""}">
                    <strong>${u.nombre}</strong> - Rol: ${u.rol} (ID: ${u.id})
                </li>
            `).join("")}
        </ul>
        <h3>Administradores (${admins.length})</h3>
        <ul>
            ${admins.map(a => `<li>✅ ${a.nombre}</li>`).join("")}
        </ul>
    `;
}

// Ejemplos adicionales
console.log("--- OTROS EJEMPLOS ES6+ ---");
console.log("Template string:", `Usuario: ${usuarios[0].nombre}`);
console.log("Destructuring:", usuarios.map(({ nombre, rol }) => `${nombre}: ${rol}`));
