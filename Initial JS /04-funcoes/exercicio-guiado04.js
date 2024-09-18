/*Código Condição de pagamento:
1 - À vista Débito, recebe 10% de desconto;
2 - À vista no Dinheiro ou PIX, recebe 15% de desconto;
3 - Em duas vezes, preço normal de etiqueta sem juros;
4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;*/


function aplicarDesconto(valor,desconto){
    return (valor - (valor * (desconto / 100)));
}

function aplicarJuros(valor,juros){
    return (valor + (valor * (juros / 100)));
}

const precoDeEtiqueta = 100;
const formaDePagamento = 4;

if(formaDePagamento === 1){
  console.log(aplicarDesconto(precoDeEtiqueta, 10));  
} else if (formaDePagamento === 2) {
    console.log(aplicarDesconto(precoDeEtiqueta, 15));
} else if (formaDePagamento === 3){
    console.log(precoDeEtiqueta);
} else {
    console.log(aplicarJuros(precoDeEtiqueta, 10));
}