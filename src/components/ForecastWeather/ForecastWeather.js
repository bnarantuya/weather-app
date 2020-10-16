import React from 'react'
import './ForecastWeather.css'
function ForecastWeather({ forecast }) {
  console.log(forecast)
  const daytime = new Date(forecast.dt * 1000)
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  const getDay = daytime.getDay()
  const dateMonth = daytime.getDate()
  return (
    <div className='forecastWeather'>
      <div className='title'>{days[getDay]}, {dateMonth}</div>
      <div className='temp'>
        <span className='temp-day'>{Math.round(forecast.temp.day)}°</span>
        <span className="temp-night">{Math.round(forecast.temp.night)}°</span>
      </div>
      <div className="weather">{forecast.weather[0].main}</div>
    </div>
  )
}

export default ForecastWeather
