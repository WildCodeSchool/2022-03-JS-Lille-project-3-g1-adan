import styled from "styled-components";

export default styled.div`
  background-color: #bb5459;
  input {
    background: #c4c4c4;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 19px;
    height: 1.9rem;
    width: 85vw;
    font-size: 1rem;
    padding-left: 1rem;
  }
  input:placeholder-shown {
    font-size: 1rem;
    color: black;
  }

  ul {
    background: #c4c4c4;
    width: 89vw;
    border-radius: 19px;
    margin: auto;
    max-height: 80vh;
    overflow: scroll;
  }

  li {
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    padding-left: 2vw;
    display: flex;
    flex-direction: column;
    flex-flow: column wrap;
  }

  a {
    color: black;
    margin-top: 0.4rem;
  }
  @media screen and (min-width: 500px) {
    ul {
      width: 46vw;
      height: fit-content;
    }

    li {
      margin-top: 1rem;
      margin-bottom: 0.8rem;
    }
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
