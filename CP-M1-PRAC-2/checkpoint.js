// ----- IMPORTANTE -----

// IMPORTANTE!: Se les brindarán las implementaciones ya realizadas en las
// homeworks de Queue, LinkedList y BinarySearchTree. Sobre dichas implementaciónes
// van a tener que agregar nuevos métodos o construir determinadas funciones
// explicados más abajo. Pero todos los métodos ya implementados en las homeowrks
// no es necesario que los vuelvan a definir.

const { Queue, LinkedList, Node, BinarySearchTree } = require("./DS.js");

// ----- Closures -----

// EJERCICIO 1
// Implementar la funcion 'exponencial' que recibe un parametro entero 'exp'
// y retorna una una funcion, nos referiremos a esta ultima como funcion hija,
// y a 'exponencial' como la funcion padre, la funcion hija debe de recibir
// un parametro y retornar dicho parametro elevado al parametro 'exp' de
// la funcion padre original 'exponencial'
// Ejemplo:
// > var sqrt = exponencial(2);
// > sqrt(2);
// < 4
// > sqrt(3); --> 3 * 3
// < 9
// > sqrt(4); --> 4 * 4
// < 16
function exponencial(exp) {
  return function(value){
    return Math.pow(value, exp);
  }
}

// ----- Recursión -----

// EJERCICIO 2
// Crear la funcion 'direcciones':
// La funcion debe retornar un string de los movimientos Norte(N), Sur(S), Este(E), Oeste(O)
// que se deben realizar, para llegar al destino de un laberinto dado.
//
// Ejemplo: dado el siguiente laberinto:
// let laberintoExample = {
//     N: 'pared',
//     S: {
//         N: 'pared',
//         S: 'pared',
//         E: {
//             N: 'destino',
//             S: 'pared',
//             E: 'pared',
//             O: 'pared'
//         },
//         O: {
//             N: 'pared',
//             S: 'pared',
//             E: 'pared',
//             O: 'pared'
//         }
//     },
//     E: 'pared',
//     O: 'pared'
// }
// El retorno de la funcion 'direcciones' debe ser 'SEN', ya que el destino se encuentra
// haciendo los movimientos SUR->ESTE->NORTE
// Aclaraciones: el segundo parametro que recibe la funcion ('direccion') puede ser pasado vacio (null)
function direcciones(laberinto, direccion = "") {
  if(!laberinto)return direccion;
  
  for(let key in laberinto){
    if(laberinto[key] === 'destino') {
      direccion += key;
      return direccion
    }
    if(typeof laberinto[key] === 'object'){
      direccion += key;
      return direcciones(laberinto[key], direccion)
    }
  }
  return direcciones();
}

// EJERCICIO 3
// Crea la funcion 'deepEqualArrays':
// Dado que las comparaciones en javascript aveces son un problema como con el siguiente ejemplo:
// [0,1,2] === [0,1,2] => false // puede probarlo en la consola
// con objetos o arrays identicos surge la necesidad de comparar en 'profundidad' arrays u objetos
// en este caso la funcion solo va a ser pensada para recibir arrays,
// pero estos pueden tener multiples niveles de anidacion, y la funcion deepEqualArrays debe
// comparar cada elemento, sin importar la profundidad en la que este
// Ejemplos:
// deepEqualArrays([0,1,2], [0,1,2]) => true
// deepEqualArrays([0,1,2], [0,1,2,3]) => false
// deepEqualArrays([0,1,[[0,1,2],1,2]], [0,1,[[0,1,2],1,2]]) => true

function deepEqualArrays(arr1, arr2) {
  var union1 = '';
  var union2 = '';
  function x (item){
    if(typeof item === 'number'){
      var n = item.toString();
    }
  }
  arr1.forEach(element => {
    x(element);
    union1 += element
  });
  arr2.forEach(element => {
    x(element);
    union2 += element
  });
  if(union1 === union2)return true;
  return false;

}

// ----- LinkedList -----

// Deben completar la siguiente implementacion 'OrderedLinkedList'(OLL)
// que es muy similar a las LinkedList vistas en clase solo que
// los metodos son distintos y deben de estar pensados para conservar la lista
// ordenada de mayor a menor.
// ejemplos:
// head --> 5 --> 3 --> 2 --> null
// head --> 4 --> 3 --> 1 --> null
// head --> 9 --> 3 --> -1 --> null
// Las dos clases principales ya van a estar implementadas a continuacion:
function OrderedLinkedList() {
  this.head = null;
}

// notar que Node esta implementado en el archivo DS

// Y el metodo print que permite visualizar la lista:
OrderedLinkedList.prototype.print = function () {
  let print = "head";
  let pointer = this.head;
  while (pointer) {
    print += " --> " + pointer.value;
    pointer = pointer.next;
  }
  print += " --> null";
  return print;
};

