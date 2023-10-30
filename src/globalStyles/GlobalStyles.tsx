import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    color: white;
    box-sizing: border-box;
    font-family: Sans-serif;
  }

  body, #root {
    width: 100vw;
    height: auto;
  }
`
