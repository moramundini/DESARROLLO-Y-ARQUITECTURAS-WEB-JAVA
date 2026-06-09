const form = document.getElementById("formulario");

form.addEventListener("submit", function (e) {
    e.preventDefault(); 

    let ok = true;

    if (!validarNombre()) ok = false;
    if (!validarEmail()) ok = false;
    if (!validarPassword()) ok = false;
    if (!validarEdad()) ok = false;
    if (!validarTelefono()) ok = false;
    if (!validarDireccion()) ok = false;
    if (!validarCiudad()) ok = false;
    if (!validarCP()) ok = false;
    if (!validarDNI()) ok = false;
    if (!validarRepetirPassword()) ok = false;

    if (ok) {
        alert("Formulario enviado correctamente");
        form.submit();
    }
});

//Nombre
function validarNombre() {
    let valor = document.getElementById("nombre").value.trim();

    if (valor.length <= 6 || !valor.includes(" ")) {
        document.getElementById("errorNombre").textContent =
            "Nombre inválido (más de 6 letras y un espacio)";
        return false;
    }

    document.getElementById("errorNombre").textContent = "";
    return true;
}

//Mail
function validarEmail() {
    let valor = document.getElementById("email").value.trim();
    let regex = /\S+@\S+\.\S+/;

    if (!regex.test(valor)) {
        document.getElementById("errorEmail").textContent =
            "Email inválido";
        return false;
    }

    document.getElementById("errorEmail").textContent = "";
    return true;
}

//Contraseña
function validarPassword() {
    let valor = document.getElementById("password").value;

    let tieneLetras = /[a-zA-Z]/.test(valor);
    let tieneNumeros = /[0-9]/.test(valor);

    if (valor.length < 8 || !tieneLetras || !tieneNumeros) {
        document.getElementById("errorPassword").textContent =
            "Debe tener 8 caracteres, letras y números";
        return false;
    }

    document.getElementById("errorPassword").textContent = "";
    return true;
}

//Repetir contraseña
function validarRepetirPassword() {
    let pass = document.getElementById("password").value;
    let rep = document.getElementById("repetirPassword").value;

    if (pass !== rep) {
        document.getElementById("errorRepetir").textContent =
            "Las contraseñas no coinciden";
        return false;
    }

    document.getElementById("errorRepetir").textContent = "";
    return true;
}

//Edad
function validarEdad() {
    let valor = parseInt(document.getElementById("edad").value);

    if (isNaN(valor) || valor < 18) {
        document.getElementById("errorEdad").textContent =
            "Debe ser mayor o igual a 18";
        return false;
    }

    document.getElementById("errorEdad").textContent = "";
    return true;
}

//Teléfono
function validarTelefono() {
    let valor = document.getElementById("telefono").value;

    let soloNumeros = /^[0-9]+$/;

    if (!soloNumeros.test(valor) || valor.length < 7) {
        document.getElementById("errorTelefono").textContent =
            "Solo números, mínimo 7 dígitos";
        return false;
    }

    document.getElementById("errorTelefono").textContent = "";
    return true;
}

//Dirección
function validarDireccion() {
    let valor = document.getElementById("direccion").value.trim();

    let tieneLetra = /[a-zA-Z]/.test(valor);
    let tieneNumero = /[0-9]/.test(valor);
    let tieneEspacio = valor.includes(" ");

    if (valor.length < 5 || !tieneLetra || !tieneNumero || !tieneEspacio) {
        document.getElementById("errorDireccion").textContent =
            "Dirección inválida";
        return false;
    }

    document.getElementById("errorDireccion").textContent = "";
    return true;
}

//Ciudad
function validarCiudad() {
    let valor = document.getElementById("ciudad").value.trim();

    if (valor.length < 3) {
        document.getElementById("errorCiudad").textContent =
            "Mínimo 3 caracteres";
        return false;
    }

    document.getElementById("errorCiudad").textContent = "";
    return true;
}

//Código Postal
function validarCP() {
    let valor = document.getElementById("cp").value.trim();

    if (valor.length < 3) {
        document.getElementById("errorCP").textContent =
            "Mínimo 3 caracteres";
        return false;
    }

    document.getElementById("errorCP").textContent = "";
    return true;
}

//DNI
function validarDNI() {
    let valor = document.getElementById("dni").value;

    let regex = /^[0-9]{7,8}$/;

    if (!regex.test(valor)) {
        document.getElementById("errorDni").textContent =
            "DNI inválido (7 u 8 números)";
        return false;
    }

    document.getElementById("errorDni").textContent = "";
    return true;
}