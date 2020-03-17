import {requestHandler} from 'utils/request-handler'
import * as CONSTANT from 'constant'
import { getSumOfMetricsByDomains, calculateTotalRevenueForDomains } from 'utils/getSum'
export const getTodayStat = () => {
  const options = {
    type: "get",
    url: `stat/hours/0`
  };
  return requestHandler({options})
}

export const getThisMonthStat = () => {
  const options = {
    type: "get",
    url: `stat/thismonth`
  };
  return requestHandler({options})
}

// export const getYesterdayStat = () => {
//   return dispatch => {
//     const options = {
//       type: "get",
//       url: `stat/hours/1`
//     };
//     const cb =  (response) => {
//       console.log('1', response)
//     }
//     requestHandler({options, cb})
//   }
// }

export const getTotalRevenue = () => {
  return dispatch => {
    dispatch({ type: CONSTANT.GIF_LOADER, payload: false})
    Promise.all([getTodayStat(), getThisMonthStat()])
      .then((response) => {
        let todayMetricsByDomain = getSumOfMetricsByDomains(response[0].data.result.data);
        let thisMonthMetricsByDomain = getSumOfMetricsByDomains(response[1].data.result.current.data);
        let lastMonthMetricsByDomain = getSumOfMetricsByDomains(response[1].data.result.prev.data);
        let totalRevenueForToday = calculateTotalRevenueForDomains(todayMetricsByDomain);
        let totalRevenueForThisMonth = calculateTotalRevenueForDomains(thisMonthMetricsByDomain);
        let totalRevenueForLastMonth = calculateTotalRevenueForDomains(lastMonthMetricsByDomain);
        let result = {
        	today: +(Math.round(totalRevenueForToday * 100) / 100).toFixed(2),
        	thisMonth: +(Math.round(totalRevenueForThisMonth * 100) / 100).toFixed(2),
        	lastMonth: +(Math.round(totalRevenueForLastMonth * 100) / 100).toFixed(2)
        };
        dispatch({ type: CONSTANT.TOTAL_REVENUE_STAT, payload: result})
        dispatch({ type: CONSTANT.GIF_LOADER, payload: true})
      })
  }
}


