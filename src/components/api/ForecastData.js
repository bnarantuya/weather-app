import { getCurrentWeatherData, getOneCall } from "./FetchCalls";
import { getStorage } from "./StorageHandler";

export const updateCache = async () => {
  const cache = getStorage()
  const updatedValues = []
  if(cache.length > 0) {
    cache.forEach(async (city) => {
      const newDay = await getCurrentWeatherData(city.daily.name)
      const newWeek = await getOneCall(city.daily.coord.lon, city.daily.coord.lat)
      updatedValues.push({daily: newDay, forecast: newWeek})
    });
  }
  return updatedValues
}