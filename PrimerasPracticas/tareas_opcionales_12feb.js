//Validar palindromo, pueden ser frases
function validarPalindromo(cadena){
    var backwards = ''
    if(typeof cadena == 'string'){
        cadenaOriginal=cadena;
        cadena=cadena.replaceAll(/\s/g,'')
        for(i=cadena.length-1;i>=0;i--){
            backwards=backwards+cadena[i]
        }
        if(cadena.toLowerCase()==backwards.toLowerCase()){
            return '"' + cadenaOriginal + '"' + ' Es un palindromo'
        }else return '"' + cadenaOriginal + '"' + ' No es un palindromo'
    }
    else return "Esta función solo recibe Strings"
}
console.log(validarPalindromo('Anita lava la tina'));

//Funcion una manzana para ti y una función para mi, si detecta espacios solamente imprimira la frase default
function funcionManzana(nombre){
    if(typeof nombre == 'string'){
        nombre=nombre.trim()
        if(!nombre.length==0){
            nombre=nombre.toUpperCase()
            return 'Una manzana para ' + nombre + ' y una manzana para mi'
        }else return 'Una manzana para mi y una manzana para ti'
    }else return 'La funcion manzana solo funciona para valores strings o vacíos'
}
console.log(funcionManzana(" "))
