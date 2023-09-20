import React from "react";
import "./ProdutosStyles.css";
const Produtos = ({ appData, setAppData }) => {
    // produtos pra testar a funcionalidade
    return (
        <div className="products-component">
            <h2 className="products-title">Cardápio</h2>
            <div className="products-grid">
                {appData.cardapio.map((product) => (
                    <div
                        className="product"
                        key={product.id}
                        onClick={() => addToCart(product)}
                    >
                        <div
                            className="product-image"
                            style={{ backgroundImage: `url(${product.url})` }}
                        ></div>
                        <div className="product-info">
                            <div className="product-name">{product.nome}</div>
                            <div className="product-price">
                                R$ {product.preco}
                            </div>
                            <div className="product-description">
                                {product.descricao}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Produtos;
