import styled from "styled-components";

const Foot = styled.footer`
  display: block !important;

  background-color: #d0ccd0;
  margin-bottom: 0;
  bottom: 0;
  width: 100%;
  height: 100px;
  margin-bottom: 0;

  .container {
    font-family: "Roboto Mono", monospace;
    display: flex;
    align-items: center;
    justify-content: center;
    /* align-self: center; */
    justify-content: center;
  }

  a {
    font-family: "Roboto Mono", monospace;
    color: #e23636;
    text-decoration: none;
  }
`;

export default Foot;
