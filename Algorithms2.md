# Exercises

# 1. Jewels-and-Stones
     var numJewelsInStones = function(J, S) {
     let frec={};
         for (let i = 0; i < J.length; i++) {
           frec[J[i]] = 0;
         }
         for(let i=0; i < S.length; i++){
           if(frec.hasOwnProperty(S[i])){  //la complejidad temporal de esta función es O(1)
              frec[S[i]] += 1;
           }
         }
         let sum=0;
         for(let jewel in frec){
            sum += frec[jewel];
         }
         return sum;
    };

    


**Complejidad temporal**:**O**(n+m)
**Complejidad espacial**:**O**(n)


# 2.Two Sums


    var twoSum = function(nums, target) {
    var obje={};
    for(var i=0;i<nums.length;i++){
      let complement = target-nums[i];  
      if(complement in obje){        
        return [obje[complement],i]
      }
      obje[nums[i]]=i;
    }
    };

**Complejidad temporal:O**(n)
**Complejidad espacial:O**(n)

# 3.Valid Anagram


    var isAnagram = function(s, t) {
    if(s.length != t.length){
    return false;
    }
    let obs={};
    for(let i=0;i<s.length;i++){
     if(obs.hasOwnProperty(s[i])){
       obs[s[i]]+=1;
     }
     else{
       obs[s[i]]=1;
     }
    }
    let obt={};
    for(let i=0;i<t.length;i++){
     if(obt.hasOwnProperty(t[i])){
       obt[t[i]]+=1;
     }
     else{
       obt[t[i]]=1;
     }
    }
    for(var letra in obs){
     if(obs[letra] != obt[letra]){
       return false;
     }
    }
    return true;
    };

**Complejidad Temporal**:**O**(n)
**Complejidad Espacial**:**O**(n)


