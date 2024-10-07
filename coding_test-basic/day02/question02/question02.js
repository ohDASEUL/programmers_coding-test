const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    str1 = input[0];
    str2 = input[1];
    const trimStr1 = str1.trim();
    const trimStr2 = str2.trim();

    // const trimStr1 = str1.split(' ').join('');
    // const trimStr2 = str2.split(' ').join('');
    console.log(trimStr1+trimStr2)
});