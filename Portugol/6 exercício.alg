algoritmo "Escreva um algoritmo que leia tr�s n�meros, a base maior, a base menor e a altura de um trap�zio. Por fim, exiba o c�lculo da �rea desse trap�zio."
// Fun��o :
// Autor :  Jo�o Pedro Nery
// Data : 05/03/2025
// Se��o de Declara��es 
var

base_maior: real
base_menor: real
altura: real
resultado: real

inicio
// Se��o de Comandos 

escreval("Insira o tamanho da base maior do trap�zio: ")
leia (base_maior)

escreval("Insira o tamanho da base menor do trap�zio: ")
leia (base_menor)

escreval("Insira o tamanho da altura do trap�zio: ")
leia (altura)

resultado <- ((base_maior + base_menor)* altura) / 2
escreval("A �rea do trap�zio �:" ,resultado)

fimalgoritmo
