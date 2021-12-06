import styled from "styled-components";

const Head = styled.header`
  font-family: "Roboto Mono", monospace;

  background-color: #d0ccd0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  top: 0;
  width: 100%;

  position: fixed;
  h2 {
    font-family: "Roboto Mono", monospace;
    color: #e23636;
  }
  button {
    font-family: "Roboto Mono", monospace;
    text-decoration: none;
  }
  a {
    font-family: "Roboto Mono", monospace;
    color: #e23636;
    text-decoration: none;
  }
`;

export default Head;
