import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100&display=swap');
  
:root {
  --main-font: "Raleway", sans-serif;
  --main-color: #bb5459;
}
body {
  width: 100vw;
  height: 100vh;
  background-color: var(--main-color)
}
`;
export default GlobalStyle;
