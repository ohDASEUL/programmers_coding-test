function solution(a, b) {
  let aPb = String(a) + String(b);
  let bPa = String(b) + String(a);
  if (aPb > bPa) {
    return parseInt(aPb);
  } else {
    return parseInt(bPa);
  }
}

// 더 간단하게 한다면
// function solution(a, b) {
//     return Math.max(Number(`${a}${b}`), Number(`${b}${a}`));
// }