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
    font-size: 1.8rem;
  }

  p {
    width: 60vw;
    margin-bottom: 2rem;
    text-align: justify;
  }

  .container {
    margin-top: 2rem;
    width: fit-content;
    background-color: #c4c4c4;
    border-radius: 1rem;
    border: 2px solid white;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 2rem;
    font-size: 1rem;
  }

  @media screen and (min-width: 500px) {
    height: 100vh;
    margin-top: 10vh;

    h2 {
      font-size: 3rem;
      margin: 4rem;
    }
    .container {
      margin-top: 2rem;
      width: fit-content;
      background-color: #c4c4c4;
      border-radius: 1rem;
      border: 2px solid white;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      padding: 2rem;
      font-size: 1.5rem;
    }
  }
`;
