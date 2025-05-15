// João Pedro Pereira Nery 25114290045
const prompt = require('prompt-sync')({sigint:true});

let premiado1 = 7;
let premiado2 = 25;
let premiado3 = 77;
let numeroEscolhido = parseInt(prompt("Digite um número entre 1 e 100: "));

if (numeroEscolhido <1 || numeroEscolhido >100){
    console.log("Número inválido! Digite um número entre 1 e 100.");
    process.exit();
} else
if (numeroEscolhido === premiado1 || numeroEscolhido === premiado2 || numeroEscolhido === premiado3){
    console.log("PARABÉNS! Você acertou o número premiado!");
    process.exit();
} else{
    console.log("NÚMERO ERRADO! você tem mais duas tentativas!");
}

let numeroEscolhido2 = parseInt(prompt("Digite um número entre 1 e 100: "));
if(numeroEscolhido2 <1 || numeroEscolhido2 >100){
    console.log("Número inválido! Digite um número entre 1 e 100.");
    process.exit();
} 
if (numeroEscolhido2 === premiado1 || numeroEscolhido2 === premiado2 || numeroEscolhido2 === premiado3){
    console.log("PARABÉNS! Você acertou o número premiado!");
    process.exit();
} else{
    console.log("NÚMERO ERRADO! você tem mais uma tentativa!");

} let numeroEscolhido3 = parseInt(prompt("Digite um número entre 1 e 100:"));
if(numeroEscolhido3 <1 || numeroEscolhido3 >100){
    console.log("Número inválido! Digite um número entre 1 e 100.");
    process.exit();
} 
if (numeroEscolhido3 === premiado1 || numeroEscolhido3 === premiado2 || numeroEscolhido3 === premiado3){
    console.log("PARABÉNS! Você acertou o número premiado!");
    process.exit();
} else{
    console.log("Você zerou o número de tentativas! Boa sorte na próxima!");
}
