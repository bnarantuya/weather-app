import React from 'react'
import ForecastWeather from '../ForecastWeather/ForecastWeather'
import './ForecastContainer.css'
function ForcastContainer({ forecast }) {
  return (
    <div className="forecastContainer">
      {forecast.daily.map((day, index) => (
        <ForecastWeather
          forecast={day}
          key={index}
        />
      ))}
    </div>
  )
}

export default ForcastContainer
