import styled, { css } from 'styled-components'

export const Wrapper = styled.td`
  ${({ theme }) => css`
    .group {
      display: inline-flex;
      justify-content: flex-start;
      align-items: center;
      gap: ${theme.spacings.xxsmall};

      input {
        width: 60px;
        height: 26px;
        font-size: ${theme.font.sizes.small};
        color: ${theme.colors.blackText};
        border: 1px solid ${theme.colors.gray};
        border-radius: ${theme.border.normal};
        padding: ${theme.spacings.xxsmall};
      }

      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      input[type='number'] {
        -moz-appearance: textfield;
      }

      .remove,
      .add {
        width: 18px;
        height: 18px;
        cursor: pointer;

        :hover {
          opacity: 0.7;
        }
      }

      .remove {
        background: url('/assets/minus-action.svg');
      }

      .add {
        background: url('/assets/plus-action.svg');
      }
    }
  `}
`
