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

  useEffect(() => {
    const res = updateCache()
    res.then(res => setStorage(res))
  }, [])
  return (
    <div className="App">
      <div className="container">
        <SearchBar
          setData={setData} />
        {storage.length > 0 &&
          <>
            <WeatherBox data={data} setStorage={setStorage} dummyData={storage[storage.length-1]}/>
            <ForecastContainer data={data} dummyData={storage[storage.length-1]}/>
            <WeatherContainer
              data={storage}
              setData={setData}
              setStorage={setStorage}
            />
          </>
        }
      </div>
    </div>
  )
}

export default App
