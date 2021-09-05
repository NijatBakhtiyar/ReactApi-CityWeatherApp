// import styled from 'styled-components'
import axios from 'axios';
import { useState } from 'react';
import City from './components/City'
import Weather from './components/Weather';
// import Weather from './components/Weather'

// const Container = styled.div`
//   // position: absolute;
//   // left: 50%;
//   // top: 50%;
//   // transform: translate(-50%,-60%);
//   display:flex;
//   flex-direction: column;
//   align-items: center;
//   box-shadow: 0 3px 6px 0 #555;
//   padding: 20px 10px;
//   border-radius: 4px;
//   margin: auto;
//   width: 380px;
//   font-family: 'Montserrat', sans-serif;
// `

function App() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();
  const API_Key = "13c0730d0f0a8c5d4b4c11511008e68e"

  const fetchWeather = async (e) => {
    e.preventDefault()
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}`)
    updateWeather(response.data)
  }
  return (
    <>
      {weather ? <Weather weather={weather}/> :
        <City updateCity={updateCity} fetchWeather={fetchWeather} />}
    </>
  );
}

export default App;
