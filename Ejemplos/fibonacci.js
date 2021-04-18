// Estas son 3 formas de resolver la secuencia Fibonacci.
// La primera a travez de la recursion.
// Las siguientes dos con:

function fib(n) {
  // O(2n)
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

function fib(n, memo = []) {
  // O(N)
  // This is Memoization - creamos un array vacio donde se guardaran los datos a memorizar.
  // Tambien podriamos hacer memo=[undefined, 1, 1] ya que sabemos que la posicion 0 no la usamos y la 1 y 2 equivale a 1.
  // Si el numero que estamos buscando No esta en undefined, osea ESTA en memo, lo devolvemos.
  if (memo[n] !== undefined) return memo[n];
  if (n <= 2) return 1;
  // RECURSION!!!
  let res = fib(n - 1, memo) + fib(n - 2, memo);
  // Guardamos en memo el resultado de la recursion.
  memo[n] = res;
  return res;
}

function fib(n) {
  // O(N)
  // This is Tabulated o Bottom Up
  // Case Base
  if (n <= 2) return 1;
  // Iniciamos un array con los numeros que conocemos:
  let fibNums = [0, 1, 1];
  // El cuarto indice de fibNums sera igual a:
  for (let p = 3; p <= n; p++) {
    // la suma del anterior + la suma del anterior anterior.
    fibNums[p] = fibNums[p - 1] + fibNums[p - 2];
  }
  return fibNums[n];
}

fib(5);

// 1 1 2 3 5
/*
  fib(5) --> 5
        fib(4) --> 3
              fib(3) --> 2
                    fib(2) --> 1
              +     +
                    fib(1) --> 1
              fib(2) --> 1
        +
        fib(3) --> 2
              fib(2) --> 1
              +
              fib(1) --> 1
  */

/* 
  First Part of the recursion method
  You need to remember that you won’t have just one call, you’ll have several nested calls

  Each call: fib(5) === "?"     	  fib(n-1) + fib(n-2)
  1st call – fib(4)   will return   fib(3)
  2nd call – fib(3)   will return   fib(2) - Base Case.
  3rd call – fib(2)   will return   1
  4th call – fib(3)   will return   fib(1) - Base Case.
  5th call – fib(1)   will return   1
  6st call – fib(4)   will return   fib(2) - Base Case.
  7rd call – fib(2)   will return   1
  8st call – fib(5)   will return   fib(3)
  // Repeat
  9nd  call – fib(3)  will return   fib(2) - Base Case.
  10rd call – fib(2)  will return   1
  11th call – fib(3)  will return   fib(1) - Base Case.
  12th call – fib(1)  will return   1
*/
