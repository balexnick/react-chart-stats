import React from 'react'
import { connect } from 'react-redux'
import { getTodayStat } from 'actions/get-stats'
import PropTypes from "prop-types";

const Today = ({getToday}) => {
  React.useEffect(() => {
    getToday()
  }, [getToday])
  return (
    <div>
      today
    </div>
  )
}

const mapStateToProps = state => {
  return {state}
}

const mapDispatchtoProps = dispatch => {
  return {
    getToday: () => dispatch(getTodayStat())
  }
}

export default connect(mapStateToProps, mapDispatchtoProps)(Today)

Today.propTypes = {
  getToday: PropTypes.func.isRequired
};