import React from 'react';
import NewsItem from './NewsItem';

/** Список новостных заголовков с ссылками */
function NewsList() {
  const newsItems = [
    { id: 1, title: 'Путин упростил получение автомобильных номеров' },
    { id: 2, title: 'В команде Зеленского раскрыли план реформ на Украине' },
    { id: 3, title: '«Турпомощь» прокомментировала гибель десятков россиян в Анталье' },
    { id: 4, title: 'Суд закрыл дело Демпартии США против России' },
    { id: 5, title: 'На Украине призвали создать ракеты для удара по Москве' },
  ];

  return (
    <div className="news-list">
      <ul>
        {newsItems.map(item => (
          <NewsItem key={item.id} title={item.title} />
        ))}
      </ul>
    </div>
  );
}

export default NewsList;