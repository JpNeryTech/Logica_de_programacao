algoritmo "Escreva um algoritmo que receba e leia do usu�rio um n�mero que representar� o raio de um c�rculo. Exiba ao usu�rio o resultado da �rea e do per�metro desse c�rculo.Considere p = 3,1416."
// Fun��o :
// Autor :  Jo�o Pedro Nery
// Data : 05/03/2025
// Se��o de Declara��es 
var

raio: real
area: real
perimetro: real
constante_pi: real

inicio
// Se��o de Comandos 
constante_pi:= 3,1416

escreval("Insira o raio do c�rculo:")
leia (raio)

area := constante_pi * (raio * raio)
escreval("A �rea do c�rculo �:" ,area)

perimetro := 2 * constante_pi * raio
escreval("O perimetro do c�rculo �:" ,perimetro)

fimalgoritmo
