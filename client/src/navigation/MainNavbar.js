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
          <Navbar.Brand href="home">HOME</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="signup">SIGNUP</Nav.Link>
            <Nav.Link href="login">LOGIN</Nav.Link>
            <Nav.Link href="profile">PROFILE</Nav.Link>
            <Nav.Link href="postmuseum">NEW_MUSEUM</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    
    </>
  );
}

export default MainNavbar;