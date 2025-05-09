const prompt = require('prompt-sync')({sigint: true})
var soma;
var n1 = parseFloat(prompt("Digite o primeiro número: "));
console.log(n1)
var n2 = prompt("Digite o segundo número: ");
n2 = parseFloat(n2);
console.log(n2)
var n3 = prompt("Digite o terceiro número:")
n3 = parseFloat(n3)
soma = n1+n2+n3;
var coordenador = prompt("Você deseja multiplicar esses números por qualquer um outro número?")
if (coordenador === 'sim'){
    var n4 = prompt("Digite o numero escolhido:")
    var resultado = (n1+n2+n3)*n4
    console.log(`O resultado da soma do número ${n1} mais o número ${n2} mais o número ${n3} é ${resultado}.` )
}
else{
    console.log("Obrigado por ultilizar o nosso site")
}


