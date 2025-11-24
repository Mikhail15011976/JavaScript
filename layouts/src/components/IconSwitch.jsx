import React from 'react';

const IconSwitch = ({ icon, onSwitch }) => {
  return (
    <span className="material-icons" onClick={onSwitch} style={{ cursor: 'pointer' }}>
      {icon}
    </span>
  );
};

export default IconSwitch;
