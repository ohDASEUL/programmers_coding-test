function solution(num_list) {
    var answer = [];
    for(let i = 0; i< num_list.length; i++){
        if(num_list[i] < 0) {
            answer.push(i)
            return answer[answer.length - 1]
        }
    }
    return -1;
}