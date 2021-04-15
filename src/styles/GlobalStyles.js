import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --blue: #33c1ff;
    --black: #2E2E2E;
    --yellow: #ffc600;
    --white: #fff;
    --grey: #efefef;
  }

  body {
     height: 100%;
     width: 100%;
     background: var(--blue);
  }

  header 
`;



export default GlobalStyles;
