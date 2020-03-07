import React, { useState, useEffect } from "react";


//const [,set] = useState();



const  Weather = () => {


const apiKey = "b2307c78a2534a93cbd29390deba0618";  

  useEffect(() => {
    axios.get(`http://samples.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=${apiKey}`)
    .then((result) => {
      setgameList(result.data)
      console.log(result.data)
    })
  }) 

  return (
    <p>yo ! </p>
  )
}

export default Weather;