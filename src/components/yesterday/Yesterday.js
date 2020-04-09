import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { getTotalChartStatsForYesterday } from 'actions/get-yesterday-chart-stats'
import ChartsContainer from 'containers/ChartsContainer'

const Yesterday = ({ getYesterdayStats }) => {
  React.useEffect(() => {
    getYesterdayStats()
  }, [getYesterdayStats])

  return (
    <ChartsContainer />
  )
}

const mapDispatchToProps = dispatch => {
  return {
    getYesterdayStats: () => dispatch(getTotalChartStatsForYesterday())
  }
}

Yesterday.propTypes = {
  getYesterdayStats: PropTypes.func.isRequired,
}

export default connect(null, mapDispatchToProps)(Yesterday)
