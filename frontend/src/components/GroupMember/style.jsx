import styled from "styled-components";

export default styled.div`
  margin: 1rem;
  .avatar {
    border-radius: 50%;
    width: 4rem;
  }
  .groupContainer {
    display: flex;
    align-items: center;
    padding: 0;
  }
  .memberName {
    margin-left: 3rem;
  }
  ul li:nth-child(2) {
    text-align: center;
  }
  @media screen and (min-width: 500px) {
    .avatar {
      border-radius: 50%;
      width: 6rem;
    }
    .memberName {
      margin: auto;
    }
    font-size: calc(100vw / 55);
  }
`;
