import React from "react";
import "./ProdutosStyles.css";
const Produtos = () => {
    // produtos pra testar a funcionalidade
    const products = [
        { id: 1, price: 19.99, name: "Produto 1" },
        { id: 2, price: 4.99, name: "Produto 2" },
        { id: 3, price: 9.99, name: "Produto 3" },
        { id: 4, price: 1.99, name: "Produto 4" },
        { id: 5, price: 29.99, name: "Produto 5" },
        { id: 6, price: 12.99, name: "Produto 6" },
        { id: 7, price: 7.99, name: "Produto 7" },
        { id: 8, price: 4.99, name: "Produto 8" },
        { id: 9, price: 9.99, name: "Produto 9" },
    ];
    return (
        <div>
            <h2>Cardápio</h2>
            <div>
                {products.map((product) => (
                    <div key={product.id}>
                        {product.name}, R$ {product.price}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Produtos;
