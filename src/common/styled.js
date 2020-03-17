import styled from 'styled-components'

export const BorderContainer = styled.div`
  padding: 15px 18px;
  width: 29%;
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