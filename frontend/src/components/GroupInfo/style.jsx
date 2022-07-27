import styled from "styled-components";
import logo from "@assets/imgBand/default.png";

export default styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  width: 100%;
  line-height: 2rem;
  .imgBand {
    height: 8rem;
    width: auto;
    aspect-ratio: 1/1;
    border-radius: 50%;
    background-image: url(${(props) => props.src});
    background-size: cover;
  }
  .imgBandDefault {
    height: 6rem;
    width: auto;
    aspect-ratio: 1/1;
    border-radius: 50%;
    background-image: url(${logo});
    background-position: center;
    background-size: cover;
  }
  .member {
    align-self: start;
    padding-left: 2rem;
    margin: 1rem 0;
  }

  .avatar {
    border-radius: 50%;
    width: 4rem;
  }
  .groupContainer {
    display: flex;
    flex-direction: column;
    width: 80%;
    padding: 0;
  }
  .memberName {
    margin-left: 3rem;
  }
  ul li:nth-child(2) {
    text-align: center;
  }
  .cardMember {
    display: flex;
    margin-bottom: 2rem;
  }
  .followButton {
    border-radius: 18px;
    font-style: normal;
    font-weight: 400;
    font-size: 0.8rem;
    line-height: 0.9rem;
    text-transform: uppercase;
    text-align: center;
    color: #ffffff;
    padding: 0.3rem;
    position: absolute;
    right: 1rem;
    top: 0.5rem;
  }

  .isFollowed {
    background: #f77777;
    border: 1px solid #bb5759;
  }

  .isNotFollowed {
    background: #65b857;
    border: 1px solid #199f03;
  }
  @media screen and (min-width: 800px) {
    font-size: calc(100vw / 55);
    line-height: 3rem;

    .followButton {
      right: 6.5%;
      top: 5%;
      font-size: 1rem;
      padding: 0.5rem;
    }

    .imgband {
      height: 10rem;
      aspect-ratio: 1/1;
    }
    .avatar {
      border-radius: 50%;
      width: 6rem;
      aspect-ratio: 1/1;
    }
    .memberName {
      margin: auto;
    }
    font-size: calc(100vw / 55);
  } ;
`;
