const prompt = require('prompt-sync')({ sigint: true });

let entrada = prompt("Digite um número inteiro entre 1970 e 2025: ");
let ano = Number(entrada);

if (!Number.isInteger(ano)){
    console.log(`ERRO: O número ${entrada} não é um número inteiro.`);
}
else if (ano <1970 || ano >2025) {
    console.log(`ERRO: O ano ${ano} não está entre 1970 e 2025.`)
} 
else if (ano >= 1974 && ano % 4 === 2) {
        console.log(`O ano ${ano} é ano de copa do mundo!.`)
    } 
    else {
        console.log(`O ano ${ano} não é ano de copa do mundo.`)
    }
