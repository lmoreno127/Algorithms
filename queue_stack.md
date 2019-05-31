# Queue
```javascript

function Node(value, next) {
  this.value = value;
  this.next = next;
}

function Queue() {
  this._head=null;
  this._tail=null;
  this._length=0;
  Queue.prototype.push=(value)=>{
  let n=new Node(value);
  if(!this._head){
    this._head=n;
    this._length++;
  }
  else{
    this._tail.next=n;
    this._length++;
  }
  this._tail=n;
 }
 Queue.prototype.length=()=>{
  return this._length;
 }
 Queue.prototype.dequeue=()=>{
   this._head=this._head.next;
   this._length--;
 }

}
```

# Stack
```javascript
function Node(value, next) {
  this.value = value;
  this.next = next;
}
function Stack() {
  this._head=null;
  this._length=0;
  
  Stack.prototype.push=(value)=>{
     let n=new Node(value);
     if(!this._head){
       this._head=n;
     }
    else{
      n.next=this._head;
      this._head=n;
      
    }
     this._length++;
  }
  
  Stack.prototype.pop=()=>{
    this._head=this._head.next;
    this._length--;
  }
  Stack.prototype.length=()=>{
  return this._length;
 }
}
```
