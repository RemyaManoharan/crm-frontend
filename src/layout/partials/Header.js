import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logoImage from "../../assests/img/logo.png";

const Header = () => {
  return (
    <Navbar collapseOnSelect data-bs-theme="dark" bg="info" expand="md">
      <Navbar.Brand>
        <img src={logoImage} alt="logo" width="50px" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="/dashboard">Dashboard</Nav.Link>
          <Nav.Link href="/ticket">Tickets</Nav.Link>
          <Nav.Link href="/dashboard">Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
