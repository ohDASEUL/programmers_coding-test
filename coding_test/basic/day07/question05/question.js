function solution(arr) {
  var stk = [];
  for (let i = 0; i < arr.length; ) {
    if (stk.length === 0) {
      stk.push(arr[i]);
      i++;
    } else if (stk.at(-1) < arr[i]) {
      stk.push(arr[i]);
      i++;
    } else {
      stk.pop();
    }
  }

  return stk;
}

// 또는
// function solution(arr) {
//     var stk = [];
//     let i = 0; 
//     while (i < arr.length) {
//         if (stk.length === 0) {
//             stk.push(arr[i]);
//             i += 1;
//         } else if (stk.at(-1) < arr[i]) {
//             stk.push(arr[i]);
//             i += 1;
//         } else {
//             stk.pop();
//         }
//     }
//     return stk;
// }
