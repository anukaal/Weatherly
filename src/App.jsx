import React, { useState } from 'react';
import Earth from './3d/Earth';
import SearchBar from './Component/SearchBar';
import Card from './Component/Card';

function App() {
  const [weatherData, setWeatherData] = useState(null); 

  return (
    <div className="relative w-full h-screen">
      <Earth className="absolute inset-0 z-0" />
      <div className="absolute inset-x-4 top-4 z-10 md:top-10 md:left-10 md:right-10">
        <SearchBar setWeatherData={setWeatherData} />
      </div>
      <div className="absolute inset-x-4 top-20 z-10 md:top-32 md:left-10 md:right-10">
        <Card weatherData={weatherData} />
      </div>
    </div>
  );
}

export default App;
