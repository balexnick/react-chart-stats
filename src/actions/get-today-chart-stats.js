import { requestHandler } from 'utils/request-handler'
import * as CONSTANT from 'constant'
import { getSumOfMetricsByDomains, calculateAllDomainsData } from 'utils/getSum'
import { getChartDataByDomain } from 'utils/getChartDataByDomain'
import { getParcedData } from 'utils/getParcedData'

const setBalance = (array) => {
  if (array.length !== 24) {
    array.push({hour: 0, impressions: 0, clicks: 0, revenue: 0})
    return setBalance(array)
  }
  return array
}

export const getCurrentStat = () => {
  const options = {
    type: "get",
    url: `stat/hours/0`
  };
  return requestHandler({ options })
}

export const getPrevStat = () => {
  const options = {
    type: "get",
    url: `stat/hours/1`
  };
  return requestHandler({ options })
}

export const getTotalChartStatsForToday = () => {
  return dispatch => {
    dispatch({ type: CONSTANT.LOADER, payload: true })
    Promise.all([getCurrentStat(), getPrevStat()])
      .then((response) => {
        let currentMetricsByDomain = getSumOfMetricsByDomains(response[0].data.result.data);
        let totalRevenueForCurrent = calculateAllDomainsData(currentMetricsByDomain);
        let currentChartDataSum = getSumOfMetricsByDomains(getChartDataByDomain(response[0].data.result.data))
        let prevChartDataSum = getSumOfMetricsByDomains(getChartDataByDomain(response[1].data.result.data))
        let array = [response[0].data.result.data, response[1].data.result.data]
        let arrayData = getParcedData(array)

        let domainData = Object.keys(arrayData).map(item => {
          return {
            domain: item,
            total: currentMetricsByDomain[item],
            stats: {
              current: {
                datefrom: response[0].data.result.datefrom,
                data: setBalance(arrayData[item][0])
              },
              prev: {
                datefrom: response[1].data.result.datefrom,
                data: arrayData[item][1]
              }
            }
          }
        })
        let obj = {
          total: totalRevenueForCurrent,
          stats: {
            current: {
              datefrom: response[0].data.result.datefrom,
              data: setBalance(Object.keys(currentChartDataSum).map(item => currentChartDataSum[item]))
            },
            prev: {
              datefrom: response[1].data.result.datefrom,
              data: Object.keys(prevChartDataSum).map(item => prevChartDataSum[item])
            }
          }
        }
        dispatch({ type: CONSTANT.LOADER, payload: false })
        dispatch({ type: CONSTANT.CHART_DATA_SUM, payload: obj })
        dispatch({ type: CONSTANT.DOMAIN_DATA, payload: domainData })
      })
  }
}

