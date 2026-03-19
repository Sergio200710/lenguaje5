# Guía Detallada de Ejercicios - PARTE 04

¡Bienvenido a la Parte 04! Esta serie de ejercicios está diseñada para subir el nivel y mezclar todas las tecnologías front-end que hemos ido viendo, con especial énfasis en la automatización de tareas y la carga de datos externos con un formato estructurado.

**Tecnologías a utilizar:**
- **Maquetación:** HTML5 (Semántico)
- **Estilos:** SCSS / SASS y CSS Grid
- **Automatización:** Node.js, `npm`, y **Gulp** (`gulp-sass`, entre otros módulos)
- **Lógica e Interacción:** JavaScript (ES6+, DOM, `fetch()`, Regex)
- **Datos y Validación:** XML, XSD (XML Schema Definition)

A continuación, se detalla paso a paso lo que se espera en cada ejercicio.

---

## Ejercicio 31: Dashboard con Grid y SCSS
**Directorio:** `Ejercicio_31_Dashboard_Grid/`

**Descripción:**
En este ejercicio crearás la estructura tipo "Panel de Control" o Dashboard. El objetivo principal es afianzar el uso de **CSS Grid** para la disposición de zonas a nivel de página (Layout) y dominar el flujo de trabajo de compilación de SCSS con Gulp.

**Pasos detallados a seguir:**
1. **Inicialización y Dependencias:**
   - Abre la terminal en la carpeta del ejercicio.
   - Ejecuta `npm init -y` para crear el archivo `package.json`.
   - Instala las dependencias necesarias de Gulp: `npm install --save-dev gulp gulp-sass sass`.
2. **Configuración de Gulp:**
   - Escribe un archivo `gulpfile.js` que defina al menos una tarea (`task`) para tomar el archivo principal SCSS (`src/scss/style.scss`), compilarlo a CSS puro usando el módulo `sass`, y soltar el resultado en una carpeta pública (`dist/css/`).
   - Añade una tarea `watch` para que Gulp observe los cambios y compile automáticamente en cuanto guardes tu código.
3. **Estructura HTML:**
   - Crea un `index.html`. Debes definir semánticamente al menos 3 áreas principales:
     - Un `<aside>` para la barra lateral (Sidebar) con opciones de menú.
     - Un `<header>` situado en la parte superior.
     - Un `<main>` para el contenido, divídido internamente en varias "tarjetas" o *cards* usando `div`s o `<article>`.
4. **Estilos y Layout con Grid (SCSS):**
   - Usa un contenedor padre y aplícale `display: grid;`. Configura las áreas (puedes usar `grid-template-areas` o dividir por filas/columnas explícitas).
   - Usa SCSS para definir variables de colores (por ejemplo `$color-primario`, `$bg-oscuro`) y aprovecha el anidamiento y la sintaxis más limpia respecto a CSS estándar.
5. **Interactividad con JS:**
   - Añade un botón en el Header que actúe como "hamburguesa".
   - En `src/js/main.js` (o directamente compilado), selecciona el botón y el Sidebar, y utiliza `addEventListener('click')` para añadir o quitar (`classList.toggle()`) una clase modificadora de SASS (ej. `.sidebar--oculto`) que encoja o esconda el menú.

---

## Ejercicio 32: Catálogo de Productos con XML y XSD
**Directorio:** `Ejercicio_32_Catalogo_XML_XSD/`

**Descripción:**
Se busca integrar una pequeña base de datos basada puramente en ficheros XML. Además de estructurar el XML, redactaremos un XSD para establecer las reglas estrictas de qué datos puede o no puede contener, y lo consumiremos renderizando su contenido en pantalla web a través de manipulación de DOM.

