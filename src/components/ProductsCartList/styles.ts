import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) =>
    css`
      width: 100%;
      padding: ${theme.spacings.small};

      table {
        border-collapse: collapse;
        width: 100%;

        thead {
          th {
            text-align: left;
            color: ${theme.colors.gray};
            text-transform: uppercase;
            padding-bottom: ${theme.spacings.small};

            :first-child {
              width: 50%;
            }

            :last-child {
              width: 30%;
            }
          }
        }

        tbody {
          border-bottom: 1px solid ${theme.colors.gray};

          .sub-total {
            font-size: ${theme.font.sizes.medium};
            font-weight: ${theme.font.bold};
          }

          td {
            color: ${theme.colors.blackText};
            padding-bottom: ${theme.spacings.small};

            :first-child {
              width: 50%;
            }

            :last-child {
              width: 30%;
            }
          }
        }
      }
    `}
`

export const ProductItemRow = styled.tr`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    border-radius: ${theme.border.normal};
    position: relative;

    ::after {
      content: '';
      height: 20px;
      width: 20px;
      top: calc(50% - 12px);
      right: 0;
      background: url('assets/trash.svg') no-repeat center;
      position: absolute;
      transform: translate(0, -50%);
      cursor: pointer;
    }
  `}
`

export const CheckoutActions = styled.footer`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.small};
    display: flex;
    justify-content: space-between;
    align-items: center;

    .finish-button {
      width: 235px;
    }

    .totals {
      text-transform: uppercase;
      color: ${theme.colors.blackText};
      font-size: ${theme.font.sizes.xxlarge};
      font-weight: ${theme.font.bold};
      position: relative;

      ::before {
        content: 'Total';
        text-transform: uppercase;
        color: ${theme.colors.gray};
        font-size: ${theme.font.sizes.small};
        font-weight: ${theme.font.bold};
        position: absolute;
        top: 50%;
        left: -16px;
        transform: translate(-100%, -50%);
      }
    }
  `}
`
