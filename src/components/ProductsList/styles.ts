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

export const Informations = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.blackText};

    img {
      margin: 0 auto;
      display: block;
      margin-bottom: ${theme.spacings.xxsmall};
      width: 147px;
    }

    .title {
      font-size: ${theme.font.sizes.xsmall};
      font-weight: ${theme.font.bold};
      line-height: 16px;
    }

    .price {
      font-weight: ${theme.font.bold};
      line-height: 22px;
    }
  `}
`