**Pasos detallados a seguir:**
1. **Creación y Validación de los Datos:**
   - Crea un fichero `productos.xml` con un elemento raíz `<catalogo>`. Dentro, debes incluir al menos 5 elementos `<producto>`.
   - Cada producto debe tener: un atributo `id`, y los literales o nodos hijo `<nombre>`, `<precio>`, `<descripcion>`, y `<categoria>`.
   - Escribe un fichero `productos.xsd` que exija fuertemente que el ID sea numérico (o un formato de string definido), que el precio sea de un tipo de dato decimal, y que defina un número máximo de componentes en caso de ser necesario.
   - *(Opcional)* Ayúdate de alguna extensión del entorno para asegurar que tu XML cumple las reglas validadas en el XSD que has descrito.
2. **Entorno Front y Gulp:**
   - Como en el anterior, instala tus dependencias SCSS/Gulp para preparar tus estilos.
   - Crea el esqueleto base HTML `index.html`. Crea un `<div id="contenedor-productos">` vacío.
3. **Consumo de datos en JS (Fetch & DOMParser):**
   - Crea el archivo `main.js`.
   - Mediante la API de JS nativa `fetch("productos.xml")`, obtén el texto (`.text()`) del fichero XML.
   - Utiliza la clase `DOMParser` de Javascript para transformar esa gigantesca cadena de texto literal en un objeto estructurado tipo XML/HTML y poder navegarlo con métodos como `.getElementsByTagName()`.
   - Mediante un bucle `for` o `Array.from().forEach()`, itera todos los productos. Por cada producto extrae sus datos y genera dinámicamente un nodo div, párrafo, o lo que haga falta mediante `document.createElement()` e inyéctales el contenido. Hazle *append* finalmente a tu contenedor principal del `#contenedor-productos`.

---

## Ejercicio 33: Formulario Interactivo y Validaciones Avanzadas
**Directorio:** `Ejercicio_33_Formulario_Avanzado/`

**Descripción:**
La validación de formularios pura y dura en el Frontend antes de cualquier envío (Submit). Utilizaremos expresiones regulares potentes de JavaScript y haremos que SASS responda de manera fluida y elegante ante errores visuales (bordes rojos, animaciones u opacidad condicional basado en las clases devueltas por el Javascript).

**Pasos detallados a seguir:**
1. **Estructura Form HTML:**
   - HTML de un registro clásico, pero usando componentes bien separados (Un label junto con su input metidos en un div de envoltorio).
   - Necesitamos los siguientes inputs: Nombre de usuario, Correo Electrónico (`type="text"` en este caso temporal para que fuerces tú obligatoriamente la regex), Contraseña, Repetir Contraseña y Teléfono. Debajo de cada input, un `<span class="mensaje-error">` oculto por defecto para mostrar las notificaciones pertinentes.
2. **Setup Gulp y SCSS form:**
   - Sigue practicando e implementa tu Gulpfile de compilación.
   - Elabora distintos mixins o módulos para campos correctos `.is-valid` y erróneos `.is-invalid`. Por ejemplo, en error: borde carmesí y añadir un icono `X` o una sombra difusa coloreada.
3. **Lógica de Validación RegEx:**
   - Para este ejercicio se exige un script de validación que use `Expresiones Regulares`.
   - Crea un objeto asociativo que contenga las diferentes expresiones.
     - Correo: Que obligue caracteres, un `@` explícito y un formato final `.` seguido de 2 o 3 letras.
     - Contraseña: Mínimo de 8 caracteres.
     - Teléfono: Solo y exclusivo números del 0-9 con formato (ej. 9 dígitos estricto).
   - Debes iterar una serie de escuchadores en JavaScript mediante el evento `keyup` (cada tecla) o `blur` (en cuanto pierde el foco el elemento pulsado).
   - Compara el texto de dentro `.value` con `.test()` u `.match()` contra la RegEx que toque. En base al resultado, debes borrar y poner la clase válida/inválida de manera consecuente.

---

## Ejercicio 34: Lector de Noticias RSS (XML y Async/Await)
**Directorio:** `Ejercicio_34_Lector_Noticias_RSS/`

