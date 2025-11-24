import React from 'react';

const ShopCard = ({ product }) => {
  return (
    <div className="shop-card">
      <h3 style={{ textAlign: 'center' }}>{product.name}</h3> {/* Название по центру */}
      <p style={{ textAlign: 'center' }}>{product.color}</p> {/* Цвет по центру */}
      <img src={product.img} alt={product.name} style={{ display: 'block', margin: '0 auto' }} /> {/* Изображение по центру */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
        <p style={{ color: 'red' }}>${product.price}</p> {/* Цена слева */}
        <button 
          style={{ backgroundColor: 'white', border: '2px solid red', color: 'red' }} 
          onClick={() => alert(`Добавлено в корзину: ${product.name}`)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ShopCard;
