import React from 'react'
import styled from 'styled-components';

import {TableValue, Arrow} from 'common/styled'

const Table = ({children, headContent}) => {
	return (
		<TableData>
      <TableHead>
        {
          headContent.map((item, i) => {
            const {name, func, arrow, width, align, flex} = item
            if(!name) return <Btn key={i}></Btn>
            if(!item.func){
              return (
                <TableValue 
                  key={i} 
                  fontSize={'14px'}  
                  width={width} 
                  flex={flex}
                  fontWeight={900} 
                  align={align}>{name}
                </TableValue>
              )
            }
              
            return (
              <TableValue 
                key={i} 
                fontSize={'14px'}
                width={width} 
                flex={flex}
                fontWeight={900}
                align={align}>
                  {name} 
                  <Arrow onClick={func}>{arrow}</Arrow>
              </TableValue>
            )
          })
        }
			</TableHead>
      {children}
    </TableData>
	)
}
export default Table

const TableData = styled.div`
  width: 100%;
  margin-top: 30px;
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  box-sizing: border-box;
`

const TableHead = styled.div`
	display: flex;
`
const Btn = styled(TableValue)`
  width: 10%;
  flex-grow:1;
  padding: 0
`