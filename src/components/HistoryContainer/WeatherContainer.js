import React from 'react'
import { getStorage, removeFromStorage } from '../api/StorageHandler'
import ForecastWeather from '../ForecastWeather/ForecastWeather'
import './WeatherContainer.css'
function WeatherContainer({ setData, setError, setStorage, data }) {
  const boxPreview = (data) => {
    setData(data)
    setError(false)
  }

  const removeCity = (e,index) => {
    e.stopPropagation()
    removeFromStorage(index)
    const storage = getStorage()
    setStorage(storage)
  }
  return (
    <div className="weatherContainer">
      {data.length > 0 &&
        <>
          <div className="historyTitle">Some title</div>
          {data.map((city, index) => (
            <div className="weatherHistory" key={index} onClick={e=>boxPreview(city)}>
              <div className="weatherTitle">{city.daily.name}, {city.daily.sys.country}</div>
              {city.forecast.daily.map((c, index) => (
                <ForecastWeather
                  forecast={c}
                  key={index}
                  setData={setData}
                />)
              )}
              <button className="removeCity" onClick={e=>removeCity(e,index)}>
                Delete city
              </button>
            </div>
          ))}
        </>
      }
    </div>
  )
}

export default WeatherContainer
