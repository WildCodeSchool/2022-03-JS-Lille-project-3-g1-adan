import styled from "styled-components";

export default styled.section`
  position: absolute;
  width: 100vw;
  margin-top: 10vh;
  text-align: center;
  .imgLogo {
    margin-top: 2rem;
    width: 47vw;
  }
  .register {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .registerContainer {
    margin-top: 5rem;
    width: 85vw;
    background-color: #c4c4c4;
    border-radius: 1rem;
    border: 1px solid white;
  }
  h1 {
    margin-top: 0.7rem;
    color: white;
    font-size: 1.5rem;
  }
  .inputForm {
    width: 65vw;
    height: 3vh;
    border-radius: 0.3rem;
    border: 1px solid white;
    margin: 1rem;
  }
  span {
    font-size: 1.5rem;
    color: white;
    margin-top: 1rem;
  }
  .btnNext {
    margin-bottom: 1rem;
    width: 65vw;
    height: 5vh;
    border-radius: 2rem;
    border: 1px solid white;
    background-color: #f67778;
    color: white;
  }
  @media screen and (min-width: 850px) {
    .registerContainer {
      height: 20vh;
    }
  }
  @media screen and (min-width: 1024px) {
    .imgLogo {
      width: 15vw;
      margin-top: 2rem;
    }
    .registerContainer {
      width: 40vw;
      height: 30vh;
    }
    .inputForm {
      width: 30vw;
    }
    .btnNext {
      margin-top: 2rem;
      width: 25vw;
    }
  }
`;
