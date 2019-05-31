# numDuplicados with complexity O(n)
```javascript
    numDuplicados(str)
    obj {a = 2, b = 1, c =1, }
    for key in str
      obj[key] =  obj[key] o 0 + 1
    
    cont=0
    for each llave in obj
        if obj[llave]>1
         cont++
    retornar cont 
```
