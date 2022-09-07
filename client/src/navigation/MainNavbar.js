import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import Button from "@mui/material/Button";
import "./MainNavbar.css";
import { Link } from "@mui/material";

//import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function MainNavbar() {
  return (
    <>

<Navbar bg="danger" variant="light">
        <Container>
          <Navbar.Brand href="home">HOME</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="sinup">SIGNUP</Nav.Link>
            <Nav.Link href="login">LOGIN</Nav.Link>
            <Nav.Link href="profile">PROFILE</Nav.Link>
            <Nav.Link href="postmuseum">NEW_MUSEUM</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {/* <Box sx={{ flexGrow: 5 }}>
        <AppBar position="static" className="link">
          <Toolbar variant="dense" style={{ width: "100px" }}>
            <Typography
              variant="h6"
              color="inherit"
              component="div"
            ></Typography>
            <Link href="home">
              <Button color="inherit">Home </Button>
            </Link>
            <Link href="signup">
              {" "}
              <Button color="inherit">Signup</Button>
            </Link>
            <Link href="login">
              <Button color="inherit">Login</Button>
            </Link>
            <Link href="profile">
              <Button color="inherit">Profile</Button>
            </Link>
            ..
            <Link href="postmuseum">
              <Button color="inherit">NewMuseum</Button>
            </Link>
          </Toolbar>
        </AppBar>
      </Box> */}
    </>
  );
}

export default MainNavbar;