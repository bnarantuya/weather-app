import React, { useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar/SearchBar'
import WeatherBox from './components/WeatherBox/WeatherBox'
import ForecastContainer from './components/ForecastContainer/ForcastContainer'
function App() {
  const [data, setData] = useState([])
  const [error, setError] = useState(true)
  const [forecast, setForecast] = useState({})
  return (
    <div className="App">
      <div className="container">
        <SearchBar
          setData={setData}
          setForecast={setForecast}
          setError={setError} />
        {data.base && (
          <WeatherBox data={data} />
        )}
        {!error && (
          <ForecastContainer forecast={forecast} />
        )}
      </div>
    </div>
  )
}

export default App
