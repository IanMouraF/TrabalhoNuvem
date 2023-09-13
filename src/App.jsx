import React from 'react'
import About from './components/About'
import Cart from './components/Cart'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Carrossel from './components/Home'
import Menu from './components/Menu'
import ModalCadastro from './components/ModalCadastro'
import ModalLogin from './components/ModalLogin'
import NavIcon from './components/NavIcon'



export default function App() {
  return (
    <div>
      <ModalLogin/><ModalCadastro/>
      <Header />
      <NavIcon />
      <Carrossel />
      <About />
      <Menu />
      <Cart />
      <Contact />
      <Footer />

    </div>
  )
}