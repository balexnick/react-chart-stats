import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import ChartsContainer from 'containers/ChartsContainer'
import { getTotalRevenue } from 'actions/get-total-revenue'
import { getTotalChartStatsForToday } from 'actions/get-today-chart-stats'
import TotalRevenue from 'components/total-stats/TotalRevenue'

const Today = ({ getTotal, getTodayCharts }) => {
  React.useEffect(() => {
    getTotal()
    getTodayCharts()
  }, [getTotal, getTodayCharts])

  return (
    <div>
      <TotalRevenue/>
      <ChartsContainer />
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    getTotal: () => dispatch(getTotalRevenue()),
    getTodayCharts: () => dispatch(getTotalChartStatsForToday()),
  }
}

Today.propTypes = {
  getTotal: PropTypes.func.isRequired,
  getTodayCharts: PropTypes.func.isRequired,
}

export default connect(null, mapDispatchToProps)(Today)



