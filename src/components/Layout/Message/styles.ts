import styled, { css } from 'styled-components'

type WrapperProps = {
  width: number
  height: number
  source: string
}

export const Wrapper = styled.div<WrapperProps>`
  ${({
    theme,
    width = 100,
    height = 100,
    source = 'src/assets/empty-component.svg'
  }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: ${theme.border.normal};

    .content-title {
      margin-top: 40px;
    }

    .content-img {
      margin: ${theme.spacings.medium} 0;
      width: ${`${width}px`};
      height: ${`${height}px`};
      background: url(${source}) no-repeat center;
    }

    .back-button {
      width: 180px;
      margin-bottom: 40px;
    }
  `}
`
