import Icon from "../icon/Icon";

import css from "./Card.module.scss";

const Card = ({ title, icon, text, list, img, alt }) => {
  return (
    <div className={css.card}>
      <Icon spriteName={icon} />
      <h3 className={css.title}>{title}</h3>
      <ul className={css.list}>
        {list.map((item, idx) => (
          <li key={idx} className={css.listItem}>
            {item}
          </li>
        ))}
      </ul>
      <p className={css.text}>{text}</p>
      {/* <div className={css.imgContainer}>
          <img className={css.img} src={img} alt={alt} />
        </div> */}
    </div>
  );
};

export default Card;
