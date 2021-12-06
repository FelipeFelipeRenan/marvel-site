import styled from "styled-components";

export const Modal = styled.div`
  background-color: #fbfcff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 30px;
  margin-bottom: 30px;

  h3 {
    font-family: "Roboto Mono", monospace;
    color: #e23636;
    display: inherit;
    align-self: center;
  }
  div {
    background-color: #fbfcff;
    display: inherit;
    gap: 50px;
    justify-content: center;
    margin: 5px;
  }
  input {
    align-self: center;
    width: 200px;
  }
`;

export const Button = styled.button`
  color: #fff;
  border-style: none;
  background-color: #1c6e8c;
  width: 90px;
  &:hover {
    background-color: #770000;
    cursor: pointer;
  }
`;
