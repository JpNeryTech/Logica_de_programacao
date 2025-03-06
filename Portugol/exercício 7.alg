algoritmo "Escreva um algoritmo que receba e leia do usuário um número que representará o raio de um círculo. Exiba ao usuário o resultado da área e do perímetro desse círculo.Considere p = 3,1416."
// Função :
// Autor :  João Pedro Nery
// Data : 05/03/2025
// Seção de Declarações 
var

raio: real
area: real
perimetro: real
constante_pi: real

inicio
// Seção de Comandos 
constante_pi:= 3,1416

escreval("Insira o raio do círculo:")
leia (raio)

area := constante_pi * (raio * raio)
escreval("A área do círculo é:" ,area)

perimetro := 2 * constante_pi * raio
escreval("O perimetro do círculo é:" ,perimetro)

fimalgoritmo
