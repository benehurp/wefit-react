import styled, { css } from 'styled-components'

export const Wrapper = styled.header`
  ${() => css`
    display: grid;
    grid-template-areas:
      'main'
      'content';
    grid-template-columns: minmax(320px, 960px);
    grid-template-rows: 74px calc(100% - 74px);
    justify-content: center;
  `}
`

export const HomeContent = styled.section`
  ${({ theme }) => css`
    margin: ${theme.spacings.small} 0;
  `}
`
