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
    height: 27vh;
    margin-top: 2.75rem;
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
    height: 58vh;
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
    margin-top: 1.5rem;
    border-radius: 0.3rem;
    border: 1px solid white;
  }
  .select {
    margin-top: 1.5rem;
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
    margin-top: 2rem;
    width: 65vw;
    height: 5vh;
    border-radius: 1rem;
    border: 1px solid white;
    background-color: #f67778;
    color: white;
  }
`;