**Descripción:**
Una variante del ejercicio 32. Los Feeds RSS de los blogs de noticias históricamente son entregados en una estructura de sindicación basada en XML. Vas a simular consumir un Feed de noticias usando una sintaxis Javascript ES6 más actual como es `async / await` en lugar de *Promesas/Then*, centrándote también en un aspecto visual muy cuidado.

**Pasos detallados a seguir:**
1. **Datos XML y XSD:**
   - Forma el set de datos en `feed.xml`. El XML debería simular un blog de la vida real. Debe contener un bloque principal estilo `<rss><channel>`. Dentro, muchos artículos presentados como `<item>`.
   - Cada Item cuenta como mínimo con: Título, Autor, Fecha de Publicación y Descripción.
   - Construye el `feed.xsd` que valida los datos, prestando especial cuidado a imponer reglas en la fecha si quieres explorar tipos complejos.
2. **Gulp + Compilación SCSS:**
   - Revalida de nuevo tus pasos Gulp. No pares de habituarte a construir esta secuencia. En el SASS puedes meter funciones que manipulen opacidades e intentar jugar con mixins con variables de paso.
3. **Llamadas Asíncronas JS:**
   - Esta vez no uses la concatenación basada en Promisiones `.then()`. Te lo pedimos usando variables de obtención asíncrona explícita:
     ```javascript
     async function traerNoticias() {
         const respuesta = await fetch("feed.xml");
         const texto = await respuesta.text();
         // Parsear texto a nodo DOM XML...
     }
     ```
   - Construye la cuadrícula de artículos inyectándosela al DOM. Usa una disposición Grid o Flexbox, y formátala de lujo como un periódico real de noticias modernas.

---

## Ejercicio 35: Proyecto Integrador Final Parte 04
**Directorio:** `Ejercicio_35_Proyecto_Final_Parte4/`

**Descripción:**
La culminación del bloque Parte 4. Este ejercicio evaluará que puedas reunir las 5 tecnologías aprendidas (HTML, SCSS jerárquico, JS Moderno, Fetch+XML y Gulp avanzado). Tu desafío consistirá en montar una pequeña Single Page Application (SPA), en el cual el alumno o usuario puede buscar por teclado filtrando sobre un volcado inicial de datos consumidos de un archivo de base de datos XML.

**Pasos detallados a seguir:**
1. **La Estructura y Gulp:**
   - Tienes que desplegar un `gulpfile.js` más amplio. Una tarea para compilar SASS, pero también sería conveniente incorporar algún minificador CSS para producción (ej. `gulp-clean-css`) y automatizar un vigilante (`watch`).
   - El SASS no puede ser un solo archivo. Debes separarlo de acuerdo a metodologías como *"Sass 7-1 pattern"* de manera superficial: ten una carpeta para variables, otra de reset base, otra de layout... e importa todos en un único `main.scss`.
2. **Los datos Base (XML / XSD):**
   - Una temática (Catálogo de Vehículos, Videoclub de Películas o Gestor de Reservas por ejemplo). Forma `datos.xml` y garantízalo con un robusto o completo `schema.xsd`.
3. **El Volcado JS (`fetch` + `ES6`):**
   - Importa todos los elementos leyendo el fichero y montando la maquetación.
4. **Funcionalidad clave (Filtrado Básico):**
   - Introduce un buscador general encima de las tarjetas. Modela en JS que, ante cada modificación del teclado (`input` event), lea el string buscado, mire contra todos los títulos o descripciones en los nodos HTML correspondientes y en base a `.includes()`, decidas aplicar la vista condicional estilo `display: none` / `display: inline-block`, para simular una búsqueda en tiempo real dentro de todo tu contenido procesado.
   - El diseño de la interfaz debe de encontrarse totalmente libre pero sumamente pulido y actual utilizando SASS como se estipuló al principio.

¡Mucha suerte con este bloque y a escribir código!
