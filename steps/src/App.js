import React, { useState } from 'react';
import { parse, compareDesc } from 'date-fns';
import './App.css';

function App() {
  const [workouts, setWorkouts] = useState([
    { id: 1, date: '20.07.2019', distance: 5.7 },
    { id: 2, date: '19.07.2019', distance: 14.2 },
    { id: 3, date: '18.07.2019', distance: 3.4 },
  ]);
  
  const [formData, setFormData] = useState({
    date: '',
    distance: ''
  });
  const [editingId, setEditingId] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.date || !formData.distance) return;
    
    const distance = parseFloat(formData.distance);
    if (isNaN(distance)) return;

    const existingWorkoutIndex = workouts.findIndex(
      w => w.date === formData.date
    );

    if (existingWorkoutIndex >= 0) {
      const updatedWorkouts = [...workouts];
      updatedWorkouts[existingWorkoutIndex] = {
        ...updatedWorkouts[existingWorkoutIndex],
        distance: updatedWorkouts[existingWorkoutIndex].distance + distance
      };
      setWorkouts(updatedWorkouts);
    } else if (editingId) {
      setWorkouts(workouts.map(w => 
        w.id === editingId ? { ...w, date: formData.date, distance } : w
      ));
      setEditingId(null);
    } else {
      const newWorkout = {
        id: Date.now(),
        date: formData.date,
        distance
      };
      
      setWorkouts([...workouts, newWorkout]);
    }

    setFormData({ date: '', distance: '' });
  };

  const handleDelete = (id) => {
    setWorkouts(workouts.filter(w => w.id !== id));
  };

  const handleEdit = (workout) => {
    setFormData({
      date: workout.date,
      distance: workout.distance.toString()
    });
    setEditingId(workout.id);
  };

  const sortedWorkouts = [...workouts].sort((a, b) => 
    compareDesc(
      parse(a.date, 'dd.MM.yyyy', new Date()),
      parse(b.date, 'dd.MM.yyyy', new Date())
    )
  );

  return (
    <div className="app">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Дата (ДД.ММ.ГГ)</label>
            <input
              type="text"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              placeholder="ДД.ММ.ГГ"
              pattern="\d{2}\.\d{2}\.\d{4}"
              required
            />
          </div>
          
          <div className="input-group">
            <label>Пройдено км</label>
            <input
              type="number"
              name="distance"
              value={formData.distance}
              onChange={handleInputChange}
              placeholder="Километры"
              step="0.1"
              min="0"
              required
            />
          </div>
          
          <div className="ok-button-container">
            <button type="submit" className="ok-button">OK</button>
          </div>
        </form>
      </div>
      
      <div className="table-titles">
        <div className="title-item">Дата (ДД.ММ.ГГ)</div>
        <div className="title-item">Пройдено км</div>
        <div className="title-item">Действия</div>
      </div>
      
      <div className="workouts-table">
        {sortedWorkouts.length > 0 ? (
          sortedWorkouts.map((workout, index) => (
            <div 
              key={workout.id} 
              className={`table-row ${index % 2 === 0 ? 'even' : 'odd'}`}
            >
              <div className="table-cell">{workout.date}</div>
              <div className="table-cell">{workout.distance.toFixed(1)}</div>
              <div className="table-cell actions">
                <button 
                  onClick={() => handleEdit(workout)}
                  className="edit-button"
                >
                  ✎
                </button>
                <button 
                  onClick={() => handleDelete(workout.id)}
                  className="delete-button"
                >
                  ✘
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="no-data">Нет данных о тренировках</div>
        )}
      </div>
    </div>
  );
}

export default App;