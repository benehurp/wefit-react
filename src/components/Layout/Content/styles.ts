import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;Â
    padding: ${theme.spacings.small};
    background: ${theme.colors.white};
    border-radius: ${theme.border.normal};
    margin: ${theme.spacings.small} 0;
  `}
`
