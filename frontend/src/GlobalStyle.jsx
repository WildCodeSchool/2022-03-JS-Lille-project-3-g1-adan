import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
  --main-font: "Raleway" sans-serif;
  --main-color: #bb5459;
}
body {
  width: 100vw;
  height: 100vh;
}
`;
export default GlobalStyle;
