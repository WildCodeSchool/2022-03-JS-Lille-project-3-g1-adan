import styled from "styled-components";

export default styled.nav`
  @media screen and (min-width: 500px) {
    position: fixed;
    bottom: 0;
    top: 4rem;
    right: 20px;
    flex-direction: row;

    > button {
      width: 3rem;
      height: 3rem;
      position: fixed;
      top: 15px;
      right: 20px;
      display: flex;
      justify-content: space-around;
      flex-flow: column nowrap;

      div {
        width: 2rem;
        height: 0.25rem;
        background-color: ${({ open }) => (open ? "#333" : "#333")};
        border-radius: 2rem;
        transform-origin: 1px;
        transition: all 0.3s linear;

        &:nth-child(1) {
          transform: ${({ open }) => (open ? "rotate(45deg)" : " rotate(0)")};
        }

        &:nth-child(2) {
          transform: ${({ open }) =>
            open ? "translateX(100%)" : " translateX(0)"};
          opacity: ${({ open }) => (open ? 0 : 1)};
        }

        &:nth-child(3) {
          transform: ${({ open }) => (open ? "rotate(-45deg)" : " rotate(0)")};
        }
      }
    }
    > .desktopMenu {
      display: ${({ open }) => (open ? "block" : "none")};
    }

    ul.mobile {
      background-color: #c4c4c4;
    }
  }
`;
