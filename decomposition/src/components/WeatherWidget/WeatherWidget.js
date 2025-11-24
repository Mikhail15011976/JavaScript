import React from 'react';

/** Виджет погоды с текущей температурой и прогнозом */
function WeatherWidget() {
  return (
    <div className="weather-widget">
      <h3>Погода</h3>
      <div className="weather-current">+17°</div>
      <div className="weather-forecast">Утром +17, днём +20</div>
    </div>
  );
}

export default WeatherWidget;