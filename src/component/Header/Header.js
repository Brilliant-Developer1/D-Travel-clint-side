import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import useAuth from '../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';
import { useParams } from 'react-router';


const Header = () => {
    
    const {user, logout} = useAuth();
    
    return (
        <div>
        <Navbar fixed="top" collapseOnSelect expand="lg" bg="warning" variant="light">
        <Container>
        <Navbar.Brand as = { HashLink } to="/home#home">Dream-Travel <small>Agency</small> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as = { HashLink } to="/home#home">Home</Nav.Link>
            <Nav.Link as = { HashLink } to="/tourPackages">Tour Packages</Nav.Link>
            <Nav.Link as = { HashLink } to="/about">About Us</Nav.Link>
            
          </Nav>
          <Nav>
          { user?.email ?
            <Navbar.Collapse className="justify-content-end">
            
          <Navbar.Text>
            Signed in as: <a href="#user">{user.displayName}</a>
          </Navbar.Text>
          <Nav>
        <NavDropdown
          id="nav-dropdown-dark-example"
          title="User"
          menuVariant="light"
        >
          <NavDropdown.Item as = { HashLink } to={`/myorders/${user.email}`}>My Orders</NavDropdown.Item>
          <NavDropdown.Item as = { HashLink } to="/manageOrders#manageOrders">Manage All Orders</NavDropdown.Item>
          <NavDropdown.Item as = { HashLink } to="/addPackage">Add A New Package</NavDropdown.Item>
        </NavDropdown>
      </Nav>
            <Button onClick={logout} variant="warning">Logout</Button>
            </Navbar.Collapse>
            :
            <Nav.Link as = { HashLink } to="/login#login">Login</Nav.Link>}
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
        </div>
    );
};

export default Header;