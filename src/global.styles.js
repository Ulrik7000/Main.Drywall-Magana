import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  height: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-y: scroll;
  scroll-behavior: smooth;
}

body {
  height: 100%;
}

a {
  text-decoration: none;
}

#root {
  height: 100%;
}

.leaflet-container {
  height: 100%;
  width: 100%;
}
}
`;
