# Ejercicio 34: Lector de Noticias (XML + XSD + JS Moderno)

## Objetivo
Cargar un archivo simulado de noticias (Feed XML equivalente a un RSS de un blog) y pintar la información usando JavaScript y técnicas avanzadas de CSS compiladas con SASS y Gulp.

## Instrucciones
1. Crea un fichero XML eed.xml que contenga elementos de articulo (<item>) con <title>, <description>, <pubDate>, <author> y un atributo category.
2. Escribe el esquema XSD correspondiente para el XML asegurando los tipos.
3. Configura Gulp para minificar y procesar estilos.
4. Mediante la API local etch y sync / await en JS, carga eed.xml.
5. Itera sobre las noticias usando orEach en JavaScript y transfórmalos en elementos HTML (<article>) para el contenedor principal de la web.
6. Añade clases dinámicamente y da un estilo en SCSS apoyándote en mixins. Por ejemplo, define un mixin para sombras en las tarjetas @mixin box-shadow().
