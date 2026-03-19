document.addEventListener('DOMContentLoaded', function() {
    cargarProductos();
});

async function cargarProductos() {
    try {
        // Cargar el archivo XML
        const respuesta = await fetch('productos.xml');
        const textoXML = await respuesta.text();
        
        // Parsear el XML
        const parser = new DOMParser();
        const xml = parser.parseFromString(textoXML, 'text/xml');
        
        // Obtener todos los productos
        const productos = xml.getElementsByTagName('producto');
        
        // Mostrar los productos
        mostrarProductos(productos);
        
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('contenedor').innerHTML = 
            '<p style="color: red; text-align: center;">Error al cargar los productos</p>';
    }
}

function mostrarProductos(productos) {
    const contenedor = document.getElementById('contenedor');
    contenedor.innerHTML = '';
    
    // Convertir a array para poder usar forEach
    Array.from(productos).forEach(producto => {
        // Extraer datos
        const id = producto.getAttribute('id');
        const nombre = producto.getElementsByTagName('nombre')[0]?.textContent || 'Sin nombre';
        const precio = producto.getElementsByTagName('precio')[0]?.textContent || '0';
        const descripcion = producto.getElementsByTagName('descripcion')[0]?.textContent || 'Sin descripción';
        const categoria = producto.getElementsByTagName('categoria')[0]?.textContent || 'Sin categoría';
        
        // Crear tarjeta
        const tarjeta = document.createElement('div');
        tarjeta.className = 'producto';
        tarjeta.innerHTML = `
            <div class="producto__id">#${id}</div>
            <h3 class="producto__nombre">${nombre}</h3>
            <div class="producto__precio">$${parseFloat(precio).toFixed(2)}</div>
            <p class="producto__descripcion">${descripcion}</p>
            <span class="producto__categoria">${categoria}</span>
        `;
        
        contenedor.appendChild(tarjeta);
    });
}