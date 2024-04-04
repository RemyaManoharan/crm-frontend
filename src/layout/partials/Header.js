import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logoImage from "../../assests/img/logo.png";
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <Navbar collapseOnSelect data-bs-theme="dark" bg="info" expand="md">
      <Navbar.Brand>
        <img src={logoImage} alt="logo" width="50px" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/tickets">Tickets</Link>
          <Link to="/dashboard">Logout</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
