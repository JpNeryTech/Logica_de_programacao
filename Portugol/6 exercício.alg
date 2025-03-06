algoritmo "Escreva um algoritmo que leia três números, a base maior, a base menor e a altura de um trapézio. Por fim, exiba o cálculo da área desse trapézio."
// Função :
// Autor :  João Pedro Nery
// Data : 05/03/2025
// Seção de Declarações 
var

base_maior: real
base_menor: real
altura: real
resultado: real

inicio
// Seção de Comandos 

escreval("Insira o tamanho da base maior do trapézio: ")
leia (base_maior)

escreval("Insira o tamanho da base menor do trapézio: ")
leia (base_menor)

escreval("Insira o tamanho da altura do trapézio: ")
leia (altura)

resultado <- ((base_maior + base_menor)* altura) / 2
escreval("A área do trapézio é:" ,resultado)

fimalgoritmo
