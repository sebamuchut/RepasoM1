/**
 * Escribe una funcion llamada isPalindrome que reciba un string.
 * Debe retornar true si la string es un palindromo.
 * Osea si se lee igual de derecha a izquierda, como neuquen.

 * @param {String} str - esto es un string.
 * @returns {String} - deberia retornar un string.
 */

 function isPalindrome(str) {
    var arr = str.split('');
    var str2 = arr.reverse(str).join('');
    console.log(str2)
    if (str === str2) return true;
    return false;

}
