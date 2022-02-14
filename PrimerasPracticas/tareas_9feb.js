//checar que esta haciendo
/*var time=22;

if (time < 10) {
    greeting = "Good morning";
  } else if (time < 20) {
    greeting = "Good day";
  } else {
    greeting = "Good evening";
  }

  console.log(greeting)

  var last = 0;
  variable = 5;
  variable2 = 2;

  if (last==0){
      if (variable =5){
          variable2 = 7
      }
  }

  console.log("Valor de variable2 es igual a: ", variable2)

  var num=4;
  var num2=3;
  var foo=2;
  var BarProp=2;
  
if( num <= num2 && foo > BarProp){
        num = 8
  }

  console.log("Valor de num es igual a: ",num)

if(num <= num2 || foo > BarProp){
    num = 8
}

console.log("Valor de num es igual a: ",num)

if(false){
    num = 8
}

console.log("Valor de num es igual a: ",num)

var notTrue =  false
if(notTrue){
    num = 8
}

console.log("Valor de num es igual a: ",num)

if(!notTrue){
    num = 8
}

console.log("Valor de num es igual a: ",num)
*/

//Ejemplo de switch y que es lo que estan haciendo
/*
var opciones = '2';

switch(opciones){
    case '2':
        console.log("No autorizado")
        break;
    case '43':
        console.log("Necesita autorización")
        break;
    case '54':
        console.log("Autorización requerida")
        break;
    default:
        console.log("Respuesta default: Usuario no autorizado")
        break;
}

var dealer = 2
var x = dealer;
switch (true) {
    case (x < 5):
        console.log("less than five");
        break;
    case (x < 9):
        console.log("between 5 and 8");
        break;
    case (x < 12):
        console.log("between 9 and 11");
        break;
    default:
        console.log("none");
        break;
}
*/
//Reto 1 - Imprimir el arreglo al revés
/*
var arregloInput = [0, 'blanco', 'cuatro', null,,true];
var arregloOutput = [];
var leng=arregloInput.length
var puntero = 0
for(var i=leng-1;i>-1;i--){
  arregloOutput[puntero] = arregloInput[i]
  puntero ++
}
console.log(arregloOutput);
*/
//Reto - metodo de burbuja
var burbuja = [8,1,5,4,3,2]
var leng = burbuja.length
var temp1 = 0
var temp2 = 0
for(i=0;i<leng;i++){
  for(j=0;j<=leng-1;j++){
    if(burbuja[j]>burbuja[i]){
      temp1 = burbuja[j]
      temp2 = burbuja[i]
      burbuja[j] = temp2
      burbuja[i] = temp1
    }
  }
}
console.log(burbuja)
/*
var arreglo1 = [4, 2 , 6]
temp1 = 0;
temp2 = 0;
if(arreglo1[0]>arreglo1[1]){
  temp1 = arreglo1[0]
  temp2 = arreglo1[1]
  arreglo1[1] = temp1
  arreglo1[0] = temp2
}
console.log(arreglo1)
*/