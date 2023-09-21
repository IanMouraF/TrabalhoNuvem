import React, { useEffect, useState } from 'react';
import Total from './Total';
import ConcluirCompra from './Concluir';
import './Carrinho.css';
import ItemCarrinho from './ItemCarrinho';

const Carrinho = ({ appData, setAppData }) => {
  const [total, setTotal] = useState(0);
  const [observacoes, setObservacoes] = useState(appData.carrinho.observacoes || '');
  const [endereco, setEndereco] = useState(appData.carrinho.endereco || '');
  const [formaPagamento, setFormaPagamento] = useState(appData.carrinho.formaPagamento || '');

  const handleFormaPagamentoChange = (e) => {
    const newFormaPagamento = e.target.value;
    setFormaPagamento(newFormaPagamento);
    setAppData((prevData) => ({
      ...prevData,
      carrinho: {
        ...prevData.carrinho,
        formaPagamento: newFormaPagamento,
      },
    }));
  };

  const handleObservacoesChange = (e) => {
    const newObservacoes = e.target.value;
    setObservacoes(newObservacoes);
    // Atualize o appData com as novas observações
    setAppData((prevData) => ({
      ...prevData,
      carrinho: {
        ...prevData.carrinho,
        observacoes: newObservacoes,
      },
    }));
  };

  const handleEnderecoChange = (e) => {
    const newEndereco = e.target.value;
    setEndereco(newEndereco);
    // Atualize o appData com o novo endereço
    setAppData((prevData) => ({
      ...prevData,
      carrinho: {
        ...prevData.carrinho,
        endereco: newEndereco,
      },
    }));
  };

  // Função para remover um item do carrinho com base no ID
  const handleRemoverItem = (itemId) => {
    const novoCarrinho = appData.carrinho.itens.filter((item) => item.id !== itemId);
    setAppData((prevData) => ({
      ...prevData,
      carrinho: {
        ...prevData.carrinho,
        itens: novoCarrinho,
      },
    }));
  };

  // Função para atualizar a quantidade de um item no carrinho
  const handleAtualizarQuantidade = (itemId, novaQuantidade) => {
  const novoCarrinho = appData.carrinho.itens.map((item) => {
    if (item.id === itemId) {
      return { ...item, quantidade: novaQuantidade };
    }
    return item;
  });
  setAppData((prevData) => ({
    ...prevData,
    carrinho: {
      ...prevData.carrinho,
      itens: novoCarrinho,
    },
  }));
};


  useEffect(() => {
    // Calcular o total a partir dos itens do carrinho
    const novoTotal = appData.carrinho.itens.reduce((acc, item) => acc + item.quantidade * item.preco, 0);
    setTotal(novoTotal);
  }, [appData.carrinho.itens]);

  return (
    <div className="carrinhopai">
      <div className='carrinho'>
        <h1>Meu Pedido</h1>
        <div className="pedidos">
          {appData.carrinho.itens.map((item, index) => (
            <ItemCarrinho
              key={item.id}
              id={item.id}
              nome={item.nome}
              quantidade={item.quantidade}
              preco={item.preco}
              imagemUrl={item.url}
              onRemoverItem={handleRemoverItem}
              onAtualizarQuantidade={handleAtualizarQuantidade}
            />
          ))}
        </div>
        {/* Caixa de Observações */}
        <input className='observacoes'
          type="text"
          placeholder="Observações"
          value={observacoes}
          onChange={handleObservacoesChange}
        />
        {/* Caixa de Endereço */}
        <input className='endereco'
          type="text"
          placeholder="Endereço de entrega"
          value={endereco}
          onChange={handleEnderecoChange}
        />
                <select className='formaPagamento'
          value={formaPagamento}
          onChange={handleFormaPagamentoChange}
        >
          <option value="cartao">Cartão de Crédito</option>
          <option value="dinheiro">Dinheiro</option>
          <option value="pix">Pix</option>
        </select>
        <div className="totalcontainer">
          <Total total={total} carrinhoItens={appData.carrinho.itens} />
        </div>
        <div className='cupom'>
        </div>
        <div className="checkout">
          <ConcluirCompra carrinhoItens={appData.carrinho.itens} />
        </div>
      </div>
    </div>
  );
}

export default Carrinho;
