import React from 'react';
import { ListingProps } from '../types';

const Listing: React.FC<ListingProps> = ({ items = [] }) => {
  const formatTitle = (title: string): string => {
    const formatted = title.length > 50 ? `${title.substring(0, 50)}…` : title;
    return formatted.replace(/&#39;/g, "'");
  };

  const formatPrice = (price: string, currencyCode: string): string => {
    switch (currencyCode) {
      case 'USD': return `$${price}`;
      case 'EUR': return `€${price}`;
      case 'GBP': return `GBP ${price}`;
      case 'AUD': return `AUD ${price}`;
      default: return `${price} ${currencyCode}`;
    }
  };

  const getQuantityLevel = (quantity: number): string => {
    if (quantity <= 10) return 'level-low';
    if (quantity <= 20) return 'level-medium';
    return 'level-high';
  };

  const formatQuantity = (quantity: number): string => {
    return `${quantity} left`;
  };

  return (
    <div className="item-list">
      {items.map((item) => (
        <div className="item" key={item.listing_id}>
          <div className="item-image">
            <a href={item.url}>
              <img src={item.MainImage.url_570xN} alt={item.title} />
            </a>
          </div>
          <div className="item-details">
            <p className="item-title">{formatTitle(item.title)}</p>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <p className="item-price">{formatPrice(item.price, item.currency_code)}</p>
              <p className={`item-quantity ${getQuantityLevel(item.quantity)}`}>
                {formatQuantity(item.quantity)}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Listing;