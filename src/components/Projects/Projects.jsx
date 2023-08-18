import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./Projects.css";

function Projects() {
  return (
    <div className="section-background project-section">
      <Container style={{ maxWidth: "80%" }}>
        <Row>
          <Col>
            <h6 className="text-primary mt-5">
              <b>PORTFOLIO</b>
            </h6>
            <h5 className="mt-4 mb-5">
              Each project is a unique piece of development 🧩
            </h5>
          </Col>
        </Row>
        {[1, 2].map((item, i) => (
          <Row
            className="mb-3 shadow p-4 rounded-4 placeholder-glow d-flex justify-content-center"
            key={i}
          >
            <Col md={12} lg={6} className="projects">
              <div
                className="placeholder rounded  pro-img"
                style={{ height: "18rem", width: "90%" }}
              >
                Image
              </div>
            </Col>
            <Col
              md={12}
              lg={6}
              className="d-flex justify-content-center projects"
            >
              <div className="text-center">
                <h6 className="placeholder">Lorem Ipsum</h6>
                <p className="placeholder mt-1">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <div className="d-flex justify-content-center">
                  <div className="placeholder me-4">Reactjs</div>
                  <div className="placeholder">Nodejs</div>
                </div>
                <div className="d-flex justify-content-evenly align-items-center mt-4">
                  <div className="fs-5">
                    <span>Code</span>
                    <a rel="noreferrer" href="/">
                      <i class="bi bi-github ms-1 fs-3" />
                    </a>
                  </div>
                  <div className="fs-5">
                    <span>Live Demo</span>
                    <a rel="noreferrer" href="/">
                      <i class="bi bi-box-arrow-up-right fs-3 ms-1"></i>
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        ))}
      </Container>
    </div>
  );
}

export default Projects;
