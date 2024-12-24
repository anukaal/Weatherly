import React, { useState } from 'react';
import search from '../server/weatherInfo';

function SearchBar({ setWeatherData }) {
  const [city, setCity] = useState('');

  const handleSearch = async () => {
    const data = await search(city);
    if (data) {
      setWeatherData(data);
      setCity('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="flex items-center justify-center w-full p-4 bg-transparent">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Search for a city..."
        className="w-full max-w-md p-2 border border-gray-300 rounded-lg bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button 
        onClick={handleSearch}
        className="ml-2 p-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
