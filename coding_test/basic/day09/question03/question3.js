function solution(my_string, n) {
  let answer = '';
  let last = my_string[my_string.length - n]
  answer = my_string.slice(-n);
  return answer;
}
