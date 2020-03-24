import React from 'react'

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
// import options from './config'
import {BorderContainer, ChartContainer} from 'common/styled'

const options = {
  chart: {
    type: "area",
    spacing: [0, 0, 0, 0],
    margin: [60, 0, 0, 0],
    height: 309
  },
  credits: {
    enabled: false
  },
  title: {
    text: `<span>123</span>`,
    style: {
      fontSize: "28px",
      fontWeight: "bold",
      fill: "#000"
    }
  },
  exporting: {
    enabled: false
  },
  // subtitle: {
  //   text: `<span>${
  //     configuration.tendency === "positive" ? "↑" : "↓"
  //   }${formatToFixed(
  //     Math.abs(configuration.percentage),
  //     2
  //   )}% (${signBeforeMetric}${signBeforeMetric === '' ? Highcharts.numberFormat(Math.abs(configuration.difference), 0, '', ',') : formatToFixed(
  //     Math.abs(configuration.difference),
  //       2
  //     )})</span><span class="on-period-span"> on ${
  //     chartsData.data.currentPeriod === "today" ? "Yesterday" : "Previous"
  //   }</span>`,
  //   style: {
  //     fontSize: "14px",
  //     color: !!configuration.percentage
  //       ? getTendencyColorForProp(configuration.tendency, "text")
  //       : getTendencyColorForProp("zero", "text")
  //   }
  // },
  // xAxis: {
  //   allowDecimals: false,
  //   categories: [],
  //   gridLineWidth: 0,
  //   min: 0.49,
  //   max: configuration.labels.length - 1.49,
  //   labels: {
  //     enabled: false,
  //     formatter: function() {
  //       return this.value;
  //     }
  //   }
  // },
  // yAxis: {
  //   title: null,
  //   gridLineWidth: 0,
  //   labels: {
  //     enabled: false,
  //     formatter: function() {
  //       return this.value;
  //     }
  //   }
  // },
  // tooltip: {
  //   formatter: function() {
  //     if (
  //       requireDailyStatsPeriods.includes(chartsData.data.currentPeriod)
  //     ) {
  //       var time = moment(this.points[0].key, "HH").format("HH:mm");

  //       return (
  //        `<span style='color:${this.points[0].color}'>\u25CF</span>
  //         ${chartsData.data.dateFromBefore} - ${time} : ${this.points[0].y}
  //         <br />
          
  //         <span style='color:${this.points[1].color}'>\u25CF</span>
  //         ${chartsData.data.dateFromAfter} - ${time} : 

  //         <strong style='font-weight: bold;'>${this.points[1].y}</strong>
  //         `
  //       );
  //     }

  //     return (
  //       `<span style='color:${this.points[0].color}'>\u25CF</span>
  //       ${chartsData.data.labels.current[this.points[0].key]} :
  //       ${this.points[0].y}
  //       <br />
  //       <span style='color:${this.points[1].color}'>\u25CF</span>
  //       ${chartsData.data.labels.prev[this.points[1].key]}
  //       <strong style='font-weight: bold;'>${this.points[1].y}</strong>
  //       `
  //     );
  //   },
  //   shared: true
  // },
  trackByArea: true,
  visible: true,
  plotOptions: {
    series: {
      fillOpacity: 0.25
    },
    area: {
      pointStart: 0,
      marker: {
        enabled: false,
        symbol: "circle",
        radius: 2,
        states: {
          hover: {
            enabled: true
          }
        }
      }
    }
  },
  // series: [
  //   {
  //     labels: configuration.labels,
  //     name: configuration.prevTitle,
  //     data: configuration.prev.map(function(value) {
  //       return formatToFixed(value, 2);
  //     }),
  //     color: getTendencyColorForProp("default", "area"),
  //     borderColor: getTendencyColorForProp("default", "border"),
  //     showInLegend: false
  //   },
  //   {
  //     labels: configuration.labels,
  //     name: configuration.currentTitle,
  //     data: configuration.current.map(function(value) {
  //       return formatToFixed(value, 2);
  //     }),
  //     color:
  //       configuration.percentage === 0 &&
  //       parseInt(configuration.difference) === 0
  //         ? getTendencyColorForProp("zero", "text")
  //         : getTendencyColorForProp(configuration.tendency, "area"),
  //     borderColor:
  //       configuration.percentage === 0 &&
  //       parseInt(configuration.difference) === 0
  //         ? getTendencyColorForProp("zero", "text")
  //         : getTendencyColorForProp(configuration.tendency, "border"),
  //     showInLegend: false
  //   }
  // ]
}
const CustomHighcharts = () => {
  return (
    <ChartContainer>
      <BorderContainer>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </BorderContainer>

      <BorderContainer>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </BorderContainer>

      <BorderContainer>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </BorderContainer>
    </ChartContainer>
  )
}

export default CustomHighcharts
