import styled from "styled-components";
import BandImg from "@assets/imgBand/bandImg.svg";

export default styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  width: 100%;
  line-height: 2rem;
  .imgband {
    height: 8rem;
    width: auto;
    aspect-ratio: 1/1;
    border-radius: 50%;
    background-image: url(${BandImg});
    background-size: cover;
  }
  .member {
    align-self: start;
    padding-left: 2rem;
  }
  @media screen and (min-width: 500px) {
    font-size: calc(100vw / 55);
    .imgband {
      height: 10rem;
      aspect-ratio: 1/1;
    }
  } ;
`;
