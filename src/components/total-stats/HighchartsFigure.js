import React from 'react'
import styled from 'styled-components'
// import PropTypes from 'prop-types'
import { BorderContainer } from 'common/styled'

const HighchartsFigure = ({ label, value, children }) => {
  return (
    <BorderContainer style={{ padding: '15px 18px' }}>
      {children}
      <CustomLabel>{label}</CustomLabel>
      <CustomValue>{value}</CustomValue>
    </BorderContainer>
  )
}

export default HighchartsFigure

HighchartsFigure.propTypes = {
  // label: PropTypes.string.isRequired,
  // value: PropTypes.number.isRequired
}

const CustomLabel = styled.div`
  margin: 0 0 5px 0;
  color: grey;
  font-size: 14px;
  font-weight: bold;
`

const CustomValue = styled.div`
  font-size: 20px;
`

