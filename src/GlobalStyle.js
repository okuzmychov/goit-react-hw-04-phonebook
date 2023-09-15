import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Ubuntu-Regular', 'Segoe UI', 'Oxygen', 'Roboto',
    'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

ul, h1, h2, h3, h4, h5, h6 {
    margin: 0px;
    padding: 0px;
    list-style: none;
}

p {
  margin: 0;
}
`;
