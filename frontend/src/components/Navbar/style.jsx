import styled from "styled-components";

export default styled.nav`
  @media screen and (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: grey;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
  }
`;
