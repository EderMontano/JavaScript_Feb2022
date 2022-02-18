const operaciones = {
    holaMundo: () => '¡Hola Mundo!',
    suma: (num1, num2) => num1 + num2,
    cuentaLetras: (array1) => array1.map(s => s.length),
    createUser : (name,pass) =>{
        const user = {nombre:name,password:pass}
        return user
    },
    minusculas: (cadena) => {
        if(typeof cadena == 'string'){
            if(cadena.match(/^[a-z0-9]+$/i)){
                cadena=cadena.toLowerCase();
                return cadena
            }else{
                return 'Solo se aceptan letras'
            }
        }else{
            return 'Solo se aceptan letras'
        }
    }
}

module.exports = operaciones