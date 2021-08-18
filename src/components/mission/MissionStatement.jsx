import { Link } from "react-router-dom";
import css from "./MissionStatement.module.scss";

const MissionStatement = () => {
  return (
    <div className={css.mission}>
      <h1 className={css["heading-primary"]}>
        <span className={css["heading-primary--main"]}>chillax music</span>
        <span className={css["heading-primary--sub"]}>
          Audio, Video, & Streaming Solutions
        </span>
      </h1>

      <Link to={"/services"} className="btn btn--white btn--animated">
        Learn more
      </Link>
    </div>
  );
};

export default MissionStatement;
