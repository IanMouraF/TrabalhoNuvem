import React, { useState } from "react";
import "./Modal.css";
import {handleSubmit} from '../handleSubmit'



export default function ModalCadastro() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Cadastro
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            
           


		<form id="form" method="post">
            <div className="box" id="divForm">
                <h3 className="text-login">Cadastrar</h3>
		
                <input className="input" name="email" type="email" placeholder="Email" id="email"/><br/>
                <input className="input" name="username" type="password" placeholder="Senha" id="pw"/><br/>
                <button className="btn-send" onClick={handleSubmit}>Cadastrar</button>
              
            </div>
        </form>
        

            <button className="close-modal" onClick={toggleModal}>
              
		✖
            </button>
          </div>
        </div>
      )}
      
    </>
  );
  
}
