import React from 'react';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import { useAuth0 } from '@auth0/auth0-react';
import { Row, Col, Button, Offcanvas, Form, NavDropdown, Container, Nav, Navbar } from 'react-bootstrap';

const NavMenuNew = () => {
    const { loginWithRedirect, logout } = useAuth0();
    const Authenticated = useAuth0().isAuthenticated;
    const Loading = useAuth0().isLoading;

    const loginButton = () => {
        if (Loading === true && Authenticated === false) {
            return (
                <Nav.Link className="text-dark" onClick={() => loginWithRedirect()}>Login</Nav.Link>
            )
        }
        if (Authenticated === true && Loading === false) {
            return (
                null
            )
        }
        if (Authenticated === false && Loading === false) {
            return (
                <Nav.Link className="text-dark" onClick={() => loginWithRedirect()}>Login</Nav.Link>
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
                <Nav.Link className="text-dark" onClick={() => logout()}>Logout</Nav.Link>
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
                <Nav.Link as={Link} className="text-dark" to="/Profile">Profile</Nav.Link>
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

            {['lg'].map((expand) => (
                <Navbar key={expand} bg="light" expand={expand} className="mb-3 navbarsize">


                    <Container fluid className='nopadding navbarsize'>

                        <Row style={{ width: "100vw" }}>
                            <Col>
                            <Nav className="justify-content-center flex-grow-1 pe-3">
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>
                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </Form>
                            </Nav>
                            </Col>
                        </Row>

                        <Row style={{ width: "100vw" }}>
                        <Col>
                            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                            <Navbar.Offcanvas
                                id={`offcanvasNavbar-expand-${expand}`}
                                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                                placement="end"
                            >
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                        North End Records
                                    </Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <Nav className="justify-content-center flex-grow-1 pe-3">
                                        <Nav.Item>
                                            <Nav.Link as={Link} className="text-dark" to="/" >Home</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link as={Link} className="text-dark" to="/ProductList">ProductList</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link as={Link} className="text-dark" to="/Details">Details</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            {profileButton()}
                                        </Nav.Item>
                                        <Nav.Item>
                                            {loginButton()}
                                        </Nav.Item>
                                        <Nav.Item>
                                            {logoutButton()}
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
                                </Offcanvas.Body>
                            </Navbar.Offcanvas>
                            </Col>
                        </Row>
                    </Container>
                </Navbar>
            ))}
        </header>
    )
}

export default NavMenuNew