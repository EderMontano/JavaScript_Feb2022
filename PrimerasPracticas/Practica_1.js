//Variables y operadores
var a = 1;

let b = 45;

var c = 6;

var d;

d = a + b;

console.log(d)

console.log("Resultado de la variable d: ",d)

console.log(a+b)

console.log(8+5)

console.log(a,b)

console.log(a-b)

console.log(a*b)

console.log(a/b)

console.log(a%b)

console.log(++a)

console.log(a)

console.log(--a)

console.log("cadena",567 + '9');
//Concatenar
console.log('Cadena1'+'Cadena2')
console.log('Cadena1','Cadena2')

const cinco = 5;
const diez = 10;

console.log("Quince es " + (cinco + diez) + ' y no ' + (2 * diez + 2) + '.');

//Operadores de asignación (operadores del signo igual)

var numero = 8;
console.log('Variable: ', numero)
console.log("Suma: ", numero+=2)
numero/=2 //5 numero = numero / 2
console.log( numero/=2)
console.log(numero*=25)
numero = 5;
console.log(numero%=10)

let text1 = 'John';
let text2 = 'Smith';
let text3 = text1 + " " + text2;

console.log(text3)

var mycadena = 'alfa';
//mycadena += 'beto';

console.log(mycadena += 'beto');
console.log(mycadena)

let x = 5 +5; //numerico
let y = '5' + 5; //cadena mas numerico
let z = 'hello' +5; //cadena mas numerico
console.log(x,y,z)

//Desestructuración

var foo = ['one','two','three'];
console.log(foo)

var one = foo[0];
var two = foo[1];
var three = foo[2];
console.log(one,two,three)

var[one,two,three] = foo;
console.log([one,two,three]);
console.log([one])
console.log([three])

//Operadores de comparación

var var1 = 3;
var var2 = 5;

console.log(3 == var1)
console.log("3" == var1)
console.log(3 == '3')
console.log(3 === '3')
console.log(var1 != 4)
console.log(var2 != 3 )
console.log(var2 != '3')
console.log(var2 != '5' )
console.log(var1 !== '3')
console.log(3 !== '3' )
console.log()


//Operadores logicos
console.log('#################################')
//AND
console.log( true && true)
console.log( true && false)
console.log( false && false)
console.log( false && (3==4))
console.log( 'gato' && 'perro') //Tarea
console.log( false && 'gato')
console.log( 'gato' && false)
console.log( 'gato' && true)

console.log('#################################')
//OR
var compara1= true || 

//NOT

console.log(!true)
console.log(!false)
console.log(!'gato')

//Pendiente despues de tarea
console.log('gato' || false && !true || 'perro')

//Diferencia entre var y let, el scope. Var es mas limitado