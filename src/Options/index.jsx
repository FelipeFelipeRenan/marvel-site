import { Link } from "react-router-dom";
import Main from "./style";

const Options = () => {
  return (
    <Main>
      <h2>Escolha o que deseja</h2>
      <div>
        <button>
          <Link to="/comics">Quadrinhos</Link>
        </button>
        <button>
          <Link to="/heroes">Personagens</Link>
        </button>
      </div>
    </Main>
  );
};

export default Options;
