import React from 'react';

function cadastrar(){

    var nome = prompt("Digite o nome", "nome")

    var senha = prompt("Digite a senha", senha)

    var confirmar = confirm("Nome: "+nome+"\nSenha: "+senha+"\n\n Todos os dados estão corretos?")

}

function login(){

    var nome = prompt("Digite o nome", "nome")

    var senha = prompt("Digite a senha", senha)

    

}

const ModalRegistro = () => {
  return <div><button onClick={cadastrar}>Cadastre-se</button>     <button onClick={login}>Login</button></div>
}

export default ModalRegistro