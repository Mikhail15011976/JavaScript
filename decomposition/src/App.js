import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import SearchBar from './components/SearchBar/SearchBar';
import NewsList from './components/NewsList/NewsList';
import CurrencyRates from './components/CurrencyRates/CurrencyRates';
import WeatherWidget from './components/WeatherWidget/WeatherWidget';
import PopularLinks from './components/PopularLinks/PopularLinks';
import TVProgram from './components/TVProgram/TVProgram';
import MapWidget from './components/MapWidget/MapWidget';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <Navigation />
      <SearchBar />
      <div className="main-content">
        <div className="left-column">
          <NewsList />
          <CurrencyRates />
        </div>
        <div className="right-column">
          <WeatherWidget />
          <PopularLinks />
          <MapWidget />
          <TVProgram />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;