import React from 'react'
import './MainBox.css';

export default function MainBox(props) {
    return (
        <div className="mainBox" >
           <input type="search" placeholder="Enter City Name" onChange={props.changeCity } value={props.valueName} />
           <i>{props.icon}</i>
           <h1>{props.cityName}</h1>
           <h1>{props.msg}</h1>
            <h2>{props.temp}°C </h2>
            <p><span> min: {props.min}°C | max: {props.max}°C</span></p>
            <p>18/09/2021   &   09:50</p>
        </div>
    )
}
