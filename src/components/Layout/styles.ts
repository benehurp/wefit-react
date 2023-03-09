import styled, { css } from 'styled-components'

export const Wrapper = styled.header`
  ${({ theme }) => css`
    display: grid;
    grid-template-areas:
      'main'
      'content';
    grid-template-columns: minmax(320px, 960px);
    justify-content: center;

    @media only screen and (max-width: 767px) {
      grid-template-rows: 68px calc(100% - 68px);
    }

    @media only screen and (min-width: 768px) {
      grid-template-rows: 74px calc(100% - 74px);
    }

    @media only screen and (max-width: 1000px) {
      margin: 0 ${theme.spacings.xsmall};
    }
  `}
`

export const HomeContent = styled.section`
  ${({ theme }) => css`
    margin: ${theme.spacings.small} 0;
  `}
`
