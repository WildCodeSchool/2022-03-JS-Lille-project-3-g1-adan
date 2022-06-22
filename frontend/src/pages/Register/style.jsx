import styled from "styled-components";

export default styled.section`
  background-color: #bb5759;
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  text-align: center;
  .imgLogo {
    width: 47vw;
    height: auto;
  }
  @media screen and (min-width: 1024px) {
    .imgLogo {
      width: 15vw;
    }
  }
`;
