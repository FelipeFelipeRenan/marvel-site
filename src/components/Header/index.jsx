import { Link } from "react-router-dom";
import Head from "./style";

const Header = () => {
  return (
    <Head>
      <Link to="/heroes">Herois</Link>
      <Link to="/comics">Quadrinhos</Link>
      <h2>IMarvel</h2>
    </Head>
  );
};

export default Header;
