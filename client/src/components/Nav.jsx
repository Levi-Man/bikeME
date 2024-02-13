// Bringing in the required import from 'react-router-dom'
import { Link, useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_USER } from '../utils/queries'
import { HashLink } from 'react-router-hash-link';
import Auth from '../utils/auth';

import logo from "../assets/site-logo.png";
import { useRentalContext } from "../utils/GlobalContext";

import { Image, Button, Container, Nav, Navbar, NavDropdown, Dropdown } from 'react-bootstrap';



export default function Navigation() {

    const { user, addUser, removeUser } = useRentalContext();

    const fetchData = async () => {
        if (Auth.loggedIn()) {
            const loggedInUser = Auth.getProfile();


            try {
                const { loading, error, data } = await useQuery(QUERY_SINGLE_USER, {
                    variables: {
                        userId: loggedInUser.data._id
                    }
                });
                addUser(data.user);
                

            } catch (error) {
                console.error("Error fetching data.")
            }

        }
    }

    fetchData();

    const handleLogout = () => {
        removeUser();

        Auth.logout();
    }


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
                    {/* Conditional rendering for login/logout button */}
                    {Auth.loggedIn() ? (
                        <Nav.Link as={Link} to="profile" eventKey="/profile">Profile</Nav.Link>

                    ) : (
                        <Nav.Link ></Nav.Link>
                    )}
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
                    {/* Conditional rendering for login/logout button */}
                    {Auth.loggedIn() ? (
                        <Nav.Link as={Link} to="/" eventKey="/" onClick={handleLogout}>Logout</Nav.Link>

                    ) : (
                        <Nav.Link as={Link} to="/login" eventKey="/login">Login</Nav.Link>
                    )}
                </Nav>
            </Container>
        </Navbar>
    );
}