function Node (val) {
    this.val = val;
    this.next = null;
  
}

function SinglyLinkedList () {
    this.head = null;
    this.tail = null; //acá se indica el nodo que está al final de la lista. 
    this.length = 0;
  }
SinglyLinkedList.prototype.push = function (val) {
    // El metodo push nos permite insertar un nuevo valor AL FINAL
    
    //creo un nuevo nodo que recibirá el valor que le pasemos
    var nuevonodo = new Node(val);
    if (!this.head){ //si el nodo padre está vacío, metemos ahí el nodo
      this.head = nuevonodo;
      this.tail = nuevonodo; //como es el único nodo de la lista, también va a ser su propio tail
      this.length++;
    } else { //si hay varios elementos vamos recorriendo hasta el último
      var current = this.head;
      while(current.next){
        current = current.next;        
      }
      current.next = nuevonodo; //al último current.next (que es null) le agregamos nuestro nodo
      this.tail = nuevonodo; //tenemos un nuevo tail porque lo agregamos al final
      this.length++;
    }

  }

  SinglyLinkedList.prototype.pop = function () {
    // El metodo pop nos permite eliminar un nuevo valor AL FINAL
    if(this.length === 0) return null;
    if(this.length === 1) { 
      var cabeza = this.head; //creo esta var solo para retornarla luego
      this.head = null; //vaciamos entonces el head y el tail. Nos queda una lista vacía
      this.tail = null;
      return cabeza;
    }
    var current = this.head;
    var anterior;
    while(current.next){ //recorremos la lista hasta llegar al último
      anterior = current;
      current = current.next;
    }
    var nodo = current;
    anterior.next = null; //anterior.next es el next que tiene el anteultimo nodo. Lo vaciamos y eliminamos el último nodo
    this.tail = anterior; //entonces el tail va a ser ese nodo que ahora es el último
    this.length--;
    return nodo;
    
  }

  SinglyLinkedList.prototype.shift = function () {
    // El metodo pop nos permite eliminar un nuevo valor AL PRINCIPIO
    if (!this.head) return 'no hay lista';
    if (this.head){ 
      if (!this.head.next){ //si esto es true, la lista tiene un solo elemento
        var nodo = this.head;
        this.head = null; //eliminamos el elemento o nodo
        this.tail = null;
        return nodo;
      } else {
        var nodo = this.head;
        this.head = this.head.next; //cambiamos el this.head por el que le seguía. Así eliminamos el primero
        return nodo;
      }
    }

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
