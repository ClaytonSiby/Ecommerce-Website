import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signOutUserStart } from './../../redux/Users/user.actions'
import {
  Navbar, Nav, NavDropdown, Container,
} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './styles.scss';

const mapState = ({ user }) => ({
  currentUser: user.currentUser
})

const Header = () => {
  const { currentUser } = useSelector(mapState);
  const dispatch = useDispatch();

  const signOut = () => dispatch(signOutUserStart());

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
              <Link to="/dashboard" className="nav-link">My Account</Link>
              <Nav.Link onClick={() => signOut()}>LOGOUT</Nav.Link>
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
