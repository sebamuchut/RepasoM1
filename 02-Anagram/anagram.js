/**
 * Dado dos strings, escribe una function para determinar si el 
 * segundo string es un anagrama de el primero.
 * Deberia retornar true si cada letra en el primer string se encuentra 
 * en el segundo string.
 * Un anagrama consiste en crear una palabra a partir de la 
 * reordenación de las letras de otra palabra. 
 * Como cinema y iceman.

 * @param {string} first - esto es un string.  'cinema'
 * @param {string} second - esto es un string. 'iceman'
 * @returns {boolean} - deberia retornar true o false.
 */
// var first = 'cinema';
// var second = 'iceman';

function validAnagram(first, second) {
   if(first.length !== second.length)return false;
   if(first === second)return false;
   first = first.toLowerCase();
   let x = first.split('').sort().join('');
   second = second.toLowerCase();
   let y = second.split('').sort().join('');
   if (x===y)return true;
   return false;

   
}
