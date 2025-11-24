import React from 'react';

/** Отдельный элемент списка популярных ссылок */
function PopularLinkItem({ title, description }) {
  return (
    <li className="popular-link-item">
      <span className="link-title">{title}</span> — <span className="link-description">{description}</span>
    </li>
  );
}

export default PopularLinkItem;