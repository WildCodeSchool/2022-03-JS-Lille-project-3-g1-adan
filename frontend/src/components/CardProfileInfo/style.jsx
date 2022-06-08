import styled from "styled-components";
import banner from "@assets/imgProfile/banner.png";
import avatar from "@assets/imgProfile/avatarDefault.svg";

export default styled.div`
  background-color: #bb5459;
  height: 100vh;
  width: 100vw;
  .bannerImg {
    height: 12vh;
    background-image: url(${(props) => props.src.banner});
    background-position: center;
    background-size: cover;
  }

  .defaultBanner {
    height: 12vh;
    background-image: url(${banner});
    background-position: center;
    background-size: cover;
  }

  .profileInfo {
    background-color: rgb(196, 196, 196);
    margin: 0 auto;
    padding: 1rem 0;
    width: 85vw;
    border-bottom-right-radius: 19px;
    border-bottom-left-radius: 19px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    position: relative;
  }

  .avatarImg {
    height: 50%;
    width: auto;
    aspect-ratio: 1/1;
    border-radius: 50%;
    background-image: url(${(props) => props.src.avatar});
    background-position: center;
    background-size: cover;
    position: absolute;
    left: 0;
    bottom: 72.49%;
  }
  .defaultAvatar {
    height: 50%;
    width: auto;
    aspect-ratio: 1/1;
    border-radius: 50%;
    background-image: url(${avatar});
    background-position: center;
    background-size: cover;
    position: absolute;
    left: 0;
    bottom: 72.49%;
    background-color: #bb5459;
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

  .bottomProfile {
    background: #f77777;

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-bottom-right-radius: 19px;
    border-bottom-left-radius: 19px;
    width: 70vw;
    margin: 0 auto;
    display: flex;
    justify-content: space-evenly;
  }

  button {
    cursor: pointer;
    color: #fff;
  }
  .btnBottomProfile {
    background-color: transparent;
    border-left: black 1px solid;
    border: none;
    width: 100%;
  }

  .btnBottomProfile:hover {
    background-color: #bb5759;
  }

  h1 {
    text-align: center;
    font-weight: 700;
    font-size: calc(100vw / 20);
  }

  p {
    font-weight: 400;
    font-size: calc(100vw / 38);
    color: #524d4d;
    text-align: center;
    margin-top: 0.5rem;
  }

  ul {
    padding-left: 2rem;
    line-height: 1.5rem;
  }
  .imgAgenda {
    height: 20%;
    width: auto;
    position: absolute;
    right: 1.8rem;
    top: 2.8rem;
  }

  .imgInsta {
    position: absolute;
    height: 20%;
    width: auto;
    aspect-ratio: 1/1;
    right: 3rem;
    top: 6rem;
  }

  .imgLinkedin {
    position: absolute;
    height: 20%;
    width: auto;
    aspect-ratio: 1/1;
    right: 0.5rem;
    top: 6rem;
  }

  .test {
    text-align: center;
  }
  @media screen and (min-width: 500px) {
    /* h1 {
      color: white;
    } */
    .imgAgenda {
      right: 8%;
      top: 30%;
    }

    .imgInsta {
      right: 13%;
      top: 60%;
    }

    .imgLinkedin {
      right: 3%;
      top: 60%;
    }
    .followButton {
      right: 6.5%;
      top: 5%;
      font-size: calc(100vw / 45);
      padding: calc(100vw / 99);
    }
  }
`;
