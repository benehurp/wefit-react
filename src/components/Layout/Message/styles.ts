import styled, { css } from 'styled-components'

type WrapperProps = {
  height?: number
  source?: string
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, height = 600, source }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: ${theme.border.normal};
    width: 100%;

    .content-title {
      margin-top: 40px;
      width: 60%;
    }

    .content-img {
      margin: ${theme.spacings.medium} 0;
      width: 100%;
      height: ${`${height}px`};
      background: url(${source}) no-repeat center;
      object-fit: contain;
    }

    .back-button {
      width: 180px;
      margin-bottom: 40px;
    }
  `}
`
