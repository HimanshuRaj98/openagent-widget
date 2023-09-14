import React, { useState, useEffect } from "react";
import axios from "axios";

const WeatherWidget = () => {
  const [weatherData, setWeatherData] = useState(null);
  const apiKey = "2181ebf4266adf1e15e6a79c7718550d";
  const defaultLocation = "New Delhi"; // Default location
  const [userLocation, setUserLocation] = useState(defaultLocation); // User's location input
  const [inputValue, setInputValue] = useState(userLocation); // Input value state

  const handleFetchWeather = () => {
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=${apiKey}&query=${inputValue}`
      )
      .then((response) => {
        setWeatherData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  };

  const handleInputKeyPress = (event) => {
    if (event.key === "Enter") {
      // When Enter key is pressed, update the userLocation and fetch weather data
      setUserLocation(inputValue);
      handleFetchWeather();
    }
  };

  useEffect(() => {
    handleFetchWeather();
  }, [userLocation, apiKey]);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const { current } = weatherData;
  const temperature = current.temperature;
  const weatherDescription = current.weather_descriptions;

  return (
    <div className="weather-widget p-4 bg-slate-600 text-white font-bold block max-w-sm justify-center rounded-lg mx-auto text-center outline-double">
      <h2 className="text-center">Weather in {userLocation}</h2>
      <div className="flex items-center justify-center p-5">
        <input
          type="text"
          placeholder="Enter Your Location"
          className="text-black mr-2 text-center placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleInputKeyPress} // Handle "Enter" key press
        />
        <button
          onClick={handleFetchWeather}
          className="px-2 py-0 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white rounded-md"
        >
          OK
        </button>
      </div>
      <p>Temperature: {temperature}°C</p>
      <p>Info: {weatherDescription}</p>
    </div>
  );
};

export default WeatherWidget;
