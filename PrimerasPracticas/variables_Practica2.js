//Variables

var saida;
var reyes;

console.log(typeof saida); //undefined: hay un espacio reservado para esa variable pero no tiene nada, por lo que es indeterminado su tipo

saida = "Saida"; //string
console.log(typeof saida);

saida = true; //booleano
console.log(typeof saida);

saida = 4213;  //number
console.log(typeof saida);

saida = [32, 4]; //objecto
console.log(typeof saida);

saida = {casa:4}; //objecto
console.log(typeof saida);

//Constantes
const accesorio = "mouse";
console.log("Constante: ", accesorio)
console.log(accesorio + 67)
console.log("Constante: ", accesorio)
console.log("Longitud Constante: ", accesorio.length)

let ancho = 16;
let y = 1234e5;
let x = 1234e-5;
let lastName = 'Johnson';

console.log(ancho,y,x,lastName)
console.log(ancho,y+2,x+y,lastName+x)
console.log(ancho,y,x,lastName)

console.log(++y)
console.log(y)

let respuesta1 = "It's alright";
console.log(respuesta1)
respuesta1 = 'It"s alright';
console.log(respuesta1)
//No es correcto = respuesta1 = "It"s alright";

//Arrays

var dogs = ['boxer', 'Rex', 'Toby', 9];
console.log(dogs)

dogs = true;
console.log(dogs)

var dogs = ['boxer', 'Rex', 'Toby', 9,98,,32];
console.log(dogs)

console.log(dogs[2])
console.log(dogs[5])

dogs.push('Solovino')
dogs.push(78)
console.log(dogs)

dogs.pop()
dogs.pop()
dogs.pop()
//pop elimina el ultimo elemento del arreglo
console.log(dogs)

dogs.shift()
console.log(dogs)
console.log(dogs[0])
console.log(dogs[8])
console.log(dogs)

var dosPerritos = dogs.splice(1,2)
//splice corta el arreglo donde (indice donde inicia a cortar, numero de elementos)
console.log(dogs)
console.log(dosPerritos)

dogs[8] = true
console.log(dogs)
dogs[6] = true
console.log(dogs[6])

console.log(dogs)

console.log(dogs.length)
console.log(dogs[0].length)

//Ejemplo
var arreglo23 = []
arreglo23[5] = 8
console.log(arreglo23.shift())
//shift quita el primer elemento de un arreglo
arreglo23.push(2)
//push agrega un elemento al final del arreglo
arreglo23[0] = 87
console.log("1: ", arreglo23)
arreglo23.unshift(5)
//unshift agrega un elemento al principio de un arreglo
console.log("2: ", arreglo23)
console.log(arreglo23[0])
console.log(arreglo23)

//Variables Null

var emptyVar;
var undefinedVar;
console.log(emptyVar)
emptyVar = null;
console.log(emptyVar)

console.log(1 + null);
console.log(1 + emptyVar);
console.log(1 + undefined);
console.log(1 + undefinedVar);

//NaN = Not a number


