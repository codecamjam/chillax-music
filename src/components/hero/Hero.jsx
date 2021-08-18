import video1 from "../../assets/beach.mp4";
import video2 from "../../assets/beach.webm";
import { Container } from "react-bootstrap";
import MissionStatement from "../mission/MissionStatement";
import "./Hero.scss";

const Hero = () => {
  return (
    <section className="hero">
      <Container fluid={true} className="p-0 m-0">
        <div className="bg-video">
          <video className="bg-video__content" playsInline autoPlay loop muted>
            <source src={video1} type="video/mp4" />
            <source src={video2} type="video/webm" />
          </video>
        </div>
        <MissionStatement />
      </Container>
    </section>
  );
};

export default Hero;
