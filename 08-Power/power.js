/**
 * Escribe una funcion llamada powers que reciba una base y un exponente.
 * Debera retornar la base por el exponente. Similar a como funciona 
 * Math.pow();
 * No deberia fijarme los casos negativos

 * @param {Array} arr1 - esto es un array.
 * @returns {Array || undefined} - deberia retornar un array o undefined.
 */
 function power(base, exp) {
    var producto = base;
   while(x<exp){
    
     producto = producto * base;
     x+=1;
     }
   return producto;
   
   }
