import { Container, Row, Col } from "react-bootstrap";
import Audio from "../sections/audio/Audio";
import Video from "../sections/video/Video";
import Streaming from "../sections/streaming/Streaming";
import "./Services.scss";
const Services = () => {
  return (
    <Container className="services p-0" fluid={true}>
      <Row className="w-100 m-0 p-0">
        <Col
          xs={12}
          lg={6}
          xl={{ span: 4, offset: 12 }}
          className="my-2 mx-0 p-0"
        >
          <Streaming />
        </Col>
        <Col xs={12} lg={6} xl={4} className="my-2 mx-0 p-0">
          <Audio />
        </Col>
        <Col xs={12} lg={6} xl={4} className="my-2 mx-0 p-0 mx-lg-auto mx-xl-0">
          <Video />
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
