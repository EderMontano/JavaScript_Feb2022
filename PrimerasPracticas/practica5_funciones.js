//Funciones

//Procedimientos o conjunto de declaraciones, para hacer una tarea especifica
/*
var elNombre;
elNombre = "Eder";

console.log(miNombre(elNombre))

function miNombre(name)
{
    return "Hola " + name;
}

function suma(num1, num2){
    return num1+num2;
}

console.log(suma(5,4))


function cuadrado(a){
    return a*a;
}

console.log(cuadrado(-1))

function checkNumero(numero){
    if(numero === 40){
        //console.log("Correcto")
        return("correcto")
    } else {
        //console.log("Incorrecto")
        return("incorrecto")
    }
}

console.log(checkNumero(3));
checkNumero(40);


//funcion que diga si un numero es impar o par;

function parImpar(num){
    if(num % 2 == 0)
        return "Es un numero par"
    else
        return "No es un numero par"
}

console.log("El numero 4 es: ",parImpar(4))
console.log("El numero -7 es: ",parImpar(-7))
*/
/*Tarea: encontrar numeros impares y pares en un arreglo con numeros del 0 al 100

var arreglo = [];
for (var i=0;i<=100;i++){
    arreglo.push(i)
}

//Arreglo llene con 100 numeros random
var arreglo2 = [];
for(var i = 0; i <= 100; i++) {
    arreglo2.push(Math.floor(Math.random()*(100-1))+1)
}
console.log(arreglo2)
*/
//Tarea: Three company 
//input asd output aaasssddd + Usando una function
//input yuri output yyyuuurrriii

//** charAt separaar una letra de una cadena */

//Tarea opcional: Validación de palindromos

/*Tarea opcional: 
Una manzana para NOMBRE y una manzana para mi 
Una manzana para Ti(vacio) y una manzana para mi
Error en el caso de recibir un numero*/

//Una funcion dentro de otra funcion

function ejecutar(algunaFuncion, valor){
    algunaFuncion(valor)
}

function decir(palabra){
    console.log(palabra);
}

ejecutar(decir,"hola");
