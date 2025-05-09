const prompt = require('prompt-sync')({ sigint: true });

var entrada = prompt("Digite um número inteiro entre 1896 e 2025:");
var ano = Number(entrada);

if(!Number.isInteger(ano)){
    console.log(`ERRO: O número ${entrada} não é um número inteiro.`);
}
else if (ano <1896 || ano!= 1916 || ano!= 1940 || ano!= 1944){
    console.log(`ERRO: O ano ${ano} não foi ano de copa do mundo.`);
}
else if (ano >= 1896 && ano % 4 === 0){
    console.log(`O ano ${ano} é ano de Olimpíadas.`);
} 
else {
    console.log(`O ano ${ano} não é ano de Olimpíadas.`);
}