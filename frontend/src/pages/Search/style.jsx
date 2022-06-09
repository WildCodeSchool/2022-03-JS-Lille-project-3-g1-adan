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

  li {
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    display: flex;
    flex-direction: column;
    flex-flow: column wrap;
  }
  a {
    color: black;
    margin-top: 0.4rem;
  }
  @media screen and (min-width: 500px) {
    height: 90vh;
    h2 {
      font-size: 3rem;
      margin: 4rem;
    }
  }
`;
