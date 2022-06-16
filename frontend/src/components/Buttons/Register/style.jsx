import styled from "styled-components";

export default styled.button`
  width: 15rem;
  height: 2.2rem;
  border-radius: 1.6rem;

  @media screen and (min-width: 500px) {
    cursor: pointer;
    width: 26rem;
    height: 2rem;
    margin-top: 0.5rem;
    border: 1px solid #ffffff;
    border-radius: 1.6rem;
  }
`;
