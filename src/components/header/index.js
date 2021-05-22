import React from 'react';
import {
  Navbar, Nav, NavDropdown, Container,
} from 'react-bootstrap';
import { auth } from '../../Firebase/utils';
import './styles.scss';

const Header = (props) => {
  const { currentUser } = props;
  return (
    <Container className="p-0">
      <Navbar
        sticky="top"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Navbar.Brand href="/">Faith&amp;Trust</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {currentUser && (
            <Nav className="callToActions">
              <Nav.Link onClick={() => auth.signOut()}>LOGOUT</Nav.Link>
            </Nav>
          )}
          {!currentUser && (
            <Nav className="callToActions">
              <Nav.Link href="/registration">REGISTER</Nav.Link>
              <Nav.Link href="/login">LOGIN</Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

Header.defaultProps = {
  currentUser: null,
};

export default Header;
