import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptopHouse,
  faCalendarAlt,
  faLeaf,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { logout } from "../actions/userActions";

const Header = () => {
  const navDropdownTitle = (name) => {
    return (
      <>
        <FontAwesomeIcon icon={faUserCircle} /> {name}
      </>
    );
  };

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">
            <FontAwesomeIcon icon={faLeaf} /> How Green
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/devices/mydevices">
                <FontAwesomeIcon icon={faLaptopHouse} /> Devices
              </Nav.Link>
              <Nav.Link href="/activity">
                <FontAwesomeIcon icon={faCalendarAlt} /> Activity
              </Nav.Link>
              {userInfo ? (
                <NavDropdown
                  title={navDropdownTitle(userInfo.name)}
                  id="username"
                >
                  <LinkContainer to="/profile">
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <Nav.Link href="/login">
                  <i className="fas fa-user" /> Sign In
                </Nav.Link>
              )}
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title="Admin" id="adminmenu">
                  <LinkContainer to="/admin/userlist">
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
