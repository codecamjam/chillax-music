import Icon from "../icon/Icon";
import css from "./Contact.module.scss";

export default function Contact() {
  return (
    <div className={css.contact}>
      <h4 className={css.heading}>Contact Info</h4>
      <div className={css.row}>
        <Icon spriteName="icon-envelop" />
        <div className={css.text}>
          <p className={css.label}>Email: </p>
          <a href="mailto:chillaxmusicgroup@gmail.com" className={css.value}>
            Chillaxmusic@gmail.com
          </a>
        </div>
      </div>
      <div className={css.row}>
        <Icon spriteName="icon-phone" />
        <div className={css.text}>
          <p className={css.label}>Phone: </p>
          <a className={css.value} href="tel:9045058162">
            (904) 505-8162
          </a>
        </div>
      </div>
    </div>
  );
}
