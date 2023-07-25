import { createGlobalStyle } from 'styled-components';

/* https://scalablecss.com/styled-components-global-styles/ */
const GlobalStyle = createGlobalStyle`
  html {
  scroll-behavior: smooth;
}

* {
  transition: all 0.1s ease-in-out;
  box-sizing: border-box;
}

body {
  font-family: 'Raleway', sans-serif;
  background: rgba(242, 242, 242, 0.6);
  margin: 0;
}

h2 {
  font-weight: 200;
  font-size: 2rem;
  color: #054c61;
  text-transform: uppercase;
  text-align: center;
}

h4 {
  margin: 0;
  font-weight: 600;
  font-size: 1.25em;
  color: grey;

  @media screen and (max-width: 600px) {
      font-size: 1em;
    }
}

li {
  list-style: square;
}

::selection {
  background: #c6c6c6; /* WebKit/Blink Browsers */
}
::-moz-selection {
  background: #c6c6c6; /* Gecko Browsers */
}
`;

export default GlobalStyle;
