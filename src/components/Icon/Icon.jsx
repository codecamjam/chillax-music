import React from 'react';
import { getCustomStyle } from './Icon.utility';
import css from './Icon.module.scss';
import megaSprite1 from '../../../assets/sprite1.svg';
import megaSprite2 from '../../../assets/sprite2.svg';

const Icon = ({ spriteName, inputHandler, type }) => {

  function getSpritePointer() {
    if (
      spriteName === 'icon-contrast' ||
      spriteName === 'icon-play2' ||
      spriteName === 'icon-pause' ||
      spriteName === 'icon-stop'
    ) {
      return megaSprite2;
    } else {
      return megaSprite1;
    }
  }


  const customStyle = getCustomStyle(spriteName);
  let megaSprite = getSpritePointer();
  let spritePath = megaSprite + `#${spriteName}`;


  return (
    <svg onClick={inputHandler}
      className={[css['icon'], css[`icon--${customStyle}`], css[`icon--${type}`]].join(' ')}>
      <use xlinkHref={spritePath}></use>
    </svg>
  );
}

export default React.memo(Icon);