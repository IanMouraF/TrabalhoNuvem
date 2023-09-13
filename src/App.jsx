import React from "react";
import Header from "./components/Header";
import Carrinho from "./components/Carrinho";
import Footer from "./components/Footer";
import Carrossel from "./components/Carrossel";
import Produtos from "./components/Produtos";
import NavIcon from "./components/NavIcon";

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
    );
}
