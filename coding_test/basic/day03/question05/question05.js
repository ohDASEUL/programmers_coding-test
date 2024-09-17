function solution(a, b) {
    var concatenated = String(a) + String(b);
    var multiplied = 2 * String(a) * String(b);
    
    if(concatenated>multiplied || concatenated>multiplied){
       return parseInt(concatenated); 
    }else{
        return parseInt(multiplied);
    }
}