import {requestHandler} from 'utils/request-handler'
import * as CONSTANT from 'constant'
import { getSumOfMetricsByDomains, calculateTotalRevenueForDomains, calculateAllDomainsData } from 'utils/getSum'


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
    Promise.all([getTodayStat(), getYesterdayStat()])
      .then((response) => {
        let todayMetricsByDomain = getSumOfMetricsByDomains(response[0].data.result.data);
        let totalRevenueForToday = calculateAllDomainsData(todayMetricsByDomain);
        console.log(totalRevenueForToday)
      })
  }
}