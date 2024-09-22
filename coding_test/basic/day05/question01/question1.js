function solution(code) {
    var answer = '';
    let mode = 0;
    
    for (let idx = 0; idx < code.length; idx++) {  
        if (code[idx] === '1') {
            mode = mode === 0 ? 1 : 0;
        } else {
            if (mode === 0 && idx % 2 === 0) {
                answer += code[idx];
            } else if (mode === 1 && idx % 2 !== 0) {
                answer += code[idx];
            }
        }
    }
    
    return answer === '' ? 'EMPTY' : answer;
}
