import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

export class Header extends Component {

    render (){
           
        return (
            <Navbar bg="light">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/rdt">RDT</Nav.Link>
                    <Nav.Link as={Link} to="/wh">Whitehouse</Nav.Link>
                    <Nav.Link as={Link} to="/potus">Potus</Nav.Link>
                </Nav>
            </Navbar>
        )
    }
}

export default Header;