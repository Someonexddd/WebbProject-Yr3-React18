import React from 'react';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import { useAuth0 } from '@auth0/auth0-react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl';
import Offcanvas from 'react-bootstrap/Offcanvas'
import Button from 'react-bootstrap/Button'


const NavMenuNew = () => {
    const { loginWithRedirect, logout } = useAuth0();


    return (
        <header>

            {['lg'].map((expand) => (
                <Navbar key={expand} bg="light" expand={expand} className="mb-3">
                    <Container fluid>
                        <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    Offcanvas
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Nav.Item>
                                        <Nav.Link tag={Link} className="text-dark" href="/">Home</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link tag={Link} className="text-dark" href="/counter">Counter</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link tag={Link} className="text-dark" href="/fetch-data">Fetch Weather data</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link tag={Link} className="text-dark" href="/ProductList">ProductList</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link tag={Link} className="text-dark" href="/Details">Details</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link tag={Link} className="text-dark" href="/Profile">Profile</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Link tag={Link} className="text-dark" onClick={() => loginWithRedirect()}>Login</Nav.Link>
                                    <Nav.Item>
                                        <Nav.Link tag={Link} className="text-dark" onClick={() => logout()}>Logout</Nav.Link>
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
                                <Form className="d-flex">
                                    <FormControl
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        aria-label="Search"
                                    />
                                    <Button variant="outline-success">Search</Button>
                                </Form>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </header>
    )
}

export default NavMenuNew