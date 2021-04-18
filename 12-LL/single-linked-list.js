class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    // El metodo push nos permite insertar un nuevo valor AL FINAL
  }

  pop() {
    // El metodo pop nos permite eliminar un nuevo valor AL FINAL
  }

  shift() {
    // El metodo pop nos permite eliminar un nuevo valor AL PRINCIPIO
  }

  unshift(data) {
    // Esto insertara un nuevo valor AL PRINCIPIO
  }

  get(index) {
    // Ya que estas listas no poseen indice este es un metodo artificial para crearle uno.
  }

  set(index, data) {
    // Este metodo nos permite reemplazar un valor existente en el indice que le indicamos
  }

  insert(index, data) {
    // Este metodo nos permite insertar un nuevo nodo en CUALQUIER parte de la lista
  }

  remove(index) {
    //Esto nos permite eliminar un valor en CUALQUIER parte de la lista
  }

  reverse() {
    // revierte esta lista
  }
}
