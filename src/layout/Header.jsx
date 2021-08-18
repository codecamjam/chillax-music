import { useState } from "react";
import "./Header.scss";
import { Navbar, Nav, Container } from "react-bootstrap";
import Logo from "../components/logo/Logo";
import Navlink from "../components/navlink/Navlink";

const Header = () => {
  const [navExpanded, setNavExpanded] = useState(false);

  function openNav(expanded) {
    setNavExpanded(expanded);
  }

  function closeNav() {
    setNavExpanded(false);
  }

  return (
    <header className="header-navbar">
      <Navbar
        bg="dark"
        expand="md"
        onToggle={setNavExpanded}
        expanded={navExpanded}
      >
        <Container fluid={true}>
          <Logo />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="">
              <Navlink route="/" text="home" icon="icon-home3" />
              <Navlink
                route="/services"
                text="services"
                icon="icon-equalizer2"
              />
              <Navlink
                route="/contact"
                text="contact"
                icon="icon-address-book"
              />
              <Navlink route="/about" text="about" icon="icon-man" />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
