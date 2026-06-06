/*Crear una función suma que reciba dos valores numéricos y retorne el resultado. 
Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.*/
function suma(a, b) {
    return a + b;
}

var resultado = suma(5, 7);
console.log(resultado);


/*A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, 
mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.*/
function suma(a, b) {
    if (typeof a != "number" || typeof b != "number") {
        alert("Error: uno de los parámetros no es un número");
        return NaN;
    }
    return a + b;
}


/*Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero.*/
function validateInteger(num) {
    return Number.isInteger(num);
}


/*A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. 
En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).*/
// función suma con validación de enteros
function suma(a, b) {
    if (typeof a != "number" || typeof b != "number") {
        alert("Error: uno de los parámetros no es un número");
        return NaN;
    }

    /*validar que sean enteros*/
    if (!Number.isInteger(a)) {
        alert("Error: el primer parámetro no es un número entero y se redondea");
        a = Math.round(a);
    }

    if (!Number.isInteger(b)) {
        alert("Error: el segundo parámetro no es un número entero y se redondea");
        b = Math.round(b);
    }

    return a + b;
}



/*Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma probando que todo siga funcionando igual.*/
function validateInteger(num) {
    if (!Number.isInteger(num)) {
        alert("Error: el número no es entero y se redondea");
        return Math.round(num);
    }
    return num;
}

/*función suma que usa la validación*/
function suma(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        alert("Error: uno de los parámetros no es un número");
        return NaN;
    }

    a = validateInteger(a);
    b = validateInteger(b);

    return a + b;
}