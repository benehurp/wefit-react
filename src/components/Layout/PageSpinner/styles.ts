import styled from 'styled-components'

export const SpinnerPosition = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 98px);
  overflow: hidden;

  svg {
    width: 60px;
    height: 60px;
  }
`
