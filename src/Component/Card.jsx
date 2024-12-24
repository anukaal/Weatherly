import React from "react";

const getWeatherIcon = (description) => {
};

function Card({ weatherData }) {
  if (!weatherData) return null;

  const { name, main, weather, wind } = weatherData;
  const weatherDescription = weather[0].description;

  return (
    <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-lg shadow-md p-6 text-white border border-white border-opacity-30 flex flex-col items-center space-y-2 max-w-sm mx-auto">
      {getWeatherIcon(weatherDescription)}
      <h2 className="text-3xl font-semibold">{name}</h2>
      <p className="text-xl font-medium">
        {Math.round(main.temp - 273.15)}°C
      </p>
      <p className="text-white text-sm">Weather: {weatherDescription}</p>
      <p className="text-white text-sm">Humidity: {main.humidity}%</p>
      <p className="text-white text-sm">Wind Speed: {wind.speed} m/s</p>
    </div>
  );
}

export default Card;
