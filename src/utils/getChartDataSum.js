export const getChartDataSum = (data) =>{
  const parsedData = {};
  Object.keys(data).forEach((domen) => {
      data[domen].forEach(({ hour, impressions, clicks, revenue }) => {
          const parsedDataDate = parsedData[hour]
          const dataToAdd = { impressions, clicks, revenue }
          if (parsedDataDate) return parsedData[hour].push(dataToAdd)
          parsedData[hour] = [dataToAdd]
      })
  })
  return parsedData;
}