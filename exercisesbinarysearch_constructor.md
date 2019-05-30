# Binary Search and Constructors exercises

## Binary Search
```javascript
function binarySearchRecursive(arr, elem, init, final) {
         if (init > final) {
    return "El valor no se encontró";
    }
    let mitad = Math.floor((final + init) /2);
    if (elem === arr[mitad]) {
    return `El indice donde se encuentre el elemento es ${mitad}`;
    }
    if (elem > arr[mitad]) {
    init = mitad + 1;
    return binarySearchRecursive(arr, elem, init, final);
    }
    if (elem < arr[mitad]) {
    final = mitad - 1;
    return binarySearchRecursive(arr, elem, init, final);
    }
    }
    function binarySearch(arr, elem) {
    let init = 0;
    let final = arr.length - 1;
    return binarySearchRecursive(arr, elem, init, final);
    }
    console.log(binarySearch([1,2,3,4,5],5));
```


## Constructor Exercises




