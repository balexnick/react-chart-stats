import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { Title } from 'common/styled'
import * as CONSTANT from 'constant'
import CustomConfig from 'components/highcharts/CustomConfig'

const ChartsContainer = ({ loading, domain_data, chart_data }) => {

  const renderGeneral = () => {
    if (!chart_data) return null
    return <CustomConfig options={chart_data} />
  }
  const renderDomainCharts = () => {
    if (!domain_data) return null
    return domain_data.map((item, i) => {
      return (
        <div key={i} >
          <Title>{item.domain} Domain</Title>
          <CustomConfig options={item} />
        </div>
      )
    })
  }

  const renderCharts = () => {
    if (loading) return null
    return (
      <div>
        {renderGeneral()}
        {renderDomainCharts()}
      </div>
    )
  }

  return (
    <div>
      <Title>All Domains</Title>
      {renderCharts()}
    </div>
  )
}

const mapStateToProps = store => {
  const loading = store[CONSTANT.LOADER]
  let chart_data = store[CONSTANT.CHART_DATA_SUM]
  let domain_data = store[CONSTANT.DOMAIN_DATA]
  return { loading, chart_data, domain_data }
}

export default connect(mapStateToProps, null)(ChartsContainer)

ChartsContainer.propTypes = {
  loading: PropTypes.bool.isRequired,
}
