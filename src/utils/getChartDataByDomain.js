export const getChartDataByDomain = (data) => {
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

export const getChartDataByDomainDate = (data) => {
  const parsedData = {};
  Object.keys(data).forEach((domen) => {
    data[domen].forEach(({ date, impressions, clicks, revenue }) => {
      const parsedDataDate = parsedData[date]
      const dataToAdd = { date, impressions, clicks, revenue }
      if (parsedDataDate) return parsedData[date].push(dataToAdd)
      parsedData[date] = [dataToAdd]
    })
  })
  return parsedData;
}

export const getTrafficDataByDomain = (data) =>{
  const parsedData = {};
  Object.keys(data).forEach((domen) => {
      data[domen].forEach(({ date, row, serow }) => {
          const parsedDataDate = parsedData[date]
          const dataToAdd = { domen, row, serow }
          if (parsedDataDate) return parsedData[date].push(dataToAdd)
          parsedData[date] = [dataToAdd]
      })
  })
  return parsedData;
}
