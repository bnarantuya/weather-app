import { getCurrentWeatherData, getOneCall } from "./FetchCalls";
import { getStorage } from "./StorageHandler";

export const updateCache = async () => {
  const cache = getStorage()
  const updatedValues = []
  if (cache.length > 0) {
    for (let i = 0; i < cache.length; i++) {
      const city = cache[i]
      const newDay = await getCurrentWeatherData(city.daily.name)
      if (city.forecast.daily[0].dt < newDay.dt) {
        const newWeek = await getOneCall(city.daily.coord.lon, city.daily.coord.lat)
        updatedValues.push({ daily: newDay, forecast: newWeek })
      }
      else updatedValues.push({ daily: newDay, forecast: city.forecast })
    }
  }
  return updatedValues
}