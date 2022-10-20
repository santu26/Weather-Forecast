import React, { useEffect, useState } from "react";

const WeatherDetails = ({
  temperature,
  humidity,
  feelslike,
  wind_speed,
  wind_dir,
  weatherType,
  name,
  country,
}) => {
  const [weatherState, setWeatherState] = useState("");
  useEffect(() => {
    if (weatherType) {
      switch (weatherType) {
        case "Clouds":
          setWeatherState("wi-day-cloudy");
          break;
        case "Haze":
          setWeatherState("wi-fog");
          break;
        case "Clear":
          setWeatherState("wi-day-sunny");
          break;
        case "Mist":
          setWeatherState("wi-dust");
          break;
        case "Rain":
          setWeatherState("wi-day-rain");
          break;
        case "Smoke":
          setWeatherState("wi-wi-smoke");
          break;
        case "Snow":
          setWeatherState("wi-wi-snow");
          break;
        case "Partly Cloudy":
          setWeatherState("wi-wi-cloudy");
          break;

        default:
          setWeatherState("wi-day-sunny");
          break;
      }
    }
  }, [weatherType]);

  return (
    <>
      <article className="widget">
        <div className="weatherIcon">
          <i className={`wi ${weatherState}`}></i>
        </div>
        <div className="weatherInfo">
          <div className="temperature">
            <span>{temperature}&deg;C</span>
          </div>
          <div className="description">
            <div className="weatherCondition">{weatherType}</div>
            <div className="location">
              {name}, {country}
            </div>
          </div>
        </div>

        <div className="date">
          {new Date().toDateString()},{new Date().toLocaleTimeString()}
        </div>

        <div className="extra-weatherCondition">
          <div className="temp-info">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-wind-direction"}></i>
              </p>
              <p className="extra-info-leftSide">
                {wind_dir} <br />
                Wind Direction
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                <i className={"wi wi-humidity"}></i>
              </p>
              <p className="extra-info-leftSide">
                {humidity} % <br />
                Humidity
              </p>
            </div>
          </div>
          <div className="extra-weatherCondition">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-alien"}></i>
              </p>
              <p className="extra-info-leftSide">
                <span>{feelslike} &deg;C</span> <br />
                Feels Like
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                <i className={"wi wi-meteor"}></i>
              </p>
              <p className="extra-info-leftSide">
                {wind_speed} KM/H
                <br />
                Wind Speed
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default WeatherDetails;
