const prompt = require("prompt-sync")({sigint:true});

let letra = prompt("Digite uma letra qualquer!").toLowerCase();

if(letra.length !==1 || !letra.match(/[a-z]/)){
console.log(`${letra} não é uma letra válida!`);
} else{
    let vogais =['a','e','i','o','u'];
    if (vogais.includes(letra)){
        console.log(`A letra ${letra} é uma vogal!`);
    } else{
    console.log(`${letra} não é uma vogal`);
}
}



