function Node (value){
      this.value = value;
      this.next = null;
  
}

function Stack(){
      this.first = null;
      this.last = null;
      this.size = 0;
  }
  
Stack.prototype.push = function (val){
  var elementonuevo = new Node(val);
    if (!this.first){
      this.first = elementonuevo;
      this.last = elementonuevo;
      this.size++;
    }else{
      var current = this.first;
      while(current.next){
        current = current.next;
      }
      current.next = elementonuevo;
      
      this.size++
    }

}


Stack.prototype.pop = function (){
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