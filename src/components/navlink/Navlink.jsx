import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Icon from "../icon/Icon";
import css from "./Navlink.module.scss";

const Navlink = ({ text, icon, route }) => {
  return (
    <LinkContainer exact to={route}>
      <Nav.Link>
        <span className={css.navlink}>
          <Icon spriteName={icon} />
          <span className={css[text]}>{text}</span>
        </span>
      </Nav.Link>
    </LinkContainer>
  );
};

export default Navlink;
