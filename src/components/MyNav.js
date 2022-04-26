import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Container, Nav} from 'react-bootstrap';
import lion from '../images/images.jpeg';
import tiger from '../images/tiger.png';

export default class MyNav extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg" sticky="top" variant="dark">
        <Container>
          <Navbar.Brand href='#home'>
            <img src={tiger} width="auto" height="100"></img>
          </Navbar.Brand>
          <Navbar.Brand>
            Life of Pie
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#products">Products</Nav.Link>
              <Nav.Link href="#cart">Shopping Cart</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
}
