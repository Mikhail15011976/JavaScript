import React from 'react';

const Toolbar = ({ filters, selected, onSelectFilter }) => {
  return (
    <div style={{ 
      display: 'flex',
      gap: '10px',
      justifyContent: 'center',
      marginBottom: '20px'
    }}>
      {filters.map(filter => (
        <button
          key={filter}
          onClick={() => onSelectFilter(filter)}
          style={{ 
            fontWeight: selected === filter ? 'bold' : 'normal',
            padding: '8px 16px',
            cursor: 'pointer',
            border: '1px solid #ccc',
            borderRadius: '4px',
            backgroundColor: selected === filter ? '#646cff' : 'transparent',
            color: selected === filter ? 'white' : 'inherit'
          }}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default Toolbar;