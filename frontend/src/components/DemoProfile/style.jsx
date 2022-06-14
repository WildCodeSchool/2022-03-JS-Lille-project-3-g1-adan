import styled from "styled-components";

export default styled.div`
  margin: 2rem auto;
  padding: 1rem 0;
  width: 85vw;

  .coverContainer {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }

  img {
    width: 100%;
    height: auto;
    max-height: auto;
    max-width: 30vw;
    aspect-ratio: 1/1;
    padding-left: 1rem;
    padding-top: 1rem;
  }

  @media screen and (min-width: 500px) {
    display: flex;
    justify-content: space-evenly;
    img {
      width: auto;
      height: 30vh;
    }
  }

`;
