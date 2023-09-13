import React, { useState } from 'react';

const ItemCarrinho = ({ id, nome, quantidade, preco, imagemUrl, onRemoverItem, onAtualizarQuantidade }) => {
  const [quantidadeItem, setQuantidadeItem] = useState(quantidade);

  const handleRemoverClick = () => {
    if (quantidadeItem > 1) {
      setQuantidadeItem(quantidadeItem - 1);
      onAtualizarQuantidade(id, quantidadeItem - 1);
    }
  };

  const handleAdicionarClick = () => {
    setQuantidadeItem(quantidadeItem + 1);
    onAtualizarQuantidade(id, quantidadeItem + 1)
  };

  return (
    <div className='item-carrinho'>
      <img src={imagemUrl} alt={nome} />
      <div className='info'>
        <div className='info-left'>
          <span>{nome}</span>
          <div className='quantidade-controle'>
            <button className='minus-button' onClick={handleRemoverClick}>-</button>
            <span>{quantidadeItem}</span>
            <button className='quantidade-button' onClick={handleAdicionarClick}>+</button>
          </div>
        </div>
        <div className='info-right'>
          <span className='preco'>R${preco}</span>
          <button className='remove-button' onClick={() => onRemoverItem(id)}>
            &#x1F5D1; {/* Ícone de lixeira em Unicode */}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemCarrinho;
