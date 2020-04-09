import React from 'react'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { BorderContainer, ChartContainer } from 'common/styled'

const CustomHighcharts = ({ options }) => {
  const renderChart = () => {
    return options.map((item, i) => {
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

CustomHighcharts.propTypes = {
  options: PropTypes.array.isRequired
}

export default CustomHighcharts

const ChartTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  text-align: center;
  padding: 15px 0;
  width: 100%;
  text-transform: capitalize;
  font-size: 20px
`