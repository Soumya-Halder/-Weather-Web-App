import React, { useState, useEffect } from 'react'
import './App.css';
import MainBox from './MainBox';


function App() {
  const [city, setCity] = useState(null)
  const [search, setSearch] = useState("kolkata")

  useEffect(() => {
    const fetchApi = async () => {

      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=e0aa22e1beb78ee2b3e5f2b0b2a7a17e`;
      const data = await fetch(url);
      const parsh = await data.json();
      setCity(parsh.main);
      // setWeather(parsh.weather);

    }
    fetchApi();
  }, [search])

  const changeCityName = (e) => {
    setSearch(e.target.value);
    // console.log(e);
  }     


  return (
    <>
      <div className="container">
        
      {!city ? (
        <MainBox cityName={"No data found!:("} changeCity={changeCityName} temp="__" min="__" max="__" />
      ) : (
         <MainBox cityName={search} changeCity={changeCityName} temp={city.temp} min={city.temp_min} max={city.temp_max} valueName={search} />
      )}

      </div>  
    </>

  );
}

export default App;
