var square = num => num*num

console.log(square(2))

var division = frase => frase + ' esta es la frase'

console.log(division('Frase'))


var ejemplo = (a,b) => a + b

console.log(ejemplo(3,4))

var threeCompany = cadena => {
    let cadenaResult = ''
    for(i=0;i<=cadena.length-1;i++){
        cadenaResult=cadenaResult+cadena[i]+cadena[i]+cadena[i]
    }
    return 'Cadena Procesada igual a ' + cadenaResult
}
console.log(threeCompany ('ANA'))

console.log('///////////////////////////////////////////////////////////////////////////////')
var personaObject = {
    firstName: 'Jhon',
    lastName: 'Smith',
    age: 34
}

console.log('Objeto persona: ', personaObject)
console.log('Propiedad edad: ', personaObject.age)

personaObject['salario'] = 10000;
personaObject.age = 29;
personaObject.originCity = 'CDMX';
personaObject['merried'] = true;

console.log('Objeto persona: ', personaObject)