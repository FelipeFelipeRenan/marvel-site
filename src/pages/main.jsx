import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <h1>PAGINA INICIAL</h1>
      <button>
        <Link to="/comics">Quadrinhos</Link>
      </button>
      <button>
        <Link to="/heroes">Herois</Link>
      </button>
    </div>
  );
};

export default Main;
