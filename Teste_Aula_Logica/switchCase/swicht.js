const prompt = require(`prompt-sync`)({signt : true})
let cor = prompt("Digite uma cor entre Verde,Amarelo e vermelho: ")
cor = cor.toLocaleLowerCase
let = frase;

switch(cor){

    case "verde":
        frase ="siga";
        break;
    case "amarelo":
        frase ="Atenção";
        break;
    case "vermelho":
        frase ="Pare";
        break;
}
