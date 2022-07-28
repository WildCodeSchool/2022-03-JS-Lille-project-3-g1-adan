import styled from "styled-components";

export default styled.button`
  width: 15rem;
  height: 2.2rem;
  border-radius: 1.6rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 1.1rem;
  letter-spacing: 0.1rem;
  background-color: #c4c4c4;

  @media screen and (min-width: 800px) {
    cursor: pointer;
    width: 26rem;
    height: 2.2rem;
    margin-top: 1rem;
    border: 1px solid #ffffff;
    border-radius: 1.6rem;
    background-color: #c4c4c4;
  }
`;
