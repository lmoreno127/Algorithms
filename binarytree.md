# Binary Tree
```javascript
binaryTree.prototype.add = function(val){
   var root = this.root;

   if(!root){
      this.root = new Node(val);
      return;
   }

   var currentNode = root;
   var newNode = new Node(val); 

   while(currentNode){
      if(val < currentNode.value){
          if(!currentNode.left){
             currentNode.left = newNode;
             break;
          }
          else{
             currentNode = currentNode.left;
        }
     }
     else{
         if(!currentNode.right){
            currentNode.right = newNode;
            break;
         }
         else{
            currentNode = currentNode.right;
         }
     }
  }
}
function DFS(node){
  if(node){
    console.log(node.value);
    DFS(node.left);
    DFS(node.right);
  }
  
}

binaryTree.prototype.traverseDFS=()=>{
  let root=this.root;
  DFS(root);
}

binaryTree.prototype.traverseBFS= function(){
  BFS(this._head);
}

function binaryTree(){
  this.root = null;
}

function Node(val){
  this.value = val;
  this.left = null;
  this.right = null;
}


function BFS(rootNode) {
 if(rootNode){ 
  var queue =new Queue();
  queue.push(rootNode);
  

  while (queue.length() > 0) {

    var currentNode = queue._head;
    
    
    if (currentNode.left !== null) {
      queue.push(currentNode.left)
    }
    if (currentNode.right !== null) {
      queue.push(currentNode.right)
    }
    queue.pop()
  }
 }


```
