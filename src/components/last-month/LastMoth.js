import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import ChartsContainer from 'containers/ChartsContainer'
import { getLastMonthStat } from 'actions/get-last-month'

const Today = ({ getLastMonthStatData }) => {
  React.useEffect(() => {
    getLastMonthStatData()
  }, [getLastMonthStatData])

  return (
    <div>
      <ChartsContainer />
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    getLastMonthStatData: () => dispatch(getLastMonthStat()),
  }
}

Today.propTypes = {
  getLastMonthStatData: PropTypes.func.isRequired,
}

export default connect(null, mapDispatchToProps)(Today)



