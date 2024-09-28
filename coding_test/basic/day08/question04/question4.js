function solution(number) {
    const sumOfDigits = n => [...number.toString()].reduce((sum, d) => sum + +d, 0);
    return sumOfDigits(number) % 9;

}