import React from 'react';
import './App.scss';
import Serach from './components/Serach';
import ShowWeather from './components/ShowWeather';
import {useState} from 'react';
import axios from 'axios';
import ShowError from './components/ShowError';



function App() {
  const [city, updateCity]=useState('');
  const [weather, updateWeather]=useState();
  const [err,updateErr]=useState('');
  

  const fetchWeather = async(e) => {
    e.preventDefault();
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8e6e28451cffda3d317932fb105f8590`).then((res)=>{
      //  console.log(res.data);
      updateWeather(res.data);
    }).catch((err)=>{
        // console.log(err.response.status);
        updateErr(err.response.status)
        updateWeather('')
    })
  
  }
  if (weather) {
    return(
      <div className='App'>
        <Serach  updateCity={updateCity} fetchWeather={fetchWeather} />
        <ShowWeather weather={weather}/>
      </div>
    )
  }
  if (err) {
    return(
      <div className='App'>
      <Serach  updateCity={updateCity} fetchWeather={fetchWeather} />
      <ShowError/>
    </div>
    )
  }
  return(
    <div className='App'>
        <Serach updateCity={updateCity} fetchWeather={fetchWeather} />
      </div>
  )

}

export default App;
