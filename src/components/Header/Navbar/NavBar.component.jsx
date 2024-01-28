import { useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-scroll";
import "./NavBar.styles.css";
import NavBarLinks from "./map";
import logo from "./site_logo.png";

const NavBar = () => {
  useEffect(() => {
    console.log(NavBarLinks);
  });

  return (
    <Navbar
      className="navbar-nav-main"
      bg="dark"
      fixed="top"
      variant="dark"
      expand="lg">
      <Container>
        <Navbar.Brand>
          <Link
            spy={true}
            // smooth={true}
            // delay={10}
            offset={-200}
            duration={500}
            to="main">
            <img className="navbar-logo-image" alt="logo" src={logo}></img>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">{NavBarLinks}</Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
