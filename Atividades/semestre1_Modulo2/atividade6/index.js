const prompt = require('prompt-sync')({signt:true});

function areaTrapézio() {
    let h = Number(prompt("Digite a altura do trapézio: "));
    let B = Number(prompt("Digite a Base Maior do trapézio: "));
    let b = Number(prompt("Digite a Base Menor do trapézio: "));

    let calcularArea = (B+b)*h/2;

    console.log(`A área do trapézio é ${calcularArea}`);
}

 areaTrapézio();

 function periParalelogramo() {
    let base = Number(prompt("Digite a base do paralelogramo: "));
    let lado = Number(prompt("Digite o lado do paralelogramo: "));

    let calcularPerimetro = 2 * (base + lado);

    console.log(`O perímetro do paralelogramo é ${calcularPerimetro}`);
 }

 periParalelogramo();

 function numImparesMultSete() {

    let numInicial = Number(prompt("Digite o primeiro número: "));
    let numFinal = Number(prompt("Digite o último número: "));

    let impares = [];

    for(let i = numInicial; i <= numFinal; i++) {
        if(i % 2 !== 0 && i % 7 !== 0) {
            impares.push(i);
        }
    }

    console.log(`Números ímpares que não são múltiplos de 7 ${impares}`);
 }

 numImparesMultSete();

 function palavra() {
    console.log("A vida é bela");
 }

  palavra();

  function parOuImpar() {

    let num = parseInt(prompt("Digite um número Inteiro"));

    if(num % 2 === 0) {
        console.log(`O número ${num} é PAR!`)
    } else {
        console.log(`O número ${num} é IMPAR!`)
    }

  }

  parOuImpar();
