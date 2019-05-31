# Merge sort and queue exercise
**Queue Exercise**
```javascript
    function bubble(arr) {
    var total = 0;
    for (let i = 0; i < arr.length - 1; i++) {
       var count = 0;
       for (let j = i + 1; j < arr.length; j++) {
         if (arr[i] > arr[j]) {
            if (count < 2) {
               count++;
               total++;
            }
           else {
             return -1;
           }
       }
     }
    }
      return total;
    }
```
**Merge Sort**

```
    const mergeSort = (list) =>{
      if(list.length <= 1) return list;
      const middle = list.length / 2 ;
      const left = list.slice(0, middle);
      const right = list.slice(middle, list.length);
      return merge(mergeSort(left), mergeSort(right));
    }
    
    const merge = (left, right) => {
      var result = [];
      while(left.length || right.length) {
        if(left.length && right.length) {
          if(left[0] < right[0]) {
            result.push(left.shift())
          } else {
            result.push(right.shift())
          }
        } else if(left.length) {
            result.push(left.shift())
          } else {
            result.push(right.shift())
          }
        }
      return result;
    }
 ```   

