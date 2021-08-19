import { useEffect } from "react";
import Header from "./layout/Header";
import Main from "./layout/Main";
import Footer from "./layout/Footer";
import Background from "./layout/Background";
import { preventResizeAnime } from "./utils/preventResizeAnime.utils";
import "./scss/main.scss";

const App = () => {
  useEffect(() => {
    preventResizeAnime();
  }, []);

  return (
    <div>
      <Header />
      <Background>
        <Main />
      </Background>
      <Footer />
    </div>
  );
};

export default App;
