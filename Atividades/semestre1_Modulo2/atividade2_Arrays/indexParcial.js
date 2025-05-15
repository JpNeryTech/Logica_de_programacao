let arr = ["BMW", "Porshe", "Jaguar", "Volvo",  "Mitsubhishi"];
console.log(arr[3]);
console.log(arr.at(-1));

console.log("Array com o for");

for(let i = 0; i < arr.length; i++ ) {
    console.log(arr[i]);
}

console.log("Array com o for...of");
for (let carros of arr) {
    console.log(carros);
}

console.log("Array em ordem alfabetica");

arr.sort();
console.log(arr);

console.log("Array em ordem alfabetica reversa");

arr.sort().reverse();
console.log(arr);

console.log("Adicionando array númerica:");

let arrNum = [1, 58, 4, 8945, 159];
console.log(arrNum);

console.log("Array em ordem crescente");

arrNum.sort((a, b) => a - b); //crescente
console.log(arrNum);

console.log("Array em ordem decrescente");

arrNum.sort((a,b) => b - a); //decrescente
console.log(arrNum);

console.log ("Tirando o ultimo elemento com o pop");

arr3 = ["Apple", "Mango", "Pinepple", "Passion fruit"];
console.log(arr3.pop()); //pop ele remove o ultimo elemento e mostra o mesmo
console.log(arr3);

let plantas = ["Samambaia", "Jurema", "Ipe", "Bambu"];


console.log("Tirando elemento com o splice");
plantas.splice(3, 1); // no slice é como se estivesse falando começe do indice tal e apague tantos números, por exemplo começe do indice 0 e apague 2 numeros.
console.log(plantas);

console.log("Adicionando elementos com push");

let carrosAntigos = [];

carrosAntigos.push("Chevette");
console.log(carrosAntigos);

carrosAntigos.push("Opala");
console.log(carrosAntigos);

carrosAntigos.push("Cadillac");
console.log(carrosAntigos);

carrosAntigos.push("Gol quadrado");
console.log(carrosAntigos);