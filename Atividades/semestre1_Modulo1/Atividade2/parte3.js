const { prompt, cor } = require('./parte5')

var  n1 = 5
var peso1= 1
var  n2= 3 
var peso2= 0
var  n3= 1
var peso3= 0
var media= ((n1*peso1)+(n2*peso2)+(n3*peso3)) / (n1 + n2 + n3);  
var resultado1
var resultado2
var resultado3

console.log(`Número 1 = ` ,n1)
console.log(`Peso 1=`,peso1)
console.log(`Numero 2 = ` ,n2)
console.log(`Peso 2 = ` ,peso2)
console.log(`Número 3` ,n3)
console.log(`Peso 3` ,peso3)

if ((n1,n2,n3 >10 || n1,n2,n3 <0)  ) {
        console.log( `Alguns dos números que você informou é invalido (>100 ou <0)`);
} 
else{ 
    console.log(`A média ponderada dos números ${n1}, ${n2}, e ${n3} é: ` ,media);
}
prompt(Digite, uma, cor(amarelo, verde, ou, vermelho));
