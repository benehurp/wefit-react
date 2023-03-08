import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
${({ theme }) => css`
  body,
  input,
  textarea,
  button {
    font-family: ${theme.font.family};
    font-weight: ${theme.font.normal};
    font-size: ${theme.font.sizes.medium};
  }

  ul,
  li {
    list-style: none;
  }

  body {
    color: ${theme.colors.white};
    background: ${theme.colors.background};
  }
`}
`
