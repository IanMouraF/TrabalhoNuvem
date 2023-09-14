import React from "react";
import Header from "./components/Header/Header";
import Carrinho from "./components/Carrinho/Carrinho";
import Carrossel from "./components/Carrossel/Carrossel";
import Produtos from "./components/Produtos/Produtos";
import NavIcon from "./components/NavIcon";
import Footer from "./components/Footer/Footer";
import "./App.css";

export default function App() {

  return (
    <div>
      <div className='app-wrapper'>
        <div className='container'>
          <div className="wrapper">
            <Header />
            <Carrossel />
            <Produtos />
            <main className='main-content'></main>
          </div>
          <Carrinho />
        </div>
      </div>
      <Footer />
    </div>


  )
}

