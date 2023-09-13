import React from 'react';

const ConcluirCompra = ({ carrinhoItens }) => {
  function carrinhoWhatsapp() {
    if (carrinhoItens.length === 0) {
      alert('Adicione pelo menos 1 item ao carrinho para enviar o pedido.');
      return;
    }

    let pedido = 'Pedido:\n';

    for (let i = 0; i < carrinhoItens.length; i++) {
      const item = carrinhoItens[i];
      pedido += `${item.quantidade}x ${item.nome} - R$${(item.quantidade * item.preco).toFixed(2)}\n`;
    }

    const total = carrinhoItens.reduce((acc, item) => acc + item.quantidade * item.preco, 0);
    pedido += `\nTotal: R$${total.toFixed(2)}\n(Envie esta mensagem para concluir o seu pedido)`;

    const numeroCelular = '5585996815286'

    const mensagem = encodeURIComponent(pedido);
    const linkWhatsApp = `https://wa.me/${numeroCelular}?text=${mensagem}`;

    if (!confirm('Deseja enviar o seu pedido?')) {
      return;
    }

    window.open(linkWhatsApp);
  }

  return (
    <div className="concluir-compra">
      <button className='concluir' onClick={carrinhoWhatsapp}>Concluir Compra! --></button>
    </div>
  );
};

export default ConcluirCompra;
