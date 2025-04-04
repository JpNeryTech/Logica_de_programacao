const prompt = require('prompt-sync')({ sigint: true });
var idade = prompt("Por favor digite a sua idade:")
var bebida = (idade >= 18) ? "Wisky" : "Refrigerante";
console.log(`A pessoa tem ${idade} anos, logo sua bebida é ${bebida }.`); 
if (bebida == "Wisky") {
    console.log("SE DIVIRTA! MAS LEMBRE-SE, SE BEBER NÃO DIRIJA!");
} else{
    console.log("SE DIVIRTA! SEM MODERAÇÃO!");
}

var fristcheck = false,
    secondCheck = false,
    acess = (fristcheck == true)
        ? "Acess denied"
        : secondCheck == true
            ? "Acess denied"
            : "Acess granted";
            console.log("Acesso liberado ao open bar" );

