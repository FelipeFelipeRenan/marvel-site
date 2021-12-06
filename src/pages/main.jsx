import styled from "styled-components";
import Header from "../components/Header";
import Options from "../Options/index";

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Main = () => {
  return (
    <>
      <Div>
        <Header />

        <Options />
      </Div>
    </>
  );
};

export default Main;
