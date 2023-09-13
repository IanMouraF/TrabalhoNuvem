import React from 'react'
import Header from './components/Header/Header'
import Carrinho from './components/Carrinho/Carrinho'
import Footer from './components/Footer'
import Carrossel from './components/Carrossel/Carrossel'
import Produtos from './components/Produtos'
import NavIcon from './components/NavIcon'

export default function App() {
  return (

    <div className='app-wrapper'>
      <div className='container'>
        <div className="wrapper">
          <header><h1>header</h1></header>
          <Carrossel />
          <main className='main-content'></main>
        </div>
        <Carrinho />
      </div>
    </div>
  )
}