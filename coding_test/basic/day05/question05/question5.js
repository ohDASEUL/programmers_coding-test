function solution(num_list) {
    const even = num_list.filter(num => num % 2 === 0).join('');
    const odd = num_list.filter(num => num % 2 === 1).join('');
    return Number(even) + Number(odd);
}
