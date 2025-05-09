const prompt = require('prompt-sync')({ sigint: true });

var nome = prompt("Por favor digite o seu nome completo: ");
var n1 = parseFloat(prompt("Digite a primeira nota (valores devem estar entre 0 e 10): "));
var n2 = parseFloat(prompt("Digite a segunda nota (valores devem estar entre 0 e 10): "));
var n3 = parseFloat(prompt("Digite a terceira nota (valores devem estar entre 0 e 10): "));

if ((n1 >10 || n1 <0) || (n2 >10 || n2 <0) || (n3 >10 || n3 <0)){
    console.log("ERRO: algumas das notas informadas são inválidas (menor que 0 ou maior que 10).")
}else{
    var media = (n1*3 + n2*3 + n3*4) / 10;

console.log(`A média do aluno é ${media.toFixed(1)}`);

if (media >= 5) {
    console.log(`PARABÉNS! O aluno ${nome} FOI APROVADO!`);
} 
else {
    console.log(`O aluno ${nome} FOI REPROVADO.`);
}
}
