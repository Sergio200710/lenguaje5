document.addEventListener('DOMContentLoaded', () => {
    const buscador = document.getElementById('buscador');
    const contenedor = document.getElementById('contenedor');
    const contador = document.getElementById('contador');
    const noResultados = document.getElementById('noResultados');
    
    let peliculas = [];
    
    // Cargar XML
    async function cargarPeliculas() {
        try {
            const respuesta = await fetch('datos.xml');
            const texto = await respuesta.text();
            
            const parser = new DOMParser();
            const xml = parser.parseFromString(texto, 'text/xml');
            
            const items = xml.getElementsByTagName('pelicula');
            
            peliculas = Array.from(items).map(item => ({
                id: item.getAttribute('id'),
                titulo: item.getElementsByTagName('titulo')[0]?.textContent || '',
                director: item.getElementsByTagName('director')[0]?.textContent || '',
                anyo: item.getElementsByTagName('anyo')[0]?.textContent || '',
                genero: item.getElementsByTagName('genero')[0]?.textContent || ''
            }));
            
            mostrarPeliculas(peliculas);
            
        } catch (error) {
            console.error('Error:', error);
            contenedor.innerHTML = '<p style="color: red;">Error al cargar</p>';
        }
    }
    
    // Mostrar películas
    function mostrarPeliculas(lista) {
        contenedor.innerHTML = '';
        contenedor.className = 'peliculas-grid';
        
        if (lista.length === 0) {
            noResultados.style.display = 'block';
        } else {
            noResultados.style.display = 'none';
        }
        
        lista.forEach(p => {
            const div = document.createElement('div');
            div.className = 'pelicula';
            div.innerHTML = `
                <div class="pelicula__id">#${p.id}</div>
                <h3 class="pelicula__titulo">${p.titulo}</h3>
                <div class="pelicula__director">${p.director}</div>
                <div class="pelicula__anyo">${p.anyo}</div>
                <div class="pelicula__genero">${p.genero}</div>
            `;
            contenedor.appendChild(div);
        });
        
        contador.textContent = `${lista.length} ${lista.length === 1 ? 'película' : 'películas'}`;
    }
    
    // Filtrar
    function filtrar() {
        const texto = buscador.value.toLowerCase();
        
        if (texto === '') {
            mostrarPeliculas(peliculas);
            return;
        }
        
        const filtradas = peliculas.filter(p => 
            p.titulo.toLowerCase().includes(texto)
        );
        
        mostrarPeliculas(filtradas);
    }
    
    // Eventos
    buscador.addEventListener('input', filtrar);
    
    // Iniciar
    cargarPeliculas();
});