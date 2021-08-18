import { LinkContainer } from "react-router-bootstrap";
import { Navbar } from "react-bootstrap";
import Icon from "../icon/Icon";
import css from "./Logo.module.scss";
const Logo = () => {
  return (
    <div className={css.logo}>
      <LinkContainer to="/" className={css.link}>
        <Navbar.Brand className={css.content}>
          <span className={css.text}>chillax</span>
          <Icon spriteName="icon-headphones" />
        </Navbar.Brand>
      </LinkContainer>
    </div>
  );
};

export default Logo;
