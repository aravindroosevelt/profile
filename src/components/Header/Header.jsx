import React from "react";
import { Nav, Navbar, Container, Offcanvas } from "react-bootstrap";
import { Link } from "react-scroll";
import "./Header.css";

function Header() {
  const navs = ["Home", "About", "Projects", "Contact"];
  return (
    <>
      <Navbar
        expand={"md"}
        className="bg-body-tertiary  shadow-sm navBar"
        style={{ height: "10%" }}
        collapseOnSelect
        as="nav"
        fixed="top"
      >
        <Container fluid>
          <Navbar.Brand className="name ps-5">Aravind.dev</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-md`}
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`} />
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end align-items-center  flex-grow-1 pe-5 item h-50">
                {navs.map((item, i) => (
                  <Link
                    key={item}
                    to={item}
                    spy={true}
                    smooth={true}
                    offset={item === "Projects" ? 0 : -100}
                    duration={100}
                    activeClass="text-primary"
                    className="fs-6 text-decoration-none ms-2"
                  >
                    {item}
                  </Link>
                ))}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
