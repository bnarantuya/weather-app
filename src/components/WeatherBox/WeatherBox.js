import React from 'react'
import './WeatherBox.css'
function WeatherBox({ data }) {
	return (
		<div className='weatherBox'>
			<div className="title">{data.name}, {data.sys.country}</div>
			<div className="temp">{Math.round(data.main.temp)}°c</div>
			<div className="weather">{data.weather[0].main}</div>
			<div className="sub-info">
				<p>Feels like {Math.round(data.main.feels_like)}°</p>
				<p>Wind {data.wind.speed} m/s</p>
				<p>Visibility {data.visibility/1000} km</p>
			</div>
		</div>
	)
}

export default WeatherBox
