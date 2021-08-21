import Icon from "../components/icon/Icon";

import css from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={css.footer__logos}>
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
      <p className={css.footer__copyright}>&copy; Chillax Music Group</p>
    </footer>
  );
};

export default Footer;
