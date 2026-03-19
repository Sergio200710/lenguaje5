document.addEventListener('DOMContentLoaded', function() {
    // Obtener elementos del formulario
    const form = document.getElementById('formRegistro');
    const usuario = document.getElementById('usuario');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const telefono = document.getElementById('telefono');
    const btnSubmit = document.getElementById('btnSubmit');
    const estadoFormulario = document.getElementById('estadoFormulario');
    
    // Expresiones regulares
    const regex = {
        usuario: /^[a-zA-Z0-9]{3,}$/, // Mínimo 3 caracteres, solo letras y números
        email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // Formato básico de email
        password: /^(?=.*[A-Z])(?=.*\d).{8,}$/, // Mínimo 8 caracteres, 1 mayúscula, 1 número
        telefono: /^\d{9}$/ // Exactamente 9 dígitos
    };
    
    // Objeto para trackear validaciones
    const validaciones = {
        usuario: false,
        email: false,
        password: false,
        confirm: false,
        telefono: false
    };
    
    // Función para validar campo
    function validarCampo(input, regex, errorId, tipo) {
        const valor = input.value.trim();
        const errorElement = document.getElementById(errorId);
        let esValido = false;
        
        if (tipo === 'confirm') {
            esValido = valor === password.value && valor !== '';
        } else {
            esValido = regex.test(valor);
        }
        
        if (esValido) {
            input.classList.remove('invalido');
            input.classList.add('valido');
            errorElement.classList.remove('visible');
        } else {
            input.classList.remove('valido');
            input.classList.add('invalido');
            errorElement.classList.add('visible');
        }
        
        return esValido;
    }
    
    // Función para actualizar estado del botón
    function actualizarBoton() {
        const todosValidos = Object.values(validaciones).every(v => v === true);
        btnSubmit.disabled = !todosValidos;
        
        if (todosValidos) {
            estadoFormulario.textContent = '✅ Todos los campos son válidos';
            estadoFormulario.classList.remove('estado-invalido');
            estadoFormulario.classList.add('estado-valido');
        } else {
            estadoFormulario.textContent = '❌ Complete todos los campos correctamente';
            estadoFormulario.classList.remove('estado-valido');
            estadoFormulario.classList.add('estado-invalido');
        }
    }
    
    // Event listeners para cada campo
    usuario.addEventListener('input', function() {
        validaciones.usuario = validarCampo(usuario, regex.usuario, 'errorUsuario');
        actualizarBoton();
    });
    
    email.addEventListener('input', function() {
        validaciones.email = validarCampo(email, regex.email, 'errorEmail');
        actualizarBoton();
    });
    
    password.addEventListener('input', function() {
        validaciones.password = validarCampo(password, regex.password, 'errorPassword');
        
        // Si hay algo en confirmar, validarlo de nuevo
        if (confirmPassword.value !== '') {
            validaciones.confirm = validarCampo(confirmPassword, null, 'errorConfirm', 'confirm');
        }
        actualizarBoton();
    });
    
    confirmPassword.addEventListener('input', function() {
        validaciones.confirm = validarCampo(confirmPassword, null, 'errorConfirm', 'confirm');
        actualizarBoton();
    });
    
    telefono.addEventListener('input', function() {
        validaciones.telefono = validarCampo(telefono, regex.telefono, 'errorTelefono');
        actualizarBoton();
    });
    
    // Validar al perder el foco (blur)
    usuario.addEventListener('blur', function() {
        validarCampo(usuario, regex.usuario, 'errorUsuario');
    });
    
    email.addEventListener('blur', function() {
        validarCampo(email, regex.email, 'errorEmail');
    });
    
    password.addEventListener('blur', function() {
        validarCampo(password, regex.password, 'errorPassword');
    });
    
    telefono.addEventListener('blur', function() {
        validarCampo(telefono, regex.telefono, 'errorTelefono');
    });
    
    // Enviar formulario
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (!btnSubmit.disabled) {
            alert('¡Formulario enviado con éxito!\n\nDatos registrados:\n' +
                  `Usuario: ${usuario.value}\n` +
                  `Email: ${email.value}\n` +
                  `Teléfono: ${telefono.value}`);
            
            // Resetear formulario
            form.reset();
            
            // Limpiar clases y validaciones
            document.querySelectorAll('input').forEach(input => {
                input.classList.remove('valido', 'invalido');
            });
            
            // Resetear objeto de validaciones
            Object.keys(validaciones).forEach(key => validaciones[key] = false);
            
            // Ocultar mensajes de error
            document.querySelectorAll('.form__error').forEach(error => {
                error.classList.remove('visible');
            });
            
            actualizarBoton();
        }
    });
    
    // Validar campos al cargar la página
    function validarCamposIniciales() {
        validaciones.usuario = validarCampo(usuario, regex.usuario, 'errorUsuario');
        validaciones.email = validarCampo(email, regex.email, 'errorEmail');
        validaciones.password = validarCampo(password, regex.password, 'errorPassword');
        validaciones.telefono = validarCampo(telefono, regex.telefono, 'errorTelefono');
        if (confirmPassword.value !== '') {
            validaciones.confirm = validarCampo(confirmPassword, null, 'errorConfirm', 'confirm');
        }
        actualizarBoton();
    }
    
    // Llamar a validación inicial después de un pequeño retraso
    setTimeout(validarCamposIniciales, 100);
});