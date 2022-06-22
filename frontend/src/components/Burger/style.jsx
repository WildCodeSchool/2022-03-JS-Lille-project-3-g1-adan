import styled from "styled-components";

export default styled.nav`
  display: none;
  @media screen and (min-width: 800px) {
    height: 10vh;
    background-color: #c4c4c4;
    display: flex;
    justify-content: flex-end;
    position: absolute;
    top: 0;
    width: 100vw;
  }
  ul {
    display: flex;
    flex-direction: column;
    padding-bottom: 1rem;
    background-color: #c4c4c4;
    border-bottom-left-radius: 2rem;
    position: absolute;
    top: 95%;
    width: 12vw;
    height: fit-content;
    margin: 0 auto;
    align-items: center;
  }

  a,
  a:hover,
  a:active {
    text-decoration: none;
    color: inherit;
    align-self: center;
  }

  .picture {
    margin: auto;
    width: auto;
    margin-top: 1rem;
    font-size: 1rem;
  }
  .logo {
    padding-top: 0;
    margin-right: auto;
    width: auto;
    height: 10vh;
  }

  .contact {
    height: 4vh;
    width: auto;
    align-self: center;
  }

  .btn {
    background-color: #c4c4c4;
    border: none;
    width: auto;
  }

  div {
    width: 1.8rem;
    height: 0.1rem;
    background-color: ${({ open }) => (open ? "#212121" : "#212121")};
    border-radius: 15rem;
    transform-origin: 0.1px;
    transition: all 0.3s linear;
    margin: 0.5rem;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : " rotate(0)")};
      margin: ${({ open }) => (open ? "1.15rem" : "")};
    }

    &:nth-child(2) {
      transform: ${({ open }) =>
        open ? "translateX(100%)" : " translateX(0)"};
      opacity: ${({ open }) => (open ? 0 : 1)};
      display: ${({ open }) => (open ? "none" : "")};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : " rotate(0)")};
      margin: ${({ open }) => (open ? "1.15rem" : "")};
    }
  }
`;
