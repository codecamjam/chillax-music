import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Services from "../pages/Services";
import { Route, Switch, Redirect } from "react-router";

import "./Main.scss";

const Main = () => {
  return (
    <div className="main">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/services" exact component={Services} />
        <Route path="/contact" exact component={Contact} />
        <Route path="*">
          <Redirect to={"/"} />
        </Route>
      </Switch>
    </div>
  );
};

export default Main;
