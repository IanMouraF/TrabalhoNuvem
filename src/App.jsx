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
            <Header />
            <Produtos />
            <div className="ian">
                <Carrossel />
                <div className="teste"></div>
                <Carrinho />
            </div>
            <Footer />
        </div>
    );
}