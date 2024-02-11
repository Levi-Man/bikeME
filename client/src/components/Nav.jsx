// Bringing in the required import from 'react-router-dom'
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import logo from "../assets/site-logo.png";
import { Image, Button, Container, Nav, Navbar, NavDropdown, Dropdown } from 'react-bootstrap';



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
                    <Nav.Link as={HashLink} to="/#homePageTop" eventKey="/#homePageTop">Home</Nav.Link>
                    <Nav.Link as={HashLink} to="/#aboutUsSection" eventKey="/#aboutUsSection">About Us</Nav.Link>
                    <NavDropdown
                        title="Bikes"
                        id="basic-nav-dropdown"
                        align={`end`}
                    >
                        <NavDropdown.Item as={Link} to="/bikes" eventKey="/bikes">
                            All Bikes
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <Dropdown.Header>by Category:</Dropdown.Header>
                        <NavDropdown.Item as={HashLink} to="/bikes#sportBikes" eventKey="/bikes#sportBikes" >
                            Sport
                        </NavDropdown.Item>
                        <NavDropdown.Item as={HashLink} to="/bikes#touringBikes" eventKey="/bikes#touringBikes" >
                            Touring
                        </NavDropdown.Item>
                        <NavDropdown.Item as={HashLink} to="/bikes#adventureBikes" eventKey="/bikes#adventureBikes" >
                            Adventure
                        </NavDropdown.Item>
                        <NavDropdown.Item as={HashLink} to="/bikes#cruiserBikes" eventKey="/bikes#cruiserBikes" >
                            Cruiser
                        </NavDropdown.Item>
                        <NavDropdown.Item as={HashLink} to="/bikes#retroBikes" eventKey="/bikes#retroBikes" >
                            Retro
                        </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link as={Link} to="/login" eventKey="/login">
                        Login
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}
