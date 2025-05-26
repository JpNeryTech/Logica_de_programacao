const prompt = require('prompt-sync')({ sigint: true });
var n1 = parseFloat(prompt("Digite um numero inteiro:"));
if (n1 % 2 == 0){
    console.log(`O número ${n1} é par`)
}

else{
    console.log(`O número ${n1} é impar`)
}