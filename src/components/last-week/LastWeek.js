import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import ChartsContainer from 'containers/ChartsContainer'
import { getLastWeekStat } from 'actions/get-last-week'

const Today = ({ getLastWeekStatData }) => {
  React.useEffect(() => {
    getLastWeekStatData()
  }, [getLastWeekStatData])

  return (
    <div>
      <ChartsContainer />
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    getLastWeekStatData: () => dispatch(getLastWeekStat()),
  }
}

Today.propTypes = {
  getLastWeekStatData: PropTypes.func.isRequired,
}

export default connect(null, mapDispatchToProps)(Today)



