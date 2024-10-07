const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    let str = input[0];
    let index = [];

    for(let i = 0; i < str.length; i++){
        if(str[i] === str[i].toUpperCase()){
            index.push(str[i].toLowerCase());
        }else{
            index.push(str[i].toUpperCase());
        }
    }
    console.log(index.join(''));
});
