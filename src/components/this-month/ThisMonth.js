import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import ChartsContainer from 'containers/ChartsContainer'
import { getThisMonthStat } from 'actions/get-this-month'

const Today = ({ getThisMonthStatData }) => {
  React.useEffect(() => {
    getThisMonthStatData()
  }, [getThisMonthStatData])

  return (
    <div>
      <ChartsContainer />
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    getThisMonthStatData: () => dispatch(getThisMonthStat()),
  }
}

Today.propTypes = {
  getThisMonthStatData: PropTypes.func.isRequired,
}

export default connect(null, mapDispatchToProps)(Today)



