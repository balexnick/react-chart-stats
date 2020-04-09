import { requestHandler } from 'utils/request-handler'
import * as CONSTANT from 'constant'
import { getSumOfMetricsByDomains, calculateAllDomainsData } from 'utils/getSum'
import { getChartDataByDomainDate } from 'utils/getChartDataByDomain'
import { getParcedData } from 'utils/getParcedData'
import { normalizeDate } from 'utils/normalizeDate'

const setBalance = (array) => {
  if (array.length !== 31) {
    array.push({impressions: 0, clicks: 0, revenue: 0})
    return setBalance(array)
  }
  return array
}

export const getThisMonthStat = () => {
	return dispatch => {
		const options = {
			type: "get",
			url: `stat/thismonth`
		};
		dispatch({ type: CONSTANT.LOADER, payload: true })
		requestHandler({ options })
			.then(response => {
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
								data: arrayData[item][1]
							}
						}
					}
				})
				
				let obj = {
					total: totalRevenueForCurrent,
					stats: {
						current: {
							datefrom: normalizeDate(Object.keys(currentChartDataSum).map(item => item)),
							data: setBalance(Object.keys(currentChartDataSum).map(item => currentChartDataSum[item]))
						},
						prev: {
							datefrom: normalizeDate(Object.keys(prevChartDataSum).map(item => item)),
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

