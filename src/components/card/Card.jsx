import Icon from "../icon/Icon";
import css from "./Card.module.scss";

const Card = ({ title, icon, text, img, alt }) => {
  return (
    <div className={css.card}>
      <Icon spriteName={icon} variant="light" />
      <h2 className={css.title}>{title}</h2>
      <p className={css.text}>{text}</p>
      <img src={img} alt={alt} className={css.image} />
    </div>
  );
};

export default Card;
