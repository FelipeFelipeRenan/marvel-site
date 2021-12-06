import styled from "styled-components";

const Main = styled.div`
  margin-top: 30vh;
  display: inherit;
  flex-direction: column;
  border-radius: 5%;

  background-color: #d0ccd0;
  width: 60vh;
  height: 40vh;
  align-items: center;

  justify-content: center;
  gap: 40px;
  div {
    display: inherit;
    gap: 10px;

    button {
      width: 100px;
      height: 50px;
      border-radius: 10%;
      background-color: #504441;
      a {
        text-decoration: none;
        color: #e23636;
      }
      &:hover {
        transform: scale(1.1, 1.1);
      }
    }
  }
`;

export default Main;
