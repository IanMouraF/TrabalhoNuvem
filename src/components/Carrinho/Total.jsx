import React from 'react';

const Total = ({ carrinhoItens }) => {
  // Função para calcular o total
  const calcularTotal = () => {
    let novoTotal = 0;
    // Verifica se carrinhoItens não é undefined
    if (carrinhoItens) {
      // Percorre a lista de itens no carrinho
      carrinhoItens.forEach((item) => {
        // Multiplica a quantidade pelo valor do item e adiciona ao novoTotal
        novoTotal += item.quantidade * item.preco;
      });
    }

    return novoTotal;
  };

  return (
<div className='total'>
  <div className='total-left'>
    <h2>Total:</h2>
  </div>
  <div className='total-right'>
    <h2>R${calcularTotal().toFixed(2)}</h2>
  </div>
</div>

  );
}

export default Total;
