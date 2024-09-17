/* Faça um programa para calcular o valor de uma viagem.
Você terá 5 variáveis, sendo elas:
    1 - Preço do etanol; 5,79 reais/L
    2- Preço da gasolina;
    3 - O tipo de combustível que está no seu carro;
    4 - Gasto médio do combustível do carro por KM; 10km/L
    5 - Distância em KM da viagem; 1000km
Imprima no console o valor que será gasto para realizar esta viagem.*/

const precoGasolina = 6.66;
const precoEtanol = 5.79;
const kmPorLitros = 10;
const distanciaEmKm = 100;
const tipoCombustivel = 'Gasolina';
const litrosConsumidos = distanciaEmKm / kmPorLitros;



if (tipoCombustivel === 'Etanol') {
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2));
} else {
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log(valorGasto.toFixed(2));
}





