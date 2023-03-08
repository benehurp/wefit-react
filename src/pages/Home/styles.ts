import styled, { css } from 'styled-components'

export const PageWrapper = styled.header`
  ${() => css`
    display: grid;
    grid-template-areas:
      'main'
      'content';
    grid-template-columns: minmax(320px, 960px);
    grid-template-rows: minmax(68px, 74px) 100vh;
    justify-content: center;
  `}
`
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

export const ContainerIconSVG = styled.div`
  ${() => css`
    width: 30px;
    height: 30px;
  `}
`
