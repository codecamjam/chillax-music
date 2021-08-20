import Icon from "../icon/Icon";
import Stars from "../stars/Stars";
import css from "./Card.module.scss";

const Card = ({ title, icon, list, text, img }) => {
  return (
    <div className={css.card}>
      <div className={css.header}>
        <Icon spriteName={icon} />
        <h3 className={css.title}>{title}</h3>
      </div>

      <div className={css.body}>
        <ul className={css.list}>
          {list.map((item, idx) => (
            <li key={idx} className={css.listItem}>
              {item}
            </li>
          ))}
        </ul>
        <div className={[css.img, css[`img--${img}`]].join(" ")} />
      </div>
      <blockquote className={css.footer}>&ldquo;{text}&rdquo;</blockquote>
      <Stars />
    </div>
  );
};

export default Card;
