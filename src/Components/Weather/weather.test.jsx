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
    <div>
      <h2>Weather in {userLocation}</h2>
      <div>
        <input
          type="text"
          placeholder="Enter Your Location"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleInputKeyPress}
        />
        <button onClick={handleFetchWeather}>OK</button>
      </div>
      <p>Temperature: {temperature}°C</p>
      <p>Condition: {weatherDescription}</p>
    </div>
  );
};

export default WeatherWidget;
