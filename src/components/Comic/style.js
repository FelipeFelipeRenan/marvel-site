import styled from "styled-components";

export const Li = styled.li`
  background-color: #605856;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: center;
  color: #e23636;
`;

export const Com = styled.div`
  margin-top: 50px;
  h3 {
    font-family: "Roboto Mono", monospace;
    color: #d0ccd0;
    align-self: flex-end;
    justify-self: center;
    font-size: 10pt;
    margin-bottom: 50px;
    margin-top: 100px;
  }
  img {
    align-items: center;
    justify-content: center;
    width: 400px;
    height: 600px;
  }
  img:hover {
    box-shadow: 5px 5px 5px rgb(205, 205, 205);

    transform: scale(1.1, 1.1);
  }
`;
