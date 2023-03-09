import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.xsmall};
    flex-wrap: wrap;
  `}
`

export const ProductItem = styled.div`
  ${({ theme }) => css`
    text-align: center;
    height: 305px;
    background: ${theme.colors.white};
    border-radius: ${theme.border.normal};
    padding: ${theme.spacings.xxsmall};
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media only screen and (min-width: 768px) {
      flex: 1 1 calc(100% / 3 - 32px);
    }
    @media only screen and (max-width: 767px) {
      flex: 1 1 310px;
    }
  `}
`
