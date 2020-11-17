import React from 'react'
import { addToStorage, getStorage, isExists } from '../api/StorageHandler'
import './WeatherBox.css'
function WeatherBox({ data, setStorage, dummyData }) {
	if(data.length === 0) data = dummyData
	const addFavorites = function () {
		const storage = getStorage()
		setStorage([...storage, data])
		addToStorage(data)
	}
	const img = `http://openweathermap.org/img/wn/${data.forecast.daily[0].weather[0].icon}.png`
	return (
		<div className='weatherBox'>
			<div className="title">{data.daily.name}, {data.daily.sys.country}</div>
			<div className="temp">
				<img src={img} alt={data.forecast.daily[0].weather[0].description}></img>
				<span>{Math.round(data.forecast.daily[0].temp.day)}°c</span>
			</div>
			<div className="weather">{data.forecast.daily[0].weather[0].main}</div>
			<div className="sub-info">
				<p>Feels like {Math.round(data.forecast.daily[0].feels_like.day)}°</p>
				<p>Wind {data.forecast.daily[0].wind_speed} m/s</p>
			</div>
			{!isExists(data) &&
				<button className="addFavorites" onClick={addFavorites}>
					+Add to Favorites
				</button>
			}
		</div>
	)
}

export default WeatherBox
