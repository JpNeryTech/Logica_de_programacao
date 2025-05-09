const prompt = require('prompt-sync')({ sigint: true });
var n1 = parseFloat(prompt("Digite o primeiro número:"));
var n2 = parseFloat(prompt("Digite o segundo número:"))
var n3 = parseFloat(prompt("Digite o terceiro número:"))
var mediaAritimetica = (n1 + n2 + n3) / 3

if ((n1 >100 || n1 < 0) || (n2 >100 || n2 < 0) || (n3 >100 || n3 < 0) ) {
    console.log("Erro: O número escolhido não pode ser menor que 0 ou maior que 100.")
}
else {
        console.log(`A média aritmética dos números ${n1}, ${n2}, ${n3} é:  ${mediaAritimetica}`);

}