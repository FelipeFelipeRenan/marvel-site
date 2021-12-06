import { Link } from "react-router-dom";
import Head from "./style";

const Header = () => {
  return (
    <Head>
      <Link to="/heroes">Personagens</Link>

      <Link to="/">
        <h2>IMarvel</h2>
      </Link>
      <Link to="/comics">Quadrinhos</Link>
    </Head>
  );
};

export default Header;
