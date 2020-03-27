import React from 'react'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { connect } from 'react-redux'
import styled from 'styled-components'

import { editToCorrectNumber } from 'utils/editToCorrectNumber'
import options from './config'
import {BorderContainer, ChartContainer} from 'common/styled'
import * as CONSTANT from 'constant'

const CustomHighcharts = ({chart_data}) => {
  const renderChart = () => {
    if(Object.keys(chart_data).length === 0) return null
    let obj = Object.keys(chart_data.total).map((item) => {
      let addOptions = {
        renderTitle: item, 
        title: {
          text: `<span>${editToCorrectNumber(chart_data.total[item])}</span>`,
          style: {
            fontSize: "28px",
            fontWeight: "bold",
            fill: "#000"
          }
        }
      }
      return Object.assign({}, options, addOptions)
    })
    return obj.map((item, i) => {
      return (
        <BorderContainer key={i}> 
          <ChartTitle>{item.renderTitle}</ChartTitle>
          <HighchartsReact highcharts={Highcharts} options={item} /> 
        </BorderContainer>
      )
    })
  }
  return (
    <ChartContainer>
      {renderChart()}
    </ChartContainer>
  )
}

const mapStateToProps = state => {
  let chart_data = state[CONSTANT.CHART_DATA_SUM]
  return {chart_data}
}

export default connect(mapStateToProps, null)(CustomHighcharts)

const ChartTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  text-align: center;
  padding-bottom: 10px;
  width: 100%;
  text-transform: capitalize;
  font-size: 20px
`