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
    align-items: space-between;
    justify-content: center;
    align-self: center;
  }

  a {
    font-family: "Roboto Mono", monospace;
    color: #e23636;
    text-decoration: none;
  }
`;

export default Foot;
