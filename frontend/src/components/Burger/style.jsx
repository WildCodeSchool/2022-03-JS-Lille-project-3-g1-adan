// import styled from "styled-components";

// export default styled.nav`
//   display: none;
//   @media screen and (min-width: 500px) {
//     position: fixed;
//     bottom: 0;
//     top: 4rem;
//     right: 20px;
//     display: initial;

//     nav {
//       background-color: #c4c4c4;
//       height: 7vh;
//       padding: 1rem;
//       display: flex;
//       justify-content: space-around;
//     }

//     .picture {
//       display: flex;
//       justify-content: space-around;
//       background-color: #c4c4c4;
//     }

//     > button {
//       width: 3rem;
//       height: 3rem;
//       position: fixed;
//       top: 15px;
//       right: 20px;
//       display: flex;
//       justify-content: space-around;
//       flex-flow: column nowrap;
//       border: none;

//       div {
//         width: 2rem;
//         height: 0.25rem;
//         background-color: ${({ open }) => (open ? "#333" : "#333")};
//         border-radius: 2rem;
//         transform-origin: 0.1px;
//         transition: all 0.3s linear;

//         &:nth-child(1) {
//           transform: ${({ open }) => (open ? "rotate(45deg)" : " rotate(0)")};
//         }

//         &:nth-child(2) {
//           transform: ${({ open }) =>
//             open ? "translateX(100%)" : " translateX(0)"};
//           opacity: ${({ open }) => (open ? 0 : 1)};
//         }

//         &:nth-child(3) {
//           transform: ${({ open }) => (open ? "rotate(-45deg)" : " rotate(0)")};
//         }
//       }
//     }
//     > .desktopMenu {
//       display: ${({ open }) => (open ? "block" : "none")};
//     }

//     ul.mobile {
//       background-color: #c4c4c4;
//     }
//   }
// `;

import styled from "styled-components";

export default styled.nav`
  @media screen and (min-width: 500px) {
    nav {
      height: 10vh;
      background-color: #c4c4c4;
    }
    .liste {
      list-style-type: none;
      background-color: #c4c4c4;
      height: 10vh;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 20vw;

      flex-direction: column;
    }
    .picture {
      padding: 2rem 40%;
      position: relative;
      left: 64.5rem;
      top: 12rem;
      background-color: #c4c4c4;
      display: flex;
      height: 4rem;
    }
    .btn {
      display: block;
      position: absolute;
      right: 1.5rem;
      top: 1.4rem;
      cursor: pointer;
    }
  }
`;
