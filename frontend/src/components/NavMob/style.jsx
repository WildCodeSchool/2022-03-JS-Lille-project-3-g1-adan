import styled from "styled-components";

export default styled.div`
  @media screen and (max-width: 500px) {
    position: absolute;
    bottom: 0;
    width: 100vw;

    .mobile {
      background-color: #c4c4c4;
      height: 7vh;
      padding: 1rem;
      display: flex;
      justify-content: space-around;
      align-items: flex-end;
    }

    .pict {
      width: 7vw;
      height: 4vh;
      padding: 0.5rem;
      border: 2px black;

      background-color: #c4c4c4;
    }
  }
`;
