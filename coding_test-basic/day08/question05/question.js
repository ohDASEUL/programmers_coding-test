function solution(my_string, queries) {
  for(let i = 0; i < queries.length; i++){
      let query = queries[i]
      let start = query[0];
      let end = query[1];
      let mySubStr = my_string.substring(start, end + 1);
      let myArray = [...mySubStr].reverse()
      let front = my_string.slice(0, start);
      let reversed = myArray.join('');
      let back = my_string.slice(end + 1);
      
      my_string = front + reversed + back;
  }
  return my_string;
}