var isAnagram = (palabra1, palabra2) => {
    if (typeof palabra1 != 'string' || typeof palabra2 != 'string'){
        return 'Una de las dos palabras no es una cadena'
    }
    else{ 
        palabra1=palabra1.trim().toLowerCase()
        palabra1 = palabra1.replace(/##/g, '')
        palabra1 = palabra1.replace(/ /g, '')
        palabra2=palabra2.trim().toLowerCase()
        palabra2 = palabra2.replace(/##/g, '')
        palabra2 = palabra2.replace(/ /g, '')
        if (palabra1.length == 0 || palabra2.length == 0){
            return 'Esta funcion no puede ser aplicada pues una de las dos palabras no esta definida'
         }else{
            let reference1 = palabra1.length
            let reference2 = palabra2.length
            for(i=0;i<=palabra1.length-1;i++){
                for(j=0;j<=palabra2.length-1;j++){
                    if(palabra1[i]==palabra2[j]){
                        reference1--
                        reference2--
                        break
                    }
                }
            }
            if(reference1 == 0 && reference2 == 0)
                return true
            else
                return false
        }
    }
}

module.exports = isAnagram