import React from 'react';
import Weather from './Components/Weather';
import './App.css';

// API key : b2307c78a2534a93cbd29390deba0618
// API link : http://samples.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=b6907d289e10d714a6e88b30761fae22


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather/>
      </header>
    </div>
  );
}

export default App;
