# Ejercicio 33: Formulario Interactivo y Validaciones Avanzadas (JS + SCSS)

## Objetivo
Implementar un formulario de registro complejo con validaciones del lado del cliente utilizando JavaScript (expresiones regulares) y proporcionar retroalimentación visual al usuario utilizando SASS. Todo orquestado con Gulp.

## Instrucciones
1. Define en index.html un formulario con campos: Usuario, Correo, Contraseña, Confirmar Contraseña, y un campo de Teléfono.
2. Crea un archivo SASS específico para el formulario (ej. _form.scss) definiendo los estilos visuales en estado neutro, válido y con error. Usa variables para los colores verde (éxito) y rojo (error).
3. Asegúrate de tener un bloque de Gulp que compile todo el SASS.
4. En JavaScript, añade un escuchador de eventos (keyup o lur) a cada input para validarlo en tiempo real.
5. Usa expresiones regulares (Regex) para validar:
   - Que el correo tenga un formato válido.
   - Que la contraseña tenga al menos 8 caracteres, una mayúscula y un número.
   - Que la confirmación coincida.
6. Muestra u oculta mensajes de error dinámicamente en el DOM y colorea los bordes de los inputs según el resultado de la validación.
