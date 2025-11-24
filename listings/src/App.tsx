import React from 'react';
import Listing from './components/Listing';
import { ListingItem } from './types';
import './App.css';

const itemsJson = require('./data/items.json');

const App: React.FC = () => {
  const items: ListingItem[] = JSON.parse(JSON.stringify(itemsJson)); 
  

  return (
    <div className="wrapper">
      <Listing items={items} />
    </div>
  );
};

export default App;