import styled from "styled-components";

const Foot = styled.footer`
  display: block !important;

  background-color: #d0ccd0;
  bottom: 0;
  width: 100%;
  height: 100px;
  .container {
    display: flex;
    flex-direction: row;
    align-items: space-evenly;
    justify-content: center;
    align-self: center;
  }

  a {
    color: #e23636;
    text-decoration: none;
  }
`;

export default Foot;
