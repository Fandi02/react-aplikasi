import React, { Component } from 'react';
import { Row, NavDropdown, Nav, Navbar, Container } from 'react-bootstrap';

export default class NavbarComponent extends Component {
  render() {
    return (
      <div><Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="/">SamSpec</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="About">About</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="Login">Login / Register</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar></div>
    )
  }
}
