import React from 'react';
import PopularLinkItem from './PopularLinkItem';

/** Блок часто посещаемых сервисов и категорий */
function PopularLinks() {
  const links = [
    { id: 1, title: 'Недвижимость', description: 'о сталинках' },
    { id: 2, title: 'Маркет', description: 'люстры и светильники' },
    { id: 3, title: 'Автору', description: 'привод 4x4 до 500 000' },
  ];

  return (
    <div className="popular-links">
      <h3>Посещаемое</h3>
      <ul>
        {links.map(link => (
          <PopularLinkItem key={link.id} title={link.title} description={link.description} />
        ))}
      </ul>
    </div>
  );
}

export default PopularLinks;