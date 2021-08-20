import Icon from "../components/icon/Icon";

import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logos">
        <a href="#">
          <Icon spriteName="icon-instagram" />
        </a>
        <a href="#">
          <Icon spriteName="icon-youtube2" />
        </a>

        <a href="#">
          <Icon spriteName="icon-soundcloud" />
        </a>

        <a href="#">
          <Icon spriteName="icon-appleinc" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
