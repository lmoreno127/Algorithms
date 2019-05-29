# Algorithms 1

# Ejercicio 1 y 2

Write a function called repeatedChars that receives two strings and returns a new string with the characters that are repeated in both input strings:
console.log(repeatedChars("german", "gabriela")); // "gear"



    contraejemplo sin () y (*)
    abracadabra, palabras
    repeatedChars(str1, str2)
    newStr=""
    for each car1 in str1
    for each car2 in str2
    if car1 == car2 
    newStr += car1
    for each car1 in str1 ()
    Eliminar car1 in str1
    for each car2 in str2 (*)
    Eliminar car2 in str2

******Complejidad temporal:O(n*m)**
**Complejidad espacial:O(n)**

# Ejercicio 2

Write a function called findLongestWordLength that receives a string and returns the length of the longest word in the sentence.
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog")); // 6


    findLongestWordLength(str)
    maxLength = 0
    words=str.split //transformar str en un array de palabras (words= [The, quick, brown, fox, jumped, over, the, lazy, dog])
    for each word in words
    count = 0
    for each char in word
    count++
    if count>maxLength
    maxLength=count
    return maxLength


## Complejidad temporal:O(n)

**Complejidad Espacial:O(n)**

# Ejercicio 3

Write a function called sort that receives an array of numbers and return the array in sorted order (ascending) without using the sort method.
console.log(sort([5, 8, 3, 0, 7])); // [0, 3, 5, 7, 8]


    sort(numArray)
    for i=0;i<(longitud de numArray)-1;i++
    numero=numArray[i]
    pos1=i
    for j=i+1;j
    si numero>numArray[j] 
    numero=numArray[j]
    pos1=j
    temp=numArray[i]
    numarray[i]=numero
    numarray[pos1]=temp
    return numArray

**Complejidad temporal:O(n^2)**
**Complejidad espacial:O(1)**

# Ejercicio 4

Write a function called anagram that receives two strings and returns true if the strings are anagrams, false otherwise. 
Two words are anagrams if one of them has exactly same characters as that of the another word
console.log(anagram("anagram", "nagaram")); // true
console.log(anagram("hello", "world")); // false

    anagram(str1,str2)
    if longitud de str1 != longitud de str2
        return false
    count = 0 //7
    for each char1 in str1
    for each char2 in str2
    if char1 == char 2
    Detele char1 in str1
    Delete char2 in str2
    count++
    Break
    if count == longitud de str1
       return true
    return false

**Complejidad temporal:O(n^2)**
**Complejidad espacial:O(1)**

# Ejercicio 5

Write a function called tictactoe that receives a matrix and returns true if it's winning for 'X' or 'O'.
console.log(tictactoe([
['X', '', 'O'],
['', 'X', 'O'],
['O', '', 'X']
])); // true
console.log(tictactoe([
['O', 'X', 'O'],
['', 'X', 'O'],
['O', '', 'X']
])); // false

    tictactoe(game)
    if (game\[0\][0]==game\[1\][0]) and (game\[1\][0]==game\[2\][0])
          return true
    else if (game\[0\][1]==game\[1\][1]) and (game\[1\][1]==game\[2\][1])
          return true
    else if (game\[0\][2]==game\[1\][2]) and (game\[1\][2]==game\[2\][2])
            return true
    else if (game\[0\][0]==game\[1\][1]) and (game\[1\][1]==game\[2\][2])
             return true
    else if (game\[0\][2]==game\[1\][1]) and (game\[1\][1]==game\[2\][0])
              return true
    else if (game\[0\][0]==game\[0\][1]) and (game\[0\][1]==game\[0\][2])
               return true
    else if (game\[2\][0]==game\[2\][1]) and (game\[2\][1]==game\[2\][2])
               return true
    else if (game\[1\][0]==game\[1\][1]) and (game\[1\][1]==game\[1\][2])
               return true
    else
              return false

**Complejidad temporal:O(1)**
**Complejidad espacial:O(1)**

