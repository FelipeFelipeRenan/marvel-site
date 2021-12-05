import styled from "styled-components";
import Main from "./pages/main";
import RoutesPage from "./routes";

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
      <RoutesPage />
    </Div>
  );
};

export default App;
