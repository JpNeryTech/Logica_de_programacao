const prompt = require('prompt-sync')({ sigint: true });

var entrada = prompt("Digite um número inteiro entre 1890 e 2025:");
var ano = Number(entrada);

if(!Number.isInteger(ano)){
    console.log(`ERRO: O número ${entrada} não é um número inteiro.`);
}
else if (ano < 1890 || ano > 2025){
    console.log(`ERRO: O ano ${ano} não está entre 1890 e 2025.`);
}
else if (ano >= 1930 && ano % 4 === 0){
    console.log(`O ano ${ano} é ano de Olimpíadas.`);
} 
else {
    console.log(`O ano ${ano} não é ano de Olimpíadas.`);
}