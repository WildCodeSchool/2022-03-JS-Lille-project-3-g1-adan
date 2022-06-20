import styled from "styled-components";

export default styled.section`
  background-color: #bb5459;
  height: 93vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    display: none;
  }

  @media screen and (min-width: 500px) {
    height: 90vh;

    h2 {
      display: block;
      font-size: 3rem;
      margin: 4rem;
    }
  }
`;
