import styled, { css, DefaultTheme } from 'styled-components'

type WrapperProps = {
  isCart?: boolean
}

const modifiers = {
  formatCart: (theme: DefaultTheme, { isCart }: WrapperProps) => {
    if (isCart) {
      return () => css`
        display: flex;

        .group {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
        }
        img {
          margin-right: ${theme.spacings.xxlarge};
          display: block;
          width: 114px;
        }
      `
    }

    return () => css`
      img {
        margin: 0 auto;
        display: block;
        margin-bottom: ${theme.spacings.xxsmall};
        width: 147px;
      }
    `
  }
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, isCart }) => css`
    color: ${theme.colors.blackText};

    ${modifiers.formatCart(theme, { isCart })}

    .group {
      .title {
        font-size: ${theme.font.sizes.xsmall};
        font-weight: ${theme.font.bold};
        line-height: 16px;
      }

      .price {
        font-weight: ${theme.font.bold};
        line-height: 22px;
      }
    }
  `}
`
