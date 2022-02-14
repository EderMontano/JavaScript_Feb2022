//Condicionantes
//If - if/else
/*
var texto;
texto = 'Servidor ON';

// var texto = 'Servidor ON';

if(texto === 'Servidor OFF'){
    console.log('Test pass')
} else {
    console.log('Test fail')
}

// Ejercicio avanzado = Ordenar un arreglo con burbuja

//¿Qué hace esto?

if (time < 10) {
    greeting = "Good morning";
} else if (time < 20) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}
*/

// SWITCH

var rango = "Coronel";

switch(rango){
    case "Soldado razo":
        console.log("No autorizado")
    case "Comandante":
        console.log("Necesita autorización de su superior")
    case "Capitan":
        console.log("Necesita autorizacion de su superior capitan")
    case "Coronel":
        console.log("Autorizado")
    case "General":
        console.log("Usuario Autorizado")
    default:
        console.log("Respuesta Usuario no autorizado")
        break;
}
