import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">How Green</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/devices">
                <i className="fas fa-laptop-house"></i> Devices
              </Nav.Link>
              <Nav.Link href="/activity">
                <i className="far fa-calendar-alt"></i> Activity
              </Nav.Link>
              <Nav.Link href="/profile">
                <i className="fas fa-user" /> Profile
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
