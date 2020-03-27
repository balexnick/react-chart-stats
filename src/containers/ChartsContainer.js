import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { Title } from 'common/styled'
import * as CONSTANT from 'constant'


const ChartsContainer = ({children, loading}) => {
  const renderCharts = () => { return loading ? null : children }
  return (
    <div>
      <Title>All Domains</Title>
      { renderCharts() }
    </div>
  )
}

const mapStateToProps = state => {
  const loading = state[CONSTANT.LOADER]
  return { loading }
}

export default connect(mapStateToProps, null)(ChartsContainer)

ChartsContainer.propTypes = {
  loading: PropTypes.bool.isRequired,
}
