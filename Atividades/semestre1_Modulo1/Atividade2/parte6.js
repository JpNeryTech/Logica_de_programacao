const prompt = require('prompt-sync')({ sigint: true });
let numero = parseFloat(prompt("Digite um número real positivo: "));

if (isNaN(numero) || numero <=0) {
    console.log("ERRO: Insira um número real positivo valido.");
} else {
    let numeroInteiro = Math.floor(numero); //Converter o numero para inteiro, o mathflor semprre arredonda para baixo. ex: 5.9 = 5, -3,3 = -4
    console.log(`O número convertido para inteiro é: ${numeroInteiro}`);

    if (numeroInteiro % 3 === 0) {
        console.log(`O número ${numeroInteiro} é múltiplo de 3.`)
    } else {
        console.log(`O número ${numeroInteiro} não é múltiplo de 3.`)
    }
}
    

