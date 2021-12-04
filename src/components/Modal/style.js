import styled from "styled-components";

export const Modal = styled.div`
  background-color: #fbfcff;
  display: flex;
  justify-content: space-evenly;
  margin-top: 30px;
  margin-bottom: 30px;
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
