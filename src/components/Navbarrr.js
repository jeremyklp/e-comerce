import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Navbarrr = () => {
    return (
        <div>

            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/#/">E-comerce</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/#/login">Login</Nav.Link>
                            <Nav.Link href="/#/purchase">Purchases</Nav.Link>
                            <Nav.Link role="button">carrito</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navbarrr;