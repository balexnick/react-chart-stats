import {requestHandler} from 'utils/request-handler'
import * as CONSTANT from 'constant'
import { getSumOfMetricsByDomains, calculateAllDomainsData } from 'utils/getSum'
import { getChartDataSum } from 'utils/getChartDataSum'

export const getTodayStat = () => {
  const options = {
    type: "get",
    url: `stat/hours/0`
  };
  return requestHandler({options})
}

export const getYesterdayStat = () => {
  const options = {
    type: "get",
    url: `stat/hours/1`
  };
  return requestHandler({options})
}

export const getTotalChartStatsForToday = () => {
  return dispatch => {
    dispatch({ type: CONSTANT.LOADER, payload: true})
    Promise.all([getTodayStat(), getYesterdayStat()])
      .then((response) => {
        let todayMetricsByDomain = getSumOfMetricsByDomains(response[0].data.result.data);
        let totalRevenueForToday = calculateAllDomainsData(todayMetricsByDomain);
        let todayChartDataSum = getSumOfMetricsByDomains(getChartDataSum(response[0].data.result.data))
        let yestardayChartDataSum = getSumOfMetricsByDomains(getChartDataSum(response[1].data.result.data))

        let obj = {
          total: totalRevenueForToday,
          today: {
            datefrom: response[0].data.result.datefrom,
            data: todayChartDataSum
          },
          yestarday: {
            datefrom: response[1].data.result.datefrom,
            data: yestardayChartDataSum
          }
        }
        console.log(obj)
        dispatch({ type: CONSTANT.LOADER, payload: false})
        dispatch({ type: CONSTANT.CHART_DATA_SUM, payload: obj })
      })
  }
}