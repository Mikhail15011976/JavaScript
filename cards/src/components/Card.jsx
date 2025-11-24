import React from 'react';

const Card = ({ 
  title, 
  text, 
  buttonText, 
  buttonHref, 
  width = '18rem',
  imageCap,
  darkImageCap,
  children 
}) => {
  return (
    <div className="card" style={{ width }}>
      {/* Верхняя часть с темно-серым фоном */}
      {darkImageCap && (
        <div 
          className="d-flex align-items-center justify-content-center" 
          style={{
            height: '100px',
            backgroundColor: '#495057',
            color: 'white',
            fontSize: '1.25rem'
          }}
        >
          Image cap
        </div>
      )}
      
      <div className="card-body">
        {title && <h5 className="card-title">{title}</h5>}
        {text && <p className="card-text">{text}</p>}
        {children}
        {buttonText && (
          <a href={buttonHref || '#'} className="btn btn-primary">
            {buttonText}
          </a>
        )}
      </div>
    </div>
  );
};

export default Card;