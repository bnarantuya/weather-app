import axios from 'axios'
const apiKey = ''
export const getCurrentWeatherData = async (query) => {
  const url = "https://api.openweathermap.org/data/2.5/weather"
  const { data } = await axios
    .get(url, {
      params: {
        q: query,
        units: "metric",
        APPID: apiKey,
      },
    })
  console.log(data)
  return data
}

export const getOneCall = async (lon, lat) => {
  const url = "https://api.openweathermap.org/data/2.5/onecall"
  const { data } = await axios
    .get(url, {
      params: {
        lon: lon,
        lat: lat,
        units: 'metric',
        APPID: apiKey
      },
    })
  console.log(data)
  return data
}
