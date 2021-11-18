import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logout } = useAuth();
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand href="/home" className="text-warning fw-bold fs-3 p-2">BikeSmith</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link className="text-warning" as={HashLink} to="/home">Home</Nav.Link>
                        <Nav.Link className="text-warning" as={HashLink} to="/services">Explore</Nav.Link>
                        {user.email && <Nav.Link className="text-warning" as={HashLink} to="/addService">Add Your Service</Nav.Link>}
                        {user.email && <Nav.Link className="text-warning" as={HashLink} to="/manageServices">Manage Services</Nav.Link>}
                        {user.email && <Nav.Link className="text-warning" as={HashLink} to="/orders">Orders</Nav.Link>}
                        {user?.email ?
                            <Button className="text-warning btn btn-warning" onClick={logout} variant="light"> Logout </Button> :
                            <Nav.Link className="text-warning" as={Link} to="/login">Login</Nav.Link>
                        }
                        <Navbar.Text className="text-warning">
                             Signed in as: <a href="/home">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;

