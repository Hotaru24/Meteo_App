import React, { useState, useEffect } from "react";
import axios from 'axios';

//const [data, setData] = useState(null);

const  Weather = () => {


const apiKey = "b2307c78a2534a93cbd29390deba0618";  


  useEffect(() => {
    navigator.geolocation.getCurrentPosition( (position) => {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}`)
    .then((result) => {
      console.log(result)
    })}, console.log("err") );
  }) 

  return (
    <div>
        <p>yo !</p>
    </div>

  )
}

export default Weather;