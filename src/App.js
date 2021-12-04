import styled from "styled-components";
import Card from "./components/Card/index";

const Div = styled.div`
  html,
  body {
    height: 100%;
    margin: 0;
    padding: 0;
  }
`;

const Title = styled.header`
  background-color: #d0ccd0;
  text-align: center;
  color: red;
  width: 100%;
  height: 50px;

  position: fixed;
  h2 {
    font-family: "Courier New", Courier, monospace;
  }
`;

const App = () => {
  return (
    <Div className="App">
      <Title>
        <h2>Marvel comics</h2>
      </Title>
      <Card />
    </Div>
  );
};

export default App;
