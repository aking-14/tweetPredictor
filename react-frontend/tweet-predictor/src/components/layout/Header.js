import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

export class Header extends Component {

    render (){
           
        return (
            <Navbar bg="light">
                <Nav className="mr-auto">
                    <Navbar.Brand as={Link} to="/">
                        <img 
                            src="/images/transparent-logo-copy.png"
                            width="30%"
                            height="100%"
                            alt=""
                        />
                    </Navbar.Brand>
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/services">Services</Nav.Link>
                </Nav>
                    {
                        (this.props.activeUser) 
                        ?
                        <Nav>
                            <Nav.Link as={Link} to="/profile">Welcome!</Nav.Link>
                            <Nav.Link as={Link} to="/logout">Log Out</Nav.Link> 
                        </Nav>
                        :
                        <Nav>
                            <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link>
                            <Nav.Link as={Link} to="/login">Log In</Nav.Link> 
                        </Nav>
                    }
            </Navbar>
        )
    }
}

export default Header;