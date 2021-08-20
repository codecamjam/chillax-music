import { Container, Row, Col } from "react-bootstrap";
import Audio from "../sections/audio/Audio";
import Video from "../sections/video/Video";
import Streaming from "../sections/streaming/Streaming";
import "./Services.scss";
const Services = () => {
  return (
    <Container className="services p-0 m-0" fluid="lg">
      <Row className="">
        <Col xs={12} md={4} className="my-2 mx-0 p-0">
          <Streaming />
        </Col>
        <Col xs={12} md={4} className="my-2 mx-0 p-0">
          <Audio />
        </Col>
        <Col xs={12} md={4} className="my-2 mx-0 p-0">
          <Video />
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
