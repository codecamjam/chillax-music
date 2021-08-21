import Icon from "../icon/Icon";

import css from "./HeroLinks.module.scss";

const HeroLinks = () => {
  return (
    <footer className={css.hero}>
      <div className={css.hero__logos}>
        <a className={css.hero__links} href="#">
          <Icon spriteName="icon-instagram" />
        </a>
        <a className={css.hero__links} href="#">
          <Icon spriteName="icon-youtube2" />
        </a>

        <a className={css.hero__links} href="#">
          <Icon spriteName="icon-soundcloud" />
        </a>

        <a className={css.hero__links} href="#">
          <Icon spriteName="icon-appleinc" />
        </a>
      </div>
    </footer>
  );
};

export default HeroLinks;
