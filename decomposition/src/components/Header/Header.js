import React from 'react';

/** Компонент верхней части страницы с навигацией и датой/временем */
function Header() {
  return (
    <header className="header">
      <span className="header-now">Сейчас в СМИ</span>
      <span className="header-link">в Германии</span>
      <span className="header-link">Рекомендуем</span>
      <span className="header-date">31 июля, среда 02:32</span>
    </header>
  );
}

export default Header;