/*
//Impar o par para numeros del 0 al 100
var arreglo = [];
for (var i=0;i<=100;i++){
    arreglo.push(i)
}

arreglo.forEach(function parImpar(num){
    if (num == 0)
        console.log(num, ' se sigue discutiendo si es par o impar')
    else if(num % 2 == 0)
        console.log(num, ' es un numero par')
    else
        console.log(num, ' es un numero impar')
});

//Impar o par para 100 numeros random
var arreglo2 = [];
for(var i = 0; i <= 100; i++) {
    arreglo2.push(Math.floor(Math.random()*(100-1))+1)
}

arreglo2.forEach(function parImpar(num){
    if (num == 0)
        console.log(num, ' se sigue discutiendo si es par o impar')
    else if(num % 2 == 0)
        console.log(num, ' es un numero par')
    else
        console.log(num, ' es un numero impar')
});
*/
//Three company
function threeCompany(palabra){
    if(typeof palabra=='string'){
        var result='';
        for(var i = 0; i <= palabra.length-1; i++){
            result+=palabra[i]+palabra[i]+palabra[i]
        }}else{
            return 'El valor ingresado no es una cadena'
    }
    return result
}
console.log(threeCompany(500));