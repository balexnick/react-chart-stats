export const getParcedData = (array) => {
  let parsedObj = {};
  array.forEach(item => {
    Object.keys(item).forEach(value => {
      const parsedData = parsedObj[value]
      if (parsedData) return parsedObj[value].push(item[value])
      parsedObj[value] = [item[value]]
    })
  })
  return parsedObj
}