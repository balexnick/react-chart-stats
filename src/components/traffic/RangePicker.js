import React from 'react';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import moment from 'moment';
import {connect} from 'react-redux'
import styled from 'styled-components';

import {getTraffic, getChartTraffic} from 'actions/get-traffic'

function RangePicker({getTrafficFromInputDate, getTrafficChartsFromInputDate}) {
	const yesterday = moment().subtract(1, 'days')._d
	const weekAgo = moment().subtract(7, 'days')._d
	const [date, setDate] = React.useState([weekAgo,yesterday]);

	React.useEffect(() => {
		const dateFrom = moment(date[0]).format('YYYY-MM-DD')
		const dateTo = moment(date[1]).format('YYYY-MM-DD')
		getTrafficFromInputDate([dateFrom, dateTo])
		getTrafficChartsFromInputDate([dateFrom, dateTo])
	})
	
	const onChangeInDateRangePicker = date => {
		setDate(date ? date : null);
	};

	const setNewDate = () =>{
		const newDateFrom = moment(date[0]).format("YYYY-MM-DD");
		const newDateTo = moment(date[1]).format("YYYY-MM-DD");
		getTrafficFromInputDate([newDateFrom, newDateTo])
		getTrafficChartsFromInputDate([newDateFrom, newDateTo])
	}

  	return (
		<div>
			<DateRangePicker
				minDate={new Date('2020-02-01')}
				format='yyyy-MM-dd'
				onChange={onChangeInDateRangePicker}
				value={[date[0], date[1]]}
			/> 
			<Button onClick={setNewDate} name='submit'>Submit</Button>
		</div>
	)
}


const mapDispatchToProps = dispatch => {
	return {
		getTrafficFromInputDate: (data) => dispatch(getTraffic(data)),
		getTrafficChartsFromInputDate: (data) => dispatch(getChartTraffic(data))
	}
} 

export default connect(null, mapDispatchToProps)(RangePicker)

const Button = styled.button`
	cursor:pointer;
	padding: 10px;
	border-radius: 7px;
	border: none;
	outline: none;
	background: #0078d7a3;
	color:#fff;
`