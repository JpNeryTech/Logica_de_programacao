// João Pedro Pereira Nery 25114290045

let anoInicial = 2024;
let anoFinal = 2500;

for (let ano = anoInicial; ano <= anoFinal; ano++){
    if (ano % 4 === 0 && ano % 100 !== 0 || ano % 400 === 0) {
        console.log(`${ano} é um ano bissexto.`);
    } else {
        console.log(`${ano} não é um ano bissexto.`);
    }
}