import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

export default class GuestUser extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            home: 'nav-default',
            about: 'nav-default',
            login: 'nav-default',
            signup: 'nav-default',
            show: false
        }
    }

    componentDidMount(){
        let pth = window.location.pathname
        let dflt = pth === "/" || pth === '/rdt' || pth === '/wh' || pth === '/jb' || pth === '/mp' || pth === '/profile' ? "home" : window.location.pathname.slice(1)
        this.setState({[dflt]: 'nav-selected', selected: dflt})
    }

    onClick = (propName) => () => {
        if (this.state.selected !== propName){
            let prev = this.state.selected
            this.setState({[propName]: 'nav-selected', [prev]: 'nav-default', selected: propName})
        }
    }

    handleShow = () => {
        this.setState({show: !this.state.show})
    }

    render() {
        return (
            <Navbar className="color-nav" collapseOnSelect expand='lg'>
                <Navbar.Brand>
                    <Nav.Link as={Link} onClick = {this.onClick('home')} className= {this.state.home} to="/">Home</Nav.Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Nav.Link as={Link} onClick = {this.onClick('about')} className = {this.state.about} to="/about">About</Nav.Link>
                    </Nav>
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} onClick= {this.onClick('signup')} className = {this.state.signup} to="/signup">Sign up</Nav.Link>
                        <Nav.Link as={Link} onClick= {this.onClick('login')} className = {this.state.login} to="/login">Log in</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
