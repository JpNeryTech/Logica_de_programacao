algoritmo "Escreva um algoritmo que leia três números e exiba o maior entre eles."
// Função :
// Autor : João Pedro Nery
// Data : 05/03/2025
// Seção de Declarações 
var

n1: real
n2: real
n3: real

inicio
// Seção de Comandos 

escreval("Insira o primeiro número: ")
leia (n1)

escreval("Insira o segundo número: ")
leia (n2)

escreval("Insira o terceiro número: ")
leia (n3)

se (n1>n2) e (n1>n3)entao
escreval("O número" ,n1, " é o maior")

senao
se(n2>n1) e (n2>n3)entao
escreval("O número" ,n2, " é o maior")

senao
escreval("O número" ,n3, " é o maior")

fimse
fimse


fimalgoritmo
