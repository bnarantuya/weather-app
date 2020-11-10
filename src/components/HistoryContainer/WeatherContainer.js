import React from 'react'
import ForecastWeather from '../ForecastWeather/ForecastWeather'
import './WeatherContainer.css'
function WeatherContainer({ data = JSON.parse(localStorage.getItem('cities')) }) {
  console.log(data)
  return (
    <div className="weatherContainer">
      {data.map((city, index) => (

        <div className="weatherHistory" key="index">
          <div>{city.daily.name}, {city.daily.sys.country}</div>
          {city.forecast.daily.map((c, index) => (
            <ForecastWeather
              forecast={c}
              key={index}
            />)
          )}
        </div>
      ))}
    </div>
  )
}

export default WeatherContainer
