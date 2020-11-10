import React from 'react'
import './WeatherBox.css'
function WeatherBox({ data }) {
	console.log(data)
	const addFavorites = function () {
		const cache = localStorage.getItem('cities')
		if (cache) {
			const cities = JSON.parse(cache)
			const fCache = [...cities, data]
			localStorage.setItem("cities", JSON.stringify(fCache))
		}
		else {
			const fCache = [data]
			localStorage.setItem("cities", JSON.stringify(fCache))
		}
	}
	return (
		<div className='weatherBox'>
			<div className="title">{data.daily.name}, {data.daily.sys.country}</div>
			<div className="temp">{Math.round(data.forecast.daily[0].temp.day)}°c</div>
			<div className="weather">{data.forecast.daily[0].weather[0].main}</div>
			<div className="sub-info">
				<p>Feels like {Math.round(data.forecast.daily[0].feels_like.day)}°</p>
				<p>Wind {data.forecast.daily[0].wind_speed} m/s</p>
			</div>
			<button className="addFavorites" onClick={addFavorites}>
				+Add to Favorites
			</button>
		</div>
	)
}

export default WeatherBox
