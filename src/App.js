import { useEffect } from "react";
import Header from "./layout/Header";
import Main from "./layout/Main";
import Footer from "./layout/Footer";
import Background from "./layout/Background";
import { getAppHeight } from "./utils/getAppHeight.utils";
import { preventResizeAnime } from "./utils/preventResizeAnime.utils";
import "./scss/main.scss";

const App = () => {
  useEffect(() => {
    getAppHeight();
    preventResizeAnime();
  }, []);

  return (
    <div className="app">
      <Header />
      <Background>
        <Main />
      </Background>
      <Footer />
    </div>
  );
};

export default App;
