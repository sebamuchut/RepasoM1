function BinarySearchTree (value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  BinarySearchTree.prototype.insert = function(value) {
    // escribe un metodo que inserte un nodo al final
    
    if(value < this.value){
      if(!this.left){
        this.left =  new BinarySearchTree(value);
      }else{
        this.left.insert(value);
      }
    } else {
      if(!this.right){
        this.right = new BinarySearchTree(value);
      }else{
        this.right.insert(value);
      }
    }
  }

  BinarySearchTree.prototype.find = function (value) {
    // escribe un metodo que busque un nodo especifico
    if(this.value === value) return true;

    if(this.right){
      if(this.right.find(value)){
        console.log(this.right.value);
        return true;
      };
    }  
    if (this.left){
      if(this.left.find(value)){
        console.log(this.left.value);
        return true;
      };
    }
    return false;
  }

  BinarySearchTree.prototype.size = function() {
    // escribe un metodo que determine el largo del arbol
    if(!this.left && !this.right) return 1;
    if(this.left && !this.right) {
      return 1 + this.left.size();
    }
    if(!this.left && this.right) {
      return 1 + this.right.size();
    }
    if(this.left && this.right){
      return 1 + this.right.size() + this.left.size();
    }

  }

  breadthFirstForEach() {
    // escribe el metodo breadthFirstForEach
  }

  depthFirstForEach(arg) {
    // escribe el metodo depthFirstForEach
  }
}
