function solution(n) {
  if (n % 2 === 1) {
      return ((1 + n) * ((n + 1) / 2)) / 2;
  } else {
      return (n * (n + 1) * (n + 2)) / 6;
      // 2 * (n/2) * ((n/2)+1) * (n+1) / 3
  }
}