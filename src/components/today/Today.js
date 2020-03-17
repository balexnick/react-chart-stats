import React from 'react'
import { connect } from 'react-redux'
import { getTotalRevenue } from 'actions/get-stats'
import PropTypes from 'prop-types'

import CustomHighcharts from 'components/highcharts/CustomHighcharts'
const Today = ({getTotal}) => {
  React.useEffect(() => {
    getTotal()
  }, [getTotal])
  return (
    <div>
      <CustomHighcharts/>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return{
    getTotal: () => dispatch(getTotalRevenue())
  }
}

Today.propTypes = {
  getTotal: PropTypes.func.isRequired,
}

export default connect(null, mapDispatchToProps)(Today)