// EJERCICIO 4
// Crea el metodo 'add' que debe agregar nodos a la OLL de forma que la misma se conserve ordenada:
// Ejemplo:
// > LL.print()
// < 'head --> null'
// > LL.add(1)
// > LL.print()
// < 'head --> 1 --> null'
// > LL.add(5)
// > LL.print()
// < 'head --> 5 --> 1 --> null'
// > LL.add(4)
// > LL.print()
// < 'head --> 5 --> 4 --> 1 --> null'

OrderedLinkedList.prototype.add = function (val) {
  var node = new Node(val);
  if(!this.head){ //si el head está vacío, agregamos el nuevo nodo
    this.head = node;
    return node; //retorno para que corte la ejecución
  }
  if(!this.head.next){ // si sólo hay un head, evaluar si el valor a agregar es menor o mayor al head.value
    if(val>this.head.value){ //si val es mayor, hay que hacer swap con el head
      var aux = this.head;
      this.head = node;
      this.head.next = aux;
      return node;
    }
    if(val<=this.head.value){ //si val es menor, lo agregamos después del head
      this.head.next = node;
      return node;
    }
  }else{ //si la lista tiene más de un elemento, empiezo a recorrer
    var current = this.head;
    var anterior;
    while(current.next){
      anterior = current; //necesito un 'anterior' por si tengo que agregar nuevo nodo en el medio.
      current = current.next;
      if(val>current.value){ //si en el recorrido encuentro un valor menor al val, tengo que agregar el nuevo nodo antes 
        var aux = current 
        current = node;
        anterior.next = current
        current.next = aux;
        return node;
      }
    }
    current.next = node; //si no encuentra valores menores, quiere decir que el nuevo tiene que ser el último.
    return node;
  }
}



// EJERCICIO 5
// Crea el metodo 'removeHigher' que deve devolver el valor mas alto de la linked list
// removiendo su nodo corresponidente:
// Ejemplo:
// > LL.print()
// < 'head --> 5 --> 4 --> 1 --> null'
// > LL.removeHigher()
// < 5
// > LL.removeHigher()
// < 4
// > LL.removeHigher()
// < 1
// > LL.removeHigher()
// < null

OrderedLinkedList.prototype.removeHigher = function () {
  if(!this.head) return null; //si la lista está vacía
  if(!this.head.next){ //si la lista sólo tiene un head, eliminamos ese head
    var aux = this.head.value;
    this.head = null;
    return aux; //pide que retornemos el valor de el nodo removido
  }else{ //si la lista tiene más elementos, eliminamos el head, y ahora el segundo es el nuevo head
    var aux = this.head.value; 
    this.head = this.head.next;
    return aux;
  }
};

// EJERCICIO 6
// Crea el metodo 'removeLower' que deve devolver el valor mas bajo de la linked list
// removiendo su nodo corresponidente:
// Ejemplo:
// > LL.print()
// < 'head --> 5 --> 4 --> 1 --> null'
// > LL.removeHigher()
// < 1
// > LL.removeHigher()
// < 4
// > LL.removeHigher()
// < 5
// > LL.removeHigher()
// < null

OrderedLinkedList.prototype.removeLower = function () {
  if(!this.head)return null; //si es lista vacía, retornamos null
  if(!this.head.next){ //si sólo tiene head, eliminamos ese head
    var aux = this.head.value;
    this.head = null;
    return aux;
  }else{ //sino recorremos la lista hasta el final
    var current = this.head;
    var anterior;
    while(current.next){
      anterior = current;
      current = current.next;
    }
    var valor = current.value; //guardamos el valor del nodo a eliminar
    anterior.next = null; //acá eliminamos el último nodo
    return valor;
  }
};

// ----- QUEUE -----

// EJERCICIO 7
// Implementar la funcion multiCallbacks:
// la funcion multiCallbacks recibe dos arrays de objetos cuyas propiedades son dos,
// 'cb' que es una funcion, y 'time' que es el tiempo estimado de ejecucion de dicha funcion
// este ultimo representado con un integer como se muestra acontinuacion:
// let cbsExample = [
//     {cb:function(){}, time: 2},
//     {cb:function(){}, time: 3}
// ]
// De manera que lo que nuestra funcion 'multiCallbacks' debe de ir ejecutando las funciones
// sin pasarle parametros pero debe ir alternando las funciones de cbs1 y cbs2
// segun cual de estas se estima que tarde menos, retornando un arreglo de resultados
// de las mismas en el orden que fueron ejecutadas
// Ejemplo:
// > let cbs1 = [
//       {cb:function(){return '1-1'}, time: 2},
//       {cb:function(){return '1-2'}, time: 3}
//   ];
// > let cbs2 = [
//       {cb:function(){return '2-1'}, time: 1},
//       {cb:function(){return '2-2'}, time: 4}
//   ];
// > multiCallbacks(cbs1, cbs2);
// < ["2-1", "1-1", "1-2", "2-2"];

