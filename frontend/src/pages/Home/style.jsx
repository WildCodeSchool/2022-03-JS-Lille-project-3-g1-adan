import styled from "styled-components";
import banner from "@assets/homePageImg/banner2.png";

export default styled.div`
  .about,
  .connection p,
  .banner :not(.logo) {
    display: none;
  }

  .banner {
    margin-top: 8vh;
  }

  .logo {
    margin: 0 auto;
    text-align: center;
    display: block;
    margin-top: 2rem;
  }

  .formBox {
    margin-top: 7vh;
  }

  .register {
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    margin-top: 2rem;
  }
  h1 {
    font-style: italic;
    font-weight: bold;
  }
  h2 {
    font-size: 0.8em;
    font-style: italic;
    font-weight: bold;
  }

  a {
    text-decoration: none;
    color: white;
  }

  @media screen and (min-width: 800px) {
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
      font-size: 1.6rem;
      text-align: center;
      font-style: italic;
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
      height: fit-content;
      width: 30vw;
      background-color: #d9d9d9;
      margin-top: 7vh;
      margin-left: 7vw;
      padding: 2.5rem 2rem 2rem 2rem;
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
      margin-top: 1rem;
      margin-left: 4rem;
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
      padding-top: 2rem;
    }

    .description h1,
    .description p,
    .description h2 {
      margin-top: 1rem;
    }
    .formBox {
      margin-top: 7vh;
      margin-left: 7vw;
    }

    .banner :not(.logo) {
      display: initial;
    }
  }
`;
