import React from 'react';
import './Header.css';
import Logo from '/logo.png'
import { Link } from 'react-router-dom'
import ModalLogin from '../ModalLogin'
import ModalCadastro from '../ModalCadastro'
import '../Modal.css'
import Logout from '../../Logout'

const Header = (props) => {
  return (
    <div className='header' style={props.headerStyle}>
      <img src={Logo} alt='Logo' className='logo' />

      <div className='line' style={props.lineStyle}></div>

      <nav className='nav-itens' style={props.navStyle}>
	<Logout/>
        <ModalLogin />
        <ModalCadastro />
        <Link to=''>Home</Link>
        <Link to=''>Cardápio</Link>
        <Link to=''>Contato</Link>
      </nav>
    </div>
  )
}

export default Header