import React from 'react'
import styled from "styled-components";
import {connect} from 'react-redux'
import { Scrollbars } from 'react-custom-scrollbars';

import Table from "../table/Table";
import ChartTableRow from './ChartTableRow'
import {sortLow, sortHigh} from 'utils/sort'

function ChartTable({dataListTable}) {
	const [valueSort, setValueSort] = React.useState(true);

  const sortTraffic = () => {
		setValueSort(!valueSort)
    valueSort ? sortHigh(dataListTable, 'traffic') : sortLow(dataListTable, 'traffic')
	}
  return (
    <Container>
      <Table
        headContent={[
          {name: 'Flag', func: false, width: '15%'},
          {name: 'Country', func: false, width: '35%'},
          {
            name: 'Traffic/Percent', 
            func: sortTraffic, 
            arrow: !valueSort ? '↑' : '↓',
            width: '50%', 
            align: true
          }
        ]}
      >
      <Scrollbars style={{ height: 300 }}>
        {
          dataListTable.map((item, i) => {
            return (
              <ChartTableRow
                key={i}
                flag={item.code}
                country={item.country}
                traffic={item.traffic}
                percent={item.percent}
              />
            )
          })
        }
       </Scrollbars>
		  </Table>
    </Container>
  )
}

const Container = styled.div`
  width: 40vw;
  @media(max-width:960px){
    width: 100%
  }
`
export default connect(null, null)(ChartTable)
