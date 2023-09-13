import React, { useState } from "react";
import "./Modal.css";



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
            
           


		<form>
            <div className="box">
                <h3>Cadastrar</h3>
                <input  name="username" type="text" placeholder="User Name"/><br/>
                <input  name="username" type="password" placeholder="Password"/><br/>
                <button>Cadastrar</button>
              
            </div>
        </form>
        

            <button className="close-modal" onClick={toggleModal}>
              Close
            </button>
          </div>
        </div>
      )}
      
    </>
  );
}
