import React from 'react'
import ForecastWeather from '../ForecastWeather/ForecastWeather'
import './ForecastContainer.css'
function ForcastContainer({ data }) {
  console.log(data)
  return (
    <div className="forecastContainer">
      <div className="foreCastCity">{'qwe'}</div>
      {data.forecast.daily.map((day, index) => (
        index !== 0 && (
        <ForecastWeather
          forecast={day}
          key={index}
        />)
      ))}
    </div>
  )
}

export default ForcastContainer
