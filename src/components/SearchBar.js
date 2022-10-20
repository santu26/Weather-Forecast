import React, { useEffect, useState } from "react";
import "../components/Style.css";
import WeatherDetails from "./WeatherCard";

const SearchBar = () => {
  const [searchCity, setSearchCity] = useState("Bhubaneswar");
  //   console.log(searchCity);
  const [tempInfo, setTempoInfo] = useState({});

  useEffect(() => {
    getWeatherInfo();
  }, []);

  const getWeatherInfo = async () => {
    try {
      let URL = `http://api.weatherstack.com/current?access_key=32570d284495855b6fa39e73c01d79cd&query=${searchCity}`;
      let response = await fetch(URL);
      let data = await response.json();
      // console.log(data);
      const { temperature } = data.current;
      const { humidity, feelslike, wind_speed, wind_dir } = data.current;
      const { 0: weatherType } = data.current.weather_descriptions;
      const { name, country } = data.location;

      const newWeatherInfo = {
        temperature,
        humidity,
        feelslike,
        wind_speed,
        wind_dir,
        weatherType,
        name,
        country,
      };

      setTempoInfo(newWeatherInfo);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="wrapper">
        <div className="search">
          <input
            type="search"
            placeholder="Search City Name..."
            value={searchCity}
            onChange={(e) => setSearchCity(e.target.value)}
          />
          <button className="searchBtn" onClick={getWeatherInfo}>
            Search
          </button>
        </div>
      </div>
      <WeatherDetails {...tempInfo} />
    </>
  );
};

export default SearchBar;
