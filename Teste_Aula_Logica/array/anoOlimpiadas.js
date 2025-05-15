const prompt = require("prompt-sync")({ sigint: true });

let anoInicial = parseInt(prompt("Digite o ano inicial entre 1896 até 2025: "));
let anoFinal = parseInt(prompt("Digite o ano final entre 1896 até 2025: "));

let checkOlimpiadas = [ 1896, 1900, 1904, 1908, 1912, 1920, 1924, 1928, 1932, 1936, 1948, 1952, 1956, 1960, 1964, 1968, 1972, 1976, 1980, 1984, 1988, 1992, 1996, 2000, 2004, 2008, 2012, 2016, 2020, 2024];

if(anoInicial < 1896 || anoFinal > 2025 || anoInicial > anoFinal) {
    console.log("ANO INVÁLIDO!");
} else {
console.log(`Anos de Olimpíadas entre ${anoInicial} e ${anoFinal}:`);

for(let ano = anoInicial; ano <=anoFinal; ano++){
    if(checkOlimpiadas.includes(ano)){
        console.log(`O ano ${ano} é um ano de Olimpíadas!`);
    } else{
        console.log(`O ano ${ano} não é um ano de Olimpíadas!`);
    }
}

let olimpiadasIntervalo = checkOlimpiadas.filter(ano => ano >= anoInicial && ano <= anoFinal);

if(olimpiadasIntervalo.length >=1){ //o length vai servir para não dar undefined. por exemplo se a pesssoa digitar 2020 e 2025 não tera quarta nem a decima olimpiadas.
console.log(`O ano que ocorreu a primeira Olimpíada no intervalo de ${anoInicial} e ${anoFinal} foi:`, olimpiadasIntervalo[0]);
}
if(olimpiadasIntervalo.length >=4){
console.log(`O ano que ocorreu a quarta Olimpíada no intervalo de ${anoInicial} e ${anoFinal} foi:`, olimpiadasIntervalo[3]);
}
if(olimpiadasIntervalo.length >=10){
console.log(`O ano que ocorreu a décima Olimpíada no intervalo de ${anoInicial} e ${anoFinal} foi:`, olimpiadasIntervalo[9]); //"Se olimpiadas intervalo tiver o comprimento maior ou igual a 10, então ele vai imprimir o ano da décima olimpíada"
}
if(olimpiadasIntervalo.length >=1){
console.log(`O ano que ocorreu a última Olimpíada no intervalo de ${anoInicial} e ${anoFinal} foi:`, olimpiadasIntervalo.at(-1));
}
}

