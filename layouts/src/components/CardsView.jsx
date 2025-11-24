import React from 'react';
import ShopCard from './ShopCard';

const CardsView = ({ products }) => {
  return (
    <div className="cards-view">
      {products.map((product, index) => (
        <ShopCard key={index} product={product} />
      ))}
    </div>
  );
};

export default CardsView;
