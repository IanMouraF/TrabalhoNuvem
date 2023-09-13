import React from 'react';
import './Header.css';
import Logo from '/logo.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
      <img src={Logo} alt='Logo' className='logo'/>

      <div className='line'></div>

      <nav>
        <Link to=''>Home</Link>
        <Link to=''>Cardápio</Link>
        <Link to=''>Contato</Link>
      </nav>
    </div>
  )
}

export default Header