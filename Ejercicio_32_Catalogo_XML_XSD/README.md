# Ejercicio 32: Catálogo de Productos con XML y XSD

## Objetivo
Trabajar con la definición de datos mediante XML y establecer restricciones estructuradas (Schemas) con XSD. Integrar **JavaScript** para leer y renderizar dicha información, estilizándola con SCSS e integrando Gulp.

## Instrucciones
1. En la carpeta del proyecto, crea un archivo productos.xml con un catálogo de al menos 5 productos (cada uno debe tener id, nombre, precio, descripción, categoría).
2. Crea productos.xsd para validar rigurosamente la estructura del XML (tipos de datos, elementos obligatorios y atributos).
3. Configura Gulp para que compile un archivo principal style.scss.
4. En main.js, utiliza la API etch() nativa para leer el archivo productos.xml.
5. Extrae la información usando DOMParser de JavaScript y genera dinámicamente tarjetas HTML (divs) por cada producto, inyectándolas en el DOM mediante manipulación de nodos.
6. Aplica estilos con SASS para hacer que la cuadrícula de productos sea responsiva.
