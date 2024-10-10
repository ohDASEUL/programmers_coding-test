function solution(my_string, m, c) {
    var answer = '';
    for (let i = 0; i < Math.floor(my_string.length / m); i++) {
        let slicePart = my_string.slice(i * m, (i + 1) * m); 
        let selectedChar = slicePart[c-1]; 
        answer += selectedChar;  
    }
    
    return answer;
}
