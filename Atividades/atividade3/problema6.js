// João Pedro Pereira Nery 25114290045
const prompt = require('prompt-sync')({sigint:true});

let valorCompra = parseFloat(prompt("Digite o valor da compra(100,200 ou 300) para calcularmos o desconto:"));
if(valorCompra <100 || valorCompra > 300){
    console.log("ERRO: Este desconto so serve para compras de até 300 reais!");
    process.exit();
}

let case100 = valorCompra/100*10;
let resultado100 = valorCompra-case100;

let case200 = valorCompra/100*20;
let resultado200 = valorCompra-case200;

let case300 = valorCompra/100*30;
let resultado300 = valorCompra-case300;

switch(Math.round(valorCompra)){
    case 100:
        console.log(`O valor do desconto foi de 10% então o valor da compra é de: R$ ${resultado100}`);
        break;

    case 200:
        console.log(`O valor do desconto foi de 20% então o valor da compra é de: R$ ${resultado200}`);
        break;
        
    case 300:
        console.log(`O valor do desconto foi de 30% então o valor da compra é de: R$ ${resultado300}`);
        break;
}