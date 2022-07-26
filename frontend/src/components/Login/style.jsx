import styled from "styled-components";

export default styled.div`
  .formBox {
    padding-left: 10vw;
    padding-right: 10vw;
  }

  form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: #c4c4c4;
    border-radius: 1.2rem;
    padding-top: 1rem;
    padding-bottom: 1.5rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  input {
    width: 15rem;
    height: 1.6rem;
    margin-top: 1rem;
  }

  .button {
    cursor: pointer;
    width: 15rem;
    height: 2.2rem;
    background: #f77777;
    border: 1px solid #ffffff;
    border-radius: 1.6rem;
    color: white;
    font-size: 1.2rem;
    letter-spacing: 0.1rem;
  }

  @media screen and (min-width: 800px) {
    .formBox {
      padding: 1rem 7rem 1rem;
    }
    form {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      background: #c4c4c4;
      border-radius: 1.2rem;
    }
    input {
      width: 26rem;
      height: 2rem;
      margin-top: 1rem;
    }

    .button {
      width: 26rem;
      height: 2rem;
      background: #f77777;
      border: 1px solid #ffffff;
      border-radius: 1.6rem;
    }
  }
`;
