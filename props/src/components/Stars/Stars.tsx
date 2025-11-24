import React from 'react';
import Star from './Star';
import { StarsProps } from '../../types';

const Stars: React.FC<StarsProps> = ({ count = 0 }) => {
  if (typeof count !== 'number' || count < 1 || count > 5 || !Number.isInteger(count)) {
    return null;
  }

  return (
    <ul className="card-body-stars u-clearfix">
      {Array.from({ length: count }, (_, index) => (
        <li key={index}>
          <Star />
        </li>
      ))}
    </ul>
  );
};

export default Stars;