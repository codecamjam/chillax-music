import { useEffect, useState } from "react";
import Header from "./layout/Header";
import Main from "./layout/Main";

import Background from "./layout/Background";
import NavContext from "./store/nav-context";
import { getAppHeight } from "./utils/getAppHeight.utils";
import { preventResizeAnime } from "./utils/preventResizeAnime.utils";
import "./scss/main.scss";

const App = () => {
  const [expanded, setExpanded] = useState(false);

  const toggle = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  useEffect(() => {
    getAppHeight();
    preventResizeAnime();
  }, []);

  return (
    <div className="app">
      <Background />
      <NavContext.Provider value={{ expanded }}>
        <Header toggle={toggle} />
        <Main />
      </NavContext.Provider>
    </div>
  );
};

export default App;
