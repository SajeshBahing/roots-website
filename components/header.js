import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import React from 'react';
import Link from 'next/link';

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
                <Link href="/about">
                  <a className={currentPage === 'about' ? 'active nav-link': 'nav-link'} >About us</a>
                </Link>
                <Link href="/help">
                  <a className={currentPage === 'help' ? 'active nav-link': 'nav-link'} >Help</a>
                </Link>
              </Nav>

              <Nav>
                  <Nav.Link href="#" className="create-opportunities">Create opportunities</Nav.Link>
                
                
                  <Nav.Link href="#" className="login-button">Login</Nav.Link>
                
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </header>

      <section className="banner"></section>
    </div>
  );
}