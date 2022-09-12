import React from "react";

import "./MainNavbar.css";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function MainNavbar() {
  return (
    <>

<Navbar bg="danger" variant="light">
        <Container>
          <Navbar.Brand href="home">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="signup">SignUp</Nav.Link>
            <Nav.Link href="login">Login</Nav.Link>
            <Nav.Link href="profile">Profile</Nav.Link>
            <Nav.Link href="postmuseum">NewMuseum</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    
    </>
  );
}

export default MainNavbar;