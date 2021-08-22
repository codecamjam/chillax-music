import Icon from "../icon/Icon";
import css from "./Contact.module.scss";

export default function Contact() {
  return (
    <div className={css.contact}>
      <h4 className={css.heading}>Get in touch</h4>
      <div className={css.row}>
        <Icon spriteName="icon-eye" />
        <div className={css.text}>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/clay-blasser-263b6376"
            className={css.value}
          >
            Clay Blasser
          </a>
        </div>
      </div>
      <div className={css.row}>
        <Icon spriteName="icon-envelop" />
        <div className={css.text}>
          <a
            target="_blank"
            href="mailto:chillaxmusicgroup@gmail.com"
            className={css.value}
          >
            Chillaxmusicgroup@gmail.com
          </a>
        </div>
      </div>
      <div className={css.row}>
        <Icon spriteName="icon-phone" />
        <div className={css.text}>
          <a target="_blank" className={css.value} href="tel:9045058162">
            (904) 505-8162
          </a>
        </div>
      </div>
    </div>
  );
}
