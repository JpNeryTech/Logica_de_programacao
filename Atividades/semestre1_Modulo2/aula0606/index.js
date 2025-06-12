const prompt = require("prompt-sync")()

 function semaforo () {
    
    cor = prompt("Digite uma cor entre Verde Amarelo e Vermelho: ");
    cor.toLowerCase();
    let msg;

    switch(cor) {
        
        case "verde":
            console.log("Siga em frente");
            break;
        case "amarelo":
            console.log("ATENÇÃO!");
            break;
        case "vermelho":
            console.log("PARE!!");
            break;

            default: console.log("Cor invalida");
    }

    return msg;

  }

console.log(semaforo());


