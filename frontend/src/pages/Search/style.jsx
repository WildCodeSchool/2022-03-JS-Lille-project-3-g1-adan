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

  ul {
    background: #c4c4c4;
    width: 90vw;
    max-height: 80vh;
    overflow: scroll;
  }

  li {
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    padding-left: 2vw;
    display: flex;
    flex-direction: column;
    flex-flow: column wrap;
  }

  a {
    color: black;
    margin-top: 0.4rem;
  }
  @media screen and (min-width: 500px) {
    height: 100vh;
    margin-top: 10vh;
    ul {
      width: 45vw;
      height: fit-content;
    }

    li {
      margin-top: 1rem;
      margin-bottom: 0.8rem;
    }

    h2 {
      font-size: 3rem;
      margin: 4rem;
    }
  }
`;
