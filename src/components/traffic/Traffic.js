import React  from "react";
import styled from 'styled-components';
import { connect } from "react-redux";

import RenderRows from "./table/RenderRows";
import RangePicker from "./RangePicker";
import PieChart from './chart/PieChart'
import * as CONSTANT from 'constant';



export const Traffic = ({defaultTraffic}) => {
  const renderTable = () => {
    if(!defaultTraffic) return null
    let arr = Object.keys(defaultTraffic).map((item, key) =>{
      let rowSumm = 0;
      let serrowSumm = 0;
      defaultTraffic[item].forEach(item => {rowSumm += +item.row })
      defaultTraffic[item].forEach(item => {serrowSumm += +item.serow })
      return {
        date: item,
        rowSum: rowSumm,
        serowSum: serrowSumm
      }
    })
    return <RenderRows defaultTraffic={defaultTraffic} commonDataArray={arr}/>
  }
  return(
    <Container>
      <RangePicker/>
      {renderTable()}
      <PieChart/>
    </Container>
  )
}
const mapStateToProps = store => {
  let defaultTraffic = store[CONSTANT.DEFAULT_TRAFFIC]
  return {
    defaultTraffic
  }
}
export default connect(mapStateToProps, null)(Traffic)

const Container = styled.div`
  width: 80vw;
  margin: 25px auto 0;
  @media(max-width:425px){
    width: 90vw;
  }
`