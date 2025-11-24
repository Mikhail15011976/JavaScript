import React from 'react';

/** Отдельный элемент телепрограммы с временем, каналом и названием */
function TVProgramItem({ time, channel, title }) {
  return (
    <li className="tv-program-item">
      <span className="program-time">{time}</span>
      <span className="program-channel">{channel}</span>
      <span className="program-title">{title}</span>
    </li>
  );
}

export default TVProgramItem;