import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Container, Nav} from 'react-bootstrap';
import lion from '../images/images.jpeg';
import tiger from '../images/tiger.png';

export default class MyNav extends Component {
  render() {
    return (
      <Navbar bg="dark" expand="lg" sticky="top" variant="dark">
        <Container>
          <Navbar.Brand href='/home'>
            <img src={tiger} width="auto" height="100"></img>
          </Navbar.Brand>
          <Navbar.Brand className='title'>
            <h2 color='rgb(234, 114, 34)'>
              Life of Pie
            </h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className='homeText' href="/home">
                <p className='homeLink' color='rgb(234, 114, 34)'>
                  Home
                </p>
                </Nav.Link>
              <Nav.Link href="/products">
              <p color='rgb(234, 114, 34)'>
                  Products
                </p>
              </Nav.Link>
              <Nav.Link href="/cart">
              <p className='homeLink' color='rgb(234, 114, 34)'>
                  Shopping Cart
                </p>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
}
