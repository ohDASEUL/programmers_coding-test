function solution(arr, queries) {
  for (let i = 0; i < queries.length; i++) {
    let query = queries[i];
    let s = query[0];
    let e = query[1];
    let k = query[2];

    for (let j = s; j <= e; j++) {
      if (j % k === 0) {
        arr[j] += 1;
      }
    }
  }
  return arr;
}
