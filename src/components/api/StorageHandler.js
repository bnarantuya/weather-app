
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

export const getStorage = () => {
  const storage = localStorage.getItem('city')
  if(storage) return JSON.parse(storage)
  else return []
}