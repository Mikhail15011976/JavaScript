import React, { useState } from 'react';
import VideoList from './components/VideoList/VideoList';
import './index.css';

const App = () => {
  const [list] = useState([
    
    {
      url: 'https://rutube.ru/video/87d35db41f03ce22c53ad0a15dbddb35/',
      date: new Date(Date.now() - 1800000).toISOString() 
    },
    {
      url: 'https://rutube.ru/video/020183a682dd4cac35f47a61ea7895ba/',
      date: new Date(Date.now() - 172800000).toISOString() 
    },
    {
      url: 'https://rutube.ru/video/503c90a06a1c2b947e617152532221a7/', 
      date: new Date(Date.now() - 2592000000).toISOString() 
    },
    
    {
      url: 'https://rutube.ru/video/4b55ad7d0598ba0e64aa2e2b11660cd4/',
      date: new Date(Date.now() - 7200000).toISOString() 
    },
    {
      url: 'https://rutube.ru/video/8a534e3004a90282e722094a6ef944f2/',
      date: new Date(Date.now() - 604800000).toISOString() 
    },
    {
      url: 'https://rutube.ru/video/1ae08087a77bd379010856e222ea94fd/', 
      date: new Date(Date.now() - 7776000000).toISOString() 
    }
  ]);

  return (
    <div className="app">
      <h1>Коллекция видео с RuTube</h1>
      <VideoList list={list} />
    </div>
  );
};

export default App;