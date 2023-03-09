import styled, { css } from 'styled-components'

type TrashIconProps = {
  onClick: () => void
}

export const TrashIcon = styled.span<TrashIconProps>`
  ${() => css`
    height: 22px;
    width: 20px;
    right: 0;
    background: url('assets/trash.svg') no-repeat center;
    position: absolute;
    cursor: pointer;
  `}
`
export const Wrapper = styled.div`
  ${({ theme }) =>
    css`
      width: 100%;
      padding: ${theme.spacings.small};
      @media only screen and (max-width: 767px) {
        height: calc(100vh - 118px);
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .teste {
          height: calc(100vh - 305px);
          overflow: scroll;
        }
      }

      table {
        border-collapse: collapse;
        width: 100%;

        thead {
          @media only screen and (max-width: 767px) {
            th {
              display: none;
            }
          }
          @media only screen and (min-width: 768px) {
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
        }

        tbody {
          .sub-total {
            font-size: ${theme.font.sizes.medium};
            font-weight: ${theme.font.bold};
          }

          td {
            color: ${theme.colors.blackText};
            padding-bottom: ${theme.spacings.small};
            position: relative;

            @media only screen and (max-width: 767px) {
              display: none;

              :first-child {
                display: block;
                width: 100%;
              }
            }

            @media only screen and (min-width: 768px) {
              :first-child {
                width: 50%;
              }

              :last-child {
                width: 30%;
              }
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

    .trash-on-mobile {
      position: absolute;
      top: 0;
      right: 0;
    }

    .subtotal-on-mobile {
      position: absolute;
      top: 40px;
      right: 0;
      width: calc(100% - 80px);
      display: inline-flex;
      align-items: center;
      justify-content: space-between;

      .group {
        text-align: center;
        .label {
          color: ${theme.colors.gray};
          font-size: ${theme.font.sizes.xsmall};
          text-transform: uppercase;
        }

        .price {
          font-weight: ${theme.font.bold};
        }
      }
    }
  `}
`

export const CheckoutActions = styled.footer`
  ${({ theme }) => css`
    border-top: 1px solid ${theme.colors.gray};
    padding-top: ${theme.spacings.small};
    display: flex;

    @media only screen and (max-width: 767px) {
      flex-direction: column-reverse;
      align-items: flex-end;

      .finish-button {
        width: 100%;
      }

      .totals {
        margin-bottom: 16px;
      }
    }

    @media only screen and (min-width: 768px) {
      justify-content: space-between;
      align-items: center;

      .finish-button {
        width: 235px;
      }
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
