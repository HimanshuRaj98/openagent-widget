import React from "react";

const Clock = () => {
  const [weatherData, setWeatherData] = useState(null);
  const apiKey = "2181ebf4266adf1e15e6a79c7718550d"; // Replace with your Weatherstack API key
  const location = "Sambalpur, India"; // Replace with the location you want to query

  useEffect(() => {
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=${apiKey}&query=${location}`
      )
      .then((response) => {
        setWeatherData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  }, []);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const { request, location: weatherLocation, current } = weatherData;

  return (
    <div className="weather-widget">
      <h2>
        Weather in {weatherLocation.name}, {weatherLocation.country}
      </h2>
      <p>Request Type: {request.type}</p>
      <p>Query: {request.query}</p>
      <p>Language: {request.language}</p>
      <p>Unit: {request.unit}</p>
      <p>Region: {weatherLocation.region}</p>
      <p>Latitude: {weatherLocation.lat}</p>
      <p>Longitude: {weatherLocation.lon}</p>
      <p>Timezone ID: {weatherLocation.timezone_id}</p>
      <p>Local Time: {weatherLocation.localtime}</p>
      <p>Local Time Epoch: {weatherLocation.localtime_epoch}</p>
      <p>UTC Offset: {weatherLocation.utc_offset}</p>
      <p>Observation Time: {current.observation_time}</p>
      <p>Temperature: {current.temperature}°C</p>
      <p>Weather Code: {current.weather_code}</p>
      <p>Weather Description: {current.weather_descriptions[0]}</p>
      <p>Wind Speed: {current.wind_speed}</p>
      <p>Wind Degree: {current.wind_degree}</p>
      <p>Wind Direction: {current.wind_dir}</p>
      <p>Pressure: {current.pressure}</p>
      <p>Precipitation: {current.precip}</p>
      <p>Humidity: {current.humidity}</p>
      <p>Cloudcover: {current.cloudcover}</p>
      <p>Feels Like: {current.feelslike}</p>
      <p>UV Index: {current.uv_index}</p>
      <p>Visibility: {current.visibility}</p>
      <p>Is Day: {current.is_day}</p>
    </div>
  );
};
export default Clock;
