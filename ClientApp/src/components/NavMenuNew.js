import { React, useState} from 'react';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import { useAuth0 } from '@auth0/auth0-react';
import { Button, Offcanvas, Form, Nav, Navbar, Stack, Image } from 'react-bootstrap';

const NavMenuNew = () => {
    const { loginWithRedirect, logout } = useAuth0();
    const Authenticated = useAuth0().isAuthenticated;
    const Loading = useAuth0().isLoading;
    const [Input, setInput] = useState('');

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
    const purchasesButton = () => {
        if (Loading === true && Authenticated === false) {
            return (
                null
            )
        }
        if (Authenticated === true && Loading === false) {
            return (
                <Nav.Link as={Link} className="white-text" to="/Purchases">Purchases</Nav.Link>
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
                        <Offcanvas.Body className='no-padding' style={{ overflow: "hidden" }}>
                            
                            <Stack gap={12} className='col-md-5 mx-auto hidden '>
                                <Nav className="justify-content-center flex-grow-1 pe-3 nav1 px-2 fix-width">
                                    <Nav.Item className='md-4 col'>
                                        <Nav.Link as={Link} to="/"> <Image fluid='true' src='https://i.imgur.com/RD9yh7u.png' aria-label='logo' style={{ width: "300px", marginTop: "30px" }} /></Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className='md-4 col justify-content-center' style={{ display: "flex" }}>
                                        <Stack direction='horizontal' gap={3} style={{ width: "300px" }}>
                                            <Form.Control aria-label='search' type="input" placeholder="Search" value={Input} onInput={e => setInput(e.target.value)}/>
                                            <Button className="btn-colors" as={Link} to={
                                {
                                    pathname: '/Search?'+Input,
                                }
                            }>Search</Button>
                                        </Stack>
                                    </Nav.Item>
                                    <Nav.Item className='md-4 col justify-content-end' style={{ display: "flex", marginBottom: "30px" }} gap={2}>
                                        <Stack direction='horizontal'>
                                            {purchasesButton()}
                                            {profileButton()}
                                            {loginButton()}
                                            {logoutButton()}
                                        </Stack>
                                    </Nav.Item>
                                </Nav>
                                <Nav className="justify-content-center flex-grow-1 pe-3 nav2">
                                    <Nav.Item>
                                        <Nav.Link as={Link} className="text-dark nav-text" to="/" >Home</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link as={Link} className="text-dark nav-text" to="/NewInStock" state={{ type: "New In Stock" }}>New In Stock</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link as={Link} className="text-dark nav-text" to="/Topsellers" state={{ type: "Topsellers" }}>Topsellers</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link as={Link} className="text-dark nav-text" to="/Vinyl" state={{ type: "LP" }}>Vinyl</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link as={Link} className="text-dark nav-text" to="/CD" state={{ type: "CD" }}>CDs</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link as={Link} className="text-dark nav-text" to="/Cassette" state={{ type: "Cassette" }}>Cassette</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Stack>
                            
                            <Stack gap={12} className='col-md-5 mx-auto nav3'>
                                <Nav className="justify-content-center flex-grow-1 pe-3 nav2" style={{ height: "100vh" }}>
                                    <Nav.Item className='justify-content-center flex'>
                                        <Nav.Link as={Link} className="text-dark nav-text space-nav-link" to="/" >Home</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className='justify-content-center flex'>
                                        <Nav.Link as={Link} className="text-dark nav-text space-nav-link" to="/NewInStock" state={{ type: "New In Stock" }}>New In Stock</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className='justify-content-center flex'>
                                        <Nav.Link as={Link} className="text-dark nav-text space-nav-link" to="/Topsellers" state={{ type: "Topsellers" }}>Topsellers</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className='justify-content-center flex'>
                                        <Nav.Link as={Link} className="text-dark nav-text space-nav-link" to="/Vinyl" state={{ type: "LP" }}>Vinyl</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className='justify-content-center flex'>
                                        <Nav.Link as={Link} className="text-dark nav-text space-nav-link" to="/CD" state={{ type: "CD" }}>CDs</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className='justify-content-center flex'>
                                        <Nav.Link as={Link} className="text-dark nav-text space-nav-link" to="/Cassette" state={{ type: "Cassette" }}>Cassette</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Stack>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>

                </Navbar>
            ))}
        </header>
    )
}

export default NavMenuNew