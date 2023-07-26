import { createGlobalStyle } from 'styled-components';

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
  background: ${(props) => props.theme.colors.backgroundGrey};
  margin: 0;
  overflow-x: hidden;
}

h2 {
  font-weight: 200;
  font-size: 2rem;
  color: ${(props) => props.theme.colors.primary};
  text-transform: uppercase;
  text-align: center;
}

h4 {
  margin: 0;
  font-weight: 600;
  font-size: 1.25em;
  color: ${(props) => props.theme.colors.lightBlack};

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
