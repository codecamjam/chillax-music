import { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import css from "./Hero.module.scss";

const Hero = () => {
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    setAnimate(false);
  }, [animate]);

  return (
    <div className={css.hero}>
      <h1 className={css.heading}>
        <span className={css.headingMain}>chillax music</span>
        <span className={css.headingSub}>
          Audio, Video, & Streaming Solutions
        </span>
      </h1>

      <Link to={"/services"} className="btn btn--hero btn--animated">
        Learn more
      </Link>
    </div>
  );
};

export default Hero;
