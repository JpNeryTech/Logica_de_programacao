// João Pedro Pereira Nery 25114290045
const prompt = require('prompt-sync')({sigint: true});

const diasPorMes = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

let dataCompleta = prompt("Digite sua data de nascimento (formato DD/MM/AAAA): ");
let partes = dataCompleta.split("/");

let dia = parseInt(partes[0]);
let mes = parseInt(partes[1]);

if (mes < 1 || mes > 12 || dia < 1 || dia > diasPorMes[mes - 1]) {
    console.log("Data inválida!");
    process.exit(); 
}

let signo = "";

if ((dia >= 21 && mes === 3) || (dia <= 20 && mes === 4)) signo = "Áries";
else if ((dia >= 21 && mes === 4) || (dia <= 20 && mes === 5)) signo = "Touro";
else if ((dia >= 21 && mes === 5) || (dia <= 20 && mes === 6)) signo = "Gêmeos";
else if ((dia >= 21 && mes === 6) || (dia <= 22 && mes === 7)) signo = "Câncer";
else if ((dia >= 23 && mes === 7) || (dia <= 22 && mes === 8)) signo = "Leão";
else if ((dia >= 23 && mes === 8) || (dia <= 22 && mes === 9)) signo = "Virgem";
else if ((dia >= 23 && mes === 9) || (dia <= 22 && mes === 10)) signo = "Libra";
else if ((dia >= 23 && mes === 10) || (dia <= 21 && mes === 11)) signo = "Escorpião";
else if ((dia >= 22 && mes === 11) || (dia <= 21 && mes === 12)) signo = "Sagitário";
else if ((dia >= 22 && mes === 12) || (dia <= 20 && mes === 1)) signo = "Capricórnio";
else if ((dia >= 21 && mes === 1) || (dia <= 19 && mes === 2)) signo = "Aquário";
else if ((dia >= 20 && mes === 2) || (dia <= 20 && mes === 3)) signo = "Peixes";
else {
    console.log("Data inválida!");
    process.exit();
}

console.log("Seu signo é:", signo);