import React from 'react';

const ShopItem = ({ product }) => {
  return (
    <div className="shop-item">
      <img src={product.img} alt={product.name} />
      <h4>{product.name}</h4>
      <p>{product.color}</p>
      <p className="price">${product.price}</p>
      <button 
        onClick={() => alert(`Добавлено в корзину: ${product.name}`)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ShopItem;