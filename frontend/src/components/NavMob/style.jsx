import styled from "styled-components";

export default styled.nav`
  display: none;
  @media screen and (max-width: 799px) {
    position: fixed;
    bottom: 0;
    width: 100vw;
    display: block;
    .mobile {
      display: none;
      background-color: #c4c4c4;
      height: 7vh;
      padding: 1rem;
      display: flex;
      justify-content: space-around;
      align-items: flex-end;
    }
    .picto,
    .pict {
      width: auto;
      height: 5vh;
      padding: 0.25rem;
    }
  }
`;
