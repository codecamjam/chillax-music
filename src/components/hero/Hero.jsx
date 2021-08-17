import video1 from "../../assets/beach.mp4";
import video2 from "../../assets/beach.webm";

const Hero = () => {
  return (
    <div className="bg-video">
      <video className="bg-video__content" playsInline autoPlay loop muted>
        <source src={video1} type="video/mp4" />
        <source src={video2} type="video/webm" />
      </video>
    </div>
  );
};

export default Hero;
