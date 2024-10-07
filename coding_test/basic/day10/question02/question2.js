function solution(my_string, is_suffix) {
    let answer = [];
    answer.push(my_string.slice(0, is_suffix.length));
    
    return Number(answer.includes(is_suffix));
}