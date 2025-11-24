import React from 'react';
import './App.css';
import Stars from './components/Stars';
import { Movie } from './types';

const App: React.FC = () => {
  const movies: Movie[] = [
    {
      id: 1,
      title: 'Крестный отец',
      posterUrl: 'https://via.placeholder.com/100x150?text=Movie+1',
      likes: 1250,
      rating: 5,
      price: '$9.99',
      detailsUrl: '#movie1'
    },
    {
      id: 2,
      title: 'Криминальное чтиво',
      posterUrl: 'https://via.placeholder.com/100x150?text=Movie+2',
      likes: 980,
      rating: 4,
      price: '$7.99',
      detailsUrl: '#movie2'
    },
    {
      id: 3,
      title: 'Бегущий по лезвию',
      posterUrl: 'https://via.placeholder.com/100x150?text=Movie+3',
      likes: 750,
      rating: 3,
      price: '$5.99',
      detailsUrl: '#movie3'
    }
  ];

  return (
    <div className="movie-container">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-card">
          <div className="movie-header">
            <img src={movie.posterUrl} alt={movie.title} className="movie-poster" />
            <div className="movie-info">
              <h2 className="movie-title">{movie.title}</h2>
              <Stars count={movie.rating} />
              <div className="movie-actions">
                <button className="buy-button">
                  КУПИТЬ {movie.price}
                </button>
                <a href={movie.detailsUrl} className="details-link">
                  Подробнее
                  <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
            <div className="movie-likes">
              {movie.likes} ♥
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;