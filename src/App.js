import styled from "styled-components";
import Header from "./components/Header/index";
import Card from "./components/Card/index";

const Div = styled.div`
  html,
  body {
    height: 100%;
    margin: 0;
    padding: 0;
  }
`;

const App = () => {
  return (
    <Div className="App">
      <Header />

      <Card />
    </Div>
  );
};

export default App;
