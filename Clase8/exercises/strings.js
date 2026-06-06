/*Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).*/
var text;
text= "One of the best";
text.toUpperCase();
console.log(text.toUpperCase());


/*Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).*/
var text2;
text2= "Number of the beast";
text2.substring (0,4);
console.log(text2.substring (0,4));


/*Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).*/
var text3,result;
text3= "Back in time";
result = text3.substring (9);
console.log(result);


/*Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable 
(utilizar substring, toUpperCase, toLowerCase y el operador +).*/
var texto = "pROGRAMACION";
let resultado = texto.substring(0,1).toUpperCase() + texto.substring(1).toLowerCase();
console.log(resultado); 


/*Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).*/
var texto = "Hola mundoJavaS";
var posicionEspacio = texto.indexOf(" ");
console.log(posicionEspacio); 


/*Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores 
para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).*/
var texto = "programacionJAVa desarrolloSOFTWARE"; 
var espacio = texto.indexOf(" ");

var palabra1 = texto.substring(0,1).toUpperCase() + texto.substring(1,espacio).toLowerCase();

var palabra2 = texto.substring(espacio+1,espacio+2).toUpperCase() + texto.substring(espacio+2).toLowerCase();

var resultado = palabra1 + " " + palabra2;
console.log(resultado); 