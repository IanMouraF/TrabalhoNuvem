import React from 'react';

const ConcluirCompra = ({ carrinhoItens, endereco, formaPagamento, observacoes, enderecoPreenchido }) => {
  function carrinhoWhatsapp() {
    if (carrinhoItens.length === 0) {
      alert('Adicione pelo menos 1 item ao carrinho para enviar o pedido.');
      return;
    }

    if (!enderecoPreenchido) {
      alert('Preencha o campo de endereço antes de concluir a compra.');
      return;
    }

    let pedido = 'Pedido:\n';

    for (let i = 0; i < carrinhoItens.length; i++) {
      const item = carrinhoItens[i];
      pedido += `${item.quantidade}x ${item.nome} - R$${(item.quantidade * item.preco).toFixed(2)}\n`;
    }

    const total = carrinhoItens.reduce((acc, item) => acc + item.quantidade * item.preco, 0);
    pedido += `\nTotal: R$${total.toFixed(2)}`;

    // Inclua o endereço, tipo de pagamento e observações na mensagem
    if (endereco) {
      pedido += `\nEndereço: ${endereco}`;
    }
    if (formaPagamento) {
      pedido += `\nForma de Pagamento: ${formaPagamento}`;
    }
    if (observacoes) {
      pedido += `\nObservações: ${observacoes}`;
    }

    pedido += `\n(Envie esta mensagem para concluir o seu pedido)`;

    const numeroCelular = '5585996815286';

    const mensagem = encodeURIComponent(pedido);
    const linkWhatsApp = `https://wa.me/${numeroCelular}?text=${mensagem}`;

    if (!confirm('Deseja enviar o seu pedido?')) {
      return;
    }

    window.open(linkWhatsApp);
  }

  return (
    <div className="concluir-compra">
      <button className='concluir' onClick={carrinhoWhatsapp}>Concluir Compra!</button>
    </div>
  );
};

export default ConcluirCompra;

