import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: ${theme.spacings.xxsmall};
    background: ${theme.colors.white};
    border-radius: ${theme.border.normal};

    .content-title {
      margin-top: 64px;
    }

    .content-img {
      margin: ${theme.spacings.medium} 0;
      width: 448px;
      height: 265px;
      background: url('src/assets/empty.svg') no-repeat center;
    }

    .back-button {
      width: 180px;
      margin-bottom: 64px;
    }
  `}
`
