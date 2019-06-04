# Exercises 1 and 2
These methods can be found [here](https://github.com/lmoreno127/Make-It-Real-Top-Program/blob/master/linkedlist.md)
# Exercise 3
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

function isBalanced(str){
  let stack=new Stack();
  for(let i=0;i<str.length;i++){
    if(str[i]==="(")
      stack.push(str[i]);
    else{
       if (stack.length()>0)
         stack.pop();       
       }
  }
  console.log(stack);
  if(stack.length()>0)
    return false;
  else
     return true;

}
```
#   Exercise 4
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

function Hanoi(org,aux,end,l){
  if (l === 1) {
    
    end.push(org._head);
    org.pop();
  }
  Hanoi(org, end, aux, l - 1);
  end.push(org._head);
  org.pop();
 
  Hanoi(aux, org,end, l- 1);
}

function HanoiTower(arr){
  let org=new Stack();
  let aux=new Stack();
  let end=new Stack();
  for(let i=0;i<arr.length;i++)
    org.push(arr[i]);
  Hanoi(org,aux,end,org.length());
  let endarr=[];
  for(let i=0;i<end.length();i++){
    endarr.push(end._head);

  }
  return endarr; 
}

```
