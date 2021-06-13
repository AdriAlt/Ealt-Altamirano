import React from 'react';
import { Link } from 'react-router-dom';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import CartWidget from './../CartWidget/CartWidget';
import logoE from '../../assets/logoE.jpeg';

const NavBar = () => {

  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Link to={'/'}>
        <Navbar.Brand><img src={logoE} alt="logo" title="VOLVER AL HOME" width="50" height="50" />
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Categorias" id="collasible-nav-dropdown">
            <NavDropdown.Item as={Link} to={`/category/mesas`}>
              Mesas
              </NavDropdown.Item>
            <NavDropdown.Item as={Link} to={`/category/banquetas`}>
              Banquetas
              </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={Link} to={`/category/ARQAlt`}>
              ARQAlt
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <CartWidget />
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;