import React from "react";

//Import 3rd-party packages
import { Link } from "react-router-dom";
import FontAwesome from 'react-fontawesome';

//Import 3rd-party packages
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import NavbarToggle from "./NavbarToggle.js";

const Navigation = (props) => {
    return (
        <Navbar bg="green" variant="dark" expand="sm" className="navbar">
                <Navbar.Brand href="/home" className="collapsedNav-logo">
                    <img src="/assets/img/harza-tapes-logo.svg" alt="Harza Tapes" />
                </Navbar.Brand>
                {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
                <NavbarToggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to="/home" className="navLinks nav-link">Home</Link> 
                        <Link to="/about-us" className="navLinks nav-link">About Us</Link> 
                        <Link to="/products" className="navLinks nav-link">Products</Link> 
                        <Link to="/location" className="navLinks nav-link">Location</Link> 
                        <Link to="/contact-us" className="navLinks nav-link">Contact Us</Link> 

                        {/* <Nav.Link href="/home" className="navLinks">Home</Nav.Link>
                        <Nav.Link href="/about-us" className="navLinks">About Us</Nav.Link>
                        <Nav.Link href="/products" className="navLinks">Products</Nav.Link>
                        <Nav.Link href="/location" className="navLinks">Location</Nav.Link>
                        <Nav.Link href="/contact-us" className="navLinks">Contact Us</Nav.Link> */}
                    </Nav>
                    <Form inline>
                        <Form.Control type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-light">
                            <FontAwesome name="search" 
                                        className="nav-search-icon" 
                            />
                        </Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
    );
}; //end Navigation()

export default Navigation;