import { requestHandler } from 'utils/request-handler'
import * as CONSTANT from 'constant'
import { getSumOfMetricsByDomains, calculateAllDomainsData } from 'utils/getSum'
import { getChartDataByDomain } from 'utils/getChartDataByDomain'
import { getParcedData } from 'utils/getParcedData'

export const getYesterdayStat = () => {
	const options = {
		type: "get",
		url: `stat/hours/1`
	};
	return requestHandler({ options })
}

export const getBeforeYesterdayStat = () => {
	const options = {
		type: "get",
		url: `stat/hours/2`
	};
	return requestHandler({ options })
}

export const getTotalChartStatsForYesterday = () => {
	return dispatch => {
		dispatch({ type: CONSTANT.LOADER, payload: true })
		Promise.all([getYesterdayStat(), getBeforeYesterdayStat()])
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
								data: arrayData[item][0]
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
							data: Object.keys(currentChartDataSum).map(item => currentChartDataSum[item])
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