import React from "react";
import "./ProdutosStyles.css";
const Produtos = () => {
    // produtos pra testar a funcionalidade
    const products = [
        { id: 1, price: 19.99, description: "bla bla bla", name: "Produto 1" },
        { id: 2, price: 4.99, description: "bla bla bla", name: "Produto 2" },
        { id: 3, price: 9.99, description: "bla bla bla", name: "Produto 3" },
        { id: 4, price: 1.99, description: "bla bla bla", name: "Produto 4" },
        { id: 5, price: 29.99, description: "bla bla bla", name: "Produto 5" },
        { id: 6, price: 12.99, description: "bla bla bla", name: "Produto 6" },
        { id: 7, price: 7.99, description: "bla bla bla", name: "Produto 7" },
        { id: 8, price: 4.99, description: "bla bla bla", name: "Produto 8" },
        { id: 9, price: 9.99, description: "bla bla bla", name: "Produto 9" },
    ];
    return (
        <div className="products-component">
            <h2 className="products-title">Cardápio</h2>
            <div className="products-grid">
                {products.map((product) => (
                    <div className="product" key={product.id}>
                        <div className="product-image"></div>
                        <div className="product-info">
                            <div className="product-name">{product.name}</div>
                            <div className="product-price">
                                R$ {product.price}
                            </div>
                            <div className="product-description">
                                {product.description}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Produtos;
