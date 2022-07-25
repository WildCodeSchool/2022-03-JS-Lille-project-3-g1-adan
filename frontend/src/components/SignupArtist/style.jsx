import styled from "styled-components";

export default styled.section`
  background-color: #bb5759;
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  text-align: center;
  .imgLogo {
    width: 47vw;
  }
  .register {
    margin-top: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .registerContainer {
    margin-top: 1rem;
    width: 85vw;
    background-color: #c4c4c4;
    border-radius: 1rem;
    border: 1px solid white;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  .registerContainerTwo {
    margin-top: 1rem;
    width: 85vw;
    background-color: #c4c4c4;
    border-radius: 1rem;
    border: 1px solid white;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  h1 {
    margin-top: 0.7rem;
    color: white;
    font-size: 1.5rem;
  }
  .inputBandName {
    width: 65vw;
    height: 3vh;
    border-radius: 0.3rem;
    border: 1px solid white;
    margin: 1rem;
  }
  .inputForm {
    width: 65vw;
    height: 3vh;
    border-radius: 0.3rem;
    border: 1px solid white;
    margin: 1rem;
  }
  .select {
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
    font-size: 1rem;
  }
  .btnValidate {
    margin-bottom: 1rem;
    width: 65vw;
    height: 5vh;
    border-radius: 2rem;
    border: 1px solid white;
    background-color: #f67778;
    color: white;
    font-size: 1rem;
  }

  fieldset {
    display: none;

    &.active {
      display: block;
      margin-top: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
  }
  @media screen and (min-width: 800px) {
    .registerContainer {
      height: 45vh;
      padding-bottom: 2rem;
      width: 40vw;
    }
    .imgLogo {
      width: 13vw;
      margin-top: 4rem;
    }
    .registerContainerTwo {
      margin-top: 3rem;
      width: 40vw;
      height: 25vh;
    }
    .inputBandName {
      width: 30vw;
    }
    .inputForm {
      width: 30vw;
    }
    .select {
      margin-top: 0.5rem;
    }
    .btnNext {
      margin-top: 1.5rem;
      width: 25vw;
      cursor: pointer;
    }
    .btnValidate {
      margin-top: 1rem;
      width: 25vw;
      cursor: pointer;
    }
  }
`;
