import React from 'react'
import Header from './components/header'
import About from './components/About'
import Cart from './components/Cart'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Carrossel from './components/Home'
import Menu from './components/Menu'
import NavIcon from './components/NavIcon'
import ModalRegistro from './components/ModalRegistro'



export default function App() {
  return (
    <div>
      <ModalRegistro/>
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