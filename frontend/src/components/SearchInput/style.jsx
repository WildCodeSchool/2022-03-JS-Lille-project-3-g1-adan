import styled from "styled-components";

export default styled.div`
  background-color: #bb5459;
  input {
    background: #c4c4c4;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 19px;
    height: 1.9rem;
    width: 90vw;
    font-size: 1rem;
  }
  input:placeholder-shown {
    font-size: 1rem;
    color: black;
  }
  @media screen and (min-width: 500px) {
    input {
      width: 45vw;
      height: 3rem;
      font-size: 1.5rem;
    }
    input:placeholder-shown {
      font-size: 1.5rem;
      color: black;
    }
  }
`;
