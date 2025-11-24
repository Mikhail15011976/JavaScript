import React from 'react';

/** Отдельный элемент списка новостей с иконкой и текстом */
function NewsItem({ title }) {
  return (
    <li className="news-item">
      <span className="news-icon">-</span>
      {title}
    </li>
  );
}

export default NewsItem;