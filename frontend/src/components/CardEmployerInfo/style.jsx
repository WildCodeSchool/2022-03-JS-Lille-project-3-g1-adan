import styled from "styled-components";
import banner from "@assets/imgProfile/banner2.jpg";
import avatar from "@assets/imgProfile/avatarDefault.svg";
import editLogo from "@assets/imgProfile/settings.svg";

export default styled.div`
  background-color: #bb5459;
  height: 100%;
  width: 100%;
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
  .editButton {
    border-radius: 18px;
    font-style: normal;
    font-weight: 400;
    font-size: 0.8rem;
    line-height: 0.9rem;
    text-transform: uppercase;
    text-align: center;
    color: black;
    background-image: url(${editLogo});
    background-size: cover;
    background-color: rgb(255, 255, 255, 0.8);
    border: none;
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
    width: 2rem;
    height: 2rem;
  }
  .registerForm {
    display: flex;
    flex-direction: column;
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
    padding: 1rem 0;
  }

  .btnBottomProfile:hover {
    background-color: #bb5759;
  }
  .btnBottomProfileBorder {
    border-right: solid black 1px;
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

  .description {
    text-align: center;
  }
  .form {
    display: flex;
    flex-direction: column;
  }
  .descriptionBtn {
    border: none;
    background-color: transparent;
    color: #1871a3;
    text-decoration: underline;
  }
  @media screen and (min-width: 800px) {
    .avatarImg {
      height: 80%;
      width: auto;
      aspect-ratio: 1/1;
    }
    .imgAgenda {
      right: 7.7%;
      top: 40%;
    }

    .followButton {
      right: 6.5%;
      top: 5%;
      font-size: 1rem;
      padding: 0.5rem;
    }
    .editButton {
      top: 8rem;
      width: 3rem;
      height: 3rem;
    }
    h1 {
      font-size: calc(100vw / 40);
    }
    p {
      font-size: calc(100vw / 60);
    }
    .bannerImg {
      height: 35vh;
      margin-top: 10vh;
    }
    .defaultBanner {
      height: 35vh;
      margin-top: 10vh;
    }
  }
`;
