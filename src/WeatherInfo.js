import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <h2>{props.data.country}</h2>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="grid grid-3-columns">
        <div className="currentTemperature">
          <span className="temperature">
            {Math.round(props.data.temperature)}
          </span>
          <span className="unit">°C</span>
        </div>
        <div className="mainIcon">
          <WeatherIcon code={props.data.icon} />
        </div>

        <div className="extraDescription">
          <ul>
            <li>Feels like: {Math.round(props.data.feel)}</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
            <li>Pressure: {props.data.pressure}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
