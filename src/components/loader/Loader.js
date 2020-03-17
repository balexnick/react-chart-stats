import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import * as CONSTANT from 'constant'

const Loader = ({loading}) => {
  if(!loading) return null
  return (
    <ReactPreloader>
			<ReactLoader/>
		</ReactPreloader>
  )
}

const mapStateToProps = store => {
  const loading = store[CONSTANT.LOADER]
  return {loading}
}

export default connect(mapStateToProps, null)(Loader)

Loader.propTypes = {
  loading: PropTypes.bool.isRequired
}
const ReactPreloader = styled.div`
  position: fixed;
  bottom: 17%;
  left: 0;
  width: 100%;
`

const ReactLoader = styled.div`
	display: block;
  position: relative;
  left: 50%;
  top: 50%;
  width: 150px;
  height: 150px;
  margin: -75px 0 0 -75px;
  border-radius: 50%;
  border: 3px solid transparent;
  border-top-color: #9370db;
	animation: spin 2s linear infinite;
	
	&::before{
		content: "";
		position: absolute;
		top: 5px;
		left: 5px;
		right: 5px;
		bottom: 5px;
		border-radius: 50%;
		border: 3px solid transparent;
		border-top-color: #ba55d3;
		animation: spin 3s linear infinite;
	}
	&:after {
		content: "";
		position: absolute;
		top: 15px;
		left: 15px;
		right: 15px;
		bottom: 15px;
		border-radius: 50%;
		border: 3px solid transparent;
		border-top-color: #ff00ff;
		animation: spin 1.5s linear infinite;
	}
  @keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
`