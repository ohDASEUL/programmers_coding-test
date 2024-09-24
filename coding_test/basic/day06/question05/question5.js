function solution(arr, queries) {
  let answer = [];
  
  for (let i = 0; i < queries.length; i++) {
      let query = queries[i];
      let s = query[0];  
      let e = query[1];   
      let k = query[2];  

      let minValue = Infinity;
      
      for (let j = s; j <= e; j++) {
          if (arr[j] > k && arr[j] < minValue) {
              minValue = arr[j]; 
          }
      }
      if (minValue === Infinity) {
          answer.push(-1);
      } else {
          answer.push(minValue);
      }
  }
  
  return answer;
}
