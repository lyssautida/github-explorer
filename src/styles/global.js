import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
:root {
  --blue: #56A2F9;
  --green: #2EA043;
  --shape: #161b22;
  --shape-light: #2e3948;
  --background: #010409;
  --text:#f0f6fc;
  --text-secondary: #afb5bb;
}
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  //font-size: 16px é padrão
  html {
    @media (max-width:1080px) {
      font-size: 93.75%; //15px
    }
    @media (max-width:720px) {
      font-size: 87.5%; //14px
    }
  }

  body {
    background: var(--background); //cor pai
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    outline: none;
  }

  h1, h1, h3, h4, h5, h6, strong {
    font-weight: 700;
  }

  button {
    cursor: pointer;
    border: 0;
    background-color: inherit; //pega a cor pai de fundo
  }

  a{
    text-decoration: none;
  }

  li {
    list-style: none;
  }



`
