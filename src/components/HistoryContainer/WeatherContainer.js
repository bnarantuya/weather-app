import React from 'react'
import { getStorage, removeFromStorage } from '../api/StorageHandler'
import ForecastWeather from '../ForecastWeather/ForecastWeather'
import './WeatherContainer.css'
function WeatherContainer({ setData, setStorage, data }) {
  const boxPreview = (data) => {
    setData(data)
  }

  const removeCity = (e, index) => {
    e.stopPropagation()
    removeFromStorage(index)
    const storage = getStorage()
    setStorage(storage)
  }
  return (
    <div className="weatherContainer">
      {data.length > 0 &&
        <>
          <div className="historyTitle">Other Cities</div>
          {data.map((city, index) => (
            <div className="weatherHistory" key={index} onClick={e => boxPreview(city)}>
              <div className="weatherTitle">{city.daily.name}, {city.daily.sys.country}</div>
              {city.forecast.daily.map((c, index) => (
                <ForecastWeather
                  forecast={c}
                  key={index}
                  setData={setData}
                />)
              )}
              <button className="removeCity" onClick={e => removeCity(e, index)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="24px" height="24px"><path d="M0 0h24v24H0z" fill="none" /><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" /></svg>
              </button>
            </div>
          ))}
        </>
      }
    </div>
  )
}

export default WeatherContainer
