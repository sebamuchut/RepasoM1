/**
 * Escribe una function llamada same que acepte dos arrays.
 * La funcion deberia retornar true si cada valor del primer array es 
 * igual al cuadrado de valor del segundo array. 
 * La frecuencia debe ser la misma.

 * @param {Array} arr1 - esto es un array.
 * @param {Array} arr1 - esto es un array.
 * @returns {boolean} - deberia retornar true o false.
 */
// var arr1 = [2,2,3] 
// var arr2 = [4,4,9]

function same(arr1, arr2) {
    for (let i=0; i<arr2.length; i++){
        arr2[i] = Math.pow(arr2[i], 2);
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}
