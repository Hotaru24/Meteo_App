import React, { useState, useEffect } from "react";
import axios from 'axios';
import '../Style/Weather.css';


const  Weather = () => {

  const [name, setName] = useState('');
  const [icon, setIcon] = useState('');
  const [layout, setLayout] = useState('');
  const [temp, setTemp] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [widSpeed, setWindSpeed] = useState(0);
  const [windDegree, setWindDegree] = useState(0);
  const apiKey = "b2307c78a2534a93cbd29390deba0618";  

  useEffect(() => {
    navigator.geolocation.getCurrentPosition( (position) => {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=${apiKey}`)
    .then((result) => {
      console.log(result.data)
      setName(result.data.name);
      setIcon(result.data.weather[0].icon);
      setLayout(result.data.weather[0].description);
      setTemp(result.data.main.temp);
      setHumidity(result.data.main.humidity);
      setWindSpeed(result.data.wind.speed);
      setWindDegree(result.data.wind.deg)
    })}, console.log("err") );
  }) 

  return (
    <>
      <h2>{name}</h2>
      <div className="data-body">
        <div className="appData">
          <p id="temp">{temp}°C</p>
          <p>Humidité : {humidity}%</p>
        </div>
        <div className="appData">
          <p>Vent : {Math.round(widSpeed*3.6)} km/h </p>
          <img 
            src={`${process.env.PUBLIC_URL}arrow.png`}
            alt="logo" 
            style={ {transform: `rotate(${windDegree}deg)`, maxWidth: '80px'}}
          />
        </div>
        <img id="weatherPic" src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt={layout}/>
      </div>
    </>
  )
}

export default Weather;
