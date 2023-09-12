import React from 'react';

const ConcluirCompra = ({ onConcluirCompra }) => {
  return (
    <div className="concluir-compra">
      <button className='concluir' onClick={onConcluirCompra}>Concluir Compra! --></button>
    </div>
  );
};

export default ConcluirCompra;
