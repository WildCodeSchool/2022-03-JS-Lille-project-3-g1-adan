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
  margin: auto;
  position: absolute;
  top: 7%;
  left: 78%;

  @media screen and (min-width: 800px) {
    font-size: 1rem;
    height: 2rem;
    width: 7rem;
    top: 28%;
    left: 92%;
  }
`;
