import React from 'react';
import Video from '../Video/Video';
import './VideoList.css';

const VideoList = ({ list }) => {
 
  const leftColumn = list.filter((_, index) => index % 2 === 0);
  const rightColumn = list.filter((_, index) => index % 2 !== 0);

  return (
    <div className="video-list-container">
      <div className="video-column">
        {leftColumn.map((item, index) => (
          <Video 
            key={`left-${index}`} 
            url={item.url} 
            date={item.date} 
          />
        ))}
      </div>
      <div className="video-column">
        {rightColumn.map((item, index) => (
          <Video 
            key={`right-${index}`} 
            url={item.url} 
            date={item.date} 
          />
        ))}
      </div>
    </div>
  );
};

export default VideoList;