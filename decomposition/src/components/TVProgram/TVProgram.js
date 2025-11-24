import React from 'react';
import TVProgramItem from './TVProgramItem';

/** Телепрограмма с текущими и ближайшими передачами */
function TVProgram() {
  const programs = [
    { id: 1, time: '02:00', channel: 'ТНТ. Best', title: 'ТНТ International' },
    { id: 2, time: '02:15', channel: 'Джинглики', title: 'Карусель INT' },
    { id: 3, time: '02:25', channel: 'Наедине со всеми', title: 'Первый' },
  ];

  return (
    <div className="tv-program">
      <h3>Телепрограмма</h3>
      <ul>
        {programs.map(program => (
          <TVProgramItem 
            key={program.id}
            time={program.time}
            channel={program.channel}
            title={program.title}
          />
        ))}
      </ul>
    </div>
  );
}

export default TVProgram;