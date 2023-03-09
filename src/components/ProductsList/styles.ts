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
    flex: 1 1 calc(100% / 3 - 32px);
    background: ${theme.colors.white};
    border-radius: ${theme.border.normal};
    padding: ${theme.spacings.xxsmall};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `}
`
