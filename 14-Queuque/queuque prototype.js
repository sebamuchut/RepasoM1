function Node (value){
      this.value = value;
      this.next = null;
  
}

function Queue (){
      this.first = null;
      this.last = null;
      this.size = 0;
  }
  
  Queue.prototype.enqueue = function(val){
    var elementonuevo = new Node(val);
    if (!this.first){
      this.first = elementonuevo;
      this.last = elementonuevo;
      this.size++;
    }else{
      var vasegundo = this.first;
      this.first = elementonuevo;
      this.size++;
      elementonuevo.next = vasegundo;
      
    }
    

}

  Queue.prototype.dequeue = function(){
    if(this.size === 0) return false;
    if(this.size === 1){
      this.first = null;
      this.last = null;
    }
    if(this.size>1){
      var current = this.first;
      var anterior;
      while(current.next){
        anterior = current;
        current=current.next;
      }
      anterior.next = null;
      this.last = anterior;
      this.size--;
    }

}