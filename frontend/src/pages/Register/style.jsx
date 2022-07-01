import styled from "styled-components";

export default styled.section`
  background-color: #bb5759;
  width: 100vw;
  height: 50vh;
  top: 0;
  text-align: center;
  margin-top: 10vh;
  .imgLogo {
    width: 47vw;
    margin-top: 2rem;
  }
  @media screen and (min-width: 1024px) {
    .imgLogo {
      width: 15vw;
    }
  }
`;
