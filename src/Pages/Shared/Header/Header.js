import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logout} = useAuth();
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand href="/home" className="text-warning fw-bold fs-3 p-2">BikeSmith</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home" className="text-warning">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/explore" className="text-warning">Explore</Nav.Link>
                        <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/dashboard">
                        <Button color="inherit">Dashboard</Button>
                        </NavLink>



                        {user?.email ?
                        <Button className="text-warning btn btn-warning" onClick={logout} variant="light"> Logout </Button> :
                        <Nav.Link as={Link} to="/login" className="text-warning">Login</Nav.Link>
                        }

                        <Navbar.Text className="text-warning">
                             {user.email && <a href="/home">Signed In as: {user?.displayName}</a> } 
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;

