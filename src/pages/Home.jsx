import { useContext } from "react";
import NavContext from "../store/nav-context";
import Hero from "../components/hero/Hero";
import Links from "../components/heroLinks/HeroLinks";

import "./Home.scss";
const Home = () => {
  const ctx = useContext(NavContext);
  return (
    <div className="home">
      <Hero />
      {!ctx.expanded && <Links />}
    </div>
  );
};

export default Home;
