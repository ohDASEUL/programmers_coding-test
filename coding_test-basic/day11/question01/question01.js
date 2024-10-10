function solution(my_string) {
  let answer = [];
  
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const alphabetCounts = new Array(52).fill(0);
  
  for (let i = 0; i < my_string.length; i++) {
      let char = my_string[i];
      let index = alphabet.indexOf(char);
      if (index !== -1) {
          alphabetCounts[index]++;
      }
  }

  answer = alphabetCounts;
  
  return answer;
}

// 또는
// function solution(my_string) {
//   const counts = new Array(52).fill(0);
  
//   for (let char of my_string) {
//       if (char >= 'A' && char <= 'Z') {
//           counts[char.charCodeAt(0) - 'A'.charCodeAt(0)]++;
//       } else if (char >= 'a' && char <= 'z') {
//           counts[char.charCodeAt(0) - 'a'.charCodeAt(0) + 26]++;
//       }
//   }
  
//   return counts;
// }
