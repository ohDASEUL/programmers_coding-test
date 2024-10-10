function solution(num_list) {
    let sum = num_list.reduce((acc, cur) => acc + cur, 0); 
    let sumSquare = sum * sum; 
    let product = num_list.reduce((acc, cur) => acc * cur, 1);

    if (product < sumSquare) {
        return 1; 
    } else {
        return 0; 
    }
}
