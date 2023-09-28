import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore/lite";
import { firestore } from "./firebase";
import Header from "./components/Header/Header";
import Carrinho from "./components/Carrinho/Carrinho";
import Carrossel from "./components/Carrossel/Carrossel";
import Produtos from "./components/Produtos/Produtos";
import NavIcon from "./components/NavIcon";
import Footer from "./components/Footer/Footer";
import "./App.css";
import ModalGerenciamento from "./components/ModalGerenciamento/ModalGerenciamento.jsx"

export default function App() {
    const [appData, setAppData] = useState({
        cardapio: [],
        carrinho: {
            itens: [],
            observacoes: "",
            endereco: "",
            formaPagamento: "",
        },
    });
    useEffect(() => {
        const fetchData = async () => {
            const produtosCol = collection(firestore, "produtos");
            const produtosSnapshot = await getDocs(produtosCol);
            const itens = produtosSnapshot.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            }));
            setAppData((prevData) => ({
                ...prevData,
                cardapio: itens,
            }));
        };
        fetchData();
    }, []);

    return (
        <div>
            <div className="app-wrapper">
                <div className="container">
                    <div className="wrapper">
                        <ModalGerenciamento />
                        <Header />
                        <Carrossel />
                        <Produtos appData={appData} setAppData={setAppData} />
                        <main className="main-content"></main>
                    </div>
                    <Carrinho appData={appData} setAppData={setAppData} />
                    {console.log(appData)}
                </div>
            </div>
            <Footer />
        </div>
    );
}
