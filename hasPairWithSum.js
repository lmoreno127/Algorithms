function HasPairWithSum(data,sum){
    var comp=new Set();
    for(var i=0;i<data.length;i++){
        if(comp.has(data[i])){
            return true;
        }
        comp.add(sum-data[i]);
    } 
    return false;
}
