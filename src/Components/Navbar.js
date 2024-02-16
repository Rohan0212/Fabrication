import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';

function NavbarTop() {
  return (
    <>
    <div className="header">
      <Navbar collapseOnSelect expand="md" className="navbar shadow-sm p-1 mb-5 rounded bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="/">Chudasama Industries</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className='nav-items ms-auto ml-md-auto'>
              <Nav.Link href="#about">
                About
              </Nav.Link>
              <Nav.Link href="#services">
                Services
              </Nav.Link>
              <Nav.Link href="#contact">
                Contact us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
    
    </>
  );
}

export default NavbarTop;