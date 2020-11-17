import React from 'react'
import './ForecastWeather.css'
function ForecastWeather({ forecast }) {
  const daytime = new Date(forecast.dt * 1000)
  const days = ['Sun','Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const getDay = daytime.getDay()
  const dateMonth = daytime.getDate()
  const img = `http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`
  return (
    <div className='forecastWeather'>
      <div className='title'>{days[getDay]}, {dateMonth}</div>
      <div className='temp'>
        <img src={img} alt={forecast.weather[0].description}></img>
        <span className='temp-day'>{Math.round(forecast.temp.day)}°</span>
        <span className="temp-night">{Math.round(forecast.temp.night)}°</span>
      </div>
      <div className="weather">{forecast.weather[0].main}</div>
    </div>
  )
}

export default ForecastWeather
