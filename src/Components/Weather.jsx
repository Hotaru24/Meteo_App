import React, { useState, useEffect } from "react";
import axios from 'axios';


//const [icon, setIcon] = useState('');
//const [layout, setLayout] = useState('');
//const [temp, setTemp] = useState(0);
//const [humidity, setHumidity] = useState(0);
//const [widSpeed, setWindSpeed] = useState(0);
//const [windDegree, setWindDegree] = useState(0);

const  Weather = () => {

const [name, setName] = useState('');
const apiKey = "b2307c78a2534a93cbd29390deba0618";  


  useEffect(() => {
    navigator.geolocation.getCurrentPosition( (position) => {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=${apiKey}`)
    .then((result) => {
      setName : {position.coords.name}
    })}, console.log("err") );
  }) 

  return (
    <div>
        <p>yo !</p>
    </div>

  )
}

export default Weather;