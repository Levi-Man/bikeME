// Bringing in the required import from 'react-router-dom'
import { Link } from 'react-router-dom';
// import Navbar from './UI/Navbar';

import logo from "../assets/site-logo.png";

import { Image, Button, Container, Form, Nav, Navbar, NavDropdown, Dropdown } from 'react-bootstrap';

export default function Navigation() {


    return (

        <Navbar sticky='top' bg="dark" data-bs-theme="dark">
            <Container >
                <Navbar.Brand >
                    <Image className='logo' src={logo} width="300" height="50" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Nav
                    className="justify-content-end"
                    style={{ maxHeight: '100px' }}
                    variant='underline'
                    defaultActiveKey="/"
                >
                    <Nav.Link as={Link} to="/" eventKey="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/portfolio" eventKey="/portfolio">About Us</Nav.Link>
                    <NavDropdown
                        title="Bikes"
                        id="basic-nav-dropdown"
                        align={`end`}
                    >
                        <NavDropdown.Item as={Link} to="/portfolio" eventKey="/portfolio">
                            All Bikes
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <Dropdown.Header>by Category:</Dropdown.Header>
                        <NavDropdown.Item as={Link} to="/portfolio" eventKey="/portfolio">
                            Sport
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/contact" eventKey="/contact">
                            Touring
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/contact" eventKey="/contact">
                            Adventure
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/contact" eventKey="/contact">
                            Cruiser
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/contact" eventKey="/contact">
                            Retro
                        </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link as={Link} to="/resume" eventKey="/resume">
                        Login
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}
