import styled from "styled-components";

export default styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? "#ccc" : "#333")};
    border-radius: 2rem;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : " rotate(0)")};
    }
  }

  @media screen and (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: grey;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
  }
`;
