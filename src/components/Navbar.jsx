import React, { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/logo.png";
import {
  ChatSquareHeartFill,
  HousesFill,
  StarHalf,
} from "react-bootstrap-icons";

function AppNavbar() {
  const [expanded, setExpanded] = useState(false);

  const toggleNav = () => {
    setExpanded(!expanded);
  };
  return (
    <Navbar className="navbar" expand="lg" bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand href="/">
          <img
            alt=""
            src={logo}
            width="40"
            height="40"
            className="d-inline-block align-top mx-1"
          />
          Movies.com
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleNav} />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className={expanded ? "show" : ""}
        >
          <Nav className="mr-auto">
            <Nav.Link href="/">
              <HousesFill
                width={30}
                height={30}
                className="d-none d-lg-inline"
              />{" "}
              Home
            </Nav.Link>
            <Nav.Link href="/popular">
              <ChatSquareHeartFill
                width={30}
                height={30}
                className="d-none d-lg-inline"
              />{" "}
              Popular
            </Nav.Link>
            <Nav.Link href="/toprated">
              <StarHalf width={30} height={30} className="d-none d-lg-inline" />
              Top Rated
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
