import React from "react";
import { Nav, Navbar, Container, Offcanvas } from "react-bootstrap";
import "./Header.css";

function Header() {
  return (
    <>
      <Navbar
        expand={"md"}
        className="bg-body-tertiary  shadow-sm navBar"
        style={{ height: "10%" }}
      >
        <Container fluid>
          <Navbar.Brand href="#" className="name ps-5">
            Aravind.dev
          </Navbar.Brand>
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
                <Nav.Link href="#Home">Home</Nav.Link>
                <Nav.Link href="#About">About</Nav.Link>
                <Nav.Link href="#Projects">Projects</Nav.Link>
                <Nav.Link href="#Contact">Contact</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
