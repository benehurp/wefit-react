import styled, { css } from 'styled-components'

export const Wrapper = styled.header`
  ${() => css`
    display: grid;
    grid-template-areas:
      'main'
      'content';
    grid-template-columns: minmax(320px, 960px);
    grid-template-rows: minmax(68px, 74px) calc(100vh - 74px);
    justify-content: center;
  `}
`
