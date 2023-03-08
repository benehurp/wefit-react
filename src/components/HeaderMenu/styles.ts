import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    grid-area: main;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${theme.spacings.xxsmall};
  `}
`

export const Logo = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
  `}
`

export const MiniCart = styled.div`
  ${() => css`
    display: flex;
    align-items: center;
    cursor: pointer;
  `}
`

export const Label = styled.div`
  ${({ theme }) => css`
    text-align: right;
    margin-right: ${theme.spacings.xxsmall};

    .text {
      font-size: ${theme.font.sizes.small};
    }

    .counter {
      color: ${theme.colors.gray};
      font-size: ${theme.font.sizes.xsmall};
      font-weight: ${theme.font.medium};
    }
  `}
`

export const ChestSVG = styled.div`
  ${() => css`
    width: 30px;
    height: 26px;
    background: url('src/assets/chest.svg') no-repeat center;
  `}
`