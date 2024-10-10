function solution(my_string, indices) {
  let answer = '';
  my_string = [...my_string];
  answer = my_string.filter((_, index) => !indices.includes(index)).join('');
  return answer;
}
