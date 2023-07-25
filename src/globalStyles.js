import { createGlobalStyle } from 'styled-components';

/* https://scalablecss.com/styled-components-global-styles/ */
const GlobalStyle = createGlobalStyle`
  html {
  scroll-behavior: smooth;
}

* {
  transition: all 0.15s ease-in-out;
  box-sizing: border-box;
}

body {
  font-family: 'Raleway', sans-serif;
  background: rgba(242, 242, 242, 0.6);
  margin: 0;
}

::selection {
  background: #c6c6c6; /* WebKit/Blink Browsers */
}
::-moz-selection {
  background: #c6c6c6; /* Gecko Browsers */
}
`;

export default GlobalStyle;
