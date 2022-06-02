import styled from "styled-components";

export default styled.section`
  background-color: #bb5759;
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  text-align: center;

  img {
    width: 47vw;
    height: 27vh;
    margin-top: 2.75rem;
  }
  .register {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .registerInput {
    width: 65vw;
    height: 5vh;
    margin-top: 1rem;
    border-radius: 1rem;
    border: 1px solid white;
    background-color: #c4c4c4;
  }
  .registerContainer {
    margin-top: 2rem;
    width: 85vw;
    height: 30vh;
    background-color: #c4c4c4;
    border-radius: 1rem;
    border: 1px solid white;
  }
  .registerContainerInput {
    width: 65vw;
    height: 6vh;
    background-color: #f67777;
    border-radius: 1rem;
    border: 1px solid white;
    margin-top: 2.5rem;
    color: white;
  }
`;
