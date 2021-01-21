import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      outline: 0;
    }

    body {
      background: #EBF2F5;
      color: #FFF;
      -webkit-font-smoothing: antialiased;
    }

    body, input, button, textarea {
      font: 600 18px 'Nunito', serif;
    }

    button {
      cursor: pointer;
    }
`; 