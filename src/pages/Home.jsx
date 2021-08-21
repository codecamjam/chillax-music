import Hero from "../components/hero/Hero";
import Links from "../components/heroLinks/HeroLinks";

import "./Home.scss";
const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Links />
    </div>
  );
};

export default Home;
