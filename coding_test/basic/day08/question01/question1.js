function solution(x1, x2, x3, x4) {
  var answer = true;
  
  let x1ORx2 = x1 || x2
  let x3ORx4 = x3 || x4
  
  answer = x1ORx2 && x3ORx4
  
  return answer;
}