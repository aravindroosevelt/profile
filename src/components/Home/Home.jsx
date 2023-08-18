import React from "react";
import { Row, Col } from "react-bootstrap";
import profile from "../../assets/aravind.jpeg";
import Html from "../../assets/html.png";
import Css from "../../assets/css.jpeg";
import JS from "../../assets/javascript.png";
import react from "../../assets/react.png";
import Nodejs from "../../assets/nodejs.png";
import Mysql from "../../assets/mysql.png";
import Bootstrap from "../../assets/bootstrap.png";
import Graphql from "../../assets/graphql.png";
import { Container } from "react-bootstrap";
import "./Home.css";

function Home() {
  return (
    <Container
      fluid
      className={"section-background d-flex justify-content-center"}
      id="Home"
    >
      <div style={{ maxWidth: "80%", minHeight: "90vh" }}>
        <Row>
          <Col md={12} lg={8} className="text-justify">
            <div>
              <h1 className="title">
                Full-Stack Javascript Developer <span>&#128075;&#127996;</span>
              </h1>
              <p
                className="description mt-5 mt-sm-3"
                style={{ maxWidth: "80%" }}
              >
                Hi, I'm Aravind Kumar. A passionate Full-Stack Javascript
                Developer based in India, Tamilnadu. 📍
              </p>
            </div>
            <div className="mt-5 mt-sm-2">
              <span>
                <a
                  href="https://www.linkedin.com/in/aravind-kumar-34017a1b3/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="bi bi-linkedin" />
                </a>
              </span>
              <span className="ms-3">
                <a
                  href="https://github.com/Aravind934"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="bi bi-github" />
                </a>
              </span>
            </div>
          </Col>
          <Col md={12} lg={4} className="d-flex justify-content-center">
            <img
              src={profile}
              alt="profile"
              className="animated-blob"
              loading="lazy"
            />
          </Col>
        </Row>
        <Row className="mt-5  d-flex align-items-center">
          <Col md={12} lg={2}>
            <div className="box">
              <span className="stack">Tech Stack</span>
            </div>
          </Col>
          <Col
            md={12}
            lg={10}
            className="d-flex justify-content-left flex-wrap  align-items-center icon-group"
          >
            <div className="shadow icon">
              <img src={Html} alt="html" className="icImg" />
            </div>
            <div className="shadow  icon">
              <img src={Css} alt="css" className="icImg" />
            </div>
            <div className="shadow  icon">
              <img src={Bootstrap} alt="css" className="icImg img" />
            </div>
            <div className="shadow  icon">
              <img src={JS} alt="css" className="icImg" />
            </div>
            <div className="shadow  icon">
              <img src={react} alt="css" className="icImg img" />
            </div>
            <div className="shadow icon">
              <img src={Nodejs} alt="html" className="icImg" />
            </div>
            <div className="shadow  icon">
              <img src={Mysql} alt="css" className="icImg" />
            </div>
            <div className="shadow  icon">
              <img src={Graphql} alt="css" className="icImg" />
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Home;
