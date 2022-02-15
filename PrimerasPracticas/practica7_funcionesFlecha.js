function helloW(nombre){
    return "Hola " + nombre + " welcome";
};

console.log(helloW("Eder"));

const helloWFlecha = (nombre) =>{
    return "Hola " + nombre + " welcome";
};

console.log(helloWFlecha("Eder"));

//Funcion Suma
let suma = function(x,y){
    return x + y;
};

let suma2a = (x,y) => {return x + y};
let suma3a = (x, y) => x + y;

console.log("Suma 1a: ", suma(4,5), "Suma 2da: ", suma2a(8,9), "Suma 3era:", suma3a(5,6));

// Tarea hacer una funcion de flecha para que en una sola linea regrese el cuadrado de un numero

var palabras = ['arbol', 'palabras', 'Celular','Delta','Omega','Rito'];

var contarLetras = palabras.map(s => s.length);

console.log(contarLetras);

var contarLetras_2da = palabras.map( function(s) {return s.length})

//funcion multiplicar numeros de un array por 2

let numeritos = [3,6,1,2,3]

var multiplicarArray = mult => mult * 2;

var multiplicarNumeros = numeritos.map(multiplicarArray);

console.log(multiplicarNumeros);

