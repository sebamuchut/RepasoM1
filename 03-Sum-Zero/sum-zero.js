/**
 * Escribe una function llamada sumZero que acepte un array de numeros 
 * enteros ordenado. La function deberia encontrar el primer para de 
 * numeros que sumados den 0. Retorna un array que incluya los dos 
 * numeros encontrados o undefined si el par no existe..

 * @param {Array} arr1 - esto es un array.
 * @returns {Array || undefined} - deberia retornar un array o undefined.
 */
//var arr = [-9,-1, 3, 6]

function sumZero(arr) {
    let numeros = [];
    for(let i = 0; i < arr.length; i++){
        if(Number.isInteger(arr[i])) {
            if(arr[i] + arr[i+1] === 0){
                numeros.push(arr[i], arr[i+1]);
                
            }
            
        }
    }
    if(numeros.length > 0) console.log(numeros);
    else console.log(undefined);
}
