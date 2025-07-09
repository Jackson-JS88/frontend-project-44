const getRandomNumber = (min, max) => {
  const range = max - min + 1
  const random = Math.random()
  const scaled = Math.floor(random * range)
  const result = scaled + min
  return result
}

export default getRandomNumber
