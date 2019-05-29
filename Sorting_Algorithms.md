# Sorting Algorithms
**Selection Sort**

    function selection_Sort(arr) {
       for (let i = 0; i < (arr.length) - 1; i++) {
        let index_mini = i;
        for (let j = i + 1; j < arr.length; j++) {
           if (arr[j] < arr[index_mini]) {
             index_mini = j;
           }
        }
        let temp=arr[i];
        arr[i]=arr[index_mini];
        arr[index_mini]=temp;
       }
       return arr;
    }

**Insertion Sort**

    function insertionSort(arr)  
    {  
         
        for (var i =0 ; i <arr.length; i++) 
        {  
            var temp = arr[i];  
            var j = i - 1; 
            while (j >= 0 && arr[j] > temp) 
            {  
                arr[j + 1] = arr[j];  
                j = j - 1;  
            }  
            arr[j + 1] = temp;  
        }
        return arr;  
    }  

**Bubble Sort**

    function bubblesort(numArray){
      for (var i=0;i<(numArray.length)-1;i++){
         var numero=numArray[i];
         var pos1=i;
      for (var j=i+1;j<numArray.length;j++){
        if(numero>mumArray[j]){
           numero=numArray[j];
           pos1=j;
        }
      var temp=numArray[i]
      numarray[i]=numero;
      numarray[pos1]=temp;
     }
     return numArray;
    }

