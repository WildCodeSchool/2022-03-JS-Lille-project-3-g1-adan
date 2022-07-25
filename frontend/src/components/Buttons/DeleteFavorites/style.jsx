import styled from "styled-components";

export default styled.button`
  box-sizing: border-box;
  height: 1.8rem;
  width: 5rem;
  background: #f77777;
  border: 1px solid #ffffff;
  border-radius: 27px;
  font-size: 0.8rem;
  color: #ffffff;

  @media screen and (min-width: 500px) {
    cursor: pointer;
    width: 8rem;
    height: 2rem;
    margin-top: 0.5rem;
    border: 1px solid #ffffff;
    border-radius: 1.6rem;
    font-size: 1rem;
  }
`;
