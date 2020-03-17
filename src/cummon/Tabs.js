import React from 'react'
import styled from 'styled-components'

const Tabs = ({text, isActive, setClick}) => {
  return (
    <Tab onClick={setClick} isActive={isActive}>{text}</Tab>
  )
}

export default Tabs

const Tab = styled.li`
  box-sizing: border-box;
  white-space: nowrap;
  cursor: pointer;
  color: gray;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 15px;
  font-size: 0.875rem;
  text-align: center;
  position: relative;
  top: 1px;
  transition: all 0.3s ease;
  border-bottom: 2px solid transparent;
  border-color: ${({isActive}) => isActive ? '#819ca9' : 'transparent'};
  font-weight: ${({isActive}) => isActive && 'bold'};
  width: 100px;
  &:hover{
    border-color: #819ca9;
    font-weight: bold;
  }
`
