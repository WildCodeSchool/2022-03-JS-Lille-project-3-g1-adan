import styled from "styled-components";

export default styled.section`
  background-color: #bb5759;
  width: 100vw;
  height: 100vh;
  top: 0;
  text-align: center;

  .imgLogo {
    width: 47vw;
    height: auto;
    margin-top: 2.75rem;
  }
  .register {
    margin-top: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .registerInput {
    width: 50vw;
    height: 5vh;
    margin-top: 3rem;
    border-radius: 2rem;
    border: 1px solid white;
    background-color: #c4c4c4;
  }
  .registerContainer {
    margin-top: 2rem;
    width: 70vw;
    background-color: #c4c4c4;
    border-radius: 1rem;
    border: 1px solid white;
  }
  .registerContainerInput {
    width: 50vw;
    height: 6vh;
    background-color: #f67777;
    border-radius: 2rem;
    border: 1px solid white;
    margin: 2rem;
    color: white;
  }

  @media screen and (min-width: 850px) {
    .imgLogo {
      width: 30vw;
    }
    .register {
      margin-top: 5rem;
    }
    .registerInput {
      width: 20vw;
    }
    .registerContainer {
      height: 30vh;
      width: 70vw;
      position: absolute;
    }
    .registerContainerInput {
      margin-top: 6rem;
      width: 45vw;
    }
  }

  @media screen and (min-width: 1024px) {
    .imgLogo {
      width: 15vw;
      height: auto;
    }
    .register {
      margin-top: 5rem;
    }
    .registerInput {
      width: 25vw;
      border-radius: 2rem;
    }
    .registerContainer {
      width: 35vw;
      margin-top: 30rem;
    }
    .registerContainerInput {
      width: 28vw;
      margin-top: 3rem;
      border-radius: 2rem;
    }
  }
`;
