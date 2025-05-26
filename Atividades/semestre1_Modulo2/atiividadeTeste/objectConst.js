// FORMA CONSTRUTORA
// A forma construtora é uma maneira de criar objetos em JavaScript usando funções construtoras.

function Carro(modelo, ano, motor, propietario) {
    this.modelo = modelo;
    this.ano = ano;
    this.motor = motor;
    this.propietario = propietario;
}
console.log(Carro);

const Carro1 = new Carro("BMW M4", 2022, "V8", "João Pedro Pereira Nery");
console.log(Carro1);

const Carro2 = new Carro("Porshe gt3 rs", 2023, "V8", "João Pedro Pereira Nery");
console.log(Carro2);

carros = [];
carros.push(Carro1, Carro2);
console.log(carros);

console.log(carros[0]);
console.log(carros[1].motor);

console.log("Testando em uma outra array");

function dog(raca, nome, cor, idade) {
    this.raca = raca;
    this.nome = nome;
    this.cor = cor;
    this.idade = idade;
} 
console.log(dog);

const dog1 = new dog("Bull Terrier", "bug", "preto", 3);
console.log(dog1)
;
const dog2 = new dog("Golden", "Renatinho", "Caramelo", 5);
console.log(dog2);

dogs = [];
dogs.push(dog1, dog2);
console.log(dogs);

console.log(dogs[0]);
console.log(dogs[0].idade);
console.log(dogs[1].raca);

// eliminando o s

carros.pop();
console.log(carros);

