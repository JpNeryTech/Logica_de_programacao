var  n1 = 25
var  n2= 50 
var  n3= 150
var media= (n1+n2+n3)/3

console.log(`Número 1 = `,n1)
console.log(`Número 2 = `,n2)
console.log(`Número 3 = `,n3)

if ((n1 >100 || n1 <0) ||  (n2 >100 || n2 <0) ||  (n3 >100 || n3 <0) ) {
        console.log( `Alguns dos números que você informou é invalido (>100 ou <0)`);
} 
else{ 
    console.log(`A média aritimética dos números ${n1}, ${n2}, e ${n3} é: ` ,media);
}



 

