function solution(intStrs, k, s, l) {
  let result = [];
  for (let i = 0; i < intStrs.length; i++) {
  
      let sliceStr = intStrs[i].slice(s, s + l)
      let changeInt = Number(sliceStr)
      if(changeInt > k){
          result.push(changeInt);
      }
  }
  return result
}