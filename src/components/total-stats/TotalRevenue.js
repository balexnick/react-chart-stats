import React from 'react'
import HighchartsFigure from 'components/total-stats/HighchartsFigure'
import PropTypes from "prop-types";
import styled from 'styled-components'
import { connect } from 'react-redux'

import * as CONSTANT from 'constant'
import icon from 'assets/loader.gif'

const TotalRevenue = ({totalRevenueStat, gifLoader}) => {
  if(!gifLoader) return (
    <StatContainer>
      <HighchartsFigure><Spiner src={icon} alt=""/></HighchartsFigure> 
      <HighchartsFigure><Spiner src={icon} alt=""/></HighchartsFigure>
      <HighchartsFigure><Spiner src={icon} alt=""/></HighchartsFigure>
    </StatContainer>
  )
  return (
    <StatContainer>
      <HighchartsFigure label={'Today'} value={`$${totalRevenueStat.today}`}/>
      <HighchartsFigure label={'This Month'} value={`$${totalRevenueStat.thisMonth}`}/>
      <HighchartsFigure label={'Last Month'} value={`$${totalRevenueStat.lastMonth}`}/>
    </StatContainer>
  )
}

const mapStateToProps = state => {
  let totalRevenueStat = state[CONSTANT.TOTAL_REVENUE_STAT]
  let gifLoader = state[CONSTANT.GIF_LOADER]
  return {totalRevenueStat, gifLoader}
}


export default connect(mapStateToProps, null)(TotalRevenue)

TotalRevenue.propTypes = {
  totalRevenueStat: PropTypes.object.isRequired,
  gifLoader: PropTypes.bool.isRequired
};

const StatContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 25px;
`

const Spiner = styled.img`
  display: flex;
  height: 30px;
  width: 30px;
  margin: 0 auto;
`