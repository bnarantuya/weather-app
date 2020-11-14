import React, { useState, useEffect } from 'react'
import './App.css'
import SearchBar from './components/SearchBar/SearchBar'
import WeatherBox from './components/WeatherBox/WeatherBox'
import ForecastContainer from './components/ForecastContainer/ForcastContainer'
import WeatherContainer from './components/HistoryContainer/WeatherContainer'
import { updateCache } from './components/api/ForecastData'
// import { getStorage } from './components/api/StorageHandler'
function App() {
  const [data, setData] = useState([])
  const [storage, setStorage] = useState([])
  const [error, setError] = useState(true)

  useEffect(() => {
    async function getData() {
      const res = await updateCache()
      setStorage(res)
    }
    getData()
  }, [])
  return (
    <div className="App">
      <div className="container">
        <SearchBar
          setData={setData}
          setError={setError} />
        {!error && (
          <>
            <WeatherBox data={data} setStorage={setStorage} />
            <ForecastContainer data={data} city={'Temp city'} />
          </>
        )}
        {storage.length > 0 &&
          <WeatherContainer
            data={storage}
            setData={setData}
            setError={setError}
            setStorage={setStorage}
          />}
      </div>
    </div>
  )
}

export default App
