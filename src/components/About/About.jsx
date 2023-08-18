import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AboutPic from "../../assets/about.webp";
import "./About.css";

function About() {
  return (
    <Container style={{ height: "80vh", width: "100vw" }} id="About">
      <Row className="d-flex justify-content-center align-items-center h-100 about">
        <Col lg={12} xl={5} className="d-flex justify-content-center">
          <img
            src={AboutPic}
            alt="about"
            loading="lazy"
            className="img-thumbnail h-auto w-100 rounded-4 aboutpic"
          />
        </Col>
        <Col
          lg={12}
          xl={7}
          style={{ maxWidth: "40%" }}
          className="text-justify  about-section"
        >
          <h6 className="text-primary">
            <b>ABOUT ME</b>
          </h6>
          <h5 className="mt-4">
            A dedicated Full-stack Developer based in India, Tamilnadu 📍
          </h5>
          <p className="text-secondary mt-3">
            Experienced Software Developer | Fullstack Enthusiast skilled in
            Java, JavaScript, Node.js, React.js, and GraphQL. I excel in
            crafting seamless user experiences, optimizing databases (MySQL,
            MongoDB), and building robust backend systems with Node.js. With a
            knack for problem-solving and collaboration, I contribute to
            impactful projects, ensuring a perfect balance of aesthetics and
            functionality. Let's connect and innovate together!
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
