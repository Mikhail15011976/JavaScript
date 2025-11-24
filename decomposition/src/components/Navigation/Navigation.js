import React from 'react';

/** Основная навигация по сервисам (Видео, Картинки, Новости и т.д.) */
function Navigation() {
  const navItems = ['Видео', 'Картинки', 'Новости', 'Карты', 'Маркет', 'Переводчик', 'Эфир', 'ещё'];
  
  return (
    <nav className="navigation">
      <ul className="navigation-list">
        {navItems.map((item, index) => (
          <li key={index} className="navigation-item">{item}</li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;