import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import React from 'react';

export default function Header (props) {

  const currentPage = typeof props.currentPage !=='undefined' ? props.currentPage : '';

  return (
    <div className="main-header">
      <header className="roots-header">
        <Navbar bg="dark" className="navbar-dark" expand="lg">
          <div className="container-fluid">
            <Navbar.Brand href="/">
              <img alt="Logo Roots" src="images/favicon.svg" />
              <span>ROOTS</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="navbarSupportedContent">
              <Nav className="mr-auto">
                <Nav.Link href="/">Your create</Nav.Link>
                <Nav.Link href="/about" className={currentPage === 'about' ? 'active': ''} >About us</Nav.Link>
                <Nav.Link href="/help" className={currentPage === 'help' ? 'active': ''} >Help</Nav.Link>
              </Nav>

              <Nav>
                <Nav.Item>
                  <Nav.Link href="#" className="create-opportunities">Create opportunities</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#" className="login-button">Login</Nav.Link>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </header>

      <section className="banner"></section>
    </div>
  );
}