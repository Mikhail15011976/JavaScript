import React from 'react';
import './ShopItemFunc.css';

const ShopItemFunc = ({ item, onAddToCart }) => {
    return (
        <div className="main-content">
            <h2>{item.brand}</h2>
            <h1>{item.title}</h1>
            <h3>{item.description}</h3>
            <div className="description">{item.descriptionFull}</div>
            <div className="highlight-window mobile">
                <div className="highlight-overlay"></div>
            </div>
            <div className="divider"></div>
            <div className="purchase-info">
                <div className="price">{item.currency}{item.price.toFixed(2)}</div>
                <button onClick={onAddToCart}>Добавить в корзину</button> {/* Оставляем только здесь */}
            </div>
        </div>
    );
};

export default ShopItemFunc;
