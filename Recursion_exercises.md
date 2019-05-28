# Recursion exercises

# 1.Factorial
    function factorial(n){
      if(n == 1){
       return 1;
      }
      return n * factorial(n-1);
    }
    
# 2.Fibonacci
    function fibonacci(n){
    if ((n === 1) || (n === 0)) return 1;
    return fibonacci(n-1) + fibonacci(n-2);
    }


# 3.Flatten
    function flatten(arr) {
      let newArr = [];
      arr.forEach((value)=>{
      if(Array.isArray(value)) {
       newArr = newArr.concat(flatten(value))
      }
      else{
       newArr.push(value);
      }
    });
    return newArr;
    }
# 4.Collatz
    function collatz(num) {
        if(num / 2 === 1) return 1;
        if(num % 2 == 0){
          num = num / 2;
        }else {
          num = (3 * num) + 1;
        }
        return 1 + collatz(num);
    }
# 5.Pascal Triangle 
    function pascaltri(col,row){
        if((col == 0) || (row==col))
          return 1;
        return pascaltri(col-1,row-1) + pascaltri(col,row-1);
    }
    
    function pascal(num) {
       let tri='';
      for(let i=0;i<num;i++){
        for(let j=0;j<i+1;j++)
          tri+=pascaltri(j,i) + " ";
        tri+="\n";
      }
      return tri;
    }

