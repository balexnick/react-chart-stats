import React from 'react'
import styled from 'styled-components'

import {TableValue, Arrow} from 'common/styled'

export default function DropdownHead({setClickSer, setClickHit, hitArrow, serowArrow}) {
	return(
		<TableRowInner>
			<Btn></Btn>
			<TableValue fontSize={'14px'} fontWeight={'900'} flex={'5'}>Domain</TableValue>
			<TableValue><Arrow onClick={setClickHit}>{hitArrow}</Arrow></TableValue>
			<TableValue><Arrow onClick={setClickSer}>{serowArrow}</Arrow></TableValue>
		</TableRowInner>
	)
}


const TableRowInner = styled.div`
  display: flex;
`;

const Btn = styled(TableValue)`
  width: 10%;
  padding: 0
`