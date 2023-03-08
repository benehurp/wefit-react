import styled, { css } from 'styled-components'
import { StyledButton } from '../styles'

type WrapperProps = {
  added?: boolean
}

export const Wrapper = styled(StyledButton)<WrapperProps>`
  ${({ theme, added }) => css`
    ${added && `background: ${theme.colors.green}`};

    .icon {
      width: 16px;
      height: 16px;
      margin-right: 24px;
      vertical-align: text-bottom;
      display: inline-block;
      background: url('src/assets/plus-cart.svg') no-repeat center;
      position: relative;

      ::after {
        content: '0';
        position: absolute;
        right: -12px;
        font-size: ${theme.font.sizes.xsmall};
        font-weight: initial;
      }
    }
  `}
`
