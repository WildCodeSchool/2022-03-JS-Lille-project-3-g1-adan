import styled from "styled-components";

export default styled.section`
  background-color: #bb5459;
  height: 93vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    color: white;
    margin: 3rem;
    font-weight: bold;
    font-size: 1.2rem;
  }
  p {
    width: 60vw;
    margin-bottom: 2rem;
    text-align: justify;
  }

  @media screen and (min-width: 500px) {
    height: 100vh;
    margin-top: 10vh;

    h2 {
      font-size: 3rem;
      margin: 4rem;
    }
  }
`;
