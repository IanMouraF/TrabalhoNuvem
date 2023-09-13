import React from 'react'
import Header from './components/Header/Header'
import Carrinho from './components/Carrinho/Carrinho'
import Carrossel from './components/Carrossel/Carrossel'
import Produtos from './components/Produtos'
import NavIcon from './components/NavIcon'
import Footer from './components/Footer/Footer'
import './App.css'

export default function App() {
  return (
    <div>
      <Header/>
      <Carrinho />
      <Footer/>
    </div>
  )
}