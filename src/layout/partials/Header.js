import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <Navbar>
        <Navbar.Brand>
            logo
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav'/>
        <Navbar.Collapse id='basic-navbar-nav'>
            <Nav>
            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
            <Nav.Link href="/ticket">Tickets</Nav.Link>
            <Nav.Link href="/dashboard">logout</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
