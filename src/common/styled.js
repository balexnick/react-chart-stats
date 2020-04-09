import styled from 'styled-components'

export const BorderContainer = styled.div`
  width: 32%;
  margin: 0;
  border: 1px solid #e5e5e5;

  @media (max-width: 1340px) {
    margin-bottom: 34px;
    width: 44%;
  }

  @media (max-width: 767px) {
    max-width: 100%;
    width: 100%;
    margin: 0 0 17px;
  }
`

export const ChartContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

export const Title = styled.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  margin: 25px 0;
  font-weight: bold;
  text-align: center;
  width: 100%;
  text-transform: capitalize;
`

export const TableValue = styled.div`
	border-top: 1px solid #ccc;
	border-left: 1px solid #ccc;
	box-sizing: border-box;
	flex-grow: ${({ flex }) => flex};
	width: ${({ width }) => width ? width : '30%'};
	justify-content: ${({ align }) => align ? 'center' : 'flex-start'};
	padding: 5px;
	font-size: 16px;
	color: ${({ color }) => color};
	font-weight: ${({ fontWeight }) => fontWeight};
	display: flex;
	align-items: center;
	@media(max-width:768px){
		font-size: ${({ fontSize }) => fontSize && fontSize};
	}
	@media(max-width:525px){
		font-size: ${({ fontSize }) => fontSize ? fontSize : '8px'};
	}
`;

export const Arrow = styled.button`
	outline: none;
	border: none;
	background: transparent;
	font-size: 20px;
	cursor: pointer;
`
