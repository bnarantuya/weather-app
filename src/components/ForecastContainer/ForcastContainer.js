import React from 'react'
import ForecastWeather from '../ForecastWeather/ForecastWeather'
import './ForecastContainer.css'
function ForcastContainer({ data }) {
  return (
    <div className="forecastContainer">
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
