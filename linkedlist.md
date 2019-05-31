# LinkedList
```javascript
function NodeList(value, ref) {
  this.value = value;
  this.ref = ref;
}

function LinkedList() {
  this.head = null;
  this.length = 0;
  LinkedList.prototype.add = (value) => {
    let node = new NodeList(value, null);
    if (!this.head) {
      this.head = node;
    }
    else {
      var currentlynode =this.head;  
      while (currentlynode.ref)
        currentlynode = currentlynode.ref;
      currentlynode.ref = node;
      
    }
    this.length++;
  }
  
  LinkedList.prototype.length=()=>{
     return this.length;
  }
  LinkedList.prototype.addAt = (pos, value)=>{
    if (pos >= this.length) {
      console.log("You can't add this element at pos");
    }
    else if(pos==0){
      let node = new NodeList(value,this.head);
      this.head=node;
      this.length++;
    }
    else {

      let currentlynode = this.head;
      for (let i = 0; i < pos - 1; i++) {
        currentlynode = currentlynode.ref;
      }
      let node = new NodeList(value, currentlynode.ref);
      currentlynode.ref = node;
      this.length++;
    }
  }
  LinkedList.prototype.valueAt= (pos)=>{
   if(pos>=this.length)
     return "There is no value at this pos";
    else{
      let currentlynode=this.head;
      if(pos==0)
        return currentlynode.value;
      else{
        for(let i=1;i<=pos:i++){
          currentlynode=currentlynode.ref;
        }
        return currentlynode.value;
      }
    }
    
      
  }
  LinkedList.prototype.remove = (pos) => {
    if (this.length > 0) {
      if (pos< this.length) {
        if (pos === 0) {
          let cab = this.head;
          this.head = cab.ref;
          this.length--;
        }
        else {
          let currentlynode = this.head;
          for (let i = 1; i < pos; i++) {
            currentlynode = currentlynode.ref;
           }
          let deletenode = currentlynode.ref;
          currentlynode.ref = deletenode.ref;
          this.length--;
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

}
```
