import styled from "styled-components";

export default styled.div`
  button {
    background-color: transparent;
    border: none;
    position: absolute;
    top: 2rem;
    left: 1rem;
    font-size: 1rem;
    cursor: pointer;
  }
  @media screen and (min-width: 500px) {
    button {
      font-size: 3rem;
      margin: 3rem 0 0 3rem;
    }
  }
`;
