import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/educata.svg';

function NavBar() {
    return (
        <>
            <Navbar className="bg-primary shadow fixed-top" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img src={logo} alt="educata logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={NavLink} to="/">
                                Home
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/courses">
                                Courses
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/about">
                                About
                            </Nav.Link>
                            <NavDropdown title="Categories" id="basic-nav-dropdown">
                                <NavDropdown.Item as={NavLink} to="/courses/web-development">
                                    Web Development
                                </NavDropdown.Item>
                                <NavDropdown.Item as={NavLink} to="/courses/app-development">
                                    App Development
                                </NavDropdown.Item>
                                <NavDropdown.Item as={NavLink} to="/courses/video-editing">
                                    Video Editing
                                </NavDropdown.Item>
                                <NavDropdown.Item as={NavLink} to="/courses/c++">
                                    C++
                                </NavDropdown.Item>
                                <NavDropdown.Item as={NavLink} to="/courses/dsa">
                                    DSA
                                </NavDropdown.Item>
                                <NavDropdown.Item as={NavLink} to="/courses/graphic-design">
                                    Graphic Design
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;
