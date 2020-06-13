import React from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar { background-color: #222; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #9FFFCB;
    &:hover { color: white;
    cursor:pointer; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #9FFFCB;
    &:hover { color: white; cursor:pointer;}
  }
`;

const NavigationBar = ({ onRouteChange, isLoggedIn }) => {
  if (isLoggedIn) {
    return(
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand  onClick={() => onRouteChange('home')}>Paxata</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item onClick={() => onRouteChange('logout')}>Log Out</Nav.Item> 
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
  );
}
else {
return(
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand>Paxata</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);
}
}
export default NavigationBar;