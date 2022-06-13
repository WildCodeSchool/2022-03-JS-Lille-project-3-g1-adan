import styled from "styled-components";
import banner from "@assets/homePageImg/banner.png";

export default styled.div`
  .banner {
    height: 30vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
    background-image: url(${banner});
    background-size: cover;
  }

  .banner p {
    color: white;
    width: 80vw;
    font-size: 1.5rem;
    font-family: var(--main-font);
    text-align: center;
  }

  .logo {
    height: 25vh;
    width: auto;
  }
`;
