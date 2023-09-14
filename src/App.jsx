import React from "react";
import WeatherWidget from "./Components/Weather/WeatherApp";
import NewsWidget from "./Components/NewsWidget/NewsWidget";
import NavBar from "./Components/Assets/NavBar";
import SideBar from "./Components/Assets/SideBar";
const App = () => {
  return (
    <div>

      <SideBar />
      {/* <h1 className="text-3xl font-bold underline m-2 text-center">WeatherWidget</h1>
      <WeatherWidget />
      <h1 className="text-3xl font-bold underline m-2 text-center" >NewsWidget</h1>
      <NewsWidget /> */}
    </div>
  );
};

export default App;
