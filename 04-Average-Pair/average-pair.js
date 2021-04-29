/**
 * Escribe una funcion que reciba un array y un numero promedio. 
 * Determina si dentro del array dos numeros dan el promedio pasado.
 * Deberia retornar true si dos numeros sumados dentro del array 
 * es igual al num pasado.

 * @param {Array} arr1 - esto es un array.
 * @returns {Array || undefined} - deberia retornar un array o undefined.
 */
//var arr = [1,1,2,3,7,8,8];
// var num = 5;

function averagePair(arr, num) {
    for(let i=0; i<arr.length; i++){
      for(let x=0; x<arr.length; x++){
        if(arr[x] + arr[i] === num){
          console.log('true');
          return true;
         }
        } 
      }
      console.log('false');
      return false;
    }
