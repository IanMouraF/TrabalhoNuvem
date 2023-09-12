import React, { useState, useEffect } from 'react';
import ItemCarrinho from './ItemCarrinho';
import Total from './Total';
import ConcluirCompra from './Concluir';
import './Carrinho.css';

const Carrinho = () => {
  const [carrinhoItens, setCarrinhoItens] = useState([
    {
      id: 1,
      nome: 'Sanduiche',
      imagemUrl: 'https://www.teenaagnel.com/wp-content/uploads/2019/12/food-photography-in-dubai.jpg',
      quantidade: 2,
      preco: 10.99,
    },
    {
      id: 2,
      nome: 'Salada',
      imagemUrl: 'https://hips.hearstapps.com/hmg-prod/images/grilled-chicken-breast-lunch-bowl-with-fresh-tomato-royalty-free-image-1684934244.jpg',
      quantidade: 1,
      preco: 5.99,
    },
  ]);

  const [total, setTotal] = useState(0);

  // Função para calcular o total
  const calcularTotal = () => {
    let novoTotal = 0;

    // Percorre a lista de itens no carrinho
    carrinhoItens.forEach((item) => {
      // Multiplica a quantidade pelo valor do item e adiciona ao novoTotal
      novoTotal += item.quantidade * item.preco;
    });

    return novoTotal;
  };

  // Função para remover um item do carrinho com base no ID
  const handleRemoverItem = (itemId) => {
    const novoCarrinho = carrinhoItens.filter((item) => item.id !== itemId);
    setCarrinhoItens(novoCarrinho);
  };

  // Função para atualizar a quantidade de um item no carrinho
  const handleAtualizarQuantidade = (itemId, novaQuantidade) => {
    const novoCarrinho = carrinhoItens.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantidade: novaQuantidade };
      }
      return item;
    });
    setCarrinhoItens(novoCarrinho);
  };

  // Efeito que atualiza o total sempre que o carrinhoItens mudar
  useEffect(() => {
    const novoTotal = calcularTotal();
    setTotal(novoTotal);
  }, [carrinhoItens]);

  return (
    <div className="carrinhopai">
      <div className='carrinho'>
        <h1>Meu Pedido</h1>
        <div className="pedidos">
          {carrinhoItens.map((item, index) => (
            <ItemCarrinho
              key={item.id}
              id={item.id}
              nome={item.nome}
              quantidade={item.quantidade}
              preco={item.preco}
              imagemUrl={item.imagemUrl}
              onRemoverItem={handleRemoverItem}
              onAtualizarQuantidade={handleAtualizarQuantidade} // Passar a função de atualização como prop
            />
          ))}
        </div>
        <div className="totalcontainer">
        <Total carrinhoItens={carrinhoItens} onAtualizarQuantidade={handleAtualizarQuantidade} />
        </div>
        <div className='cupom'>
        </div>

        <div className="checkout">
        <ConcluirCompra carrinhoItens={carrinhoItens} />

        </div>
      </div>
    </div>
  );
}

export default Carrinho;
