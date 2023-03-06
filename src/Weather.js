import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      city: response.data.city,
      country: response.data.country,
      date: "Monday 07:23",
      feel: response.data.temperature.feels_like,
      pressure: response.data.temperature.pressure,
      description: response.data.condition.description,
      icon: `http://shecodes-assets.s3.amazonaws.com/api/weather/${response.data.condition.icon}.png`,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-secondary w-100"
              />
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <h2>{weatherData.country}</h2>
        <ul>
          <li>{weatherData.date}</li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="grid grid-3-columns">
          <div className="currentTemperature">
            <span className="temperature">
              {Math.round(weatherData.temperature)}
            </span>
            <span className="unit">°C</span>
          </div>
          <div className="mainIcon">
            <img
              src={weatherData.icon}
              alt={weatherData.description}
              className="float-left"
            />
          </div>

          <div className="extraDescription">
            <ul>
              <li>Feels like: {Math.round(weatherData.feel)}</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind} km/h</li>
              <li>Pressure: {weatherData.pressure}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "5fb4oa610201e8b3c770fffbaee96fft";

    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
