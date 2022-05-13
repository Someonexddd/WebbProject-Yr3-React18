import React from 'react';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import { useAuth0 } from '@auth0/auth0-react';
import { Col, Row, Button, Offcanvas, Form, NavDropdown, Nav, Navbar, Stack, Image, Container } from 'react-bootstrap';

const NavMenuNew = () => {
    const { loginWithRedirect, logout } = useAuth0();
    const Authenticated = useAuth0().isAuthenticated;
    const Loading = useAuth0().isLoading;

    const loginButton = () => {
        if (Loading === true && Authenticated === false) {
            return (
                <Nav.Link className="white-text" onClick={() => loginWithRedirect()}>Admin Login</Nav.Link>
            )
        }
        if (Authenticated === true && Loading === false) {
            return (
                null
            )
        }
        if (Authenticated === false && Loading === false) {
            return (
                <Nav.Link className="white-text" onClick={() => loginWithRedirect()}>Admin Login</Nav.Link>
            )
        }
    }
    const logoutButton = () => {
        if (Loading === true && Authenticated === false) {
            return (
                null
            )
        }
        if (Authenticated === true && Loading === false) {
            return (
                <Nav.Link className="white-text" onClick={() => logout()}>Logout</Nav.Link>
            )
        }
        if (Authenticated === false && Loading === false) {
            return (
                null
            )
        }
    }
    const profileButton = () => {
        if (Loading === true && Authenticated === false) {
            return (
                null
            )
        }
        if (Authenticated === true && Loading === false) {
            return (
                <Nav.Link as={Link} className="white-text" to="/Profile">Profile</Nav.Link>
            )
        }
        if (Authenticated === false && Loading === false) {
            return (
                null
            )
        }
    }


    return (
        <header>

            {['md'].map((expand) => (
                <Navbar key={expand} expand={expand} className="mb-3 navbar-size ">
                    <Navbar.Toggle className='ms-auto ' aria-controls={`offcanvasNavbar-expand-${expand}`} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-${expand}`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                        placement="end">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>

                                North End Records


                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Stack gap={12} className='col-md-5 mx-auto hidden'>
                                <Nav className="justify-content-center flex-grow-1 pe-3 nav1 px-2">
                                    <Nav.Item className='md-4 col'>
                                        <Nav.Link as={Link} to="/"> <Image fluid='true' src='https://i.imgur.com/RD9yh7u.png' style={{ width: "300px", marginTop: "30px" }} /></Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className='md-4 col justify-content-center' style={{ display: "flex" }}>
                                        <Stack direction='horizontal' gap={3} style={{ width: "300px" }}>
                                            <Form.Control type="input" placeholder="Search" />
                                            <Button variant="search" type="submit">
                                                Search
                                            </Button>
                                        </Stack>
                                    </Nav.Item>
                                    <Nav.Item className='md-4 col justify-content-end' style={{ display: "flex", marginBottom: "30px" }} gap={2}>
                                        <Stack direction='horizontal'>
                                            {profileButton()}
                                            {loginButton()}
                                            {logoutButton()}
                                        </Stack>
                                    </Nav.Item>
                                </Nav>
                                <Nav className="justify-content-center flex-grow-1 pe-3 nav2">
                                    <Nav.Item>
                                        <Nav.Link as={Link} className="text-dark" to="/" >Home</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link as={Link} className="text-dark" to="/ProductList">ProductList</Nav.Link>
                                    </Nav.Item>
                                    <NavDropdown
                                        title="Dropdown"
                                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                                    >
                                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action4">
                                            Another action
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action5">
                                            Something else here
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                            </Stack>
                            <Stack gap={12} className='col-md-5 mx-auto nav3'>
                                test
                            </Stack>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>

                </Navbar>
            ))}
        </header>
    )
}

export default NavMenuNew