//forma literal

let carro1 = {
    nome: "Supra",
    marca: "Toyota",
    ano: 2020,
    cor: "laranja"
};

console.log(carro1);

let carro2 = {
    nome: "Lancer Evo",
    marca: "Mitsubishi",
    ano: "2018",
    cor: "roxa"
};

console.log(carro2);

let carro3 = {
    nome: "Golf GTI",
    marca: "Volkswagen",    
    ano: "2021",
    cor: "Branco"
}

console.log(carro3);

//forma construtora

function peca(nome, marca, material, cor) {

    this.nome= nome;
    this.marca=marca;
    this.ano=material;
    this.cor=cor;

}

const peca1 = new peca("Aerofolio", "Mitsubishi", "Carbono", "Preto");
console.log(peca1);

const peca2 = new peca("Nitro", "Nos", "Óxido Nitroso", "Azul" );
console.log(peca2);

const peca3 = new peca("Pneu", "Pirelli", "Borracha", "Preto");
console.log(peca3);

// puxando as chaves com o for in

for (let chaves in carro1) {
    console.log(chaves);
}

for (let chaves in carro2) {
    console.log(chaves)
}

for (let chaves in carro3) {
    console.log(chaves)
}

// puxando os valores com o for in

for (let valores in carro1) {
    console.log(carro1[valores]);
}

for (let valores in carro2) {
    console.log(carro2[valores]);
}

for (let valores in carro3) {
    console.log(carro3[valores])
}

// colocando os objetos dentro de um array

let carros = [];
carros.push(carro1, carro2, carro3);
console.log(carros);

// adicionando itens no array

let carro4 = {
    nome: "Opalla",
    marca: "Chevrolet",    
    ano: "1970",
    cor: "Preto"
}

carros.push(carro4)
console.log(carros);

// adicionando no começo do array
let carro5 = {
    nome: "Chevette",
    marca: "Chevrolet",    
    ano: "1993",
    cor: "Cinza"
}

carros.unshift(carro5);
console.log(carros);   

// eliminando o primeiro e ultimo item do array

carros.pop(), carros.shift();
console.log(carros);

// terceiro atrbuto do segundo elemento criado no array 

console.log(carros[1].ano); 

// EXTRA

let primos = [2, [5, 7, 11, [97, 23]], [2, 53, [29, 7]]];
console.log(primos[1][3][0]);

// EXTRA
for (let i = 1; i <= 6; i++) {
  console.log("*".repeat(i));
}

