var n1 = 100;
var n2 = 50;
var n3 = 60;
var mediaAritimetica = (n1 + n2 + n3) / 3;

console.log(`Número 1 = ` ,n1);
console.log(`Número 2 =` ,n2);
console.log(`Número 3 = ` ,n3);

if ((n1 >100 || n1 < 0) || (n2 >100 || n2 <0) || (n3 >100 || n3 <0) ) {
    console.log("Erro: O número escolhido não pode ser menor que 0 ou maior que 100.")
}
else {
        console.log(`A média aritmética dos números ${n1}, ${n2}, ${n3} é:  ${mediaAritimetica}`);

}