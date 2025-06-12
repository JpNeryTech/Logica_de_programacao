//Solução atv 7
//1. Dado um array de números reais, mapeie cada elemento  
// deste array em seu inverso aditivo  (simétrico em relação a zero)
let numeros = [13,65,98,6,-7,-6,-2];
//1.1 Faça usando arrow function
console.log(numeros.map(x => -x));
//1.2 Faça usando function
function inverso(x){
    return -x
}
console.log(numeros.map(inverso));
//2. Dado um array A de 3 arrays com 4 elementos. Aplique o
// método map para calcular a média aritmética simples de
//cada elemento do array A.
let A = [[5,7,9,10],[7,2,5,6],[10,0,1,2]];
function mediaArit(array){
    soma = 0;
    for(const numero of array){
        soma += numero
    }
    return (soma/array.length).toFixed(2);
}
console.log(A.map(mediaArit));
//3. Dado um array de 7 números inteiros entre 0 e 1000. Retorne
//  um array que restrinja aos valores maiores que 5 e menores que 40.
let inteiros = [45,765,23,245,80,100,34];
console.log(inteiros.filter(x => x > 5 && x <40))

//3.1  retorne somente os ímpares
console.log(inteiros.filter(x => x % 2 ==1));
//3.2 retorne os pares
console.log(inteiros.filter(x => x%2 == 0));
//3.3 retorne os números terminados em 0.
console.log(inteiros.filter(x => x % 10 ==0));