import React, { useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar/SearchBar'
import WeatherBox from './components/WeatherBox/WeatherBox'
import ForecastContainer from './components/ForecastContainer/ForcastContainer'
import WeatherContainer from './components/HistoryContainer/WeatherContainer'
function App() {
  const [data, setData] = useState([])
  const [error, setError] = useState(true)
  return (
    <div className="App">
      <div className="container">
        <SearchBar
          setData={setData}
          setError={setError} />

        {!error && (
          <>
            <WeatherBox data={data} />
            <ForecastContainer data={data} city={'Temp city'} />
            <WeatherContainer />
          </>
        )}
      </div>
    </div>
  )
}

export default App
