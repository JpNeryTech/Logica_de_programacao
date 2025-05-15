const prompt = require("prompt-sync")({ sigint: true });

let anoInicial = parseInt(prompt("Digite o ano inicial entre 1930 até 2025: "));
let anoFinal = parseInt(prompt("Digite o ano final entre 1930 até 2025: "));

let checkcopa = [1930, 1934, 1938, 1950, 1954, 1958, 1962, 1966, 1970, 1974, 1978, 1982, 1986, 1990, 1994, 1998, 2002, 2006, 2010, 2014, 2018, 2022];

if(anoInicial <1930 || anoFinal > 2025 || anoInicial > anoFinal){
    console.log("ANO INVÁLIDO!")
} else {
    console.log(`Anos de Copa do Mundo entre ${anoInicial} e ${anoFinal}:`);

    for(let ano= anoInicial; ano<=anoFinal; ano++){
        if(checkcopa.includes(ano)){
            console.log(`O ano ${ano} é um ano de copa do mundo!`)
        } else {
            console.log(`O ano ${ano} não é um ano de copa do mundo!`)
        }
    }

    let copasIntervalo = checkcopa.filter(ano => ano >= anoInicial && ano <= anoFinal); //serve para checar se o ano está dentro do intervalo menor que anoInicial e maior que anoFinal

if(copasIntervalo.length >=1){   //o length vai servir para não dar undefined. por exemplo se a pesssoa digitar 2020 e 2025 não tera quarta nem a decima olimpiadas.
    console.log(`O ano que ocorreu a primeira copa do mundo no intervalo de ${anoInicial} e ${anoFinal} foi:` ,copasIntervalo[0]); 
}

if(copasIntervalo.length >=4){
    console.log(`O ano que ocorreu a quarta copa do mundo no intervalo de ${anoInicial} e ${anoFinal} foi:` ,copasIntervalo[3]);
}
if(copasIntervalo.length >=10){
    console.log(`O ano que ocorreu a décima copa do mundo no intervalo de ${anoInicial} e ${anoFinal} foi:` ,copasIntervalo[9]);
}

if(copasIntervalo.length >=1){
    console.log(`O ano que ocorreu a última copa do mundo foi:` ,copasIntervalo.at(-1)); //serve para pegar o ultimo numero da array
} 
}





















/*for(let ano= anoInicial; ano<=anoFinal; ano++){
    if(anoInicial < 1930 || anoFinal > 2025){
        console.log("Ano inválido!")
        break;
    }
    if(ano % 4 === 2 && ano >= 1930 && ano <= 2025){
        console.log(`O ano ${ano} é um ano de copa do mundo!`)
    } else {
        console.log(`O ano ${ano} não é um ano de copa do mundo!`)
    }
}
*/
