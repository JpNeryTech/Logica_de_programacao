const prompt = require('prompt-sync')({sigint:true});

let horario = parseFloat(prompt("Digite o horário atual em horas:"));
let horarioSegundos = horario*60;
let distancia = parseFloat(prompt("Digite a distância que você deseja percorrer em km:"));
let calculoMadrugada = (distancia*4.40) + 5.30;

if( horarioSegundos === 0 || horarioSegundos <= 21600) {
    console.log(`O valor a ser pago é de: R$ ${calculoMadrugada}`);
}
