import React, { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore/lite';
import { firestore } from '../../firebase';
import './ModalCadastroProduto.css'

const ModalCadastroProduto = ({ onClose, onProdutoCadastrado }) => {
  const [value, setValue] = useState({
    nome: '',
    descricao: '',
    preco: '',
    url: '',
  });

  const handleChange = (nome) => (e) => {
    e.preventDefault();
    setValue({ ...value, [nome]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const novoProduto = {
      nome: value.nome,
      descricao: value.descricao,
      preco: value.preco,
      url: value.url,
    };

    if (Object.values(novoProduto).some((campo) => campo.trim() === '')) {
      alert('Preencha todos os campos para cadastrar o produto.');
      return;
    }

    try {
      
      const docRef = await addDoc(collection(firestore, 'produtos'), novoProduto);
      onProdutoCadastrado({ ...novoProduto, id: docRef.id });
      alert('Produto cadastrado com sucesso.');
      onClose();
    } catch (error) {
      console.error('Erro ao cadastrar o produto:', error);
    }
  };

  return (
    <div>
    <div className="overlay" onClick={onClose}></div>
    <div className="modalCadastro">
      <h2>Cadastrar Produto</h2>

      <form onSubmit={handleSubmit} className="formEditar">
        <label htmlFor="nome">Nome:</label>
        <input type="text" id="nome" value={value.nome} onChange={handleChange('nome')} />

        <label htmlFor="descricao">Descrição:</label>
        <input type="text" id="descricao" value={value.descricao} onChange={handleChange('descricao')} />

        <label htmlFor="preco">Preço:</label>
        <input type="text" id="preco" value={value.preco} onChange={handleChange('preco')} />

        <label htmlFor="url">Url:</label>
        <input type="text" id="url" value={value.url} onChange={handleChange('url')} />

        <div className="botoesCadastro">
          <button type="submit" className="buttonCadastrar">
            Cadastrar
          </button>
          <button type="button" onClick={onClose} className="buttonCancelar">
            Cancelar
          </button>
        </div>
      </form>
    </div> 
    </div>
  );
};

export default ModalCadastroProduto;
