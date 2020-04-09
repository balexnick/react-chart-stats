import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import ChartTable from "./ChartTable"
import * as CONSTANT from "constant";
import CanvasJSReact from "scripts/canvasjs.react";
let CanvasJSChart = CanvasJSReact.CanvasJSChart;

const PieChart = ({ chartsObjectData }) => {
  const renderChart = () => {
    if (!chartsObjectData) return null;
    const options = {
      animationEnabled: true,
      exportFileName: "New Year Resolutions",
      exportEnabled: false,
      // width: 383,
      data: [
        {
          type: "pie",
          showInLegend: false,
          legendText: "{label}",
          toolTipContent: "{label}: <strong>{y}%</strong>",
          indexLabel: "{y}",
          indexLabelPlacement: "inside",
          dataPoints: chartsObjectData.dataChart
        }
      ]
    };
    return (
      <ChartContainer>
        <ChartCont>
          <CanvasJSChart options={options} />
        </ChartCont>
        
        <ChartTable dataListTable={chartsObjectData.dataList}/>
      </ChartContainer>
    );
  };
  return <ChartContainer>{renderChart()}</ChartContainer>;
};

const mapStateToProps = store => {
  let chartsObjectData = store[CONSTANT.CHART_TRAFFIC];
  return {
    chartsObjectData
  };
};

export default connect(mapStateToProps, null)(PieChart);

const ChartContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  @media(max-width:960px){
    flex-direction: column;
    align-items: center;
  }

`;
const ChartCont = styled.div`
  width: 30vw;
  position: relative;
  &::before{
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 20px;
    width: 70px;
    z-index: 1;
    background: #fff;
  }
  @media(max-width:768px){
    width: 90vw
  }
  /* @media(max-width:320px){
    canvas{
      width:auto!important;
    }
  } */
`

// const ListContainer = styled.div`
//   height: 400px;
//   overflow: auto;
// `

