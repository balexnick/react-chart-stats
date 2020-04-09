import React from 'react';
import styled from 'styled-components'

import {editToCorrectNumber} from 'utils/editToCorrectNumber'
import {sortLow, sortHigh} from 'utils/sort'
import {TableValue} from 'common/styled'
import DropdownHeader from './DropdownHead'

export default function TableRow({ date, row, serow, arrayData}) {
	const [open, setOpen] = React.useState(false);
	const [hitValue, setHitValue] = React.useState(false);
	const [serowValue, setSerowValue] = React.useState(false);

	const renderInfo = () => {
		if (!arrayData) return null;
		return arrayData.map((item) => {
			return(
				<TableRowInner key={item.domen}>
					<Btn></Btn>
					<TableValue color={'#6d6d6d'} flex={'5'}>{item.domen}</TableValue>
					<TableValue color={"#0078d7"} flex={'3'}>{editToCorrectNumber(item.row)}</TableValue>
					<TableValue color={'#6d6d6d'} flex={'3'}>{editToCorrectNumber(item.serow)}</TableValue>
				</TableRowInner>
			)
		})
	}
	const sortSer = () => {
		setSerowValue(!serowValue)
		serowValue ? sortHigh(arrayData, 'serow') : sortLow(arrayData, 'serow')
	}

	const sortHit = () => {
		setHitValue(!hitValue)
		hitValue ? sortHigh(arrayData, 'row') : sortLow(arrayData, 'row')
	}
	return (
		<div>
			<TableRowInner>
				<Btn onClick={()=> setOpen(!open)}><span>{open ? '×': '+'}</span></Btn>
				<TableValue fontSize={'16px'} flex={'5'}>{date}</TableValue>
				<TableValue fontSize={'14px'} flex={'3'} color="#5bbad5">{editToCorrectNumber(row)}</TableValue>
				<TableValue fontSize={'14px'} flex={'3'}>{editToCorrectNumber(serow)}</TableValue>
			</TableRowInner>

			{open && <div>
				<DropdownHeader 
					setClickHit={sortHit}
					setClickSer={sortSer}	
					hitArrow={!hitValue ? '↑' : '↓'}
					serowArrow={!serowValue ? '↑' : '↓'}
				/>
				{renderInfo()}
			</div>
			}
		</div>
	);
}

const TableRowInner = styled.div`
	display: flex;
`;

const Btn = styled.div`
	border-top: 1px solid #ccc;
	border-left: 1px solid #ccc;
	box-sizing: border-box;
	flex-grow:1;
	width: 10%;
	cursor: pointer;
	font-weight: 900;
	color: #5bbad5;
	display: flex;
	align-items: center;
	justify-content:center;
`