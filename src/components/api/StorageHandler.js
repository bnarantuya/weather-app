
export const addToStorage = (el) => {
  const storage = getStorage()
  storage.push(el)
  localStorage.setItem('city', JSON.stringify(storage))
}

export const removeFromStorage = (index) => {
  const storage = getStorage()
  localStorage.setItem('city', JSON.stringify(storage.filter((c, i) => i !==index)))
  return storage[index]
}

export const isExists = (el) => {
  const storage = getStorage()
  console.log(el)
  for(let i = 0; i < storage.length; i ++) {
    if(storage[i].daily.coord.lon === el.daily.coord.lon && storage[i].daily.coord.lat === el.daily.coord.lat)
      return false
  }
  return true
}

export const getStorage = () => {
  const storage = localStorage.getItem('city')
  if(storage) return JSON.parse(storage)
  else return []
}