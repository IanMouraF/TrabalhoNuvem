import React, { useState } from "react";
import { Link } from 'react-router-dom'
import "./Modal.css";

export default function ModalLogin() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Login
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">




            <form>
              <div className="box">
                <h3 className="text-login">Login</h3>
                <input className="input" name="email" type="email" placeholder="Email" /><br />
                <input className="input" name="username" type="password" placeholder="Password" /><br />
                <Link to='/gerenciamento'><button className="btn-send">Entrar</button></Link>

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


