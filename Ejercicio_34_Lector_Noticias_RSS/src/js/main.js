document.addEventListener('DOMContentLoaded', function() {
    cargarNoticias();
    mostrarFechaActual();
});

// Función asíncrona para cargar noticias (async/await)
async function cargarNoticias() {
    const contenedor = document.getElementById('noticias');
    const cargando = document.getElementById('cargando');
    const error = document.getElementById('error');
    
    try {
        // Mostrar spinner de carga
        cargando.style.display = 'flex';
        error.style.display = 'none';
        
        // Usando async/await para cargar el XML
        const respuesta = await fetch('feed.xml');
        
        if (!respuesta.ok) {
            throw new Error('Error al cargar el feed');
        }
        
        const textoXML = await respuesta.text();
        
        // Parsear el XML
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(textoXML, 'text/xml');
        
        // Verificar si hay errores de parseo
        const parseError = xmlDoc.getElementsByTagName('parsererror');
        if (parseError.length > 0) {
            throw new Error('Error al parsear el XML');
        }
        
        // Obtener items del feed
        const items = xmlDoc.getElementsByTagName('item');
        
        // Pequeña pausa para mostrar el spinner (efecto visual)
        await new Promise(resolve => setTimeout(resolve, 800));
        
        // Ocultar spinner y mostrar noticias
        cargando.style.display = 'none';
        
        if (items.length === 0) {
            contenedor.innerHTML = '<p class="no-noticias">No hay noticias disponibles</p>';
            return;
        }
        
        // Renderizar noticias
        renderizarNoticias(items);
        
    } catch (error) {
        console.error('Error:', error);
        cargando.style.display = 'none';
        error.style.display = 'flex';
    }
}

// Función para renderizar noticias
function renderizarNoticias(items) {
    const contenedor = document.getElementById('noticias');
    contenedor.innerHTML = '';
    
    // Convertir HTMLCollection a Array
    Array.from(items).forEach(item => {
        // Extraer datos del XML
        const titulo = item.getElementsByTagName('title')[0]?.textContent || 'Sin título';
        const descripcion = item.getElementsByTagName('description')[0]?.textContent || 'Sin descripción';
        const fecha = item.getElementsByTagName('pubDate')[0]?.textContent || 'Fecha desconocida';
        const autor = item.getElementsByTagName('author')[0]?.textContent || 'Autor desconocido';
        const categoria = item.getElementsByTagName('category')[0]?.textContent || 'General';
        
        // Formatear fecha
        const fechaFormateada = formatearFecha(fecha);
        
        // Crear tarjeta de noticia
        const noticia = document.createElement('article');
        noticia.className = 'noticia';
        noticia.innerHTML = `
            <div class="noticia__contenido">
                <span class="noticia__categoria">${categoria}</span>
                <h2 class="noticia__titulo">${titulo}</h2>
                <p class="noticia__descripcion">${descripcion}</p>
                <div class="noticia__meta">
                    <span class="noticia__autor">${autor}</span>
                    <span class="noticia__fecha">${fechaFormateada}</span>
                </div>
            </div>
        `;
        
        contenedor.appendChild(noticia);
    });
}

// Función para formatear fecha
function formatearFecha(fecha) {
    try {
        const opciones = { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        };
        const fechaObj = new Date(fecha);
        return fechaObj.toLocaleDateString('es-ES', opciones);
    } catch (error) {
        return fecha;
    }
}

// Función para mostrar fecha actual en el footer
function mostrarFechaActual() {
    const fechaElement = document.getElementById('fechaActual');
    const hoy = new Date();
    const opciones = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    fechaElement.textContent = hoy.toLocaleDateString('es-ES', opciones);
}

// Función para recargar noticias manualmente
window.recargarNoticias = function() {
    cargarNoticias();
};

// Agregar evento al teclado (tecla R para recargar)
document.addEventListener('keydown', function(e) {
    if (e.key === 'r' || e.key === 'R') {
        cargarNoticias();
    }
});