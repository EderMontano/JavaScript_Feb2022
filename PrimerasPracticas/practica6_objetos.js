//Objetos

//Objeto vacío

var emptyObject = {};
console.log(emptyObject);
console.log(typeof emptyObject);

//Objeto Persona

var personaObject = {
    firstName: 'Jhon',
    lastName: 'Smith',
    age: 34
}

console.log('Objeto persona: ', personaObject)
console.log('Propiedad edad: ', personaObject.age)

personaObject['salario'] = 10000;
personaObject.age = 29;

console.log('Objeto persona: ', personaObject)
console.log('Tipo Propiedad edad: ', typeof personaObject.age)
console.log('Tipo Propiedad firstName: ', typeof personaObject.firstName)

console.log('\n ################################################################################## \n')

for( var member in personaObject){
    if(personaObject.hasOwnProperty(member)){
        console.log('El valor de member: ', member)
        console.log('La propiedad ' + member + ' tiene el valor ' + personaObject[member])
    }
}

console.log('\n ################################################################################## \n')

// La forma tradicional de hacer un objeto
var miCarro = {
    make: 'Ford',
    model: 'Mustang',
    year: 1969
};


var myCar = new Object(); //constructor
console.log(myCar)

myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;

console.log('Objetos: ', miCarro, '\n', myCar)

console.log(myCar.color);
console.log("\n", myCar)

myCar['make']='Nissan';
myCar.model='Bluebird';
myCar.year=1960;
myCar.color='blue';
console.log('\n', myCar)

console.log('\n ################################################################################## \n')

// Diferentes propiedades para objetos

var objetoExe = Object();

var cadena = 'String';
var random = Math.random();
var obj = Object();

objetoExe.type = 'referencia agregar propiedad con un punto';
objetoExe['fecha de hoy']= 'referencia a agregar una propiedad con corchetes, comillas y espacios';
objetoExe[cadena] = 'referencia agregar una propiedad con un variable string';
objetoExe[random] = 'referencia agregar una propiedad con una variable numerica';
objetoExe[obj] = 'referencia para agregar una propiedad con otro objeto';
objetoExe[''] = 'referencia para agregar una propiedad vacia';

console.log(objetoExe)

console.log('\n ################################################################################## \n')

//Ejercicio Opcional, crear 10 propiedades con un for y un numero random, a un objeto

//Objetos primitivos

var variableFlexi;

new Boolean (true).valueOf();
console.log(typeof Boolean)
console.log('Objeto primitivo booleano: ', Boolean);

console.log('\n ################################## \n')

//Objeto Persona

function persona(name, age, genere){
    this.nombre = name;
    this.edad = age;
    this.genero = genere;
}

var maria = new persona('Maria', 25, 'Mujer')
var marifer = new persona('Marifer', 34, 'Mujer')
var Luis = new persona('Luis', 45, 'hombre')

console.log(maria)

console.log('\n ################################## \n')

function auto(marca,model,year,owner){
    this.marca = marca;
    this.model = model;
    this.year = year;
    this.owner = owner;
}

var car54 = new auto('Seat','Cupra',2020,maria)
var car67 = new auto('VW','Bocho',2010,marifer)

car54.color = 'Plata'

console.log(car54)
console.log(car67)

console.log('\n ################################## \n')

//funciones dentro de objetos

var animal = {
    type: 'Invertebrados',
    displayType: function(){
        console.log(this.type)
    }
}

var animal67 = Object.create(animal);

animal67.displayType();
animal67.type = 'Mamifero';
animal67.displayType();

console.log('\n ################################## \n')

function ownerCar(name,age,gender){
    this.nombre = name;
    this.edad = age;
    this.genero = gender;
}

function displayCar(){
    var impresion = `Un coche ${this.year} ${this.modelo} a la venta, propietario ${this.owner.nombre}`;
    console.log(impresion)
}

function carrito(marca,modelo,year,owner){
    this.marca = marca;
    this.modelo = modelo;
    this.year = year;
    this.owner = owner;
    this.displayCar = displayCar;
}

var diana = new ownerCar('Diana', 24, 'Mujer')
console.log(diana)
var car23 = new carrito('Audi', 'A3', 2015, diana)

car23.displayCar();

console.log('\n ################################## \n')
/*
const Manager = {
    name : 'Guillermo',
    company : 'Telefonica',
    edad: 18,
    job : 'Software Engineer'
}

const Interno = {
    name : 'Francisco',
    edad : 21,
    job : 'Ir por los cafes y sacar copias'
}

function miEdad(){
    console.log('Tengo ', this.edad, 'años');
    console.log(`Tengo $(this.edad) años`);
}

function sayHi(){
    console.log('Hola, mi nombre es ', this.name)
}

Manager.sayHi = sayHi;
Interno.sayHi = sayHi;
Manager.miEdad = miEdad;

Manager.sayHi();
Interno.sayHi();
Manager.miEdad();

*/

//Tarea: Checar el codigo que subio Yuri al Repo para ver que es lo que hace