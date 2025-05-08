import React from "react";
import { Navbar,Nav,Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navegacion=()=>{
    return(
        <Navbar bg="dark" variant="dark" expand = 'lg'>
            <Container>
                <Navbar.Brand as={Link} to="/">Todo por Dos Pesos</Navbar.Brand>
                <Navbar.Collapse>
                    <Nav>
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>    
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

            </Container>

        </Navbar>



    );

}