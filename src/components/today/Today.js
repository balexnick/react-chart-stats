import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { getTotalRevenue } from 'actions/get-total-revenue'
import { getTotalChartStatsForToday } from 'actions/get-today-chart-stats'
import { Title } from 'common/styled'
import CustomHighcharts from 'components/highcharts/CustomHighcharts'
import * as CONSTANT from 'constant'

const Today = ({getTotal, getTodayCharts }) => {
  React.useEffect(() => {
    getTotal()
    getTodayCharts()
  }, [getTotal,getTodayCharts])
  return (
    <div>
      <Title>All Domains</Title>
      <CustomHighcharts/>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return{
    getTotal: () => dispatch(getTotalRevenue()),
    getTodayCharts: () => dispatch(getTotalChartStatsForToday()),
  }
}

const mapStateToProps = store => {
  const stats = store[CONSTANT.TOTAL_REVENUE_STAT]
  return {stats}
}

Today.propTypes = {
  getTotal: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(Today)



