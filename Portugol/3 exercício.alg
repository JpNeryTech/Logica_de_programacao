algoritmo "Escreva um algoritmo que leia tr�s n�meros e exiba o maior entre eles."
// Fun��o :
// Autor : Jo�o Pedro Nery
// Data : 05/03/2025
// Se��o de Declara��es 
var

n1: real
n2: real
n3: real

inicio
// Se��o de Comandos 

escreval("Insira o primeiro n�mero: ")
leia (n1)

escreval("Insira o segundo n�mero: ")
leia (n2)

escreval("Insira o terceiro n�mero: ")
leia (n3)

se (n1>n2) e (n1>n3)entao
escreval("O n�mero" ,n1, " � o maior")

senao
se(n2>n1) e (n2>n3)entao
escreval("O n�mero" ,n2, " � o maior")

senao
escreval("O n�mero" ,n3, " � o maior")

fimse
fimse


fimalgoritmo
