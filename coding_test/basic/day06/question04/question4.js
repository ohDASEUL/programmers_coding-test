function solution(arr, queries) {
  for (let i = 0; i < queries.length; i++) {
    let query = queries[i];
    let start = query[0];
    let end = query[1];

    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
  }
  return arr;
}
