import styled, { css, DefaultTheme } from 'styled-components'

type WrapperProps = {
  isCart?: boolean
}

const modifiers = {
  formatCart: (theme: DefaultTheme, { isCart }: WrapperProps) => {
    if (isCart) {
      return () => css`
        display: flex;

        @media only screen and (max-width: 767px) {
          .group {
            align-items: center;
            align-self: flex-start;

            .title {
              margin-right: ${theme.spacings.xsmall};
            }
          }

          img {
            margin-right: ${theme.spacings.xsmall};
            width: 64px;
          }
        }

        @media only screen and (min-width: 768px) {
          .group {
            flex-direction: column;
            align-items: flex-start;
          }

          img {
            margin-right: ${theme.spacings.xxlarge};
            width: 114px;
          }
        }

        .group {
          display: flex;
          justify-content: center;
        }

        img {
          display: block;
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
