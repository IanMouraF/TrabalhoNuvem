import React from 'react'
import Header from './components/header'
import About from './components/About'
import Carrinho from './components/Cart'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Carrossel from './components/Home'
import Produtos from './components/Menu'
import NavIcon from './components/NavIcon'

export default function App() {
  return (
    <div>
      <Header />
      <NavIcon />
      <Carrossel />
      <Produtos />
      <Carrinho />
      <Footer />
    </div>
  )
}