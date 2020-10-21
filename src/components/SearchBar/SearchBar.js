import React, { useState } from "react"
import './SearchBar.css'
import { getCurrentWeatherData, getOneCall } from '../FetchCalls'
function SearchBar({ setData, setForecast, setError }) {
  const [query, setQuery] = useState("")
  const fetchData = async (e) => {
    if (e.key === 'Enter') {
      const data = await getCurrentWeatherData(query)
      const oneCall = await getOneCall(data.coord.lon, data.coord.lat)
      setData(data)
      setForecast(oneCall)
      setError(false)
    }
  }
  return (
    <div className="searchBar">
      <label htmlFor="cityInput">Enter City: </label>
      <input
        id="cityInput"
        type="search"
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={(e) => fetchData(e)}
        placeholder="ex: Chicago"
      ></input>
    </div>
  )
}

export default SearchBar;
