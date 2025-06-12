class Carro{
    constructor(nome, ano){
        this.nome = nome;
        this.ano = ano;
    }
    idade(){
        const data = new Date();
    return data.getFullYear() - this.ano;
    }
}
const carro1 = new Carro("BMW", 2033);
console.log(carro1.nome);
console.log(carro1.ano);
console.log(carro1.idade());

class Jogo{
    constructor(nome, ano) {
        this.nome = nome;
        this.ano = ano;
    }
    idade(){
        const data = new Date();
    return data.getFullYear() - this.ano;
    }
}

const jogo1 = new Jogo("GTA SAN ANDREAS", 2012);
console.log(jogo1);
console.log(jogo1.idade());
const jogo2= new Jogo("Cs 2", 2022);
console.log(jogo2);

class Pessoa{
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    falar(){
        return console.log(`Olá minha rapeize eu sou o ${this.nome} e tenho ${this.idade} anos`) -this.falar
    }
}

const Pessoa1 = new Pessoa("Cleiton Rasta", 66);
console.log(Pessoa1);
Pessoa1.falar();

const Pessoa2 =  new Pessoa('Joaquin Santos', 32);
Pessoa2.falar();

// areá triangulo

function areaTri(base,altura){
return base*altura/2;
}
console.log(areaTri(7,4));

function raizes(a,b,c){
    const Delta = b**2-4*a*c;
    return [(-b+Math.sqrt(Delta))/(2*a), (-b-Math.sqrt(Delta))/(2*a)]
}
console.log(raizes(1,4,-1));
console.log(raizes(1,4,-1)[0]);
console.log(raizes(1,4,-1)[1]);

function mediaArit(n1,n2,n3){
    return (n1+n2+n3)/3;
}

function mediaArit2(n1,n2,n3){
    const soma = n1+n2+n3;
    return soma/3;
}
console.log(mediaArit(8,9,10));

function mediaPond(n1,n2,n3,p1,p2,p3){
    return (n1*p1+n2*p2+n3*p3)/(p1+p2+p3);
}
console.log(mediaPond(7,8,4,2,2,3));

function mediaPond2(n1,n2,n3,p1,p2,p3){
    const prodInterno = n1*p1+n2*p2+n3*p3;
    const somaPesos = p1+p2+p3;
    return prodInterno/somaPesos;
}
console.log(mediaPond2(7,8,4,2,2,3));
