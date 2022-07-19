import styled from "styled-components";

export default styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0.5rem;

  li {
    margin-top: 0.5rem;
    margin-bottom: 0.2rem;
    padding-left: 2vw;
    list-style-type: none;
  }

  a {
    text-decoration: none;
    color: white;
    font-size: 1rem;
  }

  @media screen and (min-width: 500px) {
    width: 70vw;
    a {
      font-size: 1.5rem;
      margin-right: 0.5rem;
    }
  }
`;
