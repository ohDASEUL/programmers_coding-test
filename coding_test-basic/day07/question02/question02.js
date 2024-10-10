function solution(l, r) {
  var answer = [];

  for (let i = l; i <= r; i++) {
    let str = String(i);
    let valid = true;
    for (let j = 0; j < str.length; j++) {
      if (str[j] !== "0" && str[j] !== "5") {
        valid = false;
        break;
      }
    }
    if (valid) {
      answer.push(i);
    }
  }
  if (answer.length === 0) {
    return [-1];
  }
  return answer;
}

// 또는
// function solution(l, r) {
//   var answer = [];

//   for (let i = l; i <= r; i++) {
//     let str = String(i);
//     if ([...str].every((char) => char === "0" || char === "5")) {
//       answer.push(i);
//     }
//   }

//   if (answer.length === 0) {
//     return [-1];
//   }

//   return answer.sort((a, b) => a - b);
// }
