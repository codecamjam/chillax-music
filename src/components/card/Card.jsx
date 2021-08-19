import Icon from "../icon/Icon";

import css from "./Card.module.scss";

const Card = ({ title, icon, list, img, alt }) => {
  return (
    <div className={css.card}>
      <Icon spriteName={icon} />
      <h3 className={css.title}>{title}</h3>
      <div className={css.cardBody}>
        <ul className={css.list}>
          {list.map((item, idx) => (
            <li key={idx} className={css.listItem}>
              {item}
            </li>
          ))}
        </ul>
        <div className={css.imgContainer}>
          <img className={css.img} src={img} alt={alt} />
        </div>
      </div>
    </div>
  );
};

export default Card;
