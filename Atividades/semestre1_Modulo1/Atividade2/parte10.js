const prompt = require('prompt-sync')({ sigint: true });
let palavra = prompt("Digite uma palavra:");
let palavraInvertida = palavra.split("").reverse().join("");
console.log(`A palavra invertida é: ${palavraInvertida}`);