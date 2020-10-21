import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Navbar, Nav, Button, Modal, NavDropdown } from 'react-bootstrap';
import profilePic from '../../images/americanFlag.jpg'

export class ActiveUser extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            rdt: 'nav-default',
            wh: 'nav-default',
            jb: 'nav-default',
            mp: 'nav-default',
            hm: 'nav-default',
            show: false
        }
    }

    componentDidMount(){
        let dflt = window.location.pathname === "/" ? "hm" : window.location.pathname.slice(1)
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

    logOutFunc = async () => {
        try{
            let response = await fetch('/logout', {credentials: 'include'})
            if (!response.ok){
                throw new Error(`HTTP Error! Status ${response.status}`)
            }else{
                this.props.userLogout({'login': false, 'userName': ''})
                this.props.history.push("/")
            }
        }catch(e){
            console.log(e)
        }
    }

    render() {
        return (
            <Navbar className="color-nav" collapseOnSelect expand='lg'>
                <Navbar.Brand>
                    {/*<Nav.Link href="/" onClick = {this.onClick('hm')} className= {this.state.hm} >Tweet Predictor</Nav.Link> reloads on each click (mounts and unmounts) method below does not*/}
                    <Nav.Link as={Link} onClick = {this.onClick('hm')} className= {this.state.hm} to="/">Tweet Predictor</Nav.Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Nav.Link as={Link} onClick = {this.onClick('rdt')} className = {this.state.rdt} to="/rdt">Donald Trump</Nav.Link>
                        <Nav.Link as={Link} onClick = {this.onClick('wh')} className = {this.state.wh} to="/wh">White House</Nav.Link>
                        <Nav.Link as={Link} onClick = {this.onClick('jb')} className = {this.state.jb} to="/jb">Joe Biden</Nav.Link>
                        <Nav.Link as={Link} onClick = {this.onClick('mp')} className = {this.state.mp} to="/mp">Mike Pence</Nav.Link>
                        
                    </Nav>
                    {/*<Button variant="link" onClick= {this.handleShow} className="ml-auto">Help</Button>*/}
                    <Nav className="ml-auto">
                        <NavDropdown id="basic-nav-dropdown" title={<img className="imgProfile" src={profilePic} alt="Profile Pic"/>}>
                            <NavDropdown.Item>Signed in as <b>{this.props.userName}</b></NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item>Profile</NavDropdown.Item>
                            <NavDropdown.Item>
                                <Button variant="link" onClick= {this.handleShow}>Help</Button>
                            </NavDropdown.Item>
                            <NavDropdown.Item><Button variant="link" onClick = {this.logOutFunc}>Log Out</Button></NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Modal show={this.state.show} onHide={this.handleShow}>
                        <Modal.Header closeButton>
                            <Modal.Title>
                                Help Page
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div style={{textAlign: 'center'}}>Tweet Predictor is a web app that tries to <b>correctly</b> predict the tweet count each week for four tweet markets:</div>
                            <ul style={{textAlign: 'center'}}>
                                <li style={{listStyle: 'none'}}>Donald Trump <i>@realDonaldTrump</i></li>
                                <li style={{listStyle: 'none'}}>White House <i>@WhiteHouse</i></li>
                                <li style={{listStyle: 'none'}}>Joe Biden <i>@JoeBiden</i></li>
                                <li style={{listStyle: 'none'}}>Mike Pence <i>@Mike_Pence</i></li>
                            </ul>
                            <hr />
                            <div>- Graphs visualize tweet counts that have happened within the past week or 24 hours.</div>
                            <div>- Expected tweets remaining are the values that best predict how many tweets the account will have for the rest of the week or day.</div> 
                            <div>- All data is updated every ~20 minutes.</div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleShow}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default withRouter(ActiveUser)
