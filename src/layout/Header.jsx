import Navlink from "../components/navlink/Navlink";
import { Navbar, Nav, Container } from "react-bootstrap";

import Logo from "../components/logo/Logo";

import "./Header.scss";
const Header = ({ toggle }) => {
  const handleToggle = () => {
    toggle();
  };

  return (
    <header className="header-navbar">
      <Navbar bg="dark" expand="md" className="py-0">
        <Container fluid={true}>
          <Logo />
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={handleToggle}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
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
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
