function numImpares(valorInicial, valorFinal){
    impares = [];
    for(let i=valorInicial; i<=valorFinal; i++){
        if(i%2==1){
            impares.push(i)
        }
    }

    return impares
}
let numInicial= 1;
let numFinal= 10;
console.log(numImpares(numInicial,numFinal));

//crie  uma função que tenha 2 numeros inteiros como entrada.
//e que retorne um array contendo somente os números.
//multiplos de 5 entre esses dois numeros, inclusive.

function multiplos5 (numInicial, numFinal){
    mul5 = [];
    for(let i = numInicial; i<= numFinal; i++){
        if(i % 5 == 0 ){
            mul5.push(i)
        }
    }
return mul5

}

numInicial = 1;
numFinal=50;
console.log(multiplos5(numInicial,numFinal));