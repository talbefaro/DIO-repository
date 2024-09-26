/* Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis, sendo elas:
    1 - Preço do combustível; 5,79 reais/L
    2 - Gasto médio do combustível do carro por KM; 10km/L
    3 - Distância em KM da viagem; 1000km

Imprima no console o valor que será gasto para realizar esta viagem.

*/

const precoCombustível = 5.79;
const kmPorLitros = 13;
const distanciaEmkm = 1000;

const litrosConsumidos = distanciaEmkm / kmPorLitros;
const valorGasto = litrosConsumidos * precoCombustível;


console.log(valorGasto.toFixed(2));





