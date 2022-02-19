var reverseString = palabra => {
    if(typeof palabra == 'string'){
        palabra=palabra.trim().toLowerCase()
        if(palabra.length == 0){
            return 'La cadena viene vacios o solo con espacios'
        }else{
            let palabra2 = ''
            for(i=0;i<=palabra.length-1;i++){
                palabra2=palabra[i]+palabra2
            }
            return palabra2
        }
    }else return 'No funciona con elementos diferentes a una cadena!'
}

module.exports = reverseString