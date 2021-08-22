import { Container, Row, Col } from "react-bootstrap";
import Headshot from "../../components/headshot/Headshot";
import Contact from "../../components/contact/Contact";
import Icon from "../../components/icon/Icon";
import { text1, text2, text3, text4 } from "./bio.utils";

import css from "./Bio.module.scss";
export default function Bio() {
  return (
    <section className={css.bioWrap}>
      <Container className={`margin-auto  pl-2 pr-2 ${css.bio}`}>
        <Row>
          <Col
            xs={12}
            md={6}
            className="d-flex justify-content-center justify-content-lg-start"
          >
            <Contact />
          </Col>
          <Col
            xs={12}
            // md={6}
            className="d-flex flex-column align-items-start justify-content-between"
          >
            <p className={css.text}>
              <span>
                Thanks for visiting my site! I'm an audio engineer based in
                Saint Augustine, FL. I provide <strong>professional</strong>{" "}
                audio, video, and streaming solutions. I have a Bachelors in
                Recording Arts from Full Sail University and over 15 years of
                experience. I've worked in broadcasting as well as in the music
                industry, so I know what goes into producing{" "}
                <strong>professional-grade</strong> content.
              </span>
            </p>
            <p className={css.text}>{text2}</p>
            <p className={css.text}>{text3}</p>
            <p className={css.text}>{text4}</p>
          </Col>

          {/* <Col xs={12} className="d-flex justify-content-center">
          <h2 className={css.heading}>Chillax! I got you covered!</h2>
        </Col> */}
        </Row>

        <a
          href="mailto:chillaxmusicgroup@gmail.com"
          target="_blank"
          className="btn btn--hero btn--animated bio-btn"
        >
          <div className="bio-btn__content">
            <span>Book Now!</span>
            <Icon spriteName="icon-envelop" />
          </div>
        </a>
      </Container>
    </section>
  );
}
