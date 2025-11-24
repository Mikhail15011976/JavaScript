import React from 'react';

const ViewToggle = ({ view, onToggle }) => {
  return (
    <div className="view-toggle">
      <button onClick={() => onToggle('cards')} className={view === 'cards' ? 'active' : ''}>
        Карточки
      </button>
      <button onClick={() => onToggle('list')} className={view === 'list' ? 'active' : ''}>
        Список
      </button>
    </div>
  );
};

export default ViewToggle;
