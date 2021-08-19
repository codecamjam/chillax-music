import React from "react";
import { getCustomStyle } from "./Icon.utils";
import css from "./Icon.module.scss";
import megaSprite from "../../assets/sprite.svg";

const Icon = ({ spriteName, variant }) => {
  const customStyle = getCustomStyle(spriteName);
  let spritePath = megaSprite + `#${spriteName}`;

  return (
    <svg
      className={[
        css["icon"],
        css[`icon--${customStyle}`],
        css[`icon--${variant}`],
      ].join(" ")}
    >
      <use xlinkHref={spritePath}></use>
    </svg>
  );
};

export default React.memo(Icon);
