import styled from "styled-components";
import banner from "@assets/homePageImg/banner2.png";

export default styled.div`
  .about,
  .connection p,
  .banner :not(.logo) {
    display: none;
  }

  .banner {
    margin-top: 10vh;
  }

  .logo {
    width: auto;
    text-align: center;
    display: block;
    margin: 2rem auto auto auto;
  }

  .formBox {
    margin-top: 7vh;
  }

  .register {
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    cursor: pointer;
    margin-top: 2rem;
  }

  @media screen and (min-width: 500px) {
    .banner {
      width: 100vw;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: end;
      background-image: url(${banner});
      background-size: cover;
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }

    .banner p {
      color: white;
      width: 80vw;
      font-size: 1.5rem;
      text-align: center;
    }

    .logo {
      width: auto;
    }

    .connection {
      height: 40vh;
      width: 100vw;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);
      background-color: var(--main-color);
    }

    .connection p {
      grid-area: 1 / 1 / 3 / 2;
      height: 15vh;
      width: 30vw;
      background-color: #d9d9d9;
      margin-top: 7vh;
      margin-left: 7vw;
      padding: 2rem 1rem 1rem 1rem;
      border-radius: 2.5rem;
      text-align: center;
      font-size: 1.5rem;
      display: block;
    }

    .login {
      grid-area: 1 / 2 / 2 / 3;
    }

    .register {
      grid-area: 2 / 2 / 3 / 3;
      text-align: center;
      align-items: center;
      margin: 1rem 0;
    }

    .about {
      height: 30vh;
      width: 100vw;
      display: flex;
      justify-content: space-around;
      background-color: #c77072;
      margin-top: 2rem;
    }

    .thisIsUs {
      width: auto;
    }

    .description {
      width: 30vw;
      font-size: 1.5rem;
      color: #ffffff;
      text-align: center;
    }

    .description h1,
    .description p,
    .description h2 {
      margin-top: 1rem;
    }
  }
`;
