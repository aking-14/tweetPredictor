import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

export class Header extends Component {

    render (){
           
        return (
            <Navbar className="color-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/rdt">Donald Trump</Nav.Link>
                    <Nav.Link as={Link} to="/wh">White House</Nav.Link>
                    <Nav.Link as={Link} to="/jb">Joe Biden</Nav.Link>
                    <Nav.Link as={Link} to="/mp">Mike Pence</Nav.Link>
                </Nav>
            </Navbar>
        )
    }
}

export default Header;