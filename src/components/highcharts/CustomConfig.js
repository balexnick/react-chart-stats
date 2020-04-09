import React from 'react'
import moment from 'moment';
import config from 'components/highcharts/config'
import { editToCorrectNumber } from 'utils/editToCorrectNumber'
import { getParcedData } from 'utils/getParcedData'
import CustomHighcharts from './CustomHighcharts'

const CustomConfig = ({ options }) => {

	const renderChart = () => {
		let parsedCurrentData = getParcedData(options.stats.current.data);
		let parsedPrevData = getParcedData(options.stats.prev.data);
		
		let mainOptions = Object.keys(options.total).map((title, i) => {
			const signBeforeMetric = title === "revenue" ? "$" : "";

			let prevChartData = Object.keys(parsedPrevData)
				.map(prev => ({ [prev]: parsedPrevData[prev] }))
				.filter(data => data[title])
				.map(item => item[title])[0]

			let currentChartData = Object.keys(parsedCurrentData)
				.map(curr => ({ [curr]: parsedCurrentData[curr] }))
				.filter(data => data[title])
				.map(item => item[title])[0]

				let addOptions = {
				renderTitle: title,
				title: {
					text: `<span>${signBeforeMetric}${editToCorrectNumber(options.total[title])}</span>`,
					style: {
						fontSize: "28px",
						fontWeight: "bold",
						fill: "#000"
					}
				},
				series: [
					{
						data: prevChartData,
						showInLegend: false,
					},
					{
						data: currentChartData,
						showInLegend: false
					}
				],
				tooltip: {
					formatter: function () {
						if(typeof options.stats.prev.datefrom === 'object' && typeof options.stats.current.datefrom === 'object'){
							return (
								`	
									<span style='color:${this.points[0].color}'>\u25CF</span>
									${options.stats.prev.datefrom[this.points[0].key] ? 
										`${options.stats.prev.datefrom[this.points[0].key]} :
											${this.points[0].y}`
									: 'no date'}
									<br />
									<span style='color:${this.points[1].color}'>\u25CF</span>
									${options.stats.current.datefrom[this.points[1].key] ? 
										` ${options.stats.current.datefrom[this.points[1].key]} :
											${this.points[1].y}`
									: 'no date'}
								
								`
							)							
						}else{
							let time = moment(this.points[0].key, "HH").format("HH:mm");
							return (
								`<span style='color:${this.points[0].color}'>\u25CF</span>
								${options.stats.prev.datefrom} - ${time} :
								${this.points[0].y}
								<br />
								<span style='color:${this.points[1].color}'>\u25CF</span>
								${options.stats.current.datefrom} - ${time} :
								${this.points[1].y}
								`
							)
						}
					},
					shared: true
				}
			}
			return Object.assign({}, config, addOptions)
		})
		return <CustomHighcharts options={mainOptions} />
	}
	return (
		<div>
			{renderChart()}
		</div>
	)
}

export default CustomConfig







// var labels = requireDailyStatsPeriods.includes(
// 	chartsData.data.currentPeriod
// )
// 	? {
// 			current: dataForNormalization.current.date,
// 			prev: dataForNormalization.prev.date
// 		}
	// : {
	// 		current: getDates(
	// 			dataForNormalization.current.range[0],
	// 			dataForNormalization.current.range[1]
	// 		),
	// 		prev: getDates(
	// 			dataForNormalization.prev.range[0],
	// 			dataForNormalization.prev.range[1]
	// 		)
	// 	};