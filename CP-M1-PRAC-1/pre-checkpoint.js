const { Queue, Node, LinkedList, BinarySearchTree } = require('./DS.js');

// --------- ¡No modificar nada arriba de esta línea! ----------

// ----- EJERCICIO 1 ------
// Recursión:
// Escribir una función que, a partir de un arreglo
// (que en cada posición puede tener un único elemento u otro array),
// retorne otro arreglo sin anidaciones dentro.

// Ejemplo:
// arrayDeEjemplo = [1, 2, [3, 4], 5, [6, 7, 8]];
// recursiveArrayPrint(arrayDeEjemplo) --> retorna [1, 2, 3, 4, 5, 6, 7, 8]
function recursiveArrayPrint(array, arr = []) {
	// Tu código acá
	for(var i = 0; i < array.length; i++) {
		if(Array.isArray(array[i])) {
			recursiveArrayPrint(array[i], arr)
		} else {
			arr.push(array[i])
		}
	}
	return arr;
}

// ----- EJERCICIO 2 ------
// Closures:
// Implementar la función closureSum que recibe un parámetro (numFijo)
// y retorna otra función, la cual también debe recibir un parámetro
// y devolver la suma de este último parámetro con numFijo.

// Ejemplo 1:
// var sumaCinco = closureSum(5);
// sumaCinco(2);  --> Devolverá 7 (Ya que 2 + 5 = 7)
// sumaCinco(11); --> Devolverá 16 (Ya que 11 + 5 = 16)

// Ejemplo 2:
// var sumaDiez = closureSum(10);
// sumaDiez(2);  --> Devolverá 12 (Ya que 2 + 10 = 12)
// sumaDiez(11); --> Devolverá 21 (Ya que 11 + 10 = 21)
function closureSum(numFijo) {
	// Tu código acá
	return function(n) {
		return numFijo + n
	}
}

/* ----- EJERCICIO 3 ------
Implementar el metodo 'toArray' en el prototype del BinarySearchTree
que devuelva los valores del arbol en un array ordenado
Ejemplo:
//	   32
//    /  \
//   8   64
//  / \
// 5   9
// resultado: [5,8,9,32,64] */
BinarySearchTree.prototype.toArray = function () {
	// Tu código acá
	var arr = [];
	var cb = function(value) {
		arr.push(value)
	}
	this.depthFirstForEach(cb)
	return arr;
};

// ----- EJERCICIO 4 ------
// Dado un ID de un curso y un objeto que contiene estudiantes,
// encontrar cuántos estudiantes están inscriptos en dicho curso.
// Utilizar recursión para iterar.
// Recordá modificar los parámetros que recibe la función si es necesario.

// El objeto de estudiantes es como el siguiente:

var estudiantes = {
	3320943: {
		nombre: 'Persona',
		apellido: 'Apellido',
		mail: 'mail@mail.com',
		cursos: {
			1: 'Cocina',
			2: 'Mecánica'
		}
	},
	90234: {
		nombre: 'Persona',
		apellido: 'Apellido',
		mail: 'mail@mail.com',
		cursos: {
			2: 'Mecánica'
		}
	},
	929340: {
		nombre: 'Persona',
		apellido: 'Apellido',
		mail: 'mail@mail.com',
		cursos: {
			2: 'Mecánica'
		}
	},
	123123: {
		nombre: 'Persona',
		apellido: 'Apellido',
		mail: 'mail@mail.com',
		cursos: {
			1: 'Cocina',
		}
	}
}

function recorrerAlumno(idCurso, objeto, cb) {
	// Tu código acá
	for(var key in objeto) {
		if(objeto[key] instanceof Object) {
			recorrerAlumno(idCurso, objeto[key], cb)
		} else {
			if(Number(key) === idCurso) {
				cb()
			}
		}
	}
}

// ----- EJERCICIO 5 ------
// Implementar la función crearQueues, que recibe un array con anidaciones como parámetro.
// Crear dos queues: una para guardar números impares y otra para los pares.
// La función crearQueues debe retornar un objeto que contenga dos propiedades, cada una con su respectivo Queue.

// Ejemplo del objeto esperado:
// {
// 	par: (acá va la queue de números pares),
// 	impar: (acá va la queue de números impares)
// }

// El array que se va a recibir como parámetro
// es similar al siguiente: [1, 3, 5, 7, 8, 3, 2, 1, [3, 1, 2, 4, 6, 8, 3, 9]];
// Recorrerlo usando recursión.


function crearQueues(arr, numerosPares, numerosImpares) {
	// Tu código acá
	if(!numerosPares) var numerosPares = new Queue();
	if(!numerosImpares) var numerosImpares = new Queue();

	for(var i = 0; i < arr.length; i++) {
		if(Array.isArray(arr[i])) {
			crearQueues(arr[i], numerosPares, numerosImpares)
		}
		if(arr[i] % 2 === 0) numerosPares.enqueue(arr[i])
		else if(arr[i] % 2 === 1) numerosImpares.enqueue(arr[i])
	}

	numerosPares.array.sort(function(a, b) {
		return a - b
	})

	numerosImpares.array.sort(function(a, b) {
		return a - b
	})

	var obj = {
		par: numerosPares,
		impar: numerosImpares
	}

	return obj;
}

crearQueues([1, 3, 5, 7, 8, 3, 2, 1, [3, 1, 2, 4, 6, 8, 3, 9]])

// --------- ¡No modificar nada debajo de esta línea! ----------

module.exports = {
	recursiveArrayPrint,
	closureSum,
	BinarySearchTree,
	recorrerAlumno,
	crearQueues,
};
