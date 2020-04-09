import { requestHandler } from 'utils/request-handler'
import * as CONSTANT from 'constant'
import { getSumOfMetricsByDomains, calculateAllDomainsData } from 'utils/getSum'
import { getChartDataByDomainDate } from 'utils/getChartDataByDomain'
import { getParcedData } from 'utils/getParcedData'

const setBalance = (array) => {
  if (array.length !== 30) {
    array.push({impressions: 0, clicks: 0, revenue: 0})
    return setBalance(array)
  }
  return array
}

export const getLastMonthStat = () => {
	return dispatch => {
		const options = {
			type: "get",
			url: `stat/lastdays/30`
		};
	dispatch({ type: CONSTANT.LOADER, payload: true })
		requestHandler({ options })
			.then(response => {
				console.log(response)
				let currentMetricsByDomain = getSumOfMetricsByDomains(response.data.result.current.data);
				let totalRevenueForCurrent = calculateAllDomainsData(currentMetricsByDomain);
				let currentChartDataSum = getSumOfMetricsByDomains(getChartDataByDomainDate(response.data.result.current.data))
				let prevChartDataSum = getSumOfMetricsByDomains(getChartDataByDomainDate(response.data.result.prev.data))
				let array = [response.data.result.current.data, response.data.result.prev.data]
				let arrayData = getParcedData(array)

				let domainData = Object.keys(arrayData).map(item => {
					return {
						domain: item,
						total: currentMetricsByDomain[item],
						stats: {
							current: {
								datefrom: Object.keys(currentChartDataSum).map(item => item),
								data: setBalance(arrayData[item][0])
							},
							prev: {
								datefrom: Object.keys(prevChartDataSum).map(item => item),
								data: setBalance(arrayData[item][1])
							}
						}
					}
				})
				
				let obj = {
					total: totalRevenueForCurrent,
					stats: {
						current: {
							datefrom: Object.keys(currentChartDataSum).map(item => item),
							data: setBalance(Object.keys(currentChartDataSum).map(item => currentChartDataSum[item]))
						},
						prev: {
							datefrom: Object.keys(prevChartDataSum).map(item => item),
							data: setBalance(Object.keys(prevChartDataSum).map(item => prevChartDataSum[item]))
						}
					}
				}
				console.log(obj)
				dispatch({ type: CONSTANT.LOADER, payload: false })
				dispatch({ type: CONSTANT.CHART_DATA_SUM, payload: obj })
				dispatch({ type: CONSTANT.DOMAIN_DATA, payload: domainData })
			})
	}
}

