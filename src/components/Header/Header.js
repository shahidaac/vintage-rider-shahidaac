import React from "react";
import logo from "../../logo.svg";
import { Link } from "react-router-dom";
import "./Header.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { useContext } from "react";
import { riderContext } from "../../App";

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(riderContext);

  return (
    <header className="header">
      <Container>
        <Navbar collapseOnSelect expand="lg">
          <Navbar.Brand>
            <img
              src={logo}
              width="35"
              height="35"
              className="d-inline-block align-top"
              alt=""
            />
            <span> Vintage Rider</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Link to="/">Home</Link>
              <Link to="/destination">Destination</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/login">Login</Link>
              <span>{loggedInUser && loggedInUser.name}</span>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  );
};

export default Header;
