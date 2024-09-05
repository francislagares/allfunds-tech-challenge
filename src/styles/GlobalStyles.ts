import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root {
  font-size: 1rem;
  font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.2rem;
}

body {
  margin: 0;
  padding: 2rem;
  min-width: 320px;
}

a {
  text-decoration: none;
}
`;

export default GlobalStyles;
