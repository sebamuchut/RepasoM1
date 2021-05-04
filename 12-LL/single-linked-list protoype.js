function Node (val) {
    this.val = val;
    this.next = null;
  
}

function SinglyLinkedList () {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
SinglyLinkedList.prototype.push = function (val) {
    // El metodo push nos permite insertar un nuevo valor AL FINAL
    var nuevonodo = new Node(val);
    if (!this.head){
      this.head = nuevonodo;
      this.tail = nuevonodo;
      this.length++;
    } else {
      var current = this.head;
      while(current.next){
        current = current.next;        
      }
      current.next = nuevonodo;
      this.tail = nuevonodo;
      this.length++;
    }

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
