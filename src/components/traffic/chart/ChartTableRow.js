import React from 'react'
import ReactCountryFlag from "react-country-flag"
import styled from 'styled-components'

import {TableValue} from 'common/styled'
import {editToCorrectNumber} from 'utils/editToCorrectNumber'

export default function ChartTableRow({flag, country, traffic, percent, imgAlt}){
  return (
    <TableRowInner>         
      <TableValue align={'center'} width={'15%'}>
        <ReactCountryFlag countryCode={flag} svg cdnSuffix="svg" alt={`img${imgAlt}`}/>
      </TableValue>
      <TableValue fontSize={'14px'} width={'35%'}>{country}</TableValue>
      <TableValue fontSize={'14px'} width={'25%'}>{editToCorrectNumber(traffic)}</TableValue>
      <TableValue fontSize={'14px'} width={'25%'}>{percent}%</TableValue>
    </TableRowInner>
  )
}


const TableRowInner = styled.div`
	display: flex;
`;