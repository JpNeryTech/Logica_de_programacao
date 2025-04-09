// João Pedro Pereira Nery 25114290045
const prompt = require('prompt-sync')({sigint:true});

let cor = prompt("Escolha a cor do semaforo: vermelho, amarelo ou verde: ");
cor = cor.toLowerCase();

if(cor !== "vermelho" && cor !== "amarelo" && cor !== "verde"){
    console.log("Cor inválida! Escolha entre vermelho, amarelo ou verde.");
    process.exit();

}else 
 switch(cor){
    case "vermelho":
        console.log("PARE! O semáforo está vermelho.");
        break;
        case "amarelo":
        console.log("ATENÇÃO! O semáforo está amarelo.");
        break;
        case "verde":
        console.log("SIGA! O semáforo está verde.");
        break;
 }