function multiCallbacks(cbs1, cbs2) {
  // destructuramos los argumentos en un solo array -->
  // lo ordenamos por tiempo, le pasamos dos variables que nos ayudaran a ordenarlo por tiempo -->
  // map te devuelve un array de la misma longitud anterior. Recibe una funcion -->
  while(cbs2.length > 0){
    cbs1.push(cbs2.shift()); //pusheo los elementos de cbs2 dentro de cbs1
  }
  cbs1 = cbs1.sort(function(a, b) { //ordeno los elementos según 'time'
    return a.time - b.time;
});
  var array = []; //creo un array para ir agregando los resultados de las cb
  cbs1.forEach(element => { //para cada elemento llamo a cb y lo pusheo en array
    array.push(element.cb())
  });
  return array; //el test pide retornar el array
}

// ----- BST -----

// EJERCICIO 8
// Implementar el metodo 'toArray' en el prototype del BinarySearchTree
// que devuelva los valores del arbol en una array ordenado
// Ejemplo:
//     32
//    /  \
//   8   64
//  / \
// 5   9
// resultado:[5,8,9,32,64]

BinarySearchTree.prototype.toArray = function () {
  var array = []
  var cb = function (val) {
    array.push(val);
  }
  this.depthFirstForEach(cb); //cuando ponía 'in order' no me daba!!
  return array;
};

// ----- Algoritmos -----

// Ejercicio 9
// Implementar la funcion 'primalityTest' que dado un valor numerico entero
// debe de retornar true or false dependiendo de si este es primo o no.
// Puede que este es un algoritmo que ya hayan implementado pero entenderan
// que es un algoritmo que segun la implementacion puede llegar a ser muy costoso
// para numeros demasiado grandes, asi que vamos a implementarlo mediante un metodo
// derivado de Trial Division como el que se muestra aca:
// https://en.wikipedia.org/wiki/Primality_test
// Si bien esta no es la mejor implementacion existente, con que uds puedan
// informarse sobre algoritmos, leerlos de un pseudocodigo e implemnterlos alcanzara

function primalityTest(num) {
//FUNCIONA CON NÚMEROS CHICOS
//   if (num < 2) return false;
//   if (num === 2 || num === 3) return true;
//   var i = 2;
//   while(i<num){
//     if (num % i === 0)return false;
//     i++;
//   }
//   return true;
// }

//LO TUVE QUE SACAR DE WIKIPEDIA PARA QUE FUNCIONE RÁPIDO
if (num <= 3) return num > 1;
  
if ((num % 2 === 0) || (num % 3 === 0)) return false;

let count = 5;

while (Math.pow(count, 2) <= num) {
  if (num % count === 0 || num % (count + 2) === 0) return false;
  
  count += 6;
}

return true;
}

// EJERCICIO 10
// Implementa el algoritmo conocido como 'quickSort', que dado un arreglo de elemntos
// retorn el mismo ordenado de 'mayor a menor!'
// https://en.wikipedia.org/wiki/Quicksort

function quickSort(array) {
  if(array.length < 2)return array;

  var pivot = array[array.length-1];
  var left = [];
  var right = [];

  for(let i=0; i<array.length-1; i++){
    if(array[i]<pivot){left.push(array[i])}
    if(array[i]>=pivot){right.push(array[i])};
  }
  
  return [].concat(quickSort(right), pivot, quickSort(left)) //el único cambio es el orden de concatenación

}

// ----- EXTRA CREDIT -----

// EJERCICIO 11
// Implementa la función 'reverse', que recibe un numero entero como parametro
// e invierte el mismo.
// Pero Debería hacer esto sin convertir el número introducido en una cadena, o un array
// Ejemplo:
// > reverse(123);
// < 321
// > reverse(95823);
// < 32859

function reverse(num, lastNum = 0) {
//lo siguiente es para saber cuántos dígitos tiene num 
var numero = num;
var mult = 0.1
while(numero>=1){ // divido num por 10 y voy aumentando mult por 10. Mult al final me da un valor estilo 100, 10000, 1000000
  numero /= 10;
  mult *= 10
}
  
var alreves = 0; //este va a ser mi valor a devolver
  
  while(num>=1){ 
    var x = num % 10; // me voy a quedar con el resto (123 >>> 12,3    x=3)
    x *= mult // ese resto lo multiplico por el mult. Ahi muevo el ultimo dígito al primer lugar (3 >>> 300)
    num = Math.floor(num/10); // divido num pero me quedo con el entero (123 >>> 12,3 >>> 12)
    alreves += x; // en la primer vuelta alreves va a ser 300, en la segunda 320, en la tercera 321
    mult /= 10; //voy bajando la cantidad de 'ceros' de mult
  }
  return alreves
}



module.exports = {
  exponencial,
  direcciones,
  deepEqualArrays,
  OrderedLinkedList,
  multiCallbacks,
  primalityTest,
  quickSort,
  reverse,
  Queue,
  LinkedList,
  Node,
  BinarySearchTree,
};
