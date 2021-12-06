import Footer from "../components/Footer/index";
import Header from "../components/Header/index";
import HeroList from "../components/HeroList/index";

const Hero = () => {
  return (
    <>
      <Header />
      <div>
        <h3>Aqui vai os herois</h3>
      </div>
      <HeroList />
      <Footer />
    </>
  );
};

export default Hero;
