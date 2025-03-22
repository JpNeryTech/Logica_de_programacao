const prompt = require('prompt-sync')({ sigint: true });
var cor =prompt("Digite uma cor (amarelo, verde ou vermelho): ");
// transformar as cores em minusculo
var cor = cor.toLowerCase();
if (cor == "verde") {
    console.log("SIGA!")
} else if (cor == "amarelo") {
    console.log("ATENÇÃO!")
} else if (cor == "vermelho") {
    console.log("PARE!")
} else {
    console.log("ERRO: cores disponiveis: amarelo, verde ou vermelho")
}