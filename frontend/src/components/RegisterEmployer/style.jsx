import styled from "styled-components";

export default styled.section`
  position: absolute;
  width: 100vw;
  height: 90vh;
  top: 0;
  text-align: center;
  .imgLogo {
    width: 47vw;
    margin-top: 2rem;
  }
  .register {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .registerContainer {
    margin-top: 2rem;
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
  .select {
    margin-bottom: 1.5rem;
    display: flex;
    justify-content: center;
    margin-right: 3rem;
  }
  .checkbox {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
  }
  .checkbox button {
    border: 0;
    background-color: #c4c4c4;
    margin-left: 2rem;
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
      height: 40vh;
    }
  }
  @media screen and (min-width: 1024px) {
    margin-top: 10vh;
    .registerContainer {
      margin: 5rem 0;
      width: 40vw;
      height: 45vh;
    }
    .inputForm {
      width: 30vw;
    }
    .select {
      margin-top: 1rem;
    }
    .btnNext {
      margin: 2rem 0;
      width: 25vw;
    }
    .imgLogo {
      margin-top: 2rem;
      width: 15vw;
    }
  }
`;
