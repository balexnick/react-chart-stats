import React from 'react'

import Table from "./Table";
import TableRow from "./TableRow";
import {sortLow, sortHigh} from 'utils/sort'

const RenderRows = ({defaultTraffic, commonDataArray}) => {
	const [hitValue, setHitValue] = React.useState(false);
	const [serowValue, setSerowValue] = React.useState(false);

	const sortSer = () => {
		setSerowValue(!serowValue)
		serowValue ? sortHigh(commonDataArray, 'serowSum') : sortLow(commonDataArray, 'serowSum')
	}

	const sortHit = () => {
		setHitValue(!hitValue)
		hitValue ? sortHigh(commonDataArray, 'rowSum') : sortLow(commonDataArray, 'rowSum')
	}
	const renderRows = () => {
		return commonDataArray.map(item => {
			return(
				<TableRow
					key={item.date}
					arrayData={defaultTraffic[item.date]}
					date={item.date}
					row={item.rowSum}
					serow={item.serowSum}
				/>
			)
		})
	}
	return(
		<Table
			headContent={[
				{name: ''},
				{name: 'Date', func: false, flex: '5'},
				{name: 'Hits', func: sortHit, flex: '3', arrow: !hitValue ? '↑' : '↓'},
				{name: 'SE', func: sortSer, flex:'3', arrow: !serowValue ? '↑' : '↓'},
			]}
		>
			{renderRows()}
		</Table>
	)
}


export default RenderRows