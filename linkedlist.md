# LinkedList
```javascript
function NodeList(value, ref) {
  this.value = value;
  this.ref = ref;
}

function LinkedList() {
  this._head = null;
  this._length = 0;

}
 LinkedList.prototype.add = (value) => {
    let node = new NodeList(value, null);
    if (!this._head) {
      this._head = node;
    }
    else {
      var currentlynode =this._head;  
      while (currentlynode.ref)
        currentlynode = currentlynode.ref;
      currentlynode.ref = node;
      
    }
    this._length++;
  }
  
  LinkedList.prototype.length=()=>{
     return this._length;
  }
  LinkedList.prototype.addAt = (pos, value)=>{
    if (pos >= this._length) {
      console.log("You can't add this element at pos");
    }
    else if(pos==0){
      let node = new NodeList(value,this._head);
      this._head=node;
      this._length++;
    }
    else {

      let currentlynode = this._head;
      for (let i = 0; i < pos - 1; i++) {
        currentlynode = currentlynode.ref;
      }
      let node = new NodeList(value, currentlynode.ref);
      currentlynode.ref = node;
      this._length++;
    }
  }
  LinkedList.prototype.valueAt= (pos)=>{
   if(pos>=this._length)
     return "There is no value at this pos";
    else{
      let currentlynode=this._head;
      if(pos==0)
        return currentlynode.value;
      else{
        for(let i=1;i<=pos;i++){
          currentlynode=currentlynode.ref;
        }
        return currentlynode.value;
      }
    }
    
      
  }
  LinkedList.prototype.remove = (pos) => {
    if (this._length > 0) {
      if (pos< this._length) {
        if (pos === 0) {
          let cab = this._head;
          this._head = cab.ref;
          this._length--;
        }
        else {
          let currentlynode = this._head;
          for (let i = 1; i < pos; i++) {
            currentlynode = currentlynode.ref;
           }
          let deletenode = currentlynode.ref;
          currentlynode.ref = deletenode.ref;
          this._length--;
        }
      }
      else {
        console.log("There is no value at pos");
      }
    }
    
   else{
      console.log("LinkedList is empty");
   }
    

  }
  LinkedList.prototype.reverse=()=>{
    let currentlynode=this._head;
    let beforenode=null;
    while(currentlynode){
       let temp= currentlynode.ref;
       currentlynode.ref=beforenode;
       beforenode=currentlynode;
       currentlynode = temp;

    }
    return beforenode;
  }
```
