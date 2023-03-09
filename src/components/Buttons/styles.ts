import styled, { css } from 'styled-components'

export const StyledButton = styled.button`
  ${({ theme }) => css`
    cursor: pointer;
    border: none;
    width: 100%;
    height: 40px;
    color: ${theme.colors.white};
    text-transform: uppercase;
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.bold};
    background: ${theme.colors.blue};
    border-radius: ${theme.border.normal};
    transition: 0.2s;

    :hover {
      opacity: 0.7;
    }

    :disabled {
      background: ${theme.colors.gray};
    }
  `}
`
