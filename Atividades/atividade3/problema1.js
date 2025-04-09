// João Pedro Pereira Nery 25114290045
const prompt = require('prompt-sync')({sigint:true});

let horario = parseFloat(prompt("Digite o horário atual em horas:"));
let horarioSegundos = horario * 3600;
let distancia = parseFloat(prompt("Digite a distância que você deseja percorrer em km:"));
let calculoMadrugada = (distancia*4.40) + 5.30;
let resultadoMadrugada = calculoMadrugada.toFixed(2);
let calculoDia = (distancia*3.80) + 3.30;
let resultadoDia = calculoDia.toFixed(2);
let calculoNoite = (distancia*4.10) + 4.30;
let resultadoNoite = calculoNoite.toFixed(2);

if( horarioSegundos >= 0 && horarioSegundos <= 21600) {
    console.log(`O valor a ser pago é de: R$ ${resultadoMadrugada}`);
} else if (horarioSegundos > 21600 && horarioSegundos <= 64800) {
    console.log(`O valor a ser pago é de: R$ ${resultadoDia}`);
} else if (horarioSegundos > 64800 && horarioSegundos <= 86400) {
    console.log(`O valor a ser pago é de: R$ ${resultadoNoite}`);
}
